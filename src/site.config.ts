// Single source of truth for business details (NAP: name, address, phone).
// These values feed the header/footer, contact page and every JSON-LD schema block,
// so keep them identical on Instagram, Facebook and any future Google Business Profile.

export const SITE = {
  url: 'https://thenudesign.com',
  name: 'Thenu',
  // The brand name used on social media; listed as an alternate name in structured data.
  brand: 'Tikki ja Tyyli by Thenu',
  designer: 'Thenu',
  email: 'dilkienoka@gmail.com',
  phone: '', // international format, e.g. '+358 40 123 4567'. Empty = hidden everywhere.
  businessId: '', // Finnish Y-tunnus, if any
  address: {
    streetAddress: '', // empty = show only the city
    postalCode: '',
    locality: 'Tampere',
    region: 'Pirkanmaa',
    country: 'FI',
  },
  geo: { latitude: 61.4978, longitude: 23.761 }, // Tampere city centre
  areaServed: ['Tampere', 'Pirkanmaa', 'Finland'],
  social: {
    instagram: 'https://www.instagram.com/tikki_ja_tyyli_by_thenu',
    facebook: 'https://www.facebook.com/profile.php?id=61572257350591',
  },
  instagramHandle: '@tikki_ja_tyyli_by_thenu',
  locales: ['en', 'fi'] as const,
  defaultLocale: 'en' as const,
};

export type Locale = (typeof SITE.locales)[number];
