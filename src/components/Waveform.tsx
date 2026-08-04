export function EqBars({ className = "" }: { className?: string }) {
  const bars = [
    "animate-eq1",
    "animate-eq2",
    "animate-eq3",
    "animate-eq4",
    "animate-eq5",
    "animate-eq3",
    "animate-eq1",
  ];

  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {bars.map((anim, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full bg-silver-gradient ${anim}`}
          style={{ height: "16px" }}
        />
      ))}
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-6" aria-hidden="true">
      <div className="h-px flex-1 bg-hairline" />
      <svg width="64" height="16" viewBox="0 0 64 16" fill="none">
        <path
          d="M0 8 L8 8 L11 2 L15 14 L19 4 L22 12 L26 8 L34 8 L38 3 L42 13 L46 6 L49 10 L53 8 L64 8"
          stroke="#5C5C66"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
      <div className="h-px flex-1 bg-hairline" />
    </div>
  );
}
