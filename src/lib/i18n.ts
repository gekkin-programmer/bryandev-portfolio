import type { Lang } from "@/data/dictionaries/config";

/** Build a localized URL: /en/... or /fr/... */
export function localizedUrl(lang: Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/" || clean === "") return `/${lang}/`;
  if (clean.startsWith("/en/") || clean.startsWith("/fr/")) {
    return `/${lang}${clean.slice(3)}`;
  }
  if (clean === "/en" || clean === "/fr") return `/${lang}/`;
  return `/${lang}${clean}`;
}

/** Swap the lang prefix of the current pathname (used by the locale toggle). */
export function swapLangInPath(pathname: string, target: Lang): string {
  if (pathname.startsWith("/en/") || pathname.startsWith("/fr/")) {
    return `/${target}${pathname.slice(3)}`;
  }
  if (pathname === "/en" || pathname === "/fr") return `/${target}/`;
  if (pathname === "/") return `/${target}/`;
  return `/${target}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
