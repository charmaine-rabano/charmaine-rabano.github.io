import { serviceCards, servicesFootnote } from "@/content/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="services" className="perf bg-paper-2 px-(--pad) py-(--step)">
      <SectionHeader
        tab="What I build"
        title={
          <>
            Four kinds of work,
            <br />
            one developer
          </>
        }
        note="I fit best where the interface carries the product and the backend stays straightforward."
      />

      <div className="grid grid-cols-12 gap-5">
        {serviceCards.map((card) => (
          <ServiceCard key={card.title} {...card} />
        ))}
      </div>

      <div className="mt-7.5 flex flex-wrap items-center justify-between gap-6.5 rounded-xl border-2 border-dashed border-ink px-6 py-5">
        <p className="max-w-[62ch] text-[15px] leading-[1.6]">
          <strong className="font-extrabold">Also:</strong> {servicesFootnote}
        </p>
      </div>
    </section>
  );
}
