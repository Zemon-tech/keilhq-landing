import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

const features = [
  "SSO / SAML authentication",
  "Advanced role-based access control",
  "Dedicated customer success manager",
  "99.9% uptime SLA",
  "Custom integrations & API access",
  "Audit logs & compliance exports",
  "Priority support with guaranteed response times",
  "Custom data retention policies",
  "On-premise deployment option",
  "Volume pricing for large teams",
];

export default function EnterprisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Enterprise</span>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
                KielHQ for large teams and organizations
              </h1>
              <p className="text-base text-zinc-500 leading-relaxed">
                Enterprise-grade security, compliance, and support — without the enterprise complexity. Get everything in Pro, plus the controls your IT and security teams require.
              </p>
              <div className="flex flex-col gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-zinc-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: contact form */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 flex flex-col gap-5">
              <h2 className="text-lg font-semibold text-zinc-950">Talk to our team</h2>
              <p className="text-sm text-zinc-500">Tell us about your team and we&apos;ll get back to you within one business day.</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Full name", type: "text", placeholder: "Jane Smith" },
                  { label: "Work email", type: "email", placeholder: "jane@company.com" },
                  { label: "Company", type: "text", placeholder: "Acme Corp" },
                  { label: "Team size", type: "text", placeholder: "e.g. 50–200" },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-700">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
                    />
                  </div>
                ))}
                <Link
                  href="#"
                  className="w-full text-center py-2.5 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors mt-2"
                >
                  Request a Demo
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
