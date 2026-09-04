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
  showAllServices: string;
  showLessServices: string;
  seeAllPhotos: string;
  priceInfo: string;
  bookOnAirbnb: string;
  seeAvailability: string;
}> = {
  it: {
    tipo: 'Casa', ospiti: 'ospiti', camereDaLetto: 'camera da letto', monolocale: 'Monolocale',
    letto: 'letto', letti: 'letti', bagno: 'bagno', novita: '★ Novità',
    whatYouFind: 'Cosa troverai',
    showAllServices: 'Scopri tutto', showLessServices: 'Mostra meno',
    seeAllPhotos: 'Guarda tutte le foto',
    priceInfo: 'Prezzi e disponibilità su Airbnb', bookOnAirbnb: 'Prenota su Airbnb',
    seeAvailability: 'Vedi disponibilità',
  },
  es: {
    tipo: 'Casa', ospiti: 'huéspedes', camereDaLetto: 'dormitorio', monolocale: 'Estudio',
    letto: 'cama', letti: 'camas', bagno: 'baño', novita: '★ Novedad',
    whatYouFind: 'Qué encontrarás',
    showAllServices: 'Ver todos los servicios', showLessServices: 'Ver menos',
    seeAllPhotos: 'Ver todas las fotos',
    priceInfo: 'Precios y disponibilidad en Airbnb', bookOnAirbnb: 'Reservar en Airbnb',
    seeAvailability: 'Ver disponibilidad',
  },
  en: {
    tipo: 'House', ospiti: 'guests', camereDaLetto: 'bedroom', monolocale: 'Studio',
    letto: 'bed', letti: 'beds', bagno: 'bathroom', novita: '★ New',
    whatYouFind: "What you'll find",
    showAllServices: 'Show all amenities', showLessServices: 'Show less',
    seeAllPhotos: 'See all photos',
    priceInfo: 'Prices and availability on Airbnb', bookOnAirbnb: 'Book on Airbnb',
    seeAvailability: 'See availability',
  },
  fr: {
    tipo: 'Maison', ospiti: 'voyageurs', camereDaLetto: 'chambre', monolocale: 'Studio',
    letto: 'lit', letti: 'lits', bagno: 'salle de bain', novita: '★ Nouveauté',
    whatYouFind: 'Ce que vous trouverez',
    showAllServices: 'Afficher tous les équipements', showLessServices: 'Afficher moins',
    seeAllPhotos: 'Voir toutes les photos',
    priceInfo: 'Prix et disponibilités sur Airbnb', bookOnAirbnb: 'Réserver sur Airbnb',
    seeAvailability: 'Voir les disponibilités',
  },
  de: {
    tipo: 'Haus', ospiti: 'Gäste', camereDaLetto: 'Schlafzimmer', monolocale: 'Studio',
    letto: 'Bett', letti: 'Betten', bagno: 'Bad', novita: '★ Neu',
    whatYouFind: 'Ausstattung',
    showAllServices: 'Alle Ausstattungsmerkmale anzeigen', showLessServices: 'Weniger anzeigen',
    seeAllPhotos: 'Alle Fotos ansehen',
    priceInfo: 'Preise und Verfügbarkeit auf Airbnb', bookOnAirbnb: 'Auf Airbnb buchen',
    seeAvailability: 'Verfügbarkeit ansehen',
  },
};
