"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { featureNavItems } from "@/lib/feature-nav";
import { caseStudyIntro } from "@/lib/solutions-content";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <nav
        className={`flex items-center justify-between md:justify-start gap-6 px-5 py-2 rounded-sm border transition-all duration-300 w-[calc(100%-2rem)] md:w-auto ${isScrolled
          ? "bg-white/80 dark:bg-black/50 backdrop-blur-md border-zinc-200/50 dark:border-white/10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
          : "bg-white/40 dark:bg-black/20 backdrop-blur-sm border-zinc-200/20 dark:border-white/5"
          }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group mr-2">
          <Image
            src="/keilhq.svg"
            alt="KeilHQ Logo"
            width={22}
            height={22}
            className="transition-opacity duration-300 dark:hidden"
            priority
          />
          <Image
            src="/keilhq-white.svg"
            alt="KeilHQ Logo"
            width={22}
            height={22}
            className="transition-opacity duration-300 hidden dark:block"
            priority
          />
          <span className="text-sm font-semibold tracking-tight text-foreground">KeilHQ</span>
        </Link>

        {/* Desktop Nav links with Solid (Non-Glass) Dropdowns */}
        <div className="hidden md:flex items-center gap-5">

          {/* Features Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[13px] font-semibold tracking-[0.01em] text-muted-foreground hover:text-foreground transition-colors duration-150 py-2 cursor-pointer bg-transparent border-none">
              Features
              <ChevronDown className="size-3 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            {/* Invisible bridge fills the gap so mouse doesn't leave the group */}
            <div className="absolute top-full left-0 right-0 h-2 z-50" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white dark:bg-[#0c0c0c] border border-zinc-200/80 dark:border-white/5 rounded-2xl shadow-2xl opacity-0 pointer-events-none scale-[0.97] origin-top transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 z-50 flex overflow-hidden">
              {/* Left Panel */}
              <div className="w-[260px] shrink-0 bg-[#fbfaf7] dark:bg-[#121211] p-8 border-r border-zinc-150/40 dark:border-white/5 flex flex-col justify-start text-left">
                <h4 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.25]">
                  Everything in one place.
                </h4>
                <p className="text-[12px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-relaxed mt-3">
                  One quiet assistant that remembers your work, sits in on your meetings, and acts when it matters.
                </p>
              </div>
              {/* Right Panel - 2 Column Grid */}
              <div className="flex-1 p-8 grid grid-cols-2 gap-x-8 gap-y-5 text-left bg-white dark:bg-[#0c0c0c]">
                {featureNavItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group/item flex flex-col gap-1 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40 p-2.5 -m-2.5 rounded-xl transition-all duration-200"
                  >
                    <span className="text-[13px] font-semibold tracking-[0.01em] text-zinc-900 dark:text-zinc-100 group-hover/item:text-foreground">{item.title}</span>
                    <span className="text-[11.5px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-normal">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Use Cases Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[13px] font-semibold tracking-[0.01em] text-muted-foreground hover:text-foreground transition-colors duration-150 py-2 cursor-pointer bg-transparent border-none">
              Solutions
              <ChevronDown className="size-3 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            {/* Invisible bridge fills the gap so mouse doesn't leave the group */}
            <div className="absolute top-full left-0 right-0 h-2 z-50" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[760px] bg-white dark:bg-[#0c0c0c] border border-zinc-200/80 dark:border-white/5 rounded-2xl shadow-2xl opacity-0 pointer-events-none scale-[0.97] origin-top transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 z-50 flex overflow-hidden">
              {/* Left Panel */}
              <div className="w-[260px] shrink-0 bg-[#fbfaf7] dark:bg-[#121211] p-8 border-r border-zinc-150/40 dark:border-white/5 flex flex-col justify-start text-left">
                <h4 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.25]">
                  {caseStudyIntro.title}
                </h4>
                <p className="text-[12px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-relaxed mt-3">
                  {caseStudyIntro.description}
                </p>
                <Link
                  href="/solutions"
                  className="text-[12px] font-semibold tracking-[0.01em] text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-300 flex items-center gap-1 group/btn w-fit mt-4"
                >
                  View all case studies
                  <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
              {/* Right Panel - 2 Column Grid */}
              <div className="flex-1 p-8 grid grid-cols-2 gap-x-8 gap-y-6 text-left bg-white dark:bg-[#0c0c0c]">
                {[
                  { title: "Agencies", desc: "Manage multiple clients and deliverables", href: "/solutions/agencies" },
                  { title: "Startups", desc: "Move fast with embedded AI", href: "/solutions/startups" },
                  { title: "Dev Teams", desc: "Sprint planning and dependencies", href: "/solutions/dev-teams" },
                  { title: "Freelancers", desc: "Solo dashboard and client docs", href: "/solutions/freelancers" },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group/item flex flex-col gap-1 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40 p-2.5 -m-2.5 rounded-xl transition-all duration-200"
                  >
                    <span className="text-[13px] font-semibold tracking-[0.01em] text-zinc-900 dark:text-zinc-100 group-hover/item:text-foreground">{item.title}</span>
                    <span className="text-[11.5px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-normal">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[13px] font-semibold tracking-[0.01em] text-muted-foreground hover:text-foreground transition-colors duration-150 py-2 cursor-pointer bg-transparent border-none">
              Pricing
              <ChevronDown className="size-3 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            {/* Invisible bridge fills the gap so mouse doesn't leave the group */}
            <div className="absolute top-full left-0 right-0 h-2 z-50" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white dark:bg-[#0c0c0c] border border-zinc-200/80 dark:border-white/5 rounded-2xl shadow-2xl opacity-0 pointer-events-none scale-[0.97] origin-top transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 z-50 flex overflow-hidden">
              {/* Left Panel */}
              <div className="w-[240px] shrink-0 bg-[#fbfaf7] dark:bg-[#121211] p-8 border-r border-zinc-150/40 dark:border-white/5 flex flex-col justify-start text-left">
                <h4 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.25]">
                  Simple, honest pricing.
                </h4>
                <p className="text-[12px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-relaxed mt-3">
                  Start free and stay free. Upgrade only when you want more memory and more power.
                </p>
              </div>
              {/* Right Panel */}
              <div className="flex-1 p-8 flex flex-col gap-5 text-left bg-white dark:bg-[#0c0c0c]">
                {[
                  { title: "Pro (Free Trial)", price: "$0", desc: "30-day trial of our advanced features." },
                  { title: "Teams", price: "$50/mo", desc: "Advanced collaboration & shared workspaces." },
                  { title: "Enterprise", price: "Custom", desc: "Dedicated SLAs, security and support." },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href="/pricing"
                    className="group/item flex flex-col gap-1 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40 p-2.5 -m-2.5 rounded-xl transition-all duration-200"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-[13px] font-semibold tracking-[0.01em] text-zinc-900 dark:text-zinc-100 group-hover/item:text-foreground">{item.title}</span>
                      <span className="text-[11.5px] font-semibold tracking-[0.015em] text-zinc-500 dark:text-zinc-400">{item.price}</span>
                    </div>
                    <span className="text-[11.5px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-normal">{item.desc}</span>
                  </Link>
                ))}
                <div className="border-t border-zinc-100 dark:border-white/5 pt-4 mt-1">
                  <Link href="/pricing" className="text-[12px] font-semibold tracking-[0.01em] text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-300 flex items-center gap-1 group/btn w-fit">
                    Compare plans
                    <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[13px] font-semibold tracking-[0.01em] text-muted-foreground hover:text-foreground transition-colors duration-150 py-2 cursor-pointer bg-transparent border-none">
              Company
              <ChevronDown className="size-3 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            {/* Invisible bridge fills the gap so mouse doesn't leave the group */}
            <div className="absolute top-full left-0 right-0 h-2 z-50" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white dark:bg-[#0c0c0c] border border-zinc-200/80 dark:border-white/5 rounded-2xl shadow-2xl opacity-0 pointer-events-none scale-[0.97] origin-top transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 z-50 flex overflow-hidden">
              {/* Left Panel */}
              <div className="w-[220px] shrink-0 bg-[#fbfaf7] dark:bg-[#121211] p-8 border-r border-zinc-150/40 dark:border-white/5 flex flex-col justify-start text-left">
                <h4 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.25]">
                  Built by creators.
                </h4>
                <p className="text-[12px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-relaxed mt-3">
                  We are building the future of work assistants. Quiet, contextual, and always helpful.
                </p>
              </div>
              {/* Right Panel */}
              <div className="flex-1 p-8 flex flex-col gap-5 text-left bg-white dark:bg-[#0c0c0c]">
                {[
                  { title: "About Us", desc: "Our mission and team", href: "/about" },
                  { title: "Team", desc: "Meet the crew", href: "/team" },
                  { title: "Enterprise", desc: "KeilHQ for organization", href: "/enterprise" },
                  { title: "Demo", desc: "Book a personal walkthrough", href: "/demo" },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group/item flex flex-col gap-1 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40 p-2.5 -m-2.5 rounded-xl transition-all duration-200"
                  >
                    <span className="text-[13px] font-semibold tracking-[0.01em] text-zinc-900 dark:text-zinc-100 group-hover/item:text-foreground">{item.title}</span>
                    <span className="text-[11.5px] font-medium tracking-[0.015em] text-zinc-500 dark:text-zinc-400 leading-normal">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Blog Link */}
          <Link
            href="/blog"
            className="text-[13px] font-semibold tracking-[0.01em] text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-3 ml-2">
          {/* Start Free CTA */}
          <a
            href="https://app.Keilhq.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-accent items-center gap-1.5 text-[13px] font-semibold tracking-[0.01em] px-4 py-1.5 rounded-sm active:scale-[0.97] transition-transform duration-150"
          >
            Start Free
            <ArrowRight className="size-3" aria-hidden="true" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+4px)] left-4 right-4 border border-zinc-200/50 dark:border-white/10 bg-white/90 dark:bg-black/60 rounded-sm p-5 shadow-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 md:hidden max-h-[85vh] overflow-y-auto backdrop-blur-lg">

          {/* Features in Mobile */}
          <div className="flex flex-col gap-1 border-b border-border dark:border-white/5 pb-2">
            <button
              onClick={() => toggleMobileSection("features")}
              className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground py-2 px-2 text-left w-full bg-transparent border-none cursor-pointer"
            >
              <span>Features</span>
            </button>
            {mobileExpandedSection === "features" && (
              <div className="flex flex-col gap-1.5 pl-4 mt-1">
                {featureNavItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col gap-0.5 hover:bg-muted/40 p-2 rounded-sm"
                  >
                    <span className="text-xs font-semibold text-foreground">{item.title}</span>
                    <span className="text-[10px] text-muted-foreground">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions in Mobile */}
          <div className="flex flex-col gap-1 border-b border-border dark:border-white/5 pb-2">
            <button
              onClick={() => toggleMobileSection("solutions")}
              className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground py-2 px-2 text-left w-full bg-transparent border-none cursor-pointer"
            >
              <span>Solutions</span>
            </button>
            {mobileExpandedSection === "solutions" && (
              <div className="flex flex-col gap-1.5 pl-4 mt-1">
                {[
                  { title: "Agencies", desc: "Manage multiple clients and deliverables", href: "/solutions/agencies" },
                  { title: "Startups", desc: "Move fast with embedded AI", href: "/solutions/startups" },
                  { title: "Dev Teams", desc: "Sprint planning and dependencies", href: "/solutions/dev-teams" },
                  { title: "Freelancers", desc: "Solo dashboard and client docs", href: "/solutions/freelancers" },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col gap-0.5 hover:bg-muted/40 p-2 rounded-sm"
                  >
                    <span className="text-xs font-semibold text-foreground">{item.title}</span>
                    <span className="text-[10px] text-muted-foreground">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Pricing link in Mobile */}
          <Link
            href="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2.5 px-2 border-b border-border/50 dark:border-white/5 transition-colors text-left"
          >
            Pricing
          </Link>

          {/* Company in Mobile */}
          <div className="flex flex-col gap-1 border-b border-border dark:border-white/5 pb-2">
            <button
              onClick={() => toggleMobileSection("company")}
              className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground py-2 px-2 text-left w-full bg-transparent border-none cursor-pointer"
            >
              <span>Company</span>
            </button>
            {mobileExpandedSection === "company" && (
              <div className="flex flex-col gap-1.5 pl-4 mt-1">
                {[
                  { title: "About Us", href: "/about" },
                  { title: "Team", href: "/team" },
                  { title: "Enterprise", href: "/enterprise" },
                  { title: "Demo", href: "/demo" },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col gap-0.5 hover:bg-muted/40 p-2 rounded-sm"
                  >
                    <span className="text-xs font-semibold text-foreground">{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Blog in Mobile */}
          <Link
            href="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2.5 px-2 border-b border-border/50 dark:border-white/5 last:border-0 transition-colors text-left"
          >
            Blog
          </Link>

          {/* Login CTA in Mobile */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsLoginDialogOpen(true);
            }}
            className="text-sm font-semibold text-foreground hover:text-muted-foreground py-2.5 px-2 transition-colors mt-2 text-left bg-transparent border-none cursor-pointer"
          >
            Login
          </button>
        </div>
      )}

      {/* Login Modal Dialog */}
      {isLoginDialogOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            onClick={() => setIsLoginDialogOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          />

          <div className="relative w-full max-w-lg bg-white dark:bg-[#0c0c0c] border border-zinc-200 dark:border-white/5 rounded-sm p-5 sm:p-6 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 select-text flex flex-col gap-4">

            <button
              onClick={() => setIsLoginDialogOpen(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer bg-transparent border-none"
              aria-label="Close dialog"
            >
              <X className="size-4.5" />
            </button>

            <div className="flex flex-col gap-0.5 pr-6">
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white tracking-tight">
                Get started
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Add KeilHQ to the apps where you already work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">

              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-medium text-muted-foreground pl-1">
                  Microsoft 365
                </span>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Excel</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#107C41" />
                    <path d="M10.5 7.5L8 12l2.5 4.5h2L10 12l2.5-4.5h-2z" fill="#FFF" />
                  </svg>
                </a>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">PowerPoint</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#C43E1C" />
                    <path d="M9.5 7.5h2.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H9.5v3.5H8v-8.5h1.5zm0 3.5h2.5c.6 0 1-.4 1-1s-.4-1-1-1H9.5v2z" fill="#FFF" />
                  </svg>
                </a>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Word</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#185ABD" />
                    <path d="M7.5 7.5l2 6.5 2-6.5h2.2l-3.2 8.5H8.5l-3.2-8.5h2.2z" fill="#FFF" />
                  </svg>
                </a>

              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-medium text-muted-foreground pl-1">
                  Google
                </span>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Google Sheets</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#0F9D58" />
                    <path d="M7 7h4v4H7V7zm6 0h4v4h-4V7zm-6 6h4v4H7v-4zm6 0h4v4h-4v-4z" fill="#FFF" opacity="0.9" />
                  </svg>
                </a>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Google Slides</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#F4B400" />
                    <path d="M7 8h10v6H7V8zm2 2v2h6v-2H9z" fill="#FFF" opacity="0.9" />
                  </svg>
                </a>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Google Docs</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#4285F4" />
                    <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" fill="#FFF" opacity="0.9" />
                  </svg>
                </a>

              </div>

            </div>

            <a
              href="https://app.Keilhq.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3 px-4 rounded-sm bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 transition-colors shadow-lg mt-2 cursor-pointer"
            >
              <span className="text-xs font-semibold text-white dark:text-zinc-950">Log in</span>
              <ArrowRight className="size-4 text-white dark:text-zinc-950" />
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
