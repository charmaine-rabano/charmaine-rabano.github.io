type SparkleProps = {
  size: number;
  fill: string;
  strokeWidth: number;
  className?: string;
};

/** Four-point star used on the marquee, stickers, quotes and contact card. */
export function Sparkle({ size, fill, strokeWidth, className }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 3 C54 36 64 46 97 50 C64 54 54 64 50 97 C46 64 36 54 3 50 C36 46 46 36 50 3Z"
        fill={fill}
        stroke="#2A2226"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Smaller star used inline in the marquee track. */
export function MarqueeSparkle() {
  return (
    <svg width="13" height="13" viewBox="0 0 100 100" aria-hidden="true">
      <path
        d="M50 4 C54 36 64 46 96 50 C64 54 54 64 50 96 C46 64 36 54 4 50 C36 46 46 36 50 4Z"
        fill="#FCF9F9"
        stroke="#2A2226"
        strokeWidth={6}
        strokeLinejoin="round"
      />
    </svg>
  );
}
