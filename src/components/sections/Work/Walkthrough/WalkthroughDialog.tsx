"use client";

import { useId, type MouseEvent, type Ref } from "react";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { PlayCircleIcon } from "@/components/icons/PlayCircleIcon";
import { embedUrl, watchUrl } from "@/lib/youtube";

type ActiveWalkthrough = {
  title: string;
  stack?: string;
  videoId: string | null;
};

/**
 * The single shared walkthrough player — a native `<dialog>` so Esc, focus
 * trapping and the backdrop come for free. `isPlaying` mounts/unmounts the
 * iframe: no `src` is set until a button is pressed, and closing the dialog
 * removes the iframe outright, stopping playback.
 */
export function WalkthroughDialog({
  ref,
  active,
  isPlaying,
  onClose,
  onCloseClick,
  onBackdropClick,
}: {
  ref: Ref<HTMLDialogElement>;
  active: ActiveWalkthrough | null;
  isPlaying: boolean;
  onClose: () => void;
  onCloseClick: () => void;
  onBackdropClick: (event: MouseEvent<HTMLDialogElement>) => void;
}) {
  const titleId = useId();
  const hasVideo = active?.videoId != null;

  return (
    <dialog
      ref={ref}
      className="vm"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={onBackdropClick}
    >
      <div className="relative rule rounded-cut bg-paper shadow-lift-3">
        <div className="flex items-center rule border-x-0 border-t-0 rounded-t-xl bg-rose py-3.75 pr-16.5 pl-5.5 max-[640px]:min-h-16.5 max-[640px]:py-3 max-[640px]:pr-16 max-[640px]:pl-4 [@media(max-height:520px)]:pr-16">
          <h2
            id={titleId}
            className="text-[clamp(18px,2vw,23px)] leading-[1.22] font-bold"
          >
            {active?.title ?? "Walkthrough"}
          </h2>
        </div>

        <div className="p-5.5 max-[640px]:p-3.5">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg rule bg-ink [@media(max-height:520px)]:aspect-auto [@media(max-height:520px)]:h-[calc(100dvh-200px)] [@media(max-height:520px)]:min-h-35">
            {isPlaying && active?.videoId && (
              <iframe
                className="absolute inset-0 block h-full w-full border-0"
                src={embedUrl(active.videoId)}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
            {!hasVideo && (
              <div className="hatch absolute inset-0 grid place-content-center justify-items-center gap-3 p-5 text-center text-[13px] leading-[1.55] font-bold text-slate">
                <PlayCircleIcon />
                <span className="max-w-[42ch]">
                  Video slot — paste the YouTube link or ID into this
                  button&rsquo;s{" "}
                  <code className="rule rounded-[5px] bg-paper px-1.5 py-px font-mono text-[12.5px] text-ink">
                    data-yt
                  </code>
                </span>
              </div>
            )}
          </div>

          <div className="perf mt-4.5 flex flex-wrap items-center justify-between gap-4.5 pt-4.5 max-[640px]:mt-3.5 max-[640px]:pt-3.5">
            <p className="max-w-[60ch] text-[13px] font-semibold tracking-[0.01em] text-slate">
              {active?.stack}
            </p>
            {active?.videoId && (
              <Button size="sm" href={watchUrl(active.videoId)}>
                Open on YouTube ↗
              </Button>
            )}
          </div>
        </div>

        <Button
          size="icon"
          autoFocus
          aria-label="Close walkthrough"
          onClick={onCloseClick}
          className="absolute -top-4.75 -right-4.75 z-2 rotate-[7deg] hover:rotate-0 hover:bg-rose max-[640px]:top-2.5 max-[640px]:right-2.5 max-[640px]:rotate-[5deg] [@media(max-height:520px)]:top-2.5 [@media(max-height:520px)]:right-2.5 [@media(max-height:520px)]:rotate-[5deg]"
        >
          <CloseIcon />
        </Button>
      </div>
    </dialog>
  );
}
