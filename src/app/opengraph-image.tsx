import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

// ❌ Remplacé export const runtime = "edge"; par :
export const dynamic = "force-static";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0E14",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(124,111,255,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(76,223,232,0.25), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#4CDFE8",
            fontSize: 28,
            fontFamily: "monospace",
          }}
        >
          $ whoami
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            color: "#E8EDF4",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 34,
            color: "#8A94A6",
          }}
        >
          {siteConfig.role} — Cybersecurity Enthusiast
        </div>
      </div>
    ),
    { ...size }
  );
}