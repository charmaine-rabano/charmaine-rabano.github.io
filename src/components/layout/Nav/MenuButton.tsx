import { Button } from "@/components/ui/Button";
import { MenuIcon } from "@/components/icons/MenuIcon";

export function MenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      id="menu"
      size="icon"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="navlinks"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="min-[861px]:hidden max-[861px]:inline-flex"
    >
      <MenuIcon isOpen={isOpen} />
    </Button>
  );
}
