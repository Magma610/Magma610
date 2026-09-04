import type { Locale } from './locales';

// Servizi comuni ai due appartamenti (sezione "Cosa troverai" degli annunci Airbnb).
// La struttura (categorie/id) è indipendente dalla lingua; le etichette sono in AMENITY_LABELS.
// L'icona di ogni servizio si ricava dall'id tramite AMENITY_SVG_ICON_FILES qui sotto.
export interface AmenityItemDef {
  id: string;
}

export interface AmenityCategoryDef {
  id: string;
  items: AmenityItemDef[];
}

export const AMENITY_CATEGORIES: AmenityCategoryDef[] = [
  { id: 'bathroom', items: [
    { id: 'hairdryer' }, { id: 'bidet' }, { id: 'hotwater' }, { id: 'showergel' },
  ] },
  { id: 'bedroom-laundry', items: [
    { id: 'washer' },
  ] },
  { id: 'essentials', items: [
    { id: 'essentials-basic' }, { id: 'hangers' }, { id: 'bed-linens' },
    { id: 'drying-rack' }, { id: 'closet-space' },
  ] },
  { id: 'entertainment', items: [
    { id: 'tv' },
  ] },
  { id: 'family', items: [
    { id: 'travel-crib' },
  ] },
  { id: 'heating-cooling', items: [
    { id: 'ac' }, { id: 'heating' },
  ] },
  { id: 'home-safety', items: [
    { id: 'co-alarm' }, { id: 'fire-extinguisher' },
  ] },
  { id: 'internet-office', items: [
    { id: 'wifi' },
  ] },
  { id: 'kitchen-dining', items: [
    { id: 'kitchen' }, { id: 'fridge' }, { id: 'microwave' },
    { id: 'cooking-basics' }, { id: 'dishes' }, { id: 'induction-stove' }, { id: 'kettle' },
    { id: 'wine-glasses' }, { id: 'toaster' }, { id: 'dining-table' }, { id: 'coffee' },
  ] },
  { id: 'home-features', items: [
    { id: 'private-entrance' },
  ] },
  { id: 'outdoor', items: [
    { id: 'patio-balcony' }, { id: 'garden' }, { id: 'outdoor-furniture' }, { id: 'outdoor-dining' },
  ] },
  { id: 'parking', items: [
    { id: 'street-parking' },
  ] },
];

export const AMENITY_NOT_INCLUDED: AmenityItemDef[] = [
  { id: 'exterior-cameras' }, { id: 'dryer' }, { id: 'smoke-alarm' },
];

// Set di icone ufficiali Airbnb (SVG in public/images/camere/icone/), specifico per Magma 104.
// Mappa id servizio → nome file SVG (senza estensione). Additivo: non tocca AmenityIconKey/icon
// sopra, che restano usati dal vecchio sistema di icone disegnate a mano per Magma 102.
export const AMENITY_SVG_ICON_FILES: Record<string, string> = {
  hairdryer: 'asciugacapelli',
  bidet: 'bide',
  hotwater: 'acqua_calda',
  showergel: 'gel_doccia',
  washer: 'lavatrice',
  'essentials-basic': 'servizi_di_base',
  hangers: 'grucce',
  'bed-linens': 'biancheria_da_letto',
  'drying-rack': 'stendibiancheria_per_abiti',
  'closet-space': 'spazio_per_conservare_labbigliamento',
  tv: 'tv',
  'travel-crib': 'box_bebe-culla_da_viaggio',
  ac: 'aria_condizionata',
  heating: 'riscaldamento',
  'co-alarm': 'rilevatore_di_monossido_di_carbonio',
  'fire-extinguisher': 'estintore',
  wifi: 'wifi',
  kitchen: 'cucina',
  fridge: 'frigorifero',
  microwave: 'forno_a_microonde',
  'cooking-basics': 'servizi_di_base_per_cucinare',
  dishes: 'piatti_e_posate',
  'induction-stove': 'piano_cottura_a_induzione',
  kettle: 'bollitore',
  'wine-glasses': 'calici_da_vino',
  toaster: 'tostapane',
  'dining-table': 'tavolo_da_pranzo',
  coffee: 'caffe',
  'private-entrance': 'ingresso_privato',
  'patio-balcony': 'patio_o_balcone_condiviso',
  garden: 'giardino_condiviso',
  'outdoor-furniture': 'arredi_da_esterni',
  'outdoor-dining': 'zona_pranzo_allaperto',
  'street-parking': 'parcheggio_gratuito_in_strada',
  'exterior-cameras': 'non_disponibile_-_telecamere_di_sorveglianza_esterne',
  dryer: 'non_disponibile_-_asciugatrice',
  'smoke-alarm': 'non_disponibile_-_allarme_antincendio',
};

// Chiave 'not-included-title' a parte, non è un id di categoria/servizio.
export const AMENITY_LABELS: Record<Locale, Record<string, string>> = {
  it: {
    bathroom: 'Bagno', hairdryer: 'Asciugacapelli', bidet: 'Bidè', hotwater: 'Acqua calda', showergel: 'Gel doccia',
    'bedroom-laundry': 'Camera da letto e lavanderia', washer: 'Lavatrice',
    essentials: 'Servizi di base', 'essentials-basic': 'Asciugamani, lenzuola, sapone e carta igienica',
    hangers: 'Grucce', 'bed-linens': 'Biancheria da letto', 'drying-rack': 'Stendibiancheria per abiti',
    'closet-space': "Spazio per conservare l'abbigliamento",
    entertainment: 'Intrattenimento', tv: 'TV',
    family: 'Famiglia', 'travel-crib': 'Box bebè/culla da viaggio',
    'heating-cooling': 'Riscaldamento e climatizzazione', ac: 'Aria condizionata', heating: 'Riscaldamento',
    'home-safety': 'Sicurezza domestica', 'co-alarm': 'Rilevatore di monossido di carbonio', 'fire-extinguisher': 'Estintore',
    'internet-office': 'Internet e ufficio', wifi: 'Wifi',
    'kitchen-dining': 'Cucina e zona pranzo', kitchen: 'Cucina', fridge: 'Frigorifero', microwave: 'Forno a microonde',
    'cooking-basics': 'Servizi di base per cucinare (pentole, padelle, olio, sale e pepe)', dishes: 'Piatti e posate',
    'induction-stove': 'Piano cottura a induzione', kettle: 'Bollitore', 'wine-glasses': 'Calici da vino',
    toaster: 'Tostapane', 'dining-table': 'Tavolo da pranzo', coffee: 'Caffè',
    'home-features': "Caratteristiche dell'alloggio", 'private-entrance': 'Ingresso privato',
    outdoor: "All'aperto", 'patio-balcony': 'Patio o balcone condiviso', garden: 'Giardino condiviso',
    'outdoor-furniture': 'Arredi da esterni', 'outdoor-dining': "Zona pranzo all'aperto",
    parking: 'Parcheggi e strutture', 'street-parking': 'Parcheggio gratuito in strada',
    'exterior-cameras': 'Telecamere di sorveglianza esterne', dryer: 'Asciugatrice', 'smoke-alarm': 'Allarme antincendio',
    'not-included-title': 'Non incluso',
  },
  en: {
    bathroom: 'Bathroom', hairdryer: 'Hair dryer', bidet: 'Bidet', hotwater: 'Hot water', showergel: 'Shower gel',
    'bedroom-laundry': 'Bedroom and laundry', washer: 'Washer',
    essentials: 'Essentials', 'essentials-basic': 'Towels, bed sheets, soap and toilet paper',
    hangers: 'Hangers', 'bed-linens': 'Bed linens', 'drying-rack': 'Clothing drying rack',
    'closet-space': 'Closet / clothing storage space',
    entertainment: 'Entertainment', tv: 'TV',
    family: 'Family', 'travel-crib': 'Travel crib',
    'heating-cooling': 'Heating and cooling', ac: 'Air conditioning', heating: 'Heating',
    'home-safety': 'Home safety', 'co-alarm': 'Carbon monoxide alarm', 'fire-extinguisher': 'Fire extinguisher',
    'internet-office': 'Internet and office', wifi: 'Wifi',
    'kitchen-dining': 'Kitchen and dining', kitchen: 'Kitchen', fridge: 'Refrigerator', microwave: 'Microwave',
    'cooking-basics': 'Cooking basics (pots, pans, oil, salt and pepper)', dishes: 'Dishes and silverware',
    'induction-stove': 'Induction stove', kettle: 'Kettle', 'wine-glasses': 'Wine glasses',
    toaster: 'Toaster', 'dining-table': 'Dining table', coffee: 'Coffee',
    'home-features': 'Home features', 'private-entrance': 'Private entrance',
    outdoor: 'Outdoor', 'patio-balcony': 'Shared patio or balcony', garden: 'Shared garden',
    'outdoor-furniture': 'Outdoor furniture', 'outdoor-dining': 'Outdoor dining area',
    parking: 'Parking and facilities', 'street-parking': 'Free street parking',
    'exterior-cameras': 'Exterior security cameras', dryer: 'Dryer', 'smoke-alarm': 'Smoke alarm',
    'not-included-title': 'Not included',
  },
  es: {
    bathroom: 'Baño', hairdryer: 'Secador de pelo', bidet: 'Bidé', hotwater: 'Agua caliente', showergel: 'Gel de ducha',
    'bedroom-laundry': 'Dormitorio y lavandería', washer: 'Lavadora',
    essentials: 'Básicos', 'essentials-basic': 'Toallas, sábanas, jabón y papel higiénico',
    hangers: 'Perchas', 'bed-linens': 'Ropa de cama', 'drying-rack': 'Tendedero para ropa',
    'closet-space': 'Espacio para guardar la ropa',
    entertainment: 'Entretenimiento', tv: 'TV',
    family: 'Familia', 'travel-crib': 'Cuna de viaje',
    'heating-cooling': 'Calefacción y climatización', ac: 'Aire acondicionado', heating: 'Calefacción',
    'home-safety': 'Seguridad en el hogar', 'co-alarm': 'Detector de monóxido de carbono', 'fire-extinguisher': 'Extintor',
    'internet-office': 'Internet y oficina', wifi: 'Wifi',
    'kitchen-dining': 'Cocina y comedor', kitchen: 'Cocina', fridge: 'Frigorífico', microwave: 'Microondas',
    'cooking-basics': 'Básicos de cocina (ollas, sartenes, aceite, sal y pimienta)', dishes: 'Vajilla y cubertería',
    'induction-stove': 'Placa de inducción', kettle: 'Hervidor', 'wine-glasses': 'Copas de vino',
    toaster: 'Tostadora', 'dining-table': 'Mesa de comedor', coffee: 'Café',
    'home-features': 'Características del alojamiento', 'private-entrance': 'Entrada privada',
    outdoor: 'Exterior', 'patio-balcony': 'Patio o balcón compartido', garden: 'Jardín compartido',
    'outdoor-furniture': 'Muebles de exterior', 'outdoor-dining': 'Zona de comedor al aire libre',
    parking: 'Aparcamiento e instalaciones', 'street-parking': 'Aparcamiento gratuito en la calle',
    'exterior-cameras': 'Cámaras de seguridad exteriores', dryer: 'Secadora', 'smoke-alarm': 'Alarma de incendios',
    'not-included-title': 'No incluido',
  },
  fr: {
    bathroom: 'Salle de bain', hairdryer: 'Sèche-cheveux', bidet: 'Bidet', hotwater: 'Eau chaude', showergel: 'Gel douche',
    'bedroom-laundry': 'Chambre et buanderie', washer: 'Lave-linge',
    essentials: 'Éléments essentiels', 'essentials-basic': 'Serviettes, draps, savon et papier toilette',
    hangers: 'Cintres', 'bed-linens': 'Draps de lit', 'drying-rack': 'Étendoir à linge',
    'closet-space': 'Espace de rangement pour les vêtements',
    entertainment: 'Divertissement', tv: 'TV',
    family: 'Famille', 'travel-crib': 'Lit parapluie',
    'heating-cooling': 'Chauffage et climatisation', ac: 'Climatisation', heating: 'Chauffage',
    'home-safety': 'Sécurité domestique', 'co-alarm': 'Détecteur de monoxyde de carbone', 'fire-extinguisher': 'Extincteur',
    'internet-office': 'Internet et bureau', wifi: 'Wifi',
    'kitchen-dining': 'Cuisine et salle à manger', kitchen: 'Cuisine', fridge: 'Réfrigérateur', microwave: 'Micro-ondes',
    'cooking-basics': 'Ustensiles de base (casseroles, poêles, huile, sel et poivre)', dishes: 'Vaisselle et couverts',
    'induction-stove': 'Plaque à induction', kettle: 'Bouilloire', 'wine-glasses': 'Verres à vin',
    toaster: 'Grille-pain', 'dining-table': 'Table à manger', coffee: 'Café',
    'home-features': 'Caractéristiques du logement', 'private-entrance': 'Entrée privée',
    outdoor: 'Extérieur', 'patio-balcony': 'Patio ou balcon partagé', garden: 'Jardin partagé',
    'outdoor-furniture': "Mobilier d'extérieur", 'outdoor-dining': 'Coin repas extérieur',
    parking: 'Parking et équipements', 'street-parking': 'Parking gratuit dans la rue',
    'exterior-cameras': 'Caméras de sécurité extérieures', dryer: 'Sèche-linge', 'smoke-alarm': 'Détecteur de fumée',
    'not-included-title': 'Non inclus',
  },
  de: {
    bathroom: 'Badezimmer', hairdryer: 'Haartrockner', bidet: 'Bidet', hotwater: 'Warmwasser', showergel: 'Duschgel',
    'bedroom-laundry': 'Schlafzimmer und Wäsche', washer: 'Waschmaschine',
    essentials: 'Grundausstattung', 'essentials-basic': 'Handtücher, Bettwäsche, Seife und Toilettenpapier',
    hangers: 'Kleiderbügel', 'bed-linens': 'Bettwäsche', 'drying-rack': 'Wäscheständer',
    'closet-space': 'Stauraum für Kleidung',
    entertainment: 'Unterhaltung', tv: 'TV',
    family: 'Familie', 'travel-crib': 'Reisebett',
    'heating-cooling': 'Heizung und Klimaanlage', ac: 'Klimaanlage', heating: 'Heizung',
    'home-safety': 'Sicherheit zu Hause', 'co-alarm': 'Kohlenmonoxidmelder', 'fire-extinguisher': 'Feuerlöscher',
    'internet-office': 'Internet und Arbeitsbereich', wifi: 'WLAN',
    'kitchen-dining': 'Küche und Essbereich', kitchen: 'Küche', fridge: 'Kühlschrank', microwave: 'Mikrowelle',
    'cooking-basics': 'Kochgrundausstattung (Töpfe, Pfannen, Öl, Salz und Pfeffer)', dishes: 'Geschirr und Besteck',
    'induction-stove': 'Induktionskochfeld', kettle: 'Wasserkocher', 'wine-glasses': 'Weingläser',
    toaster: 'Toaster', 'dining-table': 'Esstisch', coffee: 'Kaffee',
    'home-features': 'Ausstattungsmerkmale', 'private-entrance': 'Privater Eingang',
    outdoor: 'Außenbereich', 'patio-balcony': 'Gemeinsame Terrasse oder Balkon', garden: 'Gemeinsamer Garten',
    'outdoor-furniture': 'Gartenmöbel', 'outdoor-dining': 'Essbereich im Freien',
    parking: 'Parkplatz und Einrichtungen', 'street-parking': 'Kostenloser Parkplatz auf der Straße',
    'exterior-cameras': 'Außenüberwachungskameras', dryer: 'Trockner', 'smoke-alarm': 'Rauchmelder',
    'not-included-title': 'Nicht enthalten',
  },
};
