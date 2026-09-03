/**
 * Golden Hour — design tokens mirrored from globals.css for use anywhere
 * CSS custom properties aren't reachable directly (e.g. canvas/OG image
 * generation, chart libraries, inline SVG fills).
 *
 * Light theme: white base with golden-hour amber + terracotta accents.
 * Dark theme: deep ink base with brighter gold + warm-orange accents.
 */
export const theme = {
  light: {
    bg: "#FFFFFF",
    bgSoft: "#FBF1DA",
    surface: "#FFFDF8",
    ink: "#17130D",
    inkSoft: "#5B5140",
    accent: "#C9891E",
    accentWarm: "#C4461A",
    accentInk: "#FFFFFF",
    line: "rgba(23,19,13,0.12)",
  },
  dark: {
    bg: "#14110B",
    bgSoft: "#1D1811",
    surface: "#201A12",
    ink: "#F4EEDE",
    inkSoft: "#C9BEA4",
    accent: "#E8B94F",
    accentWarm: "#E37A44",
    accentInk: "#17130A",
    line: "rgba(244,238,222,0.14)",
  },
  font: {
    display: "Archivo",
    body: "Inter",
    mono: "JetBrains Mono",
  },
} as const;

export type ThemeMode = keyof typeof theme;
