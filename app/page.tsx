import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BackedBy } from "@/components/landing/backed-by";
import { IntegrationCloud } from "@/components/landing/integration-cloud";
import { Features, StickyScrollSection } from "@/components/landing/features";
import { LovedBy } from "@/components/landing/loved-by";
import { Footer } from "@/components/landing/footer";
import { Blogs } from "@/components/landing/blogs";
import { FinalCta } from "@/components/landing/final-cta";
import { getHomepage } from "@/lib/keystatic/homepage";
import { getBlogPosts } from "@/lib/keystatic/blog";

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
  const [homepageData, blogPosts] = await Promise.all([
    getHomepage(),
    getBlogPosts(),
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
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      <Navbar />
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
        <LovedBy />
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
      <Footer />
    </div>
  );
}
