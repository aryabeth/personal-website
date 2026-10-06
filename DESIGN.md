---
name: Aryabeth
description: Single-page portfolio for Arya Beta Widyatmika, Bali-based web developer.
colors:
  background: "oklch(1 0 0)"
  background-dark: "oklch(0.13 0.028 261.692)"
  foreground: "oklch(0.145 0 0)"
  foreground-dark: "oklch(0.985 0 0)"
  primary: "oklch(0.205 0 0)"
  primary-dark: "oklch(0.922 0 0)"
  secondary: "oklch(0.97 0 0)"
  secondary-dark: "oklch(0.269 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  muted-foreground-dark: "oklch(0.708 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  destructive-dark: "oklch(0.704 0.191 22.216)"
  border: "oklch(0.922 0 0)"
  border-dark: "oklch(1 0 0 / 10%)"
  ink: "oklch(0.278 0.033 256.848)"
  ink-dark: "oklch(0.928 0.006 264.531)"
  ink-strong-dark: "oklch(0.967 0.003 264.542)"
  slate-muted: "oklch(0.551 0.027 264.364)"
  slate-muted-dark: "oklch(0.707 0.022 261.325)"
  chip-ink: "oklch(0.446 0.03 256.802)"
  chip-ink-dark: "oklch(0.872 0.01 258.338)"
  hairline: "oklch(0.928 0.006 264.531)"
  hairline-dark: "oklch(0.278 0.033 256.848)"
  hairline-strong: "oklch(0.872 0.01 258.338)"
  hairline-strong-dark: "oklch(0.373 0.034 259.733)"
  outline-stroke: "oklch(0.707 0.022 261.325)"
  outline-stroke-dark: "oklch(0.446 0.03 256.802)"
  tile-fill: "oklch(0.985 0.002 247.839)"
  tile-fill-dark: "oklch(0.21 0.034 264.665)"
  grid-line: "oklch(0.929 0.013 255.508)"
  indigo-link: "oklch(0.511 0.262 276.966)"
  indigo-link-hover: "oklch(0.457 0.24 277.023)"
  indigo-link-dark: "oklch(0.673 0.182 276.935)"
  indigo-link-hover-dark: "oklch(0.785 0.115 274.713)"
  indigo-focus: "#6366f1"
  shiny-fill: "#000000"
  shiny-label: "#ffffff"
  shiny-inset: "#1a1818"
  shiny-accent: "#4f46e5"
  shiny-accent-soft: "#818cf8"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.11
  display-md:
    fontFamily: "Poppins, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 600
    lineHeight: 1
  role-serif:
    fontFamily: "Sorts Mill Goudy, monospace"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.33
  role-serif-md:
    fontFamily: "Sorts Mill Goudy, monospace"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.2
  section-title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
  section-title-md:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.56
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  body-prose:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.625rem"
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
  footer-display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "6rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.05em"
rounded:
  lg: "0.5rem"
  xl: "0.75rem"
  shiny: "32px"
  full: "9999px"
spacing:
  chip-gap: "0.375rem"
  grid-gap: "1rem"
  card-sm: "1.25rem"
  card: "1.5rem"
  stack: "1.5rem"
  section-gap: "2rem"
  section-top: "7rem"
  container: "56rem"
components:
  button-primary:
    backgroundColor: "{colors.shiny-fill}"
    textColor: "{colors.shiny-label}"
    rounded: "{rounded.shiny}"
    padding: "0.625rem 1.75rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.625rem 1.75rem"
  card:
    backgroundColor: "transparent"
    rounded: "{rounded.xl}"
    padding: "{spacing.card}"
  card-project:
    backgroundColor: "transparent"
    rounded: "{rounded.xl}"
    padding: "{spacing.card-sm}"
  icon-tile:
    backgroundColor: "{colors.tile-fill}"
    rounded: "{rounded.lg}"
    padding: "0.75rem"
  chip-stack:
    textColor: "{colors.chip-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.125rem 0.625rem"
  chip-skill:
    textColor: "{colors.chip-ink}"
    rounded: "{rounded.full}"
    padding: "0.375rem 1.25rem"
  link-live:
    textColor: "{colors.indigo-link}"
  link-live-hover:
    textColor: "{colors.indigo-link-hover}"
  nav-header:
    textColor: "{colors.slate-muted}"
    height: "3.5rem"
---

# Design System: Aryabeth

## Overview

**Creative North Star: "The Quiet Resume Sheet"**

The main column reads like a well-set CV on white paper: one centred 56rem column, a left-hand section label beside each block of content, hairline-bordered cards, and gray ink that steps between three tones. Almost everything is Poppins at small sizes (14px body), with one line of Sorts Mill Goudy serif under the name as the only typographic flourish. Colour is nearly absent; indigo appears in three places only (the resume button's sweeping edge, the "View live site" link, the theme switch focus ring).

Three elements break that quiet on purpose or by inheritance. The hero sits on a faded square-grid SVG that dissolves into the background through a radial mask. The resume button is a black pill with an animated conic "gleam" border. The theme switch is a skeuomorphic sun/moon toggle with clouds and stars. Below the contact table, the page then hands off to a third-party "cinematic footer" that runs a separate visual language: Plus Jakarta Sans at weight 900, a rotated marquee, an aurora glow, a 60px line grid, glass pills with blur and multi-layer shadows, magnetic GSAP hover, and a giant outlined wordmark. That footer is recorded here as it ships; it is not consistent with the rest of the page.

Light and dark themes are both first-class, switched by a `dark` class on `<html>` set before paint. Dark mode is a deep blue-black (the same value as Tailwind gray-950), not neutral black.

**Key Characteristics:**
- Single 56rem centred column; section label left, content right from md up.
- Flat main column: 1px hairline borders, 12px card corners, no shadows.
- Pills everywhere something is clickable or a tag: buttons, chips, footer links.
- Gray ink in three steps (strong / body / muted); indigo used sparingly.
- Poppins for nearly everything; one serif line; a third face only in the footer.
- Light and dark themes, both driven mostly by hardcoded Tailwind gray utilities.

## Colors

A near-monochrome cool-gray palette with a single indigo accent and an independent token layer that the main column mostly bypasses.

### Primary
- **Gleam Indigo** (`shiny-accent`, `indigo-link`): the only chromatic accent in the main column. Sweeps around the resume button border, colours the "View live site" link (lighter `indigo-link-dark` in dark mode, darker on hover), and as `indigo-focus` draws the theme switch focus outline.
- **Resume Black** (`shiny-fill` with `shiny-label` text and `shiny-inset` ring): the primary call to action's fill. It stays pure black in dark mode as well.

### Neutral
- **Body Graphite** (`ink`): default text colour set on `body` for light mode; also headings inside cards. Dark mode body uses `ink-dark`, card headings `ink-strong-dark`.
- **Slate Muted** (`slate-muted` / `slate-muted-dark`): secondary text, dates, company lines, bullet lists, nav links, contact values, hero stat line.
- **Chip Graphite** (`chip-ink` / `chip-ink-dark`): text inside stack and skill chips.
- **Hairline** (`hairline` / `hairline-dark`): card borders, icon-tile borders, image dividers, stack chip borders.
- **Hairline Strong** (`hairline-strong` / `hairline-strong-dark`): skill chip borders (one step darker than card hairlines).
- **Outline Stroke** (`outline-stroke` / `outline-stroke-dark`): the "Connect me" outline button border.
- **Tile Fill** (`tile-fill` / `tile-fill-dark`): background of the small icon tile in experience and education cards.
- **Grid Line** (`grid-line`, dark uses `hairline-dark`): stroke of the hero square-grid SVG.
- **Paper / Night** (`background` / `background-dark`): page background, the only main-column use of the token layer.

### Token layer (defined, mostly unused in the main column)
`foreground`, `primary`, `secondary`, `muted-foreground`, `destructive`, `border` and their dark counterparts are shadcn-style tokens in `globals.css`. In the shipped page they are consumed almost only by the footer (aurora, pills, marquee, heart). `destructive` appears only as the footer heart colour.

### Named Rules
**The Three-Grays Rule.** Text uses three steps: strong (`ink`, card titles and labels in `dt`), body, and muted (`slate-muted`). New text picks one of these three rather than a new gray.

**The Scarce Indigo Rule.** Indigo appears only on the primary CTA's gleam, outbound live-site links, and focus rings. It never fills a surface in the main column.

## Typography

**Display Font:** Poppins (with sans-serif), weights 400/500/600/700 loaded
**Accent Font:** Sorts Mill Goudy 400 (exposed as `--font-mono` / `font-mono`, with a `monospace` fallback)
**Footer Font:** Plus Jakarta Sans 300 to 900, imported by the footer component itself from Google Fonts

**Character:** A geometric sans set small and even, with one bookish serif line giving the hero a little warmth. The footer's heavy Plus Jakarta Sans is louder than anything else on the page.

### Hierarchy
- **Display** (600, 2.25rem, 3.75rem from md): the hero name only, centred.
- **Role Serif** (Sorts Mill Goudy 400, 1.5rem, 1.875rem from md): the "Web Developer" line under the name only.
- **Section Title** (500, 1.25rem centred on mobile; 1.125rem left-aligned from md): the left-column section label, max 10.5rem wide.
- **Title** (500, 1rem): card headings (project, job, degree).
- **Body** (400, 0.875rem): the base size set on `body`; everything not otherwise sized. About prose uses a looser 1.625rem line height.
- **Label** (400, 0.75rem stack chips; 13px skill chips and mobile nav).
- **Footer Display** (Plus Jakarta Sans 900, 3rem to 6rem, tracking -0.05em, gradient-clipped "metallic" fill): the footer heading only. The footer's giant wordmark is 15vw, weight 900, outlined.

### Named Rules
**The One Serif Line Rule.** Sorts Mill Goudy appears once, on the hero role line. It is not used for headings or body.

## Layout

One centred column, `max-w-4xl` (56rem), with 1rem side padding below md. The fixed header shares the same 56rem width.

Every section after the hero uses the same `Section` wrapper: 7rem top margin; on mobile the title stacks centred above the content, from md (768px) it becomes a two-column row with a 10.5rem title column and a 2rem gap. Content inside is a vertical stack of full-width cards (1.5rem gaps), a two-column card grid from sm (1rem gaps, projects), a wrapping chip cloud (1rem gaps, skills), or a plain two-column table (contact).

The hero is centred and stacked: 8rem top padding, 144px circular photo, name, serif role, a stat line (middot separators from sm, stacked below), two buttons side by side, and a row of 24px social icons 2.5rem below. The grid SVG (890 by 764) is absolutely positioned behind the hero, flush right, pulled up 5rem.

Breakpoints are Tailwind defaults; only `sm` (640px) and `md` (768px) are used. Header navigation wraps to a second centred row below sm.

The footer is a full-viewport "curtain": a 100vh clipped wrapper in flow with a fixed footer underneath, so it is revealed as the page scrolls off.

## Elevation & Depth

The main column is flat. Depth comes from 1px hairline borders, the translucent blurred header (white or gray-950 at 80% with `backdrop-blur-md` and a 70% hairline bottom border), and small hover lifts (2px upward translate on project cards and social icons). No card or button in the main column carries a box-shadow.

Two components carry their own depth: the theme switch (inset and drop shadows for a skeuomorphic pill, sun and moon) and the footer (shadow-2xl on the marquee band, layered glass shadows on pills, 80px-blurred aurora).

### Shadow Vocabulary
- **Footer glass pill** (`0 10px 30px -10px var(--pill-shadow), inset 0 1px 1px var(--pill-highlight), inset 0 -1px 2px var(--pill-inset-shadow)`): footer link pills only; deepens on hover.
- **Theme switch track** (`0em -0.062em 0.062em rgba(0,0,0,0.25), 0em 0.062em 0.125em rgba(255,255,255,0.94)` plus an inset pair): the toggle only.

### Named Rules
**The Flat Column Rule.** Inside the 56rem column, surfaces separate by hairline and spacing, never by shadow. Hover feedback is a 2px lift or a 70%-opacity gray wash.

## Shapes

Two radius families. Containers use gently rounded corners: 12px on cards, 8px on the icon tile. Anything interactive or tag-like is a full pill: the outline button, stack and skill chips, footer pills, and the resume button (32px, which reads as a pill at its height). The profile photo is a circle. The hero grid is made of hard-edged 63.8px squares. Project screenshots are cropped 16:9 and clipped by the card's rounded corners with a hairline divider beneath.

## Components

### Buttons
Two side-by-side pills in the hero, one loud and one quiet.
- **Shape:** full pill (32px radius on the shiny button, 9999px on the outline button).
- **Primary (Shiny "Resume"):** black fill, white 500-weight label, 0.625rem by 1.75rem padding, 0.875rem text, 1px transparent border painted by a conic gradient. At rest a short indigo arc sweeps the edge every 3s with a faint speckle and sheen.
- **Primary Hover / Focus:** the arc widens to 20%, its shine turns soft indigo, and an inner indigo glow breathes (0.8s `cubic-bezier(0.25, 1, 0.5, 1)`); the trailing arrow nudges 2px right. Pressed state drops 1px. All animation stops under `prefers-reduced-motion`.
- **Outline ("Connect me"):** transparent, 1px `outline-stroke` border, body text colour, same padding as primary. Hover adds a 70% `secondary`-like gray wash (gray-100 light, gray-800 dark).

### Chips
- **Stack chip:** 1px `hairline` border, `chip-ink` text, 0.75rem, 0.125rem by 0.625rem padding, pill. Static.
- **Skill chip:** 1px `hairline-strong` border, `chip-ink` text, 13px, 0.375rem by 1.25rem padding, pill, default cursor; hovers with the same 70% gray wash as the outline button even though it is not interactive.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** transparent over the page background.
- **Shadow Strategy:** none (see The Flat Column Rule).
- **Border:** 1px `hairline` (gray-200 light, gray-800 dark).
- **Internal Padding:** 1.5rem for experience and education cards; 1.25rem body under an optional 16:9 screenshot for project cards.
- **Experience / Education card:** header row with an 8px-radius icon tile (`tile-fill`, hairline border, 0.75rem padding, 22px Lucide icon or image inverted in dark mode), title and muted company line, dates pushed right; then a muted bullet list or paragraph 1.5rem below.
- **Project card:** title and muted year on one row, stack chips, optional "Built at" agency line, a definition list with strong `dt` labels ("My role:", "Team:") and muted values, and an optional "View live site" indigo link pinned to the bottom with an up-right arrow that nudges on hover. The whole card lifts 2px on hover over 300ms.

### Navigation
Fixed full-width header, 3.5rem tall from sm, translucent and blurred with a hairline bottom border. Left: "Aryabeth" wordmark, Poppins 600 uppercase 1rem. Right: four anchor links in `slate-muted` (13px mobile, 14px md) that darken to strong ink on hover, then the theme switch. Below sm the links wrap to a centred second row.

### Theme Switch (signature)
A 56 by 25px sun/moon toggle sized off `--toggle-size: 10px`: sky-blue track (`#3d7eae`) with clouds by day, navy (`#1d1f2c`) with stars by night; the yellow sun (`#ecca2f`) slides across and becomes a cratered gray moon (`#c4c9d1`). Springy `cubic-bezier(0, -0.02, 0.4, 1.25)` over 0.5s. State follows the `.dark` class, not `:checked`, so it is correct before hydration. Visually hidden checkbox keeps keyboard access; focus shows a 2px `indigo-focus` outline.

### Hero Grid Backdrop (signature)
An 890 by 764 SVG of outlined squares in `grid-line` (gray-800 stroke in dark), masked by a radial gradient that fades to `background` from 29% outward, placed behind the hero at the right edge.

### Cinematic Footer (third-party, divergent)
A full-viewport footer revealed under a clip-path curtain. Plus Jakarta Sans throughout. Layers: a breathing aurora mixed from `primary` and `secondary`, a 60px line grid at 3% foreground, a 15vw outlined "A R Y A B E T H" wordmark with GSAP scroll parallax, a marquee band rotated -2deg (uppercase, bold, 0.3em tracking, 40s loop), the "Let's build together" metallic heading, two large glass pills (Email, WhatsApp) and three small ones (GitHub, Resume, Contact) with magnetic GSAP hover, a copyright line, a "Crafted with" badge and a round back-to-top pill. It uses the token layer (`foreground`, `background`, `muted-foreground`, `border`, `destructive`) rather than gray utilities, and none of its animations check `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep new main-column content inside the `Section` wrapper: 56rem column, 7rem top margin, 10.5rem title column from md.
- **Do** build containers as transparent cards with a 1px hairline border, 12px corners and 1.25 to 1.5rem padding.
- **Do** make buttons and tags full pills; pair a strong option with the outline pill (1px `outline-stroke`, 0.625rem by 1.75rem).
- **Do** stay inside the Three-Grays text scale and set both light and dark values for every colour.
- **Do** keep indigo to the CTA gleam, outbound links and focus rings.
- **Do** use 2px upward lifts or 70% gray washes for hover feedback in the main column.

### Don't:
- **Don't** add box-shadows to cards or buttons inside the main column; it is flat by construction.
- **Don't** use Sorts Mill Goudy for anything beyond the hero role line, and don't treat `font-mono` as a monospace face; it is the serif.
- **Don't** carry Plus Jakarta Sans, glass pills, aurora glows or magnetic hover into the main column; they belong to the footer as shipped.
- **Don't** fill surfaces with indigo or introduce a second accent hue.
