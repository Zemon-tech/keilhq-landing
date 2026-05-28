import React from "react";

export function BackedBy() {
  return (
    <section className="w-full py-12 bg-white border-y border-zinc-100">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">

          <div className="shrink-0">
            <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
              Backed by:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-start md:justify-end gap-x-12 gap-y-6 w-full">

            <div className="flex flex-col items-start leading-none group cursor-default">
              <span className="text-xs text-zinc-400 tracking-tight font-light">Investors From</span>
              <span className="text-base font-bold tracking-tight font-serif text-zinc-950 group-hover:text-zinc-500 transition-colors">
                Goldman Sachs
              </span>
            </div>

            <div className="flex flex-col leading-none group cursor-default">
              <span className="text-[10px] text-zinc-400 tracking-tight font-light">Investors From</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <svg viewBox="0 0 24 24" className="size-4 text-zinc-950 transition-transform group-hover:rotate-45" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A6 6 0 0 0 6 12A6 6 0 0 0 12 18A6 6 0 0 0 18 12A6 6 0 0 0 12 6M12 8A4 4 0 0 1 16 12A4 4 0 0 1 12 16A4 4 0 0 1 8 12A4 4 0 0 1 12 8Z" />
                </svg>
                <span className="text-base font-bold tracking-tight text-zinc-950">OpenAI</span>
              </div>
            </div>

            <div className="flex flex-col items-center leading-none group cursor-default">
              <div className="size-9 rounded-full bg-zinc-950 text-white flex items-center justify-center font-black text-xs tracking-tighter hover:scale-105 transition-transform">
                crv
              </div>
              <span className="text-[8px] text-zinc-400 font-medium mt-1 uppercase tracking-wider">Scout</span>
            </div>

            <div className="flex flex-col items-start leading-none group cursor-default">
              <span className="text-base font-serif font-semibold uppercase tracking-widest text-zinc-900 group-hover:text-zinc-500 transition-colors">
                Eight Capital
              </span>
            </div>

            <div className="flex flex-col items-start leading-none group cursor-default">
              <span className="text-lg font-sans font-light tracking-wide text-zinc-600 group-hover:text-zinc-400 transition-colors">
                phosphor
              </span>
            </div>

            <div className="flex flex-col items-start leading-none group cursor-default">
              <span className="text-sm font-extrabold tracking-widest text-white bg-zinc-950 px-2 py-0.5 hover:bg-zinc-700 transition-colors">
                LEAPYEAR
              </span>
            </div>

            <div className="flex flex-col items-start leading-none group cursor-default">
              <span className="text-base font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-500 transition-colors">
                Spot VC
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
