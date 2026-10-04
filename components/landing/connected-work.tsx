"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Circle,
  CircleCheck,
  FileText,
  Folder,
  ListChecks,
  SquareCheck,
  User,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { BrandLogo, type BrandKey } from "@/components/brand-logo";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   Connected work
   Six primary objects joined by one continuous relationship thread. The cards
   are HTML (accessible, interactive); the thread is an SVG layer behind them,
   drawn from the measured card positions so the same code handles the
   desktop row, the two-row tablet layout and the mobile vertical stack.
   All names and figures are illustrative sample data.
   ───────────────────────────────────────────────────────────────────────── */

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_BREATHE: [number, number, number, number] = [0.33, 0, 0.2, 1];

/* Brand colours — locked palette */
const INDIGO    = "#31425E"; // knowledge · meetings · documents
const MARIGOLD  = "#C68A34"; // discovery · decision
const FOREST    = "#1D3429"; // growth · project
const SANDSTONE = "#A98563"; // enterprise · task · customer
const CLAY      = "#744739"; // humanity · person

type Mode = "mobile" | "tablet" | "desktop";

interface Segment {
  d: string;
  end: { x: number; y: number };
  start: { x: number; y: number };
  mid: { x: number; y: number };
  vertical: boolean;
}

interface Geometry {
  w: number;
  h: number;
  mode: Mode;
  wide: boolean;
  segments: Segment[];
  ticks: string[];
  anchors: { x: number; y: number }[];
}

/* Placeholder portrait photos — same set as company-context for consistency */
const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&auto=format&q=80", // P
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80", // A
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80", // R
];

// Gentle vertical wave across the desktop row so the thread reads as a flow.
const WAVE = ["xl:mt-10", "xl:mt-3", "xl:mt-8", "xl:mt-0", "xl:mt-9", "xl:mt-2"];

const WAVEFORM = [40, 70, 30, 80, 55, 90, 35, 60, 75, 45, 85, 30, 65, 50, 80, 40, 70, 55, 35, 75, 45, 60, 30, 50];

/* ── Small building blocks ─────────────────────────────────────────────── */

function Satellite({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card px-3 py-2.5 text-[11px] leading-snug text-muted-foreground shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function Tether() {
  return <span aria-hidden="true" className="mx-auto block h-4 w-px bg-border/60" />;
}

/* Self-contained animated waveform — owns its own inView so it works
   inside the module-level NODES array without needing component state */
function AnimatedWaveform() {
  const ref   = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="mt-2 flex h-5 w-full items-center justify-between gap-0.5" aria-hidden="true">
      {WAVEFORM.map((h, i) => (
        <motion.span key={i}
          className="min-w-0 flex-1 rounded-full bg-muted-foreground/50 origin-bottom"
          style={{ height: `${h}%` }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: inView ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : i * 0.012, ease: EASE_OUT }}
        />
      ))}
    </div>
  );
}

/* Self-contained animated progress bar */
function AnimatedProgressBar() {
  const ref   = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border" aria-hidden="true">
      <motion.div className="h-full rounded-full bg-copper"
        initial={{ width: "0%" }}
        animate={{ width: inView ? "66%" : "0%" }}
        transition={{ duration: reduce ? 0 : 1.6, ease: [0.33, 0, 0.2, 1] }}
      />
    </div>
  );
}

function Initial({ letter, src }: { letter: string; src?: string }) {
  return (
    <Avatar size="sm">
      {src && <AvatarImage src={src} alt={letter} className="grayscale" />}
      <AvatarFallback className="text-[9px] font-medium">{letter}</AvatarFallback>
    </Avatar>
  );
}

const PROJECT_TOOLS: BrandKey[] = ["notion", "linear", "slack", "github"];

function ProjectTools() {
  return (
    <Satellite className="w-full">
      <div className="flex items-center justify-between gap-3">
        <span className="text-foreground">Linked tools</span>
        <span className="text-[10px] tabular-nums">4 sources</span>
      </div>
      <div className="mt-2 flex items-center gap-1.5" aria-label="Notion, Linear, Slack and GitHub">
        {PROJECT_TOOLS.map((brand) => (
          <span
            key={brand}
            className="flex size-6 items-center justify-center rounded-sm bg-white/90 p-0.5"
            title={brand}
          >
            <BrandLogo brand={brand} size="sm" monochrome={false} />
          </span>
        ))}
        <span className="ml-1 text-[10px] text-muted-foreground">project context</span>
      </div>
    </Satellite>
  );
}

/* ── Node definitions ──────────────────────────────────────────────────── */

interface NodeDef {
  id: string;
  label: string;
  hint: string;
  Icon: LucideIcon;
  /** Brand colour for the icon badge */
  iconColor: string;
  /** Relationship to the next node, shown on the thread. */
  relation: string | null;
  /** Screen-reader description of the step. */
  sr: string;
  extra: React.ReactNode;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}

const NODES: NodeDef[] = [
  {
    id: "meeting",
    label: "Meeting",
    hint: "a call with Acme",
    Icon: Video,
    iconColor: INDIGO,
    relation: "creates",
    sr: "A meeting with Acme. It creates a decision.",
    extra: (
      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-copper" aria-hidden="true" />
        Recorded · 24 min
      </span>
    ),
    top: (
      <Satellite className="flex items-center gap-2.5">
        <AvatarGroup>
          <Initial letter="P" src={AVATARS[0]} />
          <Initial letter="A" src={AVATARS[1]} />
          <Initial letter="R" src={AVATARS[2]} />
        </AvatarGroup>
        <span className="flex flex-col">
          <span className="text-foreground">Priya + 2</span>
          <span>Team sync · Mon, 10:00 AM</span>
        </span>
      </Satellite>
    ),
    bottom: (
      <Satellite className="w-full">
        <div className="flex items-center justify-between">
          <span className="text-foreground">Transcription</span>
          <span className="tabular-nums">24:00</span>
        </div>
        <AnimatedWaveform />
        <p className="mt-2 text-muted-foreground">&ldquo;Let&rsquo;s ship the pilot with Acme next month&hellip;&rdquo;</p>
      </Satellite>
    ),
  },
  {
    id: "decision",
    label: "Decision",
    hint: "ship the pilot",
    Icon: FileText,
    iconColor: MARIGOLD,
    relation: "becomes",
    sr: "A decision: ship the pilot. It becomes a project.",
    extra: (
      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <CircleCheck className="size-3.5 text-copper" aria-hidden="true" />
        Decision captured
      </span>
    ),
    top: (
      <Satellite>
        <div className="flex items-center gap-1.5 text-foreground">
          <FileText className="size-3.5 text-muted-foreground" aria-hidden="true" />
          From meeting notes
        </div>
        <p className="mt-1">&ldquo;Ship the pilot with Acme&rdquo;</p>
      </Satellite>
    ),
  },
  {
    id: "project",
    label: "Project",
    hint: "Acme onboarding",
    Icon: Folder,
    iconColor: FOREST,
    relation: "produces",
    sr: "A project: Acme onboarding, 66 percent complete. It produces tasks.",
    extra: (
      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-copper" aria-hidden="true" />
        In progress
      </span>
    ),
    top: <ProjectTools />,
    bottom: (
      <Satellite>
        <div className="flex items-center justify-between">
          <span className="text-foreground">Project progress</span>
          <span className="tabular-nums">66%</span>
        </div>
        <AnimatedProgressBar />
      </Satellite>
    ),
  },
  {
    id: "task",
    label: "Task",
    hint: "owned by Priya",
    Icon: SquareCheck,
    iconColor: SANDSTONE,
    relation: "assigned to",
    sr: "A task owned by Priya. It is assigned to a person.",
    extra: <span className="text-[11px] text-muted-foreground">Due Friday</span>,
    top: (
      <Satellite>
        <div className="flex items-center gap-1.5 text-foreground">
          <ListChecks className="size-3.5 text-muted-foreground" aria-hidden="true" />
          Follow-up tasks
        </div>
        <ul className="mt-1.5 flex flex-col gap-1">
          {["Set up onboarding", "Prepare materials", "Share with team"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <Circle className="size-3 text-muted-foreground/70" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </Satellite>
    ),
  },
  {
    id: "person",
    label: "Person",
    hint: "who\u2019s accountable",
    Icon: User,
    iconColor: CLAY,
    relation: "accountable for",
    sr: "A person, Priya, who is accountable. She is accountable for the customer outcome.",
    extra: <span className="text-[11px] text-muted-foreground">3 tasks · 1 project</span>,
    top: (
      <Satellite className="flex items-center gap-2.5">
        <Avatar>
          <AvatarImage src={AVATARS[0]} alt="Priya" className="grayscale" />
          <AvatarFallback className="text-[11px] font-medium">P</AvatarFallback>
        </Avatar>
        <span className="flex flex-col">
          <span className="text-foreground">Priya</span>
          <span>Project owner</span>
        </span>
      </Satellite>
    ),
  },
  {
    id: "customer",
    label: "Customer",
    hint: "the full history",
    Icon: Building2,
    iconColor: SANDSTONE,
    relation: null,
    sr: "The customer, Acme, with every linked meeting, project, task and document.",
    extra: (
      <ul className="flex flex-col gap-1.5">
        {[
          { label: "Meetings", Icon: Video },
          { label: "Projects", Icon: Folder },
          { label: "Tasks", Icon: SquareCheck },
          { label: "Documents", Icon: FileText },
        ].map(({ label, Icon }) => (
          <li key={label} className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Icon className="size-3 text-muted-foreground/80" aria-hidden="true" />
              {label}
            </span>
            <ArrowRight className="size-3 text-muted-foreground/60" aria-hidden="true" />
          </li>
        ))}
      </ul>
    ),
    top: (
      <Satellite className="flex items-center gap-2.5">
        <span className="flex size-6 items-center justify-center rounded-sm bg-muted text-[10px] font-medium text-foreground">
          A
        </span>
        <span className="flex flex-col">
          <span className="text-foreground">Acme</span>
          <span>3 linked items</span>
        </span>
      </Satellite>
    ),
  },
];

/* ── Geometry ──────────────────────────────────────────────────────────── */

function buildGeometry(canvas: HTMLElement, cards: (HTMLElement | null)[]): Geometry | null {
  if (cards.some((c) => !c)) return null;

  const c = canvas.getBoundingClientRect();
  const vw = window.innerWidth;
  const mode: Mode = vw < 768 ? "mobile" : vw < 1280 ? "tablet" : "desktop";

  const boxes = cards.map((el) => {
    const r = (el as HTMLElement).getBoundingClientRect();
    const l = r.left - c.left;
    const t = r.top - c.top;
    return { l, t, r: l + r.width, b: t + r.height, cx: l + r.width / 2, cy: t + r.height / 2 };
  });

  const segments: Segment[] = [];
  const ticks: string[] = [];
  const anchors: { x: number; y: number }[] = [];

  if (mode === "mobile") {
    const gx = 10;
    boxes.forEach((b) => {
      ticks.push(`M ${gx} ${b.cy} H ${b.l}`);
      anchors.push({ x: gx, y: b.cy });
    });
    for (let i = 0; i < boxes.length - 1; i++) {
      const y1 = boxes[i].cy;
      const y2 = boxes[i + 1].cy;
      segments.push({
        d: `M ${gx} ${y1} L ${gx} ${y2}`,
        end: { x: gx, y: y2 },
        start: { x: gx, y: y1 },
        mid: { x: gx, y: (y1 + y2) / 2 },
        vertical: true,
      });
    }
  } else {
    for (let i = 0; i < boxes.length - 1; i++) {
      const a = boxes[i];
      const b = boxes[i + 1];
      if (b.t >= a.b - 8) {
        const k = (b.t - a.b) / 2;
        segments.push({
          d: `M ${a.cx} ${a.b} C ${a.cx} ${a.b + k}, ${b.cx} ${b.t - k}, ${b.cx} ${b.t}`,
          end: { x: b.cx, y: b.t },
          start: { x: a.cx, y: a.b },
          mid: { x: (a.cx + b.cx) / 2, y: (a.b + b.t) / 2 },
          vertical: true,
        });
      } else {
        const k = (b.l - a.r) / 2;
        segments.push({
          d: `M ${a.r} ${a.cy} C ${a.r + k} ${a.cy}, ${b.l - k} ${b.cy}, ${b.l} ${b.cy}`,
          end: { x: b.l, y: b.cy },
          start: { x: a.r, y: a.cy },
          mid: { x: (a.r + b.l) / 2, y: (a.cy + b.cy) / 2 },
          vertical: false,
        });
      }
    }
  }

  return { w: c.width, h: c.height, mode, wide: vw >= 1536, segments, ticks, anchors };
}

/* ── Section ───────────────────────────────────────────────────────────── */

export function ConnectedWorkSection() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shown = useInView(canvasRef, { once: true, amount: 0.25 });

  const [geo, setGeo] = useState<Geometry | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  // Mobile-only: which card is closest to the viewport focal point while scrolling
  const [scrollActive, setScrollActive] = useState<number | null>(null);

  // On mobile (< 768 px) there is no hover, so we drive highlighting from scroll.
  // We find whichever card button's centre is nearest to 42 % down the viewport.
  useEffect(() => {
    const handle = () => {
      if (window.innerWidth >= 768) { setScrollActive(null); return; }
      const focal = window.innerHeight * 0.42;
      let bestIdx: number | null = null;
      let bestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const r = card.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const dist = Math.abs(r.top + r.height / 2 - focal);
        if (dist < bestDist) { bestDist = dist; bestIdx = i; }
      });
      setScrollActive(bestDist < window.innerHeight * 0.45 ? bestIdx : null);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle(); // run immediately on mount
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const isMobile = geo?.mode === "mobile";
  const active = hovered ?? focused ?? pinned ?? (isMobile ? scrollActive : null);

  const measure = useCallback(() => {
    if (!canvasRef.current) return;
    setGeo(buildGeometry(canvasRef.current, cardRefs.current));
  }, []);

  useEffect(() => {
    measure();
    const canvas = canvasRef.current;
    const ro = new ResizeObserver(measure);
    if (canvas) ro.observe(canvas);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const nodeOpacity = (i: number) => (active === null ? 1 : Math.abs(i - active) <= 1 ? 1 : 0.5);
  const contextOpacity = (i: number) =>
    active === null ? 0.85 : i === active ? 1 : Math.abs(i - active) === 1 ? 0.6 : 0.3;

  const nodeDelay = (i: number) => (reduce ? 0 : i * 0.5 + 0.15);
  const lineDelay = (i: number) => (reduce ? 0 : i * 0.5 + 0.3);
  const lineDuration = reduce ? 0 : 0.4;

  return (
    <section
      id="connected-work"
      aria-labelledby="connected-work-heading"
      className="flex w-full scroll-mt-24 flex-col items-center bg-background py-20 select-text sm:py-28 lg:py-32"
    >
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-14 px-6 sm:px-8 lg:gap-20 lg:px-12">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start gap-5 lg:col-span-6">
            <h2
              id="connected-work-heading"
              className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-tight text-foreground text-balance"
            >
              Your team&rsquo;s work<br />is connected.
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-6 lg:pt-[6px] lg:justify-self-end">
            <p className="max-w-[52ch] text-[15px] leading-[1.55] text-muted-foreground sm:text-[16px]">
              A meeting leads to a decision, which becomes a project, then a task, owned by a person, tied to a customer.
              In most tools those links are lost. KeilHQ keeps them.
            </p>
          </div>
        </div>

        {/* ── Relationship canvas ── */}
        <div ref={canvasRef} className="relative pl-9 md:pl-0">
          {/* Thread (SVG, behind the cards) */}
          {geo && (
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 overflow-visible"
              width={geo.w}
              height={geo.h}
            >
              {geo.ticks.map((d, i) => (
                <path key={`tick-${i}`} d={d} fill="none" strokeWidth={1} className="stroke-muted-foreground/30" />
              ))}
              {geo.segments.map((s, i) => {
                const hl = active !== null && (i === active || i + 1 === active);
                return (
                  <g key={i}>
                    {/* Thin bezier — limestone default, copper when active */}
                    <motion.path
                      d={s.d}
                      fill="none"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      className="stroke-limestone transition-[stroke] duration-300"
                      style={{ opacity: active === null || hl ? 1 : 0.35 }}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: shown ? 1 : 0, opacity: shown ? (active === null || hl ? 1 : 0.35) : 0 }}
                      transition={{ duration: lineDuration, delay: lineDelay(i), ease: EASE_OUT }}
                    />
                    {/* Copper overlay — only visible when segment is active */}
                    <path
                      d={s.d}
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      className="stroke-copper transition-opacity duration-300"
                      style={{ opacity: hl && shown ? 1 : 0 }}
                    />
                    {/* Start dot */}
                    <motion.circle
                      cx={s.start.x} cy={s.start.y} r={2.75}
                      className={cn("transition-colors duration-300", hl ? "fill-copper" : "fill-limestone")}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={shown ? {
                        opacity: hl ? 1 : (reduce ? 0.7 : [0.5, 0.85, 0.5]),
                        scale: 1,
                      } : { opacity: 0, scale: 0.6 }}
                      transition={{
                        scale:   { duration: reduce ? 0 : 0.35, delay: lineDelay(i) },
                        opacity: hl || reduce
                          ? { duration: 0.3 }
                          : { duration: 2.5, ease: "easeInOut", repeat: Infinity, delay: 1.2 + i * 0.4 },
                      }}
                    />
                    {/* Mid dot */}
                    <circle
                      cx={s.mid.x} cy={s.mid.y} r={1.5}
                      className={cn("transition-colors duration-300", hl ? "fill-copper" : "fill-limestone")}
                    />
                    {/* End dot — replaces chevron arrow */}
                    <motion.circle
                      cx={s.end.x} cy={s.end.y} r={2.75}
                      className={cn("transition-colors duration-300", hl ? "fill-copper" : "fill-limestone")}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: shown ? 1 : 0, scale: shown ? 1 : 0.6 }}
                      transition={{ duration: reduce ? 0 : 0.3, delay: lineDelay(i) + lineDuration * 0.9, ease: EASE_OUT }}
                    />
                  </g>
                );
              })}
              {geo.mode === "mobile" &&
                geo.anchors.map((p, i) => (
                  <circle key={`anchor-${i}`} cx={p.x} cy={p.y} r={2.5} className="fill-limestone" />
                ))}

              {/* Traveling data dots — copper pulses flowing along each connection */}
              {!reduce && shown && geo.segments.map((s, i) => (
                <circle key={`travel-${i}`} r={2} fill="var(--color-copper)" opacity={0}>
                  <animateMotion path={s.d} dur="2.5s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0.9;0.9;0"
                    keyTimes="0;0.07;0.87;1" dur="2.5s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
          )}

          {/* Relationship labels — hidden until the adjacent node is hovered */}
          {geo?.segments.map((s, i) => {
            const hl = active !== null && (i === active || i + 1 === active);
            return (
              <span
                key={`label-${i}`}
                aria-hidden="true"
                style={{
                  left: s.mid.x,
                  top: s.mid.y,
                  opacity: hl && shown ? 1 : 0,
                  transform: `${
                    geo.mode === "mobile"
                      ? "translateY(-50%) translateX(0.75rem)"
                      : s.vertical
                        ? "translate(-50%, -50%)"
                        : "translateX(-50%) translateY(calc(-100% - 6px))"
                  } scale(${hl && shown ? 1 : 0.88})`,
                }}
                className="pointer-events-none absolute z-20 whitespace-nowrap rounded-full border border-border bg-background px-1.5 py-0.5 text-[10px] leading-none text-foreground transition-[opacity,transform] duration-200"
              >
                {NODES[i].relation}
              </span>
            );
          })}

          {/* Objects */}
          <ol
            aria-label="How a meeting connects to a decision, project, task, person and customer"
            className="relative z-10 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-12 md:gap-y-20 xl:grid-cols-6 xl:gap-x-4 xl:gap-y-0 2xl:gap-x-12"
          >
            {NODES.map((n, i) => (
              <motion.li
                key={n.id}
                className={cn("relative flex min-w-0 flex-col", WAVE[i])}
                initial={{ opacity: 0 }}
                animate={{ opacity: shown ? 1 : 0 }}
                transition={{ duration: reduce ? 0 : 0.5, delay: nodeDelay(i), ease: EASE_OUT }}
                onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(i)}
                onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(null)}
              >
                {/* Context above */}
                <div
                  className="flex flex-col justify-end transition-opacity duration-300 md:min-h-[116px]"
                  style={{ opacity: contextOpacity(i) }}
                >
                  {n.top && (
                    <>
                      {n.top}
                      <Tether />
                    </>
                  )}
                </div>

                {/* Primary object — no float, clean static card */}
                <div className="transition-opacity duration-300" style={{ opacity: nodeOpacity(i) }}>
                  <button
                    ref={(el) => { cardRefs.current[i] = el; }}
                    type="button"
                    aria-pressed={pinned === i}
                    onFocus={() => setFocused(i)}
                    onBlur={() => setFocused(null)}
                    onClick={() => setPinned((p) => (p === i ? null : i))}
                    className={cn(
                      "w-full cursor-pointer rounded-xl border bg-card p-3.5 text-left shadow-sm outline-none transition-[border-color] duration-300 focus-visible:ring-2 focus-visible:ring-ring/60 xl:p-4",
                      active === i ? "border-foreground/40" : "border-border hover:border-foreground/20"
                    )}
                  >
                    <span className="sr-only">
                      Step {i + 1} of {NODES.length}. {n.sr}
                    </span>
                    <span aria-hidden="true" className="flex items-center justify-between gap-3">
                      <span className="flex min-w-0 items-center gap-2.5">
                        {/* Brand-coloured icon badge */}
                        <span
                          className="flex size-7 shrink-0 items-center justify-center rounded-lg"
                          style={{ background: `${n.iconColor}22` }}
                        >
                          <n.Icon className="size-3.5" style={{ color: n.iconColor }} />
                        </span>
                        <span className="truncate font-display text-[16px] font-medium tracking-tight text-foreground">
                          {n.label}
                        </span>
                      </span>
                      <span className="shrink-0 text-[10px] tabular-nums tracking-wider text-muted-foreground/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span aria-hidden="true" className="mt-2 block text-[13px] leading-snug text-muted-foreground">
                      {n.hint}
                    </span>
                    <span aria-hidden="true" className="mt-3 block border-t border-border/70 pt-3">
                      {n.extra}
                    </span>
                  </button>
                </div>

                {/* Context below */}
                {n.bottom && (
                  <div className="transition-opacity duration-300" style={{ opacity: contextOpacity(i) }}>
                    <Tether />
                    {n.bottom}
                  </div>
                )}
              </motion.li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
