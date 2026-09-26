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
   Give files descriptive names (`thenu-design-red-organza-gown.jpg`), which helps image search.
2. Run `npm run images` (or `npm run images -- --dry-run` to only see the report).
3. The web-ready masters land in `src/assets/photos/`. Commit those.
4. Add each new photo to `src/data/photos.ts` with alt text in English and Finnish and the
   collection it belongs to. The build stops with a clear error if a photo has no alt text.

The script only optimizes images that need it:

- **Already web-ready** (long side at most 2560 px and sensibly compressed): kept
  byte-for-byte. For JPEGs, the camera data (including GPS location) is removed without
  touching the pixels. Use `--max-edge=2880` to keep a slightly larger, already-optimized set as is.
- **Oversized, heavy, EXIF-rotated, or PNG/TIFF photos**: re-encoded once at high quality
  (mozjpeg q85, colour profile kept). If that saves less than 10 %, the original is kept.

At build time, `<Photo>` (`src/components/Photo.astro`) encodes each master as AVIF and WebP
at a fixed set of widths (480–2400 px) plus one JPEG fallback, lazy-loaded. Sizes are shared
between pages, so each is encoded once, and Astro caches them between builds.

```astro
<Photo name="thenu-design-red-organza-gown-puff-sleeves-portrait" locale={locale} width={640} sizes="(min-width: 900px) 40vw, 92vw" />
```

## Content

- `src/i18n/pages.ts`: SEO title, meta description, eyebrow, H1 and intro per page and language.
- `src/i18n/content.ts`: all other page copy (services, FAQ, about story, …) in both languages.
- `src/data/photos.ts`: photo alt texts (both languages) and collections.

## Deploying to Cloudflare

The site works on both Cloudflare **Pages** and Cloudflare **Workers**. The only dynamic
part is the language redirect on `/`, which lives in `worker/locale.js` and is used by
`functions/index.js` (Pages) and `worker/index.js` (Workers).

### Cloudflare Pages

Workers & Pages → your Pages project → Settings → Build:

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | Astro           |
| Build command          | `npm run build` |
| Build output directory | `dist`          |

Under Settings → Variables and Secrets, add `NODE_VERSION` = `22` (for the build).
Then Deployments → retry the latest deployment. Add `thenudesign.com` under Custom domains.

The Pages build log will say the Wrangler configuration file is not valid for Pages and is
skipped. That is expected: `wrangler.jsonc` is only for the Workers option below.

### Cloudflare Workers

Workers & Pages → Create → Workers → Import a repository → `asknimesh88/thenudesign`:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Or from your machine: `npx wrangler login`, then `npm run deploy`.

Either way, the Finland auto-redirect needs `request.cf.country`, which only exists on
Cloudflare; locally the redirect falls back to the browser language.
