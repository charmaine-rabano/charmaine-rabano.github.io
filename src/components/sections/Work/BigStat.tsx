export function BigStat({
  value,
  caption,
}: {
  value: string;
  caption: string;
}) {
  return (
    <div className="my-1.5 mb-3.5 flex items-baseline gap-3">
      <b className="font-display text-[clamp(46px,5vw,66px)] leading-[0.95] font-extrabold tabular-nums">
        {value}
      </b>
      <span className="max-w-[18ch] text-[15px] leading-[1.3] font-bold">
        {caption}
      </span>
    </div>
  );
}
