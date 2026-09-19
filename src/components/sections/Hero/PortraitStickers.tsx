import { Atom } from "@/components/icons/Atom";
import { Sparkle } from "@/components/icons/Sparkle";
import { hero } from "@/content/hero";

/** The four die-cut stickers scattered over the hero portrait. */
export function PortraitStickers() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute top-[16%] left-0 z-2 grid h-17 w-21 rotate-[-7deg] place-items-center rounded-xl rule bg-gray font-display text-2xl font-extrabold shadow-lift-1 max-[641px]:h-15 max-[641px]:w-18 max-[641px]:text-[21px]"
      >
        {"</>"}
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[14%] left-[2%] z-2 grid h-21 w-21 place-items-center rounded-full rule bg-rose shadow-lift-1"
      >
        <Atom />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[40%] right-[1%] z-2 rotate-[4deg] rounded-full rule bg-paper px-3.5 py-2 text-[13px] font-bold whitespace-nowrap shadow-lift-1 max-[1081px]:top-auto max-[1081px]:bottom-[32%] max-[641px]:right-0 max-[641px]:text-xs"
      >
        {hero.storeSticker}
      </div>

      <Sparkle
        size={62}
        fill="#D2CBCE"
        strokeWidth={4}
        className="absolute top-[6%] right-[4%] z-2 rotate-[-8deg]"
      />
    </>
  );
}
