import React from "react";
import Link from "next/link";

// Pixel/dot art mountain shapes — decorative, matches reference image bottom
function PixelArt() {
  const cols = 18;
  const rows = 10;

  // Three mountain silhouettes as height maps (0 = empty, 1 = filled)
  const mountains = [
    // Left arch
    [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  return (
    <div className="flex gap-8 justify-center opacity-[0.12]" aria-hidden="true">
      {[0, 1, 2].map((shape) => (
        <div key={shape} className="grid gap-[2px]" style={{ gridTemplateColumns: `repeat(${cols}, 10px)` }}>
          {mountains.map((row, r) =>
            row.map((cell, c) => (
              <div
                key={`${r}-${c}`}
                className={`w-[10px] h-[10px] rounded-[1px] ${cell ? "bg-zinc-500" : "bg-transparent"}`}
              />
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-100">

      {/* Main footer content */}
      <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-14 pb-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">

          {/* Brand + badges — left column */}
          <div className="md:w-48 shrink-0 flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 100 100" className="w-4 h-4 text-zinc-950" fill="currentColor">
                {[...Array(12)].map((_, i) => (
                  <rect key={i} x="46" y="10" width="8" height="26" rx="4" transform={`rotate(${i * 30} 50 50)`} />
                ))}
              </svg>
              <span className="text-sm font-semibold tracking-tight text-zinc-950">o11</span>
            </div>
            {/* YC + LV badges — matches reference */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center justify-center w-6 h-6 bg-[#FF6600] rounded-sm">
                <span className="text-white text-[9px] font-black">Y</span>
              </div>
              <div className="flex items-center justify-center px-1.5 h-6 bg-zinc-800 rounded-sm">
                <span className="text-white text-[9px] font-bold tracking-tight">LV</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">

            {/* Product */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-zinc-950">Product</span>
              <nav className="flex flex-col gap-2.5">
                {["Academy", "Pricing", "Blog", "Changelog"].map((item) => (
                  <Link key={item} href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-zinc-950">Company</span>
              <nav className="flex flex-col gap-2.5">
                {["Demo", "Team", "Enterprise"].map((item) => (
                  <Link key={item} href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-zinc-950">Connect</span>
              <nav className="flex flex-col gap-2.5">
                {["LinkedIn", "Instagram"].map((item) => (
                  <Link key={item} href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-zinc-100">
        <div className="max-w-9xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-400">© o11 {new Date().getFullYear()}</span>
          <div className="flex items-center gap-5">
            {["Support", "Privacy", "Cookies", "Terms", "SOC 2"].map((item) => (
              <Link key={item} href="#" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span>Made in San Francisco</span>
            <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 text-zinc-400" fill="currentColor">
              {[...Array(12)].map((_, i) => (
                <rect key={i} x="46" y="10" width="8" height="26" rx="4" transform={`rotate(${i * 30} 50 50)`} />
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Pixel art decoration — bottom of footer, matches reference */}
      <div className="overflow-hidden pt-4 pb-0">
        <PixelArt />
      </div>

    </footer>
  );
}
