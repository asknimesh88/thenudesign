import type { Locale } from '../site.config';
import type { RouteKey } from './routes';

// SEO copy for every page, in both languages.
// - title: ~50–60 characters, unique per page, brand at the end.
// - description: ~140–160 characters, mentions Tampere/Finland where natural.
//
// TODO(backup): this is placeholder copy. It will be rewritten from the real
// WordPress content once the backup is restored.

export interface PageCopy {
  title: string;
  description: string;
  h1: string;
  intro: string;
}

export const PAGES: Record<RouteKey, Record<Locale, PageCopy>> = {
  home: {
    en: {
      title: 'Thenu Design | Designer in Tampere, Finland',
      description:
        'Thenu Design is an independent design studio in Tampere, Finland, creating thoughtful, modern design for people and businesses across Finland.',
      h1: 'Design from Tampere, Finland',
      intro:
        'Independent design studio by Thenu, based in Tampere and working with clients across Finland and beyond.',
    },
    fi: {
      title: 'Thenu Design | Suunnittelija Tampereella',
      description:
        'Thenu Design on tamperelainen suunnittelustudio, joka luo harkittua ja modernia suunnittelua yksityishenkilöille ja yrityksille kaikkialla Suomessa.',
      h1: 'Suunnittelua Tampereelta',
      intro:
        'Thenun itsenäinen suunnittelustudio Tampereella – palvelemme asiakkaita Pirkanmaalla, koko Suomessa ja ulkomailla.',
    },
  },
  about: {
    en: {
      title: 'About Thenu | Thenu Design, Tampere',
      description:
        'Meet Thenu, the designer behind Thenu Design in Tampere, Finland. Background, approach and the values that guide every project.',
      h1: 'About Thenu',
      intro: 'The designer behind Thenu Design, living and working in Tampere, Finland.',
    },
    fi: {
      title: 'Tietoa Thenusta | Thenu Design, Tampere',
      description:
        'Tutustu Thenuun, Thenu Designin suunnittelijaan Tampereella. Tausta, työskentelytapa ja arvot, jotka ohjaavat jokaista projektia.',
      h1: 'Tietoa Thenusta',
      intro: 'Thenu Designin suunnittelija, joka asuu ja työskentelee Tampereella.',
    },
  },
  services: {
    en: {
      title: 'Design Services in Tampere | Thenu Design',
      description:
        'Design services from Thenu Design in Tampere, Finland. See what is offered, how projects work and how to get started.',
      h1: 'Design services',
      intro: 'What Thenu Design offers to clients in Tampere, Pirkanmaa and across Finland.',
    },
    fi: {
      title: 'Suunnittelupalvelut Tampereella | Thenu Design',
      description:
        'Thenu Designin suunnittelupalvelut Tampereella. Katso, mitä tarjoamme, miten projektit etenevät ja miten pääset alkuun.',
      h1: 'Suunnittelupalvelut',
      intro: 'Thenu Designin palvelut asiakkaille Tampereella, Pirkanmaalla ja koko Suomessa.',
    },
  },
  portfolio: {
    en: {
      title: 'Portfolio | Thenu Design, Tampere, Finland',
      description:
        'Selected work by Thenu Design, a designer based in Tampere, Finland. Browse recent projects and photo shoots.',
      h1: 'Portfolio',
      intro: 'Selected projects and recent work.',
    },
    fi: {
      title: 'Portfolio | Thenu Design, Tampere',
      description:
        'Valikoituja töitä Thenu Designilta, tamperelaiselta suunnittelijalta. Selaa viimeaikaisia projekteja ja kuvauksia.',
      h1: 'Portfolio',
      intro: 'Valikoituja projekteja ja viimeaikaisia töitä.',
    },
  },
  contact: {
    en: {
      title: 'Contact Thenu Design | Tampere, Finland',
      description:
        'Get in touch with Thenu Design in Tampere, Finland. Ask about a project, request a quote or book a meeting.',
      h1: 'Contact',
      intro: 'Tell us about your project. We reply within a couple of working days.',
    },
    fi: {
      title: 'Ota yhteyttä | Thenu Design, Tampere',
      description:
        'Ota yhteyttä Thenu Designiin Tampereella. Kysy projektista, pyydä tarjous tai varaa tapaaminen.',
      h1: 'Ota yhteyttä',
      intro: 'Kerro projektistasi. Vastaamme parin arkipäivän kuluessa.',
    },
  },
};
