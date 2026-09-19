import { Fragment } from "react";
import { marqueePhrases } from "@/content/site";
import { MarqueeSparkle } from "@/components/icons/Sparkle";

/** Scrolling "booking new projects" ticker above the nav. Duplicated once so the loop is seamless. */
export function Marquee() {
  const doubled = [...marqueePhrases, ...marqueePhrases];

  return (
    <div
      aria-hidden="true"
      className="group flex min-h-12 items-center overflow-hidden rule border-x-0 border-t-0 bg-rose py-3.25"
    >
      <div className="flex w-max animate-marquee items-center gap-7.5 pl-7.5 font-display text-sm font-semibold tracking-[0.01em] whitespace-nowrap group-hover:[animation-play-state:paused]">
        {doubled.map((phrase, i) => (
          <Fragment key={i}>
            <span>{phrase}</span>
            <MarqueeSparkle />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
