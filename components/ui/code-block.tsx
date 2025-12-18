import { clsx } from "clsx";
import { ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export function CodeBlock({ children, className, label }: CodeBlockProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>}
      <pre
        className={clsx(
          "overflow-x-auto rounded-xl border border-white/10 bg-black/60 p-4 text-sm leading-relaxed text-slate-100 shadow-inner",
          className,
        )}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}

