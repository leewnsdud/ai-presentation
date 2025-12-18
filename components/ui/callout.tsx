import { ReactNode } from "react";
import { clsx } from "clsx";

type CalloutProps = {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Callout({ icon, title, children, className }: CalloutProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-5 text-sm text-slate-200 backdrop-blur",
        className,
      )}
    >
      {(icon || title) && (
        <div className="flex items-center gap-2 text-base font-semibold text-white">
          {icon}
          {title}
        </div>
      )}
      <div className="leading-relaxed text-slate-200">{children}</div>
    </div>
  );
}

