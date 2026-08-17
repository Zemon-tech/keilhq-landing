import React from "react";
import type { Metadata } from "next";
import { getAboutPage } from "@/cms/helpers/about";
import { AboutVideoPlayer } from "@/components/about/about-video-player";

export const metadata: Metadata = {
  title: "About",
  description: "About KeilHQ. We are building the work management platform for the next era of product development, giving teams and AI agents human clarity.",
};

export default async function AboutPage() {
  const data = await getAboutPage();

  const heroTitle = data?.heroTitle || "Building tools for the next era of product development";
  const heroSubtitle = data?.heroSubtitle || "AI is fundamentally changing how products get built. We are shaping what comes next.";
  const editorialTitle = data?.editorialTitle || "A new species of product tool";
  const editorialLead = data?.editorialLead || "Software development is at an inflection point. Artificial intelligence is fundamentally reshaping how products are built.";
  const editorialParagraphs = data?.editorialParagraphs || [
    "AI increases what teams can create, but it also raises the bar for clarity and coordination. At KeilHQ, we are building the tools for this new era of product development. A purpose-built system where teams and agents operate together in a shared, structured environment.",
    "Founded in 2025, KeilHQ has become the tool of choice for thousands of fast-growing teams to plan, build, and ship their products.",
    "Our team is distributed across North America and India, and we're continuing to grow internationally. What unites us is relentless focus, fast execution, and a deep care for software craftsmanship."
  ];

  const teamTitle = data?.teamTitle || "Meet the team";
  const coreTeam = data?.teamMembers || [
    {
      name: "Shivang Kandoi",
      role: "Co Founder and CEO",
      avatar: "https://zemonhouseofbuilders.in/shivang.png",
    },
    {
      name: "Satyajit Jena",
      role: "Co Founder and CTO",
      avatar: "https://zemonhouseofbuilders.in/satyajit.png",
    },
    {
      name: "Harshit Kundra",
      role: "COO",
      avatar: "https://zemonhouseofbuilders.in/harshit.png",
    },
    {
      name: "Disha Jain",
      role: "Software Engineer",
      avatar: "/disha.jpg",
    },
    {
      name: "Shivansh Tiwari",
      role: "Software Engineer",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQG0YphMsFFcow/profile-displayphoto-crop_800_800/B4DZpZkAW.GgAM-/0/1762439205060?e=1787788800&v=beta&t=-H7hV38GxGpQ_eLnsKAAvmzi_T8pC9bKf0_s-tJqfn8",
    },
    {
      name: "Krishna Sharma",
      role: "AI Engineer",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQGX3R4U3aVmiQ/profile-displayphoto-crop_800_800/B56ZuCJfloKgAI-/0/1767415086879?e=1787788800&v=beta&t=ya5dEQqFHg8EE8wlhlfYv_FsgeG70QX0LuCwuL2CrtI",
    },
  ];

  const advisors = data?.mentors || [
    {
      name: "Hemant Srivastav",
      role: "CEO, AIC GGSIPU",
      avatar: "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=384,h=373,f=auto,dpr=2,fit=contain/f1706696421230x555922538285202400/Hemant%20%282%29.jpeg"
    },
    {
      name: "Sagar Sahu",
      role: "Program Manager, AIC GGSIPU",
      avatar: "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=384,h=373,f=auto,dpr=2,fit=contain/f1780921371029x651737872941958000/51397r73ev%20%281%29.png"
    },
    {
      name: "Kuldeep Anand",
      role: "Visomni",
      avatar: "https://media.contra.com/image/upload/h_1000,w_1000/mwsscqlrd7fbjscoig49.avif"
    },
    {
      name: "Raman Tehlan",
      role: "Vxplain",
      avatar: "https://ramantehlan.github.io/images/me.png"
    }
  ];

  const investors = data?.investors || [
    {
      firmName: "AIC GGSIPU",
      logo: "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=96,h=92,f=auto,dpr=2,fit=contain/f1707545874849x730155311730143000/WhatsApp_Image_2024-02-10_at_11.17.23_AM-removebg-preview.png",
      partnerName: "Hemant Srivastav",
      partnerRole: "CEO of AIC GGSIPU"
    },
    {
      firmName: "AIC GGSIPU",
      logo: "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=96,h=92,f=auto,dpr=2,fit=contain/f1707545874849x730155311730143000/WhatsApp_Image_2024-02-10_at_11.17.23_AM-removebg-preview.png",
      partnerName: "Sagar Sahu",
      partnerRole: "Program Manager at AIC GGSIPU"
    }
  ];

  return (
    <main className="flex-1 flex flex-col items-center select-text">
      {/* Ambient top mesh glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, oklch(0.55 0.18 250 / 0.05), transparent)",
        }}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-16 lg:pb-24 flex flex-col gap-12 text-left">
        <div className="max-w-[1000px] flex flex-col gap-6">
          <h1
            className="font-display text-[clamp(2.5rem,5.2vw,4.25rem)] font-semibold tracking-tight leading-[1.05] text-foreground text-balance"
          >
            {heroTitle}
          </h1>
          <p className="text-[15px] sm:text-base font-normal text-muted-foreground leading-relaxed max-w-[65ch]">
            {heroSubtitle}
          </p>
        </div>

        {/* Large Video Player with custom overlay controls */}
        <AboutVideoPlayer videoSrc="/launch.mp4" />
      </section>

      {/* ── SECTION 2: EDITORIAL ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col lg:flex-row gap-16 text-left border-t border-border">
        <div className="w-full lg:w-1/3 shrink-0">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight leading-[1.08] text-foreground">
            {editorialTitle}
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <p className="font-sans text-[20px] sm:text-[22px] font-normal leading-[1.4] tracking-tight text-foreground">
            {editorialLead}
          </p>
          <div className="flex flex-col gap-6 text-[14px] text-muted-foreground leading-relaxed max-w-[650px]">
            {editorialParagraphs.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ADVISORS ── */}
      {advisors && advisors.length > 0 && (
        <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 flex flex-col gap-12 text-left border-t border-border">
          <div className="w-full flex flex-col gap-2">
            <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
              Guidance & Advisory
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
              {data?.mentorsTitle || "Advisors"}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 w-full">
            {advisors.map((mentor: any) => (
              <div key={mentor.name} className="flex flex-col gap-3 group">
                <div className="w-full aspect-square relative rounded-sm overflow-hidden border border-border bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mentor.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop"}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
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
        </section>
      )}

      {/* ── SECTION 4: MEET THE TEAM ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 flex flex-col gap-12 text-left border-t border-border">
        <div className="w-full flex flex-col gap-2">
          <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
            People
          </span>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
            {teamTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 w-full">
          {coreTeam.map((m: any) => (
            <div key={m.name} className="flex flex-col gap-3 group">
              <div className="w-full aspect-square relative rounded-sm overflow-hidden border border-border bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop"}
                  alt={m.name}
                  className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
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
      </section>

      {/* ── SECTION 5: BACKED BY ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 flex flex-col lg:flex-row gap-16 text-left border-t border-border">
        <div className="w-full lg:w-1/3 shrink-0">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight leading-[1.08] text-foreground">
            {data?.investorsTitle || "Backed by"}
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-12">
          {/* Unique Firm Logo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px]">
            {Array.from(new Set(investors.map((inv: any) => inv.firmName))).map((firmName: any, idx: number) => {
              const firm = investors.find((inv: any) => inv.firmName === firmName);
              if (!firm) return null;
              return (
                <div key={idx} className="w-full aspect-[2/1] rounded-lg bg-card border border-border flex items-center justify-center p-6">
                  {firm.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={firm.logo}
                      alt={firm.firmName}
                      className="h-16 w-auto object-contain dark:brightness-110"
                    />
                  ) : (
                    <span className="font-display text-xl font-bold tracking-tight text-foreground select-none">
                      {firm.firmName}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Partners/Individuals Text Row */}
          <div className="flex flex-col gap-6 max-w-[800px] mt-6 pt-6 border-t border-border">
            {investors.map((inv: any, idx: number) => (
              <div key={idx} className="flex flex-col gap-0.5 text-left">
                <span className="text-[14px] font-semibold text-foreground">{inv.partnerName}</span>
                <span className="text-[13px] text-muted-foreground">{inv.partnerRole}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HIRING / CAREERS ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 flex flex-col lg:flex-row gap-16 items-start text-left border-t border-border">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
            Careers
          </span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-[1.1] text-foreground tracking-tight">
            We&apos;re hiring.<br />Build the future of work.
          </h2>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-[14px] text-muted-foreground leading-relaxed">
          <p>
            We&apos;re looking for engineers, designers, and growth people who care deeply about craft and clarity. We work in highly autonomous cycles, prioritize async alignment, and reward deep focus.
          </p>
          <a
            href="mailto:jobs@Keilhq.com"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:opacity-75 transition-opacity underline underline-offset-4 w-fit"
          >
            jobs@Keilhq.com →
          </a>
        </div>
      </section>

    </main>
  );
}
