import { Chip } from "@/components/ui/Chip";
import { FlowArrow } from "@/components/icons/FlowArrow";
import type { ProjectVisual } from "@/content/projects";

type FlowVisual = Extract<ProjectVisual, { kind: "flow" }>;

export function MigrationFlow({
  before,
  after,
  caption,
}: Omit<FlowVisual, "kind">) {
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between gap-3 rounded-[10px] rule bg-paper-2 px-4 py-3.5 text-[14.5px] font-bold">
        <span>{before.label}</span>
        <Chip tone="gray">{before.tag}</Chip>
      </div>
      <FlowArrow className="justify-self-center text-ink" />
      <div className="flex items-center justify-between gap-3 rounded-[10px] rule bg-rose px-4 py-3.5 text-[14.5px] font-bold">
        <span>{after.label}</span>
        <Chip>{after.tag}</Chip>
      </div>
      <p className="text-center text-[13px] font-bold text-slate">{caption}</p>
    </div>
  );
}
