import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">

          {/* Hero */}
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">About</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
              We built KielHQ because we were tired of paying for six tools that don&apos;t talk to each other.
            </h1>
            <p className="text-base text-zinc-500 leading-relaxed">
              Every hour your team spends context-switching between tools is an hour not spent on work that actually moves the needle. KielHQ eliminates the gap between where work is discussed, where it&apos;s planned, where it&apos;s documented, and where it gets done.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4 border-l-2 border-zinc-100 pl-8">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Mission</span>
            <p className="text-2xl font-semibold text-zinc-950 leading-snug">
              &ldquo;Clarity first. Execution follows.&rdquo;
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              We believe your team doesn&apos;t have a productivity problem — they have a clarity problem. They&apos;re switching between tools, losing decisions in Slack, creating vague tasks that mean different things to different people, and spending hours in sync meetings just to find out what&apos;s actually blocked.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              KielHQ fixes all of it — not by adding another tool to your stack, but by becoming your entire stack.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {[
              { value: "7,000+", label: "Teams worldwide" },
              { value: "$40–$70", label: "Saved per seat / month" },
              { value: "50+", label: "Integrations" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "6", label: "Tools replaced" },
              { value: "1", label: "Workspace for everything" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-zinc-950">{stat.value}</span>
                <span className="text-sm text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Infrastructure */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Built on infrastructure you can trust</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "Cloudflare Workers", desc: "Globally fast frontend" },
                { name: "Supabase + PostgreSQL", desc: "Enterprise-grade database" },
                { name: "AWS S3", desc: "Secure meeting storage" },
                { name: "Socket.io", desc: "Real-time everything" },
                { name: "Google Gemini", desc: "AI with your actual data" },
                { name: "Sarvam AI", desc: "Meeting transcription" },
              ].map((item) => (
                <div key={item.name} className="p-4 rounded-xl border border-zinc-100 bg-zinc-50 flex flex-col gap-1">
                  <span className="text-sm font-semibold text-zinc-900">{item.name}</span>
                  <span className="text-xs text-zinc-500">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
