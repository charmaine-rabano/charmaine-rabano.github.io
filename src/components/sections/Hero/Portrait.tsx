import Image from "next/image";
import { hero } from "@/content/hero";
import { PortraitStickers } from "./PortraitStickers";

export function Portrait() {
  return (
    <div className="relative min-h-105 self-stretch max-[1081px]:mx-auto max-[1081px]:aspect-[1/1.16] max-[1081px]:w-full max-[1081px]:max-w-120 max-[1081px]:min-h-0">
      <div className="absolute top-[6%] right-[8%] bottom-0 left-[6%] rounded-[180px_180px_24px_24px] rule bg-blush shadow-lift-3 after:plate-ring" />
      <Image
        src={hero.portrait.src}
        width={hero.portrait.width}
        height={hero.portrait.height}
        alt={hero.portrait.alt}
        priority
        className="absolute right-[4%] bottom-0 left-[4%] h-auto w-[92%] portrait-shadow"
      />
      <PortraitStickers />
    </div>
  );
}
