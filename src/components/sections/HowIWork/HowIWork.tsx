import { habits } from "@/content/habits";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HabitNote } from "./HabitNote";

export function HowIWork() {
  return (
    <section id="how" className="perf bg-paper-2 px-(--pad) py-(--step)">
      <SectionHeader tab="How I work" title="Four habits you can count on" />

      <div className="grid grid-cols-1 gap-5.5 min-[861px]:grid-cols-2">
        {habits.map((habit) => (
          <HabitNote key={habit.heading} {...habit} />
        ))}
      </div>
    </section>
  );
}
