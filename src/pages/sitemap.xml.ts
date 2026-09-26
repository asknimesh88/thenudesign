import type { APIRoute } from 'astro';
import { SITE } from '../site.config';
import { ROUTES } from '../i18n/routes';

// Hand-built so each URL lists its translation (xhtml:link hreflang). Astro's sitemap
// integration can only pair translations that share the same slug, and ours differ
// (/en/about/ ↔ /fi/tietoa/).
export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, SITE.url).href;
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = Object.values(ROUTES).flatMap((byLocale) =>
    SITE.locales.map((locale) => {
      const links = SITE.locales
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(byLocale[l])}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/"/>`)
        .join('\n');
      return `  <url>\n    <loc>${abs(byLocale[locale])}</loc>\n    <lastmod>${lastmod}</lastmod>\n${links}\n  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
