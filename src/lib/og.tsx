import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

/** Shared social-share card: navy field, title, and the highlighter stroke. */
export async function renderOg(title: string, kicker: string) {
  const logo = await readFile(join(process.cwd(), "public/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16193a",
          color: "white",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={56} height={56} alt="" />
          <span style={{ fontSize: 28, letterSpacing: 6, fontWeight: 600 }}>STELLASPIRE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 28, color: "#cdebf4", marginBottom: 18 }}>{kicker}</span>
          <span style={{ fontSize: title.length > 60 ? 54 : 64, lineHeight: 1.1, fontWeight: 700, maxWidth: 1000 }}>
            {title}
          </span>
          <div style={{ width: 220, height: 14, background: "#f6d55c", marginTop: 28, borderRadius: 3 }} />
        </div>
        <span style={{ fontSize: 24, color: "rgba(255,255,255,0.7)" }}>We take hiring personally. stellaspire.com</span>
      </div>
    ),
    ogSize,
  );
}
