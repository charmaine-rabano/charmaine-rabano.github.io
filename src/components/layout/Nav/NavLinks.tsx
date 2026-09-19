import { navLinks } from "@/content/site";
import { cn } from "@/lib/cn";

export function NavLinks({
  isOpen,
  activeId,
  onNavigate,
}: {
  isOpen: boolean;
  activeId: string | null;
  onNavigate: () => void;
}) {
  return (
    <div
      id="navlinks"
      data-open={isOpen}
      className={cn(
        "navmenu flex gap-6.5 text-[15px] font-semibold",
        "max-[861px]:absolute max-[861px]:inset-x-0 max-[861px]:top-18.5 max-[861px]:flex-col max-[861px]:gap-0 max-[861px]:rule max-[861px]:border-x-0 max-[861px]:border-t-0 max-[861px]:bg-paper max-[861px]:px-(--pad) max-[861px]:pt-2 max-[861px]:pb-4.5",
        isOpen ? "max-[861px]:flex" : "max-[861px]:hidden",
      )}
    >
      {navLinks.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={onNavigate}
          aria-current={activeId === id ? "true" : undefined}
          className={cn(
            "border-b-2 border-transparent py-1 no-underline",
            "aria-current:border-rose-deep [&:hover]:border-rose-deep",
            "max-[861px]:border-dashed max-[861px]:border-gray-2 max-[861px]:py-3",
            "pointer-coarse:min-[861px]:py-2.5",
          )}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
