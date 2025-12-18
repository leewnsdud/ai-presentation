import { clsx } from "clsx";
import { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "muted" | "info";
};

export function Pill({ children, className, tone = "accent" }: PillProps) {
  const tones: Record<typeof tone, string> = {
    accent: "bg-[rgba(124,58,237,0.12)] text-white border border-[rgba(124,58,237,0.4)]",
    muted: "bg-white/5 text-slate-200 border border-white/10",
    info: "bg-[rgba(56,189,248,0.12)] text-sky-100 border border-[rgba(56,189,248,0.35)]",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

