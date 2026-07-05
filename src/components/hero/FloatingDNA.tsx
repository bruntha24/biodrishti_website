import { motion, type MotionValue } from "framer-motion";
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
    <div className="overflow-hidden h-[180px] sm:h-[320px]">
      <motion.div
        className="flex flex-col gap-2 sm:gap-3"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
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

        {/* ============ PREMIUM MOBILE ATMOSPHERE ============ */}
        {/* Breathing conic aurora */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0 rounded-full sm:hidden pointer-events-none opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, hsl(var(--primary-glow)/0.25), transparent, hsl(var(--accent)/0.2), transparent)",
            filter: "blur(24px)",
          }}
        />

        {/* Deep ambient backglow */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 rounded-full bg-primary-glow/15 sm:bg-primary-glow/15 blur-[36px] sm:blur-[90px]"
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute inset-12 rounded-full bg-accent/10 blur-[28px] sm:blur-[70px]"
        />

        {/* Orbital rings — layered kinetic structure (mobile only) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-1 rounded-full border border-dashed border-primary-glow/25 sm:hidden pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute inset-6 rounded-full border border-dotted border-accent/30 sm:hidden pointer-events-none"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 rounded-full border border-primary/20 sm:hidden pointer-events-none"
          style={{ borderStyle: "solid", borderWidth: "0.5px" }}
        />

        {/* Orbiting satellite dots on rings (mobile) */}
        {[0, 1, 2].map((ring) => (
          <motion.div
            key={`orbit-${ring}`}
            animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 12 + ring * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute rounded-full sm:hidden pointer-events-none ${
              ring === 0 ? "inset-1" : ring === 1 ? "inset-6" : "inset-10"
            }`}
          >
            <span
              className="absolute left-1/2 -translate-x-1/2 -top-1 h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_12px_rgba(129,140,248,0.9)]"
            />
            <span
              className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(245,158,11,0.8)]"
            />
          </motion.div>
        ))}

        {/* Primary particles */}
        {Array.from({ length: isDesktop ? 14 : 10 }).map((_, i) => (
          <motion.span
            key={`p-primary-${i}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, isDesktop ? -20 : -40, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="absolute h-1 w-1 rounded-full bg-primary-glow shadow-[0_0_6px_rgba(129,140,248,0.7)]"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          />
        ))}

        {/* Amber bio-dots — shimmering */}
        {Array.from({ length: isDesktop ? 10 : 8 }).map((_, i) => {
          const size =
            i % 3 === 0 ? "h-1 w-1" : i % 3 === 1 ? "h-1.5 w-1.5" : "h-[2px] w-[2px]";
          return (
            <motion.span
              key={`p-yellow-${i}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -45, -10],
                x: [0, i % 2 === 0 ? 14 : -14, 0],
                scale: [0.5, 1.2, 0.3],
              }}
              transition={{
                duration: 4.5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
              className={`absolute rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.6)] z-30 ${size}`}
              style={{
                left: `${15 + ((i * 31) % 70)}%`,
                top: `${10 + ((i * 43) % 75)}%`,
              }}
            />
          );
        })}

        {/* Sweeping light beam (mobile only) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full sm:hidden pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 340deg, hsl(var(--primary-glow)/0.35) 355deg, transparent 360deg)",
            filter: "blur(2px)",
          }}
        />

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

        {/* Mobile center brand chip — premium 3D float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: ["-50%", "-53%", "-47%", "-50%"],
            x: ["-50%", "-48%", "-52%", "-50%"],
            rotateZ: [0, 0.8, -0.8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, ease: EASE },
            scale: { duration: 0.6, ease: EASE },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="sm:hidden pointer-events-none absolute left-1/2 top-1/2 z-30 w-[76%]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Halo glow behind chip */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.1, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 rounded-2xl bg-primary-glow/25 blur-2xl"
          />

          <div className="relative flex flex-col items-center gap-1 rounded-2xl border border-primary/25 bg-gradient-to-b from-card/95 to-card/80 px-3.5 py-3 text-center backdrop-blur-xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)] overflow-hidden">
            {/* Sheen sweep across chip */}
            <motion.div
              animate={{ x: ["-120%", "220%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.2,
              }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
            />

            <div className="text-[8px] font-mono font-bold uppercase tracking-[0.28em] text-accent">
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                ◆ BioDrishti ◆
              </motion.span>
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
      <div className="w-full max-w-[340px] px-2 z-30 sm:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-lg p-3.5 space-y-3 overflow-hidden"
        >
          {/* Subtle animated top border gradient */}
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 top-0 h-px opacity-70"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--primary-glow)/0.8), hsl(var(--accent)/0.8), transparent)",
              backgroundSize: "200% 100%",
            }}
          />

          <div className="grid grid-cols-2 gap-2">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: EASE }}
                  className="group relative flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 p-2 active:border-primary/50 transition-colors overflow-hidden"
                >
                  <motion.span
                    animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="grid h-6 w-6 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary-glow/25 shrink-0"
                  >
                    <Icon className="h-3 w-3 text-primary" strokeWidth={2} />
                  </motion.span>
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
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
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