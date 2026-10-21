export const LANGUAGES = ["en", "fr"] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = "en";
export const LANGUAGE_LABELS: Record<Lang, string> = {
  en: "English",
  fr: "Français",
};

export function isLang(value: string): value is Lang {
  return (LANGUAGES as readonly string[]).includes(value);
}

/** Normalize any input (URL param, cookie, Accept-Language header) down to a supported Lang. */
export function coerceLang(value: string | undefined | null, fallback: Lang = DEFAULT_LANG): Lang {
  if (!value) return fallback;
  const lower = value.toLowerCase();
  if (lower.startsWith("fr")) return "fr";
  if (lower.startsWith("en")) return "en";
  return fallback;
}
