import type { Chip as ChipData } from "@/content/projects";
import { Chip } from "@/components/ui/Chip";

export function ProjectMeta({ meta }: { meta: ChipData[] }) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {meta.map((chip) => (
        <Chip key={chip.label} tone={chip.tone}>
          {chip.label}
        </Chip>
      ))}
    </div>
  );
}
