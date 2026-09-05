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
  fr: {
    metaTitle: 'Foire aux questions — Magma 610, Pedara',
    metaDescription: "Foire aux questions sur la réservation, le check-in, les équipements et la région de Magma 610, nos appartements indépendants à Pedara, sur l'Etna.",
    title: 'Foire aux questions',
    intro: 'Les réponses aux questions les plus courantes sur la réservation, le check-in, les équipements des appartements et la région environnante.',
    categories: [
      {
        id: 'booking-payment',
        title: 'Réservation et paiement',
        items: [
          { id: 'how-to-book', question: 'Comment puis-je réserver ?', answer: 'En cliquant sur « Réserver sur Airbnb » sur la fiche de chaque appartement, vous êtes redirigé vers la page Airbnb correspondante pour finaliser la réservation. Il est aussi possible de réserver directement en contactant Veronique au +39 380 182 4545 (téléphone/WhatsApp).' },
          { id: 'cancellation-policy', question: "Quelle est la politique d'annulation ?", answer: "Pour les réservations via Airbnb, les conditions d'annulation indiquées sur la plateforme s'appliquent. Pour les réservations directes, les conditions — y compris un éventuel acompte et le mode de paiement — sont convenues au moment de la réservation avec Veronique." },
        ],
      },
      {
        id: 'checkin-checkout',
        title: 'Check-in et check-out',
        items: [
          { id: 'checkin-checkout-times', question: 'À quelle heure sont le check-in et le check-out ?', answer: 'Le check-in se fait à partir de 15h00, le check-out avant 10h00. Des horaires différents peuvent être convenus directement avec Veronique.' },
          { id: 'checkin-document', question: 'Que faut-il apporter pour le check-in ?', answer: 'Une pièce d\'identité en cours de validité est requise pour chaque hôte, à présenter avant le check-in.' },
          { id: 'checkin-self-or-person', question: 'Le check-in se fait-il en personne ou en autonomie ?', answer: "Le check-in se fait en personne : Veronique vous accueille pour la remise des clés et quelques indications utiles sur Pedara et ses environs." },
        ],
      },
      {
        id: 'accommodation-services',
        title: 'Le logement et les équipements',
        items: [
          { id: 'guest-capacity', question: 'Combien de personnes peuvent séjourner dans chaque appartement ?', answer: 'Magma 104 accueille jusqu\'à 2 personnes (1 chambre, 1 lit, 1 salle de bain). Magma 102 accueille jusqu\'à 3 personnes (studio, 2 lits, 1 salle de bain).' },
          { id: 'parking', question: 'Y a-t-il un parking ?', answer: 'Oui, gratuit dans la rue, disponible pour les deux appartements.' },
          { id: 'wifi', question: 'Le Wifi est-il inclus ?', answer: 'Oui, dans les deux appartements.' },
          { id: 'ac-heating', question: 'Y a-t-il la climatisation et le chauffage ?', answer: 'Oui, présents dans les deux appartements.' },
          { id: 'independent-apartments', question: 'Les appartements sont-ils vraiment indépendants ?', answer: "Oui, chacun a sa propre entrée, ses propres équipements et caractéristiques. Ils partagent cependant la cour extérieure équipée, le patio/balcon et le jardin, pensés comme un espace commun entre les hôtes." },
          { id: 'pets', question: 'Les animaux domestiques sont-ils admis ?', answer: "Oui, l'hébergement accepte les animaux — il suffit de le signaler à l'avance." },
          { id: 'smoking', question: 'Est-il permis de fumer ?', answer: 'Oui, mais uniquement dans les espaces communs extérieurs.' },
          { id: 'laundry-kitchen', question: 'Y a-t-il un lave-linge ? La cuisine est-elle équipée ?', answer: "Le lave-linge est présent dans les deux appartements (le sèche-linge n'est pas inclus). La cuisine est bien équipée : réfrigérateur, four à micro-ondes, plaque à induction, casseroles et poêles, assiettes et couverts, bouilloire, grille-pain, table à manger et machine à café." },
          { id: 'baby-crib', question: 'Un lit bébé est-il disponible ?', answer: 'Oui, un lit parapluie est disponible sur demande à Magma 104. Magma 102 n\'en est pas équipé.' },
        ],
      },
      {
        id: 'area-transport',
        title: 'La région et les déplacements',
        items: [
          { id: 'distance-pedara-center', question: 'À quelle distance se trouve le centre de Pedara ?', answer: '300 mètres de la place principale, accessible facilement à pied.' },
          { id: 'nearby-services', question: 'Y a-t-il des supermarchés ou des restaurants à proximité ?', answer: 'Oui : dans le centre de Pedara, à seulement 300 mètres à pied, se trouvent des supermarchés, des pharmacies, des bars et plusieurs restaurants. Nous restons de toute façon toujours disponibles pour quelques conseils sur où aller.' },
          { id: 'need-car', question: 'Faut-il une voiture pour se déplacer ?', answer: "Pour le centre de Pedara, non, il est accessible à pied. Pour les excursions (Etna, caves, Gorges de l'Alcantara), la voiture est conseillée ; Taormine est aussi accessible en transports en commun, même si la voiture reste la solution la plus pratique." },
          { id: 'distance-attractions', question: "À quelle distance sont l'Etna, les Gorges de l'Alcantara, Taormine et Catane ?", answer: "Les sentiers de l'Etna sont à 20-40 minutes en voiture, les Gorges de l'Alcantara à environ 40 minutes, Taormine à environ 30 minutes, le centre historique de Catane à 20-25 minutes." },
          { id: 'distance-morgagni', question: 'À quelle distance se trouve le Centro Cuore Morgagni ?', answer: '5 minutes en voiture, environ 15 minutes à pied.' },
          { id: 'airport-transfer', question: "Comment arriver depuis l'aéroport de Catane ?", answer: "En voiture (environ 30 minutes) ou avec les transports publics AST (Azienda Siciliana Trasporti — vérifier les horaires actualisés sur le site officiel). En alternative, sur demande, il est possible d'organiser un transfert privé avec chauffeur." },
        ],
      },
      {
        id: 'house-rules-other',
        title: "Règlement intérieur et autres informations",
        items: [
          { id: 'minimum-nights', question: 'Y a-t-il un nombre minimum de nuits ?', answer: "Non, il est possible de réserver même une seule nuit. Pour des séjours de plus de 30 jours, merci de contacter directement Veronique." },
          { id: 'cleaning-service', question: 'Un service de ménage est-il prévu pendant le séjour ?', answer: "Il n'est pas inclus, mais peut être demandé avec un coût supplémentaire en contactant Veronique." },
          { id: 'contact-during-stay', question: 'À qui puis-je m\'adresser en cas de problème pendant le séjour ?', answer: "Directement à Veronique, au +39 380 182 4545 — Magma 610 est à gestion directe, il n'y a pas de centre d'appels." },
          { id: 'languages-spoken', question: "Parlez-vous d'autres langues que l'italien ?", answer: 'Oui, italien, anglais et français.' },
        ],
      },
    ],
  },
  de: {
    metaTitle: 'Häufig gestellte Fragen — Magma 610, Pedara',
    metaDescription: "Häufig gestellte Fragen zu Buchung, Check-in, Ausstattung und Umgebung von Magma 610, unseren unabhängigen Apartments in Pedara am Ätna.",
    title: 'Häufig gestellte Fragen',
    intro: 'Antworten auf die häufigsten Fragen zu Buchung, Check-in, Ausstattung der Apartments und der umliegenden Region.',
    categories: [
      {
        id: 'booking-payment',
        title: 'Buchung und Zahlung',
        items: [
          { id: 'how-to-book', question: 'Wie kann ich buchen?', answer: 'Über einen Klick auf „Auf Airbnb buchen" auf der Seite jedes Apartments gelangen Sie zur entsprechenden Airbnb-Seite, um die Buchung abzuschließen. Es ist auch möglich, direkt zu buchen, indem Sie Veronique unter +39 380 182 4545 (Telefon/WhatsApp) kontaktieren.' },
          { id: 'cancellation-policy', question: 'Wie lauten die Stornierungsbedingungen?', answer: 'Bei Buchungen über Airbnb gelten die auf der Plattform angegebenen Stornierungsbedingungen. Bei Direktbuchungen werden die Bedingungen — einschließlich einer eventuellen Anzahlung und der Zahlungsweise — bei der Buchung mit Veronique vereinbart.' },
        ],
      },
      {
        id: 'checkin-checkout',
        title: 'Check-in und Check-out',
        items: [
          { id: 'checkin-checkout-times', question: 'Zu welcher Uhrzeit sind Check-in und Check-out?', answer: 'Der Check-in ist ab 15:00 Uhr, der Check-out bis 10:00 Uhr. Abweichende Zeiten können direkt mit Veronique vereinbart werden.' },
          { id: 'checkin-document', question: 'Was muss ich für den Check-in mitbringen?', answer: 'Für jeden Gast ist ein gültiger Ausweis erforderlich, der vor dem Check-in vorzuzeigen ist.' },
          { id: 'checkin-self-or-person', question: 'Erfolgt der Check-in persönlich oder selbstständig?', answer: "Der Check-in erfolgt persönlich: Veronique empfängt Sie zur Schlüsselübergabe und gibt einige nützliche Hinweise zu Pedara und der Umgebung." },
        ],
      },
      {
        id: 'accommodation-services',
        title: 'Die Unterkunft und die Ausstattung',
        items: [
          { id: 'guest-capacity', question: 'Wie viele Gäste können in jedem Apartment übernachten?', answer: 'Magma 104 bietet Platz für bis zu 2 Personen (1 Schlafzimmer, 1 Bett, 1 Bad). Magma 102 bietet Platz für bis zu 3 Personen (Studio, 2 Betten, 1 Bad).' },
          { id: 'parking', question: 'Gibt es einen Parkplatz?', answer: 'Ja, kostenlos auf der Straße, für beide Apartments verfügbar.' },
          { id: 'wifi', question: 'Ist WLAN inbegriffen?', answer: 'Ja, in beiden Apartments.' },
          { id: 'ac-heating', question: 'Gibt es Klimaanlage und Heizung?', answer: 'Ja, in beiden Apartments vorhanden.' },
          { id: 'independent-apartments', question: 'Sind die Apartments wirklich unabhängig voneinander?', answer: "Ja, jedes hat einen eigenen Eingang, eigene Ausstattung und eigene Merkmale. Sie teilen sich jedoch den ausgestatteten Außenhof, die Terrasse/den Balkon und den Garten, die als Gemeinschaftsbereich für die Gäste gedacht sind." },
          { id: 'pets', question: 'Sind Haustiere erlaubt?', answer: 'Ja, die Unterkunft ist haustierfreundlich — es genügt, dies im Voraus mitzuteilen.' },
          { id: 'smoking', question: 'Ist Rauchen erlaubt?', answer: 'Ja, aber nur in den Gemeinschaftsbereichen im Freien.' },
          { id: 'laundry-kitchen', question: 'Gibt es eine Waschmaschine? Ist die Küche ausgestattet?', answer: "Die Waschmaschine ist in beiden Apartments vorhanden (ein Trockner ist nicht inbegriffen). Die Küche ist gut ausgestattet: Kühlschrank, Mikrowelle, Induktionskochfeld, Töpfe und Pfannen, Geschirr und Besteck, Wasserkocher, Toaster, Esstisch und Kaffeemaschine." },
          { id: 'baby-crib', question: 'Ist ein Babybett verfügbar?', answer: 'Ja, ein Reisebett ist auf Anfrage in Magma 104 verfügbar. Magma 102 verfügt nicht darüber.' },
        ],
      },
      {
        id: 'area-transport',
        title: 'Umgebung und Verkehrsanbindung',
        items: [
          { id: 'distance-pedara-center', question: 'Wie weit ist das Zentrum von Pedara entfernt?', answer: '300 Meter vom Hauptplatz entfernt, bequem zu Fuß erreichbar.' },
          { id: 'nearby-services', question: 'Gibt es Supermärkte oder Restaurants in der Nähe?', answer: 'Ja: Im Zentrum von Pedara, nur 300 Meter zu Fuß entfernt, gibt es Supermärkte, Apotheken, Bars und mehrere Restaurants. Wir stehen aber auch gerne für Empfehlungen zur Verfügung.' },
          { id: 'need-car', question: 'Braucht man ein Auto, um sich fortzubewegen?', answer: "Für das Zentrum von Pedara nicht, das ist zu Fuß erreichbar. Für Ausflüge (Ätna, Weingüter, Alcantara-Schlucht) wird ein Auto empfohlen; Taormina ist auch mit öffentlichen Verkehrsmitteln erreichbar, auch wenn das Auto die bequemste Lösung bleibt." },
          { id: 'distance-attractions', question: 'Wie weit sind der Ätna, die Alcantara-Schlucht, Taormina und Catania entfernt?', answer: "Die Wanderwege des Ätna sind 20-40 Autominuten entfernt, die Alcantara-Schlucht etwa 40 Minuten, Taormina etwa 30 Minuten, das historische Zentrum von Catania 20-25 Minuten." },
          { id: 'distance-morgagni', question: 'Wie weit ist das Centro Cuore Morgagni entfernt?', answer: '5 Autominuten, etwa 15 Minuten zu Fuß.' },
          { id: 'airport-transfer', question: 'Wie kommt man vom Flughafen Catania an?', answer: 'Mit dem Auto (etwa 30 Minuten) oder mit den öffentlichen Verkehrsmitteln AST (Azienda Siciliana Trasporti — aktuelle Fahrzeiten auf der offiziellen Website prüfen). Alternativ kann auf Anfrage ein privater Transfer mit Fahrer organisiert werden.' },
        ],
      },
      {
        id: 'house-rules-other',
        title: 'Hausordnung und Weiteres',
        items: [
          { id: 'minimum-nights', question: 'Gibt es eine Mindestaufenthaltsdauer?', answer: 'Nein, es kann auch nur eine einzige Nacht gebucht werden. Für Aufenthalte über 30 Tage ist es notwendig, direkt Veronique zu kontaktieren.' },
          { id: 'cleaning-service', question: 'Gibt es einen Reinigungsservice während des Aufenthalts?', answer: 'Er ist nicht inbegriffen, kann aber gegen einen Aufpreis bei Veronique angefragt werden.' },
          { id: 'contact-during-stay', question: 'An wen kann ich mich bei Problemen während des Aufenthalts wenden?', answer: 'Direkt an Veronique unter der Nummer +39 380 182 4545 — Magma 610 wird direkt geführt, es gibt kein Callcenter.' },
          { id: 'languages-spoken', question: 'Sprechen Sie außer Italienisch noch andere Sprachen?', answer: 'Ja, Italienisch, Englisch und Französisch.' },
        ],
      },
    ],
  },
};
