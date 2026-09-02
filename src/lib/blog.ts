import type { CollectionEntry } from 'astro:content';

export const LOCALES = ['it', 'es', 'en', 'fr', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  it: 'Italiano',
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

export const DEFAULT_LOCALE: Locale = 'it';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// L'id di ogni entry, col loader "glob" su */*.md, è "lingua/slug"
// (es. "it/etna-vicino-di-casa"). Questa funzione separa i due pezzi.
export function parsePostId(id: string): { locale: Locale; slug: string } {
  const [locale, ...rest] = id.split('/');
  return { locale: locale as Locale, slug: rest.join('/') };
}

// Auto-pubblicazione: un post è visibile solo se la sua data è oggi o nel passato.
// NOTA: su un sito statico questo filtro si applica al momento della build —
// perché un post "vada online da solo" alla data giusta serve una build
// programmata (vedi .github/workflows/scheduled-rebuild.yml).
export function isPublished(post: CollectionEntry<'blog'>): boolean {
  return post.data.data.getTime() <= Date.now();
}

export function postsForLocale(
  posts: CollectionEntry<'blog'>[],
  locale: Locale
): CollectionEntry<'blog'>[] {
  return posts
    .filter((p) => parsePostId(p.id).locale === locale)
    .filter(isPublished)
    .sort((a, b) => b.data.data.valueOf() - a.data.data.valueOf());
}
