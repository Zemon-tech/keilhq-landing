import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "@/components/ui/toggle-theme";

const footerLinks = {
  Product: [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy & Security", href: "/privacy-security" },
    { label: "Changelog", href: "/changelog" },
  ],
  Features: [
    { label: "Team Chat", href: "/features/team-chat" },
    { label: "Meeting Notes", href: "/features/meeting-recorder" },
    { label: "Dashboard", href: "/features/smart-dashboard" },
    { label: "Task Board", href: "/features/task-management" },
  ],
  Company: [
    { label: "About us", href: "/about" },
    { label: "Support", href: "/support" },
    { label: "Blog", href: "/blog" },
    { label: "Report a bug", href: "/report" },
  ],
};

const badges = ["SOC 2", "GDPR", "CCPA", "HIPAA", "SOC 3"];

export function Footer() {
  return (
    <footer className="w-full min-h-[100dvh] bg-background relative z-[60] flex flex-col justify-between pt-20 sm:pt-28 overflow-hidden select-text">

      {/* Top Links Section */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between gap-16 md:gap-8 z-10 relative">
        {/* Brand and Social Links */}
        <div className="md:w-1/4 shrink-0 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/keilhq.svg" alt="KeilHQ" width={22} height={22} className="dark:hidden" />
            <Image src="/keilhq-white.svg" alt="KeilHQ" width={22} height={22} className="hidden dark:block" />
            <span className="font-sans text-lg font-semibold tracking-tight text-zinc-900 dark:text-[#F7F8F8]">
              KeilHQ
            </span>
          </Link>

          {/* Theme Toggle */}
          <div>
            <ToggleTheme />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="size-8 rounded-sm bg-secondary/80 hover:bg-accent border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-150 active:scale-95">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="size-8 rounded-sm bg-secondary/80 hover:bg-accent border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-150 active:scale-95">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="size-8 rounded-sm bg-secondary/80 hover:bg-accent border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-150 active:scale-95">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="size-8 rounded-sm bg-secondary/80 hover:bg-accent border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-150 active:scale-95">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4 text-left">
              <span className="text-[11px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                {section}
              </span>
              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[13px] text-zinc-500 dark:text-[#8A8F98] hover:text-zinc-900 dark:hover:text-white transition-colors font-medium tracking-wide"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Badges Section with center divider */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 mt-16 sm:mt-24 z-10 relative">
        <div className="w-full h-px bg-zinc-200/50 dark:bg-white/[0.05] relative flex items-center justify-center">
          <div className="absolute bg-background px-6 flex items-center gap-4">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center justify-center size-10 rounded-sm border border-zinc-200/50 dark:border-white/[0.05] bg-background shadow-xs text-[8px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest select-none"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Giant Watermark Text — Updated to font-sans with tight negative tracking */}
      <div className="w-full flex justify-center items-center overflow-hidden mt-12 sm:mt-16 mb-2 select-none z-0 relative">
        <span
          className="font-sans text-[clamp(5rem,18vw,15rem)] font-bold tracking-[-0.04em] leading-none text-zinc-100 dark:text-[#161718] select-none pointer-events-none"
        >
          KeilHQ
        </span>
      </div>

      {/* Copyright and Privacy Links Row */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-zinc-200/50 dark:border-white/[0.05] z-10 relative">
        <span className="text-[13px] text-zinc-400 dark:text-[#8A8F98] font-normal tracking-wide w-full md:w-1/3 text-center md:text-left">
          KeilHQ. All rights reserved. © {new Date().getFullYear()}
        </span>

        <div className="flex items-center gap-6 flex-wrap justify-center w-full md:w-1/3 text-[13px] font-normal tracking-wide">
          {["Your Privacy Choices", "Privacy policy"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-zinc-400 dark:text-[#8A8F98] hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center md:justify-end w-full md:w-1/3 gap-3">
          <span className="text-[13px] text-zinc-400 dark:text-[#8A8F98] font-normal tracking-wide">
            Made in India.
          </span>
        </div>
      </div>
    </footer>
  );
}
