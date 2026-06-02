import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const members = [
  { name: "Alex Rivera", role: "Co-founder & CEO", initials: "AR", bg: "bg-blue-100/80 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300" },
  { name: "Priya Nair", role: "Co-founder & CTO", initials: "PN", bg: "bg-violet-100/80 text-violet-800 dark:bg-violet-950/40 dark:text-violet-300" },
  { name: "Jordan Lee", role: "Head of Design", initials: "JL", bg: "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" },
  { name: "Sam Okafor", role: "Head of Engineering", initials: "SO", bg: "bg-amber-100/80 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300" },
  { name: "Maya Chen", role: "Head of Growth", initials: "MC", bg: "bg-rose-100/80 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" },
  { name: "Luca Bianchi", role: "Head of Customer Success", initials: "LB", bg: "bg-sky-100/80 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24 pb-24 px-6 lg:px-12">
        <div className="max-w-8xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Team</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              The people building KielHQ
            </h1>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              We&apos;re a small, focused team obsessed with clarity, execution, and building the best work OS on the planet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {members.map((m) => (
              <div key={m.name} className="flex items-center gap-4 p-5 rounded-sm border border-border bg-card shadow-sm">
                <div className={`size-12 rounded-sm flex items-center justify-center text-sm font-bold shrink-0 ${m.bg}`}>
                  {m.initials}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">{m.name}</span>
                  <span className="text-xs text-muted-foreground">{m.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 rounded-sm bg-primary text-primary-foreground flex flex-col gap-4 border border-border shadow-md">
            <h2 className="text-xl font-semibold">We&apos;re hiring</h2>
            <p className="text-sm text-primary-foreground/85 leading-relaxed max-w-lg">
              We&apos;re looking for engineers, designers, and growth people who care deeply about craft and clarity. Remote-first, async-friendly.
            </p>
            <a href="mailto:jobs@kielhq.com" className="text-sm font-semibold text-primary-foreground underline underline-offset-2 hover:opacity-80 transition-colors w-fit">
              jobs@kielhq.com →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
