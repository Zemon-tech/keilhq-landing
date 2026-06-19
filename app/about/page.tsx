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
      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-20">

          {/* ─── Hero ─── */}
          <div className="flex flex-col gap-6">
            <h1
              className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 dark:text-white leading-tight"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              We built KeilHQ because we were tired of paying for six tools that don&apos;t talk to each other.
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every hour your team spends context-switching between tools is an hour not spent on work that actually moves the needle. KeilHQ eliminates the gap between where work is discussed, where it&apos;s planned, where it&apos;s documented, and where it gets done.
            </p>
          </div>

          {/* ─── Mission ─── */}
          <div className="flex flex-col gap-5 p-8 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/30 dark:bg-white/[0.015]">
            <p className="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white leading-snug">
              &ldquo;Clarity first. Execution follows.&rdquo;
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We believe your team doesn&apos;t have a productivity problem — they have a clarity problem. They&apos;re switching between tools, losing decisions in Slack, creating vague tasks that mean different things to different people, and spending hours in sync meetings just to find out what&apos;s actually blocked.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              KeilHQ fixes all of it — not by adding another tool to your stack, but by becoming your entire stack.
            </p>
          </div>

          {/* ─── Stats ─── */}
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
              By the numbers
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-3 p-5 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/20 dark:bg-white/[0.01]"
                >
                  <stat.icon className="size-4 text-zinc-400 dark:text-zinc-500" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{stat.value}</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Infrastructure ─── */}
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
              Built on infrastructure you can trust
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {infra.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2.5 p-5 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/20 dark:bg-white/[0.01] transition-colors hover:bg-zinc-100/40 dark:hover:bg-white/[0.025]"
                >
                  <item.icon className="size-4 text-zinc-400 dark:text-zinc-500" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white">{item.name}</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Team ─── */}
          <div className="flex flex-col gap-4 pb-4">
            <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
              The team
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              KeilHQ was founded by a small team who spent years building and shipping software inside large engineering organizations. We got frustrated watching talented people waste hours every week on tool sprawl, context-switching, and meetings about meetings. So we built the workspace we always wanted.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We&apos;re a remote-first team focused on craft, speed, and opinionated design. We believe software should have strong opinions and earn the right to become someone&apos;s daily driver.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
