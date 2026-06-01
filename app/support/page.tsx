import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const faqs = [
  { q: "How do I import my existing tasks from Asana or Linear?", a: "Go to Settings → Import and select your tool. KielHQ supports CSV import and direct integrations with Asana, Linear, Jira, and ClickUp." },
  { q: "Can I use KielHQ without a team?", a: "Yes. Personal mode gives you full access to tasks, docs, calendar sync, and AI — no team required. You can invite people at any time." },
  { q: "How does the Google Calendar sync work?", a: "Connect via one-click OAuth in Settings → Integrations. Tasks sync as calendar events automatically. Changes in Google Calendar reflect back in KielHQ with smart conflict detection." },
  { q: "Is my data secure?", a: "KielHQ is SOC 2 compliant and GDPR-ready. Data is encrypted at rest and in transit. Meeting recordings are stored securely on AWS S3." },
  { q: "What AI model does KielHQ use?", a: "KielHQ AI is powered by Google Gemini via OpenRouter. It reads your actual tasks, workload, and sprint state before answering — not generic training data." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no lock-in. Cancel from your account settings at any time. Your data is exportable in full." },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Support</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              How can we help?
            </h1>
            <p className="text-base text-muted-foreground">We&apos;re here to make sure KielHQ works perfectly for your team.</p>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Email support", desc: "Get a response within one business day.", action: "support@kielhq.com", href: "mailto:support@kielhq.com" },
              { title: "Book a demo", desc: "See KielHQ live with a member of our team.", action: "Book a walkthrough", href: "/demo" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-sm border border-border bg-card flex flex-col gap-3 shadow-sm">
                <span className="text-sm font-semibold text-foreground">{item.title}</span>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                <Link href={item.href} className="text-sm font-semibold text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  {item.action}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-foreground">Frequently asked questions</h2>
            <div className="flex flex-col divide-y divide-border">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-5 flex flex-col gap-2">
                  <p className="text-sm font-semibold text-foreground">{faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
