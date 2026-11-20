export const SITE = {
  brand: 'RAWTÍK',
  tagline: 'Raw dorty & vánoční cukroví bez výčitek',
  owner: 'Andrea Hrochová',
  ico: '87968657',
  location: 'Praha 7 – Holešovice',
  pickupPoint: 'Nádraží Holešovice',
  phoneDisplay: '+420 605 071 007',
  phoneShort: '605 071 007',
  phoneHref: 'tel:+420605071007',
  whatsappNumber: '420605071007',
  email: 'rawtik@seznam.cz',
  instagramHandle: '@rawtik_cz',
  instagramUrl: 'https://www.instagram.com/rawtik_cz/',
  orderNoticeDays: 2,
  /** Přepínač vánoční sezóny (po Vánocích stačí změnit na false) */
  christmasSeason: true,
} as const;

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path || path === '/') {
    return `${base}/`;
  }
  if (path.startsWith('#')) {
    return `${base}/${path}`;
  }
  return `${base}/${path.replace(/^\//, '')}`;
}

export function getWhatsAppUrl(prefillMessage: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(prefillMessage)}`;
}

export const NAV_ITEMS = [
  { label: 'Domů', path: '/' },
  { label: 'O nás', path: '/#o-nas' },
  {
    label: 'Nabídka a ceník',
    path: '/#nabidka',
    children: [
      { label: '1. Vánoční cukroví', path: '/vanocni-cukrovi' },
      { label: '2. Celé dorty', path: '/cele-dorty' },
      { label: '3. Dezerty (klínky)', path: '/dezerty' },
    ],
  },
  { label: 'Jak objednat a převzetí', path: '/#jak-objednat' },
  { label: 'Kontakt', path: '/#kontakt' },
] as const;
