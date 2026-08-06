import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getFeature, getFeatures } from "@/cms/helpers/features";
import { FeatureLayout } from "@/components/landing/feature-layout";

/* ── Fallback image map (used until images are set via CMS) ── */
const FALLBACK_IMAGES: Record<string, { light: string; dark: string }> = {
  "smart-dashboard":       { light: "/mockups/light/Dashboard light.png",          dark: "/mockups/dark/Dashboard Dark.png" },
  "task-management":       { light: "/mockups/light/Task Overview Light.png",      dark: "/mockups/dark/Task Overview Dark.png" },
  "docs-notes":            { light: "/mockups/light/Motion Light.png",             dark: "/mockups/dark/Motion Dark.png" },
  "team-chat":             { light: "/mockups/light/Chat Light.png",              dark: "/mockups/dark/Chat Dark.png" },
  "meeting-recorder":      { light: "/mockups/light/Meetings Light.png",          dark: "/mockups/dark/Meetings Dark.png" },
  "integrations":          { light: "/mockups/light/Settings Connectors Light.png", dark: "/mockups/dark/Settings Connectors Dark.png" },
  "workspace":             { light: "/mockups/light/Org & Ws switching Light.png", dark: "/mockups/dark/Org & Ws Switching Dark.png" },
};

/* ── Fallback hero titles ── */
const FALLBACK_TITLES: Record<string, string> = {
  "smart-dashboard":      "Know exactly what to work on right now",
  "task-management":      "Tasks that enforce their own dependencies",
  "docs-notes":           "Collaborative docs wired to your project",
  "team-chat":            "Real-time chat inside your workspace",
  "meeting-recorder":     "Meetings captured, transcribed, and acted on",
  "integrations":         "Your existing stack, unified",
  "workspace":            "One workspace for the whole team",
};

/* ── Single word title map for clean SEO titles ── */
const SINGLE_WORD_TITLES: Record<string, string> = {
  "smart-dashboard":      "Dashboard",
  "task-management":      "Tasks",
  "docs-notes":           "Motion",
  "team-chat":            "Chat",
  "meeting-recorder":     "Meetings",
  "integrations":         "Connectors",
  "workspace":            "RBAC",
};

/* ── Feature index map (for bottom nav in FeatureLayout) ── */
const FEATURE_INDEX: Record<string, number> = {
  "smart-dashboard":      0,
  "task-management":      1,
  "docs-notes":           2,
  "team-chat":            3,
  "meeting-recorder":     4,
  "integrations":         5,
  "workspace":            6,
};

export async function generateStaticParams() {
  const features = await getFeatures();
  return features.map((f: any) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const feature = await getFeature(slug);
  const title = SINGLE_WORD_TITLES[slug] || (feature as any)?.eyebrowText || "Feature";
  const description = (feature as any)?.subHeroDesc || (feature as any)?.capabilitiesDesc || "Explore KeilHQ workspace feature.";

  return {
    title,
    description,
  };
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = await getFeature(slug);

  if (!feature) notFound();

  const images = FALLBACK_IMAGES[slug] || { light: "/mockups/dark/Dashboard.png", dark: "/mockups/dark/Dashboard.png" };

  const lightSrc = (feature as any).lightImage || images.light;
  const darkSrc  = (feature as any).darkImage  || images.dark;
  const heroTitle = (feature as any).heroTitle || FALLBACK_TITLES[slug] || (feature as any).subHeroTitle || slug;

  const capabilitiesGrid = ((feature as any).capabilitiesGrid || []).map((item: any) => ({
    iconName: item.iconName || "Sparkles",
    title: item.title,
    desc: item.desc,
  }));

  const checklistItems = ((feature as any).checklistItems || []).map((item: string) =>
    item.replace(/,\s*$/, "")
  );

  const mockup = (
    <>
      <Image
        src={lightSrc}
        alt={(feature as any).eyebrowText || slug}
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top dark:hidden rounded-lg"
        priority
      />
      <Image
        src={darkSrc}
        alt={(feature as any).eyebrowText || slug}
        width={1600}
        height={1000}
        className="w-full h-auto object-cover object-top hidden dark:block rounded-lg"
        priority
      />
    </>
  );

  return (
    <FeatureLayout
      eyebrowIndex={(feature as any).eyebrowIndex || ""}
      eyebrowText={(feature as any).eyebrowText || ""}
      title={heroTitle}
      subHeroTitle={(feature as any).subHeroTitle || ""}
      subHeroDesc={(feature as any).subHeroDesc || ""}
      subHeroLink={(feature as any).subHeroLink || undefined}
      subHeroLinkText={(feature as any).subHeroLinkText || undefined}
      mockup={mockup}
      capabilitiesTitle={(feature as any).capabilitiesTitle || ""}
      capabilitiesDesc={(feature as any).capabilitiesDesc || ""}
      capabilitiesGrid={capabilitiesGrid}
      checklistTitle={(feature as any).checklistTitle || ""}
      checklistDesc={(feature as any).checklistDesc || ""}
      checklistItems={checklistItems}
      currentIndex={FEATURE_INDEX[slug] ?? 0}
      sections={(feature as any).sections || undefined}
    />
  );
}
