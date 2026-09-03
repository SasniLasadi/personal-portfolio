import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { theme } from "@/config/theme";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: theme.light.bg,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: theme.light.inkSoft }}>{siteConfig.logotype}</div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 800,
            color: theme.light.ink,
            maxWidth: 900,
            lineHeight: 1.1,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            color: theme.light.accent,
          }}
        >
          {siteConfig.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
