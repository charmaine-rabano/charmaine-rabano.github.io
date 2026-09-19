import { experienceHighlight, education, roles } from "@/content/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RoleEntry } from "./RoleEntry";

export function Experience() {
  return (
    <section id="experience" className="perf bg-paper-2 px-(--pad) py-(--step)">
      <SectionHeader tab="Experience" title="Where the hard parts came from" />

      <div className="grid grid-cols-1 gap-[clamp(24px,3.4vw,56px)] min-[1081px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <div className="-rotate-1 rounded-cut rule bg-rose p-7.5 shadow-lift-2">
            <h2 className="mb-3.5 text-[clamp(24px,2.5vw,31px)] leading-[1.14]">
              {experienceHighlight.title}
            </h2>
            <p className="text-[15px] leading-[1.6] text-on-rose">
              {experienceHighlight.body}
            </p>
          </div>
          <p className="mt-6.5 text-[15px] leading-[1.6] text-ink-2">
            <strong className="font-extrabold">Education:</strong> {education}
          </p>
        </div>

        <div>
          {roles.map((role, i) => (
            <RoleEntry
              key={role.when}
              when={role.when}
              paragraphs={role.paragraphs}
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
