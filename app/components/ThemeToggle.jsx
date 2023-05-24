import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import DarkModeIcon from "../images/svg/dark-mode-icon.svg";
import LightModeIcon from "../images/svg/light-mode-icon.svg";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Image src={DarkModeIcon} alt="" />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <Image src={LightModeIcon} alt="" />
        </button>
      )}
    </>
  );
}
