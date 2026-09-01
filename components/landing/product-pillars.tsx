"use client";

import React from "react";

export function ProductPillars() {
  return (
    <section className="w-full bg-background select-text flex flex-col items-center py-20 sm:py-28 lg:py-32">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12 sm:gap-16">

        {/* Two-column Header Layout matching Features & LovedBy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 w-full text-left items-start">
          {/* Left: Main Heading */}
          <div className="col-span-12 lg:col-span-6 flex flex-col">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight leading-[1.1] text-foreground text-balance">
              The operational foundation for modern, high-output teams.
            </h2>
          </div>

          {/* Right: Description */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 lg:pt-[5px]">
            <p className="text-[17px] lg:text-[18px] font-normal text-muted-foreground leading-[1.55] max-w-[50ch]">
              KeilHQ unifies fragmented workstreams into a single live context engine — connecting strategy, documentation, customer intelligence, and automated execution in real time.
            </p>
          </div>
        </div>

        {/* 3-Column Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">

          {/* Pillar 01: Unified Context Engine */}
          <div className="group relative p-8 sm:p-10 flex flex-col justify-between transition-all duration-300">
            {/* Figure Metadata */}
            <div className="flex items-center justify-between w-full">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70 font-medium">
                FIG 0.1
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-copper font-medium px-2 py-0.5 rounded bg-copper/10 border border-copper/20">
                Context
              </span>
            </div>

            {/* Visual: Isometric Layered Context Stack */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center my-6">
              <svg
                viewBox="0 0 320 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[240px] h-auto text-foreground/80 group-hover:text-foreground transition-all duration-300 transform group-hover:-translate-y-1"
              >
                {/* Dotted projection guides */}
                <path
                  d="M160 55 V110 M60 112 V168 M260 112 V168 M160 170 V225"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeDasharray="2 3"
                  strokeOpacity="0.2"
                />

                {/* Floating Top Layer (Universal Context Sentry) */}
                <g className="transition-transform duration-300 group-hover:-translate-y-1.5">
                  <path
                    d="M160 38 L256 93 L160 148 L64 93 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                    fill="currentColor"
                    fillOpacity="0.04"
                  />
                  <path
                    d="M64 93 V105 L160 160 V148 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M256 93 V105 L160 160 V148 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                    fill="currentColor"
                    fillOpacity="0.05"
                  />

                  {/* Concentric Crest / Inscribed Lens */}
                  <ellipse
                    cx="160"
                    cy="93"
                    rx="44"
                    ry="26"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    fill="none"
                  />
                  <ellipse
                    cx="160"
                    cy="93"
                    rx="26"
                    ry="15"
                    stroke="#2B6F6A"
                    strokeWidth="1.2"
                    strokeOpacity="0.8"
                    fill="none"
                  />
                  <path
                    d="M126 93 H194"
                    stroke="currentColor"
                    strokeWidth="0.9"
                    strokeOpacity="0.35"
                  />
                  <path
                    d="M132 99 H188"
                    stroke="currentColor"
                    strokeWidth="0.9"
                    strokeOpacity="0.3"
                  />
                </g>

                {/* Base Slabs (Indexed Datastores) */}
                <path
                  d="M160 120 L256 175 L160 230 L64 175 Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeOpacity="0.75"
                  fill="currentColor"
                  fillOpacity="0.02"
                />
                <path
                  d="M64 187 L160 242 L256 187"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                />
                <path
                  d="M64 199 L160 254 L256 199"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                />
                <path
                  d="M64 211 L160 266 L256 211"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                />
                <path
                  d="M64 175 V225 L160 280 V230 Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeOpacity="0.75"
                  fill="currentColor"
                  fillOpacity="0.05"
                />
                <path
                  d="M256 175 V225 L160 280 V230 Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeOpacity="0.75"
                  fill="currentColor"
                  fillOpacity="0.03"
                />
              </svg>
            </div>

            {/* Bottom Copy */}
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-[19px] sm:text-[21px] font-medium text-foreground tracking-tight">
                Single operational brain
              </h3>
              <p className="text-[15px] font-normal leading-[1.55] text-muted-foreground">
                Eliminates tool silos by indexing your tasks, meeting intelligence, documentation, and customer records into one shared state.
              </p>
            </div>
          </div>

          {/* Pillar 02: Autonomous Agents */}
          <div className="group relative p-8 sm:p-10 flex flex-col justify-between transition-all duration-300">
            {/* Figure Metadata */}
            <div className="flex items-center justify-between w-full">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70 font-medium">
                FIG 0.2
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-copper font-medium px-2 py-0.5 rounded bg-copper/10 border border-copper/20">
                Agents
              </span>
            </div>

            {/* Visual: Isometric Interconnected Agent Nodes */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center my-6">
              <svg
                viewBox="0 0 320 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[240px] h-auto text-foreground/80 group-hover:text-foreground transition-all duration-300 transform group-hover:-translate-y-1"
              >
                {/* Back Node */}
                <g>
                  <path
                    d="M160 76 L208 104 L160 132 L112 104 Z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeOpacity="0.8"
                    fill="currentColor"
                    fillOpacity="0.03"
                  />
                  <path
                    d="M112 104 V148 L160 176 V132 Z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeOpacity="0.8"
                    fill="currentColor"
                    fillOpacity="0.05"
                  />
                  <path
                    d="M208 104 V148 L160 176 V132 Z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeOpacity="0.8"
                    fill="currentColor"
                    fillOpacity="0.03"
                  />
                  {/* Copper Active Glyph */}
                  <path
                    d="M154 104 L160 100 L166 104 L160 108 Z"
                    stroke="#2B6F6A"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                  />
                </g>

                {/* Left Node */}
                <g>
                  <path
                    d="M96 118 L144 146 L96 174 L48 146 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.85"
                    fill="currentColor"
                    fillOpacity="0.03"
                  />
                  <path
                    d="M48 146 V208 L96 236 V174 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.85"
                    fill="currentColor"
                    fillOpacity="0.06"
                  />
                  <path
                    d="M144 146 V208 L96 236 V174 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.85"
                    fill="currentColor"
                    fillOpacity="0.04"
                  />
                  <path
                    d="M90 146 L96 142 L102 146 L96 150 Z"
                    stroke="#2B6F6A"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                  />
                </g>

                {/* Right Node */}
                <g>
                  <path
                    d="M214 126 L262 154 L214 182 L166 154 Z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeOpacity="0.8"
                    fill="currentColor"
                    fillOpacity="0.03"
                  />
                  <path
                    d="M166 154 V196 L214 224 V182 Z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeOpacity="0.8"
                    fill="currentColor"
                    fillOpacity="0.05"
                  />
                  <path
                    d="M262 154 V196 L214 224 V182 Z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeOpacity="0.8"
                    fill="currentColor"
                    fillOpacity="0.03"
                  />
                  <path
                    d="M208 154 L214 150 L220 154 L214 158 Z"
                    stroke="#2B6F6A"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                  />
                </g>

                {/* Front Node */}
                <g>
                  <path
                    d="M160 172 L202 196 L160 220 L118 196 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                    fill="currentColor"
                    fillOpacity="0.04"
                  />
                  <path
                    d="M118 196 V238 L160 262 V220 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                    fill="currentColor"
                    fillOpacity="0.07"
                  />
                  <path
                    d="M202 196 V238 L160 262 V220 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                    fill="currentColor"
                    fillOpacity="0.04"
                  />
                  <path
                    d="M155 196 L160 193 L165 196 L160 199 Z"
                    stroke="#2B6F6A"
                    strokeWidth="1.3"
                    strokeOpacity="1"
                  />
                </g>
              </svg>
            </div>

            {/* Bottom Copy */}
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-[19px] sm:text-[21px] font-medium text-foreground tracking-tight">
                Autonomous co-workers
              </h3>
              <p className="text-[15px] font-normal leading-[1.55] text-muted-foreground">
                Intelligent agents handle the mundane — automatically drafting PRDs, updating status reports, and following up on action items.
              </p>
            </div>
          </div>

          {/* Pillar 03: Engineered for Speed */}
          <div className="group relative p-8 sm:p-10 flex flex-col justify-between transition-all duration-300">
            {/* Figure Metadata */}
            <div className="flex items-center justify-between w-full">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70 font-medium">
                FIG 0.3
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-copper font-medium px-2 py-0.5 rounded bg-copper/10 border border-copper/20">
                Velocity
              </span>
            </div>

            {/* Visual: Stepped Ascending Velocity Fins */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center my-6">
              <svg
                viewBox="0 0 320 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[240px] h-auto text-foreground/80 group-hover:text-foreground transition-all duration-300 transform group-hover:-translate-y-1"
              >
                {/* Stepped fins */}
                <path d="M102 248 L138 227 V234 L102 255 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" fill="currentColor" fillOpacity="0.02" />
                <path d="M109 240 L149 217 V225 L109 248 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.02" />
                <path d="M116 232 L160 207 V216 L116 241 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.45" fill="currentColor" fillOpacity="0.03" />
                <path d="M123 224 L171 197 V207 L123 234 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" fill="currentColor" fillOpacity="0.03" />
                <path d="M130 216 L182 187 V198 L130 227 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.55" fill="currentColor" fillOpacity="0.04" />
                <path d="M137 208 L193 177 V189 L137 220 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" fill="currentColor" fillOpacity="0.04" />
                <path d="M144 200 L204 167 V180 L144 213 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.65" fill="currentColor" fillOpacity="0.05" />
                <path d="M151 192 L215 157 V171 L151 206 Z" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.7" fill="currentColor" fillOpacity="0.05" />
                <path d="M158 184 L226 147 V162 L158 199 Z" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.75" fill="currentColor" fillOpacity="0.06" />

                {/* Back Leading Fin */}
                <g>
                  <path d="M172 108 L254 61" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.95" />
                  <path d="M172 108 L254 61 V152 L172 199 Z" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.9" fill="currentColor" fillOpacity="0.07" />
                  <path d="M254 61 L259 64 V155 L254 152 Z" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.9" fill="currentColor" fillOpacity="0.04" />
                  {/* Subtle Copper Leading Edge */}
                  <path d="M172 108 L172 199" stroke="#2B6F6A" strokeWidth="1.5" strokeOpacity="0.9" />
                </g>

                {/* Base Rails */}
                <path d="M92 254 L190 197 M102 260 L200 203" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.2" />
              </svg>
            </div>

            {/* Bottom Copy */}
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-[19px] sm:text-[21px] font-medium text-foreground tracking-tight">
                Zero friction execution
              </h3>
              <p className="text-[15px] font-normal leading-[1.55] text-muted-foreground">
                Cut through clutter with instant keyboard navigation, real-time sync, and a distraction-free environment built for deep work.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
