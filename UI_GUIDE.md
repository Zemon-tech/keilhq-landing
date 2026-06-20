# KielHQ Landing Page & UI Design System Guide

This guide establishes the layout, typography, and styling patterns used across KielHQ's landing page, solutions routes, and navigation components. Follow these specifications exactly when implementing new pages or editing existing components.

---

## 1. Grid & Layout Constraints

### Global Max-Width and Padding
All sections, page wrappers, and panels must share a consistent horizontal grid constraint to ensure items align perfectly as you scroll.
- **Container Class**: `max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12`
- **Use Case**: Apply this to the wrapper div of *every* layout section, hero panel, blog section, and footer container.

### Section Pacing & Height
To prevent the page from looking cramped and to maximize impact, follow these spacing rules:
- **No Line Separators**: Avoid visual separators or horizontal rules (`<hr>` or `border-b`) between sections. Rely purely on clean vertical whitespace.
- **Full Screen Sections**: Major components (such as Hero, Features, Vision, and Footer) should target `min-h-screen` or use substantial vertical padding:
  - Default section padding: `py-16 sm:py-24 lg:py-32`

---

## 2. Typography Rules

KielHQ combines a clean sans-serif body font with a premium display serif font for headings.

### Display Serif Headings
- **Font Family**: `font-display` (uses `Instrument_Serif`).
- **Font Weight**: Always use a heavier font weight than the browser default. Specify `font-medium` or `font-semibold` (since the custom serif font does not have a raw bold variant, browser-synthesized bolds must be explicitly requested).
- **Line Height / Tracking**: Use tight leading and tracking for headings to keep the typeface refined:
  - `tracking-tight leading-none`
  - `leading-[1.1] tracking-tight`
- **Example**:
  ```tsx
  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground">
    Know exactly what to work on right now
  </h1>
  ```

### Body & UI Sans-Serif
- **Font Family**: `font-sans` (default body text).
- **Line Heights**: For description copy, use `leading-relaxed` or `leading-normal`.
- **Sizes**:
  - Hero description/body: `text-base sm:text-lg text-muted-foreground`
  - Badges, small meta text: `text-[13px] font-medium` or `text-xs tracking-wider uppercase`

---

## 3. Standard Layout Components

When building new routes, align them with the unified 3-section layout established in the solutions pages:

### Phase 1: Centered Hero & Category Badge
- Centered top section.
- Small pill badge at the top (`bg-secondary/80 text-muted-foreground border border-border/50 rounded-full px-3 py-1 text-xs`).
- Heavy serif `h1` heading.
- Sub-role columns grid (3 columns) mapping target personas/capabilities.
- Single, premium CTA button with active scale state:
  ```tsx
  <button className="h-10 px-6 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all active:scale-95 text-[13px]">
    Get Started
  </button>
  ```

### Phase 2: Privacy & Security Grid
- A 2-column layout:
  - **Left**: Detailed specifications or contextual header.
  - **Right**: A 4-card grid (`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12`).
- Cards must use top-borders for separation instead of fully enclosed background cards:
  ```tsx
  <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
    <h3 className="font-display text-xl font-semibold text-foreground">Card Title</h3>
    <p className="text-[13px] text-muted-foreground leading-relaxed">Description text goes here.</p>
  </div>
  ```

### Phase 3: Work Integration Checklist
- A 2-column layout:
  - **Left**: General product messaging and context.
  - **Right**: A clean checklist stack with custom SVG checkmarks (avoid default list bullets):
    ```tsx
    <div className="flex items-start gap-3">
      <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p className="text-[13px] text-muted-foreground leading-relaxed">Checklist description text...</p>
    </div>
    ```

---

## 4. Navigation & Layout Polish

### Opaque Hover Panels (No Glassmorphism)
- Navigation hover panels and dropdowns must use solid backgrounds to guarantee readability. Do not use frosted glass (`backdrop-blur`).
- **Classes**: `bg-background border border-border shadow-lg`

### Bottom Watermark
- The footer includes a large visual branding watermark centered horizontally. It sits in the vertical flow below the certifications divider but above the copyright row.
- **Classes**:
  ```tsx
  <div className="w-full flex justify-center items-center overflow-hidden mt-12 sm:mt-16 mb-4 sm:mb-6 select-none z-0 relative">
    <span className="font-display text-[clamp(5rem,15vw,14rem)] font-semibold tracking-tight leading-none text-zinc-200 dark:text-zinc-800/80 select-none pointer-events-none">
      KielHQ
    </span>
  </div>
  ```

### Theme Colors for Large Watermarks
- **Light mode**: `text-zinc-200`
- **Dark mode**: `text-zinc-800/80` or `text-zinc-800/60`
- Make sure watermarks look elevated but blend softly into the background.
