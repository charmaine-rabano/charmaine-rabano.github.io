import React from "react";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

import LongVerticalLine from "../images/svg/long-vertical-line.svg";

export default function FloatingLines() {
  return (
    <div className="hidden lg:block">
      <div className="fixed bottom-0 left-16 flex flex-col items-center gap-4">
        <SocialLinks vertical />
        <Image src={LongVerticalLine} alt="" />
      </div>
      <div className="fixed -bottom-14 left-32 flex flex-col items-center gap-4">
        <a
          href="mailto:charmaine.rabano@gmail.com"
          className="rotate-[270deg] absolute -top-28"
        >
          <p className="accentText text-sm">charmaine.rabano@gmail.com</p>
        </a>
        <Image src={LongVerticalLine} alt="" />
      </div>
      <div className="fixed -bottom-9 right-20 flex flex-col items-center gap-4">
        <ThemeToggle />
        <Image src={LongVerticalLine} alt="" />
      </div>
    </div>
  );
}
