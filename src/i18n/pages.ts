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
      title: 'Thenu – Fashion Designer & Custom Dresses in Tampere, Finland',
      description:
        'Discover the 2026 collection by Tampere fashion designer Thenu: party dresses, gowns and everyday styles. Custom dresses, alterations and upcycling.',
      eyebrow: 'The 2026 Collection · Tampere, Finland',
      h1: 'Timeless Elegance & Everyday Style',
      intro:
        'Step into a world where fashion meets effortless grace. From show-stopping party dresses and refined occasion wear to chic casual styles for your everyday moments, our collection is thoughtfully crafted to elevate your wardrobe. Discover tailored silhouettes, premium craftsmanship, and designs that let your unique beauty shine for every occasion.',
    },
    fi: {
      title: 'Thenu – Muotisuunnittelija ja mittatilausmekot Tampereella',
      description:
        'Tutustu tamperelaisen muotisuunnittelija Thenun Mallisto 2026 -kokoelmaan: juhlamekot, puvut ja arkityylit. Mittatilausmekot, muutostyöt ja upcycling.',
      eyebrow: 'Mallisto 2026 · Tampere',
      h1: 'Ajatonta eleganssia ja arjen tyyliä',
      intro:
        'Astu maailmaan, jossa muoti kohtaa vaivattoman sulokkuuden. Näyttävistä juhlamekoista ja hienostuneista juhla-asuista tyylikkäisiin arkiasuihin – mallistomme on huolella suunniteltu kohottamaan vaatekaappiasi. Löydä istuvat siluetit, laadukas käsityö ja mallit, jotka antavat ainutlaatuisen kauneutesi loistaa jokaisessa tilaisuudessa.',
    },
  },
  about: {
    en: {
      title: 'About Thenu | Sri Lankan–Finnish Fashion Designer, Tampere',
      description:
        'Meet Thenu, the Tampere fashion designer behind Tikki ja Tyyli: 10+ years of experience, Sri Lankan roots, Finnish elegance and clothes made to last.',
      eyebrow: 'Our story',
      h1: 'Meet Thenu, fashion designer in Tampere',
      intro: 'More than 10 years in fashion, Sri Lankan roots, Finnish sophistication and a love of well-made clothes.',
    },
    fi: {
      title: 'Tietoa Thenusta | Muotisuunnittelija Tampereelta',
      description:
        'Tutustu Thenuun, Tikki ja Tyylin suunnittelijaan Tampereella: yli 10 vuoden kokemus, srilankalaiset juuret, suomalainen eleganssi ja kestävät vaatteet.',
      eyebrow: 'Tarinamme',
      h1: 'Tutustu Thenuun – muotisuunnittelija Tampereelta',
      intro: 'Yli 10 vuotta muodin parissa, srilankalaiset juuret, suomalainen tyylikkyys ja rakkaus hyvin tehtyihin vaatteisiin.',
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
      title: 'Portfolio – Gowns & Summer Dresses | Thenu, Tampere',
      description:
        'Browse Thenu’s collections: gowns in organza, satin and tulle, and colourful summer dresses photographed among Finnish lupins. Designed in Tampere.',
      eyebrow: 'Portfolio',
      h1: 'Designs by Thenu',
      intro:
        'A selection of Thenu’s work, from dramatic gowns to colourful summer dresses. Every piece was designed in Tampere.',
    },
    fi: {
      title: 'Portfolio – juhlapuvut ja kesämekot | Thenu, Tampere',
      description:
        'Selaa Thenun mallistoja: juhlapukuja organzasta, satiinista ja tyllistä sekä värikkäitä kesämekkoja lupiinien keskellä. Suunniteltu Tampereella.',
      eyebrow: 'Portfolio',
      h1: 'Thenun suunnittelemia vaatteita',
      intro:
        'Valikoima Thenun töitä näyttävistä juhlapuvuista värikkäisiin kesämekkoihin. Jokainen vaate on suunniteltu Tampereella.',
    },
  },
  contact: {
    en: {
      title: 'Contact Thenu | Fashion Designer & Tailor in Tampere',
      description:
        'Get in touch with Thenu in Tampere about a custom dress, alterations or upcycling. Email dilkienoka@gmail.com or send a message on Instagram.',
      eyebrow: 'Contact',
      h1: 'Get in touch',
      intro:
        'Planning a custom dress, need an alteration or have a garment you’d like to upcycle? Send Thenu a message – she’d love to hear about it.',
    },
    fi: {
      title: 'Ota yhteyttä | Thenu, muotisuunnittelija Tampere',
      description:
        'Ota yhteyttä Thenuun Tampereella mittatilausmekoista, korjaus- ja muutostöistä tai upcyclingista. Sähköposti dilkienoka@gmail.com tai viesti Instagramissa.',
      eyebrow: 'Yhteystiedot',
      h1: 'Ota yhteyttä',
      intro:
        'Suunnitteletko mittatilausmekkoa, tarvitsetko muutostyön tai onko sinulla vaate, jolle haluaisit uuden elämän? Lähetä Thenulle viesti – hän kuulee mielellään lisää.',
    },
  },
};
