import { getImage } from 'astro:assets';
import { photo } from '../data/photos';

/** 1200×630 JPEG share image (Open Graph / Twitter) cropped from a site photo. */
export async function ogImage(key: string, position = 'top') {
  const p = photo(key);
  const img = await getImage({ src: p.src, width: 1200, height: 630, fit: 'cover', position, format: 'jpg', quality: 82 });
  return img.src;
}
