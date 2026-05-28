"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Search, Check } from "lucide-react";

export function Hero() {
  const [typedPrompt, setTypedPrompt] = useState("");
  const [currentReasoningStep, setCurrentReasoningStep] = useState(0);

  useEffect(() => {
    const promptText = "Move Helix renewal to Closed Won at $210K and notify the owner.";
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < promptText.length) {
        setTypedPrompt((prev) => prev + promptText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        const stepInterval = setInterval(() => {
          setCurrentReasoningStep((prev) => {
            if (prev < 3) return prev + 1;
            clearInterval(stepInterval);
            return prev;
          });
        }, 1400);
      }
    }, 38);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    // White section background — forest image is only behind the right mockup
    <section className="relative w-full min-h-screen bg-white flex items-center">
      <div className="max-w-8xl w-full mx-auto px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 pt-28 pb-16">

        {/* ── Left: Copy on white ── */}
        <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-6 text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-tight">
            The AI Agent Inside Every Enterprise App
          </h1>

          {/* App icon row */}
          <div className="flex items-center gap-2">
            {[
              { bg: "bg-emerald-500", path: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M16.2,9L13.7,12L16.2,15H14.2L12.5,13L10.8,15H8.8L11.3,12L8.8,9H10.8L12.5,11L14.2,9H16.2Z" },
              { bg: "bg-red-500",     path: "M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M19 19H5V5H19V19M15 9H13V11H15V9M15 13H13V15H15V13M11 9H9V15H11V9Z" },
              { bg: "bg-blue-600",    path: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M16.5,9H14.5L12.5,12.5L10.5,9H8.5L11.5,15H13.5L16.5,9Z" },
              { bg: "bg-green-500",   path: "M14 2H6C4.89 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M13 9V3.5L18.5 9H13M6 20V4H12V10H18V20H6M8 12H16V14H8V12M8 16H16V18H8V16Z" },
              { bg: "bg-amber-400",   path: "M14 2H6C4.89 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M13 9V3.5L18.5 9H13M6 20V4H12V10H18V20H6M8 13H16V15H8V13Z" },
              { bg: "bg-sky-500",     path: "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M13 9V3.5L18.5 9H13M6 20V4H12V10H18V20H6M8 12H16V13.5H8V12M8 15H16V16.5H8V15M8 18H13V19.5H8V18Z" },
            ].map((icon, i) => (
              <div key={i} className={`flex items-center justify-center size-9 rounded-xl ${icon.bg} shadow-sm`}>
                <svg viewBox="0 0 24 24" className="size-5 text-white fill-current">
                  <path d={icon.path} />
                </svg>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors group"
            >
              Sign up
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              Book a demo
            </a>
          </div>
        </div>

        {/* ── Right: Demo card — forest image is the background of THIS card only ── */}
        <div className="flex-1 w-full min-w-0 relative rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: 650 }}>

          {/* Forest background — scoped to this card */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop')` }}
          />
          {/* Slight darkening so the white mockup pops */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Floating white browser mockup on top of the forest */}
          <div className="relative m-5 md:m-7 bg-white rounded-xl overflow-hidden shadow-xl flex flex-col" style={{ minHeight: 600 }}>

            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-100 bg-zinc-50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-400" />
                  <div className="size-3 rounded-full bg-amber-400" />
                  <div className="size-3 rounded-full bg-emerald-400" />
                </div>
                <div className="hidden sm:flex items-center gap-0 ml-2 text-[11px]">
                  {["Home", "Accounts", "Contacts", "Opportunities", "Leads", "Reports"].map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1.5 cursor-default ${
                        t === "Opportunities"
                          ? "bg-blue-600 text-white rounded-sm font-medium"
                          : "text-zinc-500"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative hidden sm:flex items-center">
                  <Search className="absolute left-2 size-3 text-zinc-400" />
                  <input
                    disabled
                    placeholder="Search Salesforce..."
                    className="bg-white border border-zinc-200 rounded-md pl-6 pr-2 py-1 text-[10px] text-zinc-500 w-36 pointer-events-none"
                  />
                </div>
                <div className="size-6 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white font-bold">AT</div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 overflow-hidden">

              {/* Salesforce list */}
              <div className="flex-1 overflow-auto bg-white p-4 flex flex-col gap-3 text-[11px]">
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                  <span>Opportunities</span><span>›</span><span>List Views</span>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-zinc-900">M. Chen – Open Negotiations</h2>
                  <div className="flex gap-2">
                    <button className="px-2.5 py-1 text-[10px] font-medium bg-white border border-zinc-300 rounded text-zinc-700">New</button>
                    <button className="px-2.5 py-1 text-[10px] font-medium bg-white border border-zinc-300 rounded text-zinc-700">Import</button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] flex-wrap">
                  <span className="text-zinc-400">2 items · Sorted by Close Date · updated a few seconds ago</span>
                  <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-zinc-600">Owner: M. Chen</span>
                  <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-zinc-600">Stage: Negotiation</span>
                </div>
                <table className="w-full border-collapse text-[10px]">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="py-2 pr-3 w-4"></th>
                      <th className="py-2 pr-4 text-left font-semibold text-zinc-500">Opportunity Name</th>
                      <th className="py-2 pr-4 text-left font-semibold text-zinc-500">Account Name</th>
                      <th className="py-2 pr-4 text-left font-semibold text-zinc-500">Amount</th>
                      <th className="py-2 pr-4 text-left font-semibold text-zinc-500">Stage</th>
                      <th className="py-2 pr-4 text-left font-semibold text-zinc-500">Close Date</th>
                      <th className="py-2 text-left font-semibold text-zinc-500">Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Atlas Robotics — Build", account: "Atlas Robotics",      amount: "$310,000", close: "5/18/2026" },
                      { name: "Bridgewater pilot",      account: "Bridgewater Partners", amount: "$220,000", close: "6/22/2026" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50">
                        <td className="py-2.5 pr-3 text-zinc-300">☆</td>
                        <td className="py-2.5 pr-4 text-blue-600 font-medium">{row.name}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.account}</td>
                        <td className="py-2.5 pr-4 text-zinc-700 font-medium">{row.amount}</td>
                        <td className="py-2.5 pr-4">
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full font-medium">Negotiation</span>
                        </td>
                        <td className="py-2.5 pr-4 text-zinc-500">{row.close}</td>
                        <td className="py-2.5 text-zinc-500 flex items-center gap-1.5">
                          <div className="size-4 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white font-bold">MC</div>
                          M. Chen
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-[9px] text-zinc-400 mt-auto pt-2">2 results in view &nbsp;·&nbsp; © Sandbox: Protection</div>
              </div>

              {/* AI sidebar */}
              <div className="w-60 border-l border-zinc-200 bg-white flex flex-col shrink-0 text-[10px]">
                <div className="px-3 py-2.5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50">
                  <span className="font-semibold text-zinc-800 text-xs">Pipeline review</span>
                  <button className="text-zinc-400 text-base leading-none">+</button>
                </div>
                <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
                  {/* Prompt */}
                  <div className="flex gap-2">
                    <div className="size-5 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white font-bold shrink-0">AT</div>
                    <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg p-2 text-zinc-600 leading-relaxed">
                      {typedPrompt || <span className="text-zinc-300">Listening...</span>}
                      {typedPrompt.length > 0 && typedPrompt.length < 64 && (
                        <span className="inline-block w-0.5 h-3 bg-zinc-400 ml-0.5 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {currentReasoningStep >= 1 && (
                    <div className="flex flex-col gap-1 animate-in fade-in duration-300">
                      <div className="flex items-center gap-1.5 text-zinc-400 text-[9px]">
                        <span className="size-3 rounded-sm border border-zinc-300 flex items-center justify-center text-[7px]">⊙</span>
                        Reasoned for 3s ›
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                        <Check className="size-3 text-zinc-500 shrink-0" />
                        Update opportunity: Helix ...
                      </div>
                      <p className="text-zinc-400 leading-relaxed pl-4">Done — Helix Capital marked Closed Won at $210K, M. Chen notified.</p>
                    </div>
                  )}
                  {currentReasoningStep >= 2 && (
                    <div className="flex flex-col gap-1 animate-in fade-in duration-300">
                      <div className="flex items-center gap-1.5 text-zinc-400 text-[9px]">
                        <span className="size-3 rounded-sm border border-zinc-300 flex items-center justify-center text-[7px]">⊙</span>
                        Reasoned for 3s ›
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                        <Check className="size-3 text-zinc-500 shrink-0" />
                        Delete opportunity: Vanta ...
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                        <Check className="size-3 text-zinc-500 shrink-0" />
                        Create opportunity: Atlas ...
                      </div>
                      <p className="text-zinc-400 leading-relaxed pl-4">Pipeline updated — $310K Atlas Robotics added, Vanta archived.</p>
                    </div>
                  )}
                  {currentReasoningStep >= 3 && (
                    <div className="flex flex-col gap-1 animate-in fade-in duration-300">
                      <div className="flex items-center gap-1.5 text-zinc-400 text-[9px]">
                        <span className="size-3 rounded-sm border border-zinc-300 flex items-center justify-center text-[7px]">⊙</span>
                        Reasoned for 3s ›
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                        <Check className="size-3 text-zinc-500 shrink-0" />
                        Apply list view filter
                      </div>
                      <p className="text-zinc-400 leading-relaxed pl-4">Filter applied — 2 open negotiations for M. Chen.</p>
                    </div>
                  )}
                </div>
                {/* Input */}
                <div className="p-2.5 border-t border-zinc-100">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-[10px] text-zinc-400">
                    <span className="flex-1">Ask anything...</span>
                    <span className="px-1.5 py-0.5 bg-zinc-200 rounded text-[9px] text-zinc-600 font-medium">Auto</span>
                    <div className="size-4 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white font-bold">+</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
