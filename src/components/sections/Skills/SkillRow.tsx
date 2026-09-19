import type { SkillRow as SkillRowData } from "@/content/skills";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/cn";

export function SkillRow({
  row,
  isFirst,
}: {
  row: SkillRowData;
  isFirst: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[220px_minmax(0,1fr)] items-start gap-6 py-5.5 max-[861px]:grid-cols-1 max-[861px]:gap-3",
        !isFirst && "border-t-2 border-dashed border-gray-2",
      )}
    >
      <div className="font-display text-[17px] font-bold">{row.key}</div>
      {row.kind === "chips" ? (
        <div className="flex flex-wrap gap-2">
          {row.chips.map((chip) => (
            <Chip key={chip.label} tone={chip.tone}>
              {chip.label}
            </Chip>
          ))}
        </div>
      ) : (
        <p className="max-w-[74ch] text-[15px] leading-[1.7] text-ink-2">
          {row.text}
        </p>
      )}
    </div>
  );
}
