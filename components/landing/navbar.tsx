import React from "react";
import { NAVIGATION, SITE_SETTINGS } from "@/lib/site-content";
import { NavbarClient } from "./navbar-client";

export async function Navbar() {
  return <NavbarClient navigation={NAVIGATION} siteSettings={SITE_SETTINGS} />;
}
