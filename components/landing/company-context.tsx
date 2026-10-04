"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Building2,
  Eye,
  FileText,
  Folder,
  Layers,
  MessageSquare,
  Shield,
  SquareCheck,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

/* ─────────────────────────────────────────────────────────────────────────────
   Company Context — "The deeper idea"
   ───────────────────────────────────────────────────────────────────────────── */

const EASE_BREATHE: [number, number, number, number] = [0.33, 0, 0.2, 1];
const EASE_OUT:    [number, number, number, number] = [0.16, 1, 0.3, 1];

const VW = 580;
const VH = 420;

/* SVG bezier paths */
const CONNECTIONS = [
  "M 148,53  C 178,53  178,178 204,178",
  "M 148,170 C 178,170 178,178 204,178",
  "M 148,287 C 178,287 178,178 204,178",
  "M 314,170 C 340,170 340,43  368,43",
  "M 314,176 C 340,176 340,162 368,162",
  "M 314,183 C 340,183 340,282 368,282",
  "M 259,226 C 259,272 261,304 261,318",
];

const DOTS: [number, number][] = [
  [148, 53], [148, 170], [148, 287],
  [314, 170], [314, 176], [314, 183],
  [259, 226],
];

/* Grayscale portrait photos (Unsplash) */
const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
];

/* Brand colours (locked palette) */
const INDIGO    = "#31425E";
const FOREST    = "#1D3429";
const MARIGOLD  = "#C68A34";
const CLAY      = "#744739";
const SANDSTONE = "#A98563";

/* ── Sub-components ──────────────────────────────────────────────────────── */

function NodeIcon({ Icon, bg }: { Icon: LucideIcon; bg: string }) {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg" style={{ background: bg }}>
      <Icon className="size-3.5 text-white" />
    </span>
  );
}

function CardHead({ Icon, bg, title, sub }: { Icon: LucideIcon; bg: string; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-2">
      <NodeIcon Icon={Icon} bg={bg} />
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-[11.5px] font-semibold leading-tight text-foreground">{title}</span>
        <span className="truncate text-[10px] leading-tight text-muted-foreground">{sub}</span>
      </div>
    </div>
  );
}

function LogoBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="flex size-[22px] shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-[3px] shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="size-full object-contain" />
    </span>
  );
}

/* Entrance-only card wrapper — no floating, just staggered fade+rise */
function EntryCard({
  style, entryDelay, inView, children, className,
}: {
  style: React.CSSProperties;
  entryDelay: number;
  inView: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className ?? ""}`}
      style={style}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
      transition={{ duration: 0.5, delay: entryDelay, ease: EASE_BREATHE }}
    >
      {children}
    </motion.div>
  );
}

/* ── Bottom stats ─────────────────────────────────────────────────────────── */
const STATS: { Icon: LucideIcon; label: string; desc: string }[] = [
  { Icon: Layers,  label: "Everything connected",   desc: "See the relationships, not scattered data." },
  { Icon: Eye,     label: "More accurate answers",  desc: "AI understands the full picture." },
  { Icon: Zap,     label: "Faster decisions",        desc: "No more searching across tools." },
  { Icon: Shield,  label: "Built for your company", desc: "Your context stays private and secure." },
];

/* ── Main export ─────────────────────────────────────────────────────────── */
export function CompanyContext() {
  const sectionRef     = useRef<HTMLElement>(null);
  const diagramWrapRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(sectionRef, { once: true, amount: 0.12 });
  const reduce  = useReducedMotion();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = diagramWrapRef.current;
    if (!el) return;
    const update = () => { const w = el.offsetWidth; if (w > 0) setScale(w / VW); };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 10 },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : reduce ? 0 : 10 },
    transition: { duration: reduce ? 0 : 0.5, delay: inView ? delay : 0, ease: EASE_BREATHE },
  });

  const card = "rounded-xl border border-border bg-card p-3 shadow-sm";

  return (
    <section
      ref={sectionRef}
      id="company-context"
      aria-labelledby="company-context-heading"
      className="w-full bg-background select-text flex flex-col items-center py-20 sm:py-28 lg:py-32"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-14 lg:gap-20">

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: copy */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <motion.span {...fade(0)} className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
              The deeper idea
            </motion.span>
            <motion.h2 {...fade(0.07)} id="company-context-heading"
              className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight leading-[1.1] text-foreground">
              Your work already<br />has context.
            </motion.h2>
            <motion.div {...fade(0.14)} className="flex flex-col gap-7 text-[15px] sm:text-[16px] text-muted-foreground leading-[1.6]">
              <p>Your company&rsquo;s information is spread across conversations, documents, projects, meetings, customers and tools.</p>
              <p>The meaning lives in how those things relate &mdash; who decided what, which project it belongs to, which customer it affects.</p>
              <p>KeilHQ keeps those relationships intact, so your team &mdash; and your AI &mdash; can work with the full picture instead of scattered fragments.</p>
            </motion.div>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.22)} className="lg:col-span-7 w-full">
            <div ref={diagramWrapRef} className="relative w-full max-w-[500px] ml-auto" style={{ height: VH * scale }}>
              <div className="absolute top-0 left-0"
                style={{ width: VW, height: VH, transform: `scale(${scale})`, transformOrigin: "top left" }}>

                {/* ── SVG: connection paths + junction dots + traveling data dots ── */}
                <svg aria-hidden="true" viewBox={`0 0 ${VW} ${VH}`} width={VW} height={VH}
                  className="pointer-events-none absolute inset-0 overflow-visible">

                  {/* Connection bezier paths */}
                  {CONNECTIONS.map((d, i) => (
                    <motion.path key={i} d={d} fill="none" strokeWidth={1.5} strokeLinecap="round"
                      className="stroke-limestone"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.35 + i * 0.07, ease: EASE_OUT }}
                    />
                  ))}

                  {/* Junction dots */}
                  {DOTS.map(([cx, cy], i) => (
                    <motion.circle key={i} cx={cx} cy={cy} r={2.5} className="fill-limestone"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: inView ? 0.6 : 0, scale: inView ? 1 : 0 }}
                      transition={{ duration: 0.25, delay: 0.85 + i * 0.06 }}
                    />
                  ))}

                  {/* Traveling data dots — copper pulses flowing along each connection */}
                  {!reduce && inView && CONNECTIONS.map((d, i) => (
                    <circle key={`travel-${i}`} r={2} fill="var(--color-copper)" opacity={0}>
                      {/* Move along the path */}
                      <animateMotion path={d} dur="2.8s" begin={`${i * 0.55}s`} repeatCount="indefinite" />
                      {/* Fade in at start, hold, fade out near end */}
                      <animate attributeName="opacity" values="0;0.9;0.9;0"
                        keyTimes="0;0.07;0.87;1" dur="2.8s" begin={`${i * 0.55}s`} repeatCount="indefinite" />
                    </circle>
                  ))}
                </svg>

                {/* ── MEETINGS ── */}
                <EntryCard style={{ left: 0, top: 15, width: 148 }} entryDelay={0.45} inView={inView} className={card}>
                  <CardHead Icon={Video} bg={INDIGO} title="Meetings" sub="What was discussed" />
                  <div className="mt-2.5">
                    <AvatarGroup>
                      {(["P","A","R"] as const).map((l, i) => (
                        <Avatar key={i} size="sm">
                          <AvatarImage src={AVATARS[i]} alt={l} className="grayscale" />
                          <AvatarFallback className="text-[9px] font-semibold"
                            style={{ background: ["#e5d9cc","#d1c5b8","#c4b5a5"][i], color: SANDSTONE }}>
                            {l}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      <AvatarGroupCount className="text-[9px]">+3</AvatarGroupCount>
                    </AvatarGroup>
                  </div>
                </EntryCard>

                {/* ── DOCUMENTS ── */}
                <EntryCard style={{ left: 0, top: 132, width: 148 }} entryDelay={0.52} inView={inView} className={card}>
                  <CardHead Icon={FileText} bg={INDIGO} title="Documents" sub="Plans, notes, specs" />
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <LogoBadge src="/integrations/gdrive.png" alt="Google Drive" />
                    <LogoBadge src="/integrations/gdocs.png"  alt="Google Docs" />
                    <LogoBadge src="/integrations/notion.png" alt="Notion" />
                  </div>
                </EntryCard>

                {/* ── CONVERSATIONS ── */}
                <EntryCard style={{ left: 0, top: 249, width: 148 }} entryDelay={0.59} inView={inView} className={card}>
                  <CardHead Icon={MessageSquare} bg={FOREST} title="Conversations" sub="Decisions and updates" />
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <LogoBadge src="/integrations/slack.png" alt="Slack" />
                    <LogoBadge src="/integrations/gmail.png" alt="Gmail" />
                    <LogoBadge src="/integrations/gmeet.png" alt="Google Meet" />
                  </div>
                </EntryCard>

                {/* ── CONTEXT hub (entrance only — no pulse) ── */}
                <motion.div
                  className="absolute flex flex-col items-center justify-center gap-2 rounded-xl bg-foreground shadow-lg"
                  style={{ left: 204, top: 130, width: 110, height: 96 }}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.88 }}
                  transition={{ duration: 0.55, delay: 0.5, ease: EASE_BREATHE }}
                >
                  <Image src="/images/cms/globals/logo-white.svg" alt="KeilHQ" width={34} height={34} className="dark:hidden" />
                  <Image src="/images/cms/globals/logo.svg"       alt="KeilHQ" width={34} height={34} className="hidden dark:block" />
                  <span className="text-[11px] font-semibold text-background">Context</span>
                </motion.div>

                {/* ── PROJECTS — animated fill bars ── */}
                <EntryCard style={{ left: 368, top: 5, width: 154 }} entryDelay={0.46} inView={inView} className={card}>
                  <CardHead Icon={Folder} bg={FOREST} title="Projects" sub="Where it belongs" />
                  <div className="mt-2.5 flex flex-col gap-1.5">
                    {/* Bar 1 fills to 75% */}
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 shrink-0 rounded-full bg-indigo" />
                      <span className="relative flex-1 h-1.5 rounded-full bg-muted-foreground/15 overflow-hidden">
                        <motion.span className="absolute inset-y-0 left-0 rounded-full bg-indigo"
                          initial={{ width: "0%" }}
                          animate={inView ? { width: "75%" } : { width: "0%" }}
                          transition={{ duration: 1.4, delay: 0.9, ease: EASE_BREATHE }}
                        />
                      </span>
                    </div>
                    {/* Bar 2 fills to 45% */}
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 shrink-0 rounded-full bg-marigold" />
                      <span className="relative flex-1 h-1.5 rounded-full bg-muted-foreground/15 overflow-hidden">
                        <motion.span className="absolute inset-y-0 left-0 rounded-full bg-marigold"
                          initial={{ width: "0%" }}
                          animate={inView ? { width: "45%" } : { width: "0%" }}
                          transition={{ duration: 1.2, delay: 1.1, ease: EASE_BREATHE }}
                        />
                      </span>
                    </div>
                  </div>
                </EntryCard>

                {/* ── TASKS ── */}
                <EntryCard style={{ left: 368, top: 124, width: 154 }} entryDelay={0.53} inView={inView} className={card}>
                  <CardHead Icon={SquareCheck} bg={MARIGOLD} title="Tasks" sub="What needs to happen" />
                  <div className="mt-2.5 flex flex-col gap-1.5">
                    {[0, 1].map((i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="size-3 shrink-0 rounded-sm border border-muted-foreground/35" />
                        <span className={`h-1.5 rounded-full bg-muted-foreground/15 ${i === 0 ? "w-[70%]" : "w-[50%]"}`} />
                      </div>
                    ))}
                  </div>
                </EntryCard>

                {/* ── PEOPLE ── */}
                <EntryCard style={{ left: 368, top: 244, width: 154 }} entryDelay={0.60} inView={inView} className={card}>
                  <CardHead Icon={Users} bg={CLAY} title="People" sub="Who's responsible" />
                  <div className="mt-2.5">
                    <AvatarGroup>
                      {(["P","A","R"] as const).map((l, i) => (
                        <Avatar key={i} size="sm">
                          <AvatarImage src={AVATARS[i]} alt={l} className="grayscale" />
                          <AvatarFallback className="text-[9px] font-semibold"
                            style={{ background: ["#e5d9cc","#d1c5b8","#c4b5a5"][i], color: CLAY }}>
                            {l}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      <AvatarGroupCount className="text-[9px]">+5</AvatarGroupCount>
                    </AvatarGroup>
                  </div>
                </EntryCard>

                {/* ── CUSTOMERS ── */}
                <EntryCard style={{ left: 196, top: 318, width: 130 }} entryDelay={0.56} inView={inView} className={card}>
                  <CardHead Icon={Building2} bg={SANDSTONE} title="Customers" sub="Who it affects" />
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-muted text-[9px] font-bold text-foreground">A</span>
                    <span className="text-[11px] font-medium text-foreground">Acme</span>
                  </div>
                  <p className="mt-1.5 text-[9.5px] leading-tight text-muted-foreground">3 linked items</p>
                </EntryCard>

              </div>{/* end inner canvas */}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom 4-stat row ── */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : reduce ? 0 : 10 }}
          transition={{ duration: reduce ? 0 : 0.5, delay: inView ? 0.45 : 0, ease: EASE_BREATHE }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-border pt-8"
        >
          {STATS.map(({ Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60">
                <Icon className="size-3.5 text-muted-foreground" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-semibold text-foreground">{label}</span>
                <span className="text-[12px] leading-[1.5] text-muted-foreground">{desc}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
