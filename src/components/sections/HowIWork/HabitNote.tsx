import type { MarkTone } from "@/content/habits";
import { cn } from "@/lib/cn";

const markToneClass: Record<MarkTone, string> = {
  rose: "bg-rose",
  blush: "bg-blush",
  gray: "bg-gray",
  mauve: "bg-mauve",
};

export function HabitNote({
  heading,
  markTone,
  paragraphs,
  wide,
}: {
  heading: string;
  markTone: MarkTone;
  paragraphs: string[];
  wide?: boolean;
}) {
  return (
    <article
      className={cn(
        "rounded-cut rule bg-paper p-6.5 shadow-lift-2 transition-[transform,box-shadow] duration-200 ease-cut hover:-translate-x-0.75 hover:-translate-y-0.75 hover:shadow-lift-3",
        wide && "col-span-2 max-[861px]:col-span-1",
      )}
    >
      <h3 className="mb-3 text-xl leading-[1.3]">
        <mark
          className={cn(
            "box-decoration-clone rounded text-ink px-1.25 py-px",
            markToneClass[markTone],
          )}
        >
          {heading}
        </mark>
      </h3>
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className={cn(
            "text-[15px] leading-[1.62] text-ink-2",
            i > 0 && "mt-2.75",
          )}
        >
          {paragraph}
        </p>
      ))}
    </article>
  );
}
