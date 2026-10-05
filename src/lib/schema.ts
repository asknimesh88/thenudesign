import { SITE, type Locale } from '../site.config';
import { ROUTES, type RouteKey } from '../i18n/routes';
import { UI } from '../i18n/ui';
import { PAGES } from '../i18n/pages';
import { CONTENT, type Faq } from '../i18n/content';

// JSON-LD builders. Every page emits one @graph containing the business, the person,
// the website, the page itself and its breadcrumbs, all linked by @id.

export const abs = (p: string) => new URL(p, SITE.url).href;
const ids = {
  business: `${SITE.url}/#business`,
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
};
const sameAs = Object.values(SITE.social);

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

function business(locale: Locale, image?: string) {
  const c = CONTENT[locale];
  return {
    '@type': 'ProfessionalService',
    '@id': ids.business,
    name: SITE.name,
    alternateName: [SITE.brand, 'Tikki ja tyyli Thenu', 'Thenu Design'],
    url: abs(ROUTES.home[locale]),
    description: PAGES.home[locale].description,
    slogan: locale === 'fi' ? 'Tikki ja tyyli' : 'Stitch and style',
    email: SITE.email,
    ...(SITE.phone && { telephone: SITE.phone }),
    ...(SITE.businessId && { vatID: SITE.businessId }),
    ...(image && { image: abs(image) }),
    logo: abs('/favicon.svg'),
    address: postalAddress(),
    geo: { '@type': 'GeoCoordinates', ...SITE.geo },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
    founder: { '@id': ids.person },
    knowsLanguage: ['en', 'fi'],
    knowsAbout: [
      'Fashion design',
      'Custom dresses',
      'Tailoring',
      'Clothing alterations',
      'Upcycling',
      'Sustainable fashion',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: c.servicesHeading,
      itemListElement: c.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.short,
          url: `${abs(ROUTES.services[locale])}#${s.id}`,
        },
      })),
    },
    sameAs,
  };
}

function person(image?: string) {
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: SITE.designer,
    ...(image && { image: abs(image) }),
    jobTitle: 'Fashion Designer',
    description:
      'Fashion designer and tailor in Tampere, Finland, with more than 10 years of experience in fashion design and tailoring.',
    worksFor: { '@id': ids.business },
    homeLocation: { '@type': 'Place', name: 'Tampere, Finland' },
    address: postalAddress(),
    knowsLanguage: ['en', 'fi'],
    sameAs,
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: SITE.url,
    name: SITE.brand,
    alternateName: SITE.name,
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
  personImage?: string;
  extra?: Record<string, unknown>[];
}) {
  const url = abs(ROUTES[opts.route][opts.locale]);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      business(opts.locale, opts.image),
      person(opts.personImage),
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

export function faqSchema(faq: Faq[], pageUrl: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function gallerySchema(opts: {
  id: string;
  name: string;
  description: string;
  images: { url: string; caption: string; width: number; height: number }[];
  photographer?: { name: string; sameAs: string[] };
  makeupArtist?: string;
}) {
  const photographer = opts.photographer && {
    '@type': 'Person',
    '@id': `${SITE.url}/#photographer-${opts.photographer.name.toLowerCase().replace(/[^a-z]+/g, '-')}`,
    name: opts.photographer.name,
    jobTitle: 'Photographer',
    sameAs: opts.photographer.sameAs,
  };
  return {
    '@type': 'ImageGallery',
    '@id': opts.id,
    name: opts.name,
    description: opts.description,
    // Thenu designed the garments shown; the photos themselves are credited below.
    about: { '@id': ids.business },
    ...((photographer || opts.makeupArtist) && {
      contributor: [
        ...(photographer ? [photographer] : []),
        ...(opts.makeupArtist ? [{ '@type': 'Person', name: opts.makeupArtist, jobTitle: 'Makeup Artist' }] : []),
      ],
    }),
    image: opts.images.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: abs(img.url),
      caption: img.caption,
      width: img.width,
      height: img.height,
      ...(photographer && {
        creator: { '@id': photographer['@id'] },
        creditText: `Photo: ${photographer.name}`,
      }),
    })),
  };
}
