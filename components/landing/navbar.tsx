"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <nav
        className={`flex items-center gap-8 px-5 py-2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "border-zinc-200 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-zinc-200/70 bg-white/80 backdrop-blur-sm"
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-1.5 group mr-2">
          <svg
            viewBox="0 0 100 100"
            className="w-4 h-4 text-zinc-950 transition-transform duration-700 group-hover:rotate-180"
            fill="currentColor"
          >
            {[...Array(12)].map((_, i) => (
              <rect key={i} x="46" y="10" width="8" height="26" rx="4" transform={`rotate(${i * 30} 50 50)`} />
            ))}
          </svg>
          <span className="text-sm font-semibold tracking-tight text-zinc-950">o11</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {["Solutions", "Industries", "Pricing", "Enterprise", "Blog", "Demo"].map((label) => (
            <Link
              key={label}
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Login — matches image: plain text, slightly bolder */}
        <Link
          href="#"
          className="hidden md:block text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors ml-2"
        >
          Login
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1 text-zinc-500 hover:text-zinc-900 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+4px)] left-4 right-4 border border-zinc-200 bg-white rounded-2xl p-5 shadow-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 md:hidden">
          {["Solutions", "Industries", "Pricing", "Enterprise", "Blog", "Demo", "Login"].map((label) => (
            <Link
              key={label}
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950 py-1.5 border-b border-zinc-100 last:border-0 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
