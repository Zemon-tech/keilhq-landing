# Linear Landing Page — Design Style Guide

Use this as a system prompt / style reference so an AI coding agent produces UI consistent with Linear's landing page aesthetic.

## 1. Overall Mood
Dark, quiet, confident, engineering-grade. Feels like a professional dev tool, not a marketing site. Minimal ornamentation — the product screenshots do the selling. Generous negative space. No gradients-as-decoration, no illustrations, no emoji, no drop shadows piled on. One accent color used sparingly for maximum contrast.

## 2. Color Palette

### Dark mode (default)
- **Background:** near-black, `#08090A` to `#0C0D0E` range — not pure `#000`.
- **Surface / cards:** slightly lifted dark gray, `#111214`–`#161718`, hairline `1px` borders at ~8–12% white opacity (`rgba(255,255,255,0.08)`).
- **Text primary:** off-white, `#F7F8F8` (never pure `#FFF`).
- **Text secondary/muted:** gray, `#8A8F98`–`#9CA0A6`.
- **Borders/dividers:** low-opacity white, never a solid gray line.

### Light mode
- **Background:** off-white, `#FBFBFB`–`#FFFFFF` (never a stark pure white against pure black text).
- **Surface / cards:** subtle gray, `#F4F5F6`–`#F7F7F8`, hairline `1px` borders at ~8–10% black opacity (`rgba(0,0,0,0.08)`).
- **Text primary:** near-black, `#0D0E10` (never pure `#000`).
- **Text secondary/muted:** gray, `#6B6F76`–`#8A8F98`.
- **Borders/dividers:** low-opacity black, never a solid gray line.

### Shared
- **Accent:** single saturated color per section used as a highlight, not a theme — in this design a bright **yellow-green (`#EEFF3B`-ish)** appears exactly once, on a testimonial card, as a jolt of contrast against the monochrome page. Same accent works on both modes — keep it rare, a punctuation mark not a repeated brand color.
- No skeuomorphism, no glassmorphism blur panels, in either mode.
- Component structure (radii, spacing, borders-over-shadows) stays identical between modes — only background/text/border colors invert.

## 3. Typography
- Single sans-serif family, tight/neutral grotesk (Linear uses an Inter-like custom face — substitute with **Inter, "Söhne", or system-ui** stack).
- Headlines: tight letter-spacing (slightly negative), medium-to-semibold weight, NOT heavy/black weight. Large sizes (40–56px on desktop for section H1s) but restrained — no oversized hero type.
- Body copy: small-to-medium (15–17px), muted gray color, short line length, low line-height looseness (1.4–1.5).
- Hierarchy is built with color (white vs gray) and size, rarely with weight jumps beyond regular/medium/semibold.
- All lowercase-feeling casual tone in headings ("Make product operations self-driving") — sentence case, not Title Case.

## 4. Layout & Grid
- Single centered column, max content width ~1100–1200px, huge vertical whitespace between sections (150–250px section padding).
- Alternating pattern: **section heading + 1-2 line description** (left-aligned, sometimes two-column with heading left / description right) followed by a **large product screenshot or UI mock** below it, edge-lit with a subtle border and soft glow, floating on the dark background — not framed in a browser chrome.
- Screenshots/mocks are the hero of every section — real (or realistic) app UI, dense with small text, dark-mode themed to match the page.
- Nav bar: fixed top, minimal — logo left, 5–6 text links center/right, single CTA button (dark pill or outline) far right. Transparent/blurred background over content.
- Footer: multi-column link list (Product, Resources, Company, etc.), small muted text, logo + copyright bottom-left, matches page background exactly (no visual separation block).

## 5. Components
- **Buttons:** small, pill or 6–8px rounded rect, tight padding (~10px×16px), primary = white/light fill with black text; secondary = transparent with subtle border. No large chunky CTAs.
- **Cards/panels:** `1px` translucent border, subtle inner shadow or none, `8–12px` border radius, dark fill barely lighter than page background.
- **Code/diff blocks:** monospace font, syntax-colored (red/green diff lines), dark panel, used literally as section imagery (e.g. "Review PRs" section shows a real diff view).
- **Logos row:** small grayscale/monochrome partner logos in a single muted row under the hero subtitle — understated social proof, not a bold logo wall.
- **Testimonial cards:** two side-by-side quote cards breaking the monochrome — one white/light card, one bright accent-colored card — small avatar + name/title beneath the quote.
- **Data viz:** minimal, dot/scatter or line charts in muted tones with one accent color for emphasis, no chart junk (no heavy gridlines/legends).

## 6. Motion & Interaction
- Subtle fade/slide-up on scroll reveal for each section (150–300ms, ease-out), not bouncy.
- Hover states: slight brightness lift or border opacity increase, no scale/skew gimmicks.
- No parallax, no auto-playing video backgrounds, no cursor-follow effects.

## 7. Copy/Tone
- Short, declarative, confident sentence-case headlines (4–7 words).
- One-line supporting description per section, factual not hypey ("Build and deploy AI agents that scale alongside your team" — not "Unleash the power of...").
- Section labels are simple nouns/verb phrases: "Define the product direction," "Move work forward across teams and agents."

## 8. Prompt Snippet (drop-in for a coding agent)
> Design in the style of Linear's marketing site, supporting both dark and light mode. Dark mode: near-black background (#0A0A0B), off-white text (#F7F8F8), muted gray secondary text (#8F949B), hairline translucent white borders (8–12% opacity). Light mode: off-white background (#FBFBFB), near-black text (#0D0E10), muted gray secondary text (#6B6F76), hairline translucent black borders (8–10% opacity). Both modes: 8–12px radii, Inter/system-ui grotesk font with tight tracking on headlines, sentence-case short copy, huge vertical whitespace between sections, real dense UI screenshots (not illustrations) as the visual anchor of each section, single small pill-shaped CTA buttons, one bright accent color used only once or twice on the whole page (e.g. a testimonial card), subtle scroll-reveal animation, no gradients/glassmorphism/emoji/heavy shadows. Only background/text/border colors invert between modes — spacing, radii, and component structure stay identical.

## 9. What to Avoid
- Purple/blue SaaS gradients, glassmorphism, oversized hero illustrations, emoji, rounded-full avatars everywhere, multi-color logo soup, drop-shadow-heavy cards, loud CTA buttons, Title Case headlines.
