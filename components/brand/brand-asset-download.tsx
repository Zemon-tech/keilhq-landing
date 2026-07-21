"use client";

import React, { useState } from "react";
import { Download, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export function BrandAssetDownload() {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const handleCopyPath = (path: string, label: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    toast.success(`Copied path for ${label}`);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Header Meta Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-sm font-sans border-t border-border/80 pt-8">
        <div className="md:col-span-4 font-semibold text-foreground text-base sm:text-lg">
          One Color Versions
        </div>
        <div className="md:col-span-8 text-muted-foreground leading-relaxed max-w-2xl">
          You'll often see our logo set in just one color. These are a good choice for many uses, such as busy layouts or external communications where you need something simple and strong.
        </div>
      </div>

      {/* 2 Side-by-Side Clean Logo Boxes — No borders around image cards, action buttons in bottom corner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Light Box with Ink Logo */}
        <div className="group relative rounded-xl bg-[#FFFFFF] p-12 sm:p-20 flex items-center justify-center min-h-[260px] sm:min-h-[340px] overflow-hidden transition-all shadow-xs">
          <img
            src="/keilhq.svg"
            alt="KeilHQ Logo — Ink Version"
            className="h-10 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Action Buttons in Bottom-Right Corner — Preserves central logo UI/UX */}
          <div className="absolute bottom-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
            <a
              href="/keilhq.svg"
              download="keilhq-logo-ink.svg"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 text-white font-sans text-xs font-medium hover:bg-zinc-800 transition-all active:scale-95 cursor-pointer shadow-xs"
              title="Download SVG"
            >
              <Download className="size-3.5" />
              <span>SVG</span>
            </a>
            <button
              onClick={() => handleCopyPath("/keilhq.svg", "Ink Logo")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 font-sans text-xs font-medium hover:bg-zinc-200 transition-all active:scale-95 cursor-pointer shadow-xs"
              title="Copy Asset Path"
            >
              {copiedPath === "/keilhq.svg" ? (
                <Check className="size-3.5 text-emerald-600" />
              ) : (
                <Copy className="size-3.5" />
              )}
              <span>{copiedPath === "/keilhq.svg" ? "Copied" : "Copy Path"}</span>
            </button>
          </div>
        </div>

        {/* Card 2: Dark Box with Paper Logo */}
        <div className="group relative rounded-xl bg-[#0C0D0E] p-12 sm:p-20 flex items-center justify-center min-h-[260px] sm:min-h-[340px] overflow-hidden transition-all shadow-xs">
          <img
            src="/keilhq-white.svg"
            alt="KeilHQ Logo — Inverted Version"
            className="h-10 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Action Buttons in Bottom-Right Corner — Preserves central logo UI/UX */}
          <div className="absolute bottom-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
            <a
              href="/keilhq-white.svg"
              download="keilhq-logo-white.svg"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-zinc-950 font-sans text-xs font-medium hover:bg-zinc-100 transition-all active:scale-95 cursor-pointer shadow-xs"
              title="Download SVG"
            >
              <Download className="size-3.5" />
              <span>SVG</span>
            </a>
            <button
              onClick={() => handleCopyPath("/keilhq-white.svg", "Inverted Logo")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 text-white border border-zinc-700 font-sans text-xs font-medium hover:bg-zinc-800 transition-all active:scale-95 cursor-pointer shadow-xs"
              title="Copy Asset Path"
            >
              {copiedPath === "/keilhq-white.svg" ? (
                <Check className="size-3.5 text-emerald-400" />
              ) : (
                <Copy className="size-3.5" />
              )}
              <span>{copiedPath === "/keilhq-white.svg" ? "Copied" : "Copy Path"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
