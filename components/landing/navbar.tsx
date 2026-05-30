"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        className={`flex items-center gap-8 px-5 py-2 rounded-full border backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "bg-white/60 border-zinc-200/60 shadow-sm"
            : "bg-white/20 border-white/30"
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group mr-2">
          <Image
            src={isScrolled ? "/keilhq.svg" : "/keilhq.svg"}
            alt="KielHQ"
            width={22}
            height={22}
            className="transition-opacity duration-300"
          />
          <span className="text-sm font-semibold tracking-tight text-zinc-900">KielHQ</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {["Solutions", "Pricing", "Enterprise", "Blog", "Demo"].map((label) => (
            <Link
              key={label}
              href="#"
              className="text-sm text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Login */}
        <Link
          href="#"
          className="hidden md:block text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors ml-2"
        >
          Login
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1 text-zinc-700 hover:text-zinc-950 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+4px)] left-4 right-4 border border-zinc-200 bg-white rounded-2xl p-5 shadow-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 md:hidden">
          {["Solutions", "Pricing", "Enterprise", "Blog", "Demo", "Login"].map((label) => (
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
