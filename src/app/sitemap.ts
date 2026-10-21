import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { LANGUAGES } from "@/data/dictionaries/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGUAGES.map((lang) => ({
    url: `${SITE.url}/${lang}/`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${SITE.url}/en/`,
        fr: `${SITE.url}/fr/`,
      },
    },
  }));
}
