"use client";

import React from "react";
import {
  Shield,
  Users,
  Zap,
  Globe,
  Lock,
  Eye,
  Settings,
  Clock,
} from "lucide-react";

export function EnterpriseCapabilities() {
  return (
    <section className="w-full py-16 lg:py-20 xl:py-24 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] text-zinc-900 dark:text-white mb-4" style={{ letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}>
            Enterprise-ready from day one
          </h2>
          <p className="text-[15px] font-medium tracking-[0.015em] text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
            Security, scalability, and team management built for organizations of any size.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* RBAC & Permissions */}
          <div className="flex flex-col items-start gap-4 p-6 bg-background border border-border/60 dark:border-white/5 rounded-sm shadow-sm">
            <div className="size-12 rounded-sm bg-[var(--color-indigo)]/10 text-[var(--color-indigo)] dark:text-[var(--color-limestone)] flex items-center justify-center">
              <Shield className="size-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">Role-Based Access Control</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Organization and Space-level roles (Owner, Admin, Manager, Member) with granular permissions for tasks, documents, and settings.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {['Owner', 'Admin', 'Manager', 'Member'].map((role) => (
                <span key={role} className="text-[9px] bg-[var(--color-indigo)]/10 text-[var(--color-indigo)] dark:text-[var(--color-limestone)] px-2 py-0.5 rounded-xs font-medium">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Real-time Collaboration */}
          <div className="flex flex-col items-start gap-4 p-6 bg-background border border-border/60 dark:border-white/5 rounded-sm shadow-sm">
            <div className="size-12 rounded-sm bg-[var(--color-forest)]/10 text-[var(--color-forest)] dark:text-[var(--color-copper)] flex items-center justify-center">
              <Zap className="size-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">Real-time Collaboration</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Socket.io powered real-time updates across tasks, documents, chat, and notifications. See changes instantly across all connected devices.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="size-2 rounded-full bg-[var(--color-copper)] animate-pulse"></div>
              <span className="text-[10px] text-[var(--color-copper)] font-medium">Live Updates Active</span>
            </div>
          </div>

          {/* Multi-tenant Architecture */}
          <div className="flex flex-col items-start gap-4 p-6 bg-background border border-border/60 dark:border-white/5 rounded-sm shadow-sm">
            <div className="size-12 rounded-sm bg-[var(--color-sandstone)]/10 text-[var(--color-sandstone)] flex items-center justify-center">
              <Users className="size-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">Multi-tenant Workspaces</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Complete data isolation between organizations and spaces. Each workspace operates independently with its own permissions and settings.
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <Lock className="size-3" />
                <span>Data isolation enforced</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <Settings className="size-3" />
                <span>Per-workspace configuration</span>
              </div>
            </div>
          </div>

          {/* Security & Audit */}
          <div className="flex flex-col items-start gap-4 p-6 bg-background border border-border/60 dark:border-white/5 rounded-sm shadow-sm">
            <div className="size-12 rounded-sm bg-[var(--color-marigold)]/10 text-[var(--color-marigold)] flex items-center justify-center">
              <Eye className="size-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">Security & Audit Trails</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Complete audit logging, OAuth 2.0 integrations, session management, and enterprise-grade security controls for compliance.
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <Clock className="size-3" />
                <span>Full activity logging</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <Globe className="size-3" />
                <span>OAuth 2.0 secured</span>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Enterprise Features List */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Feature list */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-white">
              Built for teams that ship fast
            </h3>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Cross-space sharing",
                  description: "Share Motion pages and resources across different spaces with granular permission controls."
                },
                {
                  title: "API access & webhooks", 
                  description: "Full REST API access and webhook integrations for custom workflows and third-party tool connections."
                },
                {
                  title: "Advanced notifications",
                  description: "Per-user notification preferences, bulk operations, and intelligent filtering to reduce noise."
                },
                {
                  title: "Meeting transcriptions",
                  description: "Multi-language audio transcription with speaker diarization using Sarvam AI and ElevenLabs engines."
                },
                {
                  title: "Settings & onboarding",
                  description: "Full settings dialog with account, preferences, AI assistant, task defaults, connectors, billing, and a guided onboarding wizard for new teams."
                },
                {
                  title: "Keyboard shortcuts",
                  description: "Navigate dashboard, tasks, motion, chat, notifications, meetings, and settings entirely from the keyboard with a built-in reference panel."
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-4 border border-border/30 rounded-sm bg-background/50">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{feature.title}</h4>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats/Numbers */}
          <div className="flex flex-col gap-8 lg:pl-12">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-2">23</div>
                <div className="text-[13px] text-muted-foreground">Languages supported for meeting transcription</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-2">&lt;50ms</div>
                <div className="text-[13px] text-muted-foreground">Real-time sync latency via WebSocket</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-2">5</div>
                <div className="text-[13px] text-muted-foreground">Permission levels for fine-grained access control</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-2">∞</div>
                <div className="text-[13px] text-muted-foreground">Nested task hierarchies and document structures</div>
              </div>
            </div>
            
            <div className="p-6 bg-card border border-border/60 rounded-sm shadow-sm">
              <h4 className="font-display text-lg font-semibold text-zinc-900 dark:text-white mb-3">Enterprise Support</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
                Dedicated support, custom integrations, SSO setup, and migration assistance for enterprise customers.
              </p>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[var(--color-copper)]"></div>
                <span className="text-[11px] text-[var(--color-copper)] font-medium">Available for Enterprise plans</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}