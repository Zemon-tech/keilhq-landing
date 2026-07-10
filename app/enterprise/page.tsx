"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
    desc: "A named human on your account from day one. Not a queue — a person who knows your deployment.",
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
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ─── HERO ─── */}
        <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl w-full mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left copy */}
              <div className="flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit mb-2">
                  <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
                    Enterprise
                  </span>
                </div>

                <h1
                  className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.08] text-foreground tracking-tight"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  KeilHQ for large teams and organizations
                </h1>

                <p className="text-[15px] font-medium text-muted-foreground leading-relaxed max-w-lg mt-2 mb-4">
                  Enterprise-grade security, compliance, and support — without the complexity. Everything in Pro, plus the controls your IT and security teams require.
                </p>

                {/* Trust strip */}
                <div className="flex items-center gap-3 flex-wrap mb-4">
                  {trustItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground border border-border/50 px-3 py-1 rounded-full bg-secondary/40"
                    >
                      <Check className="size-3 text-emerald-500 shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-2">
                  <Button asChild className="h-10 px-6 rounded-sm">
                    <Link href="#contact" className="group">
                      Talk to Sales
                      <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                  <Link
                    href="/demo"
                    className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Book a demo instead →
                  </Link>
                </div>
              </div>

              {/* Right stats */}
              <div className="grid grid-cols-2 gap-5 mt-4 lg:mt-0">
                {[
                  { value: "300+", label: "Enterprise deployments" },
                  { value: "99.9%", label: "Contractual uptime" },
                  { value: "2 hrs", label: "Critical support SLA" },
                  { value: "6 wks", label: "Avg. enterprise onboarding" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-lg border border-border/50 bg-secondary/20 flex flex-col gap-1 shadow-sm"
                  >
                    <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-[13px] font-medium text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── FEATURES GRID ─── */}
        <section className="py-12 lg:py-16 px-5 sm:px-8 lg:px-12 border-t border-border/50">
          <div className="max-w-7xl w-full mx-auto">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] text-foreground tracking-tight mb-12">
              Built for security, scale, and compliance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 sm:p-8 rounded-lg border border-border/50 bg-secondary/20 flex flex-col gap-3 shadow-sm transition-colors duration-300"
                >
                  <feature.icon className="size-5 text-foreground shrink-0" />
                  <h3 className="text-[15px] font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-12 lg:py-16 px-5 sm:px-8 lg:px-12 border-t border-border/50">
          <div className="max-w-7xl w-full mx-auto">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] text-foreground tracking-tight mb-12">
              What enterprise teams say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="p-8 rounded-lg border border-border/50 bg-secondary/20 flex flex-col gap-4 shadow-sm"
                >
                  <p className="text-[14px] text-muted-foreground leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-auto pt-5 border-t border-border/50">
                    <p className="text-[13px] font-semibold text-foreground">{t.author}</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT FORM ─── */}
        <section id="contact" className="py-12 lg:py-16 px-5 sm:px-8 lg:px-12 border-t border-border/50">
          <div className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div className="flex flex-col gap-6">
                <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-semibold leading-[1.08] text-foreground tracking-tight">
                  Ready to talk?
                </h2>
                <p className="text-[15px] font-medium text-muted-foreground leading-relaxed max-w-md">
                  Tell us about your team and requirements. We'll get back within one business day with a tailored plan, pricing, and a demo slot.
                </p>
                <ul className="flex flex-col gap-3 mt-4">
                  {[
                    "No-pressure walkthrough of enterprise features",
                    "Custom pricing based on your seat count",
                    "Security review packet available on request",
                    "Pilot program options for large teams",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] font-medium text-foreground">
                      <div className="size-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="size-3" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right form */}
              <div className="bg-secondary/20 border border-border/50 rounded-lg p-6 sm:p-8 flex flex-col gap-6 shadow-sm w-full">
                {formStatus === "sent" ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                    <div className="size-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Check className="size-6 text-emerald-500" />
                    </div>
                    <p className="text-[18px] font-semibold text-foreground">Message sent</p>
                    <p className="text-[14px] text-muted-foreground">We'll be in touch within one business day.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-[16px] font-semibold text-foreground">Talk to our team</h3>
                    <form className="flex flex-col gap-4">
                      {[
                        { label: "Full name", type: "text", placeholder: "Jane Smith", id: "enterprise-name" },
                        { label: "Work email", type: "email", placeholder: "jane@company.com", id: "enterprise-email" },
                        { label: "Company", type: "text", placeholder: "Acme Corp", id: "enterprise-company" },
                        { label: "Team size", type: "text", placeholder: "e.g. 50–200 people", id: "enterprise-size" },
                      ].map((field) => (
                        <div key={field.label} className="flex flex-col gap-2">
                          <Label htmlFor={field.id} className="text-sm font-semibold text-foreground">
                            {field.label}
                          </Label>
                          <Input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            className="bg-background/50"
                          />
                        </div>
                      ))}

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="enterprise-message" className="text-sm font-semibold text-foreground">
                          Tell us about your use case <span className="text-muted-foreground font-normal">(optional)</span>
                        </Label>
                        <Textarea
                          id="enterprise-message"
                          placeholder="What tools are you replacing? Any compliance requirements?"
                          className="min-h-[100px] bg-background/50 resize-y"
                        />
                      </div>

                      <Button
                        type="button"
                        onClick={() => setFormStatus("sent")}
                        className="w-full mt-2"
                      >
                        Request a Demo
                      </Button>
                    </form>
                    <p className="text-[12px] text-muted-foreground text-center mt-2">
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
