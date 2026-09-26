import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import type { Locale } from '../site.config';

// Every photo on the site, with alt text in both languages.
// Alt text describes the garment (what a visitor or search engine needs to know),
// not the model, and never names a model. Only the portraits of Thenu name her.
//
// To add photos: run `npm run images`, then add an entry here with the file name
// (without .jpg) as the key.

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/**/*.jpg', { eager: true });

export type Collection = 'evening-2026' | 'summer-2025' | 'portrait';

interface PhotoInfo {
  collection: Collection;
  alt: Record<Locale, string>;
}

const INFO: Record<string, PhotoInfo> = {
  // Portraits of Thenu herself (not shown in the portfolio galleries)
  'thenu-fashion-designer-tampere-portrait': {
    collection: 'portrait',
    alt: {
      en: 'Thenu, fashion designer in Tampere, smiling on a studio stool in a peach blazer and white trousers',
      fi: 'Tamperelainen muotisuunnittelija Thenu hymyilee studiojakkaralla persikanvärisessä bleiserissä ja valkoisissa housuissa',
    },
  },
  'thenu-fashion-designer-seated-portrait': {
    collection: 'portrait',
    alt: {
      en: 'Portrait of Thenu, the designer behind Tikki ja Tyyli, seated in a peach blazer and lace top',
      fi: 'Muotokuva Thenusta, Tikki ja Tyylin suunnittelijasta, istumassa persikanvärisessä bleiserissä ja pitsitopissa',
    },
  },

  // Evening wear collection, studio shoot 2026
  'thenu-design-red-organza-gown-puff-sleeves-portrait': {
    collection: 'evening-2026',
    alt: {
      en: 'Red organza evening gown with puff sleeves and a cut-out bodice, designed by Thenu in Tampere',
      fi: 'Punainen organzainen iltapuku puhvihihoilla ja avoimella yläosalla, Thenun suunnittelema Tampereella',
    },
  },
  'thenu-design-red-organza-gown-puff-sleeves-seated': {
    collection: 'evening-2026',
    alt: {
      en: 'Red organza gown with a full layered skirt and puff sleeves, shown seated',
      fi: 'Punainen organzapuku, jossa kerroksellinen täyteläinen helma ja puhvihihat, istuva asento',
    },
  },
  'thenu-design-red-organza-gown-back-view': {
    collection: 'evening-2026',
    alt: {
      en: 'Back view of the red organza gown with lace-up detail and flowing train',
      fi: 'Punainen organzapuku takaa: nyörityskoriste ja laskeutuva laahus',
    },
  },
  'thenu-design-teal-halter-gown-front-slit': {
    collection: 'evening-2026',
    alt: {
      en: 'Teal halter-neck evening gown with a front slit and red ruffle trim',
      fi: 'Petroolinvärinen niskanauhallinen iltapuku, jossa etuhalkio ja punainen röyhelökoriste',
    },
  },
  'thenu-design-teal-halter-gown-back-bow': {
    collection: 'evening-2026',
    alt: {
      en: 'Back of the teal halter gown tied with a large plum satin bow',
      fi: 'Petroolinvärinen iltapuku takaa, vyötäröllä suuri luumunvärinen satiinirusetti',
    },
  },
  'thenu-design-teal-gown-red-shoulder-drape': {
    collection: 'evening-2026',
    alt: {
      en: 'Fitted teal gown with an asymmetric red draped shoulder',
      fi: 'Vartalonmyötäinen petrooli iltapuku, jossa epäsymmetrinen punainen olkadrapeeraus',
    },
  },
  'thenu-design-teal-gown-red-shoulder-drape-side': {
    collection: 'evening-2026',
    alt: {
      en: 'Side view of the teal gown with red shoulder drape and floor-length skirt',
      fi: 'Petrooli iltapuku sivulta: punainen olkadrapeeraus ja maahan ulottuva helma',
    },
  },
  'thenu-design-teal-and-red-organza-gowns-duo': {
    collection: 'evening-2026',
    alt: {
      en: 'Two evening gowns side by side: teal with a red drape and red organza with puff sleeves',
      fi: 'Kaksi iltapukua rinnakkain: petrooli punaisella drapeerauksella ja punainen organzapuku puhvihihoilla',
    },
  },
  'thenu-design-cobalt-blue-strapless-gown-floral-applique': {
    collection: 'evening-2026',
    alt: {
      en: 'Cobalt blue strapless gown with 3D floral appliqués on the bodice',
      fi: 'Koboltinsininen olkaimeton iltapuku, jonka yläosassa kolmiulotteiset kukka-applikaatiot',
    },
  },
  'thenu-design-cobalt-blue-gown-back-bow': {
    collection: 'evening-2026',
    alt: {
      en: 'Back of the cobalt blue gown with a sculpted bow and full skirt',
      fi: 'Koboltinsininen iltapuku takaa: muotoiltu rusetti ja täyteläinen helma',
    },
  },
  'thenu-design-pink-bronze-draped-gown-tulle-collar': {
    collection: 'evening-2026',
    alt: {
      en: 'Pink and white gown with a bronze satin drape and a pleated tulle collar',
      fi: 'Vaaleanpunavalkoinen iltapuku, pronssinen satiinidrapeeraus ja laskostettu tyllikaulus',
    },
  },
  'thenu-design-evening-wear-collection-group': {
    collection: 'evening-2026',
    alt: {
      en: 'Models wearing the Thenu evening wear collection in teal, cobalt, plum and red',
      fi: 'Mallit Thenun iltapukumallistossa: petrooli, koboltti, luumu ja punainen',
    },
  },
  'thenu-design-evening-wear-collection-group-back-view': {
    collection: 'evening-2026',
    alt: {
      en: 'The evening wear collection from behind, showing bows, open backs and trains',
      fi: 'Iltapukumallisto takaa: rusetit, avoimet selät ja laahukset',
    },
  },
  'thenu-design-teal-and-red-evening-gowns-trio': {
    collection: 'evening-2026',
    alt: {
      en: 'Three gowns from the collection: teal halter, teal and red, and red organza',
      fi: 'Kolme mallistoon kuuluvaa iltapukua: petrooli niskanauhallinen, petrooli-punainen ja punainen organza',
    },
  },
  'thenu-design-plum-halter-gown-evening-wear-trio': {
    collection: 'evening-2026',
    alt: {
      en: 'Plum halter gown with blue trim, a pink and bronze gown and a cobalt gown',
      fi: 'Luumunvärinen niskanauhallinen puku sinisellä reunuksella, vaaleanpunapronssinen puku ja kobolttipuku',
    },
  },
  'thenu-design-evening-gowns-trio-seated': {
    collection: 'evening-2026',
    alt: {
      en: 'Three evening gowns in plum, pink and bronze, and cobalt blue',
      fi: 'Kolme iltapukua: luumu, vaaleanpunapronssinen ja koboltinsininen',
    },
  },
  'thenu-design-mustard-floral-shirt-dress': {
    collection: 'evening-2026',
    alt: {
      en: 'Mustard yellow shirt dress with a blue floral print and wide sleeves',
      fi: 'Sinapinkeltainen paitamekko sinisellä kukkakuosilla ja leveillä hihoilla',
    },
  },
  'thenu-design-mustard-floral-dress-in-motion': {
    collection: 'evening-2026',
    alt: {
      en: 'The mustard floral dress in motion, showing its wide flowing skirt',
      fi: 'Sinapinkeltainen kukkamekko liikkeessä, leveä laskeutuva helma',
    },
  },

  // Summer collection, outdoor shoot 2025
  'thenu-design-floral-dress-lupin-field-tampere': {
    collection: 'summer-2025',
    alt: {
      en: 'Pink floral summer dress in a field of purple lupins in Finland',
      fi: 'Vaaleanpunainen kukkakuvioinen kesämekko violettien lupiinien keskellä',
    },
  },
  'thenu-design-pink-floral-dress-lupin-field': {
    collection: 'summer-2025',
    alt: {
      en: 'Pink floral halter dress among blooming lupins on a Finnish summer day',
      fi: 'Kukkakuvioinen niskanauhamekko kukkivien lupiinien keskellä suomalaisena kesäpäivänä',
    },
  },
  'thenu-design-lilac-dress-among-lupins': {
    collection: 'summer-2025',
    alt: {
      en: 'Lilac dress among purple and pink lupins',
      fi: 'Liila mekko violettien ja vaaleanpunaisten lupiinien keskellä',
    },
  },
  'thenu-design-floral-dress-blue-tulle-skirt-lupins': {
    collection: 'summer-2025',
    alt: {
      en: 'Floral bodice dress with a layered blue tulle skirt in a lupin meadow',
      fi: 'Kukkakuvioinen mekko kerroksellisella sinisellä tylliskirtillä lupiininiityllä',
    },
  },
  'thenu-design-floral-dress-lupin-bouquet': {
    collection: 'summer-2025',
    alt: {
      en: 'Floral dress with a blue tulle skirt, holding a bouquet of lupins',
      fi: 'Kukkakuvioinen mekko ja sininen tylliskirtti, sylissä lupiinikimppu',
    },
  },
  'thenu-design-cobalt-dress-grey-tulle-skirt': {
    collection: 'summer-2025',
    alt: {
      en: 'Cobalt blue dress with a voluminous grey tulle skirt, photographed outdoors',
      fi: 'Koboltinsininen mekko ja runsas harmaa tylliskirtti ulkokuvauksessa',
    },
  },
  'thenu-design-brown-print-high-low-maxi-dress': {
    collection: 'summer-2025',
    alt: {
      en: 'Brown geometric print maxi dress with a high-low hem and halter neck',
      fi: 'Ruskea graafisesti kuvioitu maksimekko, epäsymmetrinen helma ja niskanauha',
    },
  },
  'thenu-design-brown-print-halter-maxi-dress': {
    collection: 'summer-2025',
    alt: {
      en: 'Brown print halter maxi dress photographed in a green garden',
      fi: 'Ruskea kuvioitu niskanauhallinen maksimekko vehreässä puutarhassa',
    },
  },
  'thenu-design-floral-crop-top-wrap-skirt-set': {
    collection: 'summer-2025',
    alt: {
      en: 'Floral crop top and matching wrap maxi skirt in soft pink and blue',
      fi: 'Kukkakuvioinen lyhyt toppi ja yhteensopiva kietaisuhame vaaleanpunaisessa ja sinisessä',
    },
  },
  'thenu-design-floral-ruffle-crop-top-set-portrait': {
    collection: 'summer-2025',
    alt: {
      en: 'Close-up of a floral ruffle crop top and skirt set',
      fi: 'Lähikuva kukkakuvioisesta röyhelötopista ja hameesta',
    },
  },
  'thenu-design-lilac-floral-ruffle-two-piece': {
    collection: 'summer-2025',
    alt: {
      en: 'Lilac floral two-piece with an asymmetric ruffle top',
      fi: 'Liila kukkakuvioinen kaksiosainen asu, jossa epäsymmetrinen röyhelötoppi',
    },
  },
  'thenu-design-lilac-floral-ruffle-mini-dress': {
    collection: 'summer-2025',
    alt: {
      en: 'Lilac floral mini dress with ruffled neckline and tiered skirt',
      fi: 'Liila kukkakuvioinen minimekko röyhelöpääntiellä ja kerroshelmalla',
    },
  },
  'thenu-design-lilac-ruffle-dress-white-fence': {
    collection: 'summer-2025',
    alt: {
      en: 'Lilac ruffle dress photographed by a white wooden fence',
      fi: 'Liila röyhelömekko valkoisen puuaidan edessä',
    },
  },
  'thenu-design-pale-yellow-ruffle-mini-dress': {
    collection: 'summer-2025',
    alt: {
      en: 'Pale yellow strapless mini dress with ruffles, styled with white sneakers',
      fi: 'Vaaleankeltainen olkaimeton röyhelöminimekko valkoisten tennareiden kanssa',
    },
  },
  'thenu-design-magenta-floral-top-and-skirt': {
    collection: 'summer-2025',
    alt: {
      en: 'Magenta floral top with wide sleeves and a matching magenta skirt',
      fi: 'Magentanvärinen kukkakuvioinen leveähihainen yläosa ja yhteensopiva hame',
    },
  },
  'thenu-design-magenta-floral-crop-top': {
    collection: 'summer-2025',
    alt: {
      en: 'Magenta and white floral crop top with a magenta skirt',
      fi: 'Magenta-valkoinen kukkakuvioinen lyhyt toppi ja magentanvärinen hame',
    },
  },
  'thenu-design-mint-floral-puff-sleeve-dress': {
    collection: 'summer-2025',
    alt: {
      en: 'Mint green floral dress with pink puff sleeves',
      fi: 'Mintunvihreä kukkakuvioinen mekko vaaleanpunaisilla puhvihihoilla',
    },
  },
  'thenu-design-green-leaf-print-summer-dress': {
    collection: 'summer-2025',
    alt: {
      en: 'White summer dress with a green leaf print and tie straps',
      fi: 'Valkoinen kesämekko vihreällä lehtikuosilla ja solmittavilla olkaimilla',
    },
  },
};

export interface Photo {
  key: string;
  src: ImageMetadata;
  collection: Collection;
  alt: Record<Locale, string>;
}

const all: Photo[] = Object.entries(files).map(([path, mod]) => {
  const key = path.split('/').pop()!.replace(/\.jpg$/, '');
  const info = INFO[key];
  if (!info) throw new Error(`Missing alt text in src/data/photos.ts for "${key}"`);
  return { key, src: mod.default, ...info };
});

export function photo(key: string): Photo {
  const found = all.find((p) => p.key === key);
  if (!found) throw new Error(`Unknown photo "${key}"`);
  return found;
}

/** Photos of a collection, in the order they are listed above. */
export function collection(name: Collection): Photo[] {
  const order = Object.keys(INFO);
  return all
    .filter((p) => p.collection === name)
    .sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
}

/** Widths every photo is encoded at. Keeping one shared list means a size used on
 *  several pages is only encoded once, which keeps builds fast. */
export const WIDTHS = [480, 800, 1200, 1600, 2400];

const QUALITY = { avif: 60, webp: 78 } as const;

/** One encoded size of a photo. Same arguments → same file, reused across pages. */
export function variant(p: Photo, width: number, format: 'avif' | 'webp') {
  return getImage({ src: p.src, width: Math.min(width, p.src.width), format, quality: QUALITY[format] });
}

/** Large WebP used by the portfolio lightbox and the gallery structured data. */
export function large(p: Photo) {
  return variant(p, 1600, 'webp');
}

/** Main portrait of Thenu, also used in her Person structured data. */
export const PORTRAIT = 'thenu-fashion-designer-tampere-portrait';
