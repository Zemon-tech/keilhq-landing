import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24 pb-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Legal</span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: May 2026</p>
          </div>
          {[
            { title: "What we collect", body: "We collect information you provide directly (name, email, workspace data) and usage data to improve the product. We do not sell your data to third parties." },
            { title: "How we use your data", body: "Your data is used to provide and improve KielHQ, send product updates you opt into, and power KielHQ AI features. AI queries are processed by Google Gemini and are not used to train external models." },
            { title: "Data storage", body: "Data is stored on Supabase (PostgreSQL) hosted in the EU and US. Meeting recordings are stored on AWS S3 with encryption at rest. All data is encrypted in transit via TLS." },
            { title: "Your rights", body: "You can export or delete your data at any time from account settings. For GDPR requests, email privacy@kielhq.com. We respond within 30 days." },
            { title: "Cookies", body: "We use essential cookies for authentication and optional analytics cookies. You can manage cookie preferences in your browser or via our cookie settings page." },
            { title: "Contact", body: "Questions about this policy? Email privacy@kielhq.com." },
          ].map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h2 className="text-base font-semibold text-foreground">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
