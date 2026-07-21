import { config, collection, singleton, fields } from '@keystatic/core';

const isDev = process.env.NODE_ENV === 'development';

export default config({
    storage: isDev
        ? { kind: 'local' }
        : {
            kind: 'github',
            repo: 'Zemon-tech/keilhq-landing',
        },
    collections: {
        pages: collection({
            label: 'Pages',
            path: 'content/pages/*/',
            slugField: 'title',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                seoTitle: fields.text({ label: 'SEO Title' }),
                seoDescription: fields.text({ label: 'SEO Description' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    links: true,
                    images: true
                }),
            },
        }),
        blog: collection({
            label: 'Blog',
            path: 'content/blog/*/',
            slugField: 'title',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                excerpt: fields.text({ label: 'Excerpt' }),
                coverImage: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/cms/blog',
                    publicPath: '/images/cms/blog/',
                }),
                category: fields.text({ label: 'Category' }),
                author: fields.text({ label: 'Author' }),
                publishedDate: fields.date({ label: 'Published Date' }),
                readingTime: fields.text({ label: 'Reading Time' }),
                featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    links: true,
                    images: true
                }),
            },
        }),
        press: collection({
            label: 'Press & Social',
            path: 'content/press/*/',
            slugField: 'title',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Title / Caption' } }),
                platform: fields.select({
                    label: 'Platform',
                    options: [
                        { label: 'LinkedIn', value: 'linkedin' },
                        { label: 'Instagram', value: 'instagram' },
                        { label: 'X (Twitter)', value: 'x' },
                        { label: 'News / Press', value: 'news' },
                    ],
                    defaultValue: 'linkedin',
                }),
                url: fields.text({ label: 'Post / Article URL' }),
                thumbnail: fields.image({
                    label: 'Thumbnail Image',
                    directory: 'public/images/cms/press',
                    publicPath: '/images/cms/press/',
                }),
                excerpt: fields.text({ label: 'Excerpt / Caption', multiline: true }),
                publishedDate: fields.date({ label: 'Published Date' }),
                featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
            },
        }),
        changelog: collection({
            label: 'Changelog',
            path: 'content/changelog/*/',
            slugField: 'title',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                version: fields.text({ label: 'Version' }),
                releaseDate: fields.date({ label: 'Release Date' }),
                type: fields.select({
                    label: 'Type',
                    options: [
                        { label: 'New', value: 'New' },
                        { label: 'Improvement', value: 'Improvement' },
                        { label: 'Fix', value: 'Fix' },
                    ],
                    defaultValue: 'New',
                }),
                image: fields.image({
                    label: 'Mockup Image',
                    directory: 'public/mockups/dark',
                    publicPath: '/mockups/dark/',
                }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    links: true,
                    images: true
                }),
            },
        }),
        features: collection({
            label: 'Features',
            path: 'content/features/*/',
            slugField: 'title',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Slug / Title' } }),
                heroTitle: fields.text({ label: 'Page Heading (H1)' }),
                eyebrowIndex: fields.text({ label: 'Index (e.g. 2.0)' }),
                eyebrowText: fields.text({ label: 'Eyebrow Text' }),
                lightImage: fields.image({
                    label: 'Light-mode Mockup Image',
                    directory: 'public/mockups/light',
                    publicPath: '/mockups/light/',
                }),
                darkImage: fields.image({
                    label: 'Dark-mode Mockup Image',
                    directory: 'public/mockups/dark',
                    publicPath: '/mockups/dark/',
                }),
                subHeroTitle: fields.text({ label: 'Sub-hero Title' }),
                subHeroDesc: fields.text({ label: 'Sub-hero Description', multiline: true }),
                subHeroLink: fields.text({ label: 'Sub-hero CTA Link' }),
                subHeroLinkText: fields.text({ label: 'Sub-hero CTA Label' }),
                capabilitiesTitle: fields.text({ label: 'Capabilities Section Title' }),
                capabilitiesDesc: fields.text({ label: 'Capabilities Section Description', multiline: true }),
                capabilitiesGrid: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Capability Title' }),
                        desc: fields.text({ label: 'Capability Description', multiline: true }),
                        iconName: fields.text({ label: 'Icon Name (Lucide icon, e.g. Layers)' }),
                    }),
                    {
                        label: 'Capabilities Grid',
                        itemLabel: (item) => item.fields.title.value || 'Capability',
                    }
                ),
                checklistTitle: fields.text({ label: 'Checklist Section Title' }),
                checklistDesc: fields.text({ label: 'Checklist Section Description', multiline: true }),
                checklistItems: fields.array(
                    fields.text({ label: 'Checklist Item' }),
                    {
                        label: 'Checklist Items',
                        itemLabel: (props) => props.value || 'Item',
                    }
                ),
            },
        }),
        solutions: collection({
            label: 'Solutions',
            path: 'content/solutions/*/',
            slugField: 'title',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Slug / Title' } }),
                eyebrow: fields.text({ label: 'Eyebrow Label (e.g. Solutions · Agencies)' }),
                persona: fields.text({ label: 'Persona Description', multiline: true }),
                sprawlHeading: fields.text({ label: 'Sprawl Section Heading' }),
                sprawlBullets: fields.array(
                    fields.text({ label: 'Bullet' }),
                    {
                        label: 'Sprawl Bullets',
                        itemLabel: (props) => props.value || 'Bullet',
                    }
                ),
                sprawlResearch: fields.text({ label: 'Research Note', multiline: true }),
                withKeilhqHeading: fields.text({ label: 'With KeilHQ Section Heading' }),
                withKeilhqIntro: fields.text({ label: 'Intro Paragraph', multiline: true }),
                withKeilhqBenefits: fields.array(
                    fields.text({ label: 'Benefit' }),
                    {
                        label: 'Benefits',
                        itemLabel: (props) => props.value || 'Benefit',
                    }
                ),
                withKeilhqQuote: fields.text({ label: 'Pull Quote', multiline: true }),
                withKeilhqAttribution: fields.text({ label: 'Quote Attribution' }),
            },
        }),
    },
    singletons: {
        siteSettings: singleton({
            label: 'Site Settings',
            path: 'content/globals/site-settings/',
            format: { data: 'json' },
            schema: {
                siteName: fields.text({ label: 'Site Name' }),
                tagline: fields.text({ label: 'Tagline' }),
                logo: fields.image({
                    label: 'Logo',
                    directory: 'public/images/cms/globals',
                    publicPath: '/images/cms/globals/',
                }),
                defaultSeoTitle: fields.text({ label: 'Default SEO Title' }),
                defaultSeoDescription: fields.text({ label: 'Default SEO Description' }),
                twitterUrl: fields.text({ label: 'Twitter / X URL' }),
                linkedinUrl: fields.text({ label: 'LinkedIn URL' }),
                githubUrl: fields.text({ label: 'GitHub URL' }),
                contactEmail: fields.text({ label: 'Contact Email' }),
            },
        }),
        navigation: singleton({
            label: 'Navigation Bar',
            path: 'content/globals/navigation/',
            format: { data: 'json' },
            schema: {
                links: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Label' }),
                        href: fields.text({ label: 'Link URL' }),
                    }),
                    {
                        label: 'Navigation Links',
                        itemLabel: (item) => item.fields.label.value || 'Link',
                    }
                ),
                cta: fields.object({
                    label: fields.text({ label: 'CTA Button Label' }),
                    href: fields.text({ label: 'CTA Button URL' }),
                }, { label: 'CTA Button' }),
            },
        }),
        footer: singleton({
            label: 'Footer',
            path: 'content/globals/footer/',
            format: { data: 'json' },
            schema: {
                columns: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Column Title' }),
                        links: fields.array(
                            fields.object({
                                label: fields.text({ label: 'Label' }),
                                href: fields.text({ label: 'Link' }),
                            }),
                            {
                                label: 'Column Links',
                                itemLabel: (item) => item.fields.label.value || 'Link',
                            }
                        ),
                    }),
                    {
                        label: 'Footer Columns',
                        itemLabel: (item) => item.fields.title.value || 'Column',
                    }
                ),
                copyright: fields.text({ label: 'Copyright Text' }),
                twitterUrl: fields.text({ label: 'Twitter / X URL' }),
                instagramUrl: fields.text({ label: 'Instagram URL' }),
                linkedinUrl: fields.text({ label: 'LinkedIn URL' }),
                youtubeUrl: fields.text({ label: 'YouTube URL' }),
            },
        }),
        homepage: singleton({
            label: 'Homepage',
            path: 'content/globals/homepage/',
            format: { data: 'json' },
            schema: {
                heroTitle: fields.text({ label: 'Hero Title' }),
                heroSubtitle: fields.text({ label: 'Hero Subtitle' }),
                heroCtaLabel: fields.text({ label: 'Hero CTA Button Label' }),
                heroCtaLink: fields.text({ label: 'Hero CTA Button URL' }),
                heroSecondaryCtaLabel: fields.text({ label: 'Hero Secondary CTA Label' }),
                heroSecondaryCtaLink: fields.text({ label: 'Hero Secondary CTA URL' }),
                announcementEnabled: fields.checkbox({ label: 'Enable Announcement Bar', defaultValue: false }),
                announcementText: fields.text({ label: 'Announcement Text' }),
                announcementLink: fields.text({ label: 'Announcement URL' }),
                logoCloud: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Partner Name' }),
                        logo: fields.image({
                            label: 'Partner Logo',
                            directory: 'public/images/cms/partners',
                            publicPath: '/images/cms/partners/',
                        }),
                    }),
                    {
                        label: 'Partner Logo Cloud',
                        itemLabel: (item) => item.fields.name.value || 'Partner',
                    }
                ),
                featureSections: fields.array(
                    fields.object({
                        id: fields.text({ label: 'Anchor ID (e.g. smart-dashboard)' }),
                        badgeText: fields.text({ label: 'Badge Text' }),
                        title: fields.text({ label: 'Title' }),
                        description: fields.text({ label: 'Description' }),
                        lightImage: fields.image({
                            label: 'Light-mode Mockup Image',
                            directory: 'public/mockups/light',
                            publicPath: '/mockups/light/',
                        }),
                        darkImage: fields.image({
                            label: 'Dark-mode Mockup Image',
                            directory: 'public/mockups/dark',
                            publicPath: '/mockups/dark/',
                        }),
                        alt: fields.text({ label: 'Image Alt Text' }),
                    }),
                    {
                        label: 'Features Scroll List',
                        itemLabel: (item) => item.fields.badgeText.value || 'Feature',
                    }
                ),
                finalCtaTitle: fields.text({ label: 'Final CTA Title' }),
                finalCtaDescription: fields.text({ label: 'Final CTA Description' }),
                finalCtaButtonLabel: fields.text({ label: 'Final CTA Button Label' }),
                finalCtaButtonLink: fields.text({ label: 'Final CTA Button URL' }),
                finalCtaSecondaryButtonLabel: fields.text({ label: 'Final CTA Secondary Button Label' }),
                finalCtaSecondaryButtonLink: fields.text({ label: 'Final CTA Secondary Button URL' }),
                finalCtaTrustText: fields.text({ label: 'Final CTA Trust Text' }),
            },
        }),
        aboutPage: singleton({
            label: 'About / Company Page',
            path: 'content/globals/about/',
            format: { data: 'json' },
            schema: {
                heroTitle: fields.text({ label: 'Hero Title' }),
                heroSubtitle: fields.text({ label: 'Hero Subtitle' }),
                editorialTitle: fields.text({ label: 'Editorial Section Title' }),
                editorialLead: fields.text({ label: 'Editorial Lead Paragraph', multiline: true }),
                editorialParagraphs: fields.array(
                    fields.text({ label: 'Paragraph Text', multiline: true }),
                    {
                        label: 'Editorial Body Paragraphs',
                        itemLabel: (props) => props.value || 'Paragraph',
                    }
                ),
                teamTitle: fields.text({ label: 'Team Section Title' }),
                teamSubtitle: fields.text({ label: 'Team Section Subtitle', multiline: true }),
                teamMembers: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Name' }),
                        role: fields.text({ label: 'Role' }),
                        avatar: fields.text({ label: 'Avatar URL' }),
                    }),
                    {
                        label: 'Team Members',
                        itemLabel: (item) => item.fields.name.value || 'Member',
                    }
                ),
                investorsTitle: fields.text({ label: 'Backed By Section Title' }),
                investors: fields.array(
                    fields.object({
                        firmName: fields.text({ label: 'Firm Name (e.g. Accel)' }),
                        partnerName: fields.text({ label: 'Partner Name' }),
                        partnerRole: fields.text({ label: 'Partner Title / Role' }),
                    }),
                    {
                        label: 'Investors',
                        itemLabel: (item) => item.fields.firmName.value || 'Investor',
                    }
                ),
            },
        }),
        pricingPage: singleton({
            label: 'Pricing Page',
            path: 'content/globals/pricing/',
            format: { data: 'json' },
            schema: {
                eyebrow: fields.text({ label: 'Eyebrow Text' }),
                heroTitle: fields.text({ label: 'Hero Title' }),
                heroSubtitle: fields.text({ label: 'Hero Subtext', multiline: true }),
                ctaButtonLabel: fields.text({ label: 'Hero CTA Button Label' }),
                ctaButtonLink: fields.text({ label: 'Hero CTA Button Link' }),
                comparisonEyebrow: fields.text({ label: 'Comparison Section Eyebrow' }),
                comparisonTitle: fields.text({ label: 'Comparison Section Title' }),
                comparisonIntro: fields.text({ label: 'Comparison Section Intro', multiline: true }),
            },
        }),
        brandPage: singleton({
            label: 'Brand Guidelines Page',
            path: 'content/globals/brand/',
            format: { data: 'json' },
            schema: {
                heroTitle: fields.text({ label: 'Hero Section Title' }),
                heroImage: fields.image({
                    label: 'Hero Image',
                    directory: 'public/brand',
                    publicPath: '/brand/',
                }),
                heroIntro: fields.array(
                    fields.text({ label: 'Paragraph', multiline: true }),
                    {
                        label: 'Intro Paragraphs',
                        itemLabel: (props) => props.value || 'Paragraph',
                    }
                ),
                physicalVisionTitle: fields.text({ label: 'Physical Vision Section Title' }),
                physicalVisionIntro: fields.array(
                    fields.text({ label: 'Paragraph', multiline: true }),
                    {
                        label: 'Physical Vision Paragraphs',
                        itemLabel: (props) => props.value || 'Paragraph',
                    }
                ),
                physicalVisionImage: fields.image({
                    label: 'Physical Vision Image',
                    directory: 'public/brand',
                    publicPath: '/brand/',
                }),
                designPrinciplesTitle: fields.text({ label: 'Design Principles Section Title' }),
                designPrinciplesIntro: fields.array(
                    fields.text({ label: 'Paragraph', multiline: true }),
                    {
                        label: 'Design Principles Paragraphs',
                        itemLabel: (props) => props.value || 'Paragraph',
                    }
                ),
                designPrinciplesImage: fields.image({
                    label: 'Design Principles Image',
                    directory: 'public/brand',
                    publicPath: '/brand/',
                }),
                enterpriseIdentityTitle: fields.text({ label: 'Enterprise Identity Title' }),
                enterpriseIdentityIntro: fields.array(
                    fields.text({ label: 'Paragraph', multiline: true }),
                    {
                        label: 'Enterprise Identity Paragraphs',
                        itemLabel: (props) => props.value || 'Paragraph',
                    }
                ),
                enterpriseIdentityImage: fields.image({
                    label: 'Enterprise Identity Image',
                    directory: 'public/brand',
                    publicPath: '/brand/',
                }),
            },
        }),
        lovedBy: singleton({
            label: 'Loved By Section (Testimonials)',
            path: 'content/globals/loved-by/',
            format: { data: 'json' },
            schema: {
                title: fields.text({ label: 'Section Title' }),
                stat1Label: fields.text({ label: 'Stat 1 Label' }),
                stat1Value: fields.text({ label: 'Stat 1 Value' }),
                stat2Label: fields.text({ label: 'Stat 2 Label' }),
                stat2Value: fields.text({ label: 'Stat 2 Value' }),
                testimonials: fields.array(
                    fields.object({
                        quote: fields.text({ label: 'Quote', multiline: true }),
                        authorName: fields.text({ label: 'Author Name' }),
                        authorRole: fields.text({ label: 'Author Role / Company' }),
                        authorAvatar: fields.text({ label: 'Author Avatar URL' }),
                        isHighlighted: fields.checkbox({ label: 'Use Marigold Accent Highlight', defaultValue: false }),
                    }),
                    {
                        label: 'Testimonials',
                        itemLabel: (item) => item.fields.authorName.value || 'Testimonial',
                    }
                ),
            },
        }),
        faqSection: singleton({
            label: 'FAQ Section',
            path: 'content/globals/faq/',
            format: { data: 'json' },
            schema: {
                eyebrow: fields.text({ label: 'Eyebrow Badge' }),
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                faqs: fields.array(
                    fields.object({
                        question: fields.text({ label: 'Question' }),
                        answer: fields.text({ label: 'Answer', multiline: true }),
                    }),
                    {
                        label: 'FAQ Items',
                        itemLabel: (item) => item.fields.question.value || 'FAQ Item',
                    }
                ),
            },
        }),
    },
});
