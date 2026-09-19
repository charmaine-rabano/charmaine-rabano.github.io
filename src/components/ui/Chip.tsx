import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/cn";

export type ChipTone = "plain" | "rose" | "blush" | "gray" | "mauve";

const toneClass: Record<ChipTone, string> = {
  plain: "bg-paper",
  rose: "bg-rose",
  blush: "bg-blush",
  gray: "bg-gray",
  mauve: "bg-mauve",
};

const defaultPadding = "px-3 py-[5px]";

export function Chip({
  tone = "plain",
  children,
  className,
  padding,
  style,
}: {
  tone?: ChipTone;
  children: ReactNode;
  className?: string;
  /** Overrides the default px-3/py-[5px] — e.g. the larger AWS cert chip. */
  padding?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.75 rounded-full rule text-[13px] leading-[1.35] font-bold",
        padding ?? defaultPadding,
        toneClass[tone],
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
}
