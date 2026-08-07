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

  // 1. Apply Basic Authentication to Keystatic admin page only (not API routes)
  if (pathname.startsWith("/keystatic")) {
    const adminUser = process.env.KEYSTATIC_ADMIN_USER;
    const adminPass = process.env.KEYSTATIC_ADMIN_PASS;

    // Enforce basic auth if administrative credentials are configured
    if (adminUser && adminPass) {
      const authHeader = request.headers.get("authorization");

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

  // 2. Apply auth redirection for homepage visitors
  if (pathname === "/") {
    // Check for the shared non-sensitive session marker cookie ("keilhq_session=1")
    // written to .keilhq.in by the Vite web application at app.keilhq.in
    const sessionMarker = request.cookies.get("keilhq_session")?.value;

    if (sessionMarker === "1") {
      // Active user session detected — redirect straight to web app (<5ms)
      return NextResponse.redirect(new URL(APP_URL));
    }

    // Fallback: Check for legacy sb-*-auth-token cookie if present
    const legacySessionCookie = request.cookies
      .getAll()
      .find(
        (c) => c.name.startsWith("sb-") && (c.name.endsWith("-auth-token") || c.name.includes("-auth-token"))
      );

    if (legacySessionCookie?.value) {
      try {
        const session = JSON.parse(decodeURIComponent(legacySessionCookie.value));
        const accessToken: string | undefined = session?.access_token;
        const expiresAt: number | undefined = session?.expires_at;
        const nowSeconds = Math.floor(Date.now() / 1000);

        if (accessToken && expiresAt !== undefined && expiresAt - 30 > nowSeconds) {
          return NextResponse.redirect(new URL(APP_URL));
        }
      } catch {
        /* ignore invalid legacy JSON */
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/keystatic/:path*",
  ],
};
