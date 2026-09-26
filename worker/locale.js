// Decides which language a visitor to "/" gets. Shared by the Worker
// (worker/index.js, for Cloudflare Workers) and the Pages Function
// (functions/index.js, for Cloudflare Pages).
//
// Order of precedence:
//   1. The visitor's own choice (the `lang` cookie set by the language switch).
//   2. Search-engine crawlers always get English, so indexing is predictable.
//      Both languages are still discovered through hreflang links and the sitemap.
//   3. Visitors located in Finland (Cloudflare geo-IP) get Finnish.
//   4. Browsers whose preferred language is Finnish get Finnish.
//   5. Everyone else gets English.

const LOCALES = ['en', 'fi'];
const DEFAULT_LOCALE = 'en';
const BOT_UA = /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|pagespeed/i;

function cookieLocale(request) {
  const match = (request.headers.get('cookie') || '').match(/(?:^|;\s*)lang=([a-z]{2})/);
  return match && LOCALES.includes(match[1]) ? match[1] : null;
}

export function preferredLocale(request) {
  const chosen = cookieLocale(request);
  if (chosen) return chosen;

  if (BOT_UA.test(request.headers.get('user-agent') || '')) return DEFAULT_LOCALE;

  if (request.cf?.country === 'FI') return 'fi';

  const primary = (request.headers.get('accept-language') || '').split(',')[0].trim().toLowerCase();
  if (primary.startsWith('fi')) return 'fi';

  return DEFAULT_LOCALE;
}

/** 302 from "/" to the visitor's language home page. */
export function redirectToLocale(request) {
  const url = new URL(request.url);
  return new Response(null, {
    status: 302,
    headers: {
      Location: `/${preferredLocale(request)}/${url.search}`,
      // The answer depends on the visitor, so it must never be cached as shared.
      'Cache-Control': 'private, no-store',
      Vary: 'Cookie, Accept-Language',
    },
  });
}
