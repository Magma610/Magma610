export const LOCALES = ['it', 'es', 'en', 'fr', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'it';

export const LOCALE_LABELS: Record<Locale, string> = {
  it: 'Italiano',
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

// Emoji bandiera — nessuna dipendenza da immagini esterne.
export const LOCALE_FLAGS: Record<Locale, string> = {
  it: '🇮🇹',
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// Dato un pathname assoluto (es. "/en/la-struttura" o "/la-struttura"),
// restituisce { locale, path } dove "path" è la versione senza prefisso lingua
// (l'italiano, lingua di default, non ha prefisso).
export function splitLocaleFromPath(pathname: string): { locale: Locale; path: string } {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) {
    const locale = parts[0] as Locale;
    const path = '/' + parts.slice(1).join('/');
    return { locale, path: path === '/' ? '/' : path.replace(/\/$/, '') || '/' };
  }
  return { locale: DEFAULT_LOCALE, path: pathname.replace(/\/$/, '') || '/' };
}

// Costruisce l'URL per una lingua data uno stesso "path" (senza prefisso).
// L'italiano (default) resta senza prefisso: "/la-struttura".
// Le altre lingue vengono prefissate: "/en/la-struttura".
export function localizePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path;
  return locale === DEFAULT_LOCALE ? clean || '/' : `/${locale}${clean}`;
}
