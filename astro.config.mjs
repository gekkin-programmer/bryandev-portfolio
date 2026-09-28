import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Update `site` with your production URL before deploy.
// Needed for canonical URLs, sitemap.xml and SEO hreflang.
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
        },
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
  },
});
