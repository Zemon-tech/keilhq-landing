import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started — no credit card required.",
    features: [
      "Up to 3 spaces",
      "Unlimited personal tasks",
      "Rich-text docs (Motion)",
      "Team chat",
      "KielHQ AI (limited)",
      "Google Calendar sync",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per seat / month",
    description: "For growing teams that need the full stack without the full price.",
    features: [
      "Unlimited spaces",
      "Unlimited tasks & docs",
      "Meeting recordings & transcription",
      "KielHQ AI (unlimited)",
      "Task dependencies & Gantt view",
      "Public shareable links",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large teams that need SSO, advanced permissions, and dedicated support.",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "Advanced role-based access",
      "Dedicated success manager",
      "SLA & uptime guarantee",
      "Custom integrations",
      "Audit logs",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-8xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Pricing</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-3">
              One plan. Everything included.
            </h1>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              Teams switching to KielHQ save $40–$70 per seat every month versus running a full tool stack.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-sm border p-8 gap-6 shadow-sm ${
                  plan.highlight
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.name}
                  </span>
                  <div className="flex items-end gap-1.5 mt-2">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className={`text-sm pb-1 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm mt-2 leading-relaxed ${plan.highlight ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`size-4 mt-0.5 shrink-0 ${plan.highlight ? "text-emerald-400" : "text-emerald-500"}`} />
                      <span className={plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={`w-full text-center py-2.5 rounded-sm text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-primary-foreground text-primary hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison note */}
          <p className="text-center text-sm text-muted-foreground mt-12">
            All plans include a free trial. No credit card required to start.{" "}
            <Link href="/enterprise" className="text-foreground underline underline-offset-2 hover:opacity-80 transition-colors">
              Need enterprise pricing?
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
