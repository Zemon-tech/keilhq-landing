"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blogPosts = [
  {
    id: 1,
    slug: "the-plan-behind-the-315",
    tag: "User Stories",
    title: "The Plan Behind the 3:15",
    date: "May 7, 2026",
    image: "/mockups/blog1.png",
  },
  {
    id: 2,
    slug: "what-meeting-notes-could-be",
    tag: "Productivity",
    title: "What Meeting Notes Could Be",
    date: "May 1, 2026",
    image: "/mockups/blog2.png",
  },
  {
    id: 3,
    slug: "clarity-before-action",
    tag: "Product",
    title: "Why clarity before action is the most important feature we ever built",
    date: "May 20, 2026",
    image: "/mockups/blog3.png",
  },
];

export function Blogs() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-background select-text">
      <div className="max-w-7xl mx-auto w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          {/* Header with Title and Controls */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-10 sm:mb-12">
            <div className="w-full lg:w-1/4 shrink-0">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Blog
              </h2>
            </div>
            
            <div className="w-full lg:w-3/4 flex justify-end items-center gap-2 mt-6 lg:mt-0">
              <Link href="/blog">
                <Button 
                  variant="secondary" 
                  className="rounded-sm bg-secondary hover:bg-accent text-secondary-foreground font-semibold tracking-[0.01em] px-4 h-9 border-none shadow-none text-[13px] cursor-pointer active:scale-[0.97] transition-transform duration-150"
                >
                  View all
                </Button>
              </Link>
              <CarouselPrevious className="static translate-y-0 h-9 w-9 bg-secondary hover:bg-accent rounded-sm border-none text-secondary-foreground shadow-none [&>svg]:size-4 cursor-pointer active:scale-[0.97] transition-transform duration-150" />
              <CarouselNext className="static translate-y-0 h-9 w-9 bg-secondary hover:bg-accent rounded-sm border-none text-secondary-foreground shadow-none [&>svg]:size-4 cursor-pointer active:scale-[0.97] transition-transform duration-150" />
            </div>
          </div>

          {/* Carousel Layout - 1/4 empty left, 3/4 carousel right */}
          <div className="flex w-full">
            <div className="hidden lg:block w-1/4 shrink-0" />
            <div className="w-full lg:w-3/4">
              <CarouselContent className="-ml-4 sm:-ml-6">
                {blogPosts.map((post) => (
                  <CarouselItem key={post.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/2">
                    <Link href={`/blog/${post.slug}`} className="group cursor-pointer flex flex-col gap-4 select-none">
                      <div className="overflow-hidden rounded-sm bg-muted aspect-[1.6/1] relative border border-border/50">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 pr-4 text-left">
                        <span className="text-[11px] font-semibold text-muted-foreground tracking-wider uppercase">
                          {post.tag}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white leading-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-150 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[11px] font-semibold tracking-wide text-zinc-400 dark:text-zinc-500 mt-1">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
