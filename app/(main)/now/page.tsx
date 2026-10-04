import type { Metadata } from "next";
import { getNowFeed, NOW_TABS, type NowTab } from "@/lib/now";
import { getBlogPosts } from "@/cms/helpers/blog";
import { getChangelogs } from "@/cms/helpers/changelog";
import { NowClient } from "./now-client";

const BASE_URL = "https://keilhq.in";
const PAGE_TITLE = "Now — Changelog, Updates & Stories";
const PAGE_DESCRIPTION =
  "Product launches, changelog, engineering stories, and press from the KeilHQ team — everything happening at KeilHQ, in one place.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/now`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/now`,
    siteName: "KeilHQ",
    images: [
      {
        url: "/brand/keilhq-rise.png",
        width: 1600,
        height: 1000,
        alt: "KeilHQ Now — Changelog & Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/brand/keilhq-rise.png"],
  },
};

function parseTabParam(value: string | string[] | undefined): NowTab {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return "All";
  const match = NOW_TABS.find((tab) => tab.toLowerCase() === raw.toLowerCase());
  return match ?? "All";
}

/* ─── CollectionPage + ItemList JSON-LD ─────────────────────────────────────
   Signals to Google that /now is a content collection — improves sitelinks
   and eligibility for article rich results across the collection.
   Docs: https://developers.google.com/search/docs/appearance/structured-data/carousel */
async function CollectionPageJsonLd() {
  const [posts, changelogs] = await Promise.all([getBlogPosts(), getChangelogs()]);

  // Top 10 most recent items for the ItemList — Google recommends 3-10
  const recentPosts = (posts as any[]).slice(0, 6).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/now/${p.slug}`,
    name: p.entry?.title || p.slug,
  }));

  const recentChangelogs = (changelogs as any[]).slice(0, 4).map((c, i) => ({
    "@type": "ListItem",
    position: recentPosts.length + i + 1,
    url: `${BASE_URL}/now/${c.slug}`,
    name: c.title || c.slug,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/now`,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/now`,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
    mainEntity: {
      "@type": "ItemList",
      name: "KeilHQ Posts and Changelog",
      description: "Blog posts, product updates, and changelog entries from KeilHQ.",
      itemListElement: [...recentPosts, ...recentChangelogs],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function NowPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string | string[] }>;
}) {
  const items = await getNowFeed();
  const initialTab = parseTabParam((await searchParams).tab);
  return (
    <>
      <CollectionPageJsonLd />
      <NowClient items={items} initialTab={initialTab} />
    </>
  );
}
