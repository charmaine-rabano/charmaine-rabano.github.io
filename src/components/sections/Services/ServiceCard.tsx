import type { CSSProperties } from "react";
import type { ServiceTone } from "@/content/services";
import { cn } from "@/lib/cn";

const toneClass: Record<ServiceTone, { bg: string; text: string }> = {
  rose: { bg: "bg-rose", text: "text-on-rose" },
  paper: { bg: "bg-paper", text: "text-ink-2" },
  gray: { bg: "bg-gray", text: "text-on-gray" },
  blush: { bg: "bg-blush", text: "text-on-blush" },
};

export function ServiceCard({
  title,
  body,
  span,
  rotate,
  tone,
}: {
  title: string;
  body: string;
  span: 7 | 5;
  rotate: string;
  tone: ServiceTone;
}) {
  const { bg, text } = toneClass[tone];

  return (
    <article
      className={cn(
        "rounded-cut rule rotate-(--card-rotate) px-6.5 pt-6.5 pb-7.5 shadow-lift-2 transition-[transform,box-shadow] duration-200 ease-cut hover:-translate-x-0.75 hover:-translate-y-0.75 hover:rotate-0 hover:shadow-lift-3 max-[1081px]:col-span-12",
        span === 7 ? "col-span-7" : "col-span-5",
        bg,
      )}
      style={{ "--card-rotate": rotate } as CSSProperties}
    >
      <h3 className="mb-3 text-[clamp(20px,1.7vw,23px)] leading-[1.22]">
        {title}
      </h3>
      <p className={cn("text-[15px] leading-[1.62]", text)}>{body}</p>
    </article>
  );
}
