import type { MotionValue } from "framer-motion";
import { FloatingDNA } from "@/components/hero/FloatingDNA";

interface HeroVisualProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

export const HeroVisual = ({
  visualX,
  visualY,
  visualRotX,
  visualRotY,
}: HeroVisualProps) => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <FloatingDNA
        visualX={visualX}
        visualY={visualY}
        visualRotX={visualRotX}
        visualRotY={visualRotY}
      />
    </div>
  );
};