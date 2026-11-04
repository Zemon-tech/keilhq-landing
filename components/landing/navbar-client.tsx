"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { WAITLIST_URL, APP_LOGIN_URL } from "@/lib/waitlist";
import { trackStartFreeClick } from "@/lib/analytics";
import {
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  User,
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
  Zap,
} from "lucide-react";
import { featureNavColumns } from "@/lib/feature-nav";

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
  Zap,
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

// Reusable overview preview card
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
      <div className="relative h-24 sm:h-28 w-full overflow-hidden bg-muted/40">
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
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<"product" | "pricing" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Controlled active menu state for desktop megamenu
  const [activeMenu, setActiveMenu] = useState<"product" | "pricing" | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop megamenu or mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        if (isMobileMenuOpen) {
          if (mobileActiveCategory) {
            setMobileActiveCategory(null);
          } else {
            setIsMobileMenuOpen(false);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen, mobileActiveCategory]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileActiveCategory(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnterMenu = (menuId: "product" | "pricing") => {
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
    setIsMobileMenuOpen(false);
    setMobileActiveCategory(null);
  };

  const links = navigation?.links || [];
  const cta = navigation?.cta || { label: "Start Free", href: WAITLIST_URL };
  const siteName = siteSettings?.siteName || "KeilHQ";

  const isMenuOpen = activeMenu !== null;

  return (
    <>
      {/* ── UNIFIED FIXED HEADER & MEGAMENU SHELL (Desktop & Mobile Trigger) ── */}
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
        {/* ── TOP NAV BAR ROW ── */}
        <div className="flex justify-center pt-3 sm:pt-5 pb-2.5">
          <nav
            className={`flex items-center justify-between md:justify-start gap-4 sm:gap-6 px-4 sm:px-5 py-2 rounded-sm transition-colors duration-200 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-auto border ${
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
              className="flex items-center gap-2 group mr-2 shrink-0"
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

            {/* Right Action Area */}
            <div className="flex items-center gap-2 sm:gap-3 ml-auto md:ml-2" onMouseEnter={closeMenu}>
              {/* CTA Button (Visible on both Desktop & Mobile like Glean header) */}
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackStartFreeClick({
                    location: "navbar_header",
                    label: cta.label,
                    href: cta.href,
                  })
                }
                className="btn-accent inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold tracking-[0.01em] px-3.5 sm:px-4 py-1.5 rounded-full md:rounded-sm transition-transform active:scale-[0.97]"
              >
                {cta.label}
                <ArrowRight className="size-3" aria-hidden="true" />
              </a>

              {/* Mobile menu hamburger toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-1.5 text-foreground hover:text-muted-foreground transition-colors cursor-pointer rounded-md active:scale-[0.95]"
                aria-label="Open Navigation Menu"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </nav>
        </div>

        {/* ── DESKTOP MEGAMENU PANELS ── */}
        {isMenuOpen && (
          <div
            className="hidden md:block w-full bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-none animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseEnter={handleCancelClose}
          >
            {/* 1. PRODUCT MEGAMENU PANEL */}
            {activeMenu === "product" && (
              <div className="max-w-[1240px] mx-auto px-6 sm:px-8 pt-4 pb-8 flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Left: Platform Overview */}
                  <div className="col-span-3 pr-6 border-r border-border/70 flex flex-col gap-5 text-left">
                    <MegaMenuOverviewCard
                      href="/features/smart-dashboard"
                      title="Platform overview"
                      subtitle="See how KeilHQ works."
                      lightImage="/mockups/dashboard/dashboard-snapshot-light.png"
                      darkImage="/mockups/dashboard/dashboard-snapshot-dark.png"
                      onNavigate={closeMenu}
                    />
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
              </div>
            )}

            {/* 2. PRICING MEGAMENU PANEL */}
            {activeMenu === "pricing" && (
              <div className="max-w-[1240px] mx-auto px-6 sm:px-8 pt-4 pb-8 flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Left: Pricing Overview */}
                  <div className="col-span-5 pr-6 border-r border-border/70 flex flex-col gap-5 text-left">
                    <MegaMenuOverviewCard
                      href="/pricing"
                      title="Transparent pricing"
                      subtitle="Start free. Scale with confidence."
                      lightImage="/mockups/finance/finance-overview-light.png"
                      darkImage="/mockups/finance/finance-overview-dark.png"
                      onNavigate={closeMenu}
                    />
                  </div>

                  {/* Right: Guarantee */}
                  <div className="col-span-7 flex flex-col text-left">
                    <div className="flex items-start gap-2.5 pb-3 mb-2 border-b border-border/70">
                      <div className="p-1.5 rounded-md bg-muted/60 text-foreground shrink-0 mt-0.5 border border-border/50">
                        <NavIcon name="ShieldCheck" className="size-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-foreground font-display leading-tight">
                          The KeilHQ Guarantee
                        </span>
                        <span className="text-[11px] text-muted-foreground font-sans mt-0.5 leading-snug">
                          Simple terms, no surprises.
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 mt-1">
                      {[
                        { title: "30-Day Full Trial", desc: "Zero commitment & instant setup.", icon: "Zap" },
                        { title: "No Hidden Fees", desc: "Predictable self-serve billing.", icon: "Receipt" },
                        { title: "Enterprise Security", desc: "Data isolation & custom SLAs.", icon: "ShieldCheck" },
                      ].map((item) => (
                        <MegaMenuItem
                          key={item.title}
                          title={item.title}
                          desc={item.desc}
                          href="/pricing"
                          iconName={item.icon}
                          onNavigate={closeMenu}
                        />
                      ))}
                    </div>
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
                    className="text-[12px] font-semibold text-foreground hover:text-muted-foreground flex items-center gap-1 group/menulink transition-colors font-display"
                  >
                    View complete plan matrix
                    <ArrowRight className="size-3 transition-transform group-hover/menulink:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )}

          </div>
        )}
      </header>

      {/* ── GLEAN-INSPIRED FULL-SCREEN HIERARCHICAL MOBILE DRAWER ── */}
      {mounted && isMobileMenuOpen && createPortal(
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-touch="true"
          data-lenis-prevent-wheel="true"
          className="fixed inset-0 z-[9999] bg-background flex flex-col md:hidden h-[100dvh] max-h-[100dvh] overflow-hidden"
          style={{ touchAction: "pan-y" }}
          onTouchMove={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Mobile Top App Bar (Header in Drawer) */}
          <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border/60 shrink-0">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              {siteSettings?.logo ? (
                <>
                  <Image
                    src={siteSettings.logo}
                    alt={`${siteName} Logo`}
                    width={24}
                    height={24}
                    className="transition-opacity duration-300 dark:hidden"
                    priority
                  />
                  <Image
                    src={siteSettings.logo.replace(".svg", "-white.svg")}
                    alt={`${siteName} Logo`}
                    width={24}
                    height={24}
                    className="transition-opacity duration-300 hidden dark:block"
                    priority
                  />
                </>
              ) : (
                <>
                  <Image
                    src="/keilhq.svg"
                    alt="KeilHQ Logo"
                    width={24}
                    height={24}
                    className="transition-opacity duration-300 dark:hidden"
                    priority
                  />
                  <Image
                    src="/keilhq-white.svg"
                    alt="KeilHQ Logo"
                    width={24}
                    height={24}
                    className="transition-opacity duration-300 hidden dark:block"
                    priority
                  />
                </>
              )}
              <span className="text-base font-semibold tracking-tight text-foreground font-display">
                {siteName}
              </span>
            </Link>

            {/* Right Action & Close Button */}
            <div className="flex items-center gap-3">
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full active:scale-[0.97] transition-transform"
              >
                {cta.label}
              </a>
              <button
                onClick={closeMenu}
                className="p-1.5 text-foreground hover:text-muted-foreground transition-colors cursor-pointer rounded-md active:scale-[0.95]"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* ── LEVEL 1: ROOT MOBILE MENU ── */}
          {mobileActiveCategory === null ? (
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 py-3 pb-20 flex flex-col justify-between animate-in fade-in slide-in-from-left-2 duration-150 touch-pan-y">
              <div className="flex flex-col divide-y divide-border/50">
                {/* Product Trigger */}
                <button
                  onClick={() => setMobileActiveCategory("product")}
                  className="w-full flex items-center justify-between py-4 text-left font-display text-[15px] font-medium text-foreground hover:text-muted-foreground active:opacity-70 transition-all cursor-pointer bg-transparent border-none"
                >
                  <span>Product</span>
                  <span className="text-[11px] text-foreground font-mono">▶</span>
                </button>

                {/* Pricing Trigger */}
                <button
                  onClick={() => setMobileActiveCategory("pricing")}
                  className="w-full flex items-center justify-between py-4 text-left font-display text-[15px] font-medium text-foreground hover:text-muted-foreground active:opacity-70 transition-all cursor-pointer bg-transparent border-none"
                >
                  <span>Pricing</span>
                  <span className="text-[11px] text-foreground font-mono">▶</span>
                </button>

                {/* Other direct links from navigation */}
                {links
                  .filter((l) => l.href !== "/features" && l.href !== "/pricing")
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="w-full flex items-center justify-between py-4 text-left font-display text-[15px] font-medium text-foreground hover:text-muted-foreground active:opacity-70 transition-all"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="size-3.5 text-muted-foreground" />
                    </Link>
                  ))}

                {/* Sign in Option */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsLoginDialogOpen(true);
                  }}
                  className="w-full flex items-center justify-between py-4 text-left font-display text-[14px] font-medium text-foreground hover:text-muted-foreground active:opacity-70 transition-all cursor-pointer bg-transparent border-none pt-5"
                >
                  <div className="flex items-center gap-2.5">
                    <User className="size-4 text-foreground" />
                    <span>Sign in</span>
                  </div>
                  <ArrowRight className="size-3.5 text-muted-foreground" />
                </button>
              </div>

              {/* Bottom Quick Help Info */}
              <div className="py-6 border-t border-border/40 text-center">
                <p className="text-xs text-muted-foreground font-sans">
                  Questions about KeilHQ?{" "}
                  <Link href="/support" onClick={closeMenu} className="text-foreground underline font-medium">
                    Contact support
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            /* ── LEVEL 2: SUBMENU DETAIL DRAWER ── */
            <div className="flex-1 min-h-0 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-3 duration-200">
              {/* Back navigation subheader with uppercase tracking */}
              <button
                onClick={() => setMobileActiveCategory(null)}
                className="flex items-center gap-2.5 px-5 py-3 border-b border-border/50 text-muted-foreground hover:text-foreground active:opacity-60 transition-colors bg-muted/20 cursor-pointer w-full text-left shrink-0"
              >
                <ChevronLeft className="size-4 text-muted-foreground shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-muted-foreground">
                  {mobileActiveCategory === "product" && "P R O D U C T"}
                  {mobileActiveCategory === "pricing" && "P R I C I N G"}
                </span>
              </button>

              {/* Scrollable Sub-Drawer Content */}
              <div
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 py-4 pb-28 space-y-6 touch-pan-y"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {/* 1. PRODUCT SUB-DRAWER */}
                {mobileActiveCategory === "product" && (
                  <>
                    {/* Platform Overview Banner Card */}
                    <MegaMenuOverviewCard
                      href="/features/smart-dashboard"
                      title="Platform overview"
                      subtitle="See how KeilHQ works."
                      lightImage="/mockups/dashboard/dashboard-snapshot-light.png"
                      darkImage="/mockups/dashboard/dashboard-snapshot-dark.png"
                      onNavigate={closeMenu}
                    />

                    {/* Detailed Feature Columns */}
                    <div className="flex flex-col gap-5 pt-2 border-t border-border/50">
                      {featureNavColumns.map((col) => (
                        <div key={col.id} className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 pb-1.5 border-b border-border/40">
                            <NavIcon name={col.iconName} className="size-3.5 text-foreground" />
                            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-muted-foreground">
                              {col.title}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            {col.items.map((item) => (
                              <Link
                                key={item.id}
                                href={item.href}
                                onClick={closeMenu}
                                className="flex items-center justify-between p-2 rounded hover:bg-muted/40 transition-colors"
                              >
                                <div className="flex flex-col min-w-0 pr-2">
                                  <span className="text-xs font-semibold text-foreground font-display truncate">
                                    {item.title}
                                  </span>
                                  <span className="text-[11px] text-muted-foreground leading-tight line-clamp-1">
                                    {item.desc}
                                  </span>
                                </div>
                                <ArrowRight className="size-3 text-muted-foreground shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                  </>
                )}

                {/* 2. PRICING SUB-DRAWER */}
                {mobileActiveCategory === "pricing" && (
                  <>
                    {/* Pricing Overview Banner Card */}
                    <MegaMenuOverviewCard
                      href="/pricing"
                      title="Transparent pricing"
                      subtitle="Start free. Scale with confidence."
                      lightImage="/mockups/finance/finance-overview-light.png"
                      darkImage="/mockups/finance/finance-overview-dark.png"
                      onNavigate={closeMenu}
                    />

                    {/* The KeilHQ Guarantee */}
                    <div className="flex flex-col gap-2.5">
                      <div className="pb-1.5 border-b border-border/60">
                        <span className="text-xs font-medium text-muted-foreground">
                          The KeilHQ Guarantee.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { icon: "Zap", title: "30-Day Full Trial", sub: "Zero commitment & instant setup" },
                          { icon: "Receipt", title: "No Hidden Fees", sub: "Predictable self-serve billing" },
                          { icon: "ShieldCheck", title: "Enterprise Security", sub: "Data isolation & custom SLAs" },
                        ].map((item) => (
                          <div key={item.title} className="flex items-start gap-2.5 p-1.5">
                            <NavIcon name={item.icon} className="size-3.5 text-foreground shrink-0 mt-0.5" />
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-foreground font-display">{item.title}</span>
                              <span className="text-[11px] text-muted-foreground">{item.sub}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Link */}
                    <div className="pt-2 border-t border-border/50 text-center">
                      <Link
                        href="/pricing"
                        onClick={closeMenu}
                        className="btn-accent inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-sm w-full"
                      >
                        View Complete Pricing Matrix <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </>
                )}

              </div>
            </div>
          )}
        </div>,
        document.body
      )}

      {/* ── LOGIN MODAL DIALOG ── */}
      {mounted && isLoginDialogOpen && createPortal(
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-touch="true"
          data-lenis-prevent-wheel="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            onClick={() => setIsLoginDialogOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          />

          <div className="relative w-full max-w-lg bg-card border border-border rounded-sm p-5 sm:p-6 shadow-md z-10 animate-in fade-in zoom-in-95 duration-200 select-text flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
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
                Welcome back — log in to your pilot workspace.
              </p>
            </div>

            <a
              href={APP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3 px-4 rounded-sm btn-accent mt-2 cursor-pointer"
            >
              <span className="text-xs font-semibold">Log in</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
