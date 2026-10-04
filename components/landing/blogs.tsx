"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number | string;
  slug: string;
  tag: string;
  title: string;
  date: string;
  image: string;
  href?: string;
  external?: boolean;
}

interface BlogsProps {
  posts: BlogPost[];
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Blogs({ posts }: BlogsProps) {
  const prefersReducedMotion = useReducedMotion();
  // Show up to three across a full-width row.
  const displayPosts = posts.slice(0, 3);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } },
  };
  const card: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
  };

  return (
    <section className="w-full py-16 lg:py-24 xl:py-28 px-6 sm:px-8 lg:px-12 bg-background select-text">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] font-medium text-foreground tracking-tight">
            From the blog
          </h2>
          <Link href="/now" className="shrink-0">
            <Button
              variant="secondary"
              className="rounded-sm bg-secondary hover:bg-accent text-secondary-foreground font-semibold tracking-[0.01em] px-4 h-9 border-none shadow-none text-[13px] cursor-pointer active:scale-[0.97] transition-transform duration-150"
            >
              View all
            </Button>
          </Link>
        </div>

        {/* Full-width 3-up grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {displayPosts.map((post) => {
            const href = post.href || `/now/${post.slug}`;
            const body = (
              <>
                <div className="overflow-hidden rounded-sm bg-muted aspect-[1.6/1] relative border border-border">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[11px] font-sans tracking-widest text-muted-foreground uppercase">
                    {post.tag}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground tracking-tight leading-snug group-hover:text-muted-foreground/80 transition-colors duration-150 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[11px] font-sans tracking-wider text-muted-foreground mt-1">
                    {post.date}
                  </p>
                </div>
              </>
            );
            const linkClassName =
              "group cursor-pointer flex flex-col gap-4 select-none";

            return (
              <motion.div key={post.id} variants={card} className="min-w-0">
                {post.external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {body}
                  </a>
                ) : (
                  <Link href={href} className={linkClassName}>
                    {body}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
