import Image from "next/image";
import { ScreenshotIcon } from "@/components/icons/ScreenshotIcon";

export function BrowserFrame({
  url,
  caption,
  image,
}: {
  url: string;
  caption: string;
  image?: { src: string; width: number; height: number };
}) {
  return (
    <div className="overflow-hidden rounded-[10px] rule bg-paper">
      <div className="flex min-h-9 items-center gap-1.75 rule border-x-0 border-t-0 bg-paper-2 px-3.25 py-2.25 text-[13px] font-bold text-ink-2">
        <i className="block h-2.25 w-2.25 rounded-full rule" />
        <i className="block h-2.25 w-2.25 rounded-full rule" />
        <span className="ml-2">{url}</span>
      </div>
      {image ? (
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={caption}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="h-auto w-full shot-tint group-hover:filter-none"
        />
      ) : (
        <div className="grid aspect-16/10 hatch place-content-center justify-items-center gap-2 p-4 text-center text-[13px] font-bold text-slate">
          <ScreenshotIcon />
          {caption}
        </div>
      )}
    </div>
  );
}
