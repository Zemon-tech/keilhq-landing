import { config, collection, fields } from '@keystatic/core';

const isDev = process.env.NODE_ENV === 'development';

// Keystatic manages Blog + Changelog + Press.
// All other website pages are edited manually in code:
// see lib/site-content.ts and content/features/*/index.json.
export default config({
    storage: isDev
        ? { kind: 'local' }
        : {
            kind: 'github',
            repo: 'Zemon-tech/keilhq-landing',
        },
    collections: {
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
                headline: fields.text({
                    label: 'Display headline (optional)',
                    description: 'Shown on the site instead of the fetched link title. Leave empty to use the link title.',
                }),
                platform: fields.select({
                    label: 'Platform',
                    options: [
                        { label: 'LinkedIn', value: 'linkedin' },
                        { label: 'Instagram', value: 'instagram' },
                        { label: 'X (Twitter)', value: 'x' },
                        { label: 'News / Press', value: 'news' },
                        { label: 'YouTube', value: 'youtube' },
                        { label: 'Podcast', value: 'podcast' },
                    ],
                    defaultValue: 'linkedin',
                }),
                url: fields.text({ label: 'Post / Article URL', description: 'Paste the link, then preview its fetched title + thumbnail at /admin/press before saving.', validation: { length: { min: 1 } } }),
                thumbnail: fields.image({
                    label: 'Thumbnail Image',
                    description: 'Leave empty to use the link preview fetched from the URL.',
                    directory: 'public/images/cms/press',
                    publicPath: '/images/cms/press/',
                }),
                excerpt: fields.text({ label: 'Excerpt / Caption', description: 'Leave empty to use the link description fetched from the URL.', multiline: true }),
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
                    directory: 'public/mockups',
                    publicPath: '/mockups/',
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
});
