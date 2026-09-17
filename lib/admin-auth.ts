/**
 * Shared basic-auth gate for admin-only routes.
 * Mirrors middleware.ts: open when no credentials are configured (dev),
 * enforced otherwise. Edge-safe (no node APIs).
 */
export function isAdminAuthorized(request: Request): boolean {
  const adminUser = process.env.KEYSTATIC_ADMIN_USER;
  const adminPass = process.env.KEYSTATIC_ADMIN_PASS;
  if (!adminUser || !adminPass) return true;
  const header = request.headers.get('authorization');
  if (!header) return false;
  try {
    const decoded = atob(header.split(' ')[1] || '');
    const colonIndex = decoded.indexOf(':');
    if (colonIndex === -1) return false;
    return (
      decoded.substring(0, colonIndex) === adminUser &&
      decoded.substring(colonIndex + 1) === adminPass
    );
  } catch {
    return false;
  }
}
