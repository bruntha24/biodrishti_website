"use client";

import { motion, type MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FlaskConical,
  FileCheck,
  BrainCircuit,
  ShieldCheck,
  Microscope,
  Sparkles,
} from "lucide-react";

interface FloatingDNAProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

export const FloatingDNA = ({
  visualX,
  visualY,
  visualRotX,
  visualRotY,
}: FloatingDNAProps) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div
      style={{
        x: visualX,
        y: visualY,
        rotateX: isDesktop ? visualRotX : 0,
        rotateY: isDesktop ? visualRotY : 0,
        transformStyle: "preserve-3d",
      }}
      className="relative mx-auto aspect-square w-full max-w-[640px]"
    >
      {/* CORE VISUAL */}
      <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
        Floating DNA
      </div>
    </motion.div>
  );
};