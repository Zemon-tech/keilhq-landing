import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrolling from "@/components/smooth-scrolling";

// Marketing font — DM Sans for landing headings, marketing, navigation, buttons, badges
const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

// App font — Inter for UI, body copy, descriptions, paragraphs, etc.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Utility mono — JetBrains Mono for code, data, timestamps
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { getSiteSettings } from "@/cms/helpers/site-settings";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  return {
    title: siteSettings?.defaultSeoTitle || "KeilHQ — The Operating System for Teams That Ship",
    description: siteSettings?.defaultSeoDescription || "Replace Slack, Asana, Notion, and your calendar chaos. KeilHQ is the one workspace where your team actually gets work done.",
    icons: {
      icon: siteSettings?.logo || "/keilhq-white.svg",
    },
  };
}

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        dmSans.variable,
        inter.variable,
        jetbrainsMono.variable,
        "font-sans",
        "bg-background text-foreground transition-colors duration-300"
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
              <Navbar />
              {children}
              <Footer />
            </div>
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}

