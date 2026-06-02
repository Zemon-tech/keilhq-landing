import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24 pb-24 px-6 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Demo</span>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                See KielHQ in action — live, with your team
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Book a 30-minute live walkthrough with our team. We&apos;ll show you how KielHQ replaces your entire tool stack and answer every question you have.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Smart Dashboard and AI priority ranking",
                  "Task management with the Clarity Engine",
                  "Real-time docs, chat, and calendar sync",
                  "Meeting recorder and transcription",
                  "KielHQ AI with your actual data",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">No credit card. No commitment. Just a real look at the product.</p>
            </div>
            <div className="bg-card border border-border rounded-sm p-8 flex flex-col gap-5 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">Book your walkthrough</h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Full name", type: "text", placeholder: "Jane Smith" },
                  { label: "Work email", type: "email", placeholder: "jane@company.com" },
                  { label: "Team size", type: "text", placeholder: "e.g. 5–20" },
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
                  Book Live Demo
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
