"use client";

import { useEffect } from "react";

/**
 * Pads the body by the scrollbar's own width and hides scrolling while
 * `locked`, so the walkthrough dialog doesn't cause a layout shift when it
 * opens and closes. Mirrors the mockup's `lock()` / `unlock()`.
 */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const previousPaddingRight = document.body.style.paddingRight;
    const previousOverflow = document.documentElement.style.overflow;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [locked]);
}
