#!/usr/bin/env node
// Prepare photos for the site: optimize only what needs it.
//
//   npm run images                 # process images/incoming → src/assets/photos
//   npm run images -- --dry-run    # just report what would happen
//   npm run images -- --force      # redo files that were already processed
//
// For every image:
//   • Already web-ready (≤ MAX_EDGE px and sensibly compressed)?  → kept byte-for-byte.
//     For JPEGs only the EXIF/XMP block (camera data, GPS location) is removed, which is
//     lossless: the pixels are untouched.
//   • Oversized, heavy, rotated via EXIF, or a PNG/TIFF that is really a photo?
//     → re-encoded once at high quality (mozjpeg q85, colour profile kept).
//       If that doesn't save at least 10 %, the original is kept instead.
//
// The site build then creates AVIF/WebP copies in several widths from these masters
// (see src/components/Photo.astro), so these files are the "originals" of the site.

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const INPUT = path.join(ROOT, 'images/incoming');
const OUTPUT = path.join(ROOT, 'src/assets/photos');

const MAX_EDGE = 2560; // px, long side. Enough for full-screen on 4K/retina.
const JPEG_QUALITY = 85; // visually lossless for photos with mozjpeg
// Bytes per pixel above which a JPEG is considered under-compressed. A well-compressed
// photo at q80–85 is typically 0.15–0.4 B/px; straight-from-camera files are 0.6–1.5.
const JPEG_HEAVY_BPP = 0.55;
const MIN_SAVING = 0.1;

const args = new Set(process.argv.slice(2));
const DRY = args.has('--dry-run');
const FORCE = args.has('--force');

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.avif']);

// ---------------------------------------------------------------------------

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) yield full;
  }
}

/** SEO-friendly file name: "Hääkuvaus Tampere 01.JPG" → "haakuvaus-tampere-01" */
function slug(name) {
  return name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Remove APP1 (EXIF/XMP) segments from a JPEG without touching the image data. */
function stripJpegMetadata(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return buf;
  const parts = [buf.subarray(0, 2)];
  let i = 2;
  while (i + 4 <= buf.length && buf[i] === 0xff) {
    const marker = buf[i + 1];
    if (marker === 0xda) break; // start of scan: rest is image data
    const len = buf.readUInt16BE(i + 2);
    if (marker !== 0xe1) parts.push(buf.subarray(i, i + 2 + len)); // keep all but APP1
    i += 2 + len;
  }
  parts.push(buf.subarray(i));
  return Buffer.concat(parts);
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

async function processFile(file) {
  const rel = path.relative(INPUT, file);
  const dir = path.dirname(rel);
  const base = slug(path.basename(rel, path.extname(rel))) || 'image';

  const input = await readFile(file);
  const meta = await sharp(input).metadata();
  const { width = 0, height = 0, format, hasAlpha, orientation = 1 } = meta;
  const longEdge = Math.max(width, height);
  const bpp = input.length / (width * height || 1);

  const reasons = [];
  if (longEdge > MAX_EDGE) reasons.push(`${width}×${height} > ${MAX_EDGE}px`);
  if (orientation > 1) reasons.push('EXIF rotation');
  if (format === 'jpeg' && bpp > JPEG_HEAVY_BPP) reasons.push(`heavy (${bpp.toFixed(2)} B/px)`);
  if ((format === 'png' && !hasAlpha) || format === 'tiff') reasons.push(`${format} photo → jpeg`);

  // Output format: transparent images stay PNG/WebP; everything else is JPEG.
  const keepsFormat = format === 'webp' || format === 'avif' || (format === 'png' && hasAlpha);
  const outExt = keepsFormat ? (format === 'jpeg' ? 'jpg' : format) : 'jpg';
  const outFile = path.join(OUTPUT, dir, `${base}.${outExt}`);

  if (!FORCE) {
    const existing = await stat(outFile).catch(() => null);
    if (existing) return { rel, action: 'skipped (already processed)', before: input.length, after: existing.size };
  }

  let output = input;
  let action = 'kept as-is';

  if (reasons.length) {
    let pipeline = sharp(input)
      .rotate() // apply EXIF orientation
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
      .keepIccProfile();
    if (outExt === 'jpg') pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    else if (outExt === 'png') pipeline = pipeline.png({ compressionLevel: 9, effort: 10 });
    else if (outExt === 'webp') pipeline = pipeline.webp({ quality: 88, effort: 6 });
    else pipeline = pipeline.avif({ quality: 70 });
    const encoded = await pipeline.toBuffer();

    const mustChange = longEdge > MAX_EDGE || orientation > 1 || outExt !== extOf(format);
    if (mustChange || encoded.length < input.length * (1 - MIN_SAVING)) {
      output = encoded;
      action = `optimized: ${reasons.join(', ')}`;
    } else {
      action = 'kept (re-encoding saved < 10%)';
    }
  }

  if (output === input && format === 'jpeg') {
    const stripped = stripJpegMetadata(input);
    if (stripped.length < input.length) {
      output = stripped;
      action += ', camera data removed (lossless)';
    }
  }

  if (!DRY) {
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, output);
  }
  return { rel, out: path.relative(ROOT, outFile), action, before: input.length, after: output.length };
}

function extOf(format) {
  return format === 'jpeg' ? 'jpg' : format === 'tiff' ? 'tif' : format;
}

// ---------------------------------------------------------------------------

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

for await (const file of walk(INPUT)) {
  try {
    const r = await processFile(file);
    totalBefore += r.before;
    totalAfter += r.after;
    count++;
    console.log(`${r.rel}\n  ${r.action}  ${kb(r.before)} → ${kb(r.after)}${r.out ? `  (${r.out})` : ''}`);
  } catch (err) {
    console.error(`${path.relative(INPUT, file)}\n  ERROR: ${err.message}`);
  }
}

if (!count) {
  console.log(`No images found. Put photos in ${path.relative(ROOT, INPUT)}/ (sub-folders are fine).`);
} else {
  const saved = totalBefore ? (1 - totalAfter / totalBefore) * 100 : 0;
  console.log(
    `\n${count} image(s): ${kb(totalBefore)} → ${kb(totalAfter)} (${saved.toFixed(0)}% smaller)${DRY ? ' [dry run]' : ''}`,
  );
}
