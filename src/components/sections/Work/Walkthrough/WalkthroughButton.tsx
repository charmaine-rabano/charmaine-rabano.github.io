"use client";

import type { Walkthrough } from "@/content/projects";
import { Button } from "@/components/ui/Button";
import { PlayIcon } from "@/components/icons/PlayIcon";
import { useWalkthrough } from "./WalkthroughProvider";

export function WalkthroughButton({
  walkthrough,
}: {
  walkthrough: Walkthrough;
}) {
  const { open } = useWalkthrough();

  return (
    <Button
      variant="play"
      size="sm"
      onClick={() => open(walkthrough)}
      className="max-[521px]:flex-[1_1_auto] max-[521px]:justify-center"
    >
      {walkthrough.label}
      <PlayIcon />
    </Button>
  );
}
