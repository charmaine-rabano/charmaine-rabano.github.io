import type { CSSProperties } from "react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { BigStat } from "./BigStat";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectPull } from "./ProjectPull";
import { ProjectStack } from "./ProjectStack";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectVisual } from "./ProjectVisual";

/**
 * The visual always sits first in the DOM so it stacks above the content on
 * mobile regardless of `flip`. On the two-column desktop grid, `flip` swaps
 * it to the right via `order` instead of DOM position.
 */
export function ProjectCard({
  project,
  inPair = false,
}: {
  project: Project;
  inPair?: boolean;
}) {
  const {
    meta,
    title,
    paragraphs,
    pull,
    bigStat,
    stack,
    links,
    walkthroughs,
    flip,
    rotate,
    visual,
  } = project;
  const hasVisual = visual.kind !== "none";

  const content = (
    <div className={flip ? "min-[861px]:order-1" : undefined}>
      <ProjectMeta meta={meta} />
      <h3 className="mb-3.5 text-[clamp(25px,2.6vw,34px)] leading-[1.1]">
        {title}
      </h3>
      {bigStat && <BigStat value={bigStat.value} caption={bigStat.caption} />}
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className={cn(
            "max-w-[58ch] text-[15.5px] leading-[1.64] text-ink-2",
            i > 0 && "mt-3",
          )}
        >
          {paragraph}
        </p>
      ))}
      {pull && <ProjectPull {...pull} />}
      {stack && <ProjectStack>{stack}</ProjectStack>}
      {(links || walkthroughs) && (
        <ProjectLinks links={links} walkthroughs={walkthroughs} stack={stack} />
      )}
    </div>
  );

  return (
    <article
      className={cn(
        "relative grid items-center gap-[clamp(22px,3vw,48px)] rounded-cut rule rotate-(--proj-rotate) bg-paper p-[clamp(26px,3vw,40px)] shadow-lift-2 transition-[transform,box-shadow] duration-260 ease-cut hover:-translate-y-1.25 hover:rotate-0 hover:shadow-lift-3 focus-within:-translate-y-1.25 focus-within:rotate-0 focus-within:shadow-lift-3",
        hasVisual ? "grid-cols-1 min-[861px]:grid-cols-2" : "grid-cols-1",
        inPair ? "mb-0" : "mb-8.5",
      )}
      style={{ "--proj-rotate": rotate } as CSSProperties}
    >
      {hasVisual && (
        <ProjectVisual
          visual={visual}
          className={flip ? "min-[861px]:order-2" : undefined}
        />
      )}
      {content}
    </article>
  );
}
