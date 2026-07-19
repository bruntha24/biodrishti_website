import { cn } from "@/utils/cn";

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={cn("flex items-center gap-2.5", className)}>
    <img
      src="/biodrishti_logo.webp"
      alt="BioDrishti Logo"
      className="h-9 w-9 object-contain"
      width={36}
      height={36}
    />

    <div className="leading-tight">
      <div className="font-serif text-lg tracking-tight">
        BioDrishti
      </div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Research Mentorship
      </div>
    </div>
  </div>
);