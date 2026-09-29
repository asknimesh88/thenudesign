import type { Locale } from '../site.config';

// Body copy for every page in both languages. Page titles, meta descriptions and
// H1s live in pages.ts. Photos are referenced by file name (see src/data/photos.ts).

export interface Service {
  id: string; // also the #anchor on the services page
  photo: string;
  title: string;
  short: string;
  body: string[];
  points: string[];
}

export interface Value {
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

const en = {
  welcome: {
    heading: 'Welcome to Tikki ja Tyyli by Thenu',
    body: [
      'Tikki ja tyyli is Finnish for “stitch and style”, and that is exactly what this studio is about. Whether you need a brand-new outfit or want to refresh a favourite piece, Thenu makes sure it fits you perfectly and reflects your own style.',
      'Every garment is made with care and attention to detail, from the first sketch and fitting to the final seam. At Tikki ja Tyyli, fashion is personal, creative and sustainable.',
    ],
    signature: 'Thenu',
  },
  servicesHeading: 'Fashion services',
  servicesLead: 'Custom design, alterations and upcycling – all under one roof in Tampere.',
  services: [
    {
      id: 'custom-dresses',
      photo: 'thenu-design-mint-floral-puff-sleeve-dress',
      title: 'Custom dresses for women and kids',
      short:
        'Designed and tailored to your measurements, from everyday dresses to gowns and outfits for special occasions.',
      body: [
        'A custom dress starts with a conversation about you: the occasion, the colours and fabrics you love, and how you want to feel wearing it. Thenu sketches the design, takes your measurements and sews the dress to fit your body – not a standard size.',
        'She designs for women and children alike, from party and occasion dresses to gowns, summer dresses and matching sets.',
      ],
      points: [
        'Gowns and occasion wear',
        'Summer dresses and two-piece sets',
        'Dresses for kids and special days',
        'Fittings along the way for a perfect fit',
      ],
    },
    {
      id: 'alterations',
      photo: 'thenu-design-floral-crop-top-wrap-skirt-set',
      title: 'Clothing alterations and repairs',
      short:
        'Professional alterations for trousers, dresses and more: resizing, hemming and length adjustments.',
      body: [
        'A garment that fits well is one you actually wear. Thenu takes in, lets out, shortens and lengthens clothes so that they fit you properly, and repairs the pieces you would rather not give up.',
        'Bring the garment along and Thenu will tell you what can be done.',
      ],
      points: [
        'Hemming trousers, skirts and dresses',
        'Taking in and letting out (resizing)',
        'Length adjustments',
        'Repairs to favourite pieces',
      ],
    },
    {
      id: 'upcycling',
      photo: 'thenu-design-brown-print-high-low-maxi-dress',
      title: 'Upcycling old garments',
      short: 'Turning old or unused clothes into modern, stylish pieces you’ll love wearing again.',
      body: [
        'Many wardrobes hold clothes with sentimental value that no longer fit or feel dated. Thenu redesigns them into something new: a different silhouette, a new neckline, or a completely new garment made from the original fabric.',
        'Upcycling keeps good fabric in use and out of landfill, and the result is a one-of-a-kind piece with a story.',
      ],
      points: [
        'Redesigning dated or unused clothes',
        'New garments from existing fabric',
        'Keeping sentimental pieces in use',
      ],
    },
    {
      id: 'sustainable',
      photo: 'thenu-design-green-leaf-print-summer-dress',
      title: 'Sustainable practices',
      short: 'Ethically sourced materials, careful production and garments made to last.',
      body: [
        'Sustainability runs through everything at Tikki ja Tyyli. Thenu chooses sustainable fabrics where possible, makes each piece to order to avoid overproduction, and builds garments to last for years rather than a single season.',
        'Alterations and upcycling are part of the same idea: the most sustainable garment is often the one already in your wardrobe.',
      ],
      points: [
        'Made to order – no overproduction',
        'Sustainable, ethically sourced fabrics where possible',
        'Quality craftsmanship that lasts',
      ],
    },
  ] satisfies Service[],
  processHeading: 'How it works',
  process: [
    {
      title: 'Personal consultation',
      text: 'We start by talking through your ideas, the occasion and your style preferences, so the result truly feels like you.',
    },
    {
      title: 'Design and fitting',
      text: 'Thenu creates the design, takes your measurements and sews the garment, with fittings along the way to get the fit just right.',
    },
    {
      title: 'Finishing and quality check',
      text: 'Every garment is checked carefully before it is handed over, so it meets high standards of craftsmanship and fit.',
    },
  ] satisfies Value[],
  collection: {
    eyebrow: 'New collection',
    heading: 'The 2026 Collection',
    text: 'Organza, satin and tulle in deep red, teal and cobalt. A collection where Sri Lankan colour meets clean Finnish lines.',
    cta: 'View the portfolio',
    viewCollection: 'View the collection',
    bookConsultation: 'Book a consultation',
    lookbookHeading: 'The lookbook',
    allPhotos: 'See all photos',
    storyHeading: 'Colour, structure and movement',
    story: [
      'The 2026 Collection brings together the vibrant colour of Thenu’s Sri Lankan heritage and the clean, considered lines of Finnish design.',
      'Deep jewel tones – red, teal, plum and cobalt – meet sculpted bows, draped shoulders, layers of organza and flowing trains. Each gown is designed to move with the person wearing it, from the first entrance to the last dance.',
    ],
    madeToMeasureHeading: 'A look made just for you',
    madeToMeasure:
      'Fell for a look? Thenu designs custom gowns and occasion dresses made to your measurements – for parties, weddings, galas and every celebration in between.',
    customDresses: 'About custom dresses',
    looks: [
      'thenu-design-pink-bronze-draped-gown-tulle-collar',
      'thenu-design-red-organza-gown-puff-sleeves-seated',
      'thenu-design-teal-gown-red-shoulder-drape',
      'thenu-design-cobalt-blue-gown-back-bow',
      'thenu-design-teal-halter-gown-back-bow',
      'thenu-design-red-organza-gown-back-view',
      'thenu-design-mustard-floral-dress-in-motion',
      'thenu-design-plum-halter-gown-trio',
    ],
  },
  valuesHeading: 'What makes a Thenu piece',
  values: [
    {
      title: 'Cultural fusion',
      text: 'Every piece tells a story, blending Sri Lankan tradition with modern Finnish elegance, so each item is unique and meaningful.',
    },
    {
      title: 'Sustainable materials',
      text: 'Sustainable fabrics that feel good to wear and align with ethical fashion practices.',
    },
    {
      title: 'Quality craftsmanship',
      text: 'Meticulous attention to detail in every seam, so you receive pieces that last and impress.',
    },
  ] satisfies Value[],
  mission: {
    heading: 'Our mission',
    text: 'To create inclusive fashion that inspires self-expression while caring for the environment, combining modern aesthetics with the rich cultural heritage of Sri Lanka and Finland.',
  },
  vision: {
    heading: 'Our vision',
    text: 'A world where fashion transcends boundaries, celebrating diversity and individuality through designs that empower and inspire people from all walks of life.',
  },
  local: {
    heading: 'A local designer in Tampere',
    text: 'Tikki ja Tyyli is based in Tampere, in the Pirkanmaa region of Finland. Get in touch to arrange a consultation or a fitting – Thenu is happy to hear about your idea, wherever you are.',
  },
  cta: {
    heading: 'Let’s create something that’s truly yours',
    text: 'Tell Thenu about your idea, the garment you want altered or the piece you’d like to give a new life. Every project starts with a friendly conversation.',
    email: 'Send an email',
    instagram: 'Message on Instagram',
  },
  about: {
    story: [
      'Thenu is a fashion designer based in Tampere, Finland. Her designs combine the vibrant colours and patterns of her Sri Lankan heritage with the clean lines and understated elegance of Finnish design.',
      'With more than 10 years of experience in fashion design and tailoring, she founded Tikki ja Tyyli – Finnish for “stitch and style” – to create clothes that are personal, creative and sustainable. Today that experience goes into custom dresses, alterations and upcycling projects that help clients find pieces that fit perfectly and feel like their own.',
      'Every garment is made with care, from the first sketch to the final stitch. For Thenu, fashion is not about following trends but about helping each person express who they are.',
    ],
    journeyHeading: 'From Sri Lanka to Finland',
    journey:
      'Tikki ja Tyyli has grown from its Sri Lankan roots into a studio that blends naturally with the Finnish aesthetic. The result is a style of its own: bold colour and pattern balanced by simple, wearable shapes, and a commitment to quality from the very first piece.',
    loveHeading: 'Crafting every piece with love',
    love: 'Behind every seam at Tikki ja Tyyli is a blend of passion and precision. Each design is carefully crafted to honour its heritage, with dedication to quality and artistry in every stitch.',
    portfolioCta: 'View the portfolio',
  },
  portfolio: {
    collections: {
      'collection-2026': {
        heading: 'The 2026 Collection',
        text: 'Organza, satin and tulle in deep red, teal, plum and cobalt blue. Sculpted bows, draped shoulders and flowing trains, photographed in the studio.',
      },
      'summer-2025': {
        heading: 'Summer collection',
        text: 'Light, colourful dresses and two-piece sets in floral prints, photographed among lupins and old walls on a Finnish summer day.',
      },
    },
    ctaHeading: 'Want something similar?',
    ctaText: 'Thenu can design a piece made to your own measurements.',
  },
  contact: {
    email: 'Email',
    location: 'Location',
    locationValue: 'Tampere, Finland',
    phone: 'Phone',
    tipHeading: 'Helpful to include',
    tip: 'What you have in mind, any deadline (for example an event date), and photos of the garment or your inspiration.',
    faqHeading: 'Common questions',
  },
  faq: [
    {
      q: 'What inspires Thenu’s designs?',
      a: 'Thenu draws inspiration from her Sri Lankan heritage and Finnish elegance, combining vibrant colours and patterns with clean design. Each collection reflects her passion for culture and modern fashion, made for the contemporary wardrobe.',
    },
    {
      q: 'Do you make dresses for children?',
      a: 'Yes. Thenu designs and sews custom dresses for both women and kids, for everyday wear as well as parties and special occasions.',
    },
    {
      q: 'What kinds of alterations do you do?',
      a: 'Common alterations include hemming trousers, skirts and dresses, resizing (taking in or letting out) and length adjustments. If you are not sure whether something can be altered, send a photo and ask.',
    },
    {
      q: 'Can you turn an old garment into something new?',
      a: 'Yes, upcycling is one of Thenu’s services. Old or unused clothes can be redesigned into modern pieces, often keeping the original fabric and its story.',
    },
    {
      q: 'Where are you located?',
      a: 'Thenu is based in Tampere, Finland. Get in touch by email or on Instagram to arrange a consultation or a fitting.',
    },
    {
      q: 'How do I get started?',
      a: 'Send an email to dilkienoka@gmail.com or a message on Instagram describing what you have in mind. Photos of the garment or your inspiration are very helpful. Thenu will get back to you to discuss the details.',
    },
    {
      q: 'How can I follow new collections?',
      a: 'Follow Tikki ja Tyyli on Instagram and Facebook for new designs, collections and behind-the-scenes updates.',
    },
  ] satisfies Faq[],
};

type Content = typeof en;

const fi: Content = {
  welcome: {
    heading: 'Tervetuloa – Tikki ja Tyyli by Thenu',
    body: [
      'Tikki ja Tyyli kertoo nimellään olennaisen: jokainen tikki tehdään huolella, ja jokaisessa vaatteessa on tyyliä. Tarvitsitpa kokonaan uuden asun tai haluat raikastaa lempivaatettasi, Thenu huolehtii siitä, että se istuu täydellisesti ja näyttää juuri sinulta.',
      'Jokainen vaate syntyy huolella ja yksityiskohtia kunnioittaen – ensimmäisestä luonnoksesta ja sovituksesta viimeiseen saumaan asti. Tikki ja Tyylissä muoti on henkilökohtaista, luovaa ja kestävää.',
    ],
    signature: 'Thenu',
  },
  servicesHeading: 'Palvelut',
  servicesLead: 'Mittatilaustyöt, muutostyöt ja upcycling – kaikki saman katon alta Tampereella.',
  services: [
    {
      id: 'mittatilausmekot',
      photo: 'thenu-design-mint-floral-puff-sleeve-dress',
      title: 'Mittatilausmekot naisille ja lapsille',
      short: 'Suunniteltu ja ommeltu mittojesi mukaan – arkimekoista näyttäviin juhla-asuihin.',
      body: [
        'Mittatilausmekko alkaa keskustelusta: mihin tilaisuuteen vaate tulee, mistä väreistä ja materiaaleista pidät ja miltä haluat sen päällä tuntuvan. Thenu luonnostelee mallin, ottaa mittasi ja ompelee mekon istumaan juuri sinun vartalollesi – ei vakiokokoon.',
        'Hän suunnittelee vaatteita sekä naisille että lapsille: juhlamekkoja ja -pukuja, kesämekkoja ja yhteensopivia asukokonaisuuksia.',
      ],
      points: [
        'Juhlapuvut ja erityistilaisuuksien asut',
        'Kesämekot ja kaksiosaiset asut',
        'Lasten mekot ja juhla-asut',
        'Sovitukset työn aikana täydellisen istuvuuden varmistamiseksi',
      ],
    },
    {
      id: 'korjaukset-ja-muutostyot',
      photo: 'thenu-design-floral-crop-top-wrap-skirt-set',
      title: 'Vaatteiden korjaukset ja muutostyöt',
      short:
        'Ammattitaitoiset muutostyöt housuihin, mekkoihin ja muihin vaatteisiin: koon muutokset, lyhennykset ja pituuden muutokset.',
      body: [
        'Hyvin istuva vaate on vaate, jota oikeasti käytät. Thenu kaventaa, leventää, lyhentää ja pidentää vaatteita niin, että ne istuvat kunnolla, ja korjaa vaatteet, joista et halua luopua.',
        'Tuo vaate mukanasi, niin Thenu kertoo, mitä sille voi tehdä.',
      ],
      points: [
        'Housujen, hameiden ja mekkojen lyhennykset',
        'Kavennukset ja levennykset (koon muutokset)',
        'Pituuden muutokset',
        'Lempivaatteiden korjaukset',
      ],
    },
    {
      id: 'upcycling',
      photo: 'thenu-design-brown-print-high-low-maxi-dress',
      title: 'Upcycling – vanhasta uutta',
      short: 'Vanhoista tai käyttämättömistä vaatteista moderneja ja tyylikkäitä vaatteita, joita käytät taas mielelläsi.',
      body: [
        'Monen vaatekaapissa on tunnearvoltaan tärkeitä vaatteita, jotka eivät enää istu tai tuntuvat vanhanaikaisilta. Thenu suunnittelee niistä jotain uutta: uuden siluetin, uuden pääntien tai kokonaan uuden vaatteen alkuperäisestä kankaasta.',
        'Upcycling pitää hyvän kankaan käytössä ja poissa kaatopaikalta, ja lopputuloksena on ainutlaatuinen vaate, jolla on oma tarinansa.',
      ],
      points: [
        'Vanhojen tai käyttämättömien vaatteiden uudistaminen',
        'Uudet vaatteet olemassa olevasta kankaasta',
        'Tunnearvoltaan tärkeät vaatteet takaisin käyttöön',
      ],
    },
    {
      id: 'kestavyys',
      photo: 'thenu-design-green-leaf-print-summer-dress',
      title: 'Kestävät toimintatavat',
      short: 'Vastuullisesti hankitut materiaalit, huolellinen valmistus ja vaatteet, jotka kestävät.',
      body: [
        'Kestävyys kulkee mukana kaikessa, mitä Tikki ja Tyylissä tehdään. Thenu valitsee mahdollisuuksien mukaan kestäviä materiaaleja, valmistaa jokaisen vaatteen tilauksesta ylituotannon välttämiseksi ja tekee vaatteista pitkäikäisiä – ei vain yhdeksi kaudeksi.',
        'Muutostyöt ja upcycling ovat osa samaa ajatusta: kestävin vaate on usein se, joka on jo kaapissasi.',
      ],
      points: [
        'Valmistus tilauksesta – ei ylituotantoa',
        'Kestävät ja vastuullisesti hankitut materiaalit mahdollisuuksien mukaan',
        'Laadukas käsityö, joka kestää',
      ],
    },
  ],
  processHeading: 'Näin yhteistyö etenee',
  process: [
    {
      title: 'Henkilökohtainen konsultaatio',
      text: 'Aloitamme käymällä läpi ideasi, tilaisuuden ja tyylitoiveesi, jotta lopputulos tuntuu aidosti sinulta.',
    },
    {
      title: 'Suunnittelu ja sovitus',
      text: 'Thenu suunnittelee vaatteen, ottaa mittasi ja ompelee sen. Sovituksia tehdään matkan varrella, jotta istuvuus on juuri oikea.',
    },
    {
      title: 'Viimeistely ja laadun tarkistus',
      text: 'Jokainen vaate tarkistetaan huolellisesti ennen luovutusta, jotta se täyttää korkeat laatu- ja istuvuusvaatimukset.',
    },
  ],
  collection: {
    eyebrow: 'Uusi mallisto',
    heading: 'Mallisto 2026',
    text: 'Organzaa, satiinia ja tylliä syvänpunaisena, petroolina ja koboltinsinisenä. Mallisto, jossa srilankalainen väri kohtaa suomalaisen selkeän muotokielen.',
    cta: 'Katso portfolio',
    viewCollection: 'Katso mallisto',
    bookConsultation: 'Varaa konsultaatio',
    lookbookHeading: 'Lookbook',
    allPhotos: 'Katso kaikki kuvat',
    storyHeading: 'Väriä, rakennetta ja liikettä',
    story: [
      'Mallisto 2026 yhdistää Thenun srilankalaisen perinnön eloisat värit ja suomalaisen muotoilun selkeät, harkitut linjat.',
      'Syvät jalokivisävyt – punainen, petrooli, luumu ja koboltti – kohtaavat muotoillut rusetit, drapeeratut olkapäät, organzakerrokset ja laskeutuvat laahukset. Jokainen puku on suunniteltu liikkumaan kantajansa mukana ensimmäisestä sisääntulosta viimeiseen tanssiin.',
    ],
    madeToMeasureHeading: 'Juuri sinulle tehty asu',
    madeToMeasure:
      'Ihastuitko johonkin asuun? Thenu suunnittelee mittatilauspukuja ja juhlamekkoja juuri sinun mittojesi mukaan – juhliin, häihin, gaaloihin ja kaikkiin muihin tilaisuuksiin.',
    customDresses: 'Lisää mittatilausmekoista',
    looks: [
      'thenu-design-pink-bronze-draped-gown-tulle-collar',
      'thenu-design-red-organza-gown-puff-sleeves-seated',
      'thenu-design-teal-gown-red-shoulder-drape',
      'thenu-design-cobalt-blue-gown-back-bow',
      'thenu-design-teal-halter-gown-back-bow',
      'thenu-design-red-organza-gown-back-view',
      'thenu-design-mustard-floral-dress-in-motion',
      'thenu-design-plum-halter-gown-trio',
    ],
  },
  valuesHeading: 'Mikä tekee Thenun vaatteesta ainutlaatuisen',
  values: [
    {
      title: 'Kulttuurien kohtaaminen',
      text: 'Jokainen vaate kertoo tarinan, jossa srilankalainen perinne yhdistyy moderniin suomalaiseen eleganssiin – siksi jokainen on ainutlaatuinen ja merkityksellinen.',
    },
    {
      title: 'Kestävät materiaalit',
      text: 'Kestäviä materiaaleja, jotka tuntuvat hyvältä päällä ja noudattavat eettisen muodin periaatteita.',
    },
    {
      title: 'Laadukas käsityö',
      text: 'Huolellisuutta jokaisessa saumassa, jotta saat vaatteita, jotka kestävät ja ilahduttavat.',
    },
  ],
  mission: {
    heading: 'Missiomme',
    text: 'Luoda kaikille avointa muotia, joka innostaa ilmaisemaan itseä ja kunnioittaa ympäristöä – yhdistäen modernin estetiikan Sri Lankan ja Suomen rikkaaseen kulttuuriperintöön.',
  },
  vision: {
    heading: 'Visiomme',
    text: 'Maailma, jossa muoti ylittää rajat ja juhlistaa monimuotoisuutta ja yksilöllisyyttä – malleilla, jotka vahvistavat ja inspiroivat ihmisiä kaikilta elämänaloilta.',
  },
  local: {
    heading: 'Paikallinen suunnittelija Tampereella',
    text: 'Tikki ja Tyyli toimii Tampereella Pirkanmaalla. Ota yhteyttä, niin sovitaan konsultaatiosta tai sovituksesta – Thenu kuulee mielellään ideastasi, asuitpa missä tahansa.',
  },
  cta: {
    heading: 'Luodaan jotain, joka on juuri sinun',
    text: 'Kerro Thenulle ideastasi, vaatteesta, jota haluat muuttaa, tai vaatteesta, jolle haluat antaa uuden elämän. Jokainen projekti alkaa ystävällisellä keskustelulla.',
    email: 'Lähetä sähköpostia',
    instagram: 'Viesti Instagramissa',
  },
  about: {
    story: [
      'Thenu on tamperelainen muotisuunnittelija. Hänen suunnittelussaan yhdistyvät srilankalaisen perinnön eloisat värit ja kuosit sekä suomalaisen muotoilun selkeät linjat ja hillitty eleganssi.',
      'Yli 10 vuoden kokemuksella muotisuunnittelusta ja ompelusta hän perusti Tikki ja Tyylin luodakseen vaatteita, jotka ovat henkilökohtaisia, luovia ja kestäviä. Tänään tämä kokemus näkyy mittatilausmekoissa, muutostöissä ja upcycling-projekteissa, joiden avulla asiakkaat löytävät täydellisesti istuvia ja omalta tuntuvia vaatteita.',
      'Jokainen vaate tehdään huolella ensimmäisestä luonnoksesta viimeiseen tikkiin. Thenulle muoti ei ole trendien seuraamista, vaan sitä, että jokainen voi ilmaista itseään omana itsenään.',
    ],
    journeyHeading: 'Sri Lankasta Suomeen',
    journey:
      'Tikki ja Tyyli on kasvanut srilankalaisista juuristaan studioksi, joka sulautuu luontevasti suomalaiseen estetiikkaan. Tuloksena on oma tyyli: rohkeita värejä ja kuoseja tasapainottavat yksinkertaiset, helposti käytettävät linjat – ja sitoutuminen laatuun ensimmäisestä vaatteesta lähtien.',
    loveHeading: 'Jokainen vaate tehdään rakkaudella',
    love: 'Jokaisen Tikki ja Tyylin sauman takana on intohimoa ja tarkkuutta. Jokainen malli on huolella viimeistelty kunnioittamaan juuriaan, ja jokaisessa tikissä näkyy omistautuminen laatuun ja käsityötaitoon.',
    portfolioCta: 'Katso portfolio',
  },
  portfolio: {
    collections: {
      'collection-2026': {
        heading: 'Mallisto 2026',
        text: 'Organzaa, satiinia ja tylliä syvänpunaisena, petroolina, luumuna ja koboltinsinisenä. Muotoiltuja rusetteja, drapeerattuja olkapäitä ja laskeutuvia laahuksia studiokuvissa.',
      },
      'summer-2025': {
        heading: 'Kesämallisto',
        text: 'Kevyitä, värikkäitä mekkoja ja kaksiosaisia asuja kukkakuoseissa, kuvattuna lupiinien ja vanhojen muurien keskellä suomalaisena kesäpäivänä.',
      },
    },
    ctaHeading: 'Haluatko jotain samanlaista?',
    ctaText: 'Thenu voi suunnitella vaatteen juuri sinun mittojesi mukaan.',
  },
  contact: {
    email: 'Sähköposti',
    location: 'Sijainti',
    locationValue: 'Tampere, Suomi',
    phone: 'Puhelin',
    tipHeading: 'Viestiin kannattaa liittää',
    tip: 'Mitä sinulla on mielessä, mahdollinen aikataulu (esimerkiksi juhlan päivämäärä) sekä kuvia vaatteesta tai inspiraatiosta.',
    faqHeading: 'Usein kysyttyä',
  },
  faq: [
    {
      q: 'Mistä Thenu saa inspiraationsa?',
      a: 'Thenu ammentaa inspiraatiota srilankalaisesta perinnöstään ja suomalaisesta eleganssista yhdistäen eloisat värit ja kuosit selkeään muotoiluun. Jokainen mallisto heijastaa hänen intohimoaan kulttuuriin ja moderniin muotiin.',
    },
    {
      q: 'Teetkö mekkoja myös lapsille?',
      a: 'Kyllä. Thenu suunnittelee ja ompelee mittatilausmekkoja sekä naisille että lapsille – arkeen, juhliin ja erityisiin tilaisuuksiin.',
    },
    {
      q: 'Millaisia muutostöitä teet?',
      a: 'Tavallisia muutostöitä ovat esimerkiksi housujen, hameiden ja mekkojen lyhennykset, kavennukset ja levennykset sekä pituuden muutokset. Jos et ole varma, voiko vaatetta muuttaa, lähetä kuva ja kysy.',
    },
    {
      q: 'Voiko vanhasta vaatteesta tehdä uuden?',
      a: 'Kyllä, upcycling on yksi Thenun palveluista. Vanhat tai käyttämättömät vaatteet voidaan suunnitella uudelleen moderneiksi vaatteiksi – usein alkuperäinen kangas ja sen tarina säilyttäen.',
    },
    {
      q: 'Missä toimit?',
      a: 'Thenu toimii Tampereella. Ota yhteyttä sähköpostilla tai Instagramissa, niin sovitaan konsultaatiosta tai sovituksesta.',
    },
    {
      q: 'Miten pääsen alkuun?',
      a: 'Lähetä sähköpostia osoitteeseen dilkienoka@gmail.com tai viesti Instagramissa ja kerro, mitä sinulla on mielessä. Kuvat vaatteesta tai inspiraatiosta auttavat paljon. Thenu palaa asiaan ja käy yksityiskohdat kanssasi läpi.',
    },
    {
      q: 'Miten pysyn ajan tasalla uusista mallistoista?',
      a: 'Seuraa Tikki ja Tyyliä Instagramissa ja Facebookissa – sieltä näet uudet mallit, mallistot ja kurkistuksia kulissien taakse.',
    },
  ],
};

export const CONTENT: Record<Locale, Content> = { en, fi };
