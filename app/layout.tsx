import type { Metadata } from "next";
import { Montserrat, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrolling from "@/components/smooth-scrolling";

// Display font — Montserrat for headings, navigation, buttons, badges, statistics, and UI emphasis
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
});

// Primary sans — Inter for all body copy, descriptions, paragraphs, etc.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { getSiteSettings } from "@/lib/keystatic/site-settings";

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
        montserrat.variable,
        inter.variable,
        geistMono.variable,
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
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
