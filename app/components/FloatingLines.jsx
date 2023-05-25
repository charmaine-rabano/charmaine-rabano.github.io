import React from "react";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";

import LongVerticalLine from "./svg/LongVerticalLine";

export default function FloatingLines() {
  return (
    <div className="hidden lg:block">
      <div className="fixed bottom-0 left-16 flex flex-col items-center gap-4">
        <SocialLinks vertical />
        <LongVerticalLine />
      </div>
      <div className="fixed -bottom-14 left-32 flex flex-col items-center gap-4">
        <a
          href="mailto:charmaine.rabano@gmail.com"
          className="rotate-[270deg] absolute -top-28"
        >
          <p className="accentText text-sm">charmaine.rabano@gmail.com</p>
        </a>
        <LongVerticalLine />
      </div>
      <div className="fixed -bottom-9 right-20 flex flex-col items-center gap-4">
        <ThemeToggle />
        <LongVerticalLine />
      </div>
    </div>
  );
}
