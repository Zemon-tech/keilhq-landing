# Tasks Checklist

## Phase 1: Global Branding & Navigation (Layout, Navbar, Footer)
- [x] Create `lib/keystatic/` cached helper files
- [x] Refactor `app/layout.tsx` metadata with `generateMetadata()` Site Settings query
- [x] Refactor `components/landing/navbar.tsx` to accept and render dynamic navigation links (using Client boundary split)
- [x] Refactor pages rendering `<Navbar />` to pass dynamic navigation props (made transparent by server component wrapping)
- [x] Refactor `components/landing/footer.tsx` into an async Server Component querying Keystatic Footer/Site Settings (removed client event handlers)
- [x] Remove hardcoded navigation lists and footer mock arrays
- [x] Verify Phase 1:
  - [x] Content updates in Keystatic and saves correctly
  - [x] Corresponding file changes are created/updated under `content/`
  - [x] Frontend reflects the updated value
  - [x] No hydration warnings or console errors
  - [x] `pnpm run build` succeeds
  - [x] `npx tsc --noEmit` succeeds

## Phase 2: Homepage Content Model
- [ ] Refactor `app/page.tsx` into a Server Component querying the `homepage` singleton
- [ ] Update `components/landing/hero.tsx` to accept copywriting details as props
- [ ] Update `components/landing/final-cta.tsx` to accept CTA settings as props
- [ ] Update `components/landing/blogs.tsx` to accept blogs list as props
- [ ] Clean up hardcoded `featuresData` list from `app/page.tsx`
- [ ] Verify Phase 2:
  - [ ] Content updates in Keystatic and saves correctly
  - [ ] Corresponding file changes are created/updated under `content/`
  - [ ] Frontend reflects the updated value
  - [ ] No hydration warnings or console errors
  - [ ] `pnpm run build` succeeds
  - [ ] `npx tsc --noEmit` succeeds

## Phase 3: Blog Pages
- [ ] Refactor `app/blog/page.tsx` into a Server Component querying the `blog` collection
- [ ] Extract client search/filter interactive logic to `BlogListClient`
- [ ] Refactor `app/blog/[slug]/page.tsx` to read dynamic entry content with fallback `notFound()`
- [ ] Delete `posts` mock array
- [ ] Verify Phase 3:
  - [ ] Content updates in Keystatic and saves correctly
  - [ ] Corresponding file changes are created/updated under `content/`
  - [ ] Frontend reflects the updated value
  - [ ] No hydration warnings or console errors
  - [ ] `pnpm run build` succeeds
  - [ ] `npx tsc --noEmit` succeeds

## Phase 4: Changelog Page
- [ ] Implement AST parser helper in `lib/keystatic/changelog.ts` to extract summary and category lists from Markdoc document nodes
- [ ] Refactor `app/changelog/page.tsx` into a Server Component querying Keystatic changelog collection (using preserved Markdoc schema)
- [ ] Extract active filters/accordion state to `ChangelogClient`
- [ ] Remove `changelogEntries` mock dataset
- [ ] Verify Phase 4:
  - [ ] Content updates in Keystatic and saves correctly
  - [ ] Corresponding file changes are created/updated under `content/`
  - [ ] Frontend reflects the updated value
  - [ ] No hydration warnings or console errors
  - [ ] `pnpm run build` succeeds
  - [ ] `npx tsc --noEmit` succeeds
