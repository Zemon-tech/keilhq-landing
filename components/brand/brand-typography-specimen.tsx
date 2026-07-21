"use client";

import React from "react";

export function BrandTypographySpecimen() {
  return (
    <div className="space-y-16 py-6">
      {/* 3-Column Header Meta Row matching Perplexity design guide screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-sm font-sans border-t border-border/80 pt-8">
        <div className="md:col-span-4 font-semibold text-foreground text-base sm:text-lg">
          Typography Architecture
        </div>
        <div className="md:col-span-8 text-muted-foreground leading-relaxed max-w-2xl">
          Our typography is both easily legible and deeply considered, leading with a geometric font family crafted with history and deep design sensibilities. Words deserve space; we never squeeze type.
        </div>
      </div>

      {/* Large Lead Statement (Matching Perplexity layout) */}
      <div className="max-w-[1100px] pt-2">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-foreground font-display">
          Our typography leads with geometric warmth in headlines and neutral utility across product UI.
        </h2>
      </div>

      {/* Primary Brand Typeface — DM Sans */}
      <div className="space-y-10 border-t border-border/80 pt-8">
        {/* 3-Column Header Meta Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-sm font-sans">
          <div className="md:col-span-4 font-semibold text-foreground text-base sm:text-lg">
            Primary Brand Typeface
          </div>
          <div className="md:col-span-4 text-muted-foreground leading-relaxed">
            Our core brand typeface is DM Sans, designed for geometric clarity.
          </div>
          <div className="md:col-span-4 text-muted-foreground leading-relaxed">
            It is a clean, strong typeface that's got nuance and personality when set in large headlines, but also easily legible at small sizes.
          </div>
        </div>

        {/* Large Character Alphabet Specimen Display */}
        <div className="space-y-4 font-display text-foreground pt-4 select-text">
          <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            DM Sans Variable
          </h3>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight uppercase break-words">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </div>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight lowercase break-words text-foreground/90">
            abcdefghijklmnopqrstuvwxyz
          </div>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight break-words text-foreground/80">
            0123456789
          </div>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight break-words text-muted-foreground">
            !@#$%^&amp;*()?+
          </div>
        </div>
      </div>

      {/* Secondary Typeface — Inter */}
      <div className="space-y-10 border-t border-border/80 pt-8">
        {/* 3-Column Header Meta Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-sm font-sans">
          <div className="md:col-span-4 font-semibold text-foreground text-base sm:text-lg">
            Secondary Typeface
          </div>
          <div className="md:col-span-4 text-muted-foreground leading-relaxed">
            Our secondary typeface is Inter, designed for dense functional interface legibility.
          </div>
          <div className="md:col-span-4 text-muted-foreground leading-relaxed">
            It adds a neutral, precise touch that contrasts nicely with the geometric character of DM Sans — bringing balance and quiet clarity to our product UI.
          </div>
        </div>

        {/* Large Character Alphabet Specimen Display */}
        <div className="space-y-4 font-sans text-foreground pt-4 select-text">
          <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Inter Variable
          </h3>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight uppercase break-words">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </div>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight lowercase break-words text-foreground/90">
            abcdefghijklmnopqrstuvwxyz
          </div>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight break-words text-foreground/80">
            0123456789
          </div>
          <div className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight break-words text-muted-foreground">
            !@#$%^&amp;*()?+
          </div>
        </div>
      </div>
    </div>
  );
}
