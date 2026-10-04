import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost, getBlogPosts } from "@/cms/helpers/blog";
import { getChangelogs } from "@/cms/helpers/changelog";
import { BlogArticle } from "@/components/now/blog-article";
import { ChangelogArticle } from "@/components/now/changelog-article";

function BreadcrumbJsonLd({ slug, title }: { slug: string; title: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://keilhq.in" },
      { "@type": "ListItem", position: 2, name: "Now", item: "https://keilhq.in/now" },
      { "@type": "ListItem", position: 3, name: title, item: `https://keilhq.in/now/${slug}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export async function generateStaticParams() {
  const [posts, changelogs] = await Promise.all([getBlogPosts(), getChangelogs()]);
  return [
    ...(posts as any[]).map((p) => ({ slug: p.slug })),
    ...(changelogs as any[]).map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalUrl = `https://keilhq.in/now/${slug}`;
  const fallbackImage = "/brand/keilhq-rise.png";

  const post = await getBlogPost(slug).catch(() => null);
  if (post) {
    const title = (post as any).title || slug;
    const description = (post as any).excerpt || undefined;
    const coverImage = (post as any).coverImage || fallbackImage;
    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "KeilHQ",
        type: "article",
        images: [{ url: coverImage, width: 1600, height: 900, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [coverImage],
      },
    };
  }

  const changelogs = (await getChangelogs()) as any[];
  const entry = changelogs.find((c) => c.slug === slug);
  if (entry) {
    const title = entry.title;
    const description = entry.summaryText || undefined;
    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "KeilHQ",
        type: "article",
        images: [{ url: fallbackImage, width: 1600, height: 900, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [fallbackImage],
      },
    };
  }

  return { title: "Now", alternates: { canonical: canonicalUrl } };
}

export default async function NowDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getBlogPost(slug).catch(() => null);
  if (post) {
    return (
      <>
        <BreadcrumbJsonLd slug={slug} title={(post as any).title || slug} />
        <BlogArticle slug={slug} />
      </>
    );
  }

  const changelogs = (await getChangelogs()) as any[];
  const changelog = changelogs.find((c) => c.slug === slug);
  if (changelog) {
    return (
      <>
        <BreadcrumbJsonLd slug={slug} title={changelog.title || slug} />
        <ChangelogArticle slug={slug} />
      </>
    );
  }

  notFound();
}
