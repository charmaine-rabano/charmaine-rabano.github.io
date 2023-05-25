import React from "react";
import { useTheme } from "next-themes";

import DarkModeIcon from "./svg/DarkModeIcon";
import LightModeIcon from "./svg/LightModeIcon";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <DarkModeIcon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <LightModeIcon />
        </button>
      )}
    </>
  );
}
