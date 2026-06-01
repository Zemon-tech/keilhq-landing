"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const currentTheme = mounted ? theme : "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <nav
        className={`flex items-center gap-6 px-5 py-2 rounded-full border backdrop-blur-md transition-all duration-300 ${isScrolled
          ? "bg-background/80 border-border/80 shadow-md"
          : "bg-background/40 border-border/40"
          }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group mr-2">
          <Image
            src={currentTheme === "dark" ? "/keilhq-white.svg" : "/keilhq.svg"}
            alt="KielHQ"
            width={22}
            height={22}
            className="transition-opacity duration-300"
          />
          <span className="text-sm font-semibold tracking-tight text-foreground">KielHQ</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {["Solutions", "Pricing", "Enterprise", "Blog", "Demo"].map((label) => (
            <Link
              key={label}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 ml-2">

          {/* Login */}
          <Link
            href="#"
            className="hidden md:block text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            Login
          </Link>

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
        <div className="absolute top-[calc(100%+4px)] left-4 right-4 border border-border bg-background rounded-2xl p-5 shadow-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 md:hidden">
          {["Solutions", "Pricing", "Enterprise", "Blog", "Demo", "Login"].map((label) => (
            <Link
              key={label}
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-1.5 border-b border-border last:border-0 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
