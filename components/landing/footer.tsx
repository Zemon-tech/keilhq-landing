import Link from "next/link";
import Image from "next/image";

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
    { label: "Twitter / X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full min-h-screen bg-white border-t border-zinc-100 flex flex-col">

      {/* Main content — grows to fill the screen */}
      <div className="flex-1 max-w-8xl w-full mx-auto px-6 lg:px-12 pt-20 pb-12 flex flex-col">

        {/* Top row: brand + nav columns */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-0">

          {/* Brand column */}
          <div className="md:w-64 shrink-0 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/keilhq.svg" alt="KielHQ" width={22} height={22} />
              <span className="text-sm font-semibold tracking-tight text-zinc-950">KielHQ</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px]">
              The operating system for teams that ship. One workspace. Every function.
            </p>
            {/* CTA */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors w-fit"
            >
              Start Free
            </Link>
            {/* Trust badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="px-2.5 py-1 bg-zinc-100 rounded-md">
                <span className="text-[10px] font-bold text-zinc-600">SOC 2</span>
              </div>
              <div className="px-2.5 py-1 bg-zinc-100 rounded-md">
                <span className="text-[10px] font-bold text-zinc-600">GDPR</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-md">
                <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
                <span className="text-[10px] font-bold text-emerald-700">99.9% uptime</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10 md:pl-16">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-4">
                <span className="text-xs font-semibold text-zinc-950 uppercase tracking-widest">
                  {section}
                </span>
                <nav className="flex flex-col gap-3">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Big tagline — anchored to the bottom of the flex column */}
        <div className="mt-auto pt-24">
          <p className="text-5xl sm:text-7xl lg:text-8xl font-semibold text-zinc-100 leading-none tracking-tight select-none">
            One workspace.<br />Every function.<br />
            <span className="text-zinc-950">One clear line<br />from idea to done.</span>
          </p>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="border-t border-zinc-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-400">
            © KielHQ {new Date().getFullYear()} · Trusted by 7,000+ teams worldwide
          </span>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {["Support", "Privacy", "Cookies", "Terms"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <span className="text-xs text-zinc-400">
            Stop managing tools. Start doing clear work.
          </span>
        </div>
      </div>

    </footer>
  );
}
