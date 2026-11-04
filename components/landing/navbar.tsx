import React from "react";
import { WAITLIST_URL } from "@/lib/waitlist";
import { NavbarClient } from "./navbar-client";

const NAVIGATION = {
  links: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Now", href: "/now" },
    { label: "About", href: "/about" },
  ],
  cta: {
    label: "Start Free",
    href: WAITLIST_URL,
  },
} as const;

const SITE_SETTINGS = {
  siteName: "KeilHQ",
  logo: "/keilhq.svg",
} as const;

export function Navbar() {
  return <NavbarClient navigation={NAVIGATION} siteSettings={SITE_SETTINGS} />;
}
