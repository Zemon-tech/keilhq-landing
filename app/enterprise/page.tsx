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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24 pb-24 px-6 lg:px-12">
        <div className="max-w-8xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Enterprise</span>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                KielHQ for large teams and organizations
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Enterprise-grade security, compliance, and support — without the enterprise complexity. Get everything in Pro, plus the controls your IT and security teams require.
              </p>
              <div className="flex flex-col gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: contact form */}
            <div className="bg-card border border-border rounded-sm p-8 flex flex-col gap-5 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">Talk to our team</h2>
              <p className="text-sm text-muted-foreground">Tell us about your team and we&apos;ll get back to you within one business day.</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Full name", type: "text", placeholder: "Jane Smith" },
                  { label: "Work email", type: "email", placeholder: "jane@company.com" },
                  { label: "Company", type: "text", placeholder: "Acme Corp" },
                  { label: "Team size", type: "text", placeholder: "e.g. 50–200" },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground/90">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2.5 rounded-sm border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                ))}
                <Link
                  href="#"
                  className="w-full text-center py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-colors mt-2"
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
