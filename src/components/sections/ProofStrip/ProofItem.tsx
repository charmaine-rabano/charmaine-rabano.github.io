import type { ProofTone } from "@/content/proof";
import { cn } from "@/lib/cn";

// Only the 4th (rose) item's label recolors — the mockup points it at the
// same ink used on blush cards, not a rose-specific one. Kept as-is.
const toneClass: Record<ProofTone, { bg: string; label: string }> = {
  paper: { bg: "bg-paper-2", label: "text-ink-2" },
  blush: { bg: "bg-blush", label: "text-ink-2" },
  rose: { bg: "bg-rose", label: "text-on-blush" },
};

export function ProofItem({
  n,
  label,
  tone,
}: {
  n: string;
  label: string;
  tone: ProofTone;
}) {
  const { bg, label: labelClass } = toneClass[tone];

  return (
    <div className={cn("rounded-xl rule px-4.5 pt-4.5 pb-5 shadow-lift-1", bg)}>
      <span className="block font-display text-[clamp(22px,2.2vw,28px)] leading-[1.1] font-bold tabular-nums">
        {n}
      </span>
      <span
        className={cn("mt-1.5 block text-[13.5px] font-semibold", labelClass)}
      >
        {label}
      </span>
    </div>
  );
}
