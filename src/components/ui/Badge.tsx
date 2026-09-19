import type { BadgeSpec } from "@/content/projects";

/** A floating rose pill pinned to a corner of a project visual. */
export function Badge({ spec }: { spec: BadgeSpec }) {
  return (
    <span
      className="absolute z-3 rounded-full rule bg-rose px-3.25 py-1.75 font-display text-sm font-bold whitespace-nowrap shadow-lift-1"
      style={{ ...spec.position, transform: `rotate(${spec.rotate})` }}
    >
      {spec.label}
    </span>
  );
}
