"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.08, // Premium smooth scroll damping
        syncTouch: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
