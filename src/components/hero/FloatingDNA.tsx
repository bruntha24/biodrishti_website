
import { motion, type MotionValue } from "framer-motion";
import {
  FlaskConical,
  FileCheck,
  BrainCircuit,
  ShieldCheck,
  Microscope,
  Sparkles,
} from "lucide-react";

import { floatingAnimation } from "@/components/animations/floating";
import heroHelix from "@/assets/images/hero-helix.webp";

interface FloatingDNAProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

/* ================= DATA ================= */

const domains = [
  "Genomics",
  "Molecular Biology",
  "Cell Biology",
  "Biochemistry",
  "Genetics",
  "Proteomics",
  "Transcriptomics",
  "Bioinformatics",
  "Computational Biology",
  "Immunology",
  "Cancer Biology",
  "Neuroscience",
];

const leftDomains = domains.slice(0, 6);
const rightDomains = domains.slice(6, 12);

const highlights = [
  { label: "Idea Validation", icon: FlaskConical, pos: "left-[3%] top-[14%]" },
  { label: "Publication Ready", icon: FileCheck, pos: "right-[3%] top-[14%]" },
  { label: "Structured Mentorship", icon: BrainCircuit, pos: "left-[1%] bottom-[26%]" },
  { label: "Research Culture", icon: Sparkles, pos: "right-[1%] bottom-[26%]" },
  { label: "Scientific Rigor", icon: ShieldCheck, pos: "left-[14%] -top-[2%]" },
  { label: "Methodology Review", icon: Microscope, pos: "right-[14%] -bottom-[2%]" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ================= SCROLL COLUMN ================= */

const ScrollColumn = ({ items, direction = "up" }: any) => {
  const looped = [...items, ...items];

  return (
    <div className="overflow-hidden h-[260px] sm:h-[320px]">
      <motion.div
        className="flex flex-col gap-3"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {looped.map((item: string, i: number) => (
          <div
            key={i}
            className="rounded-full border border-border bg-card/85 backdrop-blur-md px-3 py-1 text-[10px] sm:text-[11px] shadow-sm text-foreground/90 font-medium transition duration-350 hover:bg-card hover:text-foreground"
          >
            <span className="font-mono text-accent font-bold mr-2">
              {((i % items.length) + 1).toString().padStart(2, "0")}
            </span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ================= COMPONENT ================= */

export const FloatingDNA = ({
  visualX,
  visualY,
  visualRotX,
  visualRotY,
}: FloatingDNAProps) => {
  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 768 : false;

  return (
    <motion.div
      style={{
        x: visualX,
        y: visualY,
        rotateX: isDesktop ? visualRotX : 0,
        rotateY: isDesktop ? visualRotY : 0,
        transformStyle: "preserve-3d",
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-[95vw]
        flex
        flex-col
        items-center
        gap-6
        sm:block
        sm:aspect-square
        sm:max-w-[460px]
        lg:max-w-[640px]
      "
    >
      {/* ================= GRAPHIC WRAPPER ================= */}
      <div className="relative w-full aspect-square max-w-[280px] xs:max-w-[320px] sm:max-w-none sm:absolute sm:inset-0">
        
        {/* ================= BACKGLOW ================= */}
        <div className="absolute inset-8 rounded-full bg-primary-glow/10 blur-[20px] sm:blur-[90px]" />
        <div className="absolute inset-16 rounded-full bg-accent/10 blur-[15px] sm:blur-[70px]" />

        {/* ================= PRIMARY PARTICLES ================= */}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={`p-primary-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0], y: [0, -25, 0] }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
            className="absolute h-1 w-1 rounded-full bg-primary-glow/70"
            style={{
              left: `${(i * 43) % 100}%`,
              top: `${(i * 61) % 100}%`,
            }}
          />
        ))}

        {/* ================= PREMIUM AMBER/YELLOW BIO-DOTS ================= */}
        {Array.from({ length: 10 }).map((_, i) => {
          // Micro-variations for high-end organic feel
          const size = i % 3 === 0 ? "h-1 w-1" : i % 3 === 1 ? "h-1.5 w-1.5" : "h-[2px] w-[2px]";
          const blurIntensity = i % 2 === 0 ? "blur-[0.5px]" : "blur-none";
          
          return (
            <motion.span
              key={`p-yellow-${i}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ 
                opacity: [0, 0.85, 0], 
                y: [0, -40, -10],
                scale: [0.6, 1.1, 0.4]
              }}
              transition={{
                duration: 5.5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.35,
              }}
              className={`
                absolute 
                rounded-full 
                bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200
                shadow-[0_0_10px_rgba(245,158,11,0.5),0_0_4px_rgba(251,191,36,0.8)] 
                z-30
                ${size}
                ${blurIntensity}
              `}
              style={{
                left: `${18 + ((i * 29) % 64)}%`, 
                top: `${12 + ((i * 41) % 76)}%`,
              }}
            />
          );
        })}

        {/* ================= LEFT SCROLL ================= */}
        <div className="hidden md:block absolute left-[5%] top-1/2 -translate-y-1/2">
          <ScrollColumn items={leftDomains} direction="up" />
        </div>

        {/* ================= RIGHT SCROLL ================= */}
        <div className="hidden md:block absolute right-[5%] top-1/2 -translate-y-1/2">
          <ScrollColumn items={rightDomains} direction="down" />
        </div>

        {/* ================= CORE DNA ================= */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <img
            src={heroHelix}
            alt="DNA Helix"
            className="h-full w-full sm:h-[92%] sm:w-[92%] lg:h-[85%] lg:w-[85%] object-contain drop-shadow-[0_15px_35px_rgba(14,158,136,0.25)]"
          />
        </motion.div>

        {/* ================= DESKTOP CENTER TEXT CARD ================= */}
        <div className="hidden sm:block pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <div
            className="
              flex
              flex-col
              items-center
              gap-1.5
              rounded-2xl
              border
              border-border/80
              bg-card/95
              px-5
              py-3.5
              text-center
              backdrop-blur-md
              shadow-xl
              sm:max-w-none
            "
          >
            <div className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent">
              ◆ BioDrishti ◆
            </div>
            <div className="text-sm font-bold text-foreground tracking-wide">
              Better Science Through Mentorship
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70">
              Research Ecosystem for India
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE INFO PANEL ================= */}
      <div className="w-full max-w-[340px] z-30 sm:hidden">
        <div className="rounded-2xl border border-white/20 bg-card/95 backdrop-blur-xl shadow-xl p-4.5">
          
          {/* Brand */}
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-[0.35em] text-accent font-bold">
              ◆ BioDrishti ◆
            </div>

            <h3 className="mt-2 text-sm font-bold text-foreground tracking-wide">
              Better Science Through Mentorship
            </h3>

            <p className="mt-1 text-[11px] font-medium text-foreground/80 leading-relaxed">
              Research Ecosystem for India
            </p>
          </div>

          {/* Divider */}
          <div className="my-3.5 h-px bg-border/80" />

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-border/60
                    bg-background/60
                    px-2.5
                    py-2
                    backdrop-blur-md
                  "
                >
                  <Icon className="h-3.5 w-3.5 text-primary shrink-0" />

                  <span className="text-[10px] font-semibold leading-tight text-foreground">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP HIGHLIGHTS ================= */}
      {highlights.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.07, ease: EASE }}
            className={`hidden sm:block absolute ${item.pos} z-20`}
          >
            <div className="flex items-center gap-2 rounded-full border border-border/80 bg-card/95 px-3 py-1.5 backdrop-blur-md shadow-md hover:border-primary/50 transition">
              <Icon className="h-3 w-3 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground">
                {item.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FloatingDNA;

