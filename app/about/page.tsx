import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  Globe,
  DollarSign,
  Puzzle,
  Activity,
  Package,
  Layers,
  Zap,
  Database,
  Cloud,
  Radio,
  Sparkles,
  Mic,
} from "lucide-react";

const stats = [
  { value: "7,000+", label: "Teams worldwide", icon: Globe },
  { value: "$40–$70", label: "Saved per seat / month", icon: DollarSign },
  { value: "50+", label: "Integrations", icon: Puzzle },
  { value: "99.9%", label: "Uptime SLA", icon: Activity },
  { value: "6", label: "Tools replaced", icon: Package },
  { value: "1", label: "Workspace for everything", icon: Layers },
];

const infra = [
  { name: "Cloudflare Workers", desc: "Globally fast frontend", icon: Zap },
  { name: "Supabase + PostgreSQL", desc: "Enterprise-grade database", icon: Database },
  { name: "AWS S3", desc: "Secure meeting storage", icon: Cloud },
  { name: "Socket.io", desc: "Real-time everything", icon: Radio },
  { name: "Google Gemini", desc: "AI with your actual data", icon: Sparkles },
  { name: "Sarvam AI", desc: "Meeting transcription", icon: Mic },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-28">

        {/* ── SECTION 1: HERO ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-10">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                About · Vision
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              We built KeilHQ because we were tired of paying for six tools that don&apos;t talk to each other.
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[60ch] mx-auto leading-relaxed">
              Every hour your team spends context-switching between tools is an hour not spent on work that actually moves the needle. KeilHQ eliminates the gap between where work is discussed, where it&apos;s planned, where it&apos;s documented, and where it gets done.
            </p>

            {/* Parent company note */}
            <p className="text-[13px] text-muted-foreground/70 max-w-[50ch] mx-auto leading-relaxed border border-border/50 rounded-full px-5 py-2">
              KeilHQ is a product developed under{" "}
              <span className="font-semibold text-muted-foreground">Zemon</span>, our parent company.
            </p>

          </div>
        </section>

        {/* ── SECTION 2: MISSION (2-column layout) ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
            
            {/* Left quote block */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Our Philosophy
              </span>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-[1.1] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.02em" }}>
                &ldquo;Clarity first.<br />Execution follows.&rdquo;
              </h2>
            </div>

            {/* Right details */}
            <div className="flex flex-col gap-6 text-[14px] text-muted-foreground leading-relaxed">
              <p>
                We believe your team doesn&apos;t have a productivity problem — they have a clarity problem. They&apos;re switching between tools, losing decisions in Slack, creating vague tasks that mean different things to different people, and spending hours in sync meetings just to find out what&apos;s actually blocked.
              </p>
              <p>
                KeilHQ fixes all of it — not by adding another tool to your stack, but by becoming your entire stack.
              </p>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: STATS BY THE NUMBERS (Top-bordered cards grid) ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 text-left">
            
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Metrics
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                By the numbers
              </h2>
            </div>

            {/* Stats top-border grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="pt-6 border-t border-border/60 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-2">
                    <stat.icon className="size-4 text-muted-foreground" />
                    <span className="text-[12px] font-semibold text-muted-foreground leading-snug uppercase tracking-wide">{stat.label}</span>
                  </div>
                  <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">{stat.value}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SECTION 4: INFRASTRUCTURE (Top-bordered cards grid) ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 text-left">
            
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Trust
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Built on infrastructure you can trust
              </h2>
            </div>

            {/* Infrastructure top-border grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mt-4">
              {infra.map((item) => (
                <div
                  key={item.name}
                  className="pt-6 border-t border-border/60 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="size-4 text-muted-foreground" />
                    <span className="text-[14px] font-semibold text-zinc-900 dark:text-white">{item.name}</span>
                  </div>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SECTION 5: TEAM PHILOSOPHY ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto w-full flex flex-col gap-8 text-center items-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                The Team
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-[1.1] text-zinc-900 dark:text-white">
              Built for speed, craft, and craftspeople
            </h2>

            <div className="flex flex-col gap-6 text-[14px] text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                KeilHQ was founded by a small team who spent years building and shipping software inside large engineering organizations. We got frustrated watching talented people waste hours every week on tool sprawl, context-switching, and meetings about meetings. So we built the workspace we always wanted.
              </p>
              <p>
                We&apos;re a remote-first team focused on craft, speed, and opinionated design. We believe software should have strong opinions and earn the right to become someone&apos;s daily driver.
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
