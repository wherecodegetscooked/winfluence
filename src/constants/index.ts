// Zentrale Konfiguration der winfluence-Seite.
// Texte und Daten stammen aus dem Design; Bilder sind Platzhalter und
// werden spaeter durch echte Assets ersetzt.
export const siteConfig = {
  name: 'winfluence',
  legalName: 'winfluence AG',
  tagline: 'Connecting brands with creators',
  description:
    'winfluence uses data to assemble suitable creator clusters and automates the campaign process – from the briefing to a successful collaboration.',

  domain: 'winfluence.com',
  url: 'https://winfluence.com',

  email: 'hello@winfluence.com',
  phone: '+41 44 000 00 00',
  phoneHref: 'tel:+41440000000',

  address: {
    name: 'winfluence',
    company: 'winfluence AG',
    street: 'Musterstrasse 1',
    zip: '8000',
    city: 'Zuerich',
    country: 'Schweiz',
  },

  // Statistik-Wert aus dem Hero.
  brandsCount: 103,
} as const;

// Marken-Logos im Hero-Streifen ("Some of the 103 brands we work with…").
export const brandLogos: { name: string; src: string }[] = [
  { name: 'abeauty', src: '/brand-logos/abeauty_1024x1024.png' },
  { name: 'DillySocks', src: '/brand-logos/Dillysocks_1024x1024.png' },
  { name: 'THE CAPRA', src: '/brand-logos/capra_1024x1024.png' },
  { name: 'JUST Style', src: '/brand-logos/juststyle_1024x1024.png' },
  { name: 'Bel Hair', src: '/brand-logos/belhair_1024x1024.png' },
  { name: 'KALTE LUST', src: '/brand-logos/kaltelust_1024x1024.png' },
];

export const allBrandLogos: { name: string; src: string }[] = [
  { name: 'abeauty', src: '/brand-logos/abeauty_1024x1024.png' },
  { name: 'B-beautyful', src: '/Brand Logos/B-beautyful.png' },
  { name: 'Bel Hair', src: '/brand-logos/belhair_1024x1024.png' },
  { name: 'Benedict', src: '/Brand Logos/Benedict.png' },
  { name: 'Black Swan Academy', src: '/Brand Logos/Blackswanacademy.webp' },
  { name: 'THE CAPRA', src: '/brand-logos/capra_1024x1024.png' },
  { name: 'Chrigis Sport Shop', src: '/Brand Logos/Chrigissportshop.png' },
  { name: 'DillySocks', src: '/brand-logos/Dillysocks_1024x1024.png' },
  { name: 'Eternal Echo', src: '/Brand Logos/Eternalecho.png' },
  { name: 'Goldeneider', src: '/Brand Logos/Goldeneider.png' },
  { name: 'JUST Style', src: '/brand-logos/juststyle_1024x1024.png' },
  { name: 'KALTE LUST', src: '/brand-logos/kaltelust_1024x1024.png' },
  { name: 'Solabs', src: '/Brand Logos/Solabs.png' },
];

// Bildcollage im Hero (rechte Spalte), versetzt wie im Design.
// Drei fluide Spalten; jede mit eigenem vertikalen Versatz (offset).
// Die Creator-Fotos haben das Marken-Logo bereits eingebettet.
export interface CollageTile {
  src: string;
  alt: string;
}
export interface CollageColumn {
  offset: string; // Tailwind pt-* fuer den vertikalen Versatz
  tiles: CollageTile[];
}

export const heroCollage: CollageColumn[] = [
  // Linke Spalte: am tiefsten versetzt.
  {
    offset: 'pt-24 md:pt-32',
    tiles: [{ src: '/hero/capra.png', alt: 'THE CAPRA Kampagne' }],
  },
  // Mittlere Spalte: mittlerer Versatz.
  {
    offset: 'pt-12 md:pt-16',
    tiles: [
      { src: '/hero/dillysocks.png', alt: 'DillySocks Kampagne' },
      { src: '/hero/kaltelust.png', alt: 'KALTE LUST Kampagne' },
    ],
  },
  // Rechte Spalte: startet ganz oben.
  {
    offset: 'pt-0',
    tiles: [
      { src: '/hero/juststyle.png', alt: 'JUST Style Kampagne' },
      { src: '/hero/belhair.png', alt: 'Bel Hair Kampagne' },
      { src: '/hero/abeauty.png', alt: 'abeauty Kampagne' },
    ],
  },
];

// Case-Studies (Sektion mit "Next case study").
export interface CaseStudy {
  brand: string;
  body: string;
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    brand: "Levi's",
    body:
      'winfluence has demonstrated that many micro-influencers with high engagement rates perform better than macro-influencers. The process was straightforward, and we achieved spectacular reach among Gen Z on a small budget.',
    image: '/case-studies/screen_jost.png',
  },
  {
    brand: 'DillySocks',
    body:
      'DillySocks worked with a cluster of lifestyle creators to launch their seasonal collection. The automated briefing process matched 24 creators to the brand in under 48 hours and delivered authentic content across Instagram and TikTok.',
  },
  {
    brand: 'THE CAPRA',
    body:
      'THE CAPRA Saas-Fee filled its winter season with a curated group of travel and wellness creators. The campaign ran fully automated from briefing to payout and produced a steady stream of premium alpine content.',
  },
];

// Talent-Liste im Brands-Dashboard-Mockup.
export const dashboardTalents: {
  name: string;
  category: string;
  country: string;
  reach: string;
}[] = [
  { name: 'Anni Haase', category: 'Beauty & Fashion', country: 'USA', reach: '2.90M' },
  { name: 'Thalita Ferraz', category: 'Beauty & Fashion', country: 'Colombia', reach: '1.72M' },
  { name: 'J Alex', category: 'Health & Fitness', country: 'Venezuela', reach: '586.1K' },
];

// Deals im Creators-Marketplace-Mockup (Handy).
export const marketplaceDeals: {
  brand: string;
  title: string;
  match: string;
  deal: string;
  date: string;
}[] = [
  { brand: 'KALTE LUST', title: 'Neuer Donat mit Erdbeerges…', match: '98%', deal: 'Barter Deal 50.–', date: '30.8.2026' },
  { brand: 'Google', title: 'Die neue Suchmaschine mit…', match: '95%', deal: 'Barter Deal 100.–', date: '11.9.2026' },
  { brand: 'Sinalco', title: 'Neuer Sommergeschmack…', match: '91%', deal: 'Barter Deal 100.–', date: '12.9.2026' },
  { brand: 'VISA', title: 'Kredit ohne Zins…', match: '88%', deal: 'Barter Deal 800.–', date: '18.10.2026' },
  { brand: 'CNN', title: 'Free TV für 3 Monate…', match: '61%', deal: 'Barter Deal 800.–', date: '2.11.2026' },
  { brand: 'Harley', title: 'Neue Freiheit mit Harley…', match: '41%', deal: 'Barter Deal 800.–', date: '12.12.2026' },
];
