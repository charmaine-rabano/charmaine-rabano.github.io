import type { PullQuote } from "@/content/projects";

/**
 * The blush callout box. Its text renders at the surrounding `.proj p`
 * size/color/line-height, not its own — that rule is more specific in the
 * mockup's cascade (verified against a real render), so this matches it
 * exactly rather than the values `.pull` declares on its own.
 */
export function ProjectPull({ lead, rest }: PullQuote) {
  return (
    <p className="mt-3 max-w-[58ch] rounded-[10px] rule bg-blush px-4 py-3.5 text-[15.5px] leading-[1.64] text-ink-2">
      <strong className="font-extrabold">{lead}</strong> {rest}
    </p>
  );
}
