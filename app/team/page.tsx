import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const members = [
  { name: "Shivang Kandoi", role: "Co-founder & CEO", initials: "SK", bg: "bg-blue-100/80 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" },
  { name: "Satyajit Jena", role: "Co-founder & CTO", initials: "SJ", bg: "bg-violet-100/80 text-violet-800 dark:bg-violet-950/40 dark:text-violet-300" },
  { name: "Harshit Kundra", role: "COO", initials: "HK", bg: "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" },
  { name: "Disha Jain", role: "Software Engineer", initials: "DJ", bg: "bg-amber-100/80 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300" },
  { name: "Akshat Chowdhary", role: "AI Engineer", initials: "AC", bg: "bg-rose-100/80 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" },
  { name: "Naveen", role: "Software Engineer", initials: "NV", bg: "bg-sky-100/80 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300" },
  { name: "Krishna Jaiswal", role: "Software Engineer", initials: "KJ", bg: "bg-teal-100/80 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300" },
  { name: "Rohan Vashisth", role: "Software Engineer", initials: "RV", bg: "bg-indigo-100/80 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-28">

        {/* ── SECTION 1: HERO & INTRO ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-10">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Company · Team
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              The people building KeilHQ
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
              We&apos;re a small, focused team obsessed with clarity, execution, and building the best work OS on the planet.
            </p>

            {/* Team Grid (Top-bordered cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mt-16 w-full text-left">
              {members.map((m) => (
                <div key={m.name} className="pt-6 border-t border-border/60 flex items-center gap-4">
                  <div className={`size-12 rounded-sm flex items-center justify-center text-sm font-bold shrink-0 ${m.bg}`}>
                    {m.initials}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[14px] font-semibold text-zinc-900 dark:text-white">{m.name}</span>
                    <span className="text-[12px] text-muted-foreground">{m.role}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SECTION 2: HIRING (2-column layout) ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
            
            {/* Left side */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Careers
              </span>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-[1.1] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.02em" }}>
                We&apos;re hiring.<br />Build the future of work.
              </h2>
            </div>

            {/* Right side */}
            <div className="flex flex-col gap-6 text-[14px] text-muted-foreground leading-relaxed">
              <p>
                We&apos;re looking for engineers, designers, and growth people who care deeply about craft and clarity. We work in highly autonomous cycles, prioritize async alignment, and reward deep focus.
              </p>
              <a 
                href="mailto:jobs@kielhq.com" 
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-75 transition-opacity underline underline-offset-4"
              >
                jobs@kielhq.com →
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
