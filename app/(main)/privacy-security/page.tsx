export default function PrivacySecurityPage() {
  return (
    <main className="flex-1 flex flex-col pt-32 pb-24">
      <section className="max-w-[1200px] w-full mx-auto px-6 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="mb-12 text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
                Legal & Compliance
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.08] text-foreground tracking-tight">
              Privacy & Security
            </h1>
            <p className="text-[15px] font-medium text-muted-foreground leading-relaxed max-w-[600px]">
              Last updated: October 2026. We are committed to protecting your data and ensuring complete transparency about how it is used.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <section className="flex flex-col gap-3">
              <h2 className="text-[20px] font-semibold text-foreground tracking-tight">1. Enterprise-Grade Security</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Security is foundational to KeilHQ. We use AES-256 encryption to secure your data at rest and TLS 1.3 for all data in transit. Our infrastructure is hosted on industry-leading cloud providers with SOC 2 Type II compliance. We employ strict role-based access control (RBAC) and conduct regular independent security audits to ensure your workspace remains impenetrable.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[20px] font-semibold text-foreground tracking-tight">2. AI Privacy & Data Usage</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                KeilHQ uses AI to boost your team's productivity, but your data belongs to you. <strong className="text-foreground">We do not use your private workspace data to train public AI models.</strong> Any data processed by our AI is done securely, ephemerally where possible, and exclusively to provide the service to you. You maintain full ownership and control over everything you create and store in KeilHQ.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[20px] font-semibold text-foreground tracking-tight">3. Data Collection and Usage</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                We collect information necessary to provide, maintain, and improve our services. This includes account information, usage data, and content you choose to upload. We strictly limit internal access to your data. Support personnel only access your workspace data when explicitly granted permission by you to resolve an issue.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[20px] font-semibold text-foreground tracking-tight">4. Third-Party Integrations</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                When you connect third-party services (like Google Calendar, GitHub, or Jira) to KeilHQ, we access only the data required to facilitate the integration. We respect the privacy policies of our integration partners and do not share your KeilHQ data with these third parties unless explicitly initiated by your actions within the app.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[20px] font-semibold text-foreground tracking-tight">5. Your Rights and Choices</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Depending on your location, you may have rights under the GDPR, CCPA, or other data protection laws. These include the right to access, correct, delete, or export your personal data. You can exercise these rights directly within the KeilHQ dashboard or by contacting our Data Protection Officer at privacy@Keilhq.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
