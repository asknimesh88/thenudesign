import { SITE, type Locale } from '../site.config';
import { ROUTES, type RouteKey } from '../i18n/routes';
import { UI } from '../i18n/ui';
import { PAGES } from '../i18n/pages';

// JSON-LD builders. Every page emits one @graph containing the business, the person,
// the website, the page itself and its breadcrumbs, all linked by @id.

const abs = (p: string) => new URL(p, SITE.url).href;
const ids = {
  business: `${SITE.url}/#business`,
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
};

function postalAddress() {
  const a = SITE.address;
  return {
    '@type': 'PostalAddress',
    ...(a.streetAddress && { streetAddress: a.streetAddress }),
    ...(a.postalCode && { postalCode: a.postalCode }),
    addressLocality: a.locality,
    addressRegion: a.region,
    addressCountry: a.country,
  };
}

function business(locale: Locale) {
  return {
    '@type': 'ProfessionalService',
    '@id': ids.business,
    name: SITE.name,
    url: abs(ROUTES.home[locale]),
    description: PAGES.home[locale].description,
    email: SITE.email,
    ...(SITE.phone && { telephone: SITE.phone }),
    ...(SITE.businessId && { vatID: SITE.businessId }),
    image: abs('/og-default.jpg'),
    logo: abs('/favicon.svg'),
    address: postalAddress(),
    geo: { '@type': 'GeoCoordinates', ...SITE.geo },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
    founder: { '@id': ids.person },
    knowsLanguage: ['en', 'fi'],
    ...(SITE.social.length && { sameAs: SITE.social }),
  };
}

function person() {
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: SITE.designer,
    jobTitle: 'Designer',
    worksFor: { '@id': ids.business },
    homeLocation: { '@type': 'Place', name: 'Tampere, Finland' },
    address: postalAddress(),
    ...(SITE.social.length && { sameAs: SITE.social }),
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: SITE.url,
    name: SITE.name,
    inLanguage: ['en', 'fi'],
    publisher: { '@id': ids.business },
  };
}

function breadcrumbs(route: RouteKey, locale: Locale) {
  const items = [{ name: UI[locale].nav.home, url: ROUTES.home[locale] }];
  if (route !== 'home') items.push({ name: UI[locale].nav[route], url: ROUTES[route][locale] });
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(ROUTES[route][locale])}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.url),
    })),
  };
}

const PAGE_TYPE: Partial<Record<RouteKey, string>> = {
  about: 'AboutPage',
  contact: 'ContactPage',
  portfolio: 'CollectionPage',
};

export function pageSchema(opts: {
  route: RouteKey;
  locale: Locale;
  title: string;
  description: string;
  image?: string;
  extra?: Record<string, unknown>[];
}) {
  const url = abs(ROUTES[opts.route][opts.locale]);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      business(opts.locale),
      person(),
      website(),
      {
        '@type': PAGE_TYPE[opts.route] ?? 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: opts.title,
        description: opts.description,
        inLanguage: UI[opts.locale].htmlLang,
        isPartOf: { '@id': ids.website },
        about: { '@id': ids.business },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        ...(opts.image && { primaryImageOfPage: { '@type': 'ImageObject', url: abs(opts.image) } }),
      },
      breadcrumbs(opts.route, opts.locale),
      ...(opts.extra ?? []),
    ],
  };
}
