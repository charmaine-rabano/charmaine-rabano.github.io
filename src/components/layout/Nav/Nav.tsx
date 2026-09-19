"use client";

import { useState } from "react";
import { site, navLinks } from "@/content/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Button } from "@/components/ui/Button";
import { MailIcon } from "@/components/icons/MailIcon";
import { NavLinks } from "./NavLinks";
import { MenuButton } from "./MenuButton";

const sectionIds = navLinks.map((link) => link.id);

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav className="sticky top-0 z-20 flex h-18.5 items-center gap-4.5 rule border-x-0 border-t-0 bg-paper px-(--pad)">
      <a
        href="#top"
        className="mr-auto inline-flex min-h-11 items-center gap-2.25 pr-2 font-display text-xl font-bold tracking-[-0.02em] no-underline"
      >
        {site.name}
      </a>

      <NavLinks
        isOpen={isOpen}
        activeId={activeId}
        onNavigate={() => setIsOpen(false)}
      />

      <div className="flex items-center gap-2.5">
        <Button
          variant="rose"
          size="sm"
          href={site.upworkUrl}
          className="max-[861px]:hidden"
        >
          Hire me on Upwork
        </Button>
        <Button
          size="icon"
          href={`mailto:${site.email}`}
          aria-label="Email Charmaine"
        >
          <MailIcon />
        </Button>
        <MenuButton
          isOpen={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        />
      </div>
    </nav>
  );
}
