export function FlowArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={30}
      viewBox="0 0 24 30"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v24M5 19l7 7 7-7" />
    </svg>
  );
}
