import type { Locale } from './locales';

export type TerritorioSlug = 'trekking-etna' | 'cantine-etna' | 'gole-alcantara' | 'taormina' | 'catania-storica';

// Foto libere da diritti commerciali (licenza Unsplash), una per meta — condivisa tra le lingue.
export const TERRITORIO_IMAGES: Record<TerritorioSlug, string> = {
  'trekking-etna': 'https://images.unsplash.com/photo-1720210746040-c8cdca7ea391?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'cantine-etna': 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'gole-alcantara': 'https://images.unsplash.com/photo-1760527806015-e15aa5844836?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'taormina': 'https://images.unsplash.com/photo-1523365154888-8a758819b722?fm=jpg&q=80&w=1600&auto=format&fit=crop',
  'catania-storica': 'https://images.unsplash.com/photo-1584198686005-d9f5d63efa0e?fm=jpg&q=80&w=1600&auto=format&fit=crop',
};

interface TerritorioText {
  title: string;
  intro: string;
  body: string[];
}

export const TERRITORIO_CONTENT: Record<TerritorioSlug, Record<Locale, TerritorioText>> = {
  'trekking-etna': {
    it: {
      title: "Trekking sull'Etna",
      intro: 'Sentieri per tutti i livelli, dai crateri sommitali ai boschi di quota.',
      body: [
        "L'Etna offre percorsi per ogni tipo di escursionista: dalle passeggiate brevi tra i boschi di quota alle salite più impegnative verso i crateri sommitali. Il versante sud, dove si trova Magma 610, è uno dei punti di partenza più comodi per organizzare un'uscita.",
        'Consigliamo di partire presto al mattino, portare scarpe adatte e vestirsi a strati: la temperatura in quota può essere molto diversa da quella a valle, anche in piena estate.',
      ],
    },
    es: {
      title: 'Senderismo en el Etna',
      intro: 'Senderos para todos los niveles, desde los cráteres cumbre hasta los bosques de altura.',
      body: [
        'El Etna ofrece rutas para todo tipo de excursionista: desde paseos breves entre los bosques de altura hasta ascensos más exigentes hacia los cráteres cumbre. La vertiente sur, donde se encuentra Magma 610, es uno de los puntos de partida más cómodos para organizar una salida.',
        'Recomendamos salir temprano por la mañana, llevar calzado adecuado y vestir por capas: la temperatura en altura puede ser muy distinta a la del valle, incluso en pleno verano.',
      ],
    },
    en: {
      title: 'Hiking Mount Etna',
      intro: 'Trails for every level, from the summit craters to the high-altitude woods.',
      body: [
        'Etna offers routes for every kind of hiker: from short walks through high-altitude woods to more demanding climbs toward the summit craters. The south side, where Magma 610 is located, is one of the most convenient starting points for a hike.',
        'We recommend setting off early in the morning, wearing suitable footwear and dressing in layers: the temperature at altitude can be very different from the valley below, even in high summer.',
      ],
    },
    fr: {
      title: "Randonnée sur l'Etna",
      intro: 'Des sentiers pour tous les niveaux, des cratères sommitaux aux forêts d\u2019altitude.',
      body: [
        "L'Etna propose des itinéraires pour tous les types de randonneurs : des courtes promenades dans les forêts d'altitude aux ascensions plus exigeantes vers les cratères sommitaux. Le versant sud, où se trouve Magma 610, est l'un des points de départ les plus pratiques pour organiser une sortie.",
        "Nous conseillons de partir tôt le matin, de porter des chaussures adaptées et de s'habiller en couches : la température en altitude peut être très différente de celle de la vallée, même en plein été.",
      ],
    },
    de: {
      title: 'Wandern am Ätna',
      intro: 'Wege für jedes Niveau, von den Gipfelkratern bis zu den Wäldern in der Höhe.',
      body: [
        'Der Ätna bietet Routen für jeden Wandertyp: von kurzen Spaziergängen durch die höhergelegenen Wälder bis zu anspruchsvolleren Aufstiegen zu den Gipfelkratern. Die Südflanke, wo sich Magma 610 befindet, ist einer der bequemsten Ausgangspunkte für eine Tour.',
        'Wir empfehlen, früh morgens zu starten, geeignetes Schuhwerk zu tragen und sich in Schichten zu kleiden: Die Temperatur in der Höhe kann selbst im Hochsommer stark von der im Tal abweichen.',
      ],
    },
  },
  'cantine-etna': {
    it: {
      title: "Cantine dell'Etna",
      intro: 'Vigneti su terreno vulcanico e cantine storiche a pochi minuti da Pedara.',
      body: [
        "L'area attorno all'Etna è una delle zone vitivinicole più interessanti d'Italia: il terreno vulcanico dà ai vini locali un carattere unico. Molte cantine storiche organizzano visite e degustazioni tutto l'anno, spesso con vista sul vulcano.",
        'Prenotare in anticipo è consigliato, soprattutto nei mesi della vendemmia (settembre-ottobre), quando la richiesta è più alta.',
      ],
    },
    es: {
      title: 'Bodegas del Etna',
      intro: 'Viñedos sobre terreno volcánico y bodegas históricas a pocos minutos de Pedara.',
      body: [
        'La zona alrededor del Etna es una de las áreas vinícolas más interesantes de Italia: el terreno volcánico da a los vinos locales un carácter único. Muchas bodegas históricas organizan visitas y catas durante todo el año, a menudo con vistas al volcán.',
        'Se recomienda reservar con antelación, sobre todo en los meses de vendimia (septiembre-octubre), cuando la demanda es más alta.',
      ],
    },
    en: {
      title: 'Etna Wineries',
      intro: 'Vineyards on volcanic soil and historic wineries just minutes from Pedara.',
      body: [
        "The area around Etna is one of Italy's most interesting wine regions: volcanic soil gives local wines a unique character. Many historic wineries organise tours and tastings year-round, often with views of the volcano.",
        'Booking ahead is recommended, especially during harvest season (September–October), when demand is highest.',
      ],
    },
    fr: {
      title: "Caves de l'Etna",
      intro: "Vignobles sur sol volcanique et caves historiques à quelques minutes de Pedara.",
      body: [
        "La région autour de l'Etna est l'une des zones viticoles les plus intéressantes d'Italie : le sol volcanique confère aux vins locaux un caractère unique. De nombreuses caves historiques organisent des visites et dégustations toute l'année, souvent avec vue sur le volcan.",
        "Il est conseillé de réserver à l'avance, surtout pendant les vendanges (septembre-octobre), période de forte demande.",
      ],
    },
    de: {
      title: 'Weingüter am Ätna',
      intro: 'Weinberge auf vulkanischem Boden und historische Weingüter nur wenige Minuten von Pedara entfernt.',
      body: [
        'Die Region rund um den Ätna gehört zu den interessantesten Weinbaugebieten Italiens: Der vulkanische Boden verleiht den lokalen Weinen einen einzigartigen Charakter. Viele historische Weingüter bieten das ganze Jahr über Führungen und Verkostungen an, oft mit Blick auf den Vulkan.',
        'Eine Reservierung im Voraus wird empfohlen, besonders während der Weinlese (September–Oktober), wenn die Nachfrage am höchsten ist.',
      ],
    },
  },
  'gole-alcantara': {
    it: {
      title: "Gole dell'Alcantara",
      intro: 'Un canyon di roccia basaltica scavato dal fiume Alcantara — una delle escursioni più suggestive della zona.',
      body: [
        "Le Gole dell'Alcantara sono un canyon naturale formatosi dal raffreddamento della lava a contatto con il fiume, che nei secoli ha scavato pareti di roccia basaltica alte fino a 50 metri. È una delle mete naturalistiche più visitate della Sicilia orientale.",
        "Si trovano a circa 40 minuti d'auto da Pedara. Consigliamo scarpe con buona aderenza e, se si vuole camminare nell'acqua, un cambio: l'acqua del fiume resta fredda anche in estate.",
      ],
    },
    es: {
      title: 'Gargantas del Alcantara',
      intro: 'Un cañón de roca basáltica excavado por el río Alcantara — una de las excursiones más impresionantes de la zona.',
      body: [
        'Las Gargantas del Alcantara son un cañón natural formado por el enfriamiento de la lava en contacto con el río, que a lo largo de los siglos ha excavado paredes de roca basáltica de hasta 50 metros de altura. Es uno de los destinos naturales más visitados del este de Sicilia.',
        'Se encuentran a unos 40 minutos en coche desde Pedara. Recomendamos calzado con buen agarre y, si se quiere caminar por el agua, una muda: el agua del río se mantiene fría incluso en verano.',
      ],
    },
    en: {
      title: 'Alcantara Gorges',
      intro: 'A basalt canyon carved by the Alcantara river — one of the most striking excursions in the area.',
      body: [
        'The Alcantara Gorges are a natural canyon formed as lava cooled on contact with the river, which over centuries carved basalt rock walls up to 50 metres high. It\u2019s one of the most visited natural sites in eastern Sicily.',
        'They\u2019re about a 40-minute drive from Pedara. We recommend footwear with good grip and, if you plan to wade in, a change of clothes: the river water stays cold even in summer.',
      ],
    },
    fr: {
      title: "Gorges de l'Alcantara",
      intro: "Un canyon de roche basaltique creusé par le fleuve Alcantara — l'une des excursions les plus impressionnantes de la région.",
      body: [
        "Les Gorges de l'Alcantara sont un canyon naturel formé par le refroidissement de la lave au contact du fleuve, qui a creusé au fil des siècles des parois de roche basaltique atteignant 50 mètres de haut. C'est l'un des sites naturels les plus visités de Sicile orientale.",
        "Elles se trouvent à environ 40 minutes en voiture de Pedara. Nous conseillons des chaussures adhérentes et, pour marcher dans l'eau, une tenue de rechange : l'eau du fleuve reste froide même en été.",
      ],
    },
    de: {
      title: 'Alcantara-Schlucht',
      intro: 'Eine Basaltschlucht, geformt vom Fluss Alcantara — einer der eindrucksvollsten Ausflüge der Region.',
      body: [
        'Die Alcantara-Schlucht ist eine natürliche Schlucht, die entstand, als Lava beim Kontakt mit dem Fluss erkaltete. Über Jahrhunderte formte der Fluss bis zu 50 Meter hohe Basaltwände. Sie ist eines der meistbesuchten Naturziele im Osten Siziliens.',
        'Sie liegt etwa 40 Autominuten von Pedara entfernt. Wir empfehlen Schuhe mit gutem Grip und, wer ins Wasser möchte, Wechselkleidung: Das Flusswasser bleibt auch im Sommer kalt.',
      ],
    },
  },
  taormina: {
    it: {
      title: 'Taormina',
      intro: "L'eleganza della costa ionica, tra il Teatro Greco e le calette di Isola Bella.",
      body: [
        "Taormina è una delle mete più celebri della Sicilia: il Teatro Greco, il centro storico affacciato sul mare e le calette di Isola Bella la rendono una tappa quasi obbligata per chi soggiorna sul versante sud dell'Etna.",
        "Si raggiunge in circa mezz'ora d'auto da Pedara. Nei mesi estivi consigliamo di arrivare presto per trovare parcheggio più facilmente ed evitare il caldo delle ore centrali.",
      ],
    },
    es: {
      title: 'Taormina',
      intro: 'La elegancia de la costa jónica, entre el Teatro Griego y las calas de Isola Bella.',
      body: [
        'Taormina es uno de los destinos más célebres de Sicilia: el Teatro Griego, el casco antiguo frente al mar y las calas de Isola Bella la convierten en una parada casi obligada para quien se aloja en la vertiente sur del Etna.',
        'Se llega en unos 30 minutos en coche desde Pedara. En los meses de verano recomendamos llegar temprano para encontrar aparcamiento con más facilidad y evitar el calor de las horas centrales.',
      ],
    },
    en: {
      title: 'Taormina',
      intro: "The elegance of the Ionian coast, between the Greek Theatre and Isola Bella's coves.",
      body: [
        "Taormina is one of Sicily's most famous destinations: the Greek Theatre, the seafront old town and Isola Bella's coves make it a near-essential stop for anyone staying on Etna's southern slope.",
        "It's about a 30-minute drive from Pedara. In summer months we recommend arriving early to find parking more easily and avoid the midday heat.",
      ],
    },
    fr: {
      title: 'Taormine',
      intro: "L'élégance de la côte ionienne, entre le Théâtre Grec et les criques d'Isola Bella.",
      body: [
        "Taormine est l'une des destinations les plus célèbres de Sicile : le Théâtre Grec, le centre historique face à la mer et les criques d'Isola Bella en font une étape presque incontournable pour qui séjourne sur le versant sud de l'Etna.",
        "On y accède en environ 30 minutes en voiture depuis Pedara. En été, nous conseillons d'arriver tôt pour trouver plus facilement une place de parking et éviter la chaleur des heures centrales.",
      ],
    },
    de: {
      title: 'Taormina',
      intro: 'Die Eleganz der ionischen Küste, zwischen dem Griechischen Theater und den Buchten von Isola Bella.',
      body: [
        'Taormina ist eines der berühmtesten Reiseziele Siziliens: Das Griechische Theater, die Altstadt am Meer und die Buchten von Isola Bella machen es zu einem nahezu obligatorischen Ausflugsziel für Gäste an der Südflanke des Ätna.',
        'Von Pedara aus ist es etwa 30 Autominuten entfernt. In den Sommermonaten empfehlen wir eine frühe Anreise, um leichter einen Parkplatz zu finden und die Mittagshitze zu vermeiden.',
      ],
    },
  },
  'catania-storica': {
    it: {
      title: 'Catania storica',
      intro: 'Il barocco siciliano, i mercati storici e il porto — a due passi da Magma 610.',
      body: [
        "Catania, patrimonio UNESCO per il suo centro barocco, è la città più vicina a Magma 610: piazza del Duomo, via Etnea e il mercato storico della Pescheria raccontano una città vivace, costruita — letteralmente — con la pietra lavica dell'Etna.",
        "Il centro si raggiunge in circa 20-25 minuti d'auto da Pedara. Consigliamo una visita al mattino presto per vivere il mercato della Pescheria nel pieno della sua attività.",
      ],
    },
    es: {
      title: 'Catania histórica',
      intro: 'El barroco siciliano, los mercados históricos y el puerto — a un paso de Magma 610.',
      body: [
        'Catania, Patrimonio de la Humanidad por su centro barroco, es la ciudad más cercana a Magma 610: la plaza del Duomo, la vía Etnea y el histórico mercado de la Pescheria cuentan la historia de una ciudad vibrante, construida —literalmente— con la piedra volcánica del Etna.',
        'El centro se alcanza en unos 20-25 minutos en coche desde Pedara. Recomendamos visitarlo a primera hora de la mañana para vivir el mercado de la Pescheria en pleno funcionamiento.',
      ],
    },
    en: {
      title: 'Historic Catania',
      intro: 'Sicilian baroque, historic markets and the harbour — just minutes from Magma 610.',
      body: [
        "Catania, a UNESCO World Heritage site for its baroque centre, is the closest city to Magma 610: Piazza del Duomo, Via Etnea and the historic Pescheria fish market tell the story of a lively city, built — quite literally — from Etna's lava stone.",
        "The city centre is about a 20–25 minute drive from Pedara. We recommend visiting early in the morning to catch the Pescheria market at its liveliest.",
      ],
    },
    fr: {
      title: 'Catane historique',
      intro: "Le baroque sicilien, les marchés historiques et le port — à deux pas de Magma 610.",
      body: [
        "Catane, classée au patrimoine mondial de l'UNESCO pour son centre baroque, est la ville la plus proche de Magma 610 : la piazza del Duomo, la via Etnea et le marché historique de la Pescheria racontent une ville animée, construite — au sens propre — avec la pierre de lave de l'Etna.",
        "Le centre se trouve à environ 20-25 minutes en voiture de Pedara. Nous conseillons une visite tôt le matin pour vivre le marché de la Pescheria en pleine activité.",
      ],
    },
    de: {
      title: 'Historisches Catania',
      intro: 'Sizilianischer Barock, historische Märkte und der Hafen — nur wenige Minuten von Magma 610 entfernt.',
      body: [
        'Catania, UNESCO-Weltkulturerbe für sein barockes Zentrum, ist die nächstgelegene Stadt zu Magma 610: Piazza del Duomo, Via Etnea und der historische Fischmarkt Pescheria erzählen von einer lebendigen Stadt, die buchstäblich aus dem Lavastein des Ätna erbaut wurde.',
        'Das Zentrum ist etwa 20–25 Autominuten von Pedara entfernt. Wir empfehlen einen frühen Besuch am Morgen, um den Pescheria-Markt in vollem Betrieb zu erleben.',
      ],
    },
  },
};
