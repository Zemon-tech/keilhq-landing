import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Legal</span>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Terms of Service</h1>
            <p className="text-sm text-zinc-400">Last updated: May 2026</p>
          </div>
          {[
            { title: "Acceptance", body: "By using KielHQ, you agree to these terms. If you are using KielHQ on behalf of an organization, you represent that you have authority to bind that organization." },
            { title: "Your account", body: "You are responsible for maintaining the security of your account credentials. KielHQ is not liable for any loss resulting from unauthorized access to your account." },
            { title: "Acceptable use", body: "You may not use KielHQ to violate any laws, infringe intellectual property rights, transmit malware, or engage in abusive behavior toward other users." },
            { title: "Your data", body: "You own your data. KielHQ does not claim ownership of content you create. You grant KielHQ a limited license to store and process your data solely to provide the service." },
            { title: "Service availability", body: "We target 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance where possible." },
            { title: "Termination", body: "You may cancel your account at any time. KielHQ may suspend accounts that violate these terms. Upon termination, you may export your data within 30 days." },
            { title: "Limitation of liability", body: "KielHQ is provided as-is. To the maximum extent permitted by law, KielHQ is not liable for indirect, incidental, or consequential damages." },
            { title: "Contact", body: "Questions about these terms? Email legal@kielhq.com." },
          ].map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h2 className="text-base font-semibold text-zinc-950">{section.title}</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
