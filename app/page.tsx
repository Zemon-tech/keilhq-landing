import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BackedBy } from "@/components/landing/backed-by";
import { Vision } from "@/components/landing/vision";
import { IntegrationCloud } from "@/components/landing/integration-cloud";
import { Features, StickyScrollSection } from "@/components/landing/features";
import { LovedBy } from "@/components/landing/loved-by";
import { Footer } from "@/components/landing/footer";
import { Sparkles, Check, Info } from "lucide-react";

// ─── Light-themed Excel Mockup ───────────────────────────────────────────────
const ExcelMockup = () => (
  <div className="w-full bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xl flex flex-col text-left">
    {/* Window chrome */}
    <div className="px-4 py-2.5 border-b border-zinc-100 bg-zinc-50 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-400" />
          <div className="size-3 rounded-full bg-amber-400" />
          <div className="size-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-zinc-400 font-medium ml-1">FY revenue model.xlsx</span>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
        <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
        Saved
      </div>
    </div>

    {/* Toolbar strip */}
    <div className="px-4 py-1.5 border-b border-zinc-100 bg-white flex items-center gap-3 text-[10px] text-zinc-400">
      {["File", "Edit", "View", "Insert", "Format", "Tools"].map((t) => (
        <span key={t} className="hover:text-zinc-700 cursor-default">{t}</span>
      ))}
    </div>

    {/* Main layout */}
    <div className="flex flex-1 overflow-hidden">
      {/* Spreadsheet */}
      <div className="flex-1 overflow-auto bg-white p-0 text-[11px]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-zinc-50">
              <th className="border border-zinc-200 p-2 text-[10px] text-zinc-400 font-normal w-8 text-center">#</th>
              <th className="border border-zinc-200 p-2 text-left text-zinc-600 font-semibold">Product</th>
              <th className="border border-zinc-200 p-2 text-right text-zinc-600 font-semibold">Q1</th>
              <th className="border border-zinc-200 p-2 text-right text-zinc-600 font-semibold">Q2</th>
              <th className="border border-zinc-200 p-2 text-right text-zinc-600 font-semibold">Q3</th>
              <th className="border border-zinc-200 p-2 text-right text-zinc-600 font-semibold">FY Total</th>
              <th className="border border-zinc-200 p-2 text-right text-emerald-700 font-semibold bg-emerald-50">YoY ↑</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Aurora Cloud",   q1: "$124K", q2: "$141K", q3: "$168K", fy: "$625K",  yoy: "14.7%" },
              { name: "Northwind API",  q1: "$82K",  q2: "$96K",  q3: "$108K", fy: "$404K",  yoy: "12.2%" },
              { name: "Helix Sync",     q1: "$54K",  q2: "$61K",  q3: "$72K",  fy: "$268K",  yoy: "11.2%" },
              { name: "Vanta Streams",  q1: "$38K",  q2: "$44K",  q3: "$46K",  fy: "$177K",  yoy: "8.6%"  },
              { name: "Skyline Edge",   q1: "$28K",  q2: "$32K",  q3: "$34K",  fy: "$132K",  yoy: "12.8%" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-zinc-50/60">
                <td className="border border-zinc-100 p-2 text-center text-zinc-300">{i + 1}</td>
                <td className="border border-zinc-100 p-2 text-zinc-700 font-medium">{row.name}</td>
                <td className="border border-zinc-100 p-2 text-right text-zinc-500">{row.q1}</td>
                <td className="border border-zinc-100 p-2 text-right text-zinc-500">{row.q2}</td>
                <td className="border border-zinc-100 p-2 text-right text-zinc-500">{row.q3}</td>
                <td className="border border-zinc-100 p-2 text-right text-zinc-800 font-semibold">{row.fy}</td>
                <td className="border border-zinc-100 p-2 text-right text-emerald-600 font-semibold bg-emerald-50/60">{row.yoy}</td>
              </tr>
            ))}
            <tr className="bg-zinc-50 font-bold">
              <td className="border border-zinc-200 p-2 text-center text-zinc-300">6</td>
              <td className="border border-zinc-200 p-2 text-zinc-800">Total</td>
              <td className="border border-zinc-200 p-2 text-right text-zinc-700">$326K</td>
              <td className="border border-zinc-200 p-2 text-right text-zinc-700">$377K</td>
              <td className="border border-zinc-200 p-2 text-right text-zinc-700">$428K</td>
              <td className="border border-zinc-200 p-2 text-right text-zinc-900">$1.61M</td>
              <td className="border border-zinc-200 p-2 text-right text-emerald-700 bg-emerald-50">11.9%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AI Sidebar */}
      <div className="w-56 border-l border-zinc-200 bg-white flex flex-col text-[11px]">
        <div className="px-3 py-2.5 border-b border-zinc-100 flex items-center justify-between">
          <span className="font-semibold text-zinc-800 flex items-center gap-1.5">
            <Sparkles className="size-3 text-zinc-400" />
            Audit model
          </span>
          <span className="size-2 rounded-full bg-emerald-500" />
        </div>
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
          <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-600">
            <p className="font-semibold text-zinc-800 text-[10px]">Action: Add YoY column</p>
            <p className="mt-1 leading-relaxed text-[10px] text-zinc-500">Analyzing rows and calculating year-on-year growth averages...</p>
          </div>
          {[
            "Inserted formula: =(FY2024-FY2023)/FY2023",
            "Formatted percentage styles",
            "Applied bold to summary row",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-2 text-[10px] text-zinc-500">
              <Check className="size-3 text-emerald-500 mt-0.5 shrink-0" />
              <span>{step}</span>
            </div>
          ))}
          {/* Ask anything input */}
          <div className="mt-auto pt-3 border-t border-zinc-100">
            <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-[10px] text-zinc-400">
              <span className="flex-1">Ask anything...</span>
              <span className="text-zinc-300">↵</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Light-themed Salesforce Mockup ─────────────────────────────────────────
const SalesforceMockup = () => (
  <div className="w-full bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xl flex flex-col text-left">
    {/* Window chrome */}
    <div className="px-4 py-2.5 border-b border-zinc-100 bg-zinc-50 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-400" />
          <div className="size-3 rounded-full bg-amber-400" />
          <div className="size-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-zinc-400 font-medium ml-1">Salesforce — Pipeline</span>
      </div>
      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">● Live sync</span>
    </div>

    {/* Toolbar */}
    <div className="px-4 py-1.5 border-b border-zinc-100 bg-white flex items-center gap-3 text-[10px] text-zinc-400">
      {["Opportunities", "Accounts", "Contacts", "Reports", "Dashboards"].map((t) => (
        <span key={t} className={`cursor-default ${t === "Opportunities" ? "text-zinc-800 font-semibold border-b-2 border-zinc-800 pb-0.5" : "hover:text-zinc-600"}`}>{t}</span>
      ))}
    </div>

    <div className="flex flex-1 overflow-hidden">
      {/* Main content */}
      <div className="flex-1 p-4 overflow-auto bg-white flex flex-col gap-4 text-[11px]">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-zinc-800 text-sm">Acquisition Deal Sync</h3>
          <span className="text-[10px] text-zinc-400 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded-full">Autosync on</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex flex-col gap-1.5">
            <span className="text-[9px] text-zinc-400 uppercase font-semibold tracking-wide">Account</span>
            <p className="font-semibold text-zinc-800 text-xs">Vanta Streams Inc.</p>
            <p className="text-zinc-500 text-[10px] leading-relaxed">Enterprise telemetry package. $177K/year.</p>
          </div>
          <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex flex-col gap-1.5">
            <span className="text-[9px] text-zinc-400 uppercase font-semibold tracking-wide">Stage</span>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span className="text-emerald-700 font-semibold text-xs">Negotiation</span>
            </div>
            <p className="text-zinc-500 text-[10px] leading-relaxed">Q2 close based on Slack updates.</p>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-zinc-400 uppercase font-semibold tracking-wide">Live Pipeline Stream</span>
            <span className="text-[9px] text-zinc-400">2m ago</span>
          </div>
          <div className="flex flex-col gap-1.5 text-[10px] font-mono">
            <div className="flex items-center justify-between text-zinc-600">
              <span>[Slack] #deal-vanta: Contract signed</span>
              <span className="text-emerald-600 font-semibold">+STAGE UP</span>
            </div>
            <div className="flex items-center justify-between text-zinc-600">
              <span>[Gmail] invoice_vanta_draft.pdf</span>
              <span className="text-blue-500 font-semibold">+ATTACHED</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Sidebar */}
      <div className="w-56 border-l border-zinc-200 bg-white flex flex-col text-[11px]">
        <div className="px-3 py-2.5 border-b border-zinc-100 flex items-center justify-between">
          <span className="font-semibold text-zinc-800 flex items-center gap-1.5">
            <Sparkles className="size-3 text-zinc-400" />
            CRM Assistant
          </span>
          <span className="size-2 rounded-full bg-emerald-500" />
        </div>
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
          <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200">
            <p className="font-semibold text-zinc-800 text-[10px]">Updating Stage</p>
            <p className="mt-1 text-[10px] text-zinc-500 leading-relaxed">Extracting close parameters from customer email...</p>
          </div>
          {[
            "Moving stage to closed-won",
            "Updating ACV to $177,000",
            "Syncing Salesforce Accounts",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-2 text-[10px] text-zinc-500">
              <div className="size-2 rounded-full bg-blue-400 mt-0.5 shrink-0" />
              <span>{step}</span>
            </div>
          ))}
          <div className="mt-auto pt-3 border-t border-zinc-100">
            <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-[10px] text-zinc-400">
              <span className="flex-1">Ask anything...</span>
              <span className="text-zinc-300">↵</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Light-themed Slack Mockup ───────────────────────────────────────────────
const SlackMockup = () => (
  <div className="w-full bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xl flex flex-col text-left">
    {/* Window chrome */}
    <div className="px-4 py-2.5 border-b border-zinc-100 bg-zinc-50 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-400" />
          <div className="size-3 rounded-full bg-amber-400" />
          <div className="size-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-zinc-400 font-medium ml-1">#quarterly-reviews — Slack</span>
      </div>
      <div className="size-5 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-[10px]">S</div>
    </div>

    {/* Toolbar */}
    <div className="px-4 py-1.5 border-b border-zinc-100 bg-white flex items-center gap-3 text-[10px] text-zinc-400">
      {["Messages", "Threads", "Files", "Pins"].map((t) => (
        <span key={t} className={`cursor-default ${t === "Messages" ? "text-zinc-800 font-semibold border-b-2 border-zinc-800 pb-0.5" : "hover:text-zinc-600"}`}>{t}</span>
      ))}
    </div>

    <div className="flex flex-1 overflow-hidden">
      {/* Chat */}
      <div className="flex-1 p-4 overflow-auto bg-white flex flex-col gap-4 text-[11px]">
        {/* User message */}
        <div className="flex gap-3">
          <div className="size-7 rounded-lg bg-indigo-100 flex items-center justify-center text-[9px] font-bold text-indigo-600 shrink-0">SK</div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-800 text-xs">Shivang Kandoi</span>
              <span className="text-[9px] text-zinc-400">10:42 AM</span>
            </div>
            <p className="text-zinc-600 leading-relaxed">
              @o11 summarize our core customer metrics from last quarter and compile the slide-deck link.
            </p>
          </div>
        </div>

        {/* Bot response */}
        <div className="flex gap-3 bg-zinc-50 border border-zinc-200 rounded-xl p-3">
          <div className="size-7 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-4 h-4 text-zinc-600" fill="currentColor">
              {[...Array(12)].map((_, i) => (
                <rect key={i} x="45" y="8" width="10" height="28" rx="5" transform={`rotate(${i * 30} 50 50)`} />
              ))}
            </svg>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-800 text-xs">o11 Agent</span>
              <span className="text-[9px] text-zinc-400">10:42 AM</span>
              <span className="text-[9px] bg-zinc-200 text-zinc-600 px-1.5 py-0.5 rounded-full font-semibold">BOT</span>
            </div>
            <p className="text-zinc-600 text-[10px] leading-relaxed">
              Analyzed Q3 spreadsheet data. Core metrics summary compiled:
            </p>
            <div className="p-2.5 rounded-lg bg-white border border-zinc-200 flex flex-col gap-1.5 text-[10px]">
              <div className="flex justify-between border-b border-zinc-100 pb-1.5">
                <span className="font-semibold text-zinc-700">Total Q3 Revenue</span>
                <span className="text-emerald-600 font-bold">$1,610,000</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 pb-1.5">
                <span className="font-semibold text-zinc-700">Avg YoY Growth</span>
                <span className="text-zinc-800">11.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-zinc-700">Top Product</span>
                <span className="text-zinc-800">Aurora Cloud ($625K)</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-lg text-blue-600 text-[10px] font-medium w-fit">
              <Info className="size-3" />
              <span>Generated: Q3_Metrics_Presentation.pptx</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Sidebar */}
      <div className="w-56 border-l border-zinc-200 bg-white flex flex-col text-[11px]">
        <div className="px-3 py-2.5 border-b border-zinc-100 flex items-center justify-between">
          <span className="font-semibold text-zinc-800 flex items-center gap-1.5">
            <Sparkles className="size-3 text-zinc-400" />
            o11 Assistant
          </span>
          <span className="size-2 rounded-full bg-emerald-500" />
        </div>
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
          <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-500 text-[10px] italic leading-relaxed">
            @o11 summarize our core customer metrics...
          </div>
          {[
            { color: "bg-zinc-400",   label: "Triggered: CRM update workflow" },
            { color: "bg-amber-400",  label: "Reasoned for 2.4s" },
            { color: "bg-emerald-500",label: "Compiled Q3 metrics summary" },
            { color: "bg-blue-400",   label: "Notified #sales-wins on Slack" },
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-2 text-[10px] text-zinc-600">
              <div className={`size-2 rounded-full ${step.color} mt-0.5 shrink-0`} />
              <span>{step.label}</span>
            </div>
          ))}
          <div className="mt-auto pt-3 border-t border-zinc-100">
            <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-[10px] text-zinc-400">
              <span className="flex-1">Ask anything...</span>
              <span className="text-zinc-300">↵</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const featuresData: StickyScrollSection[] = [
  {
    id: "excel",
    badgeText: "Excel",
    title: "Model anything in Excel",
    description: "Build complex financial models, clean massive datasets, and audit workbooks for errors — all with natural-language commands.",
    visualComponent: <ExcelMockup />,
  },
  {
    id: "salesforce",
    badgeText: "Salesforce",
    title: "Sync deals and pipeline status",
    description: "Automate deal progression, log call notes, and update forecast categories automatically from your team's chats and documents.",
    visualComponent: <SalesforceMockup />,
  },
  {
    id: "slack",
    badgeText: "Slack",
    title: "Keep your team aligned",
    description: "Coordinate cross-functional projects, notify stakeholders, and generate executive summaries directly inside your channels.",
    visualComponent: <SlackMockup />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-zinc-950 selection:bg-zinc-900/10">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <BackedBy />
        <Vision />
        <IntegrationCloud />
        <Features data={featuresData} />
        <LovedBy />
      </main>
      <Footer />
    </div>
  );
}
