"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Plug,
  Shield,
  Zap,
  Settings,
  Code2,
  Calendar,
  FileText,
} from "lucide-react";

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col pt-24">

        {/* ── SECTION 1: HERO & INTERACTIVE MOCKUP ── */}
        <section className="w-full pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-28 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-10">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Features · Integrations
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Connect with your entire tech stack
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              Native integrations with Google Workspace, GitHub, Notion, and more. OAuth connections for seamless data flow across your tools.
            </p>

            {/* CTA button */}
            <div className="mt-2">
              <Link 
                href="https://app.keilhq.in/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold active:scale-[0.97] transition-transform duration-150 shadow-md"
              >
                Get Started Free
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Interactive Mockup: Integration Dashboard */}
            <div className="w-full max-w-5xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 sm:p-8 flex flex-col gap-6 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Connected Integrations</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">OAuth Secured</span>
              </div>
              
              {/* Active Integrations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Google Workspace */}
                <div className="p-4 bg-background border border-border/50 rounded-sm shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                        <Calendar className="size-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">Google Workspace</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] text-emerald-600 font-medium">Connected</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['Calendar', 'Gmail', 'Drive', 'Docs', 'Sheets', 'Meet'].map((service) => (
                      <span key={service} className="text-[9px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground">Two-way sync active • Auto-generate Meet links • Document references</p>
                </div>

                {/* GitHub */}
                <div className="p-4 bg-background border border-border/50 rounded-sm shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
                        <Code2 className="size-4 text-zinc-700 dark:text-zinc-300" />
                      </div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">GitHub</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] text-emerald-600 font-medium">Connected</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['Issues', 'Pull Requests', 'Contributors'].map((service) => (
                      <span key={service} className="text-[9px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground">Create issues from tasks • AI agent integration • Repository workflows</p>
                </div>

                {/* Notion */}
                <div className="p-4 bg-background border border-border/50 rounded-sm shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
                        <FileText className="size-4 text-zinc-700 dark:text-zinc-300" />
                      </div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">Notion</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] text-emerald-600 font-medium">Connected</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['Import', 'Export', 'Sync'].map((service) => (
                      <span key={service} className="text-[9px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground">Bidirectional sync • Import pages • Export Motion docs • OAuth or token auth</p>
                </div>

              </div>

              {/* Planned Integrations */}
              <div className="pt-4 border-t border-border/30">
                <h3 className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Coming Soon</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['Slack', 'Linear', 'Jira', 'ChronicleHQ'].map((integration) => (
                    <div key={integration} className="p-2 bg-secondary/50 border border-border/30 rounded-sm text-center">
                      <span className="text-[10px] text-muted-foreground font-medium">{integration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: CAPABILITIES (Grid matching Phase 2) ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Heading */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Secure connections.<br />Seamless workflows.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KeilHQ integrates with your favorite tools using secure OAuth flows and API connections to create unified workflows.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">OAuth Security</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  All integrations use secure OAuth 2.0 flows. KeilHQ never stores your passwords or sensitive credentials.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Real-time Sync</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Changes sync instantly across platforms. Create a task in KeilHQ, see it in Google Calendar immediately.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Plug className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">AI Integration</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  AI agents can interact with connected services on your behalf - create GitHub issues, schedule meetings, search documents.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Settings className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Granular Control</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Configure sync preferences, manage permissions, and control exactly how data flows between your tools.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: CHECKLIST (2-column layout matching Phase 3) ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side copy */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                One workspace.<br />All your tools.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Stop switching between dozens of apps. Bring your entire toolkit into KeilHQ's unified interface.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Google Workspace single OAuth unlocks Calendar, Gmail, Drive, Docs, Sheets, Slides, and Meet integrations.",
                "GitHub integration enables AI agents to list issues/PRs, get details, create issues from tasks, and manage workflows.",
                "Notion OAuth or manual token connections for importing pages, exporting Motion docs, and bidirectional content sync.",
                "Enterprise integrations with Slack notifications, Linear project sync, Jira board connections, and ChronicleHQ presentations.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5" />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}