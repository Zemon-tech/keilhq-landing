import type { Metadata } from "next";
import Image from "next/image";
import { getBrandPage } from "@/cms/helpers/brand";
import { BrandColorPalette } from "@/components/brand/brand-color-palette";
import { BrandTypographySpecimen } from "@/components/brand/brand-typography-specimen";
import { BrandAssetDownload } from "@/components/brand/brand-asset-download";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Explore KeilHQ's brand identity, physical vision, material color system, typography architecture, and official brand logo assets.",
};

export default async function BrandPage() {
  const brandData = await getBrandPage();

  const heroTitle = brandData?.heroTitle || "A New Identity for KeilHQ";
  const heroImage = brandData?.heroImage || "/brand/keilhq-rise.png";
  const heroIntro = brandData?.heroIntro || [
    "KeilHQ is dedicated to developing world-class software where ideas become clear — with the depth, rigor, and ambition required to lead at the frontier. What excites us is the opportunity to build tools that reflect how teams actually think, plan, reason, and solve problems.",
    "As our work has evolved, our brand identity has evolved with it. The update reflects both our mission and the quiet, focused KeilHQ we are building today. Walking into KeilHQ should feel like walking into an old library, a quiet monastery, an observatory, an architect's office, or a courtyard after rain — lowering your heart rate so the work inside can breathe.",
    "Most software stimulates: notifications, glow, badges, counters, alerts, gradients, and noise. Everything screams for attention. KeilHQ whispers. The interface should almost disappear — because the hero is never the software. The hero is the work the person is doing inside it."
  ];

  const physicalVisionTitle = brandData?.physicalVisionTitle || "Our Vision in Physical Spaces";
  const physicalVisionImage = brandData?.physicalVisionImage || "/brand/keilhq-billboard.png";
  const physicalVisionIntro = brandData?.physicalVisionIntro || [
    "Physical permanence inspires our digital structure. In outdoor architecture and print campaigns, KeilHQ expresses itself through restraint and quiet confidence rather than high-decibel marketing pitch decks.",
    "When we say \"Built for Teams That Ship,\" we mean creating a workspace that respects human attention. A building constructed with quarried stone and solid timber doesn't scream for your gaze; it supports your presence. Our brand identity in physical spaces reflects that exact same durability and quiet honor."
  ];

  const designPrinciplesTitle = brandData?.designPrinciplesTitle || "The Emotional DNA & Design Principles";
  const designPrinciplesImage = brandData?.designPrinciplesImage || "/brand/keilhq-ad-1.png";
  const designPrinciplesIntro = brandData?.designPrinciplesIntro || [
    "On open, the user should feel Arrival — not excitement. The feeling of opening a fresh notebook, walking into a quiet library, putting on noise-cancelling headphones, or sitting beside a still lake. This is the emotional bar for every onboarding moment, empty state, and first-load surface.",
    "Knowledge, done well, isn't fast — it's careful. KeilHQ treats the pursuit of understanding as something deliberate: quiet reading, patient thinking, work that is allowed to breathe. That patience is the emotional DNA behind every design decision — calm over stimulation, substance over spectacle.",
    "Our design principles dictate that nothing starts or stops instantly. Reference natural motion: leaves, water, clouds, breathing. One orchestrated moment per flow beats many scattered micro-animations. Motion should clarify spatial relationships, never perform."
  ];

  const enterpriseIdentityTitle = brandData?.enterpriseIdentityTitle || "Enterprise Structural Harmony";
  const enterpriseIdentityImage = brandData?.enterpriseIdentityImage || "/brand/keilhq-enterprise.png";
  const enterpriseIdentityIntro = brandData?.enterpriseIdentityIntro || [
    "As organizations grow, clutter multiplies. KeilHQ extends its material palette into enterprise surfaces by introducing Jaipur Sandstone (#A98563) and Limestone (#DDD7CE) alongside Warm Ink (#171514) to establish quiet structural harmony across large-scale teams.",
    "Enterprise software often confuses complexity with authority. In KeilHQ, authority is earned through clarity, archival permanence, and uncompromised speed. Whether reviewing security posture, audit logs, or multi-team project streams, the interface maintains an unwavering editorial calm."
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-28 pb-40 selection:bg-[#2B6F6A]/20">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-36 sm:space-y-48">
        
        {/* 1. Hero Image */}
        <section className="w-full">
          <div className="w-full relative overflow-hidden">
            <Image
              src={heroImage}
              alt="KeilHQ Brand Identity Hero"
              width={1600}
              height={1000}
              className="w-full h-auto object-cover object-top rounded-lg"
              priority
            />
          </div>
        </section>

        {/* 2. What is KeilHQ Section */}
        <section className="space-y-8 max-w-[760px] mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-tight text-center text-foreground font-display">
            {heroTitle}
          </h1>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed text-left">
            {heroIntro.map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* 3. Physical Vision Section */}
        <section className="space-y-12">
          <div className="max-w-[760px] mx-auto text-left sm:text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-tight text-foreground font-display">
              {physicalVisionTitle}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed text-left">
              {physicalVisionIntro.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <Image
              src={physicalVisionImage}
              alt="KeilHQ Billboard Vision"
              width={1600}
              height={900}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </section>

        {/* 4. Design Principles & Atmospheric Feeling */}
        <section className="space-y-12">
          <div className="max-w-[760px] mx-auto text-left sm:text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-tight text-foreground font-display">
              {designPrinciplesTitle}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed text-left">
              {designPrinciplesIntro.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <Image
              src={designPrinciplesImage}
              alt="KeilHQ Atmospheric Design Principles"
              width={1600}
              height={900}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </section>

        {/* 5. Material System & Color Palette */}
        <section>
          <BrandColorPalette />
        </section>

        {/* 6. Enterprise Identity */}
        <section className="space-y-12">
          <div className="max-w-[760px] mx-auto text-left sm:text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-tight text-foreground font-display">
              {enterpriseIdentityTitle}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed text-left">
              {enterpriseIdentityIntro.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <Image
              src={enterpriseIdentityImage}
              alt="KeilHQ Enterprise Material Harmony"
              width={1600}
              height={900}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </section>

        {/* 7. Typography Section */}
        <section>
          <BrandTypographySpecimen />
        </section>

        {/* 8. Logo Assets Download Hub */}
        <section>
          <BrandAssetDownload />
        </section>

      </div>
    </main>
  );
}
