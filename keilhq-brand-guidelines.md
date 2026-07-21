# KeilHQ — Brand & Design System

**Internal reference for designers, prompters, and agents working on KeilHQ product, marketing, and brand surfaces.**

> Read this before opening Figma, writing a prompt, or touching CSS. If a design decision can't be traced back to a principle in this document, it doesn't belong in KeilHQ.

---

## 1. The One-Sentence Brief

> **KeilHQ is not an AI productivity app. It is a place where ideas become clear.**

If a design, a color, an animation, or a line of copy doesn't serve *clarity*, it doesn't belong — no matter how impressive it looks in isolation.

---

## 2. Brand Idea: Human Clarity

KeilHQ's brand is not a color, a logo, or a UI style. The brand is an idea: **Human Clarity.** Everything else — palette, type, motion, photography — exists to express that idea. Nothing is chosen because it looks good in a mood board; it's chosen because it's a consequence of this idea.

### What clarity actually looks like

If you ask people to describe "clarity," nobody says *blue* or *glassmorphism.* People describe experiences:

Morning sunlight. A clean desk. A fresh notebook. Still water. Rain. Silence. Trees. Open sky. Paper. Ink.

That's the brand. Not a hue — a feeling of a room you can think clearly in.

### What KeilHQ should feel like

Walking into: an old library · a quiet monastery · an observatory · a design studio · an architect's office · a tea house · a courtyard after rain.

**The product should lower your heart rate. Not increase it.**

### What KeilHQ is reacting against

Most software stimulates: notifications, glow, badges, counters, alerts, gradients, glassmorphism. Everything screams for attention.

**KeilHQ whispers.** The interface should almost disappear — because the hero is never the software. The hero is the work the person is doing inside it.

### The philosophy behind it

Knowledge, done well, isn't fast — it's careful. KeilHQ treats the pursuit of understanding as something deliberate: quiet reading, patient thinking, work that's allowed to breathe. That patience is the emotional DNA behind every design decision in this document — not decoration borrowed from any one culture or era, just a consistent value: **calm over stimulation, substance over spectacle.**

### Brand archetype: Clarity

Not productivity. Not efficiency. Not "AI-first." **Clarity** — the sense that things are easier to understand after using KeilHQ than before.

### The emotional target

On open, the user should feel **Arrival** — not excitement. The feeling of opening a fresh notebook, walking into a library, putting on noise-cancelling headphones, sitting beside a lake. This is the emotional bar for onboarding, empty states, and first-load — every one of these moments should feel like arriving somewhere calm, not being sold something.

---

## 3. Materials, Not Colors

KeilHQ does not have a color palette in the SaaS sense. It has a **material system.** Every color traces back to something tangible in the physical world — something you could touch, not something picked from a color wheel.

Before shipping any visual decision, answer both:

1. **What material inspired this?** (Paper? Stone? Copper? Cotton? Clay?)
2. **What feeling should it create?** (Calm? Focus? Warmth? Curiosity? Trust? Reflection? Growth?)

If you can't answer both, it doesn't belong in KeilHQ.

A KeilHQ design should never look like it was designed on a computer. It should look like it was **found** — as if it already existed in a library, a workshop, or a well-made object, and someone simply translated it into software.

---

## 4. Color System (Final — Locked)

This is the **approved, final palette.** Do not introduce new hex values without updating this document. Every color below has a specific role and a specific meaning — none are interchangeable.

### 4.1 Foundation colors

These make up 80–90% of any surface. They are neutral, structural, and load-bearing — never treat them as decoration.

| Name | Hex | Material | Role | What it represents |
|---|---|---|---|---|
| **Warm Ink** | `#171514` | Fountain pen ink | Primary text, primary buttons, highest-contrast elements | Thought. Precision. The mind doing the work. Warm rather than pure black — never cold, never clinical. |
| **Cotton Paper** | `#F7F4EE` | Handmade cotton paper | App background, the "canvas" the whole product sits on | Calm. Openness. A blank page that invites work rather than intimidating the person starting it. |
| **Linen** | `#F1EEE8` | Natural woven fabric | Card and surface backgrounds, one step up from the base canvas | Structure without hardness. A surface to rest content on, gently distinguishable from the background. |
| **Limestone** | `#DDD7CE` | Quarried stone | Borders, dividers, subtle separation | Quiet structure. Guides the eye without drawing attention to itself — a border should never compete with content. |
| **Weathered Slate** | `#7E7A74` | Aged stone inscriptions | Secondary and muted text (captions, timestamps, helper text) | Quiet hierarchy. Present but never louder than the primary text it supports. |

### 4.2 Functional accent

| Name | Hex | Material | Role | What it represents |
|---|---|---|---|---|
| **Oxidized Copper** | `#2B6F6A` | Aged bronze / river water | **The only color used for AI.** Thinking states, generated content, AI suggestions | Intelligence that matures rather than glows. Copper oxidizes slowly and becomes more valuable with age — a deliberate rejection of the "neon AI" visual cliché. AI in KeilHQ should feel like still water: you don't notice it until it reflects something back clearly. |

### 4.3 Contextual accents

Each of these is a distinct "mood" — use **one per surface or campaign**, and never combine more than two on a single screen.

| Name | Hex | Material | Represents | Where it's used |
|---|---|---|---|---|
| **Monsoon Forest** | `#1D3429` | Dense, wet forest | Growth, depth, quiet aliveness | Team/collaboration surfaces, growth-oriented product areas, progress states |
| **Jaipur Sandstone** | `#A98563` | Historic quarried stone | Heritage, permanence, stability | Enterprise surfaces, trust-building moments, long-form/archival content |
| **Harvest Marigold** | `#C68A34` | Fresh cut flowers | Discovery, optimism, a new idea forming | Highlights, "new," onboarding milestones, moments of delight — used sparingly, never as a base color |
| **Indigo Dye** | `#31425E` | Natural dyed textile | Depth, scholarship, focus, night-time thinking | Knowledge bases, documentation, learning/reference surfaces |
| **Terracotta Clay** | `#744739` | Fired, imperfect clay | Humanity, warmth, the human behind the work | Editorial content, personal/profile surfaces, human-authored (non-AI) moments |

### 4.4 Usage rules

- Foundation colors are the default for everything. Reach for an accent only when the content genuinely calls for that specific meaning above — not for visual variety.
- **Oxidized Copper is reserved exclusively for AI.** Never use it decoratively, and never use any other color to represent AI states.
- Never introduce blue/purple/cyan gradients, neon, or glassmorphism — this is the visual language KeilHQ is deliberately avoiding.
- Gradients, if used at all, move between two materials that make sense together (e.g. Forest → Linen, Clay → Sandstone, Indigo → Ink) — they should read as a landscape at dusk, not a software effect.
- No more than 2 contextual accents on any single screen, plus the 5 foundation colors and, where relevant, Oxidized Copper for AI.

### 4.5 Contextual palettes (pick one "world" per surface)

| Surface | Palette |
|---|---|
| Core product / everyday workspace | Cotton Paper · Warm Ink · Limestone |
| AI states (thinking, generating, suggesting) | Cotton Paper · Warm Ink · Oxidized Copper |
| Knowledge base / docs / learning | Indigo Dye · Cotton Paper · Harvest Marigold |
| Teams / collaboration | Monsoon Forest · Terracotta Clay · Limestone |
| Enterprise / sales / trust surfaces | Warm Ink · Limestone · Jaipur Sandstone |
| Brand / marketing campaigns | Harvest Marigold · Terracotta Clay · Indigo Dye |

---

## 5. CSS Design Tokens

Use as the single source of truth. Do not hardcode hex values in components — reference tokens.

```css
:root {
  /* Foundation */
  --color-ink: #171514;         /* primary text, primary buttons */
  --color-paper: #F7F4EE;       /* app background */
  --color-linen: #F1EEE8;       /* card / surface background */
  --color-limestone: #DDD7CE;   /* borders, dividers */
  --color-slate: #7E7A74;       /* secondary / muted text */

  /* AI — exclusive use */
  --color-copper: #2B6F6A;      /* AI accent only — thinking, generating, suggestions */

  /* Contextual accents */
  --color-forest: #1D3429;      /* growth, teams, collaboration */
  --color-sandstone: #A98563;   /* heritage, enterprise warmth */
  --color-marigold: #C68A34;    /* discovery, highlights, optimism */
  --color-indigo: #31425E;      /* knowledge, docs, scholarship */
  --color-clay: #744739;        /* humanity, editorial warmth */

  /* Semantic aliases — map to foundation/context, never invent new colors here */
  --color-bg: var(--color-paper);
  --color-surface: var(--color-linen);
  --color-border: var(--color-limestone);
  --color-text-primary: var(--color-ink);
  --color-text-secondary: var(--color-slate);
  --color-accent-ai: var(--color-copper);

  /* Typography — see Section 6 */
  --font-marketing: "DM Sans", -apple-system, sans-serif;   /* landing site, marketing, campaigns */
  --font-app: "Inter", -apple-system, sans-serif;             /* product UI */
  --font-mono: "JetBrains Mono", ui-monospace, monospace;     /* code, data, timestamps */

  /* Radius — carved, not floating. Small, deliberate. */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;

  /* Motion — nothing starts or stops instantly */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-breathe: cubic-bezier(0.33, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-standard: 280ms;
  --duration-slow: 480ms;

  /* Elevation — restrained, never a "floating card" glow */
  --shadow-sm: 0 1px 2px rgba(23, 21, 20, 0.06);
  --shadow-md: 0 2px 8px rgba(23, 21, 20, 0.08);
}

/* Dark surfaces (rare — modals, focus mode) invert ink/paper, not saturation */
[data-theme="dark"] {
  --color-bg: #171514;
  --color-surface: #221F1D;
  --color-border: #3A3532;
  --color-text-primary: #F7F4EE;
  --color-text-secondary: #A9A39B;
}
```

---

## 6. Typography

Typography is half the brand. It must feel **large, confident, breathing — almost book-like.** Words deserve space; don't squeeze them.

### 6.1 Typefaces

| Context | Typeface | Why |
|---|---|---|
| **Marketing & landing site** | **DM Sans** | Geometric, warm, slightly rounded — carries the brand's calm confidence in headlines and campaign surfaces where personality matters most. |
| **Product / app UI** | **Inter** | Neutral, highly legible at small sizes, built for dense functional interfaces — disappears in service of the content, which is exactly the job of in-app type. |
| **Code / data / timestamps** | A monospace utility face (e.g. JetBrains Mono) | Utility only — never used for brand moments. |

**Rule of thumb:** if it's a page someone visits to be persuaded (landing, campaign, pricing) → DM Sans. If it's a screen someone works inside every day → Inter.

### 6.2 Type scale principles

- Line-height generous: 1.5–1.7 for body text, 1.1–1.25 for large display headlines.
- Letter-spacing close to default — no artificial "premium" tracking, no all-caps overuse.
- Headlines are allowed to be large and take up space. Don't compress a headline to fit a box — resize the box.
- Avoid dense, tightly-packed, dashboard-style typography in the app. If it starts to feel like a generic admin panel, it's wrong.
- Weight hierarchy over color hierarchy: prefer using font-weight and size to establish hierarchy before reaching for a new text color.

---

## 7. UI Principles

The marketing site is not allowed to be beautiful while the product looks generic. **The app is the brand — every button, card, and border is a brand surface, not just marketing pages.**

| Element | Avoid | KeilHQ approach |
|---|---|---|
| Buttons | Glow, gradient fill, heavy drop shadow | Feel **carved** — flat fill, thin inset border, quiet hover state |
| Cards | Float with heavy shadow | **Rest** on the surface — minimal shadow, grounded |
| Borders | Hard dividers everywhere | **Guide** the eye — used sparingly, only where structure is genuinely needed |
| Animation | Bouncy, springy, attention-seeking | **Breathes** — slow ease-in/ease-out, nothing instant (see `--ease-breathe`) |
| Loading states | Spinners, pulsing dots, shimmer | Still, quiet indicators — like water settling, not "loading" |
| Notifications / badges | Red dots, aggressive counters | Minimal, muted — information, not alarm |
| Empty states | Generic illustration + CTA | A calm invitation to act, written in plain language |

### Motion rules

- Nothing starts instantly. Nothing stops instantly.
- Reference natural motion: leaves, water, clouds, breathing — never springs or bounces.
- One orchestrated moment per flow beats many scattered micro-animations.
- Always respect `prefers-reduced-motion`.

---

## 8. Photography & Illustration

### Photography

Never stock photography. Never smiling-teams-around-laptops. Instead:

Morning light through windows · paper · wood · stone · quiet interiors · people thinking · people writing · **hands, not faces** · **objects, not products.**

### Illustration

**Avoid:** 3D blobs, decorative gradients, "AI robot" iconography, glassmorphism, neon line art.

**Use instead:** editorial line drawings, architectural sketches, scientific and botanical diagrams, astronomical charts, paper textures, old maps, blueprints — anything that feels like it belongs in a well-made book, not a tech pitch deck.

---

## 9. Motif System

KeilHQ's visual signature is **clarity itself**, expressed abstractly through geometry rather than any literal cultural iconography. Approved motif directions:

- Concentric circles — focus
- Expanding ripples — ideas spreading
- Grid intersections — knowledge connecting
- Paper folds — organization
- Tree rings — growth over time
- Topographic contour lines — depth, exploration
- Observatory-style geometry — discovery, perspective

Use these as subtle background texture, loading states, or section dividers — never as a loud centerpiece. They should be found in the margins, not the headline.

---

## 10. Sound (if/when applicable)

No beeps, pings, or notification chimes. Reference instead: paper, pencil, wind, water, a distant bell, keyboard, rain, silence. Sound should confirm an action quietly, never announce it.

---

## 11. Voice & Writing

- Write from the user's side of the screen — name things by what people control, not how the system works.
- Active voice, consistent verbs through a flow: a button that says "Save" produces a toast that says "Saved."
- No hype language ("supercharge," "unlock," "revolutionize," "10x"). KeilHQ doesn't sell excitement — it delivers clarity.
- Errors explain what happened and how to fix it, plainly, without apology or vagueness.
- Copy should read like it was edited, not generated: short sentences, real nouns, no filler.
- On the marketing site (DM Sans), copy can be more expansive and confident. In the app (Inter), copy should be as short as possible — the product should never talk more than it needs to.

---

## 12. AI Presentation Guidelines

This is the most commonly broken rule, so it gets its own section:

- **AI must never have a "loud" identity.** No stars, no sparkle icons, no purple/neon gradients, no shimmering text.
- The AI accent color is **Oxidized Copper (`#2B6F6A`) only** — no exceptions.
- AI states (thinking, generating) should feel like **still water** — a subtle shift, not a performance.
- Never anthropomorphize the AI with cutesy avatars, emoji faces, or "personality" flourishes that break the product's calm.

---

## 13. Hard "Never" List

Quick-reference before shipping any design:

- ❌ Blue/purple/cyan gradient as a primary accent
- ❌ Glassmorphism, frosted blur panels
- ❌ Neon glow on buttons or badges
- ❌ 3D blob illustrations
- ❌ Stock photography of people smiling at laptops
- ❌ Spinner/shimmer loading states
- ❌ Bouncy/springy easing curves
- ❌ New hex values outside the locked palette in Section 4
- ❌ Using Oxidized Copper for anything that isn't AI
- ❌ Hype copy ("supercharge," "10x," "revolutionize")
- ❌ Using DM Sans inside the product, or Inter on the marketing site

---

## 14. Quick Reference Card

```
Brand idea:        Human Clarity
Not:                Productivity / Efficiency / "AI-first"
Feels like:         A library. A quiet courtyard after rain.
Foundation:         Warm Ink (#171514) on Cotton Paper (#F7F4EE)
AI accent:          Oxidized Copper (#2B6F6A) — still water, never sparkle
Contextual accents: Forest / Sandstone / Marigold / Indigo / Clay — one per surface
Motion:             Breathes, never bounces
Typography:         DM Sans (marketing) · Inter (product) · Mono (code/data)
Photography:        Hands, paper, light — never stock
Motif:              Concentric circles, ripples, contour lines — margins, not headlines
```

---

*This document is the source of truth for KeilHQ's visual and verbal identity. Any deviation — new colors, new type pairings, new motion language — should be proposed as an update to this file, not introduced ad hoc in a single design.*