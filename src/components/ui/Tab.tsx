import type { ReactNode } from "react";

/** The rose folder-tab label above each section title. */
export function Tab({ children }: { children: ReactNode }) {
  return (
    <span className="relative top-0.5 inline-flex items-center gap-2 rounded-t-xl border-2 border-b-0 border-ink bg-rose py-1.75 pr-4 pl-3.25 font-display text-[13px] font-bold tracking-[0.06em] uppercase">
      {children}
    </span>
  );
}
