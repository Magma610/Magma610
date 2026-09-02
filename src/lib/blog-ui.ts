import type { Locale } from './blog';

export const BLOG_UI: Record<Locale, {
  eyebrow: string;
  title: string;
  lead: string;
  backToBlog: string;
  dateLocale: string;
}> = {
  it: {
    eyebrow: 'Dal blog',
    title: 'Storie e itinerari dal versante sud',
    lead: "Consigli pratici su escursioni, cantine e punti d'interesse, aggiornati ogni settimana.",
    backToBlog: '← Tutti gli articoli',
    dateLocale: 'it-IT',
  },
  es: {
    eyebrow: 'Del blog',
    title: 'Historias e itinerarios de la vertiente sur',
    lead: 'Consejos prácticos sobre excursiones, bodegas y lugares de interés, actualizados cada semana.',
    backToBlog: '← Todos los artículos',
    dateLocale: 'es-ES',
  },
  en: {
    eyebrow: 'From the blog',
    title: 'Stories and itineraries from the south side',
    lead: 'Practical tips on hikes, wineries and points of interest, updated every week.',
    backToBlog: '← All articles',
    dateLocale: 'en-GB',
  },
  fr: {
    eyebrow: 'Sur le blog',
    title: 'Histoires et itinéraires du versant sud',
    lead: "Conseils pratiques sur les randonnées, les caves et les points d'intérêt, mis à jour chaque semaine.",
    backToBlog: '← Tous les articles',
    dateLocale: 'fr-FR',
  },
  de: {
    eyebrow: 'Aus dem Blog',
    title: 'Geschichten und Routen von der Südflanke',
    lead: 'Praktische Tipps zu Wanderungen, Weingütern und Sehenswürdigkeiten, jede Woche aktualisiert.',
    backToBlog: '← Alle Artikel',
    dateLocale: 'de-DE',
  },
};
