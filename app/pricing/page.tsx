import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for freelancers and solo operators getting started.",
    features: [
      "Up to 3 spaces",
      "Unlimited personal tasks",
      "Rich-text docs (Motion)",
      "Team chat",
      "Google Calendar sync",
      "KielHQ AI (limited)",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per seat / month",
    description: "Everything a growing team needs to ship faster and stay aligned.",
    features: [
      "Unlimited spaces",
      "Unlimited tasks + dependencies",
      "Gantt + Kanban + Calendar views",
      "Meeting recordings & transcription",
      "Full KielHQ AI access (Gemini)",
      "50+ integrations",
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
    description: "Advanced security, compliance, and dedicated support for large teams.",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "SOC 2 & GDPR compliance",
      "Custom AI model routing",
      "Dedicated success manager",
      "SLA guarantees",
      "Custom integrations",
      "Audit logs",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-28 pb-0">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Pricing</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 mt-3 mb-4">
              One plan. Everything included.
            </h1>
            <p className="text-base text-zinc-500 max-w-xl mx-auto">
              Teams switching to KielHQ save $40–$70 per seat every month versus running a full tool stack.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col gap-6 border ${
                  plan.highlight
                    ? "bg-zinc-950 border-zinc-800 text-white"
                    : "bg-white border-zinc-200"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${plan.highlight ? "text-zinc-400" : "text-zinc-400"}`}>
                    {plan.name}
                  </span>
                  <div className="flex items-end gap-1.5 mt-1">
                    <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-zinc-950"}`}>{plan.price}</span>
                    <span className={`text-sm pb-1 ${plan.highlight ? "text-zinc-400" : "text-zinc-400"}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm mt-2 leading-relaxed ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`size-4 mt-0.5 shrink-0 ${plan.highlight ? "text-emerald-400" : "text-emerald-500"}`} />
                      <span className={plan.highlight ? "text-zinc-300" : "text-zinc-600"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`w-full text-center py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-white text-zinc-950 hover:bg-zinc-100"
                      : "bg-zinc-950 text-white hover:bg-zinc-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Comparison note */}
          <div className="text-center pb-20 border-t border-zinc-100 pt-12">
            <p className="text-sm text-zinc-500">
              All plans include a free trial. No credit card required to start.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
