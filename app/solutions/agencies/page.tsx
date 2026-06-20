import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check, ShieldCheck, Landmark, Users, ArrowRight, Briefcase, FileCode, Sparkles } from "lucide-react";

export default function AgenciesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-none">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-28">
        
        {/* ── SECTION 1: HERO & SUB-ROLES ── */}
        <section className="w-full min-h-screen flex flex-col justify-center py-20 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-12">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Solutions · Agencies
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              KielHQ for agency team collaboration
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
              KielHQ&apos;s Org/Space model maps directly to agency operations. Manage multiple clients in dedicated, isolated spaces with built-in client approvals and zero context-switching.
            </p>

            {/* CTA Button */}
            <Link 
              href="https://app.keilhq.in/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold active:scale-[0.97] transition-transform duration-150 shadow-md"
            >
              Start Free for Your Agency
              <ArrowRight className="size-3.5" />
            </Link>

            {/* Sub-Roles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full text-left">
              
              {/* Role 1 */}
              <div className="flex flex-col gap-3 p-2">
                <div className="size-10 rounded-sm bg-zinc-50 border border-zinc-200/80 dark:bg-[#161616]/90 dark:border-white/5 flex items-center justify-center shadow-sm">
                  <Users className="size-5 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  For client managers
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Coordinate client communications, share live project approvals, and map tasks to objectives in real-time.
                </p>
              </div>

              {/* Role 2 */}
              <div className="flex flex-col gap-3 p-2">
                <div className="size-10 rounded-sm bg-zinc-50 border border-zinc-200/80 dark:bg-[#161616]/90 dark:border-white/5 flex items-center justify-center shadow-sm">
                  <Briefcase className="size-5 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  For account executives
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Generate comprehensive client status templates instantly using active sprint data, dependencies, and docs.
                </p>
              </div>

              {/* Role 3 */}
              <div className="flex flex-col gap-3 p-2">
                <div className="size-10 rounded-sm bg-zinc-50 border border-zinc-200/80 dark:bg-[#161616]/90 dark:border-white/5 flex items-center justify-center shadow-sm">
                  <Sparkles className="size-5 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  For creative directors
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Keep production teams aligned on assets, files, and objectives, with complete role-based visibility control.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ── SECTION 2: PRIVACY & CORE STRENGTHS ── */}
        <section className="w-full min-h-screen flex items-center justify-center py-24 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Heading + Encryption details */}
            <div className="flex flex-col gap-8 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Client separation.<br />Enterprise-grade security.
              </h2>
              
              <div className="w-full bg-background border border-zinc-200/80 dark:border-white/5 p-8 rounded-sm shadow-2xl flex flex-col gap-6">
                <div className="size-11 rounded-sm bg-secondary/80 border border-border/50 flex items-center justify-center">
                  <ShieldCheck className="size-5 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">
                    Compartmentalized client spaces
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    Client workspaces are separated at the database level. Permissions enforce strict visibility boundaries.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-border/50 pt-6 mt-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-semibold text-zinc-900 dark:text-white">AES-256</span>
                    <span className="text-[11px] text-muted-foreground">At-rest encryption</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-semibold text-zinc-900 dark:text-white">TLS 1.3</span>
                    <span className="text-[11px] text-muted-foreground">In-transit transport security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Border-topped cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { 
                  title: "Secure Infrastructure", 
                  desc: "Built on hardened cloud stacks with zero exposed entry points and rigorous rate limits.",
                  borderColor: "border-t-[3px] border-t-indigo-500" 
                },
                { 
                  title: "Role Isolation", 
                  desc: "Grant clients guest access to review deliverables, calendars, and sprint progress without exposure.",
                  borderColor: "border-t-[3px] border-t-emerald-500" 
                },
                { 
                  title: "Real-time Audits", 
                  desc: "Every data mutation is logged. Track exactly who modified client docs, tasks, or settings.",
                  borderColor: "border-t-[3px] border-t-amber-500" 
                },
                { 
                  title: "Independent Testing", 
                  desc: "Regular third-party vulnerability scans and automated code analysis verify absolute security compliance.",
                  borderColor: "border-t-[3px] border-t-rose-500" 
                },
              ].map((item) => (
                <div 
                  key={item.title} 
                  className={`w-full bg-background border border-zinc-200/80 dark:border-white/5 rounded-sm p-6 shadow-xl ${item.borderColor}`}
                >
                  <h4 className="font-display text-[15px] font-semibold text-zinc-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SECTION 3: CHECKLIST & VALUE VALUE PROP ── */}
        <section className="w-full min-h-screen flex items-center justify-center py-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side copy */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Built for how you<br />actually work
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KielHQ understands the friction points of client services. Multiple workspaces, approvals, documents, and transcripts are unified so you can stay in flow.
              </p>
            </div>

            {/* Right side checkmark items */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Client-ready shareable links let you collect approvals without messy email threads.",
                "Track document updates, mockups, and client approvals with automatic versioning.",
                "Record and auto-transcribe calls, converting notes to team deliverables in one click.",
                "Consult the inline AI workspace assistant to instantly scan blocker states across client projects.",
                "Simplify visibility for external guests, giving clients summaries while team members access details.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="size-3.5" />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
