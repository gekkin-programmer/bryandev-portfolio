export const LANGUAGES = ['en', 'fr'] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = 'en';

export const LANGUAGE_LABELS: Record<Lang, string> = {
  en: 'English',
  fr: 'Français',
};

export const STORAGE_KEY = 'portfolio-lang';

export function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'fr';
}

/** Normalize any input (URL param, storage, navigator) to a supported Lang. */
export function coerceLang(value: unknown, fallback: Lang = DEFAULT_LANG): Lang {
  if (isLang(value)) return value;
  if (typeof value === 'string') {
    const lower = value.toLowerCase();
    if (lower.startsWith('fr')) return 'fr';
    if (lower.startsWith('en')) return 'en';
  }
  return fallback;
}
