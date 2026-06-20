import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check, ShieldCheck, Users, ArrowRight, Briefcase, Sparkles } from "lucide-react";

export default function FreelancersPage() {
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
                Solutions · Freelancers
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              KielHQ is built for how you actually work solo
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
              Client onboarding, tasks, transcripts, and document approvals unified in one clean dashboard. Scale your solo business with zero clutter.
            </p>

            {/* CTA Button */}
            <Link 
              href="https://app.keilhq.in/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold active:scale-[0.97] transition-transform duration-150 shadow-md"
            >
              Start Free for Freelancers
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
                  For solo designers
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Map project boards, organize brand asset scopes, and gather feedback using clean, public share links.
                </p>
              </div>

              {/* Role 2 */}
              <div className="flex flex-col gap-3 p-2">
                <div className="size-10 rounded-sm bg-zinc-50 border border-zinc-200/80 dark:bg-[#161616]/90 dark:border-white/5 flex items-center justify-center shadow-sm">
                  <Briefcase className="size-5 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  For consultants
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Draft client brief roadmaps, compile interview session insights, and track milestones sequentially.
                </p>
              </div>

              {/* Role 3 */}
              <div className="flex flex-col gap-3 p-2">
                <div className="size-10 rounded-sm bg-zinc-50 border border-zinc-200/80 dark:bg-[#161616]/90 dark:border-white/5 flex items-center justify-center shadow-sm">
                  <Sparkles className="size-5 text-muted-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  For copywriters
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Create responsive editor spaces, organize document folders, and collaborate on content briefs directly.
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
                IP protections.<br />Isolated client access.
              </h2>
              
              <div className="w-full bg-background border border-zinc-200/80 dark:border-white/5 p-8 rounded-sm shadow-2xl flex flex-col gap-6">
                <div className="size-11 rounded-sm bg-secondary/80 border border-border/50 flex items-center justify-center">
                  <ShieldCheck className="size-5 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">
                    Private client share endpoints
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    Client deliverables and project specs are secure. Permissions isolate visitor access down to shared views.
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
                  title: "Intellectual Property Guard", 
                  desc: "Control document editing and download actions on client review cards and project boards.",
                  borderColor: "border-t-[3px] border-t-indigo-500" 
                },
                { 
                  title: "Client NDA Storage", 
                  desc: "Keep project proposals, agreements, and scope documents organized and securely encrypted.",
                  borderColor: "border-t-[3px] border-t-emerald-500" 
                },
                { 
                  title: "Encrypted Transfers", 
                  desc: "Asset uploads, code files, and audio transcripts are uploaded through secure transport tunnels.",
                  borderColor: "border-t-[3px] border-t-amber-500" 
                },
                { 
                  title: "Isolated Dashboards", 
                  desc: "Generate standalone progress views so clients only see their own tasks and schedules.",
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
                Built to simplify<br />client management
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Running a client business solo is tough. KielHQ unifies tasks, docs, transcripts, and approvals in a clean, minimal workspace so you can execute.
              </p>
            </div>

            {/* Right side checkmark items */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Provide clients with clean progress cards to review tasks and calendars.",
                "Auto-transcribe call audios, converting interview notes to checklist tasks.",
                "Enforce clear Objectives and Success Criteria milestones on active client projects.",
                "Collaborate in real-time on proposals, specs, and editorial briefs.",
                "Ask the inline AI assistant to quickly summarize active blockers and deadlines.",
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
