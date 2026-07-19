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
    className="relative lg:col-span-6 aspect-square w-full max-w-xl mx-auto"
    style={{ perspective: 1600 }}
  >
    <Suspense
      fallback={
        <div
          className="absolute inset-0"
          aria-hidden="true"
        />
      }
    >
      <FloatingDNA {...props} />
    </Suspense>
  </div>
);