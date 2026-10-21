import { ImageResponse } from "next/og";
import { getDictionary, coerceLang } from "@/data/dictionaries";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = coerceLang(rawLang);
  const t = getDictionary(lang);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 700, color: "#0a0a0a" }}>
            {t.hero.namePrefix}
            {t.hero.name}
          </div>
          <div style={{ fontSize: 28, color: "#8224e3", marginTop: 8 }}>{t.hero.role}</div>
          <div style={{ fontSize: 20, color: "#6b7280", marginTop: 16, maxWidth: 800 }}>
            {t.meta.description}
          </div>
        </div>
      </div>
    ),
    size
  );
}
