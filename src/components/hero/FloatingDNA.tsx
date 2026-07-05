import { motion, type MotionValue } from "framer-motion";
import type { SVGProps } from "react";

interface FloatingDNAProps {
  visualX: MotionValue<number>;
  visualY: MotionValue<number>;
  visualRotX: MotionValue<number>;
  visualRotY: MotionValue<number>;
}

/* ================= LIGHTWEIGHT SVG ICONS ================= */
const svgBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconFlask = (p: SVGProps<SVGSVGElement>) => (
  <svg {...svgBase} {...p}>
    <path d="M10 2v7.5L4.5 18H19.5L14 9.5V2" />
    <path d="M10 2h4" />
    <path d="M8.5 11h7" />
  </svg>
);
const IconFile = (p: SVGProps<SVGSVGElement>) => (
  <svg {...svgBase} {...p}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);
const IconBrain = (p: SVGProps<SVGSVGElement>) => (
  <svg {...svgBase} {...p}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M12 5v14" />
  </svg>
);
const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...svgBase} {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IconMicroscope = (p: SVGProps<SVGSVGElement>) => (
  <svg {...svgBase} {...p}>
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0-14 0" />
    <path d="M14 14h2" />
    <path d="M14 10h4" />
    <path d="M12 6h2" />
    <path d="M14 2v4" />
    <path d="M8 2h4" />
  </svg>
);
const IconSparkle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...svgBase} {...p}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
  </svg>
);

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
  { label: "Idea Validation", icon: IconFlask, pos: "left-[3%] top-[14%]" },
  { label: "Publication Ready", icon: IconFile, pos: "right-[3%] top-[14%]" },
  { label: "Structured Mentorship", icon: IconBrain, pos: "left-[1%] bottom-[26%]" },
  { label: "Research Culture", icon: IconSparkle, pos: "right-[1%] bottom-[26%]" },
  { label: "Scientific Rigor", icon: IconShield, pos: "left-[14%] -top-[2%]" },
  { label: "Methodology Review", icon: IconMicroscope, pos: "right-[14%] -bottom-[2%]" },
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
    <div className="overflow-hidden h-[180px] sm:h-[320px]">
      <motion.div
        className="flex flex-col gap-2 sm:gap-3"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {looped.map((item, i) => (
          <div
            key={i}
            className="rounded-full border border-border bg-card/85 backdrop-blur-md px-3 py-1 text-[10px] sm:text-[11px] leading-none whitespace-nowrap shadow-sm text-foreground/90 font-medium min-h-[28px] flex items-center"
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
      className="relative mx-auto w-full flex flex-col items-center gap-4 sm:gap-6 sm:block sm:aspect-square sm:max-w-[460px] lg:max-w-[640px]"
    >
      {/* ================= GRAPHIC WRAPPER ================= */}
      <div className="relative w-full aspect-square max-w-[280px] xs:max-w-[300px] sm:max-w-none sm:absolute sm:inset-0 [perspective:1000px]">
        {/* Soft ambient backglow — single slow pulse */}
        <motion.div
          animate={{ opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-6 rounded-full bg-primary-glow/15 blur-[40px] sm:inset-10 sm:blur-[90px] pointer-events-none"
        />
        <div className="absolute inset-16 rounded-full bg-accent/10 blur-[30px] sm:blur-[70px] pointer-events-none" />

        {/* Refined rings (mobile) — mostly static, one very slow rotation */}
        <div className="absolute inset-1 rounded-full border border-primary-glow/15 sm:hidden pointer-events-none" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute inset-6 rounded-full border border-dashed border-primary/15 sm:hidden pointer-events-none"
        />
        <div className="absolute inset-12 rounded-full border border-accent/15 sm:hidden pointer-events-none" />

        {/* A few tasteful drifting particles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={`p-${i}`}
            animate={{ opacity: [0, 0.7, 0], y: [0, -20, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute h-1 w-1 rounded-full bg-primary-glow shadow-[0_0_6px_rgba(129,140,248,0.6)] pointer-events-none"
            style={{ left: `${20 + i * 15}%`, top: `${25 + ((i * 17) % 50)}%` }}
          />
        ))}

        {/* Scroll columns (desktop) */}
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

        {/* Mobile center brand chip — subtle premium fade-in */}
        <motion.div
          initial={{ opacity: 0, y: "-46%", x: "-50%" }}
          animate={{ opacity: 1, y: "-50%", x: "-50%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="sm:hidden pointer-events-none absolute left-1/2 top-1/2 z-30 w-[78%]"
        >
          <div className="absolute -inset-2 rounded-2xl bg-primary-glow/15 blur-xl" />
          <div className="relative flex flex-col items-center gap-1 rounded-2xl border border-border/80 bg-card/95 px-4 py-3 text-center backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
            <div className="text-[8px] font-mono font-bold uppercase tracking-[0.28em] text-accent">
              ◆ BioDrishti ◆
            </div>
            <div className="text-[12px] font-bold text-foreground leading-snug tracking-wide">
              Better Science Through Mentorship
            </div>
            <div className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Research Ecosystem · India
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= MOBILE INFO PANEL ================= */}
      <div className="w-full max-w-[340px] px-2 z-30 sm:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="relative rounded-2xl border border-border/60 bg-card/85 backdrop-blur-xl shadow-lg p-3.5 space-y-3 overflow-hidden"
        >
          {/* Static premium top hairline */}
          <div
            className="absolute inset-x-6 top-0 h-px opacity-80"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--primary-glow)/0.7), hsl(var(--accent)/0.7), transparent)",
            }}
          />

          <div className="grid grid-cols-2 gap-2">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: EASE }}
                  className="flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 p-2 active:border-primary/50 transition-colors"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary-glow/25 shrink-0">
                    <Icon className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-[10px] font-medium leading-tight text-foreground/90">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Domain marquee */}
          <div className="pt-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <motion.div
              className="flex gap-2 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {[...domains, ...domains].map((d, i) => (
                <span
                  key={i}
                  className="rounded-full border border-border/80 bg-background/40 px-2.5 py-1 text-[9px] font-medium tracking-wide text-foreground/80"
                >
                  <span className="font-mono text-accent/90 font-bold mr-1.5">
                    {((i % domains.length) + 1).toString().padStart(2, "0")}
                  </span>
                  {d}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
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