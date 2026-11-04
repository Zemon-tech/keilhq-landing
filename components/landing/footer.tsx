import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "@/components/ui/toggle-theme";

const SITE_NAME = "KeilHQ";
const LOGO = "/keilhq.svg";
const LOGO_WHITE = "/keilhq-white.svg";

const TWITTER_URL = "https://x.com/keilhq";
const INSTAGRAM_URL = "https://www.instagram.com/keilhq.in";
const LINKEDIN_URL = "https://www.linkedin.com/company/keil-hq/";
const YOUTUBE_URL = "https://www.youtube.com/@keilhqglobal";

const FOOTER_COLUMNS = [
  {
    title: "Features",
    links: [
      { label: "Dashboard", href: "/features/smart-dashboard" },
      { label: "Task Management", href: "/features/task-management" },
      { label: "Docs & Notes", href: "/features/docs-notes" },
      { label: "Team Chat", href: "/features/team-chat" },
      { label: "Meeting Notes", href: "/features/meeting-recorder" },
      { label: "Relational CRM", href: "/features/crm" },
      { label: "Finance & Bookkeeping", href: "/features/finance" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Now", href: "/now" },
      { label: "Changelog", href: "/now?tab=changelog" },
      { label: "Press", href: "/now?tab=press" },
      { label: "Support & FAQ", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Brand", href: "/brand" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: TWITTER_URL },
      { label: "Instagram", href: INSTAGRAM_URL },
      { label: "LinkedIn", href: LINKEDIN_URL },
      { label: "YouTube", href: YOUTUBE_URL },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = `KeilHQ. All rights reserved. © ${currentYear}`;

  return (
    <footer className="w-full min-h-[100dvh] bg-background relative z-[60] flex flex-col justify-between pt-20 sm:pt-28 overflow-hidden select-text">

      {/* Top Links Section */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between gap-16 md:gap-8 z-10 relative">
        {/* Brand and Social Links */}
        <div className="md:w-1/4 shrink-0 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src={LOGO} alt={SITE_NAME} width={22} height={22} className="dark:hidden" />
            <Image
              src={LOGO_WHITE}
              alt={SITE_NAME}
              width={22}
              height={22}
              className="hidden dark:block"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              {SITE_NAME}
            </span>
          </Link>

          {/* Theme Toggle */}
          <div>
            <ToggleTheme />
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4 text-left">
              <span className="text-[11px] font-sans tracking-widest text-muted-foreground uppercase">
                {column.title}
              </span>
              <nav className="flex flex-col gap-2.5">
                {column.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-medium tracking-wide"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Giant Watermark Text */}
      <div className="w-full flex justify-center items-center overflow-hidden mt-12 sm:mt-16 mb-2 select-none z-0 relative">
        <span
          className="font-display text-[clamp(5rem,18vw,15rem)] font-bold tracking-tight leading-none text-border dark:text-[#F7F4EE]/[0.08] select-none pointer-events-none transition-colors duration-300"
        >
          {SITE_NAME}
        </span>
      </div>

      {/* Copyright and Privacy Links Row */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-border z-10 relative">
        <span className="text-[13px] text-muted-foreground font-normal tracking-wide w-full md:w-1/3 text-center md:text-left">
          {copyrightText}
        </span>

        <div className="flex items-center gap-6 flex-wrap justify-center w-full md:w-1/3 text-[13px] font-normal tracking-wide">
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors font-sans text-[12px]"
          >
            llms.txt
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end w-full md:w-1/3 gap-3">
          <span className="text-[13px] text-muted-foreground font-normal tracking-wide">
            Made in India.
          </span>
        </div>
      </div>
    </footer>
  );
}
