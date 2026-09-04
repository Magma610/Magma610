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
  // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
  es: {
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
  en: {
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
