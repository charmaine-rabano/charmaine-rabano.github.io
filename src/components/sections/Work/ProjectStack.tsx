/**
 * The tech-stack caption line. Same cascade note as ProjectPull: the
 * surrounding `.proj p` rule wins on size/color/line-height, so only
 * font-weight, letter-spacing and margin-top are truly `.stack`'s own.
 */
export function ProjectStack({ children }: { children: string }) {
  return (
    <p className="mt-3 max-w-[58ch] text-[15.5px] leading-[1.64] font-semibold tracking-[0.01em] text-ink-2">
      {children}
    </p>
  );
}
