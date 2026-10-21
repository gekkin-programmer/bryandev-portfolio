import { NextRequest, NextResponse } from "next/server";
import { LANGUAGES, DEFAULT_LANG, coerceLang } from "@/data/dictionaries/config";

function detectLang(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return DEFAULT_LANG;
  const preferred = acceptLanguage.split(",")[0]?.trim();
  return coerceLang(preferred, DEFAULT_LANG);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLangPrefix = LANGUAGES.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  );
  if (hasLangPrefix) return NextResponse.next();

  const lang = detectLang(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Skip all internal paths (_next), static files, and the metadata
     * route handlers that must stay at the true root (favicon/icon, OG
     * routes, robots.txt, sitemap.xml).
     */
    "/((?!_next|api|favicon.ico|icon.svg|robots.txt|sitemap.xml|.*\\.[\\w]+$).*)",
  ],
};
