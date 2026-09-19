/** The spinning atom graphic on the hero portrait. */
export function Atom() {
  return (
    <svg
      className="animate-spin-slow origin-center"
      width={58}
      height={58}
      viewBox="0 0 70 70"
      fill="none"
      stroke="#2A2226"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <ellipse cx={35} cy={35} rx={29} ry={11} />
      <ellipse cx={35} cy={35} rx={29} ry={11} transform="rotate(60 35 35)" />
      <ellipse cx={35} cy={35} rx={29} ry={11} transform="rotate(120 35 35)" />
      <circle cx={35} cy={35} r={4.5} fill="#2A2226" />
    </svg>
  );
}
