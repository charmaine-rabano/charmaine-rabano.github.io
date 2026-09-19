import { cn } from "@/lib/cn";

type Paragraph = string | { strong: string; rest: string };

export function RoleEntry({
  when,
  paragraphs,
  isFirst,
}: {
  when: string;
  paragraphs: Paragraph[];
  isFirst: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[120px_minmax(0,1fr)] items-start gap-5.5 max-[861px]:grid-cols-1 max-[861px]:gap-3",
        !isFirst && "mt-7 border-t-2 border-dashed border-gray-2 pt-7",
      )}
    >
      <span className="rounded-lg rule bg-blush py-2.25 text-center font-display text-sm font-bold tabular-nums shadow-[3px_3px_0_var(--color-ink)] max-[861px]:justify-self-start max-[861px]:px-4.5 max-[861px]:py-2.25">
        {when}
      </span>
      <div>
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className={cn(
              "max-w-[66ch] text-[15px] leading-[1.62] text-ink-2",
              i > 0 && "mt-2.75",
            )}
          >
            {typeof paragraph === "string" ? (
              paragraph
            ) : (
              <>
                <strong className="font-extrabold text-ink">
                  {paragraph.strong}
                </strong>
                {paragraph.rest}
              </>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
