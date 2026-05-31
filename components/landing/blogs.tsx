"use client";

import React from "react";
import Image from "next/image";
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
    title: "Numerous.ai vs Coefficient vs o11: Sheets AI Showdown",
    date: "Feb 26, 2026",
    image: "/mockups/blog1.png",
  },
  {
    id: 2,
    title: "Top 10 AI Tools for Google Docs in 2026",
    date: "Feb 26, 2026",
    image: "/mockups/blog2.png",
  },
  {
    id: 3,
    title: "Top 10 AI Tools for Google Sheets in 2026",
    date: "Feb 26, 2026",
    image: "/mockups/blog3.png",
  },
];

export function Blogs() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-zinc-100">
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          {/* Header with Title and Controls */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-10 sm:mb-12">
            <div className="w-full lg:w-1/4 shrink-0">
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-600">
                Blog
              </h2>
            </div>
            
            <div className="w-full lg:w-3/4 flex justify-end items-center gap-2 mt-6 lg:mt-0">
              <Button 
                variant="secondary" 
                className="rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium px-4 h-9 border-none shadow-none text-sm"
              >
                View all
              </Button>
              <CarouselPrevious className="static translate-y-0 h-9 w-9 bg-zinc-100 hover:bg-zinc-200 rounded-md border-none text-zinc-900 shadow-none [&>svg]:size-4" />
              <CarouselNext className="static translate-y-0 h-9 w-9 bg-zinc-100 hover:bg-zinc-200 rounded-md border-none text-zinc-900 shadow-none [&>svg]:size-4" />
            </div>
          </div>

          {/* Carousel Layout - 1/4 empty left, 3/4 carousel right */}
          <div className="flex w-full">
            <div className="hidden lg:block w-1/4 shrink-0" />
            <div className="w-full lg:w-3/4">
              <CarouselContent className="-ml-4 sm:-ml-6">
                {blogPosts.map((post) => (
                  <CarouselItem key={post.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="group cursor-pointer flex flex-col gap-4">
                      <div className="overflow-hidden rounded-xl bg-zinc-100 aspect-[2/1] relative border border-zinc-200/50">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 pr-4">
                        <h3 className="text-[1.1rem] font-medium text-zinc-700 leading-snug group-hover:text-zinc-900 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-zinc-500 font-medium mt-1">
                          {post.date}
                        </p>
                      </div>
                    </div>
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
