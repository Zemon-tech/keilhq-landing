/**
 * /home — mirrors the root landing page so logged-in users can access
 * the marketing site without being redirected. This simply re-exports
 * everything from the root page so there is no duplication.
 */
export { default, metadata } from "@/app/(main)/page";
