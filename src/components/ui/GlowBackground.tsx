import { motion, type MotionValue } from "framer-motion";

interface GlowBackgroundProps {
  auroraX?: MotionValue<number>;
  auroraY?: MotionValue<number>;
  variant?: "hero" | "panel";
}

export const GlowBackground = ({
  auroraX,
  auroraY,
  variant = "hero",
}: GlowBackgroundProps) => {
  const sizes =
    variant === "hero"
      ? ["h-[640px] w-[640px]", "h-[520px] w-[520px]", "h-[420px] w-[420px]"]
      : ["h-[460px] w-[460px]", "h-[420px] w-[420px]", "h-[300px] w-[300px]"];

  return (
    <motion.div
      style={auroraX && auroraY ? { x: auroraX, y: auroraY } : undefined}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Top glow */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-40 right-[-10%] rounded-full bg-primary/15 blur-[140px] ${sizes[0]}`}
      />

      {/* Bottom glow */}
      <motion.div
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className={`absolute bottom-[-15%] left-[-10%] rounded-full bg-primary-glow/10 blur-[140px] ${sizes[1]}`}
      />

      {/* Center glow */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className={`absolute left-1/3 top-1/4 rounded-full bg-accent/10 blur-[160px] ${sizes[2]}`}
      />
    </motion.div>
  );
};    