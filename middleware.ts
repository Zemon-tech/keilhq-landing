import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ── Auth-redirect middleware ──────────────────────────────────────────────────
// When a visitor already has an active Supabase session (written to a shared
// .Keilhq.in cookie by the Vite app at app.Keilhq.in) we redirect them to the
// app before the landing page ever renders — zero content flash.
//
// How it works:
//   1. The Vite app stores the Supabase session in a cookie named
//      "sb-<project-ref>-auth-token" scoped to ".Keilhq.in".
//   2. This middleware reads that cookie, parses the JSON payload, and checks
//      that the access_token is present AND has not expired yet.
//   3. On a valid, non-expired session → redirect to https://app.Keilhq.in.
//   4. On any failure (no cookie, bad JSON, expired) → let the request proceed
//      normally so the landing page renders as usual.
//
// This file runs at the Edge so it is ultra-fast (<5 ms) and adds zero latency
// to unauthenticated visitors.

const APP_URL = "https://app.Keilhq.in";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Apply Basic Authentication to Keystatic routes
  if (pathname.startsWith("/keystatic") || pathname.startsWith("/api/keystatic")) {
    const adminUser = process.env.KEYSTATIC_ADMIN_USER;
    const adminPass = process.env.KEYSTATIC_ADMIN_PASS;

    // Enforce basic auth in production OR if local credentials are provided in dev
    if (process.env.NODE_ENV === "production" || (adminUser && adminPass)) {
      const authHeader = request.headers.get("authorization");

      if (!adminUser || !adminPass) {
        // Fallback: Prevent access if administrative credentials are not configured in production
        return new NextResponse("CMS Access Blocked: Administrative credentials are not configured.", { status: 403 });
      }

      if (authHeader) {
        try {
          const authValue = authHeader.split(" ")[1];
          const decoded = atob(authValue);
          const colonIndex = decoded.indexOf(":");
          
          if (colonIndex !== -1) {
            const user = decoded.substring(0, colonIndex);
            const password = decoded.substring(colonIndex + 1);

            if (user === adminUser && password === adminPass) {
              return NextResponse.next();
            }
          }
        } catch {
          // If decoding fails, fall through to prompt credentials again
        }
      }

      return new NextResponse("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Keystatic CMS Admin Panel"',
        },
      });
    }

    return NextResponse.next();
  }

  // 2. Apply Supabase auth redirection for homepage visitors
  if (pathname === "/") {
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
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/keystatic/:path*",
    "/api/keystatic/:path*",
  ],
};
