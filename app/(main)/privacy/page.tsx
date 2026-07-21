import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Learn how KeilHQ collects, uses, and protects your workspace and personal data with enterprise-grade security.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 flex flex-col pt-28 sm:pt-36 pb-20 sm:pb-28">
      <section className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex justify-center">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="mb-12 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border/50">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Legal
              </span>
            </div>
            <h1 className="font-sans text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.1] text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Last updated: October 24, 2026
            </p>
          </div>

          {/* Policy Body */}
          <div className="flex flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground border-t border-border/40 pt-10">
            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                1. Overview & Commitment to Privacy
              </h2>
              <p>
                At KeilHQ (&quot;KeilHQ&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), privacy and data protection are foundational to how we build software. This Privacy Policy describes how we collect, use, disclose, and protect personal and workspace information when you use our website, application, APIs, and associated services.
              </p>
              <p>
                We believe you own your data. We do not sell your personal data, nor do we access your private workspace content except as required to deliver the service or as explicitly requested by you.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                We collect information in three ways: information you provide directly, information collected automatically through your use of the platform, and information from third-party integrations you connect.
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  <strong className="text-foreground">Account Information:</strong> Name, email address, password hash, profile avatar, job title, and organization billing details when you register for an account.
                </li>
                <li>
                  <strong className="text-foreground">Workspace Content:</strong> Tasks, documents, chat messages, meeting notes, project boards, and attachments stored within your KeilHQ organization.
                </li>
                <li>
                  <strong className="text-foreground">Usage & Device Data:</strong> IP address, browser type, operating system, device identifiers, referrer URLs, and interactive event logs collected for performance monitoring and security auditing.
                </li>
                <li>
                  <strong className="text-foreground">Integration Data:</strong> Information authorized via OAuth connections with third-party tools such as Google Calendar, GitHub, Figma, or Slack.
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                3. How We Use Information & AI Safeguards
              </h2>
              <p>
                We use collected data strictly to operate, optimize, and secure the KeilHQ platform:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Providing workspace features, real-time sync, and notification delivery.</li>
                <li>Authenticating access and executing billing and plan management.</li>
                <li>Detecting, preventing, and responding to technical issues or security threats.</li>
              </ul>
              <div className="p-5 rounded-lg border border-border/50 bg-secondary/30 text-foreground text-[14px] leading-relaxed my-2">
                <strong className="font-semibold block mb-1">AI Privacy Guarantee:</strong>
                KeilHQ offers AI-assisted workflows. <span className="underline decoration-muted-foreground/40">We do not use your private workspace data, documents, or team chats to train public or foundation AI models.</span> Processing for AI features occurs ephemerally over encrypted channels solely to serve your requests.
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                4. Data Security & Storage
              </h2>
              <p>
                We maintain enterprise-grade technical and organizational safeguards:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Encryption in transit using TLS 1.3 and at rest using AES-256 standards.</li>
                <li>Strict Role-Based Access Controls (RBAC) preventing unauthorized access.</li>
                <li>Continuous infrastructure monitoring and SOC 2 Type II compliance audit processes (currently in transit).</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                5. Your Privacy Rights & Choices
              </h2>
              <p>
                Depending on your location (including under GDPR, CCPA/CPRA), you have the right to:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Access, download, or export a machine-readable copy of your workspace data.</li>
                <li>Rectify inaccurate personal information associated with your profile.</li>
                <li>Request permanent deletion of your account and workspace data.</li>
                <li>Opt-out of non-essential communications or telemetry collection.</li>
              </ul>
              <p>
                To exercise any of these rights, contact our privacy team at{" "}
                <a href="mailto:privacy@keilhq.com" className="text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity">
                  privacy@keilhq.com
                </a>.
              </p>
            </section>

            <section className="flex flex-col gap-3 border-t border-border/40 pt-8 mt-4">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                6. Contact Information
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us at:
              </p>
              <p className="font-mono text-[13px] text-foreground">
                KeilHQ Inc.<br />
                Attn: Privacy Officer<br />
                Email: privacy@keilhq.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
