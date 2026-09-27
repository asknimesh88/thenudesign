import type { Locale } from '../site.config';
import type { RouteKey } from './routes';

// SEO copy and page heading for every page, in both languages.
// - title: ~50–60 characters, unique per page.
// - description: ~140–160 characters, mentions Tampere where natural.

export interface PageCopy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
}

export const PAGES: Record<RouteKey, Record<Locale, PageCopy>> = {
  home: {
    en: {
      title: 'Thenu – Evening Wear & Custom Dresses in Tampere, Finland',
      description:
        'Discover Evening wear 2026 by Tampere fashion designer Thenu: gowns in organza, satin and tulle. Custom dresses, alterations and upcycling in Tampere.',
      eyebrow: 'New collection · Tampere, Finland',
      h1: 'Evening wear 2026',
      intro:
        'Organza, satin and tulle in deep red, teal, plum and cobalt blue. Thenu’s new collection brings Sri Lankan colour and clean Finnish lines to the evening – designed in Tampere.',
    },
    fi: {
      title: 'Thenu – Iltapuvut ja mittatilausmekot Tampereella',
      description:
        'Tutustu tamperelaisen muotisuunnittelija Thenun Iltapuvut 2026 -mallistoon: organzaa, satiinia ja tylliä. Mittatilausmekot, muutostyöt ja upcycling.',
      eyebrow: 'Uusi mallisto · Tampere',
      h1: 'Iltapuvut 2026',
      intro:
        'Organzaa, satiinia ja tylliä syvänpunaisena, petroolina, luumuna ja koboltinsinisenä. Thenun uusi mallisto tuo iltaan srilankalaisen värin ja suomalaisen selkeän muotokielen – suunniteltu Tampereella.',
    },
  },
  about: {
    en: {
      title: 'About Thenu | Sri Lankan–Finnish Fashion Designer, Tampere',
      description:
        'Meet Thenu, the fashion designer behind Tikki ja Tyyli in Tampere. Sri Lankan roots, Finnish elegance and a commitment to sustainable, made-to-last clothing.',
      eyebrow: 'Our story',
      h1: 'Meet Thenu, fashion designer in Tampere',
      intro: 'Sri Lankan roots, Finnish sophistication and a love of well-made clothes.',
    },
    fi: {
      title: 'Tietoa Thenusta | Muotisuunnittelija Tampereelta',
      description:
        'Tutustu Thenuun, Tikki ja Tyyli -merkin suunnittelijaan Tampereella. Srilankalaiset juuret, suomalainen eleganssi ja kestävät, pitkäikäiset vaatteet.',
      eyebrow: 'Tarinamme',
      h1: 'Tutustu Thenuun – muotisuunnittelija Tampereelta',
      intro: 'Srilankalaiset juuret, suomalainen tyylikkyys ja rakkaus hyvin tehtyihin vaatteisiin.',
    },
  },
  services: {
    en: {
      title: 'Custom Dresses, Alterations & Upcycling in Tampere | Thenu',
      description:
        'Made-to-measure dresses for women and kids, clothing alterations and repairs, upcycling and sustainable tailoring in Tampere, Finland. See how it works.',
      eyebrow: 'Fashion services',
      h1: 'Fashion and tailoring services in Tampere',
      intro:
        'From a brand-new dress designed around you to a quick alteration that makes a favourite piece fit again, every service is personal, carefully made and built to last.',
    },
    fi: {
      title: 'Mittatilausmekot, korjaukset ja muutostyöt Tampere | Thenu',
      description:
        'Mittatilausmekot naisille ja lapsille, vaatteiden korjaus- ja muutostyöt, upcycling ja kestävä ompelu Tampereella. Katso, miten yhteistyö etenee.',
      eyebrow: 'Palvelut',
      h1: 'Muoti- ja ompelupalvelut Tampereella',
      intro:
        'Sinulle suunnitellusta uudesta mekosta pieneen muutostyöhön, jonka ansiosta lempivaate istuu taas – jokainen palvelu on henkilökohtainen, huolella tehty ja kestävä.',
    },
  },
  portfolio: {
    en: {
      title: 'Portfolio – Evening Gowns & Summer Dresses | Thenu, Tampere',
      description:
        'Browse Thenu’s collections: evening gowns in organza, satin and tulle, and colourful summer dresses photographed among Finnish lupins. Designed in Tampere.',
      eyebrow: 'Portfolio',
      h1: 'Designs by Thenu',
      intro:
        'A selection of Thenu’s work, from dramatic evening gowns to colourful summer dresses. Every piece was designed in Tampere.',
    },
    fi: {
      title: 'Portfolio – iltapuvut ja kesämekot | Thenu, Tampere',
      description:
        'Selaa Thenun mallistoja: iltapukuja organzasta, satiinista ja tyllistä sekä värikkäitä kesämekkoja lupiinien keskellä. Suunniteltu Tampereella.',
      eyebrow: 'Portfolio',
      h1: 'Thenun suunnittelemia vaatteita',
      intro:
        'Valikoima Thenun töitä näyttävistä iltapuvuista värikkäisiin kesämekkoihin. Jokainen vaate on suunniteltu Tampereella.',
    },
  },
  contact: {
    en: {
      title: 'Contact Thenu | Fashion Designer & Tailor in Tampere',
      description:
        'Get in touch with Thenu in Tampere about a custom dress, alterations or upcycling. Email hello@thenudesign.com or send a message on Instagram.',
      eyebrow: 'Contact',
      h1: 'Get in touch',
      intro:
        'Planning a custom dress, need an alteration or have a garment you’d like to upcycle? Send Thenu a message – she’d love to hear about it.',
    },
    fi: {
      title: 'Ota yhteyttä | Thenu, muotisuunnittelija Tampere',
      description:
        'Ota yhteyttä Thenuun Tampereella mittatilausmekoista, korjaus- ja muutostöistä tai upcyclingista. Sähköposti hello@thenudesign.com tai viesti Instagramissa.',
      eyebrow: 'Yhteystiedot',
      h1: 'Ota yhteyttä',
      intro:
        'Suunnitteletko mittatilausmekkoa, tarvitsetko muutostyön tai onko sinulla vaate, jolle haluaisit uuden elämän? Lähetä Thenulle viesti – hän kuulee mielellään lisää.',
    },
  },
};
