import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/landing/hero";
import { BackedBy } from "@/components/landing/backed-by";
import { IntegrationCloud } from "@/components/landing/integration-cloud";
import { Features, StickyScrollSection } from "@/components/landing/features";
import { LovedBy } from "@/components/landing/loved-by";
import { Blogs } from "@/components/landing/blogs";
import { FinalCta } from "@/components/landing/final-cta";
import { getHomepage } from "@/cms/helpers/homepage";
import { getBlogPosts } from "@/cms/helpers/blog";
import { getLovedBy } from "@/cms/helpers/loved-by";

export const metadata: Metadata = {
  title: "KeilHQ",
  description: "Human clarity for teams. KeilHQ is the desktop-first work management platform combining database-enforced task clarity, real-time team chat, block docs, 2-way calendar sync, meeting transcription, and multi-agent AI.",
};

// ─── Mockup image wrapper — consistent shadow + rounding ─────────────────────
const MockupImage = ({ lightSrc, darkSrc, alt }: { lightSrc: string; darkSrc: string; alt: string }) => (
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
);

export default async function Home() {
  const [homepageData, blogPosts, lovedByData] = await Promise.all([
    getHomepage(),
    getBlogPosts(),
    getLovedBy(),
  ]);

  // Construct features scroll sections dynamically
  const featureSections = homepageData?.featureSections || [];
  const featuresData: StickyScrollSection[] = featureSections.map((section: any) => ({
    id: section.id,
    badgeText: section.badgeText || undefined,
    title: section.title,
    description: section.description,
    visualComponent: (
      <MockupImage
        lightSrc={section.lightImage || "/mockups/light/Dashboard light.png"}
        darkSrc={section.darkImage || "/mockups/dark/Dashboard Dark.png"}
        alt={section.alt || section.title}
      />
    ),
  }));

  // Construct blog posts for carousel dynamically
  const displayBlogPosts = blogPosts.map((post: any) => {
    const dateObj = new Date(post.entry.publishedDate || '');
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC'
    });

    return {
      id: post.slug,
      slug: post.slug,
      tag: post.entry.category || 'Productivity',
      title: post.entry.title || "",
      date: formattedDate,
      image: post.entry.coverImage || "/mockups/blog1.png",
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
      />
      <BackedBy logoCloud={homepageData?.logoCloud || undefined} />
      <IntegrationCloud />
      <Features data={featuresData} />
      <Blogs posts={displayBlogPosts} />
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
