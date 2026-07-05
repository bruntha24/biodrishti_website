import { motion, type MotionValue, useAnimationControls } from "framer-motion";
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

/* ================= SCROLL COLUMN (desktop only) ================= */
const ScrollColumn = ({
  items,
  direction = "up",
}: {
  items: string[];
  direction?: "up" | "down";
}) => {
  const looped = [...items, ...items];
  return (
    <div className="overflow-hidden h-[260px] sm:h-[320px]">
      <motion.div
        className="flex flex-col gap-3"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {looped.map((item, i) => (
          <div
            key={i}
            className="rounded-full border border-border bg-card/85 backdrop-blur-md px-3 py-1 text-[10px] sm:text-[11px] shadow-sm text-foreground/90 font-medium transition duration-300 hover:bg-card hover:text-foreground"
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
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 768 : false;

  return (
    <motion.div
      style={{
        x: visualX,
        y: visualY,
        rotateX: isDesktop ? visualRotX : 0,
        rotateY: isDesktop ? visualRotY : 0,
        transformStyle: "preserve-3d",
      }}
      className="relative mx-auto w-full flex flex-col items-center gap-3 sm:gap-6 sm:block sm:aspect-square sm:max-w-[460px] lg:max-w-[640px]"
    >
      {/* ================= GRAPHIC WRAPPER ================= */}
      <div className="relative w-full aspect-square max-w-[260px] xs:max-w-[280px] sm:max-w-none sm:absolute sm:inset-0">
        
        {/* Deep Ambient Backglow — Upgraded layer depth */}
        <div className="absolute inset-4 rounded-full bg-primary-glow/10 sm:bg-primary-glow/15 blur-[32px] sm:blur-[90px]" />
        <div className="absolute inset-12 rounded-full bg-accent/[0.08] sm:bg-accent/10 blur-[24px] sm:blur-[70px]" />

        {/* Dynamic Spinning Rings (Mobile Only) — Adds kinetic structure */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border border-dashed border-primary-glow/20 sm:hidden pointer-events-none" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-dotted border-accent/25 sm:hidden pointer-events-none" 
        />

        {/* Primary particles — Enhanced floating on mobile */}
        {Array.from({ length: isDesktop ? 14 : 9 }).map((_, i) => (
          <motion.span
            key={`p-primary-${i}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0], 
              y: [0, isDesktop ? -20 : -35, 0],
              x: [0, (i % 2 === 0 ? 8 : -8), 0] 
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="absolute h-1 w-1 rounded-full bg-primary-glow/80"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          />
        ))}

        {/* Amber bio-dots — Shimmering magical effect */}
        {Array.from({ length: isDesktop ? 10 : 7 }).map((_, i) => {
          const size = i % 3 === 0 ? "h-1 w-1" : i % 3 === 1 ? "h-1.5 w-1.5" : "h-[2px] w-[2px]";
          return (
            <motion.span
              key={`p-yellow-${i}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 0.9, 0],
                y: [0, -40, -10],
                x: [0, i % 2 === 0 ? 12 : -12, 0],
                scale: [0.5, 1.1, 0.3],
              }}
              transition={{
                duration: 4.5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
              className={`absolute rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 shadow-[0_0_8px_rgba(245,158,11,0.5)] z-30 ${size}`}
              style={{
                left: `${15 + ((i * 31) % 70)}%`,
                top: `${10 + ((i * 43) % 75)}%`,
              }}
            />
          );
        })}

        {/* Left / Right scroll columns (desktop) */}
        <div className="hidden md:block absolute left-[5%] top-1/2 -translate-y-1/2">
          <ScrollColumn items={leftDomains} direction="up" />
        </div>
        <div className="hidden md:block absolute right-[5%] top-1/2 -translate-y-1/2">
          <ScrollColumn items={rightDomains} direction="down" />
        </div>

        {/* Desktop center card */}
        <div className="hidden sm:block pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-border/80 bg-card/95 px-5 py-3.5 text-center backdrop-blur-md shadow-xl">
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

        {/* Mobile center brand chip — Upgraded with constant floating micro-physics */}
        <motion.div 
          animate={{ 
            y: ["-50%", "-54%", "-46%", "-50%"],
            x: ["-50%", "-48%", "-52%", "-50%"]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="sm:hidden pointer-events-none absolute left-1/2 top-1/2 z-30 w-[78%]"
        >
          <div className="flex flex-col items-center gap-0.5 rounded-xl border border-primary/20 bg-card/90 px-3 py-2.5 text-center backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="text-[8px] font-mono font-bold uppercase tracking-[0.28em] text-accent animate-pulse">
              ◆ BioDrishti ◆
            </div>
            <div className="text-[11px] font-bold text-foreground leading-snug tracking-wide">
              Better Science Through Mentorship
            </div>
            <div className="text-[7.5px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Research Ecosystem · India
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= MOBILE INFO PANEL ================= */}
      {/* Upgraded grid with tap reactions and slick staggered slide-ins */}
      <div className="w-full max-w-[340px] px-2 z-30 sm:hidden">
        <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-lg p-3.5 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  whileTap={{ scale: 0.96, backgroundColor: "rgba(var(--background), 0.9)" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                  className="flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 p-2 active:border-primary/40 transition-colors"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary-glow/20 shrink-0">
                    <Icon className="h-3 w-3 text-primary" strokeWidth={2} />
                  </span>
                  <span className="text-[10px] font-medium leading-tight text-foreground/90">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Domain marquee — Smoother typography and faster pacing */}
          <div className="pt-1 overflow-hidden mask-linear-edges">
            <motion.div
              className="flex gap-2 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...domains, ...domains].map((d, i) => (
                <span
                  key={i}
                  className="rounded-full border border-border/80 bg-background/40 px-2.5 py-1 text-[9px] font-medium tracking-wide text-foreground/80 shadow-2xs"
                >
                  <span className="font-mono text-accent/90 font-bold mr-1.5">
                    {((i % domains.length) + 1).toString().padStart(2, "0")}
                  </span>
                  {d}
                </span>
              ))}
            </motion.div>
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