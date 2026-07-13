import React from "react";
import { getNavigation } from "@/lib/keystatic/navigation";
import { getSiteSettings } from "@/lib/keystatic/site-settings";
import { NavbarClient } from "./navbar-client";

export async function Navbar() {
  const [navigation, siteSettings] = await Promise.all([
    getNavigation(),
    getSiteSettings(),
  ]);

  return <NavbarClient navigation={navigation} siteSettings={siteSettings} />;
}
