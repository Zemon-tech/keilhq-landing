# IT / Security / Compliance View of KeilHQ

**First reaction:** "I need a vendor security questionnaire and a data flow diagram before this conversation goes further."

The IT/Security persona's job is to identify risk, not endorse products. A "yes" from this persona means "no blocking red flags found" — not enthusiasm. KeilHQ currently has meaningful gaps for this persona.

---

## What Is Confirmed and Positive (from code)

**Authentication**: Supabase JWT with server-side verification on every request. Not client-side-only. Tokens are validated locally (fast, no roundtrip). User sessions table with revocation support — when a user signs out, the session can be marked revoked and all further requests from that session will be rejected.

**Role-Based Access Control**: Server-side enforcement via middleware on every route. Two levels: org (owner/admin/manager/member) and space (admin/manager/member). Members cannot create or delete tasks — only admins/managers can, unless the task is assigned to them. This is the correct architecture — not client-only permission hiding.

**Rate Limiting**: AI requests rate-limited (20/minute, 100/day per user). Task and page creation rate-limited by dedicated middleware. This reduces abuse surface.

**Data Export**: A billing route `GET /api/v1/billing/export` provides user data export even on locked/expired accounts. Users are not held hostage to their data.

**Meeting Audio Storage**: Audio is uploaded to AWS S3 via presigned URLs. S3 is auditable, with access controls configurable per bucket.

**Local AI Option**: Users can configure a local Ollama-compatible AI endpoint — meaning AI queries do not have to leave the network for organizations with data sovereignty requirements. This is a meaningful option for security-conscious deployments.

---

## What Is Missing or Unknown (honest gaps)

| Risk Area | Current State | What's Needed |
|---|---|---|
| **Compliance certifications** | None. No SOC 2, HIPAA, GDPR, ISO 27001, or any certification referenced anywhere in the codebase or docs. | At minimum, SOC 2 Type II to unblock mid-market. HIPAA for healthcare. GDPR documentation for EU. |
| **Data residency** | Supabase-hosted PostgreSQL and AWS S3 — regions not documented publicly. No data residency controls visible in code. | Public documentation of which AWS/Supabase regions are used; customer-selectable regions for enterprise. |
| **AI data handling** | By default, user workspace data (task text, doc content, chat messages) is sent to OpenRouter for AI processing. OpenRouter is a third-party routing service — what models and what their data retention policies are depends on the model selected. | Documented data processing agreement with OpenRouter; clear statement of what workspace data is sent to AI providers and under what circumstances. Local AI option partially addresses this but needs documentation. |
| **Meeting audio handling** | Meeting audio is processed by Sarvam AI or ElevenLabs — third-party services. Meeting content may include confidential business information. | Data processing agreements with Sarvam AI and ElevenLabs; documentation of retention and deletion policies for uploaded audio. |
| **Public security page** | Does not exist. | A basic trust page answering: data residency, subprocessor list, access controls, incident response contact. Absence of this page is itself a red flag in a vendor review. |
| **SAML/OIDC SSO** | "SSO" is mentioned in the Teams plan description in docs, but no SSO implementation is visible in the backend routes or auth middleware. | Confirmation of whether SSO is implemented or planned. |
| **Penetration testing** | No mention anywhere. | — |
| **Dodo Payments** | Smaller payment processor. PCI-DSS status not independently verifiable from the codebase. | Procurement teams will need to vet Dodo Payments separately if standard invoicing or purchase orders are required. |

---

## Verdict by Organization Type

| Organization type | Realistic outcome |
|---|---|
| **Small startup or agency (< 30 people)** | IT review is often informal or absent. Current security posture (RBAC, JWT, rate limiting, S3 storage) is adequate for this tier. Likely to proceed without formal review. |
| **Mid-market (30–200 people)** | Will ask about SOC 2, SSO, and data residency. Without documentation for at least two of these, deals stall or die at the IT/legal review stage. |
| **Regulated industry (healthcare, finance, legal, government)** | Hard no. HIPAA, SOC 2, and GDPR documentation are non-negotiable prerequisites. KeilHQ cannot currently meet these requirements. Do not pursue until certifications are in place. |
| **Enterprise (200+ people)** | Will require formal vendor security questionnaire, SOC 2, SAML SSO, dedicated support, and likely data residency controls. KeilHQ is not at this stage yet. |

---

## Most Actionable Gap

**Publish a basic security/trust page.** Even a simple one-page document answering the five most common vendor security questions (data residency, subprocessors, access controls, incident response, data deletion process) removes the single most common blocker for any deal above ~15 seats. The absence of this page signals more risk than the product actually has — because sophisticated buyers fill the vacuum with worst-case assumptions.
