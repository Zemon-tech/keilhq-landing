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
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium px-2 py-0.5 rounded border border-border">
                Context
              </span>
            </div>

            {/* Visual: context sources converging into one shared state */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center my-6">
              <svg
                viewBox="0 0 320 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Diagram: tasks, meetings, docs and CRM flowing into one shared state"
                className="w-full max-w-[260px] h-auto text-foreground/80 transition-all duration-300"
              >
                {/* Source chips */}
                {[
                  { label: "TASKS", y: 34 },
                  { label: "MEETINGS", y: 84 },
                  { label: "DOCS", y: 134 },
                  { label: "CRM", y: 184 },
                ].map((node) => (
                  <g key={node.label}>
                    <rect
                      x="20"
                      y={node.y}
                      width="78"
                      height="26"
                      rx="6"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeOpacity="0.55"
                      fill="currentColor"
                      fillOpacity="0.03"
                    />
                    <text
                      x="59"
                      y={node.y + 17}
                      textAnchor="middle"
                      className="font-mono"
                      fontSize="9"
                      letterSpacing="0.08em"
                      fill="currentColor"
                      fillOpacity="0.85"
                    >
                      {node.label}
                    </text>
                    <circle cx="104" cy={node.y + 13} r="2" fill="currentColor" fillOpacity="0.6" />
                    {/* Connector into the shared state */}
                    <path
                      d={`M104 ${node.y + 13} C 148 ${node.y + 13}, 152 120, 196 120`}
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                      fill="none"
                    />
                  </g>
                ))}

                {/* Shared state node */}
                <rect
                  x="196"
                  y="82"
                  width="100"
                  height="76"
                  rx="10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                  fill="currentColor"
                  fillOpacity="0.04"
                />
                <rect
                  x="202"
                  y="88"
                  width="88"
                  height="64"
                  rx="7"
                  className="text-copper"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.7"
                  fill="none"
                />
                <text
                  x="246"
                  y="117"
                  textAnchor="middle"
                  className="font-mono"
                  fontSize="9"
                  letterSpacing="0.08em"
                  fill="currentColor"
                  fillOpacity="0.9"
                >
                  ONE STATE
                </text>
                <text
                  x="246"
                  y="132"
                  textAnchor="middle"
                  className="font-mono"
                  fontSize="8"
                  fill="currentColor"
                  fillOpacity="0.5"
                >
                  always live
                </text>
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
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium px-2 py-0.5 rounded border border-border">
                Agents
              </span>
            </div>

            {/* Visual: supervisor delegating to three agent lanes */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center my-6">
              <svg
                viewBox="0 0 320 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Diagram: a supervisor agent delegating a PRD draft, a status note and follow-ups"
                className="w-full max-w-[260px] h-auto text-foreground/80 transition-all duration-300"
              >
                {/* Supervisor node */}
                <rect
                  x="108"
                  y="14"
                  width="104"
                  height="30"
                  rx="8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                  fill="currentColor"
                  fillOpacity="0.04"
                />
                <circle cx="126" cy="29" r="3" className="text-copper" fill="currentColor" stroke="none" />
                <text
                  x="170"
                  y="35"
                  textAnchor="middle"
                  className="font-mono"
                  fontSize="9.5"
                  letterSpacing="0.08em"
                  fill="currentColor"
                  fillOpacity="0.9"
                >
                  Supervisor
                </text>

                {/* Distribution bus */}
                <path
                  d="M160 44 V64 M56 64 H264 M56 64 V76 M160 64 V76 M264 64 V76"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                  fill="none"
                />

                {/* Agent lanes */}
                {[
                  { x: 14, agent: "Writer", task: "PRD draft", status: "✓ done", live: false },
                  { x: 116, agent: "Reporter", task: "Status note", status: "✓ done", live: false },
                  { x: 218, agent: "Chaser", task: "Follow-ups", status: "● live", live: true },
                ].map((lane) => (
                  <g key={lane.agent}>
                    <rect
                      x={lane.x}
                      y="76"
                      width="88"
                      height="30"
                      rx="8"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeOpacity="0.7"
                      fill="currentColor"
                      fillOpacity="0.03"
                    />
                    <text
                      x={lane.x + 44}
                      y="95"
                      textAnchor="middle"
                      className="font-mono"
                      fontSize="9"
                      letterSpacing="0.06em"
                      fill="currentColor"
                      fillOpacity="0.85"
                    >
                      {lane.agent}
                    </text>
                    <rect
                      x={lane.x}
                      y="114"
                      width="88"
                      height="26"
                      rx="6"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      strokeOpacity="0.4"
                      fill="none"
                    />
                    <text
                      x={lane.x + 44}
                      y="131"
                      textAnchor="middle"
                      className="font-mono"
                      fontSize="8.5"
                      fill="currentColor"
                      fillOpacity="0.7"
                    >
                      {lane.task}
                    </text>
                    <text
                      x={lane.x + 44}
                      y="158"
                      textAnchor="middle"
                      className={`font-mono ${lane.live ? "text-copper" : ""}`}
                      fontSize="8.5"
                      letterSpacing="0.06em"
                      fill="currentColor"
                      fillOpacity={lane.live ? 0.95 : 0.5}
                    >
                      {lane.status}
                    </text>
                  </g>
                ))}
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
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium px-2 py-0.5 rounded border border-border">
                Velocity
              </span>
            </div>

            {/* Visual: keyboard-first command bar with live sync */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center my-6">
              <svg
                viewBox="0 0 320 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Diagram: a command bar with keyboard shortcuts and a live sync status"
                className="w-full max-w-[260px] h-auto text-foreground/80 transition-all duration-300"
              >
                {/* Command bar */}
                <rect
                  x="40"
                  y="44"
                  width="240"
                  height="46"
                  rx="10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeOpacity="0.8"
                  fill="currentColor"
                  fillOpacity="0.03"
                />
                <rect
                  x="54"
                  y="57"
                  width="36"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                  fill="none"
                />
                <text
                  x="72"
                  y="71"
                  textAnchor="middle"
                  className="font-mono"
                  fontSize="10"
                  fill="currentColor"
                  fillOpacity="0.85"
                >
                  ⌘K
                </text>
                <text
                  x="100"
                  y="72"
                  className="font-mono"
                  fontSize="11"
                  fill="currentColor"
                  fillOpacity="0.55"
                >
                  Ask anything…
                </text>
                <line
                  x1="216"
                  y1="64"
                  x2="216"
                  y2="78"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeOpacity="0.8"
                />

                {/* Shortcut rows */}
                {[
                  { key: "N", action: "New task", hint: "no mouse" },
                  { key: "/", action: "Commands", hint: "jump anywhere" },
                  { key: ".", action: "Capture", hint: "from anywhere" },
                ].map((row, i) => (
                  <g key={row.key}>
                    <rect
                      x="52"
                      y={116 + i * 30}
                      width="28"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeOpacity="0.45"
                      fill="none"
                    />
                    <text
                      x="66"
                      y={130 + i * 30}
                      textAnchor="middle"
                      className="font-mono"
                      fontSize="10"
                      fill="currentColor"
                      fillOpacity="0.85"
                    >
                      {row.key}
                    </text>
                    <text
                      x="92"
                      y={130 + i * 30}
                      className="font-mono"
                      fontSize="10.5"
                      fill="currentColor"
                      fillOpacity="0.8"
                    >
                      {row.action}
                    </text>
                    <text
                      x="268"
                      y={130 + i * 30}
                      textAnchor="end"
                      className="font-mono"
                      fontSize="9"
                      fill="currentColor"
                      fillOpacity="0.45"
                    >
                      {row.hint}
                    </text>
                  </g>
                ))}

                {/* Sync status */}
                <circle cx="60" cy="216" r="2.5" fill="currentColor" fillOpacity="0.8" />
                <text
                  x="72"
                  y="219"
                  className="font-mono"
                  fontSize="9"
                  letterSpacing="0.06em"
                  fill="currentColor"
                  fillOpacity="0.55"
                >
                  Synced just now
                </text>
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
