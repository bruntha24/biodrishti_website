import type { MotionValue } from "framer-motion";
import { Suspense, lazy } from "react";

interface HeroVisualProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

// Vite lazy loading
const FloatingDNA = lazy(() => import("@/components/hero/FloatingDNA"));

export const HeroVisual = (props: HeroVisualProps) => (
  <div
    className="
      relative 
      w-full
      aspect-square
      lg:col-span-6
      max-w-xl
      mx-auto
      overflow-visible
    "
    style={{ perspective: 1600 }}
  >
    <Suspense
      fallback={
        <div
          className="absolute inset-0 aspect-square"
          aria-hidden="true"
        />
      }
    >
      <FloatingDNA {...props} />
    </Suspense>
  </div>
);