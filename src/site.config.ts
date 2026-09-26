// Single source of truth for business details (NAP: name, address, phone).
// These values feed the header/footer, contact page and every JSON-LD schema block,
// so keep them identical to Google Business Profile and other local listings.
//
// TODO(backup): confirm everything marked TODO once the WordPress backup is restored.

export const SITE = {
  url: 'https://thenudesign.com',
  name: 'Thenu Design',
  designer: 'Thenu', // TODO(backup): full name as it should appear publicly
  email: 'hello@thenudesign.com', // TODO(backup)
  phone: '', // TODO(backup): international format, e.g. +358 40 123 4567
  businessId: '', // TODO: Finnish Y-tunnus, if any
  address: {
    streetAddress: '', // leave empty to show only the city
    postalCode: '',
    locality: 'Tampere',
    region: 'Pirkanmaa',
    country: 'FI',
  },
  geo: { latitude: 61.4978, longitude: 23.761 }, // Tampere city centre
  areaServed: ['Tampere', 'Pirkanmaa', 'Helsinki', 'Finland'],
  social: [
    // TODO(backup): e.g. 'https://www.instagram.com/…', 'https://www.linkedin.com/in/…'
  ] as string[],
  locales: ['en', 'fi'] as const,
  defaultLocale: 'en' as const,
};

export type Locale = (typeof SITE.locales)[number];
