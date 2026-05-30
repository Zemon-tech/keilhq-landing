import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Demo</span>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
                See KielHQ in action — live, with your team
              </h1>
              <p className="text-base text-zinc-500 leading-relaxed">
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
                  <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-600">
                    <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-400">No credit card. No commitment. Just a real look at the product.</p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 flex flex-col gap-5">
              <h2 className="text-lg font-semibold text-zinc-950">Book your walkthrough</h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Full name", type: "text", placeholder: "Jane Smith" },
                  { label: "Work email", type: "email", placeholder: "jane@company.com" },
                  { label: "Team size", type: "text", placeholder: "e.g. 5–20" },
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
