import type { Locale } from './locales';

export const STRUTTURA: Record<Locale, {
  eyebrow: string;
  title: string;
  lead: string;
  commonAreasTitle: string;
  commonAreasText: string;
  apartmentsEyebrow: string;
  apartmentsTitle: string;
  apartmentsLead: string;
  trustTitle: string;
  trustPoints: string[];
}> = {
  it: {
    eyebrow: 'Magma 610 Bed and More',
    title: 'La struttura',
    lead: "Corte interna in pietra lavica, ambienti curati nei dettagli e l'ospitalità di una casa vera, non di un hotel — a Pedara, sul versante sud dell'Etna.",
    commonAreasTitle: 'Gli spazi comuni',
    commonAreasText: "Magma 610 nasce dalla ristrutturazione di un'abitazione storica in pietra lavica. I due appartamenti condividono una caratteristica corte esterna attrezzata, pensata per i momenti di relax tra un'escursione e l'altra — il punto d'incontro tra l'ospitalità di casa e la bellezza grezza della pietra vulcanica.",
    apartmentsEyebrow: 'Dove dormire',
    apartmentsTitle: 'Gli appartamenti',
    apartmentsLead: 'Due soluzioni indipendenti, ciascuna con ingresso, servizi e caratteristiche proprie. Scegli quella più adatta al tuo soggiorno e prenota in un click.',
    trustTitle: 'Perché scegliere Magma 610',
    trustPoints: [
      'Conduzione diretta: rispondiamo di persona, non un call center',
      "A due passi dall'Etna, dai sentieri e dalle cantine del territorio",
      'Corte esterna attrezzata condivisa tra gli ospiti',
    ],
  },
  es: {
    eyebrow: 'Magma 610 Bed and More',
    title: 'La casa',
    lead: 'Patio interior en piedra volcánica, espacios cuidados hasta el último detalle y la hospitalidad de una casa de verdad, no de un hotel — en Pedara, en la vertiente sur del Etna.',
    commonAreasTitle: 'Los espacios comunes',
    commonAreasText: 'Magma 610 nace de la restauración de una vivienda histórica en piedra volcánica. Los dos apartamentos comparten un característico patio exterior equipado, pensado para relajarse entre excursión y excursión — el punto de encuentro entre la hospitalidad de una casa y la belleza en bruto de la piedra volcánica.',
    apartmentsEyebrow: 'Dónde dormir',
    apartmentsTitle: 'Los apartamentos',
    apartmentsLead: 'Dos soluciones independientes, cada una con su propia entrada, servicios y características. Elige la que mejor se adapte a tu estancia y reserva en un clic.',
    trustTitle: 'Por qué elegir Magma 610',
    trustPoints: [
      'Gestión directa: respondemos en persona, no un call center',
      'A un paso del Etna, de los senderos y de las bodegas del territorio',
      'Patio exterior equipado compartido entre los huéspedes',
    ],
  },
  en: {
    eyebrow: 'Magma 610 Bed and More',
    title: 'The property',
    lead: 'A lava-stone inner courtyard, spaces cared for down to the last detail, and the hospitality of a real home, not a hotel — in Pedara, on Etna\u2019s southern slope.',
    commonAreasTitle: 'The common areas',
    commonAreasText: 'Magma 610 was born from the restoration of a historic lava-stone home. The two apartments share a distinctive furnished outdoor courtyard, designed for unwinding between one excursion and the next — where home-style hospitality meets the raw beauty of volcanic stone.',
    apartmentsEyebrow: 'Where to stay',
    apartmentsTitle: 'The apartments',
    apartmentsLead: 'Two independent options, each with its own entrance, amenities and character. Pick the one that suits your stay and book in one click.',
    trustTitle: 'Why choose Magma 610',
    trustPoints: [
      'Directly run: you deal with us in person, not a call centre',
      'Steps away from Etna, the trails and the local wineries',
      'Shared, furnished outdoor courtyard for guests',
    ],
  },
  fr: {
    eyebrow: 'Magma 610 Bed and More',
    title: 'La maison',
    lead: "Cour intérieure en pierre de lave, espaces soignés dans les moindres détails et l'hospitalité d'une vraie maison, pas d'un hôtel — à Pedara, sur le versant sud de l'Etna.",
    commonAreasTitle: 'Les espaces communs',
    commonAreasText: "Magma 610 est né de la restauration d'une maison historique en pierre de lave. Les deux appartements partagent une cour extérieure aménagée caractéristique, pensée pour se détendre entre deux excursions — le point de rencontre entre l'hospitalité d'une maison et la beauté brute de la pierre volcanique.",
    apartmentsEyebrow: 'Où dormir',
    apartmentsTitle: 'Les appartements',
    apartmentsLead: 'Deux solutions indépendantes, chacune avec sa propre entrée, ses services et son caractère. Choisissez celle qui convient le mieux à votre séjour et réservez en un clic.',
    trustTitle: 'Pourquoi choisir Magma 610',
    trustPoints: [
      "Gestion directe : nous répondons en personne, pas un centre d'appels",
      "À deux pas de l'Etna, des sentiers et des caves du territoire",
      'Cour extérieure aménagée, partagée entre les hôtes',
    ],
  },
  de: {
    eyebrow: 'Magma 610 Bed and More',
    title: 'Das Haus',
    lead: 'Innenhof aus Lavastein, bis ins Detail gepflegte Räume und die Gastfreundschaft eines echten Zuhauses, nicht eines Hotels — in Pedara, an der Südflanke des Ätna.',
    commonAreasTitle: 'Die Gemeinschaftsbereiche',
    commonAreasText: 'Magma 610 entstand aus der Restaurierung eines historischen Hauses aus Lavastein. Die beiden Apartments teilen sich einen charakteristischen, möblierten Außenhof — den perfekten Ort zum Entspannen zwischen zwei Ausflügen, wo Gastfreundschaft auf die raue Schönheit des vulkanischen Gesteins trifft.',
    apartmentsEyebrow: 'Übernachten',
    apartmentsTitle: 'Die Apartments',
    apartmentsLead: 'Zwei unabhängige Lösungen, jede mit eigenem Eingang, eigener Ausstattung und eigenem Charakter. Wählen Sie die passende für Ihren Aufenthalt und buchen Sie mit einem Klick.',
    trustTitle: 'Warum Magma 610 wählen',
    trustPoints: [
      'Direkt geführt: Sie sprechen persönlich mit uns, nicht mit einem Callcenter',
      'Nur wenige Schritte vom Ätna, den Wanderwegen und den Weingütern der Region entfernt',
      'Gemeinsamer, möblierter Außenhof für die Gäste',
    ],
  },
};
