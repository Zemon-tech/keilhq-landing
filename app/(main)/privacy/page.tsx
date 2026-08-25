import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how KeilHQ collects, uses, and protects your workspace, personal data, and Google integrations with enterprise-grade security.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 flex flex-col pt-28 sm:pt-36 pb-20 sm:pb-28">
      <section className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex justify-center">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="mb-12 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border/50">
              <span className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground">
                Legal
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.1] text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Last updated: August 25, 2026
            </p>
          </div>

          {/* Policy Body */}
          <div className="flex flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground border-t border-border pt-10">
            {/* Section 1 */}
            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight font-display">
                1. Overview & Commitment to Privacy
              </h2>
              <p>
                At KeilHQ (&quot;KeilHQ&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), available at{" "}
                <a href="https://keilhq.in" className="text-foreground underline underline-offset-4">
                  keilhq.in
                </a>{" "}
                and{" "}
                <a href="https://app.keilhq.in" className="text-foreground underline underline-offset-4">
                  app.keilhq.in
                </a>
                , privacy and data protection are foundational to how we build software. This Privacy Policy describes how we collect, use, disclose, and protect personal and workspace information when you use our website, web applications, APIs, and associated services.
              </p>
              <p>
                We believe you own your data. We do not sell your personal data, nor do we access your private workspace content except as required to deliver the service or as explicitly requested by you.
              </p>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight font-display">
                2. Information We Collect
              </h2>
              <p>
                We collect information in three ways: information you provide directly, information collected automatically through your use of the platform, and information from third-party integrations you authorize:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  <strong className="text-foreground">Account Information:</strong> Name, email address, profile avatar, job title, and organization billing details when you register for an account or authenticate via OAuth.
                </li>
                <li>
                  <strong className="text-foreground">Workspace Content:</strong> Tasks, schedules, documents, chat messages, meeting notes, project boards, and attachments stored within your KeilHQ organization.
                </li>
                <li>
                  <strong className="text-foreground">Usage & Device Data:</strong> IP address, browser type, operating system, device identifiers, referrer URLs, and interactive event logs collected for performance monitoring and security auditing.
                </li>
                <li>
                  <strong className="text-foreground">Third-Party Integrations:</strong> Data authorized via OAuth connections with third-party tools such as Google (Google Sign-In, Google Calendar), GitHub, Figma, or Slack.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight font-display">
                3. How We Use Information & AI Safeguards
              </h2>
              <p>
                We use collected data strictly to operate, optimize, and secure the KeilHQ platform:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Providing workspace features, real-time sync, task scheduling, and notification delivery.</li>
                <li>Authenticating user access and managing organizations, spaces, and subscriptions.</li>
                <li>Detecting, preventing, and responding to technical bugs, security threats, or unauthorized access.</li>
              </ul>
              <div className="p-5 rounded-lg border border-border bg-card text-foreground text-[14px] leading-relaxed my-2">
                <strong className="font-semibold block mb-1">AI Privacy Guarantee:</strong>
                KeilHQ offers AI-assisted workflows and smart scheduling. <span className="underline decoration-muted-foreground/40">We do not use your private workspace data, documents, tasks, team chats, or third-party integration data to train generalized AI/ML foundation models.</span> Processing for AI features occurs ephemerally over encrypted channels solely to serve your specific in-app requests.
              </div>
            </section>

            {/* Section 4 - Google API Services & Limited Use Policy */}
            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight font-display">
                4. Google API Services & Limited Use Disclosure
              </h2>
              <p>
                KeilHQ allows users to connect their Google accounts for authentication (Google Sign-In) and productivity enhancements (such as Google Calendar two-way synchronization).
              </p>

              <div className="flex flex-col gap-3 pl-2">
                <div>
                  <strong className="text-foreground">Google Data We Access:</strong>
                  <ul className="list-disc pl-5 mt-1 flex flex-col gap-1.5">
                    <li>
                      <strong>Google Profile & Email:</strong> We access your basic profile information (name, email address, profile photo) to create and authenticate your account.
                    </li>
                    <li>
                      <strong>Google Calendar Data:</strong> When enabled by you, KeilHQ accesses your calendar entries (event titles, start/end times, and event status) to synchronize tasks, display schedule availability, and avoid scheduling conflicts.
                    </li>
                  </ul>
                </div>

                <div>
                  <strong className="text-foreground">How We Use & Protect Google Data:</strong>
                  <ul className="list-disc pl-5 mt-1 flex flex-col gap-1.5">
                    <li>Google data is used solely to provide user-facing scheduling and identity features visible within the KeilHQ application.</li>
                    <li>We do not transfer or sell Google user data to third parties, advertising networks, data brokers, or information resellers.</li>
                    <li>We do not use Google user data for serving personalized, retargeted, or interest-based advertisements.</li>
                    <li>We do not use Google user data to train, retrain, or fine-tune generalized machine learning or artificial intelligence models.</li>
                    <li>Human access to Google user data is strictly prohibited unless you provide explicit consent for technical troubleshooting, it is required for security investigations, or it is required by applicable law.</li>
                  </ul>
                </div>
              </div>

              {/* Mandatory Google Limited Use Statement */}
              <div className="p-5 rounded-lg border border-primary/20 bg-primary/5 text-foreground text-[14px] leading-relaxed my-2">
                <strong className="font-semibold block mb-1">Google API Limited Use Disclosure:</strong>
                KeilHQ&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity font-medium"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </div>

              <p className="text-[14px]">
                You can disconnect your Google account or revoke KeilHQ&apos;s access at any time from your KeilHQ integration settings or directly via the{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  Google Account Security Permissions
                </a>{" "}
                page.
              </p>
            </section>

            {/* Section 5 */}
            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight font-display">
                5. Data Security & Storage
              </h2>
              <p>
                We maintain enterprise-grade technical and organizational safeguards:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Encryption in transit using TLS 1.3 and at rest using AES-256 standards.</li>
                <li>Strict Role-Based Access Controls (RBAC) preventing unauthorized access across organizations.</li>
                <li>Database isolation and row-level security ensuring multi-tenant data confidentiality.</li>
                <li>OAuth refresh tokens and credentials are securely encrypted and stored with restricted access.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight font-display">
                6. Your Privacy Rights & Data Deletion
              </h2>
              <p>
                Depending on your jurisdiction (including under GDPR, CCPA/CPRA, and other privacy laws), you have the right to:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Access, export, or download a machine-readable copy of your workspace data.</li>
                <li>Rectify or update inaccurate personal information.</li>
                <li>Request permanent deletion of your account, workspace data, and connected integration tokens.</li>
                <li>Opt-out of non-essential communications or telemetry collection.</li>
              </ul>
              <p>
                To exercise any of these rights or request complete data deletion, contact our privacy team at{" "}
                <a
                  href="mailto:hello@keilhq.in"
                  className="text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  hello@keilhq.in
                </a>.
              </p>
            </section>

            {/* Section 7 */}
            <section className="flex flex-col gap-3 border-t border-border pt-8 mt-4 font-sans">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight font-display">
                7. Contact Information
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us at:
              </p>
              <p className="text-[14px] text-foreground leading-relaxed">
                <strong>KeilHQ</strong><br />
                Attn: Privacy Officer<br />
                Email:{" "}
                <a
                  href="mailto:hello@keilhq.in"
                  className="text-foreground underline underline-offset-4"
                >
                  hello@keilhq.in
                </a><br />
                Website:{" "}
                <a
                  href="https://keilhq.in"
                  className="text-foreground underline underline-offset-4"
                >
                  https://keilhq.in
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
