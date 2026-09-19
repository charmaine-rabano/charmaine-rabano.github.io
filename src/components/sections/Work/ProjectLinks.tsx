import type { ProjectLink, Walkthrough } from "@/content/projects";
import { Button } from "@/components/ui/Button";
import { WalkthroughButton } from "./Walkthrough/WalkthroughButton";

export function ProjectLinks({
  links,
  walkthroughs,
  stack,
}: {
  links?: ProjectLink[];
  walkthroughs?: Walkthrough[];
  /** the project's own stack line, used when a walkthrough doesn't carry its own */
  stack?: string;
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-2.5">
      {links?.map((link) => (
        <Button
          key={link.href}
          href={link.href}
          size="sm"
          variant={link.primary ? "rose" : "paper"}
          className="max-[521px]:flex-[1_1_auto] max-[521px]:justify-center"
        >
          {link.label}
        </Button>
      ))}
      {walkthroughs?.map((walkthrough) => (
        <WalkthroughButton
          key={walkthrough.title}
          walkthrough={{ ...walkthrough, stack: walkthrough.stack ?? stack }}
        />
      ))}
    </div>
  );
}
