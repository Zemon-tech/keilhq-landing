"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Check,
  Inbox,
  LayoutGrid,
  FileCode2,
} from "lucide-react";

export default function EnterprisePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  return (
    <main className="flex-1 flex flex-col pt-32 pb-24">
        {/* ─── HERO SECTION ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground max-w-4xl">
            An AI product system for modern enterprises
          </h1>
          <p className="text-[16px] text-muted-foreground max-w-[55ch] leading-relaxed">
            KeilHQ gives teams and agents shared context for planning and building products at scale.
          </p>
          <div className="mt-4">
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full text-[13px] font-semibold transition-colors duration-150 inline-flex items-center gap-1.5"
            >
              Talk to sales
            </Link>
          </div>

          {/* Initiatives Mockup */}
          <div className="w-full mt-16 border border-border/40 bg-card/60 rounded-lg overflow-hidden shadow-2xl flex text-left font-sans text-xs">
            {/* Sidebar */}
            <div className="w-[180px] shrink-0 border-r border-border/40 p-4 flex flex-col gap-5 select-none bg-secondary/40">
              <div className="flex items-center gap-2 px-1">
                <div className="size-4.5 rounded bg-foreground/10 flex items-center justify-center font-bold text-[10px] text-foreground">
                  K
                </div>
                <span className="font-semibold text-foreground">KeilHQ</span>
              </div>

              <div className="flex flex-col gap-1 text-muted-foreground">
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-accent/40 rounded-sm cursor-pointer">
                  <Inbox className="size-3.5" />
                  <span>Inbox</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-accent/40 rounded-sm cursor-pointer">
                  <LayoutGrid className="size-3.5" />
                  <span>My issues</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-accent/40 rounded-sm cursor-pointer">
                  <FileCode2 className="size-3.5" />
                  <span>Reviews</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <span className="text-[10px] font-bold text-muted-foreground/60 px-2 uppercase tracking-wider">Workspace</span>
                <div className="flex items-center gap-2 px-2 py-1 bg-accent/60 text-foreground rounded-sm">
                  <span>Initiatives</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-accent/40 text-muted-foreground rounded-sm cursor-pointer">
                  <span>Projects</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <span className="text-sm font-semibold text-foreground">Initiatives</span>
                <div className="flex items-center gap-1.5 bg-accent/40 border border-border/40 px-2 py-0.5 rounded-sm text-[10px] text-muted-foreground">
                  <span>Active</span>
                  <span>•</span>
                  <span>Planned</span>
                </div>
              </div>

              {/* Initiatives Table */}
              <div className="flex flex-col gap-2 font-mono text-[11px] text-muted-foreground">
                {/* Headers */}
                <div className="grid grid-cols-12 gap-2 pb-2 text-[10px] font-bold text-muted-foreground/60 uppercase border-b border-border/20">
                  <div className="col-span-5 font-sans">Name</div>
                  <div className="col-span-2">Target</div>
                  <div className="col-span-2">Health</div>
                  <div className="col-span-3">Projects</div>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-12 gap-2 py-2.5 items-center border-b border-border/20">
                  <div className="col-span-5 font-sans text-foreground font-semibold flex items-center gap-2">
                    <div className="size-2 rounded-full bg-emerald-500" />
                    Core product
                  </div>
                  <div className="col-span-2">2026</div>
                  <div className="col-span-2 text-emerald-400">On track</div>
                  <div className="col-span-3 flex items-center gap-2">
                    <span>23 / 102</span>
                    <span className="text-[9px] bg-secondary text-muted-foreground px-1 py-0.2 rounded-xs">83%</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 gap-2 py-2.5 items-center border-b border-border/20">
                  <div className="col-span-5 font-sans text-foreground font-semibold flex items-center gap-2">
                    <div className="size-2 rounded-full bg-emerald-500" />
                    Infra stability
                  </div>
                  <div className="col-span-2">2026</div>
                  <div className="col-span-2 text-emerald-400">On track</div>
                  <div className="col-span-3 flex items-center gap-2">
                    <span>41 / 193</span>
                    <span className="text-[9px] bg-secondary text-muted-foreground px-1 py-0.2 rounded-xs">79%</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-12 gap-2 py-2.5 items-center">
                  <div className="col-span-5 font-sans text-foreground font-semibold flex items-center gap-2">
                    <div className="size-2 rounded-full bg-amber-500 animate-pulse" />
                    Autonomous systems
                  </div>
                  <div className="col-span-2">2026</div>
                  <div className="col-span-2 text-amber-550">At risk</div>
                  <div className="col-span-3 flex items-center gap-2">
                    <span>51 / 205</span>
                    <span className="text-[9px] bg-secondary text-muted-foreground px-1 py-0.2 rounded-xs">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── LOGOS STRIP ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-20 border-b border-border/40">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-45 grayscale">
            {["OpenAI", "Coinbase", "Oscar", "Ramp", "Opendoor", "Cash App", "Scale"].map((logo) => (
              <span key={logo} className="text-sm font-semibold tracking-wider font-mono text-muted-foreground">
                {logo}
              </span>
            ))}
          </div>
        </section>

        {/* ─── AI CHANGE SECTION ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6 text-left">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] text-foreground">
              AI is changing how products get built
            </h2>
          </div>

          <div className="flex flex-col gap-10 text-left">
            <div className="flex flex-col gap-4 text-[15px] text-muted-foreground leading-relaxed max-w-[45ch]">
              <p>
                Every engineering and product team is adopting AI. But traditional issue trackers weren't built for this shift, leaving work disconnected and hard to align.
              </p>
              <p>
                KeilHQ is purpose-built for this new reality. It provides a shared product development system, where teams and agents work from the same context, priorities, and structure.
              </p>
            </div>

            {/* Stats Block */}
            <div className="flex flex-col gap-6 border-t border-border/40 pt-8">
              {[
                { value: "78%", label: "KeilHQ enterprise workspaces have adopted agents" },
                { value: "28%", label: "Issues authored by AI agents" },
                { value: "5.0x", label: "Growth in agent-completed work" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-6">
                  <span className="font-mono text-3xl font-bold text-foreground shrink-0 w-20">{stat.value}</span>
                  <span className="text-[13px] text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DIAGRAM SECTION (Why switch) ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-24 border-t border-border/40 flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] text-foreground">
                Why enterprise teams switch to KeilHQ
              </h2>
            </div>
            <div className="text-left">
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[45ch]">
                KeilHQ replaces legacy issue trackers with a fast, purpose-built system designed for AI-native product development.
              </p>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="w-full border border-border/40 bg-card/30 rounded-lg p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative select-none font-mono text-[11px] text-muted-foreground">
            {/* Input Sources */}
            <div className="flex flex-col gap-2 p-4 bg-secondary/20 border border-border/40 rounded-sm w-full md:w-auto">
              <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">Inputs</span>
              <span>Customer requests</span>
              <span>Bug reports</span>
              <span>Feedback</span>
            </div>

            <div className="text-foreground font-sans text-lg">⇆</div>

            {/* Outer Box: KeilHQ */}
            <div className="flex-1 border border-border/40 bg-card/60 rounded-md p-6 flex flex-col gap-6 w-full">
              <div className="flex justify-between items-center pb-2 border-b border-border/40">
                <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">KeilHQ Environment</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Context */}
                <div className="p-4 bg-secondary/40 border border-border/40 rounded-sm flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">1. Context</span>
                  <div className="flex flex-col gap-1 text-[10px] text-muted-foreground/80">
                    <span>Plans & Specs</span>
                    <span>Discussions</span>
                    <span>Technical designs</span>
                    <span>Source Code</span>
                  </div>
                </div>

                {/* Rules */}
                <div className="p-4 bg-secondary/40 border border-border/40 rounded-sm flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">2. Rules</span>
                  <div className="flex flex-col gap-1 text-[10px] text-muted-foreground/80">
                    <span>Automations</span>
                    <span>Skills / Prompts</span>
                    <span>Permissions</span>
                  </div>
                </div>

                {/* Agents */}
                <div className="p-4 bg-secondary/40 border border-border/40 rounded-sm flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">3. Agents</span>
                  <div className="flex flex-col gap-1 text-[10px] text-muted-foreground/80">
                    <span>Claude / GPT</span>
                    <span>Embedded tools</span>
                    <span>Execution sandbox</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-foreground font-sans text-lg">→</div>

            {/* Product Output */}
            <div className="p-4 bg-secondary/20 border border-border/40 rounded-sm w-full md:w-auto text-center md:text-left">
              <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">Deliverable</span>
              <span className="block text-emerald-500 font-semibold mt-1">Shipped Product</span>
            </div>
          </div>

          {/* Three columns below diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">One system for teams and agents</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Customer feedback, decisions, and code all live in one place, so everyone works from the same context.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">From solo-productivity to org-level results</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                AI coding accelerates individuals. KeilHQ ensures their work is tied to team context and company priorities.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">Self-driving product operations</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Triage, routing, labeling, and updates happen automatically, so teams can focus on building.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SPEED & CONTROL SECTION (2 columns, 2 cards) ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-24 border-t border-border/40 flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] text-foreground">
                Move at the speed of AI without losing control
              </h2>
            </div>
          </div>

          {/* 2 cards in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-8 rounded-lg border border-border/40 bg-card/20 flex flex-col gap-4">
              <h3 className="text-base font-semibold text-foreground">Keep coding agents aligned with company priorities</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Assign work to Claude, Codex, Cursor, and other AI coding tools while keeping execution connected to projects and initiatives.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border/40 bg-card/20 flex flex-col gap-4">
              <h3 className="text-base font-semibold text-foreground">Measure AI execution across your organization</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Track how teams and agents work together with insights and dashboards that surface execution patterns and throughput.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FOUR BOTTOM COLUMNS (Migrate, Integrate, Secure, See it in Action) ─── */}
        <section className="max-w-[1200px] w-full mx-auto px-6 py-20 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          <div className="flex flex-col gap-3">
            <h3 className="text-[13px] font-semibold text-foreground">Migrate</h3>
            <p className="text-[12.5px] text-muted-foreground leading-relaxed">
              Switch to KeilHQ quickly with purpose-built migration tools and hands-on support from our team.
            </p>
            <Link href="/support" className="text-[12px] text-foreground font-medium hover:underline inline-flex items-center gap-1 mt-1">
              Migration guide →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[13px] font-semibold text-foreground">Integrate</h3>
            <p className="text-[12.5px] text-muted-foreground leading-relaxed">
              KeilHQ connects with AI coding agents, GitHub, Slack, Microsoft Teams, and the rest of your stack.
            </p>
            <Link href="/solutions" className="text-[12px] text-foreground font-medium hover:underline inline-flex items-center gap-1 mt-1">
              See all integrations →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[13px] font-semibold text-foreground">Secure</h3>
            <p className="text-[12.5px] text-muted-foreground leading-relaxed">
              Built with enterprise security from the ground up, including SOC2, SSO, audit logs, and granular permissions.
            </p>
            <Link href="/privacy-security" className="text-[12px] text-foreground font-medium hover:underline inline-flex items-center gap-1 mt-1">
              Security overview →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[13px] font-semibold text-foreground">See it in action</h3>
            <p className="text-[12.5px] text-muted-foreground leading-relaxed">
              See how KeilHQ helps enterprises align teams, automate operations, and execute faster with AI.
            </p>
            <Link href="/demo" className="text-[12px] text-foreground font-medium hover:underline inline-flex items-center gap-1 mt-1">
              Watch demo →
            </Link>
          </div>
        </section>

        {/* ─── CONTACT FORM SECTION ─── */}
        <section id="contact" className="max-w-[1200px] w-full mx-auto px-6 py-24 border-t border-border/40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div className="flex flex-col gap-6 text-left">
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-semibold leading-[1.08] text-foreground tracking-tight">
              Ready to talk?
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">
              Tell us about your team and requirements. We'll get back within one business day with a tailored plan, pricing, and a demo slot.
            </p>
            <ul className="flex flex-col gap-3 mt-4">
              {[
                "No-pressure walkthrough of enterprise features",
                "Custom pricing based on your seat count",
                "Security review packet available on request",
                "Pilot program options for large teams",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] font-medium text-foreground">
                  <div className="size-4.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right form card */}
          <div className="bg-card/30 border border-border/40 rounded-lg p-6 sm:p-8 flex flex-col gap-6 shadow-sm w-full text-left">
            {formStatus === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="size-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Check className="size-6 text-emerald-400" />
                </div>
                <p className="text-[18px] font-semibold text-foreground">Message sent</p>
                <p className="text-[14px] text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h3 className="text-[14px] font-semibold text-foreground">Talk to our team</h3>
                <form className="flex flex-col gap-4">
                  {[
                    { label: "Full name", type: "text", placeholder: "Jane Smith", id: "enterprise-name" },
                    { label: "Work email", type: "email", placeholder: "jane@company.com", id: "enterprise-email" },
                    { label: "Company", type: "text", placeholder: "Acme Corp", id: "enterprise-company" },
                    { label: "Team size", type: "text", placeholder: "e.g. 50–200 people", id: "enterprise-size" },
                  ].map((field) => (
                    <div key={field.label} className="flex flex-col gap-2">
                      <Label htmlFor={field.id} className="text-xs font-semibold text-foreground">
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="bg-background/50 border-border/40 focus:border-border text-foreground placeholder-muted-foreground/60 h-9 rounded-sm"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="enterprise-message" className="text-xs font-semibold text-foreground">
                      Tell us about your use case <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Textarea
                      id="enterprise-message"
                      placeholder="What tools are you replacing? Any compliance requirements?"
                      className="min-h-[100px] bg-background/50 border-border/40 focus:border-border text-foreground placeholder-muted-foreground/60 rounded-sm resize-y"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormStatus("sent")}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-sm text-xs font-semibold transition-colors mt-2"
                  >
                    Request a Demo
                  </button>
                </form>
                <p className="text-[11px] text-muted-foreground text-center mt-2">
                  No commitment required. We respond within one business day.
                </p>
              </>
            )}
          </div>
        </section>
      </main>
  );
}
