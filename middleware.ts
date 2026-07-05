import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ── Auth-redirect middleware ──────────────────────────────────────────────────
// When a visitor already has an active Supabase session (written to a shared
// .keilhq.in cookie by the Vite app at app.keilhq.in) we redirect them to the
// app before the landing page ever renders — zero content flash.
//
// How it works:
//   1. The Vite app stores the Supabase session in a cookie named
//      "sb-<project-ref>-auth-token" scoped to ".keilhq.in".
//   2. This middleware reads that cookie, parses the JSON payload, and checks
//      that the access_token is present AND has not expired yet.
//   3. On a valid, non-expired session → redirect to https://app.keilhq.in.
//   4. On any failure (no cookie, bad JSON, expired) → let the request proceed
//      normally so the landing page renders as usual.
//
// This file runs at the Edge so it is ultra-fast (<5 ms) and adds zero latency
// to unauthenticated visitors.

const APP_URL = "https://app.keilhq.in";

export function middleware(request: NextRequest) {
  // Find the Supabase session cookie dynamically.
  // The name format is "sb-<project-ref>-auth-token" — we match the prefix/suffix
  // so we don't need to hardcode the project ref.
  const sessionCookie = request.cookies
    .getAll()
    .find(
      (c) => c.name.startsWith("sb-") && c.name.endsWith("-auth-token")
    );

  if (!sessionCookie?.value) {
    // No session cookie — render landing page normally
    return NextResponse.next();
  }

  try {
    // The value is URL-encoded JSON like:
    // {"access_token":"...","expires_at":1234567890,...}
    const session = JSON.parse(decodeURIComponent(sessionCookie.value));

    const accessToken: string | undefined = session?.access_token;
    const expiresAt: number | undefined = session?.expires_at;

    if (!accessToken) {
      return NextResponse.next();
    }

    // expires_at is a Unix timestamp (seconds). Check it hasn't passed yet.
    // We add a 30-second buffer to avoid redirecting with a token that's about
    // to expire mid-redirect.
    const nowSeconds = Math.floor(Date.now() / 1000);
    const isValid = expiresAt !== undefined && expiresAt - 30 > nowSeconds;

    if (isValid) {
      // User is logged in — send them straight to the app
      return NextResponse.redirect(new URL(APP_URL));
    }
  } catch {
    // Malformed cookie value — silently ignore and render landing page
  }

  return NextResponse.next();
}

export const config = {
  // Only run on the home page. All other pages (blog, docs, pricing, etc.)
  // are intentionally left unguarded so logged-in users can still browse them.
  matcher: ["/"],
};
