import { hero, heroTags } from "@/content/hero";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";
import { Portrait } from "./Portrait";

export function Hero() {
  return (
    <section
      id="top"
      className="grid grid-cols-1 items-center gap-[clamp(24px,4vw,56px)] px-(--pad) pt-[clamp(40px,5.5vw,76px)] pb-[clamp(30px,4vw,56px)] min-[1081px]:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
    >
      <div>
        <div className="mb-6.5 flex flex-wrap gap-2">
          {heroTags.map((tag) => (
            <Chip key={tag.label} tone={tag.tone}>
              {tag.label}
            </Chip>
          ))}
        </div>

        <h1 className="max-w-[15ch] text-[clamp(38px,5.4vw,72px)] leading-[1.04] tracking-[-0.035em]">
          {hero.heading}{" "}
          <em className="inline-block rotate-[-2.2deg] rounded-lg rule bg-rose px-3 not-italic shadow-[4px_4px_0_var(--color-ink)] max-[521px]:shadow-[3px_3px_0_var(--color-ink)]">
            {hero.headingEmphasis}
          </em>
        </h1>

        <p className="mt-6.5 max-w-[46ch] text-[clamp(17px,1.35vw,19px)] leading-[1.6] text-ink-2">
          {hero.lede}
        </p>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <Button variant="rose" href="#work">
            See my work
          </Button>
          <Button href="#contact">Start a project</Button>
        </div>
      </div>

      <Portrait />
    </section>
  );
}
