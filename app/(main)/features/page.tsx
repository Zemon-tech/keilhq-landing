import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

const BASE_URL = "https://keilhq.in";

/* ── Metadata for /features ───────────────────────────────────────────────
   Google processes metadata before following a redirect — canonical ensures
   link equity flows to the destination and /features isn't treated as a
   duplicate. Using permanentRedirect (308) vs redirect (307) passes full
   link equity to /features/smart-dashboard. */
export const metadata: Metadata = {
  title: "Features — Everything your team needs in one workspace",
  description:
    "Explore KeilHQ features: Clarity Engine task management, Motion Docs, team chat, meeting recorder, CRM, finance, integrations, and multi-agent AI — all in one workspace.",
  alternates: {
    canonical: `${BASE_URL}/features/smart-dashboard`,
  },
};

export default function FeaturesPage() {
  permanentRedirect("/features/smart-dashboard");
}
