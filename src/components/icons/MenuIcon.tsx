export function MenuIcon({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      className="menu-icon"
      data-open={isOpen}
    >
      <line className="menu-icon__top" x1={4} y1={7} x2={20} y2={7} />
      <line className="menu-icon__mid" x1={4} y1={12} x2={20} y2={12} />
      <line className="menu-icon__bottom" x1={4} y1={17} x2={20} y2={17} />
    </svg>
  );
}
