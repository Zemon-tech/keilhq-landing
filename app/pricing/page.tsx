import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ArrowRight } from "lucide-react";

// Reusable Research grounded-in panel component
const ResearchPanel = () => (
  <div className="w-full bg-zinc-50/50 border border-zinc-200/85 dark:bg-[#0e0e0e]/50 dark:border-white/5 rounded-sm p-8 sm:p-10 mt-12 shadow-sm transition-colors duration-300">
    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-6">
      Research this is grounded in
    </span>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <div>
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
          Stanford HAI: AI Index 2025
        </h4>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-1.5">
          Business AI adoption accelerated in 2024 while inference costs fell sharply, making agentic workflows practical for more teams.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
          McKinsey: The State of AI 2025
        </h4>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-1.5">
          Most organizations use AI somewhere, but the value gap comes from redesigning workflows instead of only adding chat tools.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
          Microsoft + LinkedIn: Work Trend Index 2024
        </h4>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-1.5">
          Knowledge workers are adopting AI quickly, often before companies have a clear plan, training model, or governance layer.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
          NIST: AI Risk Management Framework
        </h4>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-1.5">
          Trustworthy AI depends on validity, reliability, security, transparency, privacy, and accountability across the full lifecycle.
        </p>
      </div>
    </div>
  </div>
);

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto w-full">
        
        {/* ─── SECTION 1: Pricing Tier Grid ─── */}
        <section className="mb-24">
          {/* Header */}
          <div className="text-left mb-16">
            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 dark:text-white">
              Pricing
            </h1>
            <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
              KeilHQ supports users of every scale — from first prompt to enterprise rollout.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Plan */}
            <div className="flex flex-col bg-zinc-50/20 border border-zinc-200/80 dark:bg-[#0e0e0e]/20 dark:border-white/5 rounded-sm p-7 sm:p-8 gap-6 transition-all duration-300">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Free</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 min-h-[40px] leading-relaxed">
                  For individuals getting started.
                </p>
              </div>

              <Link
                href="#"
                className="w-full bg-[#ededed] hover:bg-[#e2e2e2] dark:bg-white/5 dark:hover:bg-white/10 dark:border dark:border-white/10 text-zinc-900 dark:text-zinc-100 font-medium px-4.5 py-3 rounded-sm text-sm flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Try for free</span>
                <ArrowRight className="size-4" />
              </Link>

              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">$0 <span className="text-sm font-normal text-zinc-400">/mo</span></span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">No credit card required</span>
              </div>

              <hr className="border-t border-zinc-200/60 dark:border-white/5" />

              <div className="flex flex-col gap-3.5 flex-grow">
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">Features:</span>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Access to add-in suite</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Limited add-in usage</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Limited file generation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col bg-zinc-50/20 border border-zinc-200/80 dark:bg-[#0e0e0e]/20 dark:border-white/5 rounded-sm p-7 sm:p-8 gap-6 transition-all duration-300">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Pro</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 min-h-[40px] leading-relaxed">
                  For power users.
                </p>
              </div>

              <Link
                href="#"
                className="w-full bg-zinc-950 hover:bg-zinc-900 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-medium px-4.5 py-3 rounded-sm text-sm flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Get Pro</span>
                <ArrowRight className="size-4" />
              </Link>

              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">$20 <span className="text-sm font-normal text-zinc-400">/mo</span></span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">Billed monthly</span>
              </div>

              <hr className="border-t border-zinc-200/60 dark:border-white/5" />

              <div className="flex flex-col gap-3.5 flex-grow">
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">Everything in Free, plus:</span>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Higher usage limits</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Access to all Office add-ins</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Document processing and uploads</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Large document ingestion</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* MAX Plan */}
            <div className="flex flex-col bg-zinc-50/20 border border-zinc-200/80 dark:bg-[#0e0e0e]/20 dark:border-white/5 rounded-sm p-7 sm:p-8 gap-6 transition-all duration-300">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">MAX</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 min-h-[40px] leading-relaxed">
                  For professionals.
                </p>
              </div>

              <Link
                href="#"
                className="w-full bg-[#ededed] hover:bg-[#e2e2e2] dark:bg-white/5 dark:hover:bg-white/10 dark:border dark:border-white/10 text-zinc-900 dark:text-zinc-100 font-medium px-4.5 py-3 rounded-sm text-sm flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Get MAX</span>
                <ArrowRight className="size-4" />
              </Link>

              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">$200 <span className="text-sm font-normal text-zinc-400">/mo</span></span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">Billed monthly</span>
              </div>

              <hr className="border-t border-zinc-200/60 dark:border-white/5" />

              <div className="flex flex-col gap-3.5 flex-grow">
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">Everything in Pro, plus:</span>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Maximum usage limits</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Priority model access</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Early access to beta features</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col bg-zinc-50/20 border border-zinc-200/80 dark:bg-[#0e0e0e]/20 dark:border-white/5 rounded-sm p-7 sm:p-8 gap-6 transition-all duration-300">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Enterprise</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 min-h-[40px] leading-relaxed">
                  For teams and organizations.
                </p>
              </div>

              <Link
                href="#"
                className="w-full bg-[#ededed] hover:bg-[#e2e2e2] dark:bg-white/5 dark:hover:bg-white/10 dark:border dark:border-white/10 text-zinc-900 dark:text-zinc-100 font-medium px-4.5 py-3 rounded-sm text-sm flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Book a demo</span>
                <ArrowRight className="size-4" />
              </Link>

              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Contact</span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">Custom terms</span>
              </div>

              <hr className="border-t border-zinc-200/60 dark:border-white/5" />

              <div className="flex flex-col gap-3.5 flex-grow">
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">Everything in MAX, plus:</span>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Custom security / compliance</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>SSO & bulk onboarding</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Bespoke feature sets</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Team management</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-sans">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-zinc-200/60 dark:bg-white/5 my-24" />

        {/* ─── SECTION 2: How to choose a plan ─── */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Copy */}
            <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-6 text-left">
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                How to choose a plan
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
                Price the workflow you are trying to change.
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                The right KeilHQ plan depends less on how many prompts someone sends and more on how much recurring work the team wants to move into agent-assisted execution.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-zinc-200 hover:bg-zinc-50 dark:border-white/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200 font-medium px-4.5 py-2.5 rounded-sm text-xs w-fit transition-colors cursor-pointer bg-transparent"
              >
                <span>Read the Academy</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Right Cards Stack */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="flex flex-col bg-white border border-zinc-200/80 dark:bg-[#0e0e0e] dark:border-white/5 rounded-sm p-7 gap-5 shadow-sm transition-colors duration-300">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Free: learn the surface
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow">
                  Use the free plan to understand how KeilHQ behaves inside the apps you already use. It is the right place to test whether agent-assisted work fits your day-to-day artifacts.
                </p>
                <ul className="list-disc pl-4 text-xs text-zinc-400 dark:text-zinc-500 space-y-3 mt-2">
                  <li>Install the add-ins you care about.</li>
                  <li>Try limited file generation and basic workflows.</li>
                  <li>Identify the repeated work worth upgrading for.</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col bg-white border border-zinc-200/80 dark:bg-[#0e0e0e] dark:border-white/5 rounded-sm p-7 gap-5 shadow-sm transition-colors duration-300">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Pro and MAX: run real workflows
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow">
                  Paid individual plans are for people whose work already depends on spreadsheets, decks, documents, and source files. The value is faster drafting, analysis, and review loops.
                </p>
                <ul className="list-disc pl-4 text-xs text-zinc-400 dark:text-zinc-500 space-y-3 mt-2">
                  <li>Use higher limits for recurring work.</li>
                  <li>Process and upload larger documents.</li>
                  <li>Use priority model access when speed matters.</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-white border border-zinc-200/80 dark:bg-[#0e0e0e] dark:border-white/5 rounded-sm p-7 gap-5 shadow-sm transition-colors duration-300">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Enterprise: standardize rollout
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow">
                  Enterprise is for organizations that need onboarding, security review, team management, compliance conversations, and repeatable AI workflows across departments.
                </p>
                <ul className="list-disc pl-4 text-xs text-zinc-400 dark:text-zinc-500 space-y-3 mt-2">
                  <li>Align controls with IT and security requirements.</li>
                  <li>Package best practices into team workflows.</li>
                  <li>Train users through Academy and guided rollout.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Research Panel */}
          <ResearchPanel />
        </section>

        <div className="h-px bg-zinc-200/60 dark:bg-white/5 my-24" />

        {/* ─── SECTION 3: Feature Comparison Table ─── */}
        <section className="mb-24 overflow-x-auto">
          <div className="min-w-[800px] w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-white/10 text-left">
                  <th className="py-4 text-sm font-semibold text-zinc-900 dark:text-white w-1/4">Features</th>
                  <th className="py-4 text-sm font-semibold text-zinc-900 dark:text-white w-1/6">Free</th>
                  <th className="py-4 text-sm font-semibold text-zinc-900 dark:text-white w-1/6">Pro</th>
                  <th className="py-4 text-sm font-semibold text-zinc-900 dark:text-white w-1/6">MAX</th>
                  <th className="py-4 text-sm font-semibold text-zinc-900 dark:text-white w-1/6">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/60 dark:divide-white/5">
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Add-in usage</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Limited</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Higher</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Maximum</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Unlimited</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">File generation</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Limited</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Higher</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Maximum</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Unlimited</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Access to all Office add-ins</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Document processing and uploads</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Large document ingestion</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Priority model access</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Early access to beta features</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Support</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Community</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Email</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Priority</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">Dedicated</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">SSO</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Bulk onboarding</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Team management</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Custom security / compliance</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-300 dark:text-zinc-700">—</td>
                  <td className="py-4.5 text-sm text-zinc-500 dark:text-zinc-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="h-px bg-zinc-200/60 dark:bg-white/5 my-24" />

        {/* ─── SECTION 4: Why pricing follows usage maturity ─── */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Copy */}
            <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-6 text-left">
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                Why pricing follows usage maturity
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
                AI value compounds when teams move from experiments to workflows.
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Research from Microsoft, McKinsey, Stanford, and NIST points to the same operational lesson: AI adoption is widespread, but value comes from training, governance, workflow redesign, and reviewable output.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-zinc-200 hover:bg-zinc-50 dark:border-white/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200 font-medium px-4.5 py-2.5 rounded-sm text-xs w-fit transition-colors cursor-pointer bg-transparent"
              >
                <span>Book a demo</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Right Cards Stack */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="flex flex-col bg-white border border-zinc-200/80 dark:bg-[#0e0e0e] dark:border-white/5 rounded-sm p-7 gap-5 shadow-sm transition-colors duration-300">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Agents need workflow context, not just prompts.
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow">
                  The practical leap from chatbot to agent is the ability to act against files, tools, and state. For knowledge work, that means the model needs the workbook, deck, document, project space, template, and review criteria close to the task.
                </p>
                <ul className="list-disc pl-4 text-xs text-zinc-400 dark:text-zinc-500 space-y-3 mt-2">
                  <li>Give the agent the artifact it should change, not a pasted approximation.</li>
                  <li>Keep source files and generated outputs connected for review.</li>
                  <li>Make reusable workflows explicit so the team does not reinvent prompts.</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col bg-white border border-zinc-200/80 dark:bg-[#0e0e0e] dark:border-white/5 rounded-sm p-7 gap-5 shadow-sm transition-colors duration-300">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  The value is in redesigned work, not one-off answers.
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow">
                  Research on enterprise AI adoption keeps pointing to the same pattern: organizations get more value when they redesign recurring workflows. A good agent workflow has inputs, actions, checkpoints, and a clear output.
                </p>
                <ul className="list-disc pl-4 text-xs text-zinc-400 dark:text-zinc-500 space-y-3 mt-2">
                  <li>Start with frequent, tedious, reviewable work.</li>
                  <li>Add human checkpoints where mistakes would be expensive.</li>
                  <li>Measure saved handoffs, cleaner artifacts, and faster review cycles.</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-white border border-zinc-200/80 dark:bg-[#0e0e0e] dark:border-white/5 rounded-sm p-7 gap-5 shadow-sm transition-colors duration-300">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  AI quality has to be inspectable.
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow">
                  For professional work, speed without traceability is a liability. Good AI systems help users see what changed, what sources were used, what assumptions were made, and which claims need human verification.
                </p>
                <ul className="list-disc pl-4 text-xs text-zinc-400 dark:text-zinc-500 space-y-3 mt-2">
                  <li>Separate source facts from recommendations.</li>
                  <li>Ask for change logs, assumptions, and open questions.</li>
                  <li>Review math, claims, formatting, and final judgment separately.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Research Panel */}
          <ResearchPanel />
        </section>

      </main>

      <Footer />
    </div>
  );
}
