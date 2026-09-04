import type { Locale } from './locales';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

interface FaqPageText {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  categories: FaqCategory[];
}

// Sottoinsieme di domande mostrato in versione condensata su "La Struttura"
// (StrutturaView.astro) — selezionate per id, così restano coerenti in ogni lingua.
export const FAQ_CONDENSED_IDS = [
  'cancellation-policy', 'checkin-checkout-times', 'guest-capacity',
  'independent-apartments', 'pets', 'minimum-nights',
];

export const FAQ_PAGE: Record<Locale, FaqPageText> = {
  it: {
    metaTitle: 'Domande Frequenti — Magma 610, Pedara',
    metaDescription: "Domande frequenti su prenotazione, check-in, servizi e territorio per Magma 610, i nostri appartamenti indipendenti a Pedara, sull'Etna.",
    title: 'Domande frequenti',
    intro: 'Le risposte alle domande più comuni su prenotazione, check-in, servizi degli appartamenti e territorio circostante.',
    categories: [
      {
        id: 'booking-payment',
        title: 'Prenotazione e pagamento',
        items: [
          {
            id: 'how-to-book',
            question: 'Come posso prenotare?',
            answer: 'Cliccando "Prenota su Airbnb" sulla scheda di ciascun appartamento si viene reindirizzati alla pagina Airbnb corrispondente per completare la prenotazione. È anche possibile prenotare direttamente contattando Veronique al numero +39 380 182 4545 (telefono/WhatsApp).',
          },
          {
            id: 'cancellation-policy',
            question: 'Qual è la politica di cancellazione?',
            answer: 'Per le prenotazioni tramite Airbnb si applicano le condizioni di cancellazione indicate sulla piattaforma. Per le prenotazioni dirette, le condizioni — incluso eventuale acconto e modalità di pagamento — vengono concordate al momento della prenotazione con Veronique.',
          },
        ],
      },
      {
        id: 'checkin-checkout',
        title: 'Check-in e check-out',
        items: [
          {
            id: 'checkin-checkout-times',
            question: 'A che ora sono il check-in e il check-out?',
            answer: 'Il check-in è dalle 15:00, il check-out entro le 10:00. Orari diversi possono essere concordati direttamente con Veronique.',
          },
          {
            id: 'checkin-document',
            question: 'Cosa serve portare per il check-in?',
            answer: 'È richiesto un documento di riconoscimento in corso di validità per ciascun ospite, da presentare prima del check-in.',
          },
          {
            id: 'checkin-self-or-person',
            question: 'Il check-in avviene di persona o in autonomia?',
            answer: 'Il check-in avviene di persona: Veronique vi accoglie per la consegna delle chiavi e qualche indicazione utile su Pedara e dintorni.',
          },
        ],
      },
      {
        id: 'accommodation-services',
        title: "L'alloggio e i servizi",
        items: [
          {
            id: 'guest-capacity',
            question: 'Quanti ospiti possono soggiornare in ogni appartamento?',
            answer: 'Magma 104 ospita fino a 2 persone (1 camera da letto, 1 letto, 1 bagno). Magma 102 ospita fino a 3 persone (monolocale, 2 letti, 1 bagno).',
          },
          {
            id: 'parking',
            question: "C'è il parcheggio?",
            answer: 'Sì, gratuito in strada, disponibile per entrambi gli appartamenti.',
          },
          {
            id: 'wifi',
            question: 'Il Wifi è incluso?',
            answer: 'Sì, in entrambi gli appartamenti.',
          },
          {
            id: 'ac-heating',
            question: "C'è aria condizionata e riscaldamento?",
            answer: 'Sì, presenti in entrambi gli appartamenti.',
          },
          {
            id: 'independent-apartments',
            question: 'Gli appartamenti sono davvero indipendenti?',
            answer: "Sì, ciascuno ha ingresso, servizi e caratteristiche propri. Condividono però la corte esterna attrezzata, il patio/balcone e il giardino, pensati come spazio comune tra gli ospiti.",
          },
          {
            id: 'pets',
            question: 'Sono ammessi animali domestici?',
            answer: 'Sì, la struttura è pet friendly — è sufficiente comunicarlo in anticipo.',
          },
          {
            id: 'smoking',
            question: 'È consentito fumare?',
            answer: 'Sì, ma solo nelle aree comuni all’aperto.',
          },
          {
            id: 'laundry-kitchen',
            question: 'C’è la lavatrice? La cucina è attrezzata?',
            answer: "La lavatrice è presente in entrambi gli appartamenti (l'asciugatrice non è inclusa). La cucina è ben attrezzata: frigorifero, forno a microonde, piano cottura a induzione, pentole e padelle, piatti e posate, bollitore, tostapane, tavolo da pranzo e macchina del caffè.",
          },
          {
            id: 'baby-crib',
            question: 'È disponibile una culla per neonati?',
            answer: 'Sì, un box bebè/culla da viaggio è disponibile su richiesta a Magma 104. Magma 102 non ne è dotato.',
          },
        ],
      },
      {
        id: 'area-transport',
        title: 'Territorio e spostamenti',
        items: [
          {
            id: 'distance-pedara-center',
            question: 'Quanto dista il centro di Pedara?',
            answer: '300 metri dalla piazza principale, raggiungibile comodamente a piedi.',
          },
          {
            id: 'nearby-services',
            question: 'Ci sono supermercati o ristoranti nelle vicinanze?',
            answer: 'Sì: nel centro di Pedara, a soli 300 metri a piedi, si trovano supermercati, farmacie, bar e diversi ristoranti. Siamo comunque sempre disponibili per qualche consiglio su dove andare.',
          },
          {
            id: 'need-car',
            question: 'Serve l’auto per muoversi?',
            answer: "Per il centro di Pedara no, si arriva a piedi. Per le escursioni (Etna, cantine, Gole dell'Alcantara) è consigliata l'auto; Taormina è raggiungibile anche con i mezzi pubblici, anche se l'auto resta la soluzione più comoda.",
          },
          {
            id: 'distance-attractions',
            question: "Quanto dista dall'Etna, dalle Gole dell'Alcantara, da Taormina e da Catania?",
            answer: "I sentieri dell'Etna sono a 20-40 minuti d'auto, le Gole dell'Alcantara a circa 40 minuti, Taormina a circa 30 minuti, il centro storico di Catania a 20-25 minuti.",
          },
          {
            id: 'distance-morgagni',
            question: 'Quanto dista dal Centro Cuore Morgagni?',
            answer: '5 minuti in auto, circa 15 minuti a piedi.',
          },
          {
            id: 'airport-transfer',
            question: 'Come si arriva dall’aeroporto di Catania?',
            answer: 'In auto (circa 30 minuti) o con i mezzi pubblici AST (Azienda Siciliana Trasporti — verificare gli orari aggiornati sul sito ufficiale). In alternativa, su richiesta, è possibile organizzare un transfer privato con conducente.',
          },
        ],
      },
      {
        id: 'house-rules-other',
        title: 'Regole della casa e altro',
        items: [
          {
            id: 'minimum-nights',
            question: 'C’è un numero minimo di notti?',
            answer: 'No, è possibile prenotare anche una sola notte. Per soggiorni oltre i 30 giorni è necessario contattare direttamente Veronique.',
          },
          {
            id: 'cleaning-service',
            question: 'È previsto un servizio di pulizie durante il soggiorno?',
            answer: 'Non è incluso, ma può essere richiesto con un costo extra contattando Veronique.',
          },
          {
            id: 'contact-during-stay',
            question: 'A chi posso rivolgermi in caso di problemi durante il soggiorno?',
            answer: 'Direttamente a Veronique al numero +39 380 182 4545 — Magma 610 è a conduzione diretta, non c’è un call center.',
          },
          {
            id: 'languages-spoken',
            question: 'Parlate altre lingue oltre l’italiano?',
            answer: 'Sì, italiano, inglese e francese.',
          },
        ],
      },
    ],
  },
  es: {
    metaTitle: 'Preguntas Frecuentes — Magma 610, Pedara',
    metaDescription: 'Preguntas frecuentes sobre reserva, check-in, servicios y la zona de Magma 610, nuestros apartamentos independientes en Pedara, en el Etna.',
    title: 'Preguntas frecuentes',
    intro: 'Las respuestas a las preguntas más habituales sobre reserva, check-in, servicios de los apartamentos y la zona circundante.',
    categories: [
      {
        id: 'booking-payment',
        title: 'Reserva y pago',
        items: [
          { id: 'how-to-book', question: '¿Cómo puedo reservar?', answer: 'Haciendo clic en «Reservar en Airbnb» en la ficha de cada apartamento se accede a la página de Airbnb correspondiente para completar la reserva. También es posible reservar directamente contactando con Veronique en el +39 380 182 4545 (teléfono/WhatsApp).' },
          { id: 'cancellation-policy', question: '¿Cuál es la política de cancelación?', answer: 'Para las reservas a través de Airbnb se aplican las condiciones de cancelación indicadas en la plataforma. Para las reservas directas, las condiciones —incluido un posible anticipo y la forma de pago— se acuerdan en el momento de la reserva con Veronique.' },
        ],
      },
      {
        id: 'checkin-checkout',
        title: 'Check-in y check-out',
        items: [
          { id: 'checkin-checkout-times', question: '¿A qué hora son el check-in y el check-out?', answer: 'El check-in es a partir de las 15:00, el check-out antes de las 10:00. Se pueden acordar horarios distintos directamente con Veronique.' },
          { id: 'checkin-document', question: '¿Qué hace falta llevar para el check-in?', answer: 'Se requiere un documento de identidad en vigor para cada huésped, que hay que presentar antes del check-in.' },
          { id: 'checkin-self-or-person', question: '¿El check-in es en persona o de forma autónoma?', answer: 'El check-in es en persona: Veronique os recibe para la entrega de las llaves y algunas indicaciones útiles sobre Pedara y sus alrededores.' },
        ],
      },
      {
        id: 'accommodation-services',
        title: 'El alojamiento y los servicios',
        items: [
          { id: 'guest-capacity', question: '¿Cuántos huéspedes pueden alojarse en cada apartamento?', answer: 'Magma 104 acoge hasta 2 personas (1 dormitorio, 1 cama, 1 baño). Magma 102 acoge hasta 3 personas (estudio, 2 camas, 1 baño).' },
          { id: 'parking', question: '¿Hay aparcamiento?', answer: 'Sí, gratuito en la calle, disponible para ambos apartamentos.' },
          { id: 'wifi', question: '¿El Wifi está incluido?', answer: 'Sí, en ambos apartamentos.' },
          { id: 'ac-heating', question: '¿Hay aire acondicionado y calefacción?', answer: 'Sí, presentes en ambos apartamentos.' },
          { id: 'independent-apartments', question: '¿Los apartamentos son realmente independientes?', answer: 'Sí, cada uno tiene entrada, servicios y características propias. Sin embargo, comparten el patio exterior equipado, el balcón/terraza y el jardín, pensados como espacio común entre los huéspedes.' },
          { id: 'pets', question: '¿Se admiten animales domésticos?', answer: 'Sí, el alojamiento admite mascotas — basta con comunicarlo con antelación.' },
          { id: 'smoking', question: '¿Está permitido fumar?', answer: 'Sí, pero solo en las zonas comunes al aire libre.' },
          { id: 'laundry-kitchen', question: '¿Hay lavadora? ¿La cocina está equipada?', answer: 'La lavadora está presente en ambos apartamentos (la secadora no está incluida). La cocina está bien equipada: frigorífico, microondas, placa de inducción, ollas y sartenes, platos y cubiertos, hervidor, tostadora, mesa de comedor y cafetera.' },
          { id: 'baby-crib', question: '¿Hay disponible una cuna para bebés?', answer: 'Sí, una cuna de viaje está disponible bajo petición en Magma 104. Magma 102 no dispone de ella.' },
        ],
      },
      {
        id: 'area-transport',
        title: 'La zona y los desplazamientos',
        items: [
          { id: 'distance-pedara-center', question: '¿A qué distancia está el centro de Pedara?', answer: 'A 300 metros de la plaza principal, a un cómodo paseo a pie.' },
          { id: 'nearby-services', question: '¿Hay supermercados o restaurantes cerca?', answer: 'Sí: en el centro de Pedara, a solo 300 metros a pie, hay supermercados, farmacias, bares y varios restaurantes. Aun así, siempre estamos disponibles para recomendar algún sitio.' },
          { id: 'need-car', question: '¿Hace falta coche para moverse?', answer: 'Para el centro de Pedara no, se llega a pie. Para las excursiones (Etna, bodegas, Gargantas del Alcantara) se recomienda el coche; Taormina también es accesible en transporte público, aunque el coche sigue siendo la solución más cómoda.' },
          { id: 'distance-attractions', question: '¿A qué distancia están el Etna, las Gargantas del Alcantara, Taormina y Catania?', answer: 'Los senderos del Etna están a 20-40 minutos en coche, las Gargantas del Alcantara a unos 40 minutos, Taormina a unos 30 minutos, el centro histórico de Catania a 20-25 minutos.' },
          { id: 'distance-morgagni', question: '¿A qué distancia está el Centro Cuore Morgagni?', answer: '5 minutos en coche, unos 15 minutos a pie.' },
          { id: 'airport-transfer', question: '¿Cómo se llega desde el aeropuerto de Catania?', answer: 'En coche (unos 30 minutos) o con el transporte público AST (Azienda Siciliana Trasporti — comprobar los horarios actualizados en la web oficial). Alternativamente, bajo petición, es posible organizar un traslado privado con conductor.' },
        ],
      },
      {
        id: 'house-rules-other',
        title: 'Normas de la casa y otros datos',
        items: [
          { id: 'minimum-nights', question: '¿Hay un número mínimo de noches?', answer: 'No, se puede reservar incluso una sola noche. Para estancias de más de 30 días es necesario contactar directamente con Veronique.' },
          { id: 'cleaning-service', question: '¿Hay servicio de limpieza durante la estancia?', answer: 'No está incluido, pero se puede solicitar con un coste adicional contactando con Veronique.' },
          { id: 'contact-during-stay', question: '¿A quién puedo dirigirme en caso de problemas durante la estancia?', answer: 'Directamente a Veronique, en el +39 380 182 4545 — Magma 610 tiene gestión directa, no hay un call center.' },
          { id: 'languages-spoken', question: '¿Hablan otros idiomas además del italiano?', answer: 'Sí, italiano, inglés y francés.' },
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Frequently Asked Questions — Magma 610, Pedara',
    metaDescription: "Frequently asked questions about booking, check-in, amenities and the local area for Magma 610, our independent apartments in Pedara, on Etna.",
    title: 'Frequently asked questions',
    intro: 'Answers to the most common questions about booking, check-in, apartment amenities and the surrounding area.',
    categories: [
      {
        id: 'booking-payment',
        title: 'Booking and payment',
        items: [
          { id: 'how-to-book', question: 'How can I book?', answer: 'Clicking "Book on Airbnb" on each apartment\'s listing takes you to the corresponding Airbnb page to complete your booking. You can also book directly by contacting Veronique at +39 380 182 4545 (phone/WhatsApp).' },
          { id: 'cancellation-policy', question: 'What is the cancellation policy?', answer: 'For bookings made through Airbnb, the cancellation terms shown on the platform apply. For direct bookings, the terms — including any deposit and payment method — are agreed with Veronique at the time of booking.' },
        ],
      },
      {
        id: 'checkin-checkout',
        title: 'Check-in and check-out',
        items: [
          { id: 'checkin-checkout-times', question: 'What time are check-in and check-out?', answer: 'Check-in is from 3:00 PM, check-out by 10:00 AM. Different times can be arranged directly with Veronique.' },
          { id: 'checkin-document', question: 'What do I need to bring for check-in?', answer: 'A valid ID is required for each guest, to be presented before check-in.' },
          { id: 'checkin-self-or-person', question: 'Is check-in in person or self-service?', answer: "Check-in is in person: Veronique welcomes you to hand over the keys and share some useful tips about Pedara and the surrounding area." },
        ],
      },
      {
        id: 'accommodation-services',
        title: 'The apartments and amenities',
        items: [
          { id: 'guest-capacity', question: 'How many guests can each apartment host?', answer: 'Magma 104 hosts up to 2 guests (1 bedroom, 1 bed, 1 bathroom). Magma 102 hosts up to 3 guests (studio, 2 beds, 1 bathroom).' },
          { id: 'parking', question: 'Is there parking?', answer: 'Yes, free on-street parking, available for both apartments.' },
          { id: 'wifi', question: 'Is Wifi included?', answer: 'Yes, in both apartments.' },
          { id: 'ac-heating', question: 'Is there air conditioning and heating?', answer: 'Yes, in both apartments.' },
          { id: 'independent-apartments', question: 'Are the apartments really independent?', answer: 'Yes, each has its own entrance, amenities and features. However, they share the equipped outdoor courtyard, the patio/balcony and the garden, designed as common space for guests.' },
          { id: 'pets', question: 'Are pets allowed?', answer: "Yes, the accommodation is pet-friendly — just let us know in advance." },
          { id: 'smoking', question: 'Is smoking allowed?', answer: 'Yes, but only in the common outdoor areas.' },
          { id: 'laundry-kitchen', question: 'Is there a washing machine? Is the kitchen equipped?', answer: 'A washing machine is available in both apartments (a dryer is not included). The kitchen is well equipped: fridge, microwave, induction hob, pots and pans, dishes and cutlery, kettle, toaster, dining table and coffee machine.' },
          { id: 'baby-crib', question: 'Is a travel cot available for infants?', answer: 'Yes, a travel cot is available on request at Magma 104. Magma 102 does not have one.' },
        ],
      },
      {
        id: 'area-transport',
        title: 'The area and getting around',
        items: [
          { id: 'distance-pedara-center', question: "How far is Pedara's town centre?", answer: '300 metres from the main square, an easy walk away.' },
          { id: 'nearby-services', question: 'Are there supermarkets or restaurants nearby?', answer: "Yes: Pedara's town centre, just 300 metres on foot, has supermarkets, pharmacies, bars and several restaurants. We're always happy to suggest somewhere, too." },
          { id: 'need-car', question: 'Do I need a car to get around?', answer: "Not for Pedara's town centre, which is walkable. For excursions (Etna, wineries, the Alcantara Gorges) a car is recommended; Taormina is also reachable by public transport, though a car remains the most convenient option." },
          { id: 'distance-attractions', question: 'How far is Etna, the Alcantara Gorges, Taormina and Catania?', answer: "Etna's trails are 20-40 minutes by car, the Alcantara Gorges about 40 minutes, Taormina about 30 minutes, and Catania's historic centre 20-25 minutes." },
          { id: 'distance-morgagni', question: 'How far is Centro Cuore Morgagni?', answer: '5 minutes by car, about a 15-minute walk.' },
          { id: 'airport-transfer', question: 'How do I get there from Catania airport?', answer: 'By car (about 30 minutes) or with AST public transport (Azienda Siciliana Trasporti — check the updated timetable on the official website). Alternatively, a private transfer with driver can be arranged on request.' },
        ],
      },
      {
        id: 'house-rules-other',
        title: 'House rules and other information',
        items: [
          { id: 'minimum-nights', question: 'Is there a minimum number of nights?', answer: 'No, you can book even a single night. For stays longer than 30 days, please contact Veronique directly.' },
          { id: 'cleaning-service', question: 'Is a cleaning service available during the stay?', answer: 'It\'s not included, but can be requested for an extra fee by contacting Veronique.' },
          { id: 'contact-during-stay', question: 'Who can I contact if there are issues during my stay?', answer: "Veronique directly, at +39 380 182 4545 — Magma 610 is directly managed, there's no call centre." },
          { id: 'languages-spoken', question: 'Do you speak other languages besides Italian?', answer: 'Yes, Italian, English and French.' },
        ],
      },
    ],
  },
  // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
  fr: {
    metaTitle: 'Domande Frequenti — Magma 610, Pedara',
    metaDescription: "Domande frequenti su prenotazione, check-in, servizi e territorio per Magma 610, i nostri appartamenti indipendenti a Pedara, sull'Etna.",
    title: 'Domande frequenti',
    intro: 'Le risposte alle domande più comuni su prenotazione, check-in, servizi degli appartamenti e territorio circostante.',
    categories: [
      {
        id: 'booking-payment',
        title: 'Prenotazione e pagamento',
        items: [
          { id: 'how-to-book', question: 'Come posso prenotare?', answer: 'Cliccando "Prenota su Airbnb" sulla scheda di ciascun appartamento si viene reindirizzati alla pagina Airbnb corrispondente per completare la prenotazione. È anche possibile prenotare direttamente contattando Veronique al numero +39 380 182 4545 (telefono/WhatsApp).' },
          { id: 'cancellation-policy', question: 'Qual è la politica di cancellazione?', answer: 'Per le prenotazioni tramite Airbnb si applicano le condizioni di cancellazione indicate sulla piattaforma. Per le prenotazioni dirette, le condizioni — incluso eventuale acconto e modalità di pagamento — vengono concordate al momento della prenotazione con Veronique.' },
        ],
      },
      {
        id: 'checkin-checkout',
        title: 'Check-in e check-out',
        items: [
          { id: 'checkin-checkout-times', question: 'A che ora sono il check-in e il check-out?', answer: 'Il check-in è dalle 15:00, il check-out entro le 10:00. Orari diversi possono essere concordati direttamente con Veronique.' },
          { id: 'checkin-document', question: 'Cosa serve portare per il check-in?', answer: 'È richiesto un documento di riconoscimento in corso di validità per ciascun ospite, da presentare prima del check-in.' },
        ],
      },
      {
        id: 'accommodation-services',
        title: "L'alloggio e i servizi",
        items: [
          { id: 'guest-capacity', question: 'Quanti ospiti possono soggiornare in ogni appartamento?', answer: 'Magma 104 ospita fino a 2 persone (1 camera da letto, 1 letto, 1 bagno). Magma 102 ospita fino a 3 persone (monolocale, 2 letti, 1 bagno).' },
          { id: 'parking', question: "C'è il parcheggio?", answer: 'Sì, gratuito in strada, disponibile per entrambi gli appartamenti.' },
          { id: 'wifi', question: 'Il Wifi è incluso?', answer: 'Sì, in entrambi gli appartamenti.' },
          { id: 'ac-heating', question: "C'è aria condizionata e riscaldamento?", answer: 'Sì, presenti in entrambi gli appartamenti.' },
          { id: 'independent-apartments', question: 'Gli appartamenti sono davvero indipendenti?', answer: "Sì, ciascuno ha ingresso, servizi e caratteristiche propri. Condividono però la corte esterna attrezzata, il patio/balcone e il giardino, pensati come spazio comune tra gli ospiti." },
          { id: 'pets', question: 'Sono ammessi animali domestici?', answer: 'Sì, la struttura è pet friendly — è sufficiente comunicarlo in anticipo.' },
          { id: 'smoking', question: 'È consentito fumare?', answer: 'Sì, ma solo nelle aree comuni all’aperto.' },
          { id: 'laundry-kitchen', question: 'C’è la lavatrice? La cucina è attrezzata?', answer: "La lavatrice è presente in entrambi gli appartamenti (l'asciugatrice non è inclusa). La cucina è ben attrezzata: frigorifero, forno a microonde, piano cottura a induzione, pentole e padelle, piatti e posate, bollitore, tostapane, tavolo da pranzo e macchina del caffè." },
        ],
      },
      {
        id: 'area-transport',
        title: 'Territorio e spostamenti',
        items: [
          { id: 'distance-pedara-center', question: 'Quanto dista il centro di Pedara?', answer: '300 metri dalla piazza principale, raggiungibile comodamente a piedi.' },
          { id: 'need-car', question: 'Serve l’auto per muoversi?', answer: "Per il centro di Pedara no, si arriva a piedi. Per le escursioni (Etna, cantine, Gole dell'Alcantara) è consigliata l'auto; Taormina è raggiungibile anche con i mezzi pubblici, anche se l'auto resta la soluzione più comoda." },
          { id: 'distance-attractions', question: "Quanto dista dall'Etna, dalle Gole dell'Alcantara, da Taormina e da Catania?", answer: "I sentieri dell'Etna sono a 20-40 minuti d'auto, le Gole dell'Alcantara a circa 40 minuti, Taormina a circa 30 minuti, il centro storico di Catania a 20-25 minuti." },
          { id: 'distance-morgagni', question: 'Quanto dista dal Centro Cuore Morgagni?', answer: '5 minuti in auto, circa 15 minuti a piedi.' },
          { id: 'airport-transfer', question: 'Come si arriva dall’aeroporto di Catania?', answer: 'In auto (circa 30 minuti) o con i mezzi pubblici AST (Azienda Siciliana Trasporti — verificare gli orari aggiornati sul sito ufficiale). In alternativa, su richiesta, è possibile organizzare un transfer privato con conducente.' },
        ],
      },
      {
        id: 'house-rules-other',
        title: 'Regole della casa e altro',
        items: [
          { id: 'minimum-nights', question: 'C’è un numero minimo di notti?', answer: 'No, è possibile prenotare anche una sola notte. Per soggiorni oltre i 30 giorni è necessario contattare direttamente Veronique.' },
          { id: 'cleaning-service', question: 'È previsto un servizio di pulizie durante il soggiorno?', answer: 'Non è incluso, ma può essere richiesto con un costo extra contattando Veronique.' },
          { id: 'contact-during-stay', question: 'A chi posso rivolgermi in caso di problemi durante il soggiorno?', answer: 'Direttamente a Veronique al numero +39 380 182 4545 — Magma 610 è a conduzione diretta, non c’è un call center.' },
          { id: 'languages-spoken', question: 'Parlate altre lingue oltre l’italiano?', answer: 'Sì, italiano, inglese e francese.' },
        ],
      },
    ],
  },
  // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
  de: {
    metaTitle: 'Domande Frequenti — Magma 610, Pedara',
    metaDescription: "Domande frequenti su prenotazione, check-in, servizi e territorio per Magma 610, i nostri appartamenti indipendenti a Pedara, sull'Etna.",
    title: 'Domande frequenti',
    intro: 'Le risposte alle domande più comuni su prenotazione, check-in, servizi degli appartamenti e territorio circostante.',
    categories: [
      {
        id: 'booking-payment',
        title: 'Prenotazione e pagamento',
        items: [
          { id: 'how-to-book', question: 'Come posso prenotare?', answer: 'Cliccando "Prenota su Airbnb" sulla scheda di ciascun appartamento si viene reindirizzati alla pagina Airbnb corrispondente per completare la prenotazione. È anche possibile prenotare direttamente contattando Veronique al numero +39 380 182 4545 (telefono/WhatsApp).' },
          { id: 'cancellation-policy', question: 'Qual è la politica di cancellazione?', answer: 'Per le prenotazioni tramite Airbnb si applicano le condizioni di cancellazione indicate sulla piattaforma. Per le prenotazioni dirette, le condizioni — incluso eventuale acconto e modalità di pagamento — vengono concordate al momento della prenotazione con Veronique.' },
        ],
      },
      {
        id: 'checkin-checkout',
        title: 'Check-in e check-out',
        items: [
          { id: 'checkin-checkout-times', question: 'A che ora sono il check-in e il check-out?', answer: 'Il check-in è dalle 15:00, il check-out entro le 10:00. Orari diversi possono essere concordati direttamente con Veronique.' },
          { id: 'checkin-document', question: 'Cosa serve portare per il check-in?', answer: 'È richiesto un documento di riconoscimento in corso di validità per ciascun ospite, da presentare prima del check-in.' },
        ],
      },
      {
        id: 'accommodation-services',
        title: "L'alloggio e i servizi",
        items: [
          { id: 'guest-capacity', question: 'Quanti ospiti possono soggiornare in ogni appartamento?', answer: 'Magma 104 ospita fino a 2 persone (1 camera da letto, 1 letto, 1 bagno). Magma 102 ospita fino a 3 persone (monolocale, 2 letti, 1 bagno).' },
          { id: 'parking', question: "C'è il parcheggio?", answer: 'Sì, gratuito in strada, disponibile per entrambi gli appartamenti.' },
          { id: 'wifi', question: 'Il Wifi è incluso?', answer: 'Sì, in entrambi gli appartamenti.' },
          { id: 'ac-heating', question: "C'è aria condizionata e riscaldamento?", answer: 'Sì, presenti in entrambi gli appartamenti.' },
          { id: 'independent-apartments', question: 'Gli appartamenti sono davvero indipendenti?', answer: "Sì, ciascuno ha ingresso, servizi e caratteristiche propri. Condividono però la corte esterna attrezzata, il patio/balcone e il giardino, pensati come spazio comune tra gli ospiti." },
          { id: 'pets', question: 'Sono ammessi animali domestici?', answer: 'Sì, la struttura è pet friendly — è sufficiente comunicarlo in anticipo.' },
          { id: 'smoking', question: 'È consentito fumare?', answer: 'Sì, ma solo nelle aree comuni all’aperto.' },
          { id: 'laundry-kitchen', question: 'C’è la lavatrice? La cucina è attrezzata?', answer: "La lavatrice è presente in entrambi gli appartamenti (l'asciugatrice non è inclusa). La cucina è ben attrezzata: frigorifero, forno a microonde, piano cottura a induzione, pentole e padelle, piatti e posate, bollitore, tostapane, tavolo da pranzo e macchina del caffè." },
        ],
      },
      {
        id: 'area-transport',
        title: 'Territorio e spostamenti',
        items: [
          { id: 'distance-pedara-center', question: 'Quanto dista il centro di Pedara?', answer: '300 metri dalla piazza principale, raggiungibile comodamente a piedi.' },
          { id: 'need-car', question: 'Serve l’auto per muoversi?', answer: "Per il centro di Pedara no, si arriva a piedi. Per le escursioni (Etna, cantine, Gole dell'Alcantara) è consigliata l'auto; Taormina è raggiungibile anche con i mezzi pubblici, anche se l'auto resta la soluzione più comoda." },
          { id: 'distance-attractions', question: "Quanto dista dall'Etna, dalle Gole dell'Alcantara, da Taormina e da Catania?", answer: "I sentieri dell'Etna sono a 20-40 minuti d'auto, le Gole dell'Alcantara a circa 40 minuti, Taormina a circa 30 minuti, il centro storico di Catania a 20-25 minuti." },
          { id: 'distance-morgagni', question: 'Quanto dista dal Centro Cuore Morgagni?', answer: '5 minuti in auto, circa 15 minuti a piedi.' },
          { id: 'airport-transfer', question: 'Come si arriva dall’aeroporto di Catania?', answer: 'In auto (circa 30 minuti) o con i mezzi pubblici AST (Azienda Siciliana Trasporti — verificare gli orari aggiornati sul sito ufficiale). In alternativa, su richiesta, è possibile organizzare un transfer privato con conducente.' },
        ],
      },
      {
        id: 'house-rules-other',
        title: 'Regole della casa e altro',
        items: [
          { id: 'minimum-nights', question: 'C’è un numero minimo di notti?', answer: 'No, è possibile prenotare anche una sola notte. Per soggiorni oltre i 30 giorni è necessario contattare direttamente Veronique.' },
          { id: 'cleaning-service', question: 'È previsto un servizio di pulizie durante il soggiorno?', answer: 'Non è incluso, ma può essere richiesto con un costo extra contattando Veronique.' },
          { id: 'contact-during-stay', question: 'A chi posso rivolgermi in caso di problemi durante il soggiorno?', answer: 'Direttamente a Veronique al numero +39 380 182 4545 — Magma 610 è a conduzione diretta, non c’è un call center.' },
          { id: 'languages-spoken', question: 'Parlate altre lingue oltre l’italiano?', answer: 'Sì, italiano, inglese e francese.' },
        ],
      },
    ],
  },
};
