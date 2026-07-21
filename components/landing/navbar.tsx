import React from "react";
import { getNavigation } from "@/cms/helpers/navigation";
import { getSiteSettings } from "@/cms/helpers/site-settings";
import { NavbarClient } from "./navbar-client";

export async function Navbar() {
  const [navigation, siteSettings] = await Promise.all([
    getNavigation(),
    getSiteSettings(),
  ]);

  return <NavbarClient navigation={navigation} siteSettings={siteSettings} />;
}
