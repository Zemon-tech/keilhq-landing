import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const members = [
  { name: "Alex Rivera", role: "Co-founder & CEO", initials: "AR", bg: "bg-blue-100 text-blue-700" },
  { name: "Priya Nair", role: "Co-founder & CTO", initials: "PN", bg: "bg-violet-100 text-violet-700" },
  { name: "Jordan Lee", role: "Head of Design", initials: "JL", bg: "bg-emerald-100 text-emerald-700" },
  { name: "Sam Okafor", role: "Head of Engineering", initials: "SO", bg: "bg-amber-100 text-amber-700" },
  { name: "Maya Chen", role: "Head of Growth", initials: "MC", bg: "bg-rose-100 text-rose-700" },
  { name: "Luca Bianchi", role: "Head of Customer Success", initials: "LB", bg: "bg-sky-100 text-sky-700" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Team</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
              The people building KielHQ
            </h1>
            <p className="text-base text-zinc-500 max-w-xl leading-relaxed">
              We&apos;re a small, focused team obsessed with clarity, execution, and building the best work OS on the planet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {members.map((m) => (
              <div key={m.name} className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-100 bg-zinc-50">
                <div className={`size-12 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${m.bg}`}>
                  {m.initials}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-zinc-950">{m.name}</span>
                  <span className="text-xs text-zinc-500">{m.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 rounded-2xl bg-zinc-950 text-white flex flex-col gap-4">
            <h2 className="text-xl font-semibold">We&apos;re hiring</h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
              We&apos;re looking for engineers, designers, and growth people who care deeply about craft and clarity. Remote-first, async-friendly.
            </p>
            <a href="mailto:jobs@kielhq.com" className="text-sm font-semibold text-white underline underline-offset-2 hover:text-zinc-300 transition-colors w-fit">
              jobs@kielhq.com →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
