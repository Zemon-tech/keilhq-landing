"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";

export function BrandColorPalette() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    toast.success(`Copied ${name} (${hex})`);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="space-y-24">
      {/* Palette 1 — Core Brand Materials */}
      <div className="space-y-12">
        {/* Header Meta Row matching Perplexity design guide screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-sm font-sans border-t border-border/80 pt-8">
          <div className="md:col-span-4 font-semibold text-foreground text-base sm:text-lg">
            Core Brand Materials
          </div>
          <div className="md:col-span-8 text-muted-foreground leading-relaxed max-w-2xl">
            Our core material palette includes five foundational tones: Warm Ink, Cotton Paper, Linen, Limestone, and Weathered Slate. These materials form 80–90% of any surface and should be the first ones you reach for in any execution.
          </div>
        </div>

        {/* Clean Natural Image 1 — NO border */}
        <div className="w-full overflow-hidden">
          <Image
            src="/brand/color-palete-1.png"
            alt="KeilHQ Material Palette — Foundation Colors"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Quiet Editorial Material List — No noisy AI swatches */}
        <div className="max-w-[850px] mx-auto space-y-6 text-sm sm:text-base text-muted-foreground font-sans leading-relaxed pt-2">
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-foreground font-display">
              Foundation Material Roles
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Warm Ink (#171514):</strong> Fountain pen ink. Primary text, primary buttons, and highest-contrast elements. Warm rather than clinical pure black.
                </div>
                <button
                  onClick={() => handleCopy("#171514", "Warm Ink")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#171514" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#171514</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Cotton Paper (#F7F4EE):</strong> Handmade cotton paper. App background and the canvas the whole product sits on. Open, calm, inviting work.
                </div>
                <button
                  onClick={() => handleCopy("#F7F4EE", "Cotton Paper")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#F7F4EE" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#F7F4EE</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Linen (#F1EEE8):</strong> Natural woven fabric. Surface backgrounds and cards. Structure without hardness.
                </div>
                <button
                  onClick={() => handleCopy("#F1EEE8", "Linen")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#F1EEE8" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#F1EEE8</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Limestone (#DDD7CE):</strong> Quarried stone. Hairline borders and dividers. Guides the eye without drawing attention.
                </div>
                <button
                  onClick={() => handleCopy("#DDD7CE", "Limestone")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#DDD7CE" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#DDD7CE</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Weathered Slate (#7E7A74):</strong> Aged stone inscriptions. Secondary text, captions, and helper timestamps. Present but quiet.
                </div>
                <button
                  onClick={() => handleCopy("#7E7A74", "Weathered Slate")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#7E7A74" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#7E7A74</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Palette 2 — AI & Contextual Accents */}
      <div className="space-y-12">
        {/* Header Meta Row matching Perplexity design guide screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-sm font-sans border-t border-border/80 pt-8">
          <div className="md:col-span-4 font-semibold text-foreground text-base sm:text-lg">
            AI &amp; Contextual Accents
          </div>
          <div className="md:col-span-8 text-muted-foreground leading-relaxed max-w-2xl">
            Accents are used sparingly to signal specific context. Oxidized Copper is reserved exclusively for AI states, functioning like still water that reflects clearly rather than glowing neon.
          </div>
        </div>

        {/* Clean Natural Image 2 — NO border */}
        <div className="w-full overflow-hidden">
          <Image
            src="/brand/color-palete-2.png"
            alt="KeilHQ Material Palette — AI & Accents"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Quiet Editorial Accent Details */}
        <div className="max-w-[850px] mx-auto space-y-6 text-sm sm:text-base text-muted-foreground font-sans leading-relaxed pt-2">
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-foreground font-display">
              Accent Application Rules
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-emerald-700 dark:text-emerald-400 font-medium">Oxidized Copper (#2B6F6A) — AI Only:</strong> Aged bronze / river water. Reserved exclusively for AI suggestions, thinking states, and generated content. Copper oxidizes slowly and becomes more valuable with age.
                </div>
                <button
                  onClick={() => handleCopy("#2B6F6A", "Oxidized Copper")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#2B6F6A" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#2B6F6A</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Monsoon Forest (#1D3429):</strong> Dense wet forest. Used for team and collaboration surfaces, progress states, and growth moments.
                </div>
                <button
                  onClick={() => handleCopy("#1D3429", "Monsoon Forest")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#1D3429" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#1D3429</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Jaipur Sandstone (#A98563):</strong> Quarried stone. Enterprise surfaces, trust-building moments, and archival content.
                </div>
                <button
                  onClick={() => handleCopy("#A98563", "Jaipur Sandstone")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#A98563" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#A98563</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Harvest Marigold (#C68A34):</strong> Fresh cut flowers. Discovery, optimism, and new idea milestones — used sparingly.
                </div>
                <button
                  onClick={() => handleCopy("#C68A34", "Harvest Marigold")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#C68A34" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#C68A34</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Indigo Dye (#31425E):</strong> Natural dyed textile. Knowledge bases, documentation, and scholarship surfaces.
                </div>
                <button
                  onClick={() => handleCopy("#31425E", "Indigo Dye")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#31425E" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#31425E</span>
                </button>
              </li>

              <li className="flex items-start justify-between gap-4 border-b border-border/50 pb-2.5">
                <div>
                  <strong className="text-foreground font-medium">Terracotta Clay (#744739):</strong> Fired imperfect clay. Human warmth, editorial content, and human-authored moments.
                </div>
                <button
                  onClick={() => handleCopy("#744739", "Terracotta Clay")}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground shrink-0 flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  {copiedHex === "#744739" ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                  <span>#744739</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
