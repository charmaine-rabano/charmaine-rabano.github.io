import React from "react";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";

export default function FloatingBar() {
  return (
    <div className="flex flex-row h-[80px] md:h-[100px] lg:hidden px-8 justify-between items-center bg-custom-white dark:bg-custom-black fixed bottom-0 w-full drop-shadow-2xl">
      <div className="flex flex-col md:flex-row gap-1 md:gap-8 items-center">
        <SocialLinks />
        <a href="mailto:charmaine.rabano@gmail.com">
          <p className="accentText text-sm">charmaine.rabano@gmail.com</p>
        </a>
      </div>
      <ThemeToggle />
    </div>
  );
}
