// ─── Waitlist mode (pilot) ───────────────────────────────────────────────────
// Signup is paused while piloting. All signup / buy CTAs across the landing
// site point here instead of https://app.keilhq.in/login.
//
// Set the URL from env (Vercel / Cloudflare dashboard, or local `.env`):
//   NEXT_PUBLIC_WAITLIST_URL="https://tally.so/r/obJlax"  (your waitlist form)
//
// Default is the Tally waitlist form so CTAs work even if the env var is
// missing; env still overrides when set.
export const WAITLIST_URL =
  process.env.NEXT_PUBLIC_WAITLIST_URL || "https://tally.so/r/obJlax";

// Post-submission page shown after the Tally form is completed.
// Set this path as the redirect URL in Tally:
//   Form → Settings → Completion → Redirect on completion →
//   "https://keilhq.in/waitlist/success"
export const WAITLIST_SUCCESS_PATH = "/waitlist/success";

// Direct app access is kept ONLY for existing pilot users via explicit login.
export const APP_LOGIN_URL = "https://app.keilhq.in/login";
