# Thenu Design – thenudesign.com

Bilingual (English / Finnish) portfolio site for Thenu Design, Tampere, Finland.
Built with [Astro](https://astro.build) as a static site and served by Cloudflare Workers.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321  (language redirect runs in the browser)
npm run preview    # build + run the real Cloudflare Worker locally (wrangler dev)
```

Node 22.12 or newer is required.

## Languages

| English          | Finnish              |
| ---------------- | -------------------- |
| `/en/`           | `/fi/`               |
| `/en/about/`     | `/fi/tietoa/`        |
| `/en/services/`  | `/fi/palvelut/`      |
| `/en/portfolio/` | `/fi/portfolio/`     |
| `/en/contact/`   | `/fi/yhteystiedot/`  |

- The **Suomeksi / In English** button in the header links to the same page in the other
  language and remembers the choice in a `lang` cookie.
- Visiting `/` is handled by `worker/index.js`: saved choice → crawlers get English →
  visitors in Finland get Finnish → browsers set to Finnish get Finnish → otherwise English.
- Every page has `hreflang` alternates, and `sitemap.xml` lists each page with its translation.

Where things live:

- `src/i18n/routes.ts`: URL of every page in both languages.
- `src/i18n/pages.ts`: SEO title, meta description and intro for every page in both languages.
- `src/i18n/ui.ts`: menu labels and other short interface text.
- `src/site.config.ts`: business name, address, email, phone and social links. These values
  are used in the footer, contact page and structured data (schema.org), so keep them identical
  to Google Business Profile and other listings.

## SEO on every page

Title, meta description, canonical URL, `hreflang` (en, fi, x-default), Open Graph and Twitter
cards, geo meta tags for Tampere, and one JSON-LD graph with `ProfessionalService` (Tampere
address, service area), `Person`, `WebSite`, the page type (`AboutPage`, `ContactPage`, …) and
`BreadcrumbList`. `robots.txt` and `sitemap.xml` are generated at build time.

## Photos

1. Put new photos (any size, straight from the camera is fine) in `images/incoming/`.
   Sub-folders are fine, e.g. `images/incoming/2026-photoshoot/`. This folder is not committed.
2. Run `npm run images` (or `npm run images -- --dry-run` to only see the report).
3. The web-ready masters land in `src/assets/photos/` with SEO-friendly file names.
   Commit those.

The script only optimizes images that need it:

- **Already web-ready** (long side at most 2560 px and sensibly compressed): kept
  byte-for-byte. For JPEGs, the camera data (including GPS location) is removed without
  touching the pixels.
- **Oversized, heavy, EXIF-rotated, or PNG/TIFF photos**: re-encoded once at high quality
  (mozjpeg q85, colour profile kept). If that saves less than 10 %, the original is kept.

At build time, `<Photo>` (`src/components/Photo.astro`) turns each master into AVIF and WebP
at several widths, lazy-loaded. `alt` is required and should describe the photo in the page's
language.

```astro
---
import Photo from '../components/Photo.astro';
import hero from '../assets/photos/2026-photoshoot/studio-tampere.jpg';
---
<Photo src={hero} alt="Thenu at work in the Tampere studio" sizes="100vw" priority />
```

## Deploying to Cloudflare

**Option A: Git integration (recommended).** In the Cloudflare dashboard go to
Workers & Pages → Create → Import a repository, pick `asknimesh88/thenudesign`, and use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Every push to the production branch then redeploys. Add `thenudesign.com` under the Worker's
Settings → Domains & Routes once DNS is on Cloudflare.

**Option B: from your machine.** `npx wrangler login`, then `npm run deploy`.

Keep the Worker: the Finland auto-redirect needs `request.cf.country`, which only exists on
Cloudflare.
