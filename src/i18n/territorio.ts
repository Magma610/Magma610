import type { Locale } from './locales';

export type TerritorioSlug = 'trekking-etna' | 'cantine-etna' | 'gole-alcantara' | 'taormina' | 'catania-storica' | 'bici-etna' | 'centro-cuore-morgagni';

// Foto libere da diritti commerciali (licenza Unsplash), una per meta — condivisa tra le lingue.
export const TERRITORIO_IMAGES: Record<TerritorioSlug, string> = {
  'trekking-etna': 'https://images.unsplash.com/photo-1720210746040-c8cdca7ea391?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'cantine-etna': 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'gole-alcantara': 'https://images.unsplash.com/photo-1760527806015-e15aa5844836?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'taormina': 'https://images.unsplash.com/photo-1523365154888-8a758819b722?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'catania-storica': 'https://images.unsplash.com/photo-1584198686005-d9f5d63efa0e?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'bici-etna': 'https://images.unsplash.com/photo-1695238070098-83d6775247a7?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  // Immagine di testata della pagina dedicata /territorio/centro-cuore-morgagni.
  // Il box nella home usa un'altra foto, vedi TERRITORIO_HOME_IMAGE_OVERRIDES in HomeView.astro.
  'centro-cuore-morgagni': '/images/territorio/centro-cuore-morgagni-pedara-testata.jpg',
};

// Coordinate del punto di interesse principale citato nella pagina — solo dove ha senso un
// singolo punto sulla mappa (non per aree diffuse come i percorsi di trekking o le cantine).
export const TERRITORIO_GEO: Partial<Record<TerritorioSlug, { latitude: number; longitude: number }>> = {
  taormina: { latitude: 37.85222, longitude: 15.28861 }, // Teatro Greco di Taormina
  'gole-alcantara': { latitude: 37.88434, longitude: 15.17435 }, // Parco Fluviale dell'Alcantara
  'catania-storica': { latitude: 37.50229, longitude: 15.08717 }, // Piazza del Duomo, Catania
};

// Una sezione di corpo testo con titolo H2 e uno o più paragrafi.
// "table" e "links" sono opzionali: usati per arricchire una sezione con dati tabulari
// (es. distanze/difficoltà) o link interni ad altre pagine del sito.
export interface TerritorioSection {
  heading: string;
  paragraphs: string[];
  table?: { headers: string[]; rows: string[][] };
  links?: { label: string; path: string }[];
}

interface TerritorioText {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  imageAlt: string;
  body: TerritorioSection[];
}

export const TERRITORIO_CONTENT: Record<TerritorioSlug, Record<Locale, TerritorioText>> = {
  'trekking-etna': {
    it: {
      metaTitle: "Trekking Etna: Sentieri e Percorsi — Magma 610, Pedara",
      metaDescription: "Trekking sull'Etna dal versante sud: sentieri per tutti i livelli tra boschi di quota e crateri sommitali. Escursioni Etna vicino a Pedara e Magma 610.",
      title: "Trekking sull'Etna: i sentieri del versante sud",
      intro: "Escursioni e trekking sul versante sud dell'Etna: sentieri per tutti i livelli, dai boschi di quota ai crateri sommitali.",
      imageAlt: "Sentiero di trekking sul versante sud dell'Etna tra boschi di quota",
      body: [
        {
          heading: 'Dove fare trekking sull’Etna',
          paragraphs: [
            "L'Etna offre percorsi di trekking per ogni tipo di escursionista: dalle passeggiate brevi tra i boschi di quota alle salite più impegnative verso i crateri sommitali. Il versante sud, dove si trova Magma 610, è uno dei punti di partenza più comodi per organizzare un'escursione, con sentieri segnalati che partono a pochi minuti dai nostri appartamenti.",
            "Tra le mete più richieste ci sono i sentieri che attraversano la Pineta Ragabo, i Crateri Silvestri e, per gli escursionisti più allenati, i percorsi che salgono verso i crateri sommitali, accessibili anche con l'accompagnamento di guide alpine autorizzate.",
          ],
        },
        {
          heading: 'Come arrivare ai sentieri da Pedara',
          paragraphs: [
            "Da Pedara, il versante sud dell'Etna è raggiungibile in pochi minuti d'auto: i principali punti di partenza dei sentieri — come Piano Vetore, il Rifugio Sapienza e i Crateri Silvestri — distano tra i 20 e i 40 minuti dal nostro alloggio indipendente. È una delle ragioni per cui Pedara è una base comoda per chi vuole dedicare più giornate al trekking senza dover cambiare sistemazione.",
          ],
        },
        {
          heading: 'Distanze e livello di difficoltà dei punti panoramici',
          paragraphs: [
            "Una guida rapida alle mete di trekking citate sopra, con distanza indicativa da Pedara, tempo di percorrenza e livello di difficoltà — utile per organizzare la giornata in base al tempo a disposizione e all'allenamento del gruppo.",
          ],
          table: {
            headers: ['Meta', 'Distanza da Pedara', 'Tempo di percorrenza', 'Difficoltà'],
            rows: [
              ['Pineta Ragabo', '~15 km', "25 min d'auto + 1h a piedi (anello)", 'Facile'],
              ['Crateri Silvestri', '~20 km', "30 min d'auto + 30 min a piedi", 'Facile'],
              ['Piano Vetore', '~18 km', "25 min d'auto", 'Facile — punto di partenza escursioni'],
              ['Rifugio Sapienza', '~25 km', "40 min d'auto", 'Media — base per le quote più alte'],
              ['Crateri sommitali', '~28 km + salita', "40 min d'auto + 3-4h a piedi, con guida", 'Impegnativa — richiede guida alpina'],
            ],
          },
        },
        {
          heading: 'Quando andare e cosa portare',
          paragraphs: [
            "Consigliamo di partire presto al mattino, sia per evitare le ore più calde in estate sia per godersi la luce migliore lungo il percorso. Scarpe da trekking con buona suola, un abbigliamento a strati e una scorta d'acqua sono indispensabili: la temperatura in quota può essere molto diversa da quella a valle, anche in piena estate, e il vento sopra i 2000 metri può essere piuttosto forte.",
            "Nei mesi più freddi alcuni sentieri di alta quota richiedono ramponi ed equipaggiamento specifico: verificate sempre le condizioni meteo e, se non avete esperienza di montagna in inverno, valutate un'escursione con guida.",
          ],
        },
        {
          heading: "Trekking sull'Etna e soggiorno a Magma 610",
          paragraphs: [
            "I nostri due appartamenti indipendenti a Pedara sono pensati anche per chi organizza più giorni di trekking sull'Etna: cucina attrezzata per preparare colazioni e pranzi al sacco, corte esterna per sistemare zaini e attrezzatura, e la flessibilità di orari che serve a chi parte presto al mattino per raggiungere i sentieri in quota.",
          ],
          links: [
            { label: 'Scopri gli appartamenti Magma 102 e Magma 104', path: '/la-struttura' },
            { label: "In bici sull'Etna: i percorsi del versante sud", path: '/territorio/bici-etna' },
            { label: "Tour delle cantine dell'Etna", path: '/territorio/cantine-etna' },
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    es: {
      metaTitle: 'Senderismo en el Etna',
      metaDescription: 'Excursiones y senderismo en la vertiente sur del Etna: rutas para todos los niveles, desde los bosques de altura hasta los cráteres cumbre.',
      title: 'Senderismo en el Etna',
      intro: 'Excursiones y senderismo en la vertiente sur del Etna: rutas para todos los niveles, desde los bosques de altura hasta los cráteres cumbre.',
      imageAlt: 'Senderismo en el Etna',
      body: [
        {
          heading: 'Senderismo en el Etna',
          paragraphs: [
            'El Etna ofrece rutas para todo tipo de excursionista: desde paseos breves entre los bosques de altura hasta ascensos más exigentes hacia los cráteres cumbre. La vertiente sur, donde se encuentra Magma 610, es uno de los puntos de partida más cómodos para organizar una salida.',
            'Recomendamos salir temprano por la mañana, llevar calzado adecuado y vestir por capas: la temperatura en altura puede ser muy distinta a la del valle, incluso en pleno verano.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    en: {
      metaTitle: 'Hiking Mount Etna',
      metaDescription: "Hiking and excursions on Etna's southern slope: trails for every level, from high-altitude woods to the summit craters.",
      title: 'Hiking Mount Etna',
      intro: "Hiking and excursions on Etna's southern slope: trails for every level, from high-altitude woods to the summit craters.",
      imageAlt: 'Hiking Mount Etna',
      body: [
        {
          heading: 'Hiking Mount Etna',
          paragraphs: [
            'Etna offers routes for every kind of hiker: from short walks through high-altitude woods to more demanding climbs toward the summit craters. The south side, where Magma 610 is located, is one of the most convenient starting points for a hike.',
            'We recommend setting off early in the morning, wearing suitable footwear and dressing in layers: the temperature at altitude can be very different from the valley below, even in high summer.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    fr: {
      metaTitle: "Randonnée sur l'Etna",
      metaDescription: "Randonnées et excursions sur le versant sud de l'Etna : des sentiers pour tous les niveaux, des forêts d'altitude aux cratères sommitaux.",
      title: "Randonnée sur l'Etna",
      intro: "Randonnées et excursions sur le versant sud de l'Etna : des sentiers pour tous les niveaux, des forêts d'altitude aux cratères sommitaux.",
      imageAlt: "Randonnée sur l'Etna",
      body: [
        {
          heading: "Randonnée sur l'Etna",
          paragraphs: [
            "L'Etna propose des itinéraires pour tous les types de randonneurs : des courtes promenades dans les forêts d'altitude aux ascensions plus exigeantes vers les cratères sommitaux. Le versant sud, où se trouve Magma 610, est l'un des points de départ les plus pratiques pour organiser une sortie.",
            "Nous conseillons de partir tôt le matin, de porter des chaussures adaptées et de s'habiller en couches : la température en altitude peut être très différente de celle de la vallée, même en plein été.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    de: {
      metaTitle: 'Wandern am Ätna',
      metaDescription: 'Wandern und Ausflüge an der Südflanke des Ätna: Wege für jedes Niveau, von den Wäldern in der Höhe bis zu den Gipfelkratern.',
      title: 'Wandern am Ätna',
      intro: 'Wandern und Ausflüge an der Südflanke des Ätna: Wege für jedes Niveau, von den Wäldern in der Höhe bis zu den Gipfelkratern.',
      imageAlt: 'Wandern am Ätna',
      body: [
        {
          heading: 'Wandern am Ätna',
          paragraphs: [
            'Der Ätna bietet Routen für jeden Wandertyp: von kurzen Spaziergängen durch die höhergelegenen Wälder bis zu anspruchsvolleren Aufstiegen zu den Gipfelkratern. Die Südflanke, wo sich Magma 610 befindet, ist einer der bequemsten Ausgangspunkte für eine Tour.',
            'Wir empfehlen, früh morgens zu starten, geeignetes Schuhwerk zu tragen und sich in Schichten zu kleiden: Die Temperatur in der Höhe kann selbst im Hochsommer stark von der im Tal abweichen.',
          ],
        },
      ],
    },
  },
  'cantine-etna': {
    it: {
      metaTitle: 'Tour Cantine Etna: Degustazioni — Magma 610, Pedara',
      metaDescription: "Tour delle cantine dell'Etna vicino a Pedara: degustazione vini su terreno vulcanico, vigneti panoramici e visite guidate tutto l'anno tra Trecastagni e Milo.",
      title: "Tour delle cantine dell'Etna: dove degustare vino vulcanico",
      intro: "Tour delle cantine dell'Etna: vigneti su terreno vulcanico e degustazioni di vini a pochi minuti da Pedara.",
      imageAlt: "Vigneti su terreno vulcanico durante un tour delle cantine dell'Etna",
      body: [
        {
          heading: "Le cantine dell'Etna: un territorio unico",
          paragraphs: [
            "L'area attorno all'Etna è una delle zone vitivinicole più interessanti d'Italia: il terreno vulcanico, ricco di minerali, dà ai vini locali — soprattutto i rossi e i bianchi ottenuti da uve Nerello Mascalese e Carricante — un carattere unico, riconosciuto ormai a livello internazionale.",
            "Molte cantine storiche, alcune con vigneti secolari ad alberello, organizzano tour delle cantine dell'Etna con visita alla tenuta, spiegazione del metodo di coltivazione su terrazzamenti lavici e degustazione guidata, spesso con vista diretta sul vulcano.",
          ],
        },
        {
          heading: 'Le cantine più vicine a Pedara',
          paragraphs: [
            "Pedara si trova a pochi minuti da alcune delle zone vitivinicole più note del versante sud ed est dell'Etna, tra Trecastagni, Milo e Zafferana Etnea. È possibile organizzare un tour di mezza giornata visitando due o tre cantine, oppure dedicare un'intera giornata a un percorso più completo tra degustazioni e pranzi in vigna.",
          ],
        },
        {
          heading: 'Quando prenotare la degustazione',
          paragraphs: [
            "Prenotare in anticipo è consigliato, soprattutto nei mesi della vendemmia (settembre-ottobre), quando la richiesta è più alta e molte cantine organizzano eventi speciali legati alla raccolta delle uve. Nei mesi primaverili ed estivi, invece, è più facile trovare disponibilità anche con breve preavviso.",
            'Molti tour delle cantine dell’Etna includono anche una passeggiata tra i filari, con spiegazioni sulla coltivazione ad alberello su terreno lavico e sulle diverse contrade vulcaniche — ognuna con un microclima e un carattere del vino leggermente diverso, un dettaglio che rende ogni degustazione un’esperienza a sé.',
          ],
        },
        {
          heading: 'Il vino dell’Etna e il soggiorno a Magma 610',
          paragraphs: [
            "Dopo una giornata di degustazioni, i nostri appartamenti indipendenti a Pedara offrono lo spazio giusto per rilassarsi: una corte esterna attrezzata dove godersi la serata, e la comodità di raggiungere in pochi minuti d'auto il centro del paese per cena, senza dover affrontare lunghi spostamenti dopo una giornata tra le cantine.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    es: {
      metaTitle: 'Bodegas del Etna',
      metaDescription: 'Tours por las bodegas del Etna: viñedos sobre terreno volcánico y catas de vino a pocos minutos de Pedara.',
      title: 'Bodegas del Etna',
      intro: 'Tours por las bodegas del Etna: viñedos sobre terreno volcánico y catas de vino a pocos minutos de Pedara.',
      imageAlt: 'Bodegas del Etna',
      body: [
        {
          heading: 'Bodegas del Etna',
          paragraphs: [
            'La zona alrededor del Etna es una de las áreas vinícolas más interesantes de Italia: el terreno volcánico da a los vinos locales un carácter único. Muchas bodegas históricas organizan visitas y catas durante todo el año, a menudo con vistas al volcán.',
            'Se recomienda reservar con antelación, sobre todo en los meses de vendimia (septiembre-octubre), cuando la demanda es más alta.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    en: {
      metaTitle: 'Etna Wineries',
      metaDescription: 'Etna winery tours: vineyards on volcanic soil and wine tastings just minutes from Pedara.',
      title: 'Etna Wineries',
      intro: 'Etna winery tours: vineyards on volcanic soil and wine tastings just minutes from Pedara.',
      imageAlt: 'Etna Wineries',
      body: [
        {
          heading: 'Etna Wineries',
          paragraphs: [
            "The area around Etna is one of Italy's most interesting wine regions: volcanic soil gives local wines a unique character. Many historic wineries organise tours and tastings year-round, often with views of the volcano.",
            'Booking ahead is recommended, especially during harvest season (September–October), when demand is highest.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    fr: {
      metaTitle: "Caves de l'Etna",
      metaDescription: "Visites des caves de l'Etna : vignobles sur sol volcanique et dégustations de vins à quelques minutes de Pedara.",
      title: "Caves de l'Etna",
      intro: "Visites des caves de l'Etna : vignobles sur sol volcanique et dégustations de vins à quelques minutes de Pedara.",
      imageAlt: "Caves de l'Etna",
      body: [
        {
          heading: "Caves de l'Etna",
          paragraphs: [
            "La région autour de l'Etna est l'une des zones viticoles les plus intéressantes d'Italie : le sol volcanique confère aux vins locaux un caractère unique. De nombreuses caves historiques organisent des visites et dégustations toute l'année, souvent avec vue sur le volcan.",
            "Il est conseillé de réserver à l'avance, surtout pendant les vendanges (septembre-octobre), période de forte demande.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    de: {
      metaTitle: 'Weingüter am Ätna',
      metaDescription: 'Weingut-Touren am Ätna: Weinberge auf vulkanischem Boden und Weinverkostungen nur wenige Minuten von Pedara entfernt.',
      title: 'Weingüter am Ätna',
      intro: 'Weingut-Touren am Ätna: Weinberge auf vulkanischem Boden und Weinverkostungen nur wenige Minuten von Pedara entfernt.',
      imageAlt: 'Weingüter am Ätna',
      body: [
        {
          heading: 'Weingüter am Ätna',
          paragraphs: [
            'Die Region rund um den Ätna gehört zu den interessantesten Weinbaugebieten Italiens: Der vulkanische Boden verleiht den lokalen Weinen einen einzigartigen Charakter. Viele historische Weingüter bieten das ganze Jahr über Führungen und Verkostungen an, oft mit Blick auf den Vulkan.',
            'Eine Reservierung im Voraus wird empfohlen, besonders während der Weinlese (September–Oktober), wenn die Nachfrage am höchsten ist.',
          ],
        },
      ],
    },
  },
  'gole-alcantara': {
    it: {
      metaTitle: "Gole Alcantara da Pedara: Guida Completa — Magma 610",
      metaDescription: "Le Gole dell'Alcantara da Pedara: escursione al canyon di roccia basaltica scavato dal fiume, a 40 minuti d'auto. Consigli pratici per organizzare la visita.",
      title: "Le Gole dell'Alcantara: escursione al canyon basaltico",
      intro: "Le Gole dell'Alcantara da Pedara: un canyon di roccia basaltica scavato dal fiume Alcantara, a circa 40 minuti d'auto.",
      imageAlt: "Pareti di roccia basaltica nelle Gole dell'Alcantara vicino a Pedara",
      body: [
        {
          heading: "Cosa sono le Gole dell'Alcantara",
          paragraphs: [
            "Le Gole dell'Alcantara sono un canyon naturale formatosi dal raffreddamento della lava a contatto con il fiume Alcantara, che nei secoli ha scavato pareti di roccia basaltica alte fino a 50 metri. Le celebri colonne prismatiche, create dal lento raffreddamento della colata lavica, sono uno degli esempi più spettacolari di gole basaltiche in Sicilia e in Europa.",
            "È una delle mete naturalistiche più visitate della Sicilia orientale, adatta sia a chi cerca una passeggiata panoramica sulle passerelle attrezzate sia a chi vuole vivere un'escursione più avventurosa camminando nel letto del fiume.",
          ],
        },
        {
          heading: 'Come arrivare da Pedara',
          paragraphs: [
            "Le Gole dell'Alcantara si trovano a circa 40 minuti d'auto da Pedara, lungo un percorso che attraversa parte del versante nord-est dell'Etna. È una gita facilmente organizzabile in mezza giornata, anche combinandola con una tappa a Taormina o nei borghi vicini nello stesso giorno.",
          ],
        },
        {
          heading: "Consigli per l'escursione",
          paragraphs: [
            "Consigliamo scarpe con buona aderenza e, se si vuole camminare nell'acqua, un cambio: l'acqua del fiume resta fredda anche in estate, complice la sua origine sotterranea. Nei mesi più caldi è possibile noleggiare stivali di gomma direttamente all'ingresso del parco per affrontare il percorso nel torrente in sicurezza.",
            "Oltre al percorso principale con ascensori e passerelle, chi ha più tempo può risalire il corso del fiume a piedi, tra le gole più strette, per una versione più selvaggia e meno affollata dell'escursione alle Gole dell'Alcantara, adatta a chi è già abituato a camminare su terreni irregolari.",
          ],
        },
        {
          heading: "Dove soggiornare per visitare le Gole dell'Alcantara",
          paragraphs: [
            "Pernottare a Pedara, in uno dei nostri appartamenti indipendenti, permette di organizzare comodamente l'escursione alle Gole dell'Alcantara come parte di un itinerario più ampio, sfruttando la posizione centrale rispetto ai principali punti di interesse del versante sud ed est dell'Etna.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    es: {
      metaTitle: 'Gargantas del Alcantara',
      metaDescription: 'Las Gargantas del Alcantara desde Pedara: un cañón de roca basáltica excavado por el río Alcantara, a unos 40 minutos en coche.',
      title: 'Gargantas del Alcantara',
      intro: 'Las Gargantas del Alcantara desde Pedara: un cañón de roca basáltica excavado por el río Alcantara, a unos 40 minutos en coche.',
      imageAlt: 'Gargantas del Alcantara',
      body: [
        {
          heading: 'Gargantas del Alcantara',
          paragraphs: [
            'Las Gargantas del Alcantara son un cañón natural formado por el enfriamiento de la lava en contacto con el río, que a lo largo de los siglos ha excavado paredes de roca basáltica de hasta 50 metros de altura. Es uno de los destinos naturales más visitados del este de Sicilia.',
            'Se encuentran a unos 40 minutos en coche desde Pedara. Recomendamos calzado con buen agarre y, si se quiere caminar por el agua, una muda: el agua del río se mantiene fría incluso en verano.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    en: {
      metaTitle: 'Alcantara Gorges',
      metaDescription: 'The Alcantara Gorges from Pedara: a basalt canyon carved by the Alcantara river, about a 40-minute drive away.',
      title: 'Alcantara Gorges',
      intro: 'The Alcantara Gorges from Pedara: a basalt canyon carved by the Alcantara river, about a 40-minute drive away.',
      imageAlt: 'Alcantara Gorges',
      body: [
        {
          heading: 'Alcantara Gorges',
          paragraphs: [
            'The Alcantara Gorges are a natural canyon formed as lava cooled on contact with the river, which over centuries carved basalt rock walls up to 50 metres high. It’s one of the most visited natural sites in eastern Sicily.',
            'They’re about a 40-minute drive from Pedara. We recommend footwear with good grip and, if you plan to wade in, a change of clothes: the river water stays cold even in summer.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    fr: {
      metaTitle: "Gorges de l'Alcantara",
      metaDescription: "Les Gorges de l'Alcantara depuis Pedara : un canyon de roche basaltique creusé par le fleuve Alcantara, à environ 40 minutes en voiture.",
      title: "Gorges de l'Alcantara",
      intro: "Les Gorges de l'Alcantara depuis Pedara : un canyon de roche basaltique creusé par le fleuve Alcantara, à environ 40 minutes en voiture.",
      imageAlt: "Gorges de l'Alcantara",
      body: [
        {
          heading: "Gorges de l'Alcantara",
          paragraphs: [
            "Les Gorges de l'Alcantara sont un canyon naturel formé par le refroidissement de la lave au contact du fleuve, qui a creusé au fil des siècles des parois de roche basaltique atteignant 50 mètres de haut. C'est l'un des sites naturels les plus visités de Sicile orientale.",
            "Elles se trouvent à environ 40 minutes en voiture de Pedara. Nous conseillons des chaussures adhérentes et, pour marcher dans l'eau, une tenue de rechange : l'eau du fleuve reste froide même en été.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    de: {
      metaTitle: 'Alcantara-Schlucht',
      metaDescription: 'Die Alcantara-Schlucht von Pedara aus: eine Basaltschlucht, geformt vom Fluss Alcantara, etwa 40 Autominuten entfernt.',
      title: 'Alcantara-Schlucht',
      intro: 'Die Alcantara-Schlucht von Pedara aus: eine Basaltschlucht, geformt vom Fluss Alcantara, etwa 40 Autominuten entfernt.',
      imageAlt: 'Alcantara-Schlucht',
      body: [
        {
          heading: 'Alcantara-Schlucht',
          paragraphs: [
            'Die Alcantara-Schlucht ist eine natürliche Schlucht, die entstand, als Lava beim Kontakt mit dem Fluss erkaltete. Über Jahrhunderte formte der Fluss bis zu 50 Meter hohe Basaltwände. Sie ist eines der meistbesuchten Naturziele im Osten Siziliens.',
            'Sie liegt etwa 40 Autominuten von Pedara entfernt. Wir empfehlen Schuhe mit gutem Grip und, wer ins Wasser möchte, Wechselkleidung: Das Flusswasser bleibt auch im Sommer kalt.',
          ],
        },
      ],
    },
  },
  taormina: {
    it: {
      metaTitle: 'Taormina da Pedara: Cosa Vedere — Magma 610, Pedara',
      metaDescription: "Taormina da Pedara in mezz'ora d'auto: cosa vedere tra Teatro Greco e Isola Bella, come arrivare dall'Etna e quando andare per organizzare la visita.",
      title: "Taormina: cosa vedere e come arrivare dall'Etna",
      intro: "Taormina da Pedara: l'eleganza della costa ionica, tra il Teatro Greco e le calette di Isola Bella, a circa mezz'ora d'auto.",
      imageAlt: 'Vista di Taormina e della costa ionica dal Teatro Greco',
      body: [
        {
          heading: 'Cosa vedere a Taormina',
          paragraphs: [
            "Taormina è una delle mete più celebri della Sicilia: il Teatro Greco, con la sua vista mozzafiato sull'Etna e sul mare, è probabilmente il monumento più fotografato dell'isola. Il centro storico, con Corso Umberto, Piazza IX Aprile e i suoi scorci sul golfo, si percorre a piedi in poche ore, tra negozi, terrazze panoramiche e palazzi storici.",
            "Poco distante, le calette di Isola Bella — una piccola isola collegata alla terraferma da una lingua di sabbia — sono una delle immagini simbolo della costa ionica siciliana e una tappa quasi obbligata per chi visita Taormina.",
          ],
        },
        {
          heading: "Come arrivare a Taormina dall'Etna",
          paragraphs: [
            "Da Pedara, sul versante sud dell'Etna, Taormina si raggiunge in circa mezz'ora d'auto, con un percorso che scende verso la costa ionica attraversando alcuni dei paesaggi più suggestivi della zona. È anche possibile organizzare la visita utilizzando i collegamenti pubblici, anche se l'auto resta la soluzione più comoda per gestire orari e soste lungo il tragitto.",
          ],
        },
        {
          heading: 'Quando visitare Taormina',
          paragraphs: [
            "Nei mesi estivi consigliamo di arrivare presto per trovare parcheggio più facilmente ed evitare il caldo delle ore centrali, soprattutto se si vuole visitare anche Isola Bella. In primavera e autunno, Taormina offre un clima più mite e meno affollamento, ideale per godersi con calma il centro storico e il Teatro Greco.",
            "Se il programma della giornata include anche una tappa al mare, le spiagge di Mazzarò e Isola Bella sono raggiungibili con la funivia direttamente dal centro di Taormina, un'alternativa comoda a chi non vuole cercare parcheggio due volte in un solo giorno.",
          ],
        },
        {
          heading: 'Taormina e il soggiorno a Magma 610',
          paragraphs: [
            "Scegliere Magma 610 come base significa poter dedicare una giornata intera a Taormina senza rinunciare alla tranquillità di un alloggio indipendente lontano dal traffico e dai prezzi del centro costiero, mantenendo comunque facile accesso sia al mare sia alle escursioni sull'Etna.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    es: {
      metaTitle: 'Taormina',
      metaDescription: 'Taormina desde Pedara: la elegancia de la costa jónica, entre el Teatro Griego y las calas de Isola Bella, a unos 30 minutos en coche.',
      title: 'Taormina',
      intro: 'Taormina desde Pedara: la elegancia de la costa jónica, entre el Teatro Griego y las calas de Isola Bella, a unos 30 minutos en coche.',
      imageAlt: 'Taormina',
      body: [
        {
          heading: 'Taormina',
          paragraphs: [
            'Taormina es uno de los destinos más célebres de Sicilia: el Teatro Griego, el casco antiguo frente al mar y las calas de Isola Bella la convierten en una parada casi obligada para quien se aloja en la vertiente sur del Etna.',
            'Se llega en unos 30 minutos en coche desde Pedara. En los meses de verano recomendamos llegar temprano para encontrar aparcamiento con más facilidad y evitar el calor de las horas centrales.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    en: {
      metaTitle: 'Taormina',
      metaDescription: "Taormina from Pedara: the elegance of the Ionian coast, between the Greek Theatre and Isola Bella's coves, about a 30-minute drive away.",
      title: 'Taormina',
      intro: "Taormina from Pedara: the elegance of the Ionian coast, between the Greek Theatre and Isola Bella's coves, about a 30-minute drive away.",
      imageAlt: 'Taormina',
      body: [
        {
          heading: 'Taormina',
          paragraphs: [
            "Taormina is one of Sicily's most famous destinations: the Greek Theatre, the seafront old town and Isola Bella's coves make it a near-essential stop for anyone staying on Etna's southern slope.",
            "It's about a 30-minute drive from Pedara. In summer months we recommend arriving early to find parking more easily and avoid the midday heat.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    fr: {
      metaTitle: 'Taormine',
      metaDescription: "Taormine depuis Pedara : l'élégance de la côte ionienne, entre le Théâtre Grec et les criques d'Isola Bella, à environ 30 minutes en voiture.",
      title: 'Taormine',
      intro: "Taormine depuis Pedara : l'élégance de la côte ionienne, entre le Théâtre Grec et les criques d'Isola Bella, à environ 30 minutes en voiture.",
      imageAlt: 'Taormine',
      body: [
        {
          heading: 'Taormine',
          paragraphs: [
            "Taormine est l'une des destinations les plus célèbres de Sicile : le Théâtre Grec, le centre historique face à la mer et les criques d'Isola Bella en font une étape presque incontournable pour qui séjourne sur le versant sud de l'Etna.",
            "On y accède en environ 30 minutes en voiture depuis Pedara. En été, nous conseillons d'arriver tôt pour trouver plus facilement une place de parking et éviter la chaleur des heures centrales.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    de: {
      metaTitle: 'Taormina',
      metaDescription: 'Taormina von Pedara aus: die Eleganz der ionischen Küste, zwischen dem Griechischen Theater und den Buchten von Isola Bella, etwa 30 Autominuten entfernt.',
      title: 'Taormina',
      intro: 'Taormina von Pedara aus: die Eleganz der ionischen Küste, zwischen dem Griechischen Theater und den Buchten von Isola Bella, etwa 30 Autominuten entfernt.',
      imageAlt: 'Taormina',
      body: [
        {
          heading: 'Taormina',
          paragraphs: [
            'Taormina ist eines der berühmtesten Reiseziele Siziliens: Das Griechische Theater, die Altstadt am Meer und die Buchten von Isola Bella machen es zu einem nahezu obligatorischen Ausflugsziel für Gäste an der Südflanke des Ätna.',
            'Von Pedara aus ist es etwa 30 Autominuten entfernt. In den Sommermonaten empfehlen wir eine frühe Anreise, um leichter einen Parkplatz zu finden und die Mittagshitze zu vermeiden.',
          ],
        },
      ],
    },
  },
  'catania-storica': {
    it: {
      metaTitle: 'Catania Centro Storico: Cosa Vedere — Magma 610, Pedara',
      metaDescription: 'Cosa vedere nel centro storico di Catania: Piazza del Duomo, la Pescheria e l’architettura barocca, a soli 20 minuti d’auto da Pedara e Magma 610.',
      title: 'Catania: il centro storico barocco a due passi da Magma 610',
      intro: 'Il centro storico di Catania: il barocco siciliano, i mercati storici e il porto, a pochi minuti da Magma 610.',
      imageAlt: 'Piazza del Duomo nel centro storico barocco di Catania',
      body: [
        {
          heading: 'Cosa vedere nel centro storico di Catania',
          paragraphs: [
            "Catania, patrimonio UNESCO per il suo centro barocco, è la città più vicina a Magma 610: Piazza del Duomo con la fontana dell'Elefante, via Etnea che attraversa il cuore della città, e il mercato storico della Pescheria raccontano una città vivace, costruita — letteralmente — con la pietra lavica dell'Etna.",
            'Tra le tappe da non perdere ci sono anche il Teatro Massimo Bellini, i resti dell’anfiteatro romano nascosto tra i palazzi del centro, e Castello Ursino, che oggi ospita il museo civico affacciato su piazza Federico di Svevia.',
          ],
        },
        {
          heading: 'Catania barocca: architettura e storia',
          paragraphs: [
            'Dopo il devastante terremoto del 1693, Catania fu ricostruita in stile tardo-barocco, con la stessa pietra lavica nera che caratterizza ancora oggi le facciate del centro storico, in contrasto con la pietra bianca calcarea usata per decorazioni e dettagli. Questo stile, condiviso con altre città del Val di Noto, è oggi riconosciuto Patrimonio dell’Umanità dall’UNESCO.',
            'Passeggiando per il centro si riconoscono facilmente gli elementi tipici del barocco catanese: balconi con mensole scolpite, portali monumentali e la caratteristica combinazione di nero lavico e bianco calcareo che dà alla città un carattere architettonico immediatamente riconoscibile, diverso da qualunque altro centro storico siciliano.',
          ],
        },
        {
          heading: 'Come arrivare e quando visitare',
          paragraphs: [
            "Il centro di Catania si raggiunge in circa 20-25 minuti d'auto da Pedara. Consigliamo una visita al mattino presto, sia per vivere il mercato della Pescheria nel pieno della sua attività, sia per godersi le principali piazze del centro storico prima dell'arrivo dei gruppi turistici.",
          ],
        },
        {
          heading: 'Catania e il soggiorno a Magma 610',
          paragraphs: [
            "La vicinanza di Magma 610 a Catania permette di alternare giornate in città a escursioni sull'Etna o gite verso la costa, senza dover scegliere tra mare, vulcano e cultura: in circa venti minuti si passa dalla tranquillità di Pedara al centro barocco della città.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    es: {
      metaTitle: 'Catania histórica',
      metaDescription: 'El centro histórico de Catania: el barroco siciliano, los mercados históricos y el puerto, a pocos minutos de Magma 610.',
      title: 'Catania histórica',
      intro: 'El centro histórico de Catania: el barroco siciliano, los mercados históricos y el puerto, a pocos minutos de Magma 610.',
      imageAlt: 'Catania histórica',
      body: [
        {
          heading: 'Catania histórica',
          paragraphs: [
            'Catania, Patrimonio de la Humanidad por su centro barroco, es la ciudad más cercana a Magma 610: la plaza del Duomo, la vía Etnea y el histórico mercado de la Pescheria cuentan la historia de una ciudad vibrante, construida —literalmente— con la piedra volcánica del Etna.',
            'El centro se alcanza en unos 20-25 minutos en coche desde Pedara. Recomendamos visitarlo a primera hora de la mañana para vivir el mercado de la Pescheria en pleno funcionamiento.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    en: {
      metaTitle: 'Historic Catania',
      metaDescription: "Historic Catania's city centre: Sicilian baroque, historic markets and the harbour, just minutes from Magma 610.",
      title: 'Historic Catania',
      intro: "Historic Catania's city centre: Sicilian baroque, historic markets and the harbour, just minutes from Magma 610.",
      imageAlt: 'Historic Catania',
      body: [
        {
          heading: 'Historic Catania',
          paragraphs: [
            "Catania, a UNESCO World Heritage site for its baroque centre, is the closest city to Magma 610: Piazza del Duomo, Via Etnea and the historic Pescheria fish market tell the story of a lively city, built — quite literally — from Etna's lava stone.",
            'The city centre is about a 20–25 minute drive from Pedara. We recommend visiting early in the morning to catch the Pescheria market at its liveliest.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    fr: {
      metaTitle: 'Catane historique',
      metaDescription: "Le centre historique de Catane : le baroque sicilien, les marchés historiques et le port, à quelques minutes de Magma 610.",
      title: 'Catane historique',
      intro: "Le centre historique de Catane : le baroque sicilien, les marchés historiques et le port, à quelques minutes de Magma 610.",
      imageAlt: 'Catane historique',
      body: [
        {
          heading: 'Catane historique',
          paragraphs: [
            "Catane, classée au patrimoine mondial de l'UNESCO pour son centre baroque, est la ville la plus proche de Magma 610 : la piazza del Duomo, la via Etnea et le marché historique de la Pescheria racontent une ville animée, construite — au sens propre — avec la pierre de lave de l'Etna.",
            "Le centre se trouve à environ 20-25 minutes en voiture de Pedara. Nous conseillons une visite tôt le matin pour vivre le marché de la Pescheria en pleine activité.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    de: {
      metaTitle: 'Historisches Catania',
      metaDescription: 'Die Altstadt von Catania: sizilianischer Barock, historische Märkte und der Hafen, nur wenige Minuten von Magma 610 entfernt.',
      title: 'Historisches Catania',
      intro: 'Die Altstadt von Catania: sizilianischer Barock, historische Märkte und der Hafen, nur wenige Minuten von Magma 610 entfernt.',
      imageAlt: 'Historisches Catania',
      body: [
        {
          heading: 'Historisches Catania',
          paragraphs: [
            'Catania, UNESCO-Weltkulturerbe für sein barockes Zentrum, ist die nächstgelegene Stadt zu Magma 610: Piazza del Duomo, Via Etnea und der historische Fischmarkt Pescheria erzählen von einer lebendigen Stadt, die buchstäblich aus dem Lavastein des Ätna erbaut wurde.',
            'Das Zentrum ist etwa 20–25 Autominuten von Pedara entfernt. Wir empfehlen einen frühen Besuch am Morgen, um den Pescheria-Markt in vollem Betrieb zu erleben.',
          ],
        },
      ],
    },
  },
  'bici-etna': {
    it: {
      metaTitle: 'Percorsi Bici Etna sul Versante Sud — Magma 610, Pedara',
      metaDescription: "Percorsi bici sul versante sud dell'Etna, tra vigneti e boschi di quota: cicloturismo per ogni livello e bike tour, a pochi minuti da Pedara.",
      title: "In bici sull'Etna: i percorsi del versante sud",
      intro: "Percorsi bici sul versante sud dell'Etna, tra vigneti e boschi di quota — cicloturismo per ogni livello, a due passi da Pedara.",
      imageAlt: "Ciclista su un percorso bici del versante sud dell'Etna tra i vigneti",
      body: [
        {
          heading: "I percorsi bici sul versante sud dell'Etna",
          paragraphs: [
            "Il versante sud dell'Etna offre percorsi bici per ogni livello: dalle pedalate tranquille tra i vigneti e i muretti a secco fino ai tracciati più impegnativi che salgono verso i boschi di quota, fino ai Crateri Silvestri. È una delle zone più amate dagli appassionati di cicloturismo in Sicilia, grazie ai panorami sul vulcano e sulla costa ionica che si aprono lungo la salita.",
            "Tra i percorsi più conosciuti ci sono quelli che collegano i paesi etnei — Pedara, Trecastagni, Nicolosi — lungo le antiche mulattiere e le strade secondarie che attraversano i vigneti, ideali per chi cerca un bike tour Etna Sicilia meno impegnativo ma comunque ricco di paesaggio.",
          ],
        },
        {
          heading: 'Percorsi per ogni livello ed e-bike',
          paragraphs: [
            'Per chi non vuole affrontare i dislivelli maggiori, diversi punti noleggio della zona offrono e-bike, una soluzione comoda per godersi il paesaggio senza rinunciare a qualche salita impegnativa. È possibile noleggiare sia mountain bike che gravel, a seconda del tipo di percorso scelto.',
          ],
        },
        {
          heading: 'Quando andare e cosa sapere',
          paragraphs: [
            'Consigliamo di partire nelle ore più fresche della giornata, soprattutto in estate, e di verificare sempre le condizioni meteo in quota prima di affrontare i percorsi più lunghi: sopra i 1500 metri le temperature possono scendere rapidamente anche con clima estivo a valle.',
            'Molti dei percorsi bici Etna attraversano strade sterrate e sentieri condivisi con escursionisti a piedi: un casco e luci ben visibili, anche di giorno, sono un accorgimento utile su alcuni tratti meno frequentati.',
          ],
        },
        {
          heading: 'Cicloturismo sull’Etna e soggiorno a Magma 610',
          paragraphs: [
            "I nostri appartamenti a Pedara sono un buon punto di partenza per chi organizza qualche giorno di cicloturismo sull'Etna: spazio esterno per il deposito delle biciclette, posizione comoda rispetto ai principali punti di partenza dei percorsi, e la flessibilità di un alloggio indipendente per chi ha esigenze di orario legate agli allenamenti.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    es: {
      metaTitle: 'En bici por el Etna',
      metaDescription: 'Rutas en bicicleta en la vertiente sur del Etna, entre viñedos y bosques de altura — cicloturismo para todos los niveles, a un paso de Pedara.',
      title: 'En bici por el Etna',
      intro: 'Rutas en bicicleta en la vertiente sur del Etna, entre viñedos y bosques de altura — cicloturismo para todos los niveles, a un paso de Pedara.',
      imageAlt: 'En bici por el Etna',
      body: [
        {
          heading: 'En bici por el Etna',
          paragraphs: [
            'La vertiente sur del Etna ofrece rutas en bicicleta para todos los niveles: desde paseos tranquilos entre viñedos y muretes de piedra seca hasta trazados más exigentes que suben hacia los bosques de altura. Es una de las zonas más apreciadas por los aficionados al cicloturismo en Sicilia, gracias a las vistas sobre el volcán y la costa jónica.',
            'Para quienes prefieren evitar los desniveles más duros, varios puntos de alquiler de la zona ofrecen e-bikes, una solución cómoda para disfrutar del paisaje sin renunciar a alguna subida exigente.',
            'Recomendamos salir en las horas más frescas del día, sobre todo en verano, y comprobar siempre las condiciones meteorológicas en altura antes de afrontar las rutas más largas.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    en: {
      metaTitle: 'Cycling Mount Etna',
      metaDescription: "Cycling routes on Etna's southern slope, through vineyards and high-altitude woods — cycle touring for every level, just minutes from Pedara.",
      title: 'Cycling Mount Etna',
      intro: "Cycling routes on Etna's southern slope, through vineyards and high-altitude woods — cycle touring for every level, just minutes from Pedara.",
      imageAlt: 'Cycling Mount Etna',
      body: [
        {
          heading: 'Cycling Mount Etna',
          paragraphs: [
            "Etna's southern slope offers cycling routes for every level: from easy rides through vineyards and dry-stone walls to more demanding climbs toward the high-altitude woods. It's one of Sicily's most loved spots for cycle touring, thanks to views over the volcano and the Ionian coast.",
            "For those who'd rather skip the steeper climbs, several rental points in the area offer e-bikes — a convenient way to enjoy the scenery without giving up a challenging ascent or two.",
            'We recommend setting off during the cooler hours of the day, especially in summer, and always checking weather conditions at altitude before tackling the longer routes.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    fr: {
      metaTitle: "À vélo sur l'Etna",
      metaDescription: "Parcours à vélo sur le versant sud de l'Etna, entre vignobles et forêts d'altitude — cyclotourisme pour tous les niveaux, à deux pas de Pedara.",
      title: "À vélo sur l'Etna",
      intro: "Parcours à vélo sur le versant sud de l'Etna, entre vignobles et forêts d'altitude — cyclotourisme pour tous les niveaux, à deux pas de Pedara.",
      imageAlt: "À vélo sur l'Etna",
      body: [
        {
          heading: "À vélo sur l'Etna",
          paragraphs: [
            "Le versant sud de l'Etna propose des parcours à vélo pour tous les niveaux : des balades tranquilles entre vignobles et murets en pierre sèche jusqu'aux tracés plus exigeants qui montent vers les forêts d'altitude. C'est l'une des zones préférées des amateurs de cyclotourisme en Sicile, grâce aux panoramas sur le volcan et la côte ionienne.",
            "Pour qui préfère éviter les dénivelés les plus importants, plusieurs points de location de la région proposent des e-bikes, une solution pratique pour profiter du paysage sans renoncer à quelques montées exigeantes.",
            "Nous conseillons de partir aux heures les plus fraîches de la journée, surtout en été, et de toujours vérifier les conditions météo en altitude avant d'affronter les parcours les plus longs.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    de: {
      metaTitle: 'Mit dem Rad am Ätna',
      metaDescription: 'Radrouten an der Südflanke des Ätna, durch Weinberge und höher gelegene Wälder — Radtourismus für jedes Niveau, nur wenige Minuten von Pedara entfernt.',
      title: 'Mit dem Rad am Ätna',
      intro: 'Radrouten an der Südflanke des Ätna, durch Weinberge und höher gelegene Wälder — Radtourismus für jedes Niveau, nur wenige Minuten von Pedara entfernt.',
      imageAlt: 'Mit dem Rad am Ätna',
      body: [
        {
          heading: 'Mit dem Rad am Ätna',
          paragraphs: [
            'Die Südflanke des Ätna bietet Radrouten für jedes Niveau: von entspannten Fahrten durch Weinberge und Trockensteinmauern bis zu anspruchsvolleren Strecken hinauf zu den höher gelegenen Wäldern. Es ist eine der beliebtesten Gegenden Siziliens für Radtouristen, dank der Ausblicke auf den Vulkan und die ionische Küste.',
            'Wer die steileren Anstiege vermeiden möchte, findet in mehreren Verleihstationen der Gegend E-Bikes — eine bequeme Lösung, um die Landschaft zu genießen, ohne auf eine anspruchsvolle Steigung zu verzichten.',
            'Wir empfehlen, in den kühleren Tagesstunden zu starten, besonders im Sommer, und vor längeren Strecken immer die Wetterbedingungen in der Höhe zu prüfen.',
          ],
        },
      ],
    },
  },
  'centro-cuore-morgagni': {
    it: {
      metaTitle: 'Alloggio Vicino Centro Cuore Morgagni — Magma 610, Pedara',
      metaDescription: 'Alloggio vicino al Centro Cuore Morgagni di Pedara: 5 minuti in auto, 15 a piedi. Due appartamenti indipendenti per soggiorni brevi o prolungati.',
      title: 'Dove dormire vicino al Centro Cuore Morgagni di Pedara',
      intro: 'Alloggio comodo e tranquillo a pochi minuti dal Centro Cuore Morgagni di Pedara — ideale per una visita medica o per stare vicino a un familiare.',
      imageAlt: 'Il Centro Cuore Morgagni di Pedara',
      body: [
        {
          heading: 'Distanza dal Centro Cuore Morgagni',
          paragraphs: [
            "Magma 610 si trova a soli 5 minuti in auto e a circa 15 minuti a piedi dal Centro Cuore Morgagni. È una soluzione pratica per chi deve organizzare una visita medica, un ricovero o una degenza e cerca un alloggio vicino al Centro Cuore Morgagni, senza dover gestire gli spostamenti in una città che non conosce.",
          ],
        },
        {
          heading: 'Due appartamenti indipendenti',
          paragraphs: [
            'I due appartamenti, Magma 102 e Magma 104, sono indipendenti e dotati di ogni comfort: cucina attrezzata, biancheria inclusa e connessione Wi-Fi, per permettere di organizzare la giornata — tra un appuntamento e l’altro — senza pensieri aggiuntivi.',
            'Avere una cucina propria è spesso un dettaglio importante per chi si ferma più giorni vicino al Centro Cuore Morgagni: significa poter preparare un pasto leggero prima di una visita, o semplicemente non dover mangiare sempre fuori durante una degenza lunga di un familiare.',
          ],
        },
        {
          heading: 'Flessibilità per soggiorni brevi o prolungati',
          paragraphs: [
            'Capiamo che chi cerca un alloggio vicino al Centro Cuore Morgagni spesso ha esigenze diverse dal classico soggiorno turistico: per questo offriamo la flessibilità di un soggiorno breve, anche di una sola notte, o prolungato, in base ai tempi delle visite o del ricovero.',
            'Il check-in e il check-out possono essere organizzati con orari flessibili quando le circostanze lo richiedono: capita spesso che le visite mediche o gli orari di un ricovero non coincidano con i normali orari di arrivo e partenza, e cerchiamo di andare incontro a queste esigenze quando possibile.',
          ],
        },
        {
          heading: 'Comodità pratiche per chi arriva da fuori',
          paragraphs: [
            'Parcheggio comodo, silenzio e la possibilità di raggiungere il Centro Cuore Morgagni anche a piedi rendono Magma 610 una base pratica per chi arriva da fuori città e non conosce la zona. In caso di necessità, siamo sempre disponibili per indicazioni su farmacie, supermercati o altri servizi nelle vicinanze.',
            'Pedara è un paese tranquillo, senza il traffico e la confusione di una città più grande: un aspetto che molti dei nostri ospiti, soprattutto chi è già alle prese con lo stress di una visita medica o di un ricovero, trovano particolarmente apprezzabile rispetto a un alloggio in centro città.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    es: {
      metaTitle: 'Cerca del Centro Cuore Morgagni',
      metaDescription: 'Alojamiento cómodo y tranquilo a pocos minutos del Centro Cuore Morgagni de Pedara — ideal para una visita médica o para estar cerca de un familiar.',
      title: 'Cerca del Centro Cuore Morgagni',
      intro: 'Alojamiento cómodo y tranquilo a pocos minutos del Centro Cuore Morgagni de Pedara — ideal para una visita médica o para estar cerca de un familiar.',
      imageAlt: 'Cerca del Centro Cuore Morgagni',
      body: [
        {
          heading: 'Cerca del Centro Cuore Morgagni',
          paragraphs: [
            'Magma 610 se encuentra a solo 5 minutos en coche y a unos 15 minutos a pie del Centro Cuore Morgagni. Es una solución práctica para quienes deben organizar una visita médica, un ingreso o una estancia hospitalaria y buscan un alojamiento cercano, sin tener que gestionar desplazamientos en una ciudad desconocida.',
            'Los dos apartamentos, independientes y equipados con todas las comodidades, permiten descansar con tranquilidad entre una cita y otra, con la flexibilidad de una estancia breve o prolongada según las necesidades de cada uno.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    en: {
      metaTitle: 'Near Centro Cuore Morgagni',
      metaDescription: "Comfortable, quiet accommodation just minutes from Pedara's Centro Cuore Morgagni — ideal for a medical visit or to stay close to a family member.",
      title: 'Near Centro Cuore Morgagni',
      intro: "Comfortable, quiet accommodation just minutes from Pedara's Centro Cuore Morgagni — ideal for a medical visit or to stay close to a family member.",
      imageAlt: 'Near Centro Cuore Morgagni',
      body: [
        {
          heading: 'Near Centro Cuore Morgagni',
          paragraphs: [
            "Magma 610 is just a 5-minute drive and about a 15-minute walk from Centro Cuore Morgagni. It's a practical option for anyone organising a medical appointment, an admission or a hospital stay, who needs nearby accommodation without having to navigate an unfamiliar town.",
            'The two independent apartments, fully equipped for comfort, let you rest quietly between appointments, with the flexibility of a short or extended stay depending on your needs.',
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    fr: {
      metaTitle: 'Près du Centro Cuore Morgagni',
      metaDescription: "Hébergement confortable et tranquille à quelques minutes du Centro Cuore Morgagni de Pedara — idéal pour une visite médicale ou pour rester près d'un proche.",
      title: 'Près du Centro Cuore Morgagni',
      intro: "Hébergement confortable et tranquille à quelques minutes du Centro Cuore Morgagni de Pedara — idéal pour une visite médicale ou pour rester près d'un proche.",
      imageAlt: 'Près du Centro Cuore Morgagni',
      body: [
        {
          heading: 'Près du Centro Cuore Morgagni',
          paragraphs: [
            "Magma 610 se trouve à seulement 5 minutes en voiture et à environ 15 minutes à pied du Centro Cuore Morgagni. C'est une solution pratique pour qui doit organiser une visite médicale, une admission ou un séjour hospitalier et cherche un hébergement proche, sans avoir à gérer les déplacements dans une ville inconnue.",
            "Les deux appartements, indépendants et équipés de tout le confort, permettent de se reposer tranquillement entre deux rendez-vous, avec la flexibilité d'un séjour court ou prolongé selon les besoins.",
          ],
        },
      ],
    },
    // TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello
    de: {
      metaTitle: 'In der Nähe des Centro Cuore Morgagni',
      metaDescription: 'Komfortable, ruhige Unterkunft nur wenige Minuten vom Centro Cuore Morgagni in Pedara entfernt — ideal für einen Arzttermin oder um in der Nähe eines Angehörigen zu sein.',
      title: 'In der Nähe des Centro Cuore Morgagni',
      intro: 'Komfortable, ruhige Unterkunft nur wenige Minuten vom Centro Cuore Morgagni in Pedara entfernt — ideal für einen Arzttermin oder um in der Nähe eines Angehörigen zu sein.',
      imageAlt: 'In der Nähe des Centro Cuore Morgagni',
      body: [
        {
          heading: 'In der Nähe des Centro Cuore Morgagni',
          paragraphs: [
            'Magma 610 liegt nur 5 Autominuten und etwa 15 Gehminuten vom Centro Cuore Morgagni entfernt. Eine praktische Lösung für alle, die einen Arzttermin, eine Aufnahme oder einen Krankenhausaufenthalt organisieren müssen und eine nahegelegene Unterkunft suchen, ohne sich in einer fremden Stadt zurechtfinden zu müssen.',
            'Die beiden unabhängigen, komplett ausgestatteten Apartments bieten Ruhe zwischen den Terminen, mit der Flexibilität eines kurzen oder längeren Aufenthalts je nach Bedarf.',
          ],
        },
      ],
    },
  },
};
