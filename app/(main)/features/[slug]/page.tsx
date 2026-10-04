
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getManualFeature, getManualFeatures, FEATURE_FALLBACK_IMAGES as FALLBACK_IMAGES } from "@/lib/features";
import { FeatureLayout } from "@/components/landing/feature-layout";
import { WAITLIST_URL } from "@/lib/waitlist";

/* ── Fallback hero titles ── */
const FALLBACK_TITLES: Record<string, string> = {
  "smart-dashboard":      "Know exactly what to work on right now",
  "task-management":      "Tasks that enforce their own dependencies",
  "docs-notes":           "Collaborative docs wired to your project",
  "team-chat":            "Real-time chat inside your workspace",
  "meeting-recorder":     "Meetings captured, transcribed, and acted on",
  "integrations":         "Every tool you love, finally in sync",
  "workspace":            "One workspace for the whole team",
  "crm":                  "Relational CRM and omnichannel deal intelligence",
  "finance":              "Complete financial control and multi-book accounting",
};

/* ── Descriptive SEO titles (template: "%s | KeilHQ") ── */
const SEO_TITLES: Record<string, string> = {
  "smart-dashboard":  "Smart Dashboard — Know What to Work On",
  "task-management":  "Task Management — Clarity Engine for Teams",
  "docs-notes":       "Docs & Notes — Block-Based Collaboration",
  "team-chat":        "Team Chat — Real-Time Workspace Messaging",
  "meeting-recorder": "Meeting Recorder — AI Transcription & Notes",
  "integrations":     "Integrations — Every Tool in Sync",
  "workspace":        "Workspace — Role-Based Access & Permissions",
  "crm":              "CRM — Relational Deal Intelligence",
  "finance":          "Finance & Bookkeeping — Full Financial Control",
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
  "crm":                  7,
  "finance":              8,
};

export async function generateStaticParams() {
  return getManualFeatures().map((f: any) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const feature = getManualFeature(slug);
  const title = SEO_TITLES[slug] || (feature as any)?.eyebrowText || "Feature";
  const description = (feature as any)?.subHeroDesc || (feature as any)?.capabilitiesDesc || "Explore KeilHQ workspace features.";
  const canonicalUrl = `https://keilhq.in/features/${slug}`;
  const ogImage = (feature as any)?.lightImage || FALLBACK_IMAGES[slug]?.light || "/brand/keilhq-rise.png";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | KeilHQ`,
      description,
      url: canonicalUrl,
      siteName: "KeilHQ",
      images: [{ url: ogImage, width: 1600, height: 1000, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | KeilHQ`,
      description,
      images: [ogImage],
    },
  };
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getManualFeature(slug);

  if (!feature) notFound();

  const images = FALLBACK_IMAGES[slug] || { light: "/mockups/dashboard/dashboard-snapshot-light.png", dark: "/mockups/dashboard/dashboard-snapshot-dark.png" };

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://keilhq.in" },
              { "@type": "ListItem", position: 2, name: "Features", item: "https://keilhq.in/features" },
              { "@type": "ListItem", position: 3, name: SEO_TITLES[slug]?.split(" —")[0] || slug, item: `https://keilhq.in/features/${slug}` },
            ],
          }),
        }}
      />
      {/* WebPage schema — establishes this feature page as a distinct entity
          linked to the main SoftwareApplication, improving feature-keyword
          associations for both Google and AI answer engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://keilhq.in/features/${slug}`,
            name: SEO_TITLES[slug] ? `${SEO_TITLES[slug]} | KeilHQ` : `KeilHQ Features`,
            description: (feature as any)?.subHeroDesc || (feature as any)?.capabilitiesDesc || "Explore KeilHQ workspace features.",
            url: `https://keilhq.in/features/${slug}`,
            isPartOf: { "@id": "https://keilhq.in/#website" },
            about: { "@id": "https://keilhq.in/#software" },
            inLanguage: "en-US",
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: (() => {
                const img = (feature as any)?.lightImage || FALLBACK_IMAGES[slug]?.light;
                return img ? `https://keilhq.in${img}` : "https://keilhq.in/brand/keilhq-rise.png";
              })(),
            },
          }),
        }}
      />
      {/* CollectionPage ItemList — signals the full features collection to Google
          from every feature page, enabling sitelinks and collection rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://keilhq.in/features",
            name: "KeilHQ Features",
            description: "All KeilHQ workspace features: task management, docs, chat, meetings, CRM, finance, integrations, and AI.",
            url: "https://keilhq.in/features",
            isPartOf: { "@id": "https://keilhq.in/#website" },
            publisher: { "@id": "https://keilhq.in/#organization" },
            mainEntity: {
              "@type": "ItemList",
              name: "KeilHQ Feature Pages",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Smart Dashboard", url: "https://keilhq.in/features/smart-dashboard" },
                { "@type": "ListItem", position: 2, name: "Task Management — Clarity Engine", url: "https://keilhq.in/features/task-management" },
                { "@type": "ListItem", position: 3, name: "Docs & Notes — Motion Editor", url: "https://keilhq.in/features/docs-notes" },
                { "@type": "ListItem", position: 4, name: "Team Chat", url: "https://keilhq.in/features/team-chat" },
                { "@type": "ListItem", position: 5, name: "Meeting Recorder — AI Transcription", url: "https://keilhq.in/features/meeting-recorder" },
                { "@type": "ListItem", position: 6, name: "Integrations", url: "https://keilhq.in/features/integrations" },
                { "@type": "ListItem", position: 7, name: "Workspace & Permissions", url: "https://keilhq.in/features/workspace" },
                { "@type": "ListItem", position: 8, name: "CRM — Relational Deal Intelligence", url: "https://keilhq.in/features/crm" },
                { "@type": "ListItem", position: 9, name: "Finance & Bookkeeping", url: "https://keilhq.in/features/finance" },
              ],
            },
          }),
        }}
      />
      <FeatureLayout
      eyebrowIndex={(feature as any).eyebrowIndex || ""}
      eyebrowText={(feature as any).eyebrowText || ""}
      title={heroTitle}
      subHeroTitle={(feature as any).subHeroTitle || ""}
      subHeroDesc={(feature as any).subHeroDesc || ""}
      subHeroLink={WAITLIST_URL}
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
    </>
  );
}
