# Build Prompt — "KeilHQ" Work OS Landing Page

Build a modern, single-page marketing website for an all-in-one work operating system called **KeilHQ** ("The Operating System for Teams That Ship"). Match the design spec below exactly. Stack: **Next.js 16 + Tailwind CSS v4 + React 19**. Fully responsive, desktop-first. The project already exists — implement missing sections and refine existing ones without breaking what's already built.

---

## Global design system

**Typography**
- Display headings: `font-display` → `Instrument_Serif` (already configured). Weight `font-semibold`, tight tracking (`tracking-tight`), tight line-height (`leading-[1.1]` or `leading-none`).
- Body + UI: `font-sans` → system geometric sans. Muted body copy uses `text-muted-foreground`.
- Type scale: hero H1 `text-5xl sm:text-6xl lg:text-7xl`; section H2 `text-3xl sm:text-4xl lg:text-5xl`; feature H3 `text-xl sm:text-2xl`; body `text-base sm:text-lg`; small labels `text-[13px]`.

**Color tokens** (use CSS vars / Tailwind semantic classes — do not hardcode hex)
- `bg-background` — page background (white / dark-mode surface)
- `text-foreground` — primary text
- `text-muted-foreground` — subheads, body copy (~`#6B6B6B` equivalent warm gray)
- `border-border` — hairline borders (`#ECECEC` equiv.)
- `bg-secondary` / `bg-secondary/80` — subtle panel backgrounds
- Accent chips: use `bg-emerald-500/10 text-emerald-600` for success/live states; `bg-amber-500/10 text-amber-600` for warning/paused states
- Footer: `bg-zinc-950` / `bg-zinc-900` with white text, `text-zinc-400` muted links

**Buttons**
- Primary: `bg-primary text-primary-foreground font-medium rounded-sm h-10 px-6 hover:bg-primary/90 transition-all active:scale-95 text-[13px]`
- Secondary: outlined variant — `border border-border/80 bg-background text-foreground` same radius/size
- Nav CTA: small primary button, same shape as above

**Layout**
- Container: `max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12` — apply to every section wrapper
- Section vertical padding: `py-16 sm:py-24 lg:py-32`
- No horizontal rule separators between sections — rely on clean whitespace
- Cards: `bg-card border border-border/60 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)]`

**Theme**
- Full dark/light mode support via `next-themes` (already wired in)
- Motion: respect `prefers-reduced-motion`; use `framer-motion` (already installed) for fade-up on scroll, staggered card reveals, and spring transitions

---

## Existing component inventory

These are already implemented — match their patterns and do not duplicate:

| File | What it renders |
|---|---|
| `components/landing/navbar.tsx` | Sticky nav, transparent→solid on scroll, logo, center links, CTA |
| `components/landing/hero.tsx` | Centered H1, subhead, dual CTAs, floating persona chips |
| `components/landing/backed-by.tsx` | Logo cloud / trust bar of partner/brand logos |
| `components/landing/vision.tsx` | Two-tone headline + product UI mockup card |
| `components/landing/integration-cloud.tsx` | Radial chip layout of integration logos |
| `components/landing/features.tsx` | Sticky-scroll feature section with `StickyScrollSection[]` data |
| `components/landing/enterprise-capabilities.tsx` | Use-case / audience tabs section |
| `components/landing/blogs.tsx` | Blog post cards |
| `components/landing/loved-by.tsx` | Testimonials carousel |
| `components/landing/final-cta.tsx` | Final CTA band + illustration |
| `components/landing/footer.tsx` | Black footer with links and watermark |

---

## Section-by-section specification

### 1. Navbar (`components/landing/navbar.tsx`)
- Left: small abstract logo glyph + **"KeilHQ"** wordmark, `font-display font-semibold`
- Center: `Product` · `Pricing` · `Integration` · `Resources ▾` (dropdown caret for Resources)
- Right: primary small pill "Get started"
- Behavior: transparent background with no border → on scroll adds `bg-background border-b border-border/60 shadow-sm`

### 2. Hero (`components/landing/hero.tsx`)
- H1 two lines: **"The operating system for teams that ship"**
- Subhead (muted, ~2 lines): "Replace Slack, Asana, Notion, and your calendar chaos. KeilHQ is the one workspace where your team actually gets work done."
- Dual CTAs centered: primary "Start for free" + secondary "Watch demo"
- Floating persona chips near the buttons (decorative "collaborator" motif):
  - Blue chip: **"Martha"** (VP Marketing)
  - Amber chip: **"Sergio"** (Agency Owner)
  - Each with a small cursor/pointer icon, gentle float/bob animation via `framer-motion`
- Background: faint square grid-line texture (very light `border-border/30` 1px lines, ~48px cells)
- Below CTAs: full-width **product screenshot** of the KeilHQ dashboard (light + dark variants from `/public/mockups/`), soft drop shadow, rounded `rounded-2xl`, slight parallax on scroll

### 3. Logo cloud / Backed-by (`components/landing/backed-by.tsx`)
- Centered row of trust logos: companies from the testimonials — **Codecraft**, **Meta**, **Teamwork**, plus stat callouts
- Stats inline with logos: **"7,000+ teams"** · **"$40–$70/seat saved"** · **"10+ live integrations"**
- Small, grayscale, evenly spaced, no labels needed beyond logo

### 4. Vision — "Work at full clarity" (`components/landing/vision.tsx`)
- Left-aligned large `font-display` H2 with two-tone text:
  - Black segment: **"Work at full clarity. Stop guessing, start shipping —"**
  - Muted segment: **"KeilHQ connects your tasks, docs, chat, and calendar so nothing falls through the cracks."**
- Beside/below: an **app UI mockup card** — the Smart Dashboard panel showing the 3D wheel picker and live stat cards
- Adjacent small feature blurb with icon: `🧠 Clarity Engine — Every task ships with built-in Objectives and Success Criteria. Define done before work begins.`

### 5. Dashboard showcase (`components/landing/features.tsx`)
The `Features` component already accepts `StickyScrollSection[]` data defined in `app/page.tsx`. Each section has:
- Left: badge pill, `font-display` H3 title, muted description, optional CTA link
- Right: sticky visual (product screenshot `<MockupImage />` with light + dark src)

**Required data entries** (already partially defined in `page.tsx` — ensure all 10 are present and copy matches):

| id | Badge | Title | Description |
|---|---|---|---|
| `smart-dashboard` | Smart Dashboard | Know exactly what to work on right now | 3D wheel picker cycles through six live cards — Current Focus, Blockers, Needs Reply, Next Event, Quick Capture, Up Next — with urgent/reply/queued stats and a live clock. |
| `ai-command-center` | AI Command Center | Your AI assistant that knows your workspace | Built-in specialist agents for tasks, scheduling, GitHub, chat, and docs. Chain-of-thought execution shows how decisions are made using your real workspace data. |
| `tasks` | Task Management | Tasks with clarity built in — not bolted on | Objectives + Success Criteria on every task. Kanban, Gantt, and Calendar views. Hard dependency blocking — tasks cannot be marked done until their blockers resolve. |
| `motion` | Motion — Docs & Notes | Notion-quality docs, built right in | Block-based TipTap editor, real-time collaborative editing, subpage hierarchies, cover images, slash commands, and bidirectional Notion sync. |
| `calendar-integration` | Calendar & Scheduling | Two-way Google Calendar sync with smart scheduling | Tasks become calendar events automatically. AI scheduler finds free slots and schedules your backlog. Google Meet links generated automatically. |
| `chats` | Team Chat | Real-time chat that stays connected to your work | Group channels, DMs, emoji reactions via Socket.io. Threads link directly to tasks, docs, and calendar events. |
| `meeting-recorder` | Meeting Recorder | Stop losing what was decided in your last meeting | Record audio, auto-transcribe with speaker diarization via Sarvam AI (23 languages) or ElevenLabs. Turn decisions into tasks instantly. |
| `integrations` | Integrations | Connect your entire tech stack | Google Calendar, GitHub, Notion, Gmail, Drive, Meet, Docs, Sheets. GitHub agent creates issues from KeilHQ tasks automatically. |
| `notifications` | Smart Notifications | Stay in the loop without being overwhelmed | Real-time WebSocket notifications. Filter by type: Tasks, Mentions, Chat, System, Motion. Granular per-type controls with unread badges throughout. |
| `workspace` | Workspace & Teams | Orgs, spaces, and settings — built right in | Multi-tenant Org → Space hierarchy, sidebar nav, org switcher, onboarding wizard, full settings dialog, keyboard shortcuts ⌘K, and role-based permissions. |

### 6. Integration cloud (`components/landing/integration-cloud.tsx`)
- Two-column: left text (H2 **"Connects with your existing stack."**, muted sub **"KeilHQ plugs into the tools your team already uses — no migration required."**)
- Numbered 3-step list with circle badges:
  1. Explore 10+ supported integrations
  2. Securely link via OAuth in one click
  3. Sync tasks, docs, and events automatically
- Right: radial/orbital arrangement of ~8 circular white logo chips (soft shadow) — **Google Calendar, GitHub, Notion, Gmail, AWS S3, Sarvam AI, ElevenLabs, Google Drive** — around a central black pill button "Explore all integrations"
- Panel background: light gray `bg-secondary/50 rounded-2xl` with faint grid lines

### 7. Enterprise capabilities / Use cases (`components/landing/enterprise-capabilities.tsx`)
- Centered `font-display` H2: **"Built for every team that ships."**
- Muted subhead: "Whether you're a solo freelancer or a full-service agency, KeilHQ adapts to the way you work."
- Left sticky tab list (active tab underlined):
  - "For marketing teams" (active)
  - "For startups"
  - "For agencies"
  - "For dev teams"
- Right scrolling content = stacked feature rows per audience, each with bold H3 + muted para + floating UI mockup:

  **Marketing teams:**
  - "Stop manually pulling reports across platforms." → card showing task list with Budget Alert, Top Channel, Meta Ads status rows
  - "Let AI surface what's actually moving the needle." → AI chat panel card

  **Startups:**
  - "Move fast without breaking communication." → Kanban board card
  - "From idea to shipped — in one workspace." → Gantt timeline card

  **Agencies:**
  - "One space per client. Full visibility across all of them." → Org → Space hierarchy card
  - "Client-ready shareable links — no login required." → public share link card

  **Dev teams:**
  - "Connect commits to tasks without leaving your workflow." → GitHub integration card
  - "Dependency blocking that actually means something." → blocked task state card

### 8. Testimonials (`components/landing/loved-by.tsx`)
- Centered `font-display` H2: **"Loved by teams worldwide."**
- Muted 2-line subhead: "From solo freelancers to 50-person agencies — KeilHQ replaces the stack they were paying too much for."
- Featured testimonial card:
  - Left: B&W professional portrait (use `/public/testimonials/` assets)
  - Right: logo or company name, large pull-quote, attribution
  - Quote: *"KeilHQ is by far the best agency tool I have ever used."* — **Martha Punla**, VP Marketing, Meta
- Carousel of 3 additional B&W portrait thumbnails, clickable to switch:
  - *"From client onboarding to getting paid, this just works — clean, fast, and beautifully built."* — **Leah Daniel**, Design Ops Lead, Teamwork
  - *"The AI actually knows what I'm working on. I stopped using 4 other tools the first week."* — **Emily Chen**, Creative Director
  - *"Hours saved every month, just from having everything in one place."* — **David Kim**, Freelance Designer

### 9. Final CTA + Footer

**Final CTA (`components/landing/final-cta.tsx`):**
- White CTA band, H2 `font-display`: **"Your clearest work starts here."**
- Sub: "Set up in minutes. See results from day one."
- Dual buttons: primary "Start for free" + secondary "Book a walkthrough"
- Decorative illustration right/behind: two people at a desk working — editorial line-art or abstract illustration style (consistent with KeilHQ's clean, editorial aesthetic — not painted watercolor)

**Footer (`components/landing/footer.tsx`):**
- Background: `bg-zinc-950` white text
- Logo + tagline: "The operating system for teams that ship."
- Social icons (X, LinkedIn, YouTube, GitHub) as round dark chips
- Four link columns:
  - **Platform**: Home · Product · Integration · Pricing · Demo
  - **Solutions**: Agencies · Startups · Dev Teams · Freelancers
  - **Resources**: Blog · Changelog · Support · FAQ
  - **Legal**: Terms of Service · Privacy Policy
- Large watermark at the bottom (already in `UI_GUIDE.md`):
  ```tsx
  <span className="font-display text-[clamp(5rem,15vw,14rem)] font-semibold tracking-tight leading-none text-zinc-800/20 select-none pointer-events-none">
    KeilHQ
  </span>
  ```

---

## Motion / interaction notes
- Fade-up on scroll for section headers and cards — use `framer-motion` `whileInView` with `viewport={{ once: true }}`
- Hero persona chips: gentle `y` float animation, infinite loop, alternating phase
- Nav: `bg-background/95 backdrop-blur-sm border-b border-border/60` on scroll (use scroll event listener + state)
- Card hover: `hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`
- Integration logos: `hover:scale-105 transition-transform`
- All transitions respect `prefers-reduced-motion` — wrap motion configs with the `useReducedMotion` Framer hook

---

## Asset guidance
- Product mockups: live React components where possible; otherwise use `/public/mockups/light/*.png` and `/public/mockups/dark/*.png`
- Every `<MockupImage>` must render both light and dark variants using `dark:hidden` / `hidden dark:block`
- Portraits: black-and-white professional style photos at `/public/testimonials/`
- Illustrations: clean editorial line-art or abstract geometric style — **not** painted watercolor, not flat vector clip-art. Consistent with the "editorial sophistication" brand principle in `PRODUCT.md`
- Icons: `lucide-react` (already installed) — do not introduce a second icon library

---

## Code conventions
- **Stack**: Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript strict
- **Read `node_modules/next/dist/docs/` before writing any Next.js-specific code** — APIs may differ from training data (see `AGENTS.md`)
- Components: named exports, `"use client"` only where interactivity is needed
- File structure: `components/landing/<section>.tsx` for landing sections, `components/ui/<component>.tsx` for primitives
- Class ordering: layout → spacing → typography → color → border → shadow → animation
- Utility: `cn()` from `lib/utils` for conditional class merging (already set up)
- No inline styles unless strictly necessary (e.g., dynamic CSS custom properties)
- Accessibility: `aria-label` on icon-only buttons, `aria-current` on active nav links, focus-visible ring on all interactive elements, `prefers-reduced-motion` respected
- Contrast ratio ≥ 4.5:1 for all body copy

---

## What NOT to do
- No saturated blue-purple "AI gradient" backgrounds or glowing blob decorations
- No generic 3-column feature grids with stock icons
- No loud animations or decorative text overlays
- No `glassmorphism` / `backdrop-blur` on nav panels or dropdown menus — use solid `bg-background` (see `UI_GUIDE.md`)
- No `<hr>` or `border-b` separators between sections
- Do not replace `font-display` (`Instrument_Serif`) headings with a different font
- Do not introduce new dependencies without checking `package.json` first
