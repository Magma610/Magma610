// Dati reali presi dagli annunci Airbnb di Magma 102 e Magma 104.
// NOTA: le foto sono ancora linkate dal CDN di Airbnb (muscache.com).
// Prima della messa online definitiva vanno scaricate e servite da /public/images/camere/
// (Next/Image-style optimization non serve qui, ma va comunque evitata la dipendenza esterna).

export const listings = [
  {
    slug: 'magma-104',
    name: 'Magma 104',
    airbnbUrl: 'https://www.airbnb.it/rooms/1748467293214784281',
    tipo: 'Casa',
    ospiti: 2,
    camereDaLetto: 1,
    letti: 1,
    bagni: 1,
    descrizione:
      "Dimora di charme in pietra lavica nel cuore di Pedara, alle pendici dell'Etna. Un appartamento accogliente e curato, dove il fascino dell'architettura siciliana incontra il comfort moderno. Ambienti luminosi, spazi funzionali e una caratteristica corte esterna attrezzata — la posizione ideale per scoprire l'Etna, i borghi vicini e la Sicilia orientale.",
    totaleServizi: 34,
    foto: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748467293214784281/original/a213e58d-d0cb-4b69-b125-99420b2097ea.png?im_w=1200&auto=webp',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748467293214784281/original/7590053f-1a9b-45f1-816b-e2aea14f6a22.png?im_w=1200&auto=webp',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748467293214784281/original/27370447-41fc-4630-9a8b-8878a3b8bd21.png?im_w=720&auto=webp',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748467293214784281/original/26b7dca2-0890-4821-9bcb-c1db43ae0db9.png?im_w=720&auto=webp',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748467293214784281/original/cd32ad4e-1ce6-481d-8d88-a5963656da00.png?im_w=720&auto=webp',
    ],
  },
  {
    slug: 'magma-102',
    name: 'Magma 102',
    airbnbUrl: 'https://www.airbnb.it/rooms/1748595559509576063',
    tipo: 'Casa',
    ospiti: 3,
    camereDaLetto: null, // monolocale
    letti: 2,
    bagni: 1,
    descrizione:
      "Dimora di charme in pietra lavica nel cuore di Pedara, alle pendici dell'Etna. Un monolocale accogliente e curato, dove il fascino dell'architettura siciliana incontra il comfort moderno. Zona notte e zona soggiorno in un unico ambiente luminoso, con una caratteristica corte esterna attrezzata — la posizione ideale per scoprire l'Etna, i borghi vicini e la Sicilia orientale.",
    totaleServizi: 31,
    foto: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748595559509576063/original/666c3f9d-36a8-411f-9eef-e59c6f291955.png?im_w=1200&auto=webp',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748595559509576063/original/307ba0a7-afe2-4b00-bcf3-502215970987.png?im_w=1200&auto=webp',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748595559509576063/original/88c327bb-2ba7-40ba-af71-4fb5bb226121.png?im_w=720&auto=webp',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748595559509576063/original/e3ec01b5-a50c-4fe9-9042-454ec9c22413.png?im_w=720&auto=webp',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1748595559509576063/original/6805aafd-a69a-41bf-b8b5-34b32e6925bb.png?im_w=720&auto=webp',
    ],
  },
];

// Servizi comuni ai due appartamenti (dalla sezione "Cosa troverai" di Airbnb).
// L'icona è una chiave che il componente Amenity.astro sa disegnare.
export const serviziBase = [
  { icona: 'wifi', label: 'Wifi' },
  { icona: 'cucina', label: 'Cucina' },
  { icona: 'parcheggio', label: 'Parcheggio gratuito in strada' },
  { icona: 'tv', label: 'TV' },
  { icona: 'lavatrice', label: 'Lavatrice' },
  { icona: 'allarme', label: 'Allarme antincendio', nonDisponibile: true },
];
