"use client";

import React from "react";
import Image from "next/image";
import { Mail, MessagesSquare, CheckSquare, Calendar, FileText, Mic } from "lucide-react";

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-zinc-500" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v6.313A2.528 2.528 0 0 1 8.823 24a2.528 2.528 0 0 1-2.52-2.522v-6.313zm2.52-10.123a2.528 2.528 0 0 1-2.52-2.522A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.522 2.52v2.52H8.823zm0 1.261a2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.522H2.522A2.528 2.528 0 0 1 0 8.823a2.528 2.528 0 0 1 2.522-2.52h6.301zm10.122 2.52a2.528 2.528 0 0 1 2.522-2.52A2.528 2.528 0 0 1 24 8.823a2.528 2.528 0 0 1-2.522 2.522h-2.52V8.823zm-1.261 0a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.52 2.522v6.301zm-2.52 10.122a2.528 2.528 0 0 1 2.52 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522zm0-1.261a2.528 2.528 0 0 1-2.522-2.52 2.528 2.528 0 0 1 2.522-2.522h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.52h-6.313z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-zinc-500" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-zinc-500" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 10.98c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm4.587 8.019c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49h4.49v4.49zm-4.49 3.019c1.665 0 3.019-1.355 3.019-3.019v-3.019H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm11.704-7.509c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49zm-4.49 3.019c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019-3.019 1.355-3.019 3.019 1.354 3.019 3.019 3.019z"/>
  </svg>
);



export function IntegrationCloud() {
  const integrations = [
    { icon: <SlackIcon />,                                        label: "Slack",           top: "15%", left: "12%", delay: "0s"   },
    { icon: <GithubIcon />,                                       label: "GitHub",          top: "25%", left: "78%", delay: "1.5s" },
    { icon: <Calendar className="size-4 text-zinc-500" />,        label: "Google Calendar", top: "68%", left: "20%", delay: "0.7s" },
    { icon: <FigmaIcon />,                                        label: "Figma",           top: "52%", left: "80%", delay: "2.1s" },
    { icon: <Mail className="size-4 text-zinc-500" />,            label: "Gmail",           top: "72%", left: "70%", delay: "1.2s" },
    { icon: <FileText className="size-4 text-zinc-500" />,        label: "Notion",          top: "18%", left: "42%", delay: "2.8s" },
    { icon: <Mic className="size-4 text-zinc-500" />,             label: "Sarvam AI",       top: "75%", left: "48%", delay: "0.3s" },
    { icon: <MessagesSquare className="size-4 text-zinc-500" />,  label: "Linear",          top: "45%", left: "8%",  delay: "1.9s" },
    { icon: <CheckSquare className="size-4 text-zinc-500" />,     label: "Jira",            top: "42%", left: "90%", delay: "3.2s" },
  ];

  return (
    <section className="relative w-full py-28 bg-zinc-50 overflow-hidden border-y border-zinc-100">

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {integrations.map((item, idx) => (
          <div
            key={idx}
            className="absolute px-3 py-2 bg-white border border-zinc-200 rounded-xl shadow-sm flex items-center gap-2 animate-[float_6s_ease-in-out_infinite]"
            style={{ top: item.top, left: item.left, animationDelay: item.delay }}
          >
            {item.icon}
            <span className="text-[10px] font-semibold text-zinc-500">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Center content */}
      <div className="max-w-9xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-6">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
          <Image src="/keilhq.svg" alt="" width={200} height={200} />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 max-w-xl leading-tight">
          KielHQ connects with 50+ tools your team already uses.
        </h2>
        <p className="text-base text-zinc-500 max-w-md">
          Slack, GitHub, Linear, Notion, Google Calendar, and more — connect in one click. No custom APIs or developer hours required.
        </p>

        {/* Mobile grid */}
        <div className="flex md:hidden flex-wrap justify-center gap-3 mt-4">
          {integrations.slice(0, 6).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-full shadow-sm">
              {item.icon}
              <span className="text-xs font-semibold text-zinc-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%   { transform: translateY(0px) rotate(0deg); }
          50%  { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}
