import type { Metadata } from "next";
import { EnterpriseClient } from "./enterprise-client";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "KeilHQ for enterprise operations. Shared context, custom SLAs, audit logs, SSO/SAML integration, and dedicated cloud hosting options.",
};

export default function EnterprisePage() {
  return <EnterpriseClient />;
}
