import Navbar from "@/components/navbar";
import { AgentationToolbar } from "@/components/agentation-toolbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getDictionary, LANGUAGES, coerceLang, type Lang } from "@/data/dictionaries";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = coerceLang(rawLang);
  const t = getDictionary(lang);
  const otherLang: Lang = lang === "en" ? "fr" : "en";

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t.meta.title,
      template: `%s | ${t.hero.name}`,
    },
    description: t.meta.description,
    alternates: {
      canonical: `/${lang}/`,
      languages: {
        en: "/en/",
        fr: "/fr/",
        "x-default": "/en/",
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `/${lang}/`,
      siteName: t.hero.name,
      locale: t.meta.locale,
      alternateLocale: getDictionary(otherLang).meta.locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    twitter: {
      title: t.meta.title,
      description: t.meta.description,
      card: "summary_large_image",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!LANGUAGES.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar lang={lang} t={t} />
          </TooltipProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "development" && <AgentationToolbar />}
      </body>
    </html>
  );
}
