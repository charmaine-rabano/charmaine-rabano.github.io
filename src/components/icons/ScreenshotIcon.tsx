/** Placeholder image glyph shown inside empty screenshot slots. */
export function ScreenshotIcon() {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x={3} y={4} width={18} height={16} rx={2} />
      <circle cx={8.5} cy={9.5} r={1.8} />
      <path d="M4 17l5-5 4 4 3-2 4 4" />
    </svg>
  );
}
