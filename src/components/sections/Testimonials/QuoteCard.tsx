import { Sparkle } from "@/components/icons/Sparkle";
import { cn } from "@/lib/cn";

export function QuoteCard({
  text,
  caption,
  isLast,
}: {
  text: string;
  caption: string;
  isLast: boolean;
}) {
  return (
    <figure
      className={cn(
        "relative rounded-cut rule p-7 shadow-lift-2",
        isLast
          ? "mt-6.5 rotate-[1.1deg] bg-blush max-[861px]:mt-0"
          : "rotate-[-1.2deg] bg-rose",
      )}
    >
      <blockquote className="m-0 text-[clamp(16px,1.5vw,18.5px)] leading-[1.55]">
        {text}
      </blockquote>
      <figcaption className="mt-4 font-display text-[15px] font-bold">
        {caption}
      </figcaption>
      <Sparkle
        size={58}
        fill="#FCF9F9"
        strokeWidth={4}
        className={cn(
          "absolute max-[521px]:hidden",
          isLast ? "-bottom-5.5 -left-5.5" : "-top-5.5 -right-5.5",
        )}
      />
    </figure>
  );
}
