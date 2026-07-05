"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

import { useRef } from "react";

import { HeroContent } from "@/components/hero/HeroContent";
import { HeroVisual } from "@/components/hero/HeroVisual";

import { GlowBackground } from "@/components/ui/GlowBackground";
import { ParticleField } from "@/components/ui/ParticleField";

import { useParallaxPointer } from "@/components/animations/parallax";
import { useMouseTracking } from "@/hooks/useMousePosition";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const { mx, my, sx, sy } = useParallaxPointer(1);

  const smoothSX = useSpring(sx, {
    stiffness: prefersReducedMotion ? 0 : 120,
    damping: prefersReducedMotion ? 0 : 25,
    mass: 0.5,
  });

  const smoothSY = useSpring(sy, {
    stiffness: prefersReducedMotion ? 0 : 120,
    damping: prefersReducedMotion ? 0 : 25,
    mass: 0.5,
  });

  // ✅ motion values
  const visualX = useTransform(smoothSX, (v) =>
    prefersReducedMotion ? 0 : v * 28
  );

  const visualY = useTransform(smoothSY, (v) =>
    prefersReducedMotion ? 0 : v * 28
  );

  const visualRotX = useTransform(smoothSY, (v) =>
    prefersReducedMotion ? 0 : v * -6
  );

  const visualRotY = useTransform(smoothSX, (v) =>
    prefersReducedMotion ? 0 : v * 8
  );

  const textX = useTransform(smoothSX, (v) =>
    prefersReducedMotion ? 0 : v * -10
  );

  const textY = useTransform(smoothSY, (v) =>
    prefersReducedMotion ? 0 : v * -10
  );

  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const heroY = useTransform(scrollY, [0, 700], [
    0,
    prefersReducedMotion ? 0 : -90,
  ]);

  const { onMouseMove, onMouseLeave } = useMouseTracking(
    ref,
    mx,
    my
  );

  return (
    <section
      ref={ref}
      onMouseMove={prefersReducedMotion ? undefined : onMouseMove}
      onMouseLeave={prefersReducedMotion ? undefined : onMouseLeave}
      className="relative isolate min-h-screen overflow-hidden bg-background pt-32 pb-24 lg:pt-40 lg:pb-32"
      style={{ perspective: 2000 }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--background))_0%,#e2e8f0_55%,#d6deea_100%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 container grid grid-cols-1 lg:grid-cols-12 items-center gap-20">
        
        {/* TEXT */}
        <motion.div
          className="lg:col-span-6"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <HeroContent textX={textX} textY={textY} />
        </motion.div>

        {/* VISUAL (FIXED) */}
        <motion.div className="relative lg:col-span-6 z-30">
          <HeroVisual
            visualX={visualX}
            visualY={visualY}
            visualRotX={visualRotX}
            visualRotY={visualRotY}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;