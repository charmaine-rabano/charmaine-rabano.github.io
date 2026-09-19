export function RegistrationCross({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path d="M10 0v20M0 10h20" />
      <circle cx={10} cy={10} r={5} />
    </svg>
  );
}
