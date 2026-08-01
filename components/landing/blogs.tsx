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

interface BlogPost {
  id: number | string;
  slug: string;
  tag: string;
  title: string;
  date: string;
  image: string;
}

interface BlogsProps {
  posts: BlogPost[];
}

export function Blogs({ posts }: BlogsProps) {
  const displayPosts = posts;

  return (
    <section className="w-full py-16 lg:py-24 xl:py-28 px-6 sm:px-8 lg:px-12 bg-background select-text">
      <div className="max-w-[1400px] mx-auto w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          {/* Header with Title and Controls */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-10 sm:mb-12">
            <div className="w-full lg:w-1/4 shrink-0">
              <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] font-medium text-foreground tracking-tight">
                From the blog
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
                {displayPosts.map((post) => (
                  <CarouselItem key={post.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/2">
                    <Link href={`/blog/${post.slug}`} className="group cursor-pointer flex flex-col gap-4 select-none">
                      <div className="overflow-hidden rounded-sm bg-muted aspect-[1.6/1] relative border border-border">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 pr-4 text-left">
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
