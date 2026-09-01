"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  Brain,
  Sparkles,
  ShieldCheck,
  LayoutDashboard,
  CheckSquare,
  FileText,
  Mic,
  MessageSquare,
  Plug,
  Database,
  Receipt,
  Shield,
  Layers,
  Sparkle,
  Lock,
  Boxes,
  Users,
  CreditCard,
  Building2,
  Newspaper,
  HelpCircle,
  PhoneCall,
  Flame,
  Award,
  Zap,
  Tag,
  BookOpen,
} from "lucide-react";
import { featureNavColumns, featureNavItems } from "@/lib/feature-nav";

interface NavbarClientProps {
  navigation: {
    readonly links: readonly { readonly label: string; readonly href: string }[];
    readonly cta?: { readonly label: string; readonly href: string } | null;
  } | null;
  siteSettings: {
    readonly siteName: string;
    readonly logo: string | null;
  } | null;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Sparkles,
  ShieldCheck,
  LayoutDashboard,
  CheckSquare,
  FileText,
  Mic,
  MessageSquare,
  Plug,
  Database,
  Receipt,
  Shield,
  Layers,
  Sparkle,
  Lock,
  Boxes,
  Users,
  CreditCard,
  Building2,
  Newspaper,
  HelpCircle,
  PhoneCall,
  Flame,
  Award,
  Zap,
  Tag,
  BookOpen,
};

function NavIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = ICON_MAP[name] || Sparkles;
  return <IconComponent className={className} />;
}

// Reusable megamenu item with hover-revealed subline
function MegaMenuItem({
  title,
  desc,
  href,
  iconName,
  onNavigate,
}: {
  title: string;
  desc: string;
  href: string;
  iconName?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group/item flex flex-col p-2.5 rounded-md hover:bg-muted/40 transition-all duration-150"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2.5 min-w-0">
          {iconName && (
            <NavIcon
              name={iconName}
              className="size-3.5 text-muted-foreground group-hover/item:text-foreground shrink-0 transition-colors"
            />
          )}
          <span className="text-[13px] font-medium text-foreground/90 group-hover/item:text-foreground group-hover/item:font-semibold transition-all font-display truncate">
            {title}
          </span>
        </div>
        <ArrowRight className="size-3 text-muted-foreground opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-foreground transition-all duration-150 shrink-0 ml-1" />
      </div>
      <div className="grid grid-rows-[0fr] group-hover/item:grid-rows-[1fr] transition-[grid-template-rows] duration-200 ease-out pl-6">
        <div className="overflow-hidden">
          <p className="text-[11px] font-sans text-muted-foreground leading-relaxed pt-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}

// Reusable overview preview card on the left
function MegaMenuOverviewCard({
  href,
  title,
  subtitle,
  lightImage,
  darkImage,
  onNavigate,
}: {
  href: string;
  title: string;
  subtitle: string;
  lightImage: string;
  darkImage: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group/card block rounded-lg border border-border/70 bg-card/60 overflow-hidden hover:border-foreground/20 transition-all duration-200"
    >
      <div className="relative h-24 w-full overflow-hidden bg-muted/40">
        <Image
          src={lightImage}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover object-top dark:hidden transition-transform duration-300 group-hover/card:scale-105"
        />
        <Image
          src={darkImage}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover object-top hidden dark:block transition-transform duration-300 group-hover/card:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>
      <div className="p-3.5 pt-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] font-semibold text-foreground font-display">{title}</span>
          <ArrowRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover/card:translate-x-1 group-hover/card:text-foreground" />
        </div>
        <p className="text-[11.5px] text-muted-foreground mt-0.5 font-sans">{subtitle}</p>
      </div>
    </Link>
  );
}

export function NavbarClient({ navigation, siteSettings }: NavbarClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  // Controlled active menu state to seamlessly unify top area + navbar + megamenu
  const [activeMenu, setActiveMenu] = useState<"product" | "pricing" | "company" | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnterMenu = (menuId: "product" | "pricing" | "company") => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMenu(menuId);
  };

  const handleMouseLeaveMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 140);
  };

  const handleCancelClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const closeMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMenu(null);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  const links = navigation?.links || [];
  const cta = navigation?.cta || { label: "Start Free", href: "https://app.Keilhq.in/login" };
  const siteName = siteSettings?.siteName || "KeilHQ";

  const isMenuOpen = activeMenu !== null;

  return (
    <>
      {/* ── UNIFIED FIXED HEADER & MEGAMENU SHELL ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isMenuOpen
            ? "bg-background/95 backdrop-blur-xl"
            : isScrolled
            ? "bg-transparent"
            : "bg-transparent"
        }`}
        onMouseLeave={handleMouseLeaveMenu}
      >
        {/* ── TOP NAV BAR ROW (Fixed stable positioning with zero layout shift) ── */}
        <div className="flex justify-center pt-4 sm:pt-5 pb-3">
          <nav
            className={`flex items-center justify-between md:justify-start gap-6 px-5 py-2 rounded-sm transition-colors duration-200 w-[calc(100%-2rem)] md:w-auto border ${
              isMenuOpen
                ? "bg-transparent border-transparent shadow-none"
                : isScrolled
                ? "bg-background/85 backdrop-blur-md border-border shadow-sm"
                : "bg-transparent border-transparent shadow-none backdrop-blur-none"
            }`}
          >
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group mr-2"
              onClick={closeMenu}
              onMouseEnter={closeMenu}
            >
              {siteSettings?.logo ? (
                <>
                  <Image
                    src={siteSettings.logo}
                    alt={`${siteName} Logo`}
                    width={22}
                    height={22}
                    className="transition-opacity duration-300 dark:hidden"
                    priority
                  />
                  <Image
                    src={siteSettings.logo.replace(".svg", "-white.svg")}
                    alt={`${siteName} Logo`}
                    width={22}
                    height={22}
                    className="transition-opacity duration-300 hidden dark:block"
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = siteSettings.logo || "";
                    }}
                  />
                </>
              ) : (
                <>
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
                </>
              )}
              <span className="text-sm font-semibold tracking-tight text-foreground font-display">
                {siteName}
              </span>
            </Link>

            {/* Desktop Nav Links with Controlled Megamenu Triggers */}
            <div className="hidden md:flex items-center gap-5">
              {links.map((link) => {
                if (link.href === "/features") {
                  return (
                    <div
                      key={link.href}
                      onMouseEnter={() => handleMouseEnterMenu("product")}
                      className="relative py-2 cursor-pointer"
                    >
                      <span
                        className={`flex items-center gap-1 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-150 font-display ${
                          activeMenu === "product" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Product
                      </span>
                    </div>
                  );
                }

                if (link.href === "/pricing") {
                  return (
                    <div
                      key={link.href}
                      onMouseEnter={() => handleMouseEnterMenu("pricing")}
                      className="relative py-2 cursor-pointer"
                    >
                      <Link
                        href="/pricing"
                        onClick={closeMenu}
                        className={`flex items-center gap-1 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-150 font-display ${
                          activeMenu === "pricing" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                }

                if (link.href === "/company") {
                  return (
                    <div
                      key={link.href}
                      onMouseEnter={() => handleMouseEnterMenu("company")}
                      className="relative py-2 cursor-pointer"
                    >
                      <Link
                        href="/about"
                        onClick={closeMenu}
                        className={`flex items-center gap-1 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-150 font-display ${
                          activeMenu === "company" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    onMouseEnter={closeMenu}
                    className="text-[13px] font-semibold tracking-[0.01em] text-muted-foreground hover:text-foreground transition-colors duration-150 py-2 font-display"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3 ml-2" onMouseEnter={closeMenu}>
              {/* Start Free CTA */}
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex btn-accent items-center gap-1.5 text-[13px] font-semibold tracking-[0.01em] px-4 py-1.5 rounded-sm"
              >
                {cta.label}
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
        </div>

        {/* ── FULL-WIDTH MEGAMENU PANELS (Directly integrated underneath navbar, sharing the same background) ── */}
        {isMenuOpen && (
          <div
            className="w-full bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-none animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseEnter={handleCancelClose}
          >
            {/* 1. PRODUCT MEGAMENU PANEL */}
            {activeMenu === "product" && (
              <div className="max-w-[1240px] mx-auto px-6 sm:px-8 pt-4 pb-8 flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Platform Overview & Architecture Tree */}
                  <div className="col-span-3 pr-6 border-r border-border/70 flex flex-col gap-5 text-left">
                    <MegaMenuOverviewCard
                      href="/features"
                      title="Platform overview"
                      subtitle="See how KeilHQ works."
                      lightImage="/mockups/dashboard/dashboard-snapshot-light.png"
                      darkImage="/mockups/dashboard/dashboard-snapshot-dark.png"
                      onNavigate={closeMenu}
                    />

                    <div className="flex flex-col gap-2.5">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground/70">
                        Built for enterprise AI.
                      </span>

                      <div className="flex flex-col gap-2 text-[12px] font-medium text-muted-foreground font-display">
                        {[
                          { icon: "Sparkle", title: "Keil Context Engine", sub: "Connectors & actions", href: "/features/integrations" },
                          { icon: "Brain", title: "Supervisor Intelligence", sub: "Auto routing & memory", href: "/features/smart-dashboard" },
                          { icon: "Shield", title: "Keil Protect", sub: "Multi-space RBAC", href: "/features/workspace" },
                        ].map((item) => (
                          <div key={item.title} className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-foreground/90 font-semibold">
                              <NavIcon name={item.icon} className="size-3 text-muted-foreground shrink-0" />
                              <span>{item.title}</span>
                            </div>
                            <div className="pl-4 text-[11px] text-muted-foreground flex items-center gap-1">
                              <span className="text-muted-foreground/40 font-mono">└─</span>
                              <Link href={item.href} onClick={closeMenu} className="hover:text-foreground transition-colors">
                                {item.sub}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: 3 Category Columns */}
                  <div className="col-span-9 grid grid-cols-3 gap-8 text-left">
                    {featureNavColumns.map((col) => (
                      <div key={col.id} className="flex flex-col">
                        <div className="flex items-start gap-2.5 pb-3 mb-2 border-b border-border/70">
                          <div className="p-1.5 rounded-md bg-muted/60 text-foreground shrink-0 mt-0.5 border border-border/50">
                            <NavIcon name={col.iconName} className="size-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-semibold text-foreground font-display leading-tight">
                              {col.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground font-sans mt-0.5 leading-snug">
                              {col.subtitle}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1 mt-1">
                          {col.items.map((item) => (
                            <MegaMenuItem
                              key={item.id}
                              title={item.title}
                              desc={item.desc}
                              href={item.href}
                              iconName={item.iconName}
                              onNavigate={closeMenu}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Announcement Strip */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-muted/60 border border-border text-foreground">
                      Coming soon
                    </span>
                    <span className="text-[12px] text-muted-foreground font-sans">
                      <strong className="text-foreground font-medium">Keil Transform:</strong> See where AI can make the biggest impact across your team
                    </span>
                  </div>
                  <Link
                    href="/demo"
                    onClick={closeMenu}
                    className="text-[12px] font-semibold text-foreground hover:text-muted-foreground flex items-center gap-1 group/demolink transition-colors font-display"
                  >
                    Book a walkthrough
                    <ArrowRight className="size-3 transition-transform group-hover/demolink:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* 2. PRICING MEGAMENU PANEL */}
            {activeMenu === "pricing" && (
              <div className="max-w-[1240px] mx-auto px-6 sm:px-8 pt-4 pb-8 flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Pricing Overview & Guarantee */}
                  <div className="col-span-3 pr-6 border-r border-border/70 flex flex-col gap-5 text-left">
                    <MegaMenuOverviewCard
                      href="/pricing"
                      title="Transparent pricing"
                      subtitle="Start free. Scale with confidence."
                      lightImage="/mockups/finance/finance-overview-light.png"
                      darkImage="/mockups/finance/finance-overview-dark.png"
                      onNavigate={closeMenu}
                    />

                    <div className="flex flex-col gap-2.5">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground/70">
                        The KeilHQ Guarantee.
                      </span>

                      <div className="flex flex-col gap-2 text-[12px] font-medium text-muted-foreground font-display">
                        {[
                          { icon: "Zap", title: "30-Day Full Trial", sub: "Zero commitment & instant setup" },
                          { icon: "Receipt", title: "No Hidden Fees", sub: "Predictable self-serve billing" },
                          { icon: "ShieldCheck", title: "Enterprise Security", sub: "Data isolation & custom SLAs" },
                        ].map((item) => (
                          <div key={item.title} className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-foreground/90 font-semibold">
                              <NavIcon name={item.icon} className="size-3 text-muted-foreground shrink-0" />
                              <span>{item.title}</span>
                            </div>
                            <div className="pl-4 text-[11px] text-muted-foreground">{item.sub}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: 3 Tier Columns */}
                  <div className="col-span-9 grid grid-cols-3 gap-8 text-left">
                    {[
                      {
                        id: "personal",
                        iconName: "Sparkles",
                        title: "Personal & Solo",
                        subtitle: "For founders & power users",
                        items: [
                          { title: "Free Trial (₹0)", desc: "30 days of full AI access with zero credit card commitment.", href: "/pricing", icon: "Tag" },
                          { title: "Pro Monthly (₹500/mo*)", desc: "For individual leaders who want continuous Supervisor AI context.", href: "/pricing", icon: "Tag" },
                          { title: "Pro Annual (Save 20%)", desc: "Billed yearly with priority model compute and infinite memory.", href: "/pricing", icon: "Tag" },
                        ],
                      },
                      {
                        id: "team",
                        iconName: "Users",
                        title: "Team Collaboration",
                        subtitle: "For growing agile startups",
                        items: [
                          { title: "Teams 5 Seats (₹1,500/mo*)", desc: "Shared organizational memory, team chat & sprint tracking.", href: "/pricing", icon: "Users" },
                          { title: "Business Tier (₹3,000/mo*)", desc: "Multi-space permissions, Relational CRM & financial ledgers.", href: "/pricing", icon: "Users" },
                          { title: "Additional Seats (Flex)", desc: "Scale smoothly per user as your product team expands.", href: "/pricing", icon: "Users" },
                        ],
                      },
                      {
                        id: "enterprise",
                        iconName: "ShieldCheck",
                        title: "Enterprise & Scale",
                        subtitle: "Governance, SSO & custom SLAs",
                        items: [
                          { title: "Enterprise Custom", desc: "Dedicated instance, custom LLM routing and SSO/SAML integration.", href: "/pricing", icon: "Shield" },
                          { title: "White-Glove Migration", desc: "Direct concierge migration from Notion, Slack, Jira and Linear.", href: "/demo", icon: "Shield" },
                          { title: "Compare All Plans", desc: "Detailed matrix of features, limits, and team permissions.", href: "/pricing", icon: "Shield" },
                        ],
                      },
                    ].map((col) => (
                      <div key={col.id} className="flex flex-col">
                        <div className="flex items-start gap-2.5 pb-3 mb-2 border-b border-border/70">
                          <div className="p-1.5 rounded-md bg-muted/60 text-foreground shrink-0 mt-0.5 border border-border/50">
                            <NavIcon name={col.iconName} className="size-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-semibold text-foreground font-display leading-tight">
                              {col.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground font-sans mt-0.5 leading-snug">
                              {col.subtitle}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1 mt-1">
                          {col.items.map((item) => (
                            <MegaMenuItem
                              key={item.title}
                              title={item.title}
                              desc={item.desc}
                              href={item.href}
                              iconName={item.icon}
                              onNavigate={closeMenu}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Announcement */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-muted/60 border border-border text-foreground">
                      Intro Offer
                    </span>
                    <span className="text-[12px] text-muted-foreground font-sans">
                      <strong className="text-foreground font-medium">Special Launch Pricing:</strong> Locked-in introductory rates for all early workspace accounts
                    </span>
                  </div>
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="text-[12px] font-semibold text-foreground hover:text-muted-foreground flex items-center gap-1 group/demolink transition-colors font-display"
                  >
                    View complete plan matrix
                    <ArrowRight className="size-3 transition-transform group-hover/demolink:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* 3. COMPANY MEGAMENU PANEL */}
            {activeMenu === "company" && (
              <div className="max-w-[1240px] mx-auto px-6 sm:px-8 pt-4 pb-8 flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Mission Overview */}
                  <div className="col-span-3 pr-6 border-r border-border/70 flex flex-col gap-5 text-left">
                    <MegaMenuOverviewCard
                      href="/about"
                      title="Built by creators"
                      subtitle="The future of autonomous work."
                      lightImage="/mockups/organisations/organisation-light.png"
                      darkImage="/mockups/organisations/organisation-dark.png"
                      onNavigate={closeMenu}
                    />

                    <div className="flex flex-col gap-2.5">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground/70">
                        Core Principles.
                      </span>

                      <div className="flex flex-col gap-2 text-[12px] font-medium text-muted-foreground font-display">
                        {[
                          { icon: "Brain", title: "Quiet Engineering", sub: "Zero notification spam, maximum clarity" },
                          { icon: "Lock", title: "Data Sovereignty", sub: "Your data is never used for training" },
                          { icon: "Sparkle", title: "Deep Integration", sub: "Seamlessly bridges existing dev tools" },
                        ].map((item) => (
                          <div key={item.title} className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-foreground/90 font-semibold">
                              <NavIcon name={item.icon} className="size-3 text-muted-foreground shrink-0" />
                              <span>{item.title}</span>
                            </div>
                            <div className="pl-4 text-[11px] text-muted-foreground">{item.sub}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: 3 Company Columns */}
                  <div className="col-span-9 grid grid-cols-3 gap-8 text-left">
                    {[
                      {
                        id: "team",
                        iconName: "Building2",
                        title: "Company & Team",
                        subtitle: "Our vision and origins",
                        items: [
                          { title: "About Us", desc: "Our philosophy, product engineering, and mission.", href: "/about", icon: "Building2" },
                          { title: "Interactive Demo", desc: "Book a personalized 1-on-1 walkthrough with our engineers.", href: "/demo", icon: "Building2" },
                          { title: "Brand Assets", desc: "Logos, brand guide, typography, and media kit.", href: "/brand", icon: "Building2" },
                        ],
                      },
                      {
                        id: "news",
                        iconName: "Newspaper",
                        title: "News & Releases",
                        subtitle: "Engineering logs & updates",
                        items: [
                          { title: "Product Changelog", desc: "Weekly shipped features, improvements and speed fixes.", href: "/changelog", icon: "Newspaper" },
                          { title: "Engineering Blog", desc: "Technical architectural breakdowns and AI design patterns.", href: "/blog", icon: "Newspaper" },
                          { title: "Frequently Asked Questions", desc: "Clear answers to common questions about workflows and setup.", href: "/faq", icon: "Newspaper" },
                        ],
                      },
                      {
                        id: "trust",
                        iconName: "ShieldCheck",
                        title: "Trust & Support",
                        subtitle: "Security, legal & help",
                        items: [
                          { title: "Privacy & Security", desc: "Data protection policies, encryption, and zero-training commitments.", href: "/privacy", icon: "Shield" },
                          { title: "Terms of Service", desc: "Standard service agreements and fair customer rights.", href: "/terms", icon: "Shield" },
                          { title: "Help & Support", desc: "Direct engineering support channel and troubleshooting.", href: "/support", icon: "Shield" },
                        ],
                      },
                    ].map((col) => (
                      <div key={col.id} className="flex flex-col">
                        <div className="flex items-start gap-2.5 pb-3 mb-2 border-b border-border/70">
                          <div className="p-1.5 rounded-md bg-muted/60 text-foreground shrink-0 mt-0.5 border border-border/50">
                            <NavIcon name={col.iconName} className="size-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-semibold text-foreground font-display leading-tight">
                              {col.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground font-sans mt-0.5 leading-snug">
                              {col.subtitle}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1 mt-1">
                          {col.items.map((item) => (
                            <MegaMenuItem
                              key={item.title}
                              title={item.title}
                              desc={item.desc}
                              href={item.href}
                              iconName={item.icon}
                              onNavigate={closeMenu}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Announcement */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-muted/60 border border-border text-foreground">
                      We&apos;re Building
                    </span>
                    <span className="text-[12px] text-muted-foreground font-sans">
                      <strong className="text-foreground font-medium">Join our mission:</strong> Shape the next generation of self-driving product operations
                    </span>
                  </div>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="text-[12px] font-semibold text-foreground hover:text-muted-foreground flex items-center gap-1 group/demolink transition-colors font-display"
                  >
                    Read our founding story
                    <ArrowRight className="size-3 transition-transform group-hover/demolink:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </header>

      {/* ── MOBILE DRAWER ── */}
      {isMobileMenuOpen && (
        <div className="fixed top-[calc(100%+4px)] left-4 right-4 border border-border bg-card/95 rounded-sm p-5 shadow-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 md:hidden max-h-[85vh] overflow-y-auto backdrop-blur-lg z-50">
          {links.map((link) => {
            if (link.href === "/features") {
              return (
                <div key={link.href} className="flex flex-col gap-1 border-b border-border pb-2">
                  <button
                    onClick={() => toggleMobileSection("features")}
                    className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground py-2 px-2 text-left w-full bg-transparent border-none cursor-pointer font-display"
                  >
                    <span>Product</span>
                  </button>
                  {mobileExpandedSection === "features" && (
                    <div className="flex flex-col gap-4 pl-2 mt-1">
                      <Link
                        href="/features"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between p-2 rounded bg-muted/50 text-xs font-semibold text-foreground font-display"
                      >
                        <span>Platform Overview</span>
                        <ArrowRight className="size-3" />
                      </Link>

                      {featureNavColumns.map((col) => (
                        <div key={col.id} className="flex flex-col gap-1.5">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground px-2">
                            {col.title}
                          </span>
                          {col.items.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex flex-col gap-0.5 hover:bg-muted/40 p-2 rounded-sm"
                            >
                              <div className="flex items-center gap-1.5">
                                <NavIcon name={item.iconName} className="size-3 text-muted-foreground" />
                                <span className="text-xs font-semibold text-foreground font-display">
                                  {item.title}
                                </span>
                              </div>
                              <span className="text-[10.5px] text-muted-foreground pl-4.5">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (link.href === "/pricing") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2.5 px-2 border-b border-border transition-colors text-left font-display"
                >
                  {link.label}
                </Link>
              );
            }

            if (link.href === "/company") {
              return (
                <div key={link.href} className="flex flex-col gap-1 border-b border-border pb-2">
                  <button
                    onClick={() => toggleMobileSection("company")}
                    className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground py-2 px-2 text-left w-full bg-transparent border-none cursor-pointer font-display"
                  >
                    <span>{link.label}</span>
                  </button>
                  {mobileExpandedSection === "company" && (
                    <div className="flex flex-col gap-1.5 pl-4 mt-1">
                      {[
                        { title: "About Us", href: "/about" },
                        { title: "Demo", href: "/demo" },
                        { title: "Brand Assets", href: "/brand" },
                        { title: "Changelog", href: "/changelog" },
                        { title: "Blog", href: "/blog" },
                        { title: "FAQ", href: "/faq" },
                        { title: "Privacy", href: "/privacy" },
                        { title: "Support", href: "/support" },
                      ].map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex flex-col gap-0.5 hover:bg-muted/40 p-2 rounded-sm"
                        >
                          <span className="text-xs font-semibold text-foreground font-display">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2.5 px-2 border-b border-border last:border-0 transition-colors text-left font-display"
              >
                {link.label}
              </Link>
            );
          })}

          {/* Login CTA in Mobile */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsLoginDialogOpen(true);
            }}
            className="text-sm font-semibold text-foreground hover:text-muted-foreground py-2.5 px-2 transition-colors mt-2 text-left bg-transparent border-none cursor-pointer font-display"
          >
            Login
          </button>
        </div>
      )}

      {/* ── LOGIN MODAL DIALOG ── */}
      {isLoginDialogOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            onClick={() => setIsLoginDialogOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          />

          <div className="relative w-full max-w-lg bg-card border border-border rounded-sm p-5 sm:p-6 shadow-md z-10 animate-in fade-in zoom-in-95 duration-200 select-text flex flex-col gap-4">
            <button
              onClick={() => setIsLoginDialogOpen(false)}
              className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
              aria-label="Close dialog"
            >
              <X className="size-4.5" />
            </button>

            <div className="flex flex-col gap-0.5 pr-6">
              <h3 className="text-xl font-semibold text-foreground tracking-tight font-display">
                Get started
              </h3>
              <p className="text-xs text-muted-foreground">
                Add {siteName} to the apps where you already work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-medium text-muted-foreground pl-1 font-display">
                  Microsoft 365
                </span>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-muted/30 border border-border hover:bg-muted/80 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-foreground font-display">Excel</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#107C41" />
                    <path d="M10.5 7.5L8 12l2.5 4.5h2L10 12l2.5-4.5h-2z" fill="#FFF" />
                  </svg>
                </a>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-muted/30 border border-border hover:bg-muted/80 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-foreground font-display">PowerPoint</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#C43E1C" />
                    <path d="M9.5 7.5h2.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H9.5v3.5H8v-8.5h1.5zm0 3.5h2.5c.6 0 1-.4 1-1s-.4-1-1-1H9.5v2z" fill="#FFF" />
                  </svg>
                </a>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-muted/30 border border-border hover:bg-muted/80 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-foreground font-display">Word</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 2H9.3C4.1 2 2 4.1 2 9.3v5.4C2 19.9 4.1 22 9.3 22h5.4c5.2 0 7.3-2.1 7.3-7.3V9.3C22 4.1 19.9 2 14.7 2z" fill="#185ABD" />
                    <path d="M7.5 7.5l2 6.5 2-6.5h2.2l-3.2 8.5H8.5l-3.2-8.5h2.2z" fill="#FFF" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-medium text-muted-foreground pl-1 font-display">
                  Google
                </span>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-muted/30 border border-border hover:bg-muted/80 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-foreground font-display">Google Sheets</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#0F9D58" />
                    <path d="M7 7h4v4H7V7zm6 0h4v4h-4V7zm-6 6h4v4H7v-4zm6 0h4v4h-4v-4z" fill="#FFF" opacity="0.9" />
                  </svg>
                </a>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-muted/30 border border-border hover:bg-muted/80 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-foreground font-display">Google Slides</span>
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#F4B400" />
                    <path d="M7 8h10v6H7V8zm2 2v2h6v-2H9z" fill="#FFF" opacity="0.9" />
                  </svg>
                </a>

                <a
                  href="https://workspace.google.com/marketplace/app/o11/998786406602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-sm bg-muted/30 border border-border hover:bg-muted/80 transition-all shadow-sm"
                >
                  <span className="text-xs font-semibold text-foreground font-display">Google Docs</span>
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
              className="w-full flex items-center justify-between p-3 px-4 rounded-sm btn-accent mt-2 cursor-pointer"
            >
              <span className="text-xs font-semibold">Log in</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
