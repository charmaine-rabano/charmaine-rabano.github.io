"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export default function Theme({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
