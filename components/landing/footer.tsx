import Link from "next/link";
import Image from "next/image";
import { Link2, X, GitFork } from "lucide-react";
import { ToggleTheme } from "@/components/ui/toggle-theme";

const footerLinks = {
  Product: [
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Blog", href: "/blog" },
  ],
  Solutions: [
    { label: "Agencies", href: "/solutions/agencies" },
    { label: "Startups", href: "/solutions/startups" },
    { label: "Dev Teams", href: "/solutions/dev-teams" },
    { label: "Freelancers", href: "/solutions/freelancers" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Demo", href: "/demo" },
    { label: "Team", href: "/team" },
  ],
  Connect: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full min-h-screen bg-background relative z-[60] border-t border-border flex flex-col overflow-hidden">
      {/* Top Links Section */}
      <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        {/* Brand */}
        <div className="md:w-1/4 shrink-0 flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/keilhq.svg" alt="KielHQ" width={22} height={22} className="dark:hidden" />
            <Image src="/keilhq-white.svg" alt="KielHQ" width={22} height={22} className="hidden dark:block" />
            <span className="text-base font-medium tracking-tight text-foreground">
              KielHQ
            </span>
          </Link>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center text-secondary-foreground text-xs font-medium">Y</div>
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs font-medium">LY</div>
          </div>
        </div>

        {/* Links */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-5">
              <span className="text-sm font-medium text-muted-foreground">
                {section}
              </span>
              <nav className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground/75 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer to push copyright down */}
      <div className="flex-1 min-h-[120px]" />

      {/* Copyright Row */}
      <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-32 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        <span className="text-[13px] text-muted-foreground font-medium w-full md:w-1/3">
          © KielHQ {new Date().getFullYear()}
        </span>

        <div className="flex items-center gap-6 flex-wrap justify-center w-full md:w-1/3">
          {["Support", "Privacy", "Cookies", "Terms", "SOC 2"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end w-full md:w-1/3 gap-3">
          <span className="text-[13px] text-muted-foreground font-medium">
            Made in San Francisco
          </span>
          <ToggleTheme />
        </div>
      </div>

      {/* Bottom Grid Graphics */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] md:h-[50vh] pointer-events-none flex justify-between items-end px-[5%] opacity-100 dark:opacity-100">

        {/* Left Graphic (Semi-circle) */}
        <div
          className="w-[30%] h-[80%] bg-accent"
          style={{
            clipPath: 'circle(50% at 50% 100%)',
            maskImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'black\'/%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'black\'/%3E%3C/svg%3E")'
          }}
        />

        {/* Middle Graphic (Diagonal Cut) */}
        <div
          className="w-[28%] h-[100%] bg-accent"
          style={{
            clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 40%)', // Rough approximation of the shape
            maskImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'black\'/%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'black\'/%3E%3C/svg%3E")'
          }}
        />

        {/* Right Graphic (Diagonal Cut) */}
        <div
          className="w-[28%] h-[100%] bg-accent"
          style={{
            clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%, 0 60%, 40% 30%)', // Rough approximation
            maskImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'black\'/%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'black\'/%3E%3C/svg%3E")'
          }}
        />

      </div>
    </footer>
  );
}
