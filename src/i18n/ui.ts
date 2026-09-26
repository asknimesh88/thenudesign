import type { Locale } from '../site.config';
import type { RouteKey } from './routes';

// Short interface strings. Page copy (titles, descriptions, body text) lives in
// src/i18n/pages.ts so SEO text for both languages sits side by side.
export const UI = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    languageName: 'English',
    switchTo: 'Suomeksi',
    switchLabel: 'Vaihda kieli suomeksi',
    skip: 'Skip to content',
    menu: 'Menu',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
    } satisfies Record<RouteKey, string>,
    location: 'Tampere, Finland',
    rights: 'All rights reserved.',
    getInTouch: 'Get in touch',
    notFoundTitle: 'Page not found',
    notFoundText: 'The page you were looking for does not exist or has moved.',
    backHome: 'Back to the home page',
  },
  fi: {
    htmlLang: 'fi',
    ogLocale: 'fi_FI',
    languageName: 'Suomi',
    switchTo: 'In English',
    switchLabel: 'Switch language to English',
    skip: 'Siirry sisältöön',
    menu: 'Valikko',
    nav: {
      home: 'Etusivu',
      about: 'Tietoa',
      services: 'Palvelut',
      portfolio: 'Portfolio',
      contact: 'Yhteystiedot',
    } satisfies Record<RouteKey, string>,
    location: 'Tampere, Suomi',
    rights: 'Kaikki oikeudet pidätetään.',
    getInTouch: 'Ota yhteyttä',
    notFoundTitle: 'Sivua ei löytynyt',
    notFoundText: 'Etsimääsi sivua ei ole olemassa tai se on siirretty.',
    backHome: 'Takaisin etusivulle',
  },
} as const satisfies Record<Locale, unknown>;

export function t(locale: Locale) {
  return UI[locale];
}
