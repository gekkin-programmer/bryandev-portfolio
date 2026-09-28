import en from './en.json';
import fr from './fr.json';
import { DEFAULT_LANG, type Lang } from './config';

const DICTS = { en, fr } as const;
export type Dict = typeof en;

/** Get the dictionary for a lang. Falls back to default. Zero-runtime cost, SSG-friendly. */
export function getDict(lang: Lang): Dict {
  return DICTS[lang] ?? DICTS[DEFAULT_LANG];
}

/** Build a localized URL: /en/... or /fr/... */
export function localizedUrl(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  // Avoid double prefix if path already contains /en or /fr
  if (clean === '/' || clean === '') return `/${lang}/`;
  if (clean.startsWith('/en/') || clean.startsWith('/fr/')) {
    return `/${lang}${clean.slice(3)}`;
  }
  if (clean === '/en' || clean === '/fr') return `/${lang}/`;
  return `/${lang}${clean}`;
}

/** Swap the lang prefix of the current pathname (used by the switcher). */
export function swapLangInPath(pathname: string, target: Lang): string {
  if (pathname.startsWith('/en/') || pathname.startsWith('/fr/')) {
    return `/${target}${pathname.slice(3)}`;
  }
  if (pathname === '/en' || pathname === '/fr') return `/${target}/`;
  if (pathname === '/') return `/${target}/`;
  return `/${target}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}
