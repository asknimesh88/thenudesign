import type { Locale } from '../site.config';

// Every page exists in both languages. Finnish URLs use Finnish words, which helps
// Finnish search results. Adding a page = add a key here + one file per language
// in src/pages/en and src/pages/fi.
export const ROUTES = {
  home: { en: '/en/', fi: '/fi/' },
  about: { en: '/en/about/', fi: '/fi/tietoa/' },
  services: { en: '/en/services/', fi: '/fi/palvelut/' },
  portfolio: { en: '/en/portfolio/', fi: '/fi/portfolio/' },
  contact: { en: '/en/contact/', fi: '/fi/yhteystiedot/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

export const NAV: RouteKey[] = ['home', 'about', 'services', 'portfolio', 'contact'];

export function path(route: RouteKey, locale: Locale): string {
  return ROUTES[route][locale];
}

/** Find which route + locale a URL pathname belongs to. */
export function lookup(pathname: string): { route: RouteKey; locale: Locale } | null {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const [route, byLocale] of Object.entries(ROUTES)) {
    for (const [locale, p] of Object.entries(byLocale)) {
      if (p === normalized) return { route: route as RouteKey, locale: locale as Locale };
    }
  }
  return null;
}
