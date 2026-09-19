import { skillRows, skillsFootnote, certChip } from "@/content/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { SkillRow } from "./SkillRow";

export function Skills() {
  return (
    <section className="perf px-(--pad) py-(--step)">
      <SectionHeader tab="Skills" title="What I reach for" />

      {skillRows.map((row, i) => (
        <SkillRow key={row.key} row={row} isFirst={i === 0} />
      ))}

      <div className="mt-8.5 flex flex-wrap items-center justify-between gap-6.5 rounded-cut rule bg-blush p-6 shadow-lift-2">
        <p className="max-w-[70ch] text-[15px] leading-[1.6]">
          {skillsFootnote}
        </p>
        <Chip tone="mauve" padding="px-[15px] py-2.25">
          {certChip}
        </Chip>
      </div>
    </section>
  );
}
