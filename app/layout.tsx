import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KielHQ — The Operating System for Teams That Ship",
  description: "Replace Slack, Asana, Notion, and your calendar chaos. KielHQ is the one workspace where your team actually gets work done.",
  icons: {
    icon: "/keilhq-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, "bg-white text-zinc-950")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
