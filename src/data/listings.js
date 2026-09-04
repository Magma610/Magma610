// Dati reali presi dagli annunci Airbnb di Magma 102 e Magma 104.
// "foto" contiene path relativi a src/assets/camere/ (risolti via getCamereImage,
// vedi src/lib/camere-images.ts), non URL pubblici: servono all'<Image> di astro:assets
// per generare WebP/AVIF + srcset.

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
    serviziEsclusi: [],
    foto: [
      // Esterni
      'magma-104/06.jpg',
      'magma-104/04.jpg',
      // Interni
      'magma-104/01.jpg',
      'magma-104/03.jpg',
      'magma-104/05.jpg',
      'magma-104/07.jpg',
      'magma-104/08.jpg',
      'magma-104/09.jpg',
      'magma-104/10.jpg',
      'magma-104/11.jpg',
      'magma-104/12.jpg',
      'magma-104/13.jpg',
      'magma-104/14.jpg',
      'magma-104/15.jpg',
      'magma-104/21.jpg',
      // Corte interna
      'magma-104/02.jpg',
      'magma-104/16.jpg',
      'magma-104/17.jpg',
      'magma-104/18.jpg',
      'magma-104/19.jpg',
      'magma-104/20.jpg',
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
    serviziEsclusi: ['travel-crib'], // a differenza di Magma 104, non ha box bebè/culla da viaggio
    foto: [
      // Esterni
      'magma-102/14.jpg',
      'magma-102/06.jpg',
      // Interni
      'magma-102/01.jpg',
      'magma-102/02.jpg',
      'magma-102/03.jpg',
      'magma-102/05.jpg',
      'magma-102/07.jpg',
      'magma-102/08.jpg',
      'magma-102/09.jpg',
      'magma-102/10.jpg',
      // Corte interna
      'magma-102/04.jpg',
      'magma-102/11.jpg',
      'magma-102/12.jpg',
      'magma-102/13.jpg',
    ],
  },
];
