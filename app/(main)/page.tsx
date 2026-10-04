import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/landing/hero";
import { IntegrationCloud } from "@/components/landing/integration-cloud";
import { ConnectedWorkSection } from "@/components/landing/connected-work";
import { CompanyContext } from "@/components/landing/company-context";
import { Features, StickyScrollSection } from "@/components/landing/features";
import { LovedBy } from "@/components/landing/loved-by";
import { Blogs } from "@/components/landing/blogs";
import { FinalCta } from "@/components/landing/final-cta";
import { getNowFeed } from "@/lib/now";
import { HOMEPAGE, LOVED_BY } from "@/lib/site-content";

const PAGE_TITLE = "KeilHQ — Your team's work, all in one place";
const PAGE_DESCRIPTION =
  "KeilHQ brings docs, projects, CRM, chat, meetings and finance into one connected workspace, with AI that works across your team's work.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://keilhq.in",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://keilhq.in",
    siteName: "KeilHQ",
    images: [
      {
        url: "/brand/keilhq-rise.png",
        width: 1600,
        height: 1000,
        alt: "KeilHQ — your team's work, all in one place",
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

// ─── Mockup image wrapper — consistent shadow + rounding ─────────────────────
const MockupImage = ({ lightSrc, darkSrc, alt }: { lightSrc: string; darkSrc: string; alt: string }) => (
  <>
    {lightSrc === darkSrc ? (
      <Image
        src={lightSrc}
        alt={alt}
        width={1200}
        height={800}
        className="w-full h-auto object-cover object-top"
        priority
      />
    ) : (
      <>
        <Image
          src={lightSrc}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover object-top dark:hidden"
          priority
        />
        <Image
          src={darkSrc}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover object-top hidden dark:block"
          priority
        />
      </>
    )}
  </>
);

export default async function Home() {
  const nowFeed = await getNowFeed();
  const homepageData = HOMEPAGE;
  const lovedByData = LOVED_BY;

  // Construct features scroll sections dynamically
  const featureSections = homepageData?.featureSections || [];
  const featuresData: StickyScrollSection[] = featureSections.map((section: any) => ({
    id: section.id,
    badgeText: section.badgeText || undefined,
    title: section.title,
    description: section.description,
    visualComponent: (
      <MockupImage
        lightSrc={section.lightImage || "/mockups/home-dash-light.png"}
        darkSrc={section.darkImage || "/mockups/home-dash-dark.png"}
        alt={section.alt || section.title}
      />
    ),
  }));

  // Homepage blog section: latest blogs and press only — changelogs have
  // their own dedicated section on the Now page and shouldn't appear here.
  const displayBlogPosts = nowFeed
    .filter((item: any) => item.kind === "blog" || item.kind === "press")
    .slice(0, 3)
    .map((item: any) => ({
      id: `${item.kind}-${item.slug}`,
      slug: item.slug,
      tag: item.channel || 'Now',
      title: item.title || "",
      date: item.date || "",
      image: item.image || "/mockups/blog1.png",
      href: item.href || "/now",
      external: !!item.external,
    }));

  /* ── WebPage + Speakable JSON-LD ─────────────────────────────────────────
     Speakable tells Google which CSS selectors hold key spoken content —
     used by Google Assistant, voice search, and AI Overview answers.
     Docs: https://developers.google.com/search/docs/appearance/structured-data/speakable */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://keilhq.in",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://keilhq.in",
    isPartOf: { "@id": "https://keilhq.in/#website" },
    about: { "@id": "https://keilhq.in/#software" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://keilhq.in/brand/keilhq-rise.png",
      width: 1600,
      height: 1000,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      // Target the hero heading and hero subtitle — the most important
      // content for voice and AI Overview answer extraction
      cssSelector: ["h1", "[data-speakable='hero']"],
    },
    inLanguage: "en-US",
  };

  return (
    <main className="flex-1 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Hero
        heroTitle={homepageData?.heroTitle || undefined}
        heroSubtitle={homepageData?.heroSubtitle || undefined}
        heroCtaLabel={homepageData?.heroCtaLabel || undefined}
        heroCtaLink={homepageData?.heroCtaLink || undefined}
        heroSecondaryCtaLabel={homepageData?.heroSecondaryCtaLabel || undefined}
        heroSecondaryCtaLink={homepageData?.heroSecondaryCtaLink || undefined}
        announcementEnabled={homepageData?.announcementEnabled || undefined}
        announcementText={homepageData?.announcementText || undefined}
        announcementLink={homepageData?.announcementLink || undefined}
        heroLightImage={homepageData?.heroLightImage || "/mockups/home-hero-light.png"}
        heroDarkImage={homepageData?.heroDarkImage || "/mockups/home-hero-dark.png"}
      />
      <IntegrationCloud />
      <ConnectedWorkSection />
      <Features data={featuresData} />
      <CompanyContext />
      {displayBlogPosts.length > 0 && <Blogs posts={displayBlogPosts} />}
      <LovedBy data={lovedByData} />
      <FinalCta
        finalCtaTitle={homepageData?.finalCtaTitle || undefined}
        finalCtaDescription={homepageData?.finalCtaDescription || undefined}
        finalCtaButtonLabel={homepageData?.finalCtaButtonLabel || undefined}
        finalCtaButtonLink={homepageData?.finalCtaButtonLink || undefined}
        finalCtaSecondaryButtonLabel={homepageData?.finalCtaSecondaryButtonLabel || undefined}
        finalCtaSecondaryButtonLink={homepageData?.finalCtaSecondaryButtonLink || undefined}
        finalCtaTrustText={homepageData?.finalCtaTrustText || undefined}
      />
    </main>
  );
}
