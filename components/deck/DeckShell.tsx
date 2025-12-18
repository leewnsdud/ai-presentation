"use client";

import { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

type DeckShellProps = {
  title: string;
  index: number;
  total: number;
  step: number;
  stepCount: number;
  children: ReactNode;
  onPrev: () => void;
  onNext: () => void;
  presenterMode?: boolean;
  note?: string;
};

export function DeckShell({
  title,
  index,
  total,
  step,
  stepCount,
  children,
  onPrev,
  onNext,
  presenterMode,
  note,
}: DeckShellProps) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#05060d] px-4 py-8 text-slate-100 sm:px-8">
      <div className="flex w-full justify-center">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--panel-strong)] shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
          style={{
            width: "min(100%, calc((100vh - 3rem) * 16 / 9))",
            maxHeight: "calc(100vh - 3rem)",
          }}
        >
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(124,58,237,0.08)] via-transparent to-[rgba(56,189,248,0.08)]" />
            <div className="relative z-10 h-full w-full px-14 py-14 sm:px-24 sm:py-16 lg:px-28 lg:py-20">{children}</div>
          </div>
        </div>
      </div>

      {presenterMode && (
        <div className="fixed inset-x-6 bottom-6 z-30 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm backdrop-blur sm:inset-x-auto sm:right-10 sm:w-80">
          <Sparkles size={16} className="text-[var(--accent)]" />
          <div className="flex-1 space-y-1">
            <div className="text-xs uppercase tracking-wide text-slate-400">Presenter</div>
            <div className="text-white">{title}</div>
            <div className="text-slate-300">
              Step {Math.min(step, stepCount)} / {stepCount} — {index + 1} / {total}
            </div>
            {note && <div className="text-slate-400">{note}</div>}
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-20 flex gap-2">
        <button
          aria-label="Previous"
          onClick={onPrev}
          className="rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)]/30"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          aria-label="Next"
          onClick={onNext}
          className="rounded-full border border-white/15 bg-[var(--accent)] p-3 text-white transition hover:-translate-y-0.5 hover:border-[var(--accent-strong)]"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

