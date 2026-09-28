# Portfolio (Astro + TS)

Fast, SEO-ready, bilingual (EN/FR) portfolio. Static output, per-section Figma workflow.

## Quick start

```powershell
npm install
npm run dev      # http://localhost:4321/ -> redirects to /en/ or /fr/
npm run build
npm run preview
```

Before deploy, set `site` in `astro.config.mjs` to your production URL (canonical + sitemap).

## Architecture

```
src/
  pages/
    index.astro          # root "/" — language redirect only
    [lang]/index.astro   # SSG: /en/ + /fr/ (add more pages as [lang]/about.astro etc.)
    404.astro
  layouts/BaseLayout.astro
  components/
    BaseHead.astro       # SEO, OG, hreflang, favicon, JSON-LD
    LangScript.astro     # language preference on load (inline, before paint)
    LanguageSwitcher.astro
    sections/            # ONE file per Figma section
      Navbar.astro / Hero.astro / Footer.astro / SectionStub.astro
  i18n/
    config.ts            # LANGUAGES, DEFAULT_LANG, STORAGE_KEY
    en.json / fr.json    # add keys side-by-side in both files
    utils.ts             # getDict(), localizedUrl(), swapLangInPath()
  styles/
    tokens.css           # Figma variables (colors, fonts, spacing)
    global.css           # reset + .container + .section
    section-template.css # how to paste Figma CSS
public/
  favicon.svg            # replace with Figma export (keep names)
  site.webmanifest / robots.txt
  # TODO from Figma: favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png, og-cover.jpg (1200x630)
```

## Language preference system (on load)

1. `localStorage('portfolio-lang')` if `en`/`fr`
2. else `navigator.language` (`fr-*` → `fr`, else `en`)
3. else default `en`

- `LangScript.astro` runs inline in `<head>` before paint: sets `<html lang>` (no flash) and redirects `/` → `/{lang}/`.
- `LanguageSwitcher` saves choice to localStorage and navigates to the same page in the other lang (`/en/#projects` → `/fr/#projects`).

## Translation

- Add a key to **both** `en.json` and `fr.json`, use via `t.section.key`.
- URLs always prefixed: `/en/...`, `/fr/...` via `localizedUrl(lang, '/#projects')`.
- SEO hreflang (`en`/`fr`/`x-default`) emitted in `BaseHead`.

## SEO / favicon / speed

- SEO: per-lang title/description, canonical, OG/Twitter, JSON-LD, `sitemap-index.xml` via `@astrojs/sitemap`.
- Favicon: SVG wired now; export PNGs + `og-cover.jpg` from Figma into `public/` (same filenames, no code change).
- Speed: `output: static`, zero framework JS by default, scoped CSS, `prefetch: viewport`, minified build. Add images via `astro:assets` (`<Image>`) with explicit width/height.

## Sharing Figma sections (workflow)

Send **one section at a time**:
1. Section name (e.g. `Hero`)
2. Figma CSS snippet + texts for EN + FR (if new strings, I'll add them to `en.json`/`fr.json`)
3. Any images/fonts

I'll paste CSS into that section's scoped `<style>` and tokens into `tokens.css` — no refactors needed.
