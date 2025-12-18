import { clsx } from "clsx";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function Card({ children, className, glow }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/5 bg-[var(--panel)] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur",
        glow && "shadow-[0_0_40px_-10px_var(--glow)] border-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
}

