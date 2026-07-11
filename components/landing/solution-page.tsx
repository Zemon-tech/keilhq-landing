"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ChevronDown } from "lucide-react";
import type { SolutionContent } from "@/lib/solutions-content";

interface SolutionPageProps {
  content: SolutionContent;
  ctaLabel: string;
}

export function SolutionPage({ content, ctaLabel }: SolutionPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dynamically load tailored content based on the page ID
  const isStartups = content.id === "startups";
  const isAgencies = content.id === "agencies";
  const isDevTeams = content.id === "dev-teams";

  // 1. Partner Logos
  const partnerLogos = isStartups
    ? ["replit", "ElevenLabs", "Raycast", "runway", "CURSOR"]
    : isAgencies
      ? ["Vercel", "Figma", "Webflow", "Slack", "Notion"]
      : ["GitHub", "GitLab", "Linear", "Sentry", "Datadog"];

  // 2. Middle Section Headings
  const middleHeading = isStartups
    ? "Designed to move fast. Just like your startup."
    : isAgencies
      ? "Scale delivery. Without the overhead."
      : "Ship without friction. Enforce dependencies.";

  const middleDesc = isStartups
    ? "KeilHQ is built for teams that want to ship faster. With its minimal design and snappy performance, it delivers a focused experience ideal for small teams with big ambitions."
    : isAgencies
      ? "Juggling five clients shouldn't mean switching between five tools. KeilHQ pulls client briefs, docs, and Slack comments into a single collaborative workspace."
      : "KeilHQ is built for developers. Track prerequisites, prevent unfinished tickets from sliding by, and sync code logs directly into task cards.";

  // 3. Stats & Testimonial
  const stats = isStartups
    ? [
        { value: "45%", desc: "of YC companies build with KeilHQ" },
        { value: "66%", desc: "of the top AI startups use KeilHQ" },
      ]
    : isAgencies
      ? [
          { value: "4.8x", desc: "increase in client satisfaction ratings" },
          { value: "35%", desc: "reduction in time spent preparing reports" },
        ]
      : [
          { value: "99.9%", desc: "sprint completion accuracy rate" },
          { value: "22h", desc: "saved per dev per month on status meetings" },
        ];

  const quoteLogo = isStartups ? "ramp" : isAgencies ? "retool" : "sentry";
  const quoteText = content.withKeilhq.quote;
  const quoteAuthor = content.withKeilhq.attribution;

  // 4. Partner Program Details
  const programTitle = isStartups
    ? "Get started for free with the KeilHQ Startup Program"
    : isAgencies
      ? "Get started for free with the KeilHQ Agency Partner Program"
      : "Get started for free with the KeilHQ Dev Teams Accelerator";

  const programDesc = isStartups
    ? "Startups affiliated with a KeilHQ partner can upgrade to KeilHQ's Basic or Business plans and get up to 6 months off."
    : isAgencies
      ? "Agencies affiliated with a KeilHQ partner can access flexible volume pricing, shared client portals, and get up to 6 months off."
      : "Engineering groups and open source teams can unlock full REST API access, developer sandbox keys, and get up to 6 months off.";

  const programPartners = isStartups
    ? ["Y Combinator", "Accel", "Sequoia", "Index Ventures", "Stripe", "Entrepreneur First", "AI Grant", "Creandum"]
    : isAgencies
      ? ["Figma", "Webflow", "Vercel", "Slack", "Notion", "GitHub", "Retool", "Linear"]
      : ["GitHub", "Vercel", "Sentry", "Netlify", "DigitalOcean", "GitLab", "Datadog", "Docker"];

  // 5. FAQs
  const faqs = isStartups
    ? [
        {
          q: "What is the KeilHQ Startup Program?",
          a: "The program offers up to 6 months of KeilHQ's premium plans for free to early-stage startups backed by our partners.",
        },
        {
          q: "Who is eligible?",
          a: "Startups that are early-stage (generally under 50 employees) and associated with our VC/accelerator partners.",
        },
        {
          q: "How can I apply?",
          a: "Simply fill out our program application form with your startup details and investor verification token.",
        },
        {
          q: "Is my investor a member of the KeilHQ Startup Program?",
          a: "We partner with leading VCs like Accel, Sequoia, Index, YC, and Stripe. Check with your partner or contact our team.",
        },
      ]
    : isAgencies
      ? [
          {
            q: "How does KeilHQ isolate client spaces?",
            a: "Every workspace space has granular role-based permissions, allowing you to invite clients to specific spaces without exposing other clients' details.",
          },
          {
            q: "Can clients access our calendar sync?",
            a: "Yes, you can share specific read-only calendar events or meeting transcripts with clients via secure public links.",
          },
          {
            q: "Do we get bulk seat discounts?",
            a: "Yes, our agency tier offers flexible volume pricing that adjusts dynamically as you add or remove contractors.",
          },
        ]
      : [
          {
            q: "How does blocker validation work?",
            a: "It prevents tasks from being marked as 'Done' until all their defined pre-requisites are completed, eliminating broken builds.",
          },
          {
            q: "Does it integrate with GitHub and GitLab?",
            a: "Yes, AI agents can read PR diffs, link pull requests to tasks, and close issues automatically on merge.",
          },
          {
            q: "Are there audit logs?",
            a: "Yes, every action, status change, and description edit is tracked and available to export for compliance reports.",
          },
        ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col pt-32 pb-24">
        {/* ─── HERO SECTION ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 text-center flex flex-col items-center gap-6">
          <div className="size-16 rounded-full border border-border/40 bg-card/60 flex items-center justify-center mb-2">
            <div className="w-10 h-10 border border-border/60 rounded-full flex items-center justify-center font-mono text-xs text-muted-foreground">
              {content.id.charAt(0).toUpperCase()}
            </div>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground max-w-4xl">
            {isStartups ? "KeilHQ for startups" : isAgencies ? "KeilHQ for agencies" : "KeilHQ for dev teams"}
          </h1>
          <p className="text-[16px] text-muted-foreground max-w-[55ch] leading-relaxed">
            {isStartups
              ? "Discover the work assistant that startups love to use. Get up to 6 months free with the KeilHQ Startup Program."
              : isAgencies
                ? "Establish client trust. Manage multiple retainers and project sprints with shared client docs."
                : "Sprint planning with context. Enforce hard blocker validation and track real-time delivery."}
          </p>
          <div className="mt-4">
            <Link
              href="https://app.Keilhq.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full text-[13px] font-semibold transition-colors duration-150 inline-flex items-center gap-1.5"
            >
              {ctaLabel}
            </Link>
          </div>

          {/* Interactive Mockup */}
          <div className="w-full mt-16 border border-border/40 bg-card/60 rounded-lg overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col gap-6 text-left font-sans text-xs">
            {isStartups && (
              <>
                <div className="flex items-center justify-between pb-4 border-b border-border/40">
                  <span className="text-sm font-semibold text-foreground">Kanban Sprint Board</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Active</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Backlog */}
                  <div className="p-4 bg-secondary/30 border border-border/40 rounded-sm flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">Backlog</span>
                    <div className="p-2.5 bg-card border border-border/40 rounded-sm">
                      <span className="font-semibold text-foreground">Spec out GPT Integration</span>
                      <span className="block text-[10px] text-muted-foreground mt-1">Feature Ideas</span>
                    </div>
                    <div className="p-2.5 bg-card border border-border/40 rounded-sm">
                      <span className="font-semibold text-foreground">Resolve UI inconsistencies</span>
                      <span className="block text-[10px] text-muted-foreground mt-1">Mobile</span>
                    </div>
                  </div>
                  {/* Todo */}
                  <div className="p-4 bg-secondary/30 border border-border/40 rounded-sm flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">Todo</span>
                    <div className="p-2.5 bg-card border border-border/40 rounded-sm">
                      <span className="font-semibold text-foreground">Optimize load times</span>
                      <span className="block text-[10px] text-muted-foreground mt-1">Performance</span>
                    </div>
                    <div className="p-2.5 bg-card border border-border/40 rounded-sm">
                      <span className="font-semibold text-foreground">Prepare ProductHunt launch</span>
                      <span className="block text-[10px] text-muted-foreground mt-1">Marketing</span>
                    </div>
                  </div>
                  {/* In Progress & Progress Card Overlay */}
                  <div className="p-4 bg-secondary/30 border border-border/40 rounded-sm flex flex-col gap-2 relative">
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">In Progress</span>
                    <div className="p-2.5 bg-card border border-border/40 rounded-sm">
                      <span className="font-semibold text-foreground">Submit iOS app for review</span>
                      <span className="block text-[10px] text-muted-foreground mt-1">Mobile</span>
                    </div>
                    {/* Floating Progress panel */}
                    <div className="absolute inset-x-2 bottom-2 p-3 bg-zinc-950 border border-white/[0.08] rounded-sm shadow-xl flex flex-col gap-1.5 font-mono text-[9px] text-zinc-500">
                      <span className="text-[10px] font-bold text-white font-sans">Sprint Progress</span>
                      <div className="flex justify-between">
                        <span>Scope: 45</span>
                        <span>Started: 6 · 13%</span>
                        <span>Completed: 31 · 69%</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-emerald-500 h-full w-[69%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isAgencies && (
              <>
                <div className="flex items-center justify-between pb-4 border-b border-border/40">
                  <span className="text-sm font-semibold text-foreground">Client Retainer Hub</span>
                  <span className="text-[10px] bg-indigo-500/10 text-indigo-500 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Multi-Tenant</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-secondary/30 border border-border/40 rounded-sm flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">Active Retainers</span>
                    {["Acme Corp — Design retainer", "Globex Inc — Webflow dev", "Initech — Brand sprint"].map((client) => (
                      <div key={client} className="p-2.5 bg-card border border-border/40 rounded-sm flex items-center justify-between">
                        <span className="font-semibold text-foreground">{client}</span>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded-xs">On Track</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-secondary/30 border border-border/40 rounded-sm flex flex-col gap-3 relative">
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">Weekly Status summary</span>
                    <div className="p-3 bg-zinc-950 border border-white/[0.08] rounded-sm text-[10px] text-zinc-400 flex flex-col gap-2 font-mono">
                      <span className="text-white font-sans font-bold">AI Status Generator</span>
                      <p className="leading-relaxed">
                        &ldquo;Delivered 3 prototypes for Acme Corp, resolved 5 tickets for Globex, and updated Initech specifications.&rdquo;
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
                        <span className="text-[9px]">Generate PDF report</span>
                        <span className="text-[9px] bg-zinc-900 text-zinc-500 px-1.5 py-0.5 rounded-xs">Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isDevTeams && (
              <>
                <div className="flex items-center justify-between pb-4 border-b border-border/40">
                  <span className="text-sm font-semibold text-foreground">Sprint Planning & Blocker Matrix</span>
                  <span className="text-[10px] bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded-sm font-mono uppercase font-bold tracking-wide">Validation active</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-secondary/30 border border-border/40 rounded-sm flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">Blocker Verification</span>
                    <div className="p-3 bg-card border border-border/40 rounded-sm flex flex-col gap-2 relative">
                      <span className="font-semibold text-foreground">Deploy staging container cluster</span>
                      <div className="flex items-center gap-1.5 text-[9px] text-rose-500">
                        <span>Locked until schema migration completes</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/30 border border-border/40 rounded-sm flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">Sentry Alert Integration</span>
                    <div className="p-3 bg-zinc-950 border border-white/[0.08] rounded-sm text-[10px] text-zinc-400 flex flex-col gap-1.5 font-mono">
                      <span className="text-rose-500 font-sans font-bold">Unresolved Sentry Issue</span>
                      <span className="text-white font-semibold">TypeError: Cannot read property 'map' of undefined</span>
                      <p className="text-[9px] text-zinc-500">Triggered in app/solutions/page.tsx:63</p>
                      <span className="text-[9px] bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded-xs w-fit">High Impact</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ─── LOGOS STRIP ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-20 border-b border-border/40">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-45 grayscale">
            {partnerLogos.map((logo) => (
              <span key={logo} className="text-sm font-semibold tracking-wider font-mono text-muted-foreground">
                {logo}
              </span>
            ))}
          </div>
        </section>

        {/* ─── WHY WE LOVE SECTION ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6 text-left">
            <span className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-wider">
              {isStartups ? "Why startups love KeilHQ" : isAgencies ? "Why agencies love KeilHQ" : "Why dev teams love KeilHQ"}
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] text-foreground">
              {middleHeading}
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-left">
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[45ch]">
              {middleDesc}
            </p>
          </div>
        </section>

        {/* ─── STATS & TESTIMONIAL SECTION ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-24 border-t border-border/40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left stats */}
          <div className="grid grid-cols-2 gap-6 text-left">
            {stats.map((stat) => (
              <div key={stat.desc} className="p-6 rounded-lg border border-border/40 bg-card/25 flex flex-col gap-2 shadow-xs">
                <span className="font-mono text-4xl font-bold text-foreground">{stat.value}</span>
                <span className="text-[12.5px] text-muted-foreground">{stat.desc}</span>
              </div>
            ))}
          </div>

          {/* Right testimonial */}
          <div className="p-8 rounded-lg border border-border/40 bg-card/30 flex flex-col gap-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 font-mono">{quoteLogo}</span>
            <blockquote className="text-[14px] text-muted-foreground leading-relaxed italic">
              &ldquo;{quoteText}&rdquo;
            </blockquote>
            <span className="text-[11px] text-foreground font-semibold">— {quoteAuthor}</span>
          </div>
        </section>

        {/* ─── PARTNER PROGRAM SECTION ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-24 border-t border-border/40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6 text-left">
            <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider font-mono">Accelerator Program</span>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.25rem)] font-semibold leading-[1.08] text-foreground tracking-tight">
              {programTitle}
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">
              {programDesc}
            </p>

            {/* Investor Partner grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4 opacity-50 grayscale">
              {programPartners.map((partner) => (
                <div key={partner} className="p-2 border border-border/40 rounded-sm text-center font-mono text-[9px]">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Six Months Free banner */}
          <div className="w-full h-full bg-zinc-950 border border-white/[0.08] rounded-lg p-12 flex flex-col justify-center items-center gap-2 text-center select-none shadow-2xl relative overflow-hidden min-h-[300px]">
            <span className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase font-mono">Special Promotion</span>
            <h3 className="font-display text-4xl sm:text-5xl font-semibold text-white tracking-tight leading-none mt-2">
              Six months free
            </h3>
            <p className="text-zinc-500 text-xs mt-1 max-w-[28ch]">
              Unlock premium capabilities to supercharge your EPD team workflows.
            </p>
          </div>
        </section>

        {/* ─── FAQs ACCORDION SECTION ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-24 border-t border-border/40 flex flex-col gap-12 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider font-mono">FAQs</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] text-foreground tracking-tight">
              Questions and answers
            </h2>
          </div>

          <div className="flex flex-col border-t border-border/40">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border/40 py-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold py-2 text-foreground hover:text-muted-foreground transition-colors cursor-pointer bg-transparent border-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="pl-1 pr-6 py-2 text-[13px] text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
