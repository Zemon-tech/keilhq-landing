"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  Check,
  ArrowRight,
  Shield,
  Lock,
  Database,
  Users,
  Zap,
  FileText,
  Settings,
  Clock,
  Server,
  Key,
} from "lucide-react";

const enterpriseFeatures = [
  {
    icon: Key,
    title: "SSO / SAML Authentication",
    desc: "Federate identity through Okta, Azure AD, or any SAML 2.0 provider. One login, full control.",
  },
  {
    icon: Shield,
    title: "Advanced RBAC",
    desc: "Role-based access control with custom permission sets. Lock down who sees and edits what.",
  },
  {
    icon: Users,
    title: "Dedicated Success Manager",
    desc: "A named human on your account from day one. Not a queue \u2014 a person who knows your deployment.",
  },
  {
    icon: Zap,
    title: "99.9% Uptime SLA",
    desc: "Contractual uptime guarantees backed by our Cloudflare + multi-region infrastructure.",
  },
  {
    icon: Settings,
    title: "Custom Integrations & API",
    desc: "Full REST API access with enterprise rate limits. Connect to internal tooling with custom webhooks.",
  },
  {
    icon: FileText,
    title: "Audit Logs & Compliance Exports",
    desc: "Export structured audit trails for SOC 2, ISO 27001, and internal security reviews.",
  },
  {
    icon: Clock,
    title: "Priority Support SLA",
    desc: "Guaranteed response windows. Critical issues reach our engineering team in under 2 hours.",
  },
  {
    icon: Lock,
    title: "Custom Data Retention",
    desc: "Define retention windows per workspace. Set automated deletion schedules that meet your legal requirements.",
  },
  {
    icon: Server,
    title: "On-Premise Deployment",
    desc: "Run the full KeilHQ stack in your own cloud or on-premise. Air-gapped environments supported.",
  },
  {
    icon: Database,
    title: "Volume Pricing",
    desc: "Custom per-seat pricing that scales as you grow. Bundled annual contracts with multi-year discounts.",
  },
];

const testimonials = [
  {
    quote:
      "We migrated 300 engineers off Jira and Confluence in six weeks. The SSO rollout was frictionless and the dedicated team made our security review fast.",
    author: "Head of Engineering",
    company: "Series B fintech, 420 seats",
  },
  {
    quote:
      "KeilHQ gave us a single audit trail across tasks, docs, and meetings. Our compliance team signed off in one review cycle instead of three.",
    author: "VP of Operations",
    company: "Healthcare SaaS, 180 seats",
  },
  {
    quote:
      "On-premise deployment was non-negotiable for us. The team deployed alongside us and we were in production within two weeks.",
    author: "CISO",
    company: "Defense contractor, 60 seats",
  },
];

const trustItems = [
  "SOC 2 Type II",
  "GDPR Compliant",
  "ISO 27001",
  "HIPAA Ready",
  "99.9% SLA",
];

export default function EnterprisePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1">

        {/* ─── HERO ─── */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">

            {/* Trust strip */}
            <div className="flex items-center gap-4 flex-wrap mb-10">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-white/8 px-3 py-1 rounded-sm"
                >
                  <Check className="size-3 text-emerald-500 shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left copy */}
              <div className="flex flex-col gap-7">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-900 dark:text-white leading-tight"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  KeilHQ for large teams and organizations
                </h1>
                <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
                  Enterprise-grade security, compliance, and support \u2014 without the complexity. Everything in Pro, plus the controls your IT and security teams require.
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity group active:scale-[0.98]"
                  >
                    Talk to Sales
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/demo"
                    className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Book a demo instead →
                  </Link>
                </div>
              </div>

              {/* Right stats */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "300+", label: "Enterprise deployments" },
                  { value: "99.9%", label: "Contractual uptime" },
                  { value: "2 hrs", label: "Critical support SLA" },
                  { value: "6 wks", label: "Avg. enterprise onboarding" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/30 dark:bg-white/[0.02] flex flex-col gap-1"
                  >
                    <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        <div className="h-px bg-zinc-200/60 dark:bg-white/5" />

        {/* ─── FEATURES GRID ─── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white mb-10">
              Built for security, scale, and compliance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {enterpriseFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/20 dark:bg-white/[0.015] flex flex-col gap-3 transition-colors duration-200 hover:bg-zinc-100/40 dark:hover:bg-white/[0.025]"
                >
                  <feature.icon className="size-5 text-zinc-600 dark:text-zinc-300 shrink-0" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{feature.title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-zinc-200/60 dark:bg-white/5" />

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white mb-10">
              What enterprise teams say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="p-7 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/20 dark:bg-white/[0.015] flex flex-col gap-4"
                >
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 border-t border-zinc-200/60 dark:border-white/5">
                    <p className="text-xs font-semibold text-zinc-900 dark:text-white">{t.author}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-zinc-200/60 dark:bg-white/5" />

        {/* ─── CONTACT FORM ─── */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-900 dark:text-white leading-tight">
                  Ready to talk?
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                  Tell us about your team and requirements. We&apos;ll get back within one business day with a tailored plan, pricing, and a demo slot.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "No-pressure walkthrough of enterprise features",
                    "Custom pricing based on your seat count",
                    "Security review packet available on request",
                    "Pilot program options for large teams",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                      <Check className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right form */}
              <div className="bg-zinc-50/30 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/5 rounded-sm p-8 flex flex-col gap-5 shadow-sm">
                {formStatus === "sent" ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                    <div className="size-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Check className="size-5 text-emerald-500" />
                    </div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">Message sent</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">We&apos;ll be in touch within one business day.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Talk to our team</h3>
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "Full name", type: "text", placeholder: "Jane Smith", id: "enterprise-name" },
                        { label: "Work email", type: "email", placeholder: "jane@company.com", id: "enterprise-email" },
                        { label: "Company", type: "text", placeholder: "Acme Corp", id: "enterprise-company" },
                        { label: "Team size", type: "text", placeholder: "e.g. 50–200 people", id: "enterprise-size" },
                      ].map((field) => (
                        <div key={field.label} className="flex flex-col gap-1.5">
                          <label htmlFor={field.id} className="text-xs font-semibold text-zinc-900 dark:text-white">
                            {field.label}
                          </label>
                          <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full px-3 py-2.5 rounded-sm border border-zinc-200/80 dark:border-white/8 bg-white dark:bg-white/[0.03] text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      ))}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="enterprise-message" className="text-xs font-semibold text-zinc-900 dark:text-white">
                          Tell us about your use case <span className="text-zinc-400 font-normal">(optional)</span>
                        </label>
                        <textarea
                          id="enterprise-message"
                          placeholder="What tools are you replacing? Any compliance requirements?"
                          rows={3}
                          className="w-full px-3 py-2.5 rounded-sm border border-zinc-200/80 dark:border-white/8 bg-white dark:bg-white/[0.03] text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        />
                      </div>
                      <button
                        onClick={() => setFormStatus("sent")}
                        className="w-full py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity mt-2 cursor-pointer active:scale-[0.98]"
                      >
                        Request a Demo
                      </button>
                    </div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center">
                      No commitment required. We respond within one business day.
                    </p>
                  </>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
