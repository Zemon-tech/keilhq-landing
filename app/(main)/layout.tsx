import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrolling from "@/components/smooth-scrolling";
import { JsonLd } from "@/components/json-ld";
import { getSiteSettings } from "@/cms/helpers/site-settings";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  const description =
    siteSettings?.defaultSeoDescription ||
    "Human clarity for teams. KeilHQ is the desktop-first work management workspace combining database-enforced task clarity, real-time team chat, block docs, 2-way calendar sync, meeting transcription, and multi-agent AI.";

  return {
    metadataBase: new URL("https://keilhq.com"),
    title: {
      default: "KeilHQ",
      template: "%s | KeilHQ",
    },
    description,
    keywords: [
      "KeilHQ",
      "Keil",
      "Keil HQ",
      "Keil App",
      "Keil Workspace",
      "Keil Land",
      "Keil Platform",
      "Keil GTM",
      "Clarity Engine",
      "work management platform",
      "task management software",
      "team collaboration",
      "meeting transcription AI",
      "multi agent workspace",
      "block document editor",
      "TipTap editor",
    ],
    authors: [{ name: "KeilHQ Team", url: "https://keilhq.com" }],
    creator: "KeilHQ",
    publisher: "KeilHQ",
    icons: {
      icon: [
        {
          url: "/keilhq.svg",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/keilhq-white.svg",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://keilhq.com",
      siteName: "KeilHQ",
      title: "KeilHQ — Human Clarity for Teams",
      description,
      images: [
        {
          url: "/keilhq.svg",
          width: 1200,
          height: 630,
          alt: "KeilHQ — Human Clarity for Teams",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "KeilHQ — Human Clarity for Teams",
      description,
      images: ["/keilhq.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
        dmSans.variable,
        inter.variable,
        jetbrainsMono.variable,
        "font-sans",
        "bg-background text-foreground transition-colors duration-300"
      )}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
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
