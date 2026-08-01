import type { Metadata } from "next";
import { getAboutPage } from "@/cms/helpers/about";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team building KeilHQ — a small, focused team obsessed with clarity, execution, and software craftsmanship.",
};

export default async function TeamPage() {
  const data = await getAboutPage();
  const members = data?.teamMembers || [
    { name: "Shivang Kandoi", role: "Co Founder and CEO" },
    { name: "Satyajit Jena", role: "Co founder and CTO" },
    { name: "Harshit Kundra", role: "COO" },
    { name: "Disha Jain", role: "Software Engineer" },
    { name: "Krishna Jaiswal", role: "Software Engineer" },
    { name: "Shivansh Tiwari", role: "Software Engineer" },
    { name: "Krishna Sharma", role: "Ai Engineer" }
  ];

  return (
    <main className="flex-1 flex flex-col">

        {/* ── SECTION 1: HERO & INTRO ── */}
        <section className="w-full pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-10">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Company · Team
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-foreground max-w-4xl tracking-tight">
              The people building KeilHQ
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
              We&apos;re a small, focused team obsessed with clarity, execution, and building the best work OS on the planet.
            </p>

            {/* Advisors Section (Moved on top of Team section) */}
            {data?.mentors && data.mentors.length > 0 && (
              <div className="w-full flex flex-col gap-10 mt-16 pt-16 border-t border-border">
                <div className="text-left w-full">
                  <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-foreground leading-[1.2] tracking-tight">
                    {data.mentorsTitle || "Advisors"}
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 w-full text-left">
                  {data.mentors.map((mentor: any) => (
                    <div key={mentor.name} className="flex flex-col gap-4">
                      <div className="w-full aspect-square relative rounded-sm overflow-hidden border border-border bg-card">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={mentor.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop"}
                          alt={mentor.name}
                          className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14px] font-semibold text-foreground">{mentor.name}</span>
                        <span className="text-[13px] text-muted-foreground">{mentor.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Grid */}
            <div className="w-full flex flex-col gap-10 mt-16 pt-16 border-t border-border">
              <div className="text-left w-full">
                <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-foreground leading-[1.2] tracking-tight">
                  Meet the team
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 w-full text-left">
                {members.map((m: any) => (
                  <div key={m.name} className="flex flex-col gap-4">
                    <div className="w-full aspect-square relative rounded-sm overflow-hidden border border-border bg-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop"}
                        alt={m.name}
                        className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-semibold text-foreground">{m.name}</span>
                      <span className="text-[13px] text-muted-foreground">{m.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: HIRING (2-column layout) ── */}
        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">

            {/* Left side */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Careers
              </span>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-[1.1] text-foreground tracking-tight">
                We&apos;re hiring.<br />Build the future of work.
              </h2>
            </div>

            {/* Right side */}
            <div className="flex flex-col gap-6 text-[14px] text-muted-foreground leading-relaxed">
              <p>
                We&apos;re looking for engineers, designers, and growth people who care deeply about craft and clarity. We work in highly autonomous cycles, prioritize async alignment, and reward deep focus.
              </p>
              <a
                href="mailto:jobs@Keilhq.com"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:opacity-75 transition-opacity underline underline-offset-4"
              >
                jobs@Keilhq.com →
              </a>
            </div>

          </div>
        </section>

      </main>
  );
}
