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
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    links: true,
                    images: true
                }),
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
            label: 'Navigation',
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
                            directory: 'public/images/cms/homepage',
                            publicPath: '/images/cms/homepage/',
                        }),
                        darkImage: fields.image({
                            label: 'Dark-mode Mockup Image',
                            directory: 'public/images/cms/homepage',
                            publicPath: '/images/cms/homepage/',
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
    },
});