import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Tab } from "./Tab";

// The default note sizing (46ch / 15px) — kept out of the base string
// entirely when a call site overrides it, so the two never both apply to
// the same unconditional utility and leave the winner ambiguous.
const defaultNoteSize = "max-w-[46ch] text-[15px]";

export function SectionHeader({
  tab,
  title,
  note,
  noteClassName,
}: {
  tab: string;
  title: ReactNode;
  note?: ReactNode;
  noteClassName?: string;
}) {
  return (
    <div className="mb-10.5 flex flex-wrap items-end justify-between gap-7">
      <div>
        <Tab>{tab}</Tab>
        <h2 className="mt-3.5 text-[clamp(30px,3.6vw,44px)] leading-[1.08]">
          {title}
        </h2>
      </div>
      {note ? (
        <p className={cn("text-ink-2", noteClassName ?? defaultNoteSize)}>
          {note}
        </p>
      ) : null}
    </div>
  );
}
