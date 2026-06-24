import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      <Navbar />
      <main className="flex-1 flex flex-col pt-32 pb-24 px-5 sm:px-8 lg:px-12 items-center">
        <div className="w-full max-w-3xl">
          <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
                Support
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.08] text-foreground tracking-tight">
              How can we help?
            </h1>
            <p className="text-[15px] font-medium text-muted-foreground leading-relaxed max-w-[600px]">
              We're here to make sure KielHQ works perfectly for your team.
            </p>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              { 
                title: "Email support", 
                desc: "Get a response within one business day.", 
                action: "support@kielhq.com", 
                href: "mailto:support@kielhq.com" 
              },
              { 
                title: "Book a demo", 
                desc: "See KielHQ live with a member of our team.", 
                action: "Book a walkthrough", 
                href: "/demo",
                action2: "Contact: 1234567899",
                href2: "tel:1234567899"
              },
            ].map((item) => (
              <div key={item.title} className="p-6 sm:p-8 rounded-lg border border-border/50 bg-secondary/20 flex flex-col gap-3 shadow-sm transition-colors duration-300">
                <span className="text-[15px] font-semibold text-foreground">{item.title}</span>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="flex flex-col items-start gap-2 mt-2">
                  <Link href={item.href} className="text-[14px] font-semibold text-foreground hover:text-muted-foreground transition-colors">
                    {item.action}
                  </Link>
                  {item.action2 && (
                    <a href={item.href2!} className="text-[14px] font-semibold text-foreground hover:text-muted-foreground transition-colors">
                      {item.action2}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
