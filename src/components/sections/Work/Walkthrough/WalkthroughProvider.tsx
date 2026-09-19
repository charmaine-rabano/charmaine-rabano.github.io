"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import type { Walkthrough } from "@/content/projects";
import { youtubeId } from "@/lib/youtube";
import { useScrollLock } from "@/hooks/useScrollLock";
import { WalkthroughDialog } from "./WalkthroughDialog";

type ActiveWalkthrough = {
  title: string;
  stack?: string;
  videoId: string | null;
};

type WalkthroughContextValue = {
  open: (walkthrough: Walkthrough) => void;
};

const WalkthroughContext = createContext<WalkthroughContextValue | null>(null);

export function useWalkthrough(): WalkthroughContextValue {
  const context = useContext(WalkthroughContext);
  if (!context) {
    throw new Error("useWalkthrough must be used within a WalkthroughProvider");
  }
  return context;
}

/**
 * Mounts a single walkthrough dialog for the whole Work section and hands
 * every walkthrough button an `open()` call, mirroring the mockup's one
 * shared `<dialog id="vm">` fed by each button's `data-yt`/`data-title`.
 */
export function WalkthroughProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  // Deliberately not cleared on close, so the card keeps its title/stack
  // through the exit transition instead of going blank mid-animation.
  const [active, setActive] = useState<ActiveWalkthrough | null>(null);

  useScrollLock(isOpen);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || typeof dialog.showModal !== "function") return;
    if (isOpen && !dialog.open) dialog.showModal();
  }, [isOpen]);

  const open = useCallback((walkthrough: Walkthrough) => {
    openerRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setActive({
      title: walkthrough.title,
      stack: walkthrough.stack,
      videoId: youtubeId(walkthrough.youtube),
    });
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Fires for every close path: the close button, a backdrop click, and Esc
  // (the browser calls .close() internally for Esc, so this alone covers it).
  const handleDialogClose = useCallback(() => {
    setIsOpen(false);
    openerRef.current?.focus();
    openerRef.current = null;
  }, []);

  const handleBackdropClick = useCallback(
    (event: MouseEvent<HTMLDialogElement>) => {
      // The dialog box is exactly the card, so anything else is the mat behind it.
      if (event.target === event.currentTarget) close();
    },
    [close],
  );

  return (
    <WalkthroughContext.Provider value={{ open }}>
      {children}
      <WalkthroughDialog
        ref={dialogRef}
        active={active}
        isPlaying={isOpen && active?.videoId != null}
        onClose={handleDialogClose}
        onCloseClick={close}
        onBackdropClick={handleBackdropClick}
      />
    </WalkthroughContext.Provider>
  );
}
