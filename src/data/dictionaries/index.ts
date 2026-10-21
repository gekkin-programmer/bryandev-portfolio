import en from "./en";
import fr from "./fr";
import { DEFAULT_LANG, type Lang } from "./config";

const DICTS = { en, fr };

export type Dict = typeof en;

/** Get the dictionary for a lang. Falls back to the default. */
export function getDictionary(lang: Lang): Dict {
  return DICTS[lang] ?? DICTS[DEFAULT_LANG];
}

export * from "./config";
