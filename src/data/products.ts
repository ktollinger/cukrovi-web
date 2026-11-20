export interface ProductPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface ChristmasCookie {
  id: string;
  name: string;
  ingredients: string;
  note?: string;
  photo?: ProductPhoto;
}

export interface WholeCake {
  id: string;
  name: string;
  category: 'ovocny' | 'neovocny';
  ingredients: string;
  photos: ProductPhoto[];
}

export interface DessertSlice {
  id: string;
  name: string;
  note: string;
  photo: ProductPhoto;
}

export const ABOUT_PARAGRAPHS = [
  'Rawtík je raw dortík s výbornou chutí a složením, ze kterého bude mít radost i vaše tělo.',
  'Naším cílem je tvořit dezerty s čistým a poctivým složením. Věříme, že sladké potěšení nemusí být jen hříchem, ale může být i příjemnou součástí každodenního života.',
  'Základem našich dezertů jsou oříšky, datle, ovoce, kokos a kakao. Používáme kvalitní suroviny a naše krémy doslazujeme pouze kvalitním medem od včelaře.',
  'Ať už si dopřejete kousek dortu ke kávě, nebo objednáte celý dort pro své blízké, chceme, aby vám každé sousto přineslo radost a dobrý pocit.',
] as const;

export const OFFER_CATEGORIES = [
  {
    id: 'vanocni-cukrovi',
    title: 'Vánoční cukroví',
    subtitle: '5 druhů raw cukroví • krabičky 300 g / 500 g / 1 000 g',
    priceFrom: 'od 500 Kč',
    path: '/vanocni-cukrovi',
    badge: 'Vánoce 2026',
    image: null as ProductPhoto | null,
  },
  {
    id: 'cele-dorty',
    title: 'Celé dorty',
    subtitle: '9 příchutí • velikosti 18 cm a 24 cm',
    priceFrom: 'od 750 Kč',
    path: '/cele-dorty',
    badge: 'Stálá nabídka',
    image: {
      src: '/images/dorty/uvodni-dort.webp',
      alt: 'Celý raw dort Rawtík zdobený ovocem a ořechy',
    },
  },
  {
    id: 'dezerty',
    title: 'Dezerty',
    subtitle: 'Jednotlivé klínky ke kávě • vždy 3 druhy v nabídce',
    priceFrom: '100 Kč / ks',
    path: '/dezerty',
    badge: 'Ke kávě',
    image: {
      src: '/images/dezerty/uvodni-dezerty.webp',
      alt: 'Jednotlivé klínky raw dezertů Rawtík',
    },
  },
] as const;

export const CHRISTMAS_BOX_PRICES = [
  { weight: '300 g', price: '500 Kč', highlight: false },
  { weight: '500 g', price: '800 Kč', highlight: true },
  { weight: '1 000 g', price: '1 600 Kč', highlight: false },
] as const;

export const CHRISTMAS_COOKIES: ChristmasCookie[] = [
  {
    id: 'arasidove-kosicky',
    name: 'Arašídové košíčky s čokoládou',
    ingredients:
      'Mandle, datle, kešu, 100% arašídové máslo, raw med, Maldonská mořská sůl, kokosový olej, kakao, arašídy.',
  },
  {
    id: 'oriskove-rohlicky',
    name: 'Oříškové rohlíčky',
    ingredients:
      'Lískové ořechy, vlašské ořechy, datle, vanilka, Maldonská mořská sůl, kokosový květový cukr, strouhaný kokos.',
  },
  {
    id: 'pistaciove-kornoutky',
    name: 'Pistáciové kornoutky s malinami',
    ingredients:
      'Pistácie, kešu, mandle, datle, maliny, raw med, citron, kokosový olej, dračí ovoce.',
  },
  {
    id: 'karamelove-tartaletky',
    name: 'Karamelové tartaletky',
    ingredients:
      'Mandle, kokosový olej, raw med, 100% arašídové máslo, vanilka, kakao, kokos.',
    note: 'Maliny na posypání podle aktuálního zdobení.',
  },
  {
    id: 'pernickove-orechy',
    name: 'Perníčkové ořechy',
    ingredients:
      'Pekanové ořechy, vlašské ořechy, datle, skořice, kešu, raw med, perníkové koření, kokosový olej.',
  },
];

export const CAKE_PRICES = [
  { label: 'Dort 18 cm', portions: '6–8 klínků', price: '750 Kč' },
  { label: 'Dort 24 cm', portions: '12 klínků', price: '1 200 Kč' },
  { label: 'Extra zdobení', portions: 'bohatší ovocné / ořechové', price: '+100 Kč' },
] as const;

export const WHOLE_CAKES: WholeCake[] = [
  {
    id: 'malinovy',
    name: 'Malinový dort',
    category: 'ovocny',
    ingredients:
      'Mandle, datle, maliny, kešu, raw med, citrón, kokos, kokosový olej, pistácie, dračí ovoce.',
    photos: [
      {
        src: '/images/dorty/malinovy-24cm.webp',
        alt: 'Malinový raw dort 24 cm',
        caption: 'Malinový dort (24 cm)',
      },
      {
        src: '/images/dorty/malinovy-18cm.webp',
        alt: 'Malinový raw dort 18 cm',
        caption: 'Malinový dort (18 cm)',
      },
      {
        src: '/images/dorty/malinovy-klinek.webp',
        alt: 'Malinový raw dort – detail klínku',
        caption: 'Detail v řezu (klínek)',
      },
      {
        src: '/images/dorty/malinovy-velikonoce.webp',
        alt: 'Malinový raw dort – sváteční zdobení',
        caption: 'Ukázka svátečního zdobení',
      },
    ],
  },
  {
    id: 'boruvkovy',
    name: 'Borůvkový dort',
    category: 'ovocny',
    ingredients:
      'Kešu, mandle, datle, kakao, borůvky, raw med, citrón, kokos, kokosový olej.',
    photos: [
      {
        src: '/images/dorty/boruvkovy.webp',
        alt: 'Borůvkový raw dort',
        caption: 'Borůvkový dort',
      },
    ],
  },
  {
    id: 'mangovy',
    name: 'Mangový dort',
    category: 'ovocny',
    ingredients:
      'Kešu, datle, skořice, mango, raw med, citrón, kokos, kokosový olej.',
    photos: [
      {
        src: '/images/dorty/mangovy.webp',
        alt: 'Mangový raw dort',
        caption: 'Mangový dort',
      },
    ],
  },
  {
    id: 'citronovy',
    name: 'Citrónový dort',
    category: 'ovocny',
    ingredients:
      'Kešu, datle, skořice, citrón, raw med, kokosový olej, kokos.',
    photos: [
      {
        src: '/images/dorty/citronovy.webp',
        alt: 'Citrónový raw dort',
        caption: 'Citrónový dort',
      },
      {
        src: '/images/dorty/citronovy-klinek.webp',
        alt: 'Citrónový raw dort – detail klínku',
        caption: 'Detail v řezu (klínek)',
      },
    ],
  },
  {
    id: 'visnovy',
    name: 'Višňový dort',
    category: 'ovocny',
    ingredients:
      'Mandle, datle, kakao, višně, kokosový olej, raw med, citrón, kokos.',
    photos: [
      {
        src: '/images/dorty/visnovy-1.webp',
        alt: 'Višňový raw dort',
        caption: 'Višňový dort',
      },
      {
        src: '/images/dorty/visnovy-2.webp',
        alt: 'Višňový raw dort – jiný pohled',
        caption: 'Višňový dort – detail',
      },
      {
        src: '/images/dorty/visnovy-cokolada.webp',
        alt: 'Višňový raw dort – varianta s čokoládou',
        caption: 'Varianta s čokoládou',
      },
    ],
  },
  {
    id: 'slany-arasid-snickers',
    name: 'Slaný arašíd / Snickers dort',
    category: 'neovocny',
    ingredients:
      'Mandle, datle, kešu, arašídy, raw med, sůl, kokosový olej, kakao.',
    photos: [
      {
        src: '/images/dorty/snickers-1.webp',
        alt: 'Snickers raw dort',
        caption: 'Snickers varianta',
      },
      {
        src: '/images/dorty/slany-arasid-zdobeny.webp',
        alt: 'Slaný arašíd raw dort – zdobená verze',
        caption: 'Slaný arašíd – zdobený',
      },
      {
        src: '/images/dorty/slany-arasid-zakladni.webp',
        alt: 'Slaný arašíd raw dort – základní verze',
        caption: 'Slaný arašíd – základní verze',
      },
      {
        src: '/images/dorty/snickers-2.webp',
        alt: 'Snickers raw dort – druhý pohled',
        caption: 'Snickers – detail',
      },
      {
        src: '/images/dorty/snickers-klinek.webp',
        alt: 'Snickers raw dort – klínek',
        caption: 'Detail v řezu (klínek)',
      },
    ],
  },
  {
    id: 'cokoladovy',
    name: 'Čokoládový dort',
    category: 'neovocny',
    ingredients: 'Mandle, kakao, datle, kešu, raw med, kokosový olej.',
    photos: [
      {
        src: '/images/dorty/cokoladovy-1.webp',
        alt: 'Čokoládový raw dort',
        caption: 'Čokoládový dort',
      },
      {
        src: '/images/dorty/cokoladovy-2.webp',
        alt: 'Čokoládový raw dort – druhý pohled',
        caption: 'Čokoládový dort – detail',
      },
    ],
  },
  {
    id: 'misa',
    name: 'Míša dort',
    category: 'neovocny',
    ingredients:
      'Mandle, kokos, kakao, datle, kešu, citrón, jablečný ocet, raw med, kokosový olej.',
    photos: [
      {
        src: '/images/dorty/misa-dort.webp',
        alt: 'Míša raw dort',
        caption: 'Celý Míša dort',
      },
      {
        src: '/images/dorty/misa-klinek-1.webp',
        alt: 'Míša raw dort – klínek 1',
        caption: 'Detail v řezu',
      },
      {
        src: '/images/dorty/misa-klinek-2.webp',
        alt: 'Míša raw dort – klínek 2',
        caption: 'Klínek – druhý pohled',
      },
      {
        src: '/images/dorty/misa-klinek-3.webp',
        alt: 'Míša raw dort – klínek 3',
        caption: 'Servírování ke kávě',
      },
    ],
  },
  {
    id: 'makovy',
    name: 'Makový dezert',
    category: 'neovocny',
    ingredients:
      'Kešu, kokos, mák, datle, citrón, raw med, švestky, višně, mandle.',
    photos: [
      {
        src: '/images/dorty/makovy-1.webp',
        alt: 'Makový raw dezert',
        caption: 'Makový dezert',
      },
      {
        src: '/images/dorty/makovy-2.webp',
        alt: 'Makový raw dezert – detail',
        caption: 'Makový dezert – detail',
      },
      {
        src: '/images/dorty/makovy-klinek.webp',
        alt: 'Makový raw dezert – klínek na talířku',
        caption: 'Detail v řezu (klínek)',
      },
    ],
  },
];

export const DESSERT_SLICE_PRICE = '100 Kč';

export const DESSERT_SLICES: DessertSlice[] = [
  {
    id: 'snickers-slany-arasid',
    name: 'Snickers / Slaný arašíd',
    note: 'Mandle, datle, kešu, arašídy, raw med, sůl, kokosový olej, kakao.',
    photo: {
      src: '/images/dezerty/snickers-klinek.webp',
      alt: 'Klínek Snickers / Slaný arašíd',
    },
  },
  {
    id: 'makovy-dezert',
    name: 'Makový dezert',
    note: 'Kešu, kokos, mák, datle, citrón, raw med, švestky, višně, mandle.',
    photo: {
      src: '/images/dezerty/makovy-klinek.webp',
      alt: 'Klínek Makového dezertu',
    },
  },
  {
    id: 'ovocny-dort',
    name: 'Ovocný dort (dle denní nabídky)',
    note: 'Aktuální ovocná příchuť z naší stálé nabídky (malinový, borůvkový, mangový, citrónový nebo višňový). Složení je stejné jako u celých dortů.',
    photo: {
      src: '/images/dezerty/ovocny-klinek.webp',
      alt: 'Klínek ovocného raw dortu',
    },
  },
];
