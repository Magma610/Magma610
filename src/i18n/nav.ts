import type { Locale } from './locales';

export const NAV: Record<Locale, {
  home: string;
  struttura: string;
  territorio: string;
  blog: string;
  contatti: string;
  faq: string;
  prenota: string;
  menu: string;
}> = {
  it: { home: 'Home', struttura: 'La Struttura', territorio: 'Vivere il Territorio', blog: 'Blog', contatti: 'Contatti', faq: 'FAQ', prenota: 'Prenota', menu: 'Menu' },
  es: { home: 'Inicio', struttura: 'La Casa', territorio: 'Vivir el Territorio', blog: 'Blog', contatti: 'Contacto', faq: 'FAQ', prenota: 'Reservar', menu: 'Menú' },
  en: { home: 'Home', struttura: 'The Property', territorio: 'Explore the Area', blog: 'Blog', contatti: 'Contact', faq: 'FAQ', prenota: 'Book', menu: 'Menu' },
  fr: { home: 'Accueil', struttura: 'La Maison', territorio: 'Vivre le Territoire', blog: 'Blog', contatti: 'Contact', faq: 'FAQ', prenota: 'Réserver', menu: 'Menu' },
  de: { home: 'Start', struttura: 'Das Haus', territorio: 'Die Region Erleben', blog: 'Blog', contatti: 'Kontakt', faq: 'FAQ', prenota: 'Buchen', menu: 'Menü' },
};

export const TERRITORIO_SUBMENU: Record<Locale, {
  trekking: string;
  cantine: string;
  alcantara: string;
  taormina: string;
  catania: string;
  bici: string;
  morgagni: string;
}> = {
  it: { trekking: "Trekking sull'Etna", cantine: "Cantine dell'Etna", alcantara: "Gole dell'Alcantara", taormina: 'Taormina', catania: 'Catania storica', bici: "In bici sull'Etna", morgagni: 'Vicino al Centro Cuore Morgagni' },
  es: { trekking: 'Senderismo en el Etna', cantine: 'Bodegas del Etna', alcantara: 'Gargantas del Alcantara', taormina: 'Taormina', catania: 'Catania histórica', bici: 'En bici por el Etna', morgagni: 'Cerca del Centro Cuore Morgagni' },
  en: { trekking: 'Hiking Mount Etna', cantine: 'Etna Wineries', alcantara: 'Alcantara Gorges', taormina: 'Taormina', catania: 'Historic Catania', bici: 'Cycling Mount Etna', morgagni: 'Near Centro Cuore Morgagni' },
  fr: { trekking: "Randonnée sur l'Etna", cantine: "Caves de l'Etna", alcantara: "Gorges de l'Alcantara", taormina: 'Taormine', catania: 'Catane historique', bici: "À vélo sur l'Etna", morgagni: 'Près du Centro Cuore Morgagni' },
  de: { trekking: 'Wandern am Ätna', cantine: 'Weingüter am Ätna', alcantara: 'Alcantara-Schlucht', taormina: 'Taormina', catania: 'Historisches Catania', bici: 'Mit dem Rad am Ätna', morgagni: 'In der Nähe des Centro Cuore Morgagni' },
};

// slug usati negli URL — restano stabili in tutte le lingue per semplicità e SEO
export const TERRITORIO_SLUGS = {
  trekking: 'trekking-etna',
  cantine: 'cantine-etna',
  alcantara: 'gole-alcantara',
  taormina: 'taormina',
  catania: 'catania-storica',
  bici: 'bici-etna',
  morgagni: 'centro-cuore-morgagni',
} as const;

// Mappa inversa slug -> chiave, per risalire all'etichetta TERRITORIO_SUBMENU
// (es. per il breadcrumb) a partire dallo slug nell'URL.
export const TERRITORIO_KEY_BY_SLUG: Record<string, keyof typeof TERRITORIO_SLUGS> = Object.fromEntries(
  Object.entries(TERRITORIO_SLUGS).map(([key, slug]) => [slug, key])
) as Record<string, keyof typeof TERRITORIO_SLUGS>;

export const FOOTER: Record<Locale, {
  bAndB: string;
  resources: string;
  book: string;
  legalPrivacy: string;
  legalCookie: string;
}> = {
  it: { bAndB: 'Il B&B', resources: 'Risorse', book: 'Prenota', legalPrivacy: 'Privacy Policy', legalCookie: 'Cookie Policy' },
  es: { bAndB: 'El B&B', resources: 'Recursos', book: 'Reservar', legalPrivacy: 'Política de Privacidad', legalCookie: 'Política de Cookies' },
  en: { bAndB: 'The B&B', resources: 'Resources', book: 'Book', legalPrivacy: 'Privacy Policy', legalCookie: 'Cookie Policy' },
  fr: { bAndB: 'Le B&B', resources: 'Ressources', book: 'Réserver', legalPrivacy: 'Politique de Confidentialité', legalCookie: 'Politique de Cookies' },
  de: { bAndB: 'Das B&B', resources: 'Ressourcen', book: 'Buchen', legalPrivacy: 'Datenschutz', legalCookie: 'Cookie-Richtlinie' },
};

export const COOKIE_BANNER: Record<Locale, { text: string; policyLink: string; reject: string; accept: string }> = {
  it: { text: 'Usiamo cookie tecnici, necessari al funzionamento del sito, e — solo con il tuo consenso — cookie di analisi.', policyLink: 'Leggi la Cookie Policy', reject: 'Rifiuta non essenziali', accept: 'Accetta tutti' },
  es: { text: 'Utilizamos cookies técnicas, necesarias para el funcionamiento del sitio, y — solo con tu consentimiento — cookies de análisis.', policyLink: 'Leer la Política de Cookies', reject: 'Rechazar no esenciales', accept: 'Aceptar todo' },
  en: { text: 'We use technical cookies, necessary for the site to work, and — only with your consent — analytics cookies.', policyLink: 'Read the Cookie Policy', reject: 'Reject non-essential', accept: 'Accept all' },
  fr: { text: 'Nous utilisons des cookies techniques, nécessaires au fonctionnement du site, et — uniquement avec votre consentement — des cookies d\u2019analyse.', policyLink: 'Lire la Politique de Cookies', reject: 'Refuser les non essentiels', accept: 'Tout accepter' },
  de: { text: 'Wir verwenden technische Cookies, die für den Betrieb der Website notwendig sind, und — nur mit Ihrer Zustimmung — Analyse-Cookies.', policyLink: 'Cookie-Richtlinie lesen', reject: 'Nicht notwendige ablehnen', accept: 'Alle akzeptieren' },
};
