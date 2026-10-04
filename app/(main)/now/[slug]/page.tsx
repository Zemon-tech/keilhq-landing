import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost, getBlogPosts } from "@/cms/helpers/blog";
import { getChangelogs } from "@/cms/helpers/changelog";
import { BlogArticle } from "@/components/now/blog-article";
import { ChangelogArticle } from "@/components/now/changelog-article";

const BASE_URL = "https://keilhq.in";

/* ─── Breadcrumb JSON-LD ─────────────────────────────────────────────────── */
function BreadcrumbJsonLd({ slug, title }: { slug: string; title: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Now", item: `${BASE_URL}/now` },
      { "@type": "ListItem", position: 3, name: title, item: `${BASE_URL}/now/${slug}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── BlogPosting JSON-LD ────────────────────────────────────────────────────
   Google uses this for Article rich results and AI Overviews citations.
   Docs: https://developers.google.com/search/docs/appearance/structured-data/article */
function BlogPostingJsonLd({ slug, post }: { slug: string; post: Record<string, any> }) {
  const canonicalUrl = `${BASE_URL}/now/${slug}`;
  // Absolutize the cover image — required for structured data
  const image = post.coverImage
    ? post.coverImage.startsWith("http")
      ? post.coverImage
      : `${BASE_URL}${post.coverImage}`
    : `${BASE_URL}/brand/keilhq-rise.png`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": canonicalUrl,
    headline: post.title,
    description: post.excerpt || undefined,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 1600,
      height: 900,
    },
    datePublished: post.publishedDate
      ? new Date(post.publishedDate).toISOString()
      : undefined,
    dateModified: post.publishedDate
      ? new Date(post.publishedDate).toISOString()
      : undefined,
    author: {
      "@type": "Person",
      name: post.author || "KeilHQ Team",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    inLanguage: "en-US",
    ...(post.category ? { articleSection: post.category } : {}),
    ...(post.readingTime ? { timeRequired: post.readingTime } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── TechArticle JSON-LD (changelog) ────────────────────────────────────────
   Changelog entries are product-release technical articles.
   Using TechArticle type for better relevance signals. */
function TechArticleJsonLd({ slug, entry }: { slug: string; entry: Record<string, any> }) {
  const canonicalUrl = `${BASE_URL}/now/${slug}`;
  const isoDate = entry.timestamp
    ? new Date(entry.timestamp).toISOString()
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": canonicalUrl,
    headline: entry.title,
    description: entry.summaryText || `KeilHQ ${entry.version || "release"} changelog.`,
    datePublished: isoDate,
    dateModified: isoDate,
    author: { "@id": `${BASE_URL}/#organization` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    inLanguage: "en-US",
    articleSection: "Product Updates",
    ...(entry.version ? { version: entry.version } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Static params ──────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  const [posts, changelogs] = await Promise.all([getBlogPosts(), getChangelogs()]);
  return [
    ...(posts as any[]).map((p) => ({ slug: p.slug })),
    ...(changelogs as any[]).map((c) => ({ slug: c.slug })),
  ];
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalUrl = `${BASE_URL}/now/${slug}`;
  const fallbackImage = "/brand/keilhq-rise.png";

  const post = await getBlogPost(slug).catch(() => null);
  if (post) {
    const title = (post as any).title || slug;
    const description = (post as any).excerpt || undefined;
    const coverImage = (post as any).coverImage || fallbackImage;
    const publishedDate = (post as any).publishedDate;
    const author = (post as any).author;
    const category = (post as any).category;

    return {
      title,
      description,
      authors: author ? [{ name: author }] : undefined,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "KeilHQ",
        type: "article",
        // Article-specific OG properties — needed for proper article rich previews
        ...(publishedDate && {
          publishedTime: new Date(publishedDate).toISOString(),
          modifiedTime: new Date(publishedDate).toISOString(),
        }),
        ...(author && { authors: [`${BASE_URL}/about`] }),
        ...(category && { section: category }),
        tags: ["KeilHQ", "work management", category].filter(Boolean) as string[],
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
    const isoDate = entry.timestamp
      ? new Date(entry.timestamp).toISOString()
      : undefined;

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
        ...(isoDate && { publishedTime: isoDate, modifiedTime: isoDate }),
        authors: [`${BASE_URL}/about`],
        section: "Product Updates",
        tags: ["KeilHQ", "changelog", "product update"],
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

/* ─── Page ───────────────────────────────────────────────────────────────── */
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
        <BlogPostingJsonLd slug={slug} post={post as any} />
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
        <TechArticleJsonLd slug={slug} entry={changelog} />
        <ChangelogArticle slug={slug} />
      </>
    );
  }

  notFound();
}
