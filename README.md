# Golden Hour - Sasni Lasadi Portfolio (Next.js 14 + TypeScript)

A personal portfolio built for Sasni Lasadi: warm "Golden Hour" theme (white +
amber/terracotta in light mode, deep ink + gold in dark mode), bold display
type, and a two-column hero built around a real portrait - every section as
its own page.

## Stack
Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, lucide-react,
Zod.

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Pages
- `/` — hero, skills marquee, stats, featured projects
- `/about` — bio, education, status
- `/projects`, `/projects/[slug]` — 4 real projects with GitHub links
- `/skills` — skill bars
- `/resume` — education timeline, achievements, CV download
- `/gallery` — photo grid
- `/contact` — contact form + real contact details

## Folder structure
```
src/
  app/
    (marketing)/        # all public-facing pages share this layout
      about/
      projects/[slug]/
      skills/
      resume/
      gallery/
      contact/
    api/contact/         # POST endpoint, Zod-validated
    layout.tsx            # fonts + root <html>
    globals.css            # design tokens (Golden Hour theme)
    sitemap.ts, robots.ts, opengraph-image.tsx
  components/
    layout/                # navbar, footer, theme toggle
    sections/               # hero, marquee, stats, skill bars, project grid
    ui/                       # button, badge — small reusable primitives
    contact-form.tsx
  content/                     # projects, skills, education, gallery — typed
                                # data, not hardcoded JSX. Add a project by
                                # editing src/content/projects.ts, nothing else.
  config/                        # site.ts (real bio/links), theme.ts (raw
                                  # tokens for non-CSS contexts like the OG image)
  lib/, types/
public/
  images/portrait.jpg, images/projects/*.svg, images/gallery/*.jpg
  resume.pdf
```

## Design system
All colors, fonts, and spacing tokens live as CSS variables in
`src/app/globals.css` (`:root` for light, `.dark` for dark) and are mirrored
in `src/config/theme.ts` for places that can't read CSS variables directly
(the dynamic OG image route).

- **Light theme:** white base (`#FFFFFF`) with golden-hour amber
  (`#C9891E`) and terracotta (`#C4461A`) accents.
- **Dark theme:** deep ink base (`#14110B`) with brighter gold
  (`#E8B94F`) and warm-orange accents.
- **Display type:** Archivo (bold, geometric — the headline typeface)
- **Body type:** Inter
- **Utility/mono:** JetBrains Mono (labels, eyebrows, metadata)
- **Signature motif:** a rotating "sunburst" ray pattern behind the hero
  portrait, and an inverted mono skills marquee.

## Content already filled in
- Real bio, university (IIT Sri Lanka / University of Westminster), and
  status in `src/config/site.ts`
- 4 real projects with GitHub links in `src/content/projects.ts`
- Real skill percentages in `src/content/skills.ts`
- Education timeline + Coderally 6.0 achievement in `src/content/education.ts`
- Real gallery photos in `src/content/gallery.ts` / `public/images/gallery/`
- Real portrait at `public/images/portrait.jpg`
- Real CV at `public/resume.pdf`

## Before you ship
1. Wire a real email provider into `src/app/api/contact/route.ts` (it
   currently just logs the submission) — e.g. with Resend:
   ```ts
   import { Resend } from "resend";
   const resend = new Resend(process.env.RESEND_API_KEY);
   await resend.emails.send({ from: "...", to: "...", subject, text: message });
   ```
2. Update the `metadataBase` URL in `src/app/layout.tsx` and `sitemap.ts`
   once you have a real domain.
3. Ensure network access at build time for Google Fonts (Archivo, Inter,
   JetBrains Mono).

## Scripts
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run typecheck` — TypeScript check with no emit
- `npm run lint` — ESLint
