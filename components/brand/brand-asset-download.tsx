"use client";

import React, { useState } from "react";
import { Download, Copy, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function BrandAssetDownload() {
  const [copyingLogo, setCopyingLogo] = useState<string | null>(null);
  const [copiedLogo, setCopiedLogo] = useState<string | null>(null);

  const handleCopyImage = async (svgPath: string, label: string) => {
    try {
      setCopyingLogo(svgPath);

      // Fetch the SVG content
      const response = await fetch(svgPath);
      if (!response.ok) throw new Error("Failed to fetch SVG asset");
      const svgText = await response.text();

      // Create a Blob from SVG
      const svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
      const URLObj = window.URL || window.webkitURL || window;
      const blobURL = URLObj.createObjectURL(svgBlob);

      const img = new window.Image();
      img.crossOrigin = "anonymous";

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load SVG into image element"));
        img.src = blobURL;
      });

      // Render to High-DPI canvas
      const canvas = document.createElement("canvas");
      const scale = 4; // 4x resolution for ultra-sharp clipboard copy
      const baseWidth = img.naturalWidth || 207;
      const baseHeight = img.naturalHeight || 204;

      canvas.width = baseWidth * scale;
      canvas.height = baseHeight * scale;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not initialize 2D canvas context");

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URLObj.revokeObjectURL(blobURL);

      // Extract PNG Blob
      const pngBlob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, "image/png");
      });

      if (!pngBlob) throw new Error("Failed to generate PNG image blob");

      if (navigator.clipboard && typeof window.ClipboardItem !== "undefined") {
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": pngBlob,
          }),
        ]);
        setCopiedLogo(svgPath);
        toast.success(`Copied ${label} image to clipboard`);
        setTimeout(() => setCopiedLogo(null), 2500);
      } else {
        throw new Error("ClipboardItem API is not supported in this browser");
      }
    } catch (err: any) {
      console.error("Error copying image:", err);
      toast.error("Could not copy image. Try downloading SVG instead.");
    } finally {
      setCopyingLogo(null);
    }
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

      {/* 2 Side-by-Side Clean Logo Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Light Box with Ink Logo */}
        <div className="group relative rounded-xl bg-[#FFFFFF] p-12 sm:p-20 flex items-center justify-center min-h-[260px] sm:min-h-[340px] overflow-hidden transition-all shadow-xs">
          <img
            src="/keilhq.svg"
            alt="KeilHQ Logo — Ink Version"
            className="h-10 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Action Buttons in Bottom-Right Corner */}
          <div className="absolute bottom-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
            <a
              href="/keilhq.svg"
              download="keilhq-logo-ink.svg"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 text-white font-sans text-xs font-medium hover:bg-zinc-800 transition-transform duration-150 active:scale-[0.97] cursor-pointer shadow-xs"
              title="Download SVG"
            >
              <Download className="size-3.5" />
              <span>SVG</span>
            </a>
            <button
              onClick={() => handleCopyImage("/keilhq.svg", "Ink Logo")}
              disabled={copyingLogo === "/keilhq.svg"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 font-sans text-xs font-medium hover:bg-zinc-200 transition-transform duration-150 active:scale-[0.97] cursor-pointer shadow-xs disabled:opacity-70"
              title="Copy Image to Clipboard"
            >
              {copyingLogo === "/keilhq.svg" ? (
                <Loader2 className="size-3.5 animate-spin" />
              ) : copiedLogo === "/keilhq.svg" ? (
                <Check className="size-3.5 text-emerald-600" />
              ) : (
                <Copy className="size-3.5" />
              )}
              <span>
                {copyingLogo === "/keilhq.svg"
                  ? "Copying..."
                  : copiedLogo === "/keilhq.svg"
                  ? "Copied Image"
                  : "Copy Image"}
              </span>
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

          {/* Action Buttons in Bottom-Right Corner */}
          <div className="absolute bottom-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
            <a
              href="/keilhq-white.svg"
              download="keilhq-logo-white.svg"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-zinc-950 font-sans text-xs font-medium hover:bg-zinc-100 transition-transform duration-150 active:scale-[0.97] cursor-pointer shadow-xs"
              title="Download SVG"
            >
              <Download className="size-3.5" />
              <span>SVG</span>
            </a>
            <button
              onClick={() => handleCopyImage("/keilhq-white.svg", "Inverted Logo")}
              disabled={copyingLogo === "/keilhq-white.svg"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 text-white border border-zinc-700 font-sans text-xs font-medium hover:bg-zinc-800 transition-transform duration-150 active:scale-[0.97] cursor-pointer shadow-xs disabled:opacity-70"
              title="Copy Image to Clipboard"
            >
              {copyingLogo === "/keilhq-white.svg" ? (
                <Loader2 className="size-3.5 animate-spin text-zinc-400" />
              ) : copiedLogo === "/keilhq-white.svg" ? (
                <Check className="size-3.5 text-emerald-400" />
              ) : (
                <Copy className="size-3.5" />
              )}
              <span>
                {copyingLogo === "/keilhq-white.svg"
                  ? "Copying..."
                  : copiedLogo === "/keilhq-white.svg"
                  ? "Copied Image"
                  : "Copy Image"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
