import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and conditions governing your use of the KeilHQ platform, workspaces, and services.",
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Last updated: October 24, 2026
            </p>
          </div>

          {/* Terms Body */}
          <div className="flex flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground border-t border-border/40 pt-10">
            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By creating an account, accessing, or using KeilHQ (&quot;Services&quot;), provided by KeilHQ Inc. (&quot;KeilHQ&quot;, &quot;we&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you are agreeing to these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                2. User Accounts & Workspace Responsibilities
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your workspace. You agree to:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Provide accurate, current, and complete registration information.</li>
                <li>Promptly update your profile to maintain accuracy.</li>
                <li>Notify KeilHQ immediately of any unauthorized access or breach of security.</li>
                <li>Ensure compliance with all applicable laws and regulations when uploading content.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                3. Content Ownership & Intellectual Property
              </h2>
              <p>
                <strong className="text-foreground">Your Content:</strong> You retain all ownership rights in the text, files, documents, code, images, and other materials you store or transmit through KeilHQ. You grant KeilHQ a non-exclusive, worldwide, royalty-free license to host, display, and process your content solely to provide the Services to you.
              </p>
              <p>
                <strong className="text-foreground">KeilHQ Property:</strong> All intellectual property rights in the KeilHQ platform, including trademarks, design systems, software, code, and documentation, remain the exclusive property of KeilHQ Inc.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                4. Subscription, Billing & Cancellation
              </h2>
              <p>
                Certain features of KeilHQ require a paid subscription. Billing terms are as follows:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Subscriptions are billed in advance on a recurring monthly or annual basis.</li>
                <li>Fees are non-refundable except as explicitly required by law or specified in a written SLA.</li>
                <li>You may cancel your subscription at any time via workspace settings; access will continue through the end of your prepaid billing period.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                5. Prohibited Conduct
              </h2>
              <p>
                You agree not to misuse the Services. Prohibited actions include:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Attempting to probe, scan, or test the vulnerability of any KeilHQ system or network.</li>
                <li>Reverse engineering, decompiling, or attempting to extract source code from the platform.</li>
                <li>Using the platform to send unsolicited commercial messages (spam) or malware.</li>
                <li>Interfering with or disrupting the access of any user, host, or network.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                6. Service Level & Limitation of Liability
              </h2>
              <p>
                The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. To the maximum extent permitted by law, KeilHQ Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue.
              </p>
            </section>

            <section className="flex flex-col gap-3 border-t border-border/40 pt-8 mt-4">
              <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
                7. Contact & Support
              </h2>
              <p>
                For questions regarding these Terms or legal notices, please reach out to:
              </p>
              <p className="font-mono text-[13px] text-foreground">
                KeilHQ Inc.<br />
                Attn: Legal Department<br />
                Email: legal@keilhq.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
