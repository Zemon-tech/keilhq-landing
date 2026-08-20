import Link from "next/link";

interface FinalCtaProps {
  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaButtonLabel?: string;
  finalCtaButtonLink?: string;
  finalCtaSecondaryButtonLabel?: string;
  finalCtaSecondaryButtonLink?: string;
  finalCtaTrustText?: string;
}

export function FinalCta({
  finalCtaTitle = "AI Native Operating System for Work",
  finalCtaDescription,
  finalCtaButtonLabel = "Get started",
  finalCtaButtonLink = "https://app.Keilhq.in/login",
  finalCtaSecondaryButtonLabel = "Talk to sales",
  finalCtaSecondaryButtonLink = "/enterprise",
  finalCtaTrustText,
}: FinalCtaProps) {
  const isExternalPrimary =
    finalCtaButtonLink?.startsWith("http://") ||
    finalCtaButtonLink?.startsWith("https://") ||
    finalCtaButtonLink?.startsWith("//");

  const isExternalSecondary =
    finalCtaSecondaryButtonLink?.startsWith("http://") ||
    finalCtaSecondaryButtonLink?.startsWith("https://") ||
    finalCtaSecondaryButtonLink?.startsWith("//");

  return (
    <section className="w-full py-28 lg:py-36 border-border/40 px-6 sm:px-8 lg:px-12 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium tracking-tight leading-[1.08] text-foreground text-balance">
          {finalCtaTitle}
        </h2>

        {finalCtaDescription && (
          <p className="text-[16px] sm:text-[17px] text-muted-foreground max-w-[54ch] leading-relaxed font-sans -mt-2">
            {finalCtaDescription}
          </p>
        )}

        <div className="flex items-center justify-center gap-3 mt-2 font-display">
          {finalCtaButtonLabel && finalCtaButtonLink && (
            <Link
              href={finalCtaButtonLink}
              target={isExternalPrimary ? "_blank" : undefined}
              rel={isExternalPrimary ? "noopener noreferrer" : undefined}
              className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold transition-transform duration-150 active:scale-[0.97] shadow-xs"
            >
              {finalCtaButtonLabel}
            </Link>
          )}
          {finalCtaSecondaryButtonLabel && finalCtaSecondaryButtonLink && (
            <Link
              href={finalCtaSecondaryButtonLink}
              target={isExternalSecondary ? "_blank" : undefined}
              rel={isExternalSecondary ? "noopener noreferrer" : undefined}
              className="px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground border border-border/60 text-xs font-semibold transition-transform duration-150 active:scale-[0.97]"
            >
              {finalCtaSecondaryButtonLabel}
            </Link>
          )}
        </div>

        {finalCtaTrustText && (
          <p className="text-[11px] font-sans tracking-wider text-muted-foreground mt-2">
            {finalCtaTrustText}
          </p>
        )}
      </div>
    </section>
  );
}
