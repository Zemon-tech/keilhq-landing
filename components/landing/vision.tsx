import React from "react";
import Image from "next/image";

export function Vision() {
  return (
    <section className="w-full bg-background pt-20 px-4 sm:px-6 lg:px-8">
      {/*
        Contained card — almost full-screen width, rounded corners, with video player chrome.
        Matches the reference: large rounded rectangle, not edge-to-edge.
      */}
      <div className="relative w-full rounded-sm overflow-hidden" style={{ height: "calc(100vh - 48px)" }}>

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop')` }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Brand icon — top right */}
        <div className="absolute top-6 right-6 text-white opacity-90 z-10">
          <Image
            src="/keilhq-white.svg"
            alt="KielHQ"
            width={40}
            height={40}
            className="animate-[spin_20s_linear_infinite]"
          />
        </div>

        {/* "Play with sound" pill — centered */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors">
            <svg viewBox="0 0 24 24" className="size-4 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play with sound
          </button>
        </div>

        {/* Large heading — bottom left */}
        <div className="absolute bottom-16 left-10 z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
            7,000+ teams<br />ship with KielHQ
          </h2>
        </div>

        {/* Video player controls bar — bottom, matches reference screenshot */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-3 flex items-center gap-3 bg-gradient-to-t from-black/60 to-transparent">
          {/* Play button */}
          <button className="text-white hover:text-white/80 transition-colors shrink-0">
            <svg viewBox="0 0 24 24" className="size-5 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          {/* Time */}
          <span className="text-white text-xs font-mono shrink-0">0:01 / 1:43</span>

          {/* Progress bar */}
          <div className="flex-1 h-1 bg-white/30 rounded-sm overflow-hidden">
            <div className="h-full bg-white rounded-sm" style={{ width: "1.2%" }} />
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3 shrink-0 text-white">
            {/* Volume */}
            <button className="hover:text-white/80 transition-colors">
              <svg viewBox="0 0 24 24" className="size-4 fill-current">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
            </button>
            {/* Fullscreen */}
            <button className="hover:text-white/80 transition-colors">
              <svg viewBox="0 0 24 24" className="size-4 fill-current">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            </button>
            {/* More */}
            <button className="hover:text-white/80 transition-colors">
              <svg viewBox="0 0 24 24" className="size-4 fill-current">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
