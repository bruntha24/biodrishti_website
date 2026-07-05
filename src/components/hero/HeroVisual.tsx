import type { MotionValue } from "framer-motion";
import { Suspense, lazy } from "react";

interface HeroVisualProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

// ✅ Vite lazy loading
const FloatingDNA = lazy(() => import("@/components/hero/FloatingDNA"));

export const HeroVisual = (props: HeroVisualProps) => (
  <div className="relative lg:col-span-6" style={{ perspective: 1600 }}>
    <Suspense fallback={<div className="h-[400px]" />}>
      <FloatingDNA {...props} />
    </Suspense>
  </div>
);