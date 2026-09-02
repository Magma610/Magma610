import type { Locale } from './locales';

export const LISTING_UI: Record<Locale, {
  tipo: string;
  ospiti: string;
  camereDaLetto: string;
  monolocale: string;
  letto: string;
  letti: string;
  bagno: string;
  novita: string;
  whatYouFind: string;
  showAllServices: (n: number) => string;
  priceInfo: string;
  bookOnAirbnb: string;
  services: { wifi: string; cucina: string; parcheggio: string; tv: string; lavatrice: string; allarme: string };
}> = {
  it: {
    tipo: 'Casa', ospiti: 'ospiti', camereDaLetto: 'camera da letto', monolocale: 'Monolocale',
    letto: 'letto', letti: 'letti', bagno: 'bagno', novita: '★ Novità',
    whatYouFind: 'Cosa troverai',
    showAllServices: (n) => `Mostra tutti e ${n} i servizi`,
    priceInfo: 'Prezzi e disponibilità su Airbnb', bookOnAirbnb: 'Prenota su Airbnb',
    services: { wifi: 'Wifi', cucina: 'Cucina', parcheggio: 'Parcheggio gratuito in strada', tv: 'TV', lavatrice: 'Lavatrice', allarme: 'Allarme antincendio' },
  },
  es: {
    tipo: 'Casa', ospiti: 'huéspedes', camereDaLetto: 'dormitorio', monolocale: 'Estudio',
    letto: 'cama', letti: 'camas', bagno: 'baño', novita: '★ Novedad',
    whatYouFind: 'Qué encontrarás',
    showAllServices: (n) => `Ver los ${n} servicios`,
    priceInfo: 'Precios y disponibilidad en Airbnb', bookOnAirbnb: 'Reservar en Airbnb',
    services: { wifi: 'Wifi', cucina: 'Cocina', parcheggio: 'Aparcamiento gratuito en la calle', tv: 'TV', lavatrice: 'Lavadora', allarme: 'Alarma de incendios' },
  },
  en: {
    tipo: 'House', ospiti: 'guests', camereDaLetto: 'bedroom', monolocale: 'Studio',
    letto: 'bed', letti: 'beds', bagno: 'bathroom', novita: '★ New',
    whatYouFind: "What you'll find",
    showAllServices: (n) => `Show all ${n} amenities`,
    priceInfo: 'Prices and availability on Airbnb', bookOnAirbnb: 'Book on Airbnb',
    services: { wifi: 'Wifi', cucina: 'Kitchen', parcheggio: 'Free street parking', tv: 'TV', lavatrice: 'Washer', allarme: 'Smoke alarm' },
  },
  fr: {
    tipo: 'Maison', ospiti: 'voyageurs', camereDaLetto: 'chambre', monolocale: 'Studio',
    letto: 'lit', letti: 'lits', bagno: 'salle de bain', novita: '★ Nouveauté',
    whatYouFind: 'Ce que vous trouverez',
    showAllServices: (n) => `Afficher les ${n} équipements`,
    priceInfo: 'Prix et disponibilités sur Airbnb', bookOnAirbnb: 'Réserver sur Airbnb',
    services: { wifi: 'Wifi', cucina: 'Cuisine', parcheggio: 'Parking gratuit dans la rue', tv: 'TV', lavatrice: 'Lave-linge', allarme: 'Détecteur de fumée' },
  },
  de: {
    tipo: 'Haus', ospiti: 'Gäste', camereDaLetto: 'Schlafzimmer', monolocale: 'Studio',
    letto: 'Bett', letti: 'Betten', bagno: 'Bad', novita: '★ Neu',
    whatYouFind: 'Ausstattung',
    showAllServices: (n) => `Alle ${n} Ausstattungsmerkmale anzeigen`,
    priceInfo: 'Preise und Verfügbarkeit auf Airbnb', bookOnAirbnb: 'Auf Airbnb buchen',
    services: { wifi: 'WLAN', cucina: 'Küche', parcheggio: 'Kostenlose Parkplätze auf der Straße', tv: 'TV', lavatrice: 'Waschmaschine', allarme: 'Rauchmelder' },
  },
};
