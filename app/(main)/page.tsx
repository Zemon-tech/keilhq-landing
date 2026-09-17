import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/landing/hero";
import { ProductPillars } from "@/components/landing/product-pillars";
import { IntegrationCloud } from "@/components/landing/integration-cloud";
import { Features, StickyScrollSection } from "@/components/landing/features";
import { LovedBy } from "@/components/landing/loved-by";
import { Blogs } from "@/components/landing/blogs";
import { FinalCta } from "@/components/landing/final-cta";
import { getNowFeed } from "@/lib/now";
import { HOMEPAGE, LOVED_BY } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "KeilHQ — AI-Native Operational & Context Layer for Modern Teams",
  description: "Stop wasting time across 15+ disconnected tools. KeilHQ unifies tasks, docs, customer records, meeting intelligence, and financials into a single shared operational context engine managed by AI.",
  openGraph: {
    title: "KeilHQ — AI-Native Operational & Context Layer for Modern Teams",
    description: "Stop wasting time across 15+ disconnected tools. KeilHQ unifies tasks, docs, customer records, meeting intelligence, and financials into a single shared operational context engine managed by AI.",
    url: "https://keilhq.in",
    siteName: "KeilHQ",
    images: [
      {
        url: "/brand/keilhq-rise.png",
        width: 1600,
        height: 1000,
        alt: "KeilHQ — AI-Native Operational & Context Layer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeilHQ — AI-Native Operational & Context Layer for Modern Teams",
    description: "Stop wasting time across 15+ disconnected tools. KeilHQ unifies tasks, docs, customer records, meeting intelligence, and financials into a single shared operational context engine managed by AI.",
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

  // Homepage carousel mirrors the Now page's All first section: the
  // latest entries of every kind (blogs, changelog, press).
  const displayBlogPosts = nowFeed.slice(0, 3).map((item: any) => {
    return {
      id: `${item.kind}-${item.slug}`,
      slug: item.slug,
      tag: item.channel || 'Now',
      title: item.title || "",
      date: item.date || "",
      image: item.image || "/mockups/blog1.png",
      href: item.href || "/now",
      external: !!item.external,
    };
  });

  return (
    <main className="flex-1 flex flex-col">
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
      <ProductPillars />
      <Features data={featuresData} />
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
