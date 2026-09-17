import Image from "next/image";

/**
 * Shared resting cover shell for Now cards: Linen surface, hairline
 * Limestone border, carved radius. Hover lifts brightness and border —
 * never scale (Linear motion). Rests under reduced motion.
 */
export function NowCover({
  src,
  alt,
  sizes,
  objectPosition = "object-top",
  children,
}: {
  src: string;
  alt: string;
  sizes: string;
  objectPosition?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-card transition-[border-color] duration-200 ease-out group-hover:border-foreground/25">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        sizes={sizes}
        className={`h-full w-full object-cover ${objectPosition} transition-[filter] duration-200 ease-out group-hover:brightness-[1.07] motion-reduce:transition-none`}
      />
      {children}
    </div>
  );
}
