import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24 pb-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Legal</span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">Cookie Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: May 2026</p>
          </div>
          {[
            { title: "What are cookies?", body: "Cookies are small text files stored on your device when you visit a website. They help us keep you logged in, remember your preferences, and understand how you use KielHQ." },
            { title: "Essential cookies", body: "These are required for KielHQ to function. They handle authentication sessions and security tokens. You cannot opt out of essential cookies while using the product." },
            { title: "Analytics cookies", body: "We use privacy-respecting analytics to understand how teams use KielHQ so we can improve it. These cookies are optional and can be disabled in your browser settings." },
            { title: "Third-party cookies", body: "Some integrations (e.g. Google Calendar OAuth) may set their own cookies. We do not control third-party cookies and recommend reviewing their respective privacy policies." },
            { title: "Managing cookies", body: "You can clear or block cookies in your browser settings at any time. Note that disabling essential cookies will prevent you from staying logged in to KielHQ." },
            { title: "Contact", body: "Questions? Email privacy@kielhq.com." },
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
