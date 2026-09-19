import type { ProjectVisual as ProjectVisualData } from "@/content/projects";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/Badge";
import { BrowserFrame } from "./visuals/BrowserFrame";
import { PhoneMockups } from "./visuals/PhoneMockups";
import { MigrationFlow } from "./visuals/MigrationFlow";

export function ProjectVisual({
  visual,
  className,
}: {
  visual: ProjectVisualData;
  className?: string;
}) {
  if (visual.kind === "none") return null;

  return (
    <div className={cn("group relative", className)}>
      {visual.kind === "browser" && (
        <BrowserFrame
          url={visual.url}
          caption={visual.caption}
          image={visual.image}
        />
      )}
      {visual.kind === "phones" && (
        <PhoneMockups screens={visual.screens} images={visual.images} />
      )}
      {visual.kind === "flow" && (
        <MigrationFlow
          before={visual.before}
          after={visual.after}
          caption={visual.caption}
        />
      )}
      {"badge" in visual && visual.badge ? <Badge spec={visual.badge} /> : null}
    </div>
  );
}
