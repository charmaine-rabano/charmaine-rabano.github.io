import { quotes, clientBadges } from "@/content/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { QuoteCard } from "./QuoteCard";

export function Testimonials() {
  return (
    <section className="perf px-(--pad) py-(--step)">
      <SectionHeader tab="What clients say" title="Two from Upwork" />

      <div className="grid grid-cols-1 items-start gap-[clamp(24px,3vw,44px)] min-[861px]:grid-cols-2">
        {quotes.map((quote, i) => (
          <QuoteCard
            key={quote.caption + i}
            {...quote}
            isLast={i === quotes.length - 1}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2.5">
        {clientBadges.map((badge) => (
          <Chip key={badge.label} tone={badge.tone}>
            {badge.label}
          </Chip>
        ))}
      </div>
    </section>
  );
}
