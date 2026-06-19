"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Building2, Rocket, Code2, UserRound, ChevronDown, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

const solutions = [
  {
    title: "Agencies",
    description: "Manage multiple clients, workflows, and deliverables.",
    href: "/solutions/agencies",
    icon: Building2,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "Startups",
    description: "Move fast, track sprints, and leverage embedded AI.",
    href: "/solutions/startups",
    icon: Rocket,
    color: "text-violet-500 bg-violet-500/10",
  },
  {
    title: "Dev Teams",
    description: "Sprint planning, task dependencies, and git integrations.",
    href: "/solutions/dev-teams",
    icon: Code2,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    title: "Freelancers",
    description: "Solo dashboard, client-ready docs, and audio transcripts.",
    href: "/solutions/freelancers",
    icon: UserRound,
    color: "text-amber-500 bg-amber-500/10",
  },
];

const navItems = [
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Blog", href: "/blog" },
  { label: "Demo", href: "/demo" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <nav
        className={`flex items-center justify-between md:justify-start gap-6 px-5 py-2 rounded-sm border transition-all duration-300 w-[calc(100%-2rem)] md:w-auto ${
          isScrolled
            ? "bg-white/80 dark:bg-black/50 backdrop-blur-md border-zinc-200/50 dark:border-white/10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
            : "bg-white/40 dark:bg-black/20 backdrop-blur-sm border-zinc-200/20 dark:border-white/5"
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group mr-2">
          {/* We render both images with tailwind responsive classes to avoid pre-hydration flicker */}
          <Image
            src="/keilhq.svg"
            alt="KielHQ Logo"
            width={22}
            height={22}
            className="transition-opacity duration-300 dark:hidden"
            priority
          />
          <Image
            src="/keilhq-white.svg"
            alt="KielHQ Logo"
            width={22}
            height={22}
            className="transition-opacity duration-300 hidden dark:block"
            priority
          />
          <span className="text-sm font-semibold tracking-tight text-foreground">KielHQ</span>
        </Link>

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Solutions Dropdown Menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer bg-transparent border-none">
              Solutions
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown Card */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] bg-white/90 dark:bg-black/60 border border-zinc-200/50 dark:border-white/10 rounded-sm p-4 shadow-xl backdrop-blur-lg opacity-0 pointer-events-none scale-95 origin-top transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 z-50 grid grid-cols-2 gap-2">
              {solutions.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-3 p-3 rounded-sm hover:bg-muted/60 transition-colors"
                >
                  <div className={`p-2 rounded-sm shrink-0 ${item.color}`}>
                    <item.icon className="size-4.5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-foreground">{item.title}</span>
                    <span className="text-[11px] text-muted-foreground leading-normal">{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 ml-2">
          {/* Login */}
          <button
            onClick={() => setIsLoginDialogOpen(true)}
            className="hidden md:block text-sm font-medium text-foreground bg-secondary/80 hover:bg-secondary px-4 py-1.5 rounded-sm transition-colors border border-border/40 shadow-sm cursor-pointer"
          >
            Login
          </button>

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
          {/* Solutions header in Mobile */}
          <div className="flex flex-col gap-1.5 border-b border-border pb-3">
            <span className="text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider">
              Solutions
            </span>
            <div className="grid grid-cols-1 gap-1">
              {solutions.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-2 py-2 rounded-sm hover:bg-muted/50 transition-colors"
                >
                  <div className={`p-1.5 rounded-sm shrink-0 ${item.color}`}>
                    <item.icon className="size-4 animate-in fade-in duration-200" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">{item.title}</span>
                    <span className="text-[11px] text-muted-foreground leading-none">{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Other pages in Mobile */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2.5 px-2 border-b border-border/50 last:border-0 transition-colors"
              >
                {item.label}
              </Link>
            ))}

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
        </div>
      )}

      {/* Login Modal Dialog */}
      {isLoginDialogOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <div 
            onClick={() => setIsLoginDialogOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-white dark:bg-[#0c0c0c] border border-zinc-200 dark:border-white/5 rounded-sm p-5 sm:p-6 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 select-text flex flex-col gap-4">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsLoginDialogOpen(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer bg-transparent border-none"
              aria-label="Close dialog"
            >
              <X className="size-4.5" />
            </button>

            {/* Header */}
            <div className="flex flex-col gap-0.5 pr-6">
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white tracking-tight">
                Get started
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Add KeilHQ to the apps where you already work.
              </p>
            </div>

            {/* Two Columns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              
              {/* Microsoft 365 Column */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest pl-1">
                  Microsoft 365
                </span>
                
                {/* Excel */}
                <a 
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Excel</span>
                  {/* Excel Icon */}
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#107C41" />
                    <path d="M10.5 7.5L8 12l2.5 4.5h2L10 12l2.5-4.5h-2z" fill="#FFF" />
                  </svg>
                </a>

                {/* PowerPoint */}
                <a 
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">PowerPoint</span>
                  {/* PowerPoint Icon */}
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#C43E1C" />
                    <path d="M9.5 7.5h2.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H9.5v3.5H8v-8.5h1.5zm0 3.5h2.5c.6 0 1-.4 1-1s-.4-1-1-1H9.5v2z" fill="#FFF" />
                  </svg>
                </a>

                {/* Word */}
                <a 
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Word</span>
                  {/* Word Icon */}
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#185ABD" />
                    <path d="M7.5 7.5l2 6.5 2-6.5h2.2l-3.2 8.5H8.5l-3.2-8.5h2.2z" fill="#FFF" />
                  </svg>
                </a>

              </div>

              {/* Google Column */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest pl-1">
                  Google
                </span>

                {/* Google Sheets */}
                <a 
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Google Sheets</span>
                  {/* Google Sheets Icon */}
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#0F9D58" />
                    <path d="M7 7h4v4H7V7zm6 0h4v4h-4V7zm-6 6h4v4H7v-4zm6 0h4v4h-4v-4z" fill="#FFF" opacity="0.9" />
                  </svg>
                </a>

                {/* Google Slides */}
                <a 
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Google Slides</span>
                  {/* Google Slides Icon */}
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#F4B400" />
                    <path d="M7 8h10v6H7V8zm2 2v2h6v-2H9z" fill="#FFF" opacity="0.9" />
                  </svg>
                </a>

                {/* Google Docs */}
                <a 
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-zinc-50 border border-zinc-200/80 hover:bg-zinc-100/80 dark:bg-[#161616]/90 dark:border-white/5 dark:hover:border-white/10 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Google Docs</span>
                  {/* Google Docs Icon */}
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#4285F4" />
                    <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" fill="#FFF" opacity="0.9" />
                  </svg>
                </a>

              </div>

            </div>

            {/* Bottom Row Button */}
            <a 
              href="https://app.keilhq.in/login"
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
