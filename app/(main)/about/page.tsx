import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
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

  const teamTitle = data?.teamTitle || "Meet the team behind KeilHQ";
  const teamSubtitle = data?.teamSubtitle || "We are designers and engineers. Problem solvers and storytellers. We are a diverse team of individuals, all makers at heart.";
  const coreTeam = data?.teamMembers || [
    {
      name: "Shivang Kandoi",
      role: "Co-founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Satyajit Jena",
      role: "Co-founder & CTO",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Harshit Kundra",
      role: "COO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Disha Jain",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Akshat Chowdhary",
      role: "AI Engineer",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Naveen",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Krishna Jaiswal",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Rohan Vashisth",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Shivansh Tiwari",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const investorsTitle = data?.investorsTitle || "Backed by the best";
  const investors = data?.investors || [
    {
      firmName: "Accel",
      partnerName: "Miles Clements",
      partnerRole: "Partner, Accel",
    },
    {
      firmName: "Sequoia",
      partnerName: "Stephanie Zhan",
      partnerRole: "Partner, Sequoia",
    },
  ];

  return (
    <main className="flex-1 flex flex-col items-center">
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
            className="font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-semibold tracking-[-0.03em] leading-[1.05] text-zinc-900 dark:text-[#F7F8F8]"
            style={{ textWrap: "balance" }}
          >
            {heroTitle}
          </h1>
          <p className="text-[15px] sm:text-base font-normal text-zinc-500 dark:text-[#8A8F98] leading-relaxed max-w-[65ch]">
            {heroSubtitle}
          </p>
        </div>

        {/* Large Video Player with custom overlay controls */}
        <AboutVideoPlayer videoSrc="/launch.mp4" />
      </section>

      {/* ── SECTION 2: EDITORIAL ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col lg:flex-row gap-16 text-left border-t border-zinc-200/50 dark:border-white/[0.05]">
        <div className="w-full lg:w-1/3 shrink-0">
          <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.08] text-zinc-900 dark:text-[#F7F8F8]">
            {editorialTitle}
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <p className="font-sans text-[20px] sm:text-[22px] font-normal leading-[1.4] tracking-tight text-zinc-800 dark:text-zinc-200">
            {editorialLead}
          </p>
          <div className="flex flex-col gap-6 text-[14px] text-zinc-500 dark:text-[#8A8F98] leading-relaxed max-w-[650px]">
            {editorialParagraphs.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TEAM ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col gap-16 text-left border-t border-zinc-200/50 dark:border-white/[0.05]">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:w-1/3 shrink-0">
            <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.08] text-zinc-900 dark:text-[#F7F8F8]">
              {teamTitle}
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <p className="font-sans text-[15px] sm:text-base font-normal leading-relaxed text-zinc-500 dark:text-[#8A8F98] max-w-[48ch]">
              {teamSubtitle}
            </p>
            <Link 
              href="mailto:careers@keilhq.in" 
              className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8] hover:text-zinc-600 dark:hover:text-white transition-colors w-fit"
            >
              We&apos;re hiring →
            </Link>
          </div>
        </div>

        {/* Portrait Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 w-full">
          {coreTeam.map((m: any) => (
            <div key={m.name} className="flex flex-col gap-4">
              <div className="w-full aspect-square relative rounded-sm overflow-hidden border border-zinc-200/50 dark:border-white/[0.06] bg-zinc-100 dark:bg-white/[0.01]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-[14px] font-semibold text-zinc-900 dark:text-[#F7F8F8]">{m.name}</span>
                <span className="text-[12px] font-mono tracking-wide text-zinc-400 dark:text-zinc-600 uppercase">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: BACKED BY THE BEST ── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 xl:py-32 flex flex-col lg:flex-row gap-16 text-left border-t border-zinc-200/50 dark:border-white/[0.05]">
        <div className="w-full lg:w-1/3 shrink-0">
          <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.08] text-zinc-900 dark:text-[#F7F8F8]">
            {investorsTitle.includes("Backed") ? (
              <>Backed by<br />the best</>
            ) : (
              investorsTitle
            )}
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investors.map((inv: any, idx: number) => (
              <div key={idx} className="flex flex-col gap-4 text-left">
                <div className="w-full h-36 rounded-md bg-[#D2E2FB]/40 dark:bg-[#1E293B]/60 border border-zinc-200/60 dark:border-white/[0.05] flex items-center justify-center">
                  <span className="font-sans text-xl font-bold tracking-tight text-zinc-900 dark:text-white select-none">
                    {inv.firmName}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 pl-1">
                  <span className="text-[13px] font-semibold text-zinc-900 dark:text-[#F7F8F8]">{inv.partnerName}</span>
                  <span className="text-[11px] font-mono tracking-wide text-zinc-400 dark:text-zinc-600 uppercase">{inv.partnerRole}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
