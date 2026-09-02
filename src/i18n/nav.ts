import type { Locale } from './locales';

export const NAV: Record<Locale, {
  home: string;
  struttura: string;
  territorio: string;
  blog: string;
  contatti: string;
  prenota: string;
}> = {
  it: { home: 'Home', struttura: 'La Struttura', territorio: 'Vivere il Territorio', blog: 'Blog', contatti: 'Contatti', prenota: 'Prenota' },
  es: { home: 'Inicio', struttura: 'La Casa', territorio: 'Vivir el Territorio', blog: 'Blog', contatti: 'Contacto', prenota: 'Reservar' },
  en: { home: 'Home', struttura: 'The Property', territorio: 'Explore the Area', blog: 'Blog', contatti: 'Contact', prenota: 'Book' },
  fr: { home: 'Accueil', struttura: 'La Maison', territorio: 'Vivre le Territoire', blog: 'Blog', contatti: 'Contact', prenota: 'Réserver' },
  de: { home: 'Start', struttura: 'Das Haus', territorio: 'Die Region Erleben', blog: 'Blog', contatti: 'Kontakt', prenota: 'Buchen' },
};

export const TERRITORIO_SUBMENU: Record<Locale, {
  trekking: string;
  cantine: string;
  alcantara: string;
  taormina: string;
  catania: string;
}> = {
  it: { trekking: "Trekking sull'Etna", cantine: "Cantine dell'Etna", alcantara: "Gole dell'Alcantara", taormina: 'Taormina', catania: 'Catania storica' },
  es: { trekking: 'Senderismo en el Etna', cantine: 'Bodegas del Etna', alcantara: 'Gargantas del Alcantara', taormina: 'Taormina', catania: 'Catania histórica' },
  en: { trekking: 'Hiking Mount Etna', cantine: 'Etna Wineries', alcantara: 'Alcantara Gorges', taormina: 'Taormina', catania: 'Historic Catania' },
  fr: { trekking: "Randonnée sur l'Etna", cantine: "Caves de l'Etna", alcantara: "Gorges de l'Alcantara", taormina: 'Taormine', catania: 'Catane historique' },
  de: { trekking: 'Wandern am Ätna', cantine: 'Weingüter am Ätna', alcantara: 'Alcantara-Schlucht', taormina: 'Taormina', catania: 'Historisches Catania' },
};

// slug usati negli URL — restano stabili in tutte le lingue per semplicità e SEO
export const TERRITORIO_SLUGS = {
  trekking: 'trekking-etna',
  cantine: 'cantine-etna',
  alcantara: 'gole-alcantara',
  taormina: 'taormina',
  catania: 'catania-storica',
} as const;

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
