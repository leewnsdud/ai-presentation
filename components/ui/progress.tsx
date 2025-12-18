type ProgressProps = {
  value: number; // 0..1
};

export function Progress({ value }: ProgressProps) {
  const clamped = Math.min(1, Math.max(0, value));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full bg-gradient-to-r from-[var(--accent-strong)] to-[var(--accent)] transition-[width]"
        style={{ width: `${(clamped * 100).toFixed(2)}%` }}
      />
    </div>
  );
}

