import Image from "next/image";

function PhoneScreen({
  label,
  image,
  className,
}: {
  label: string;
  image?: string;
  className: string;
}) {
  return (
    <div
      className={`relative aspect-9/19 w-[46%] max-w-42 overflow-hidden rounded-[26px] rule ${className}`}
    >
      {image ? (
        <Image
          src={image}
          alt={label}
          fill
          sizes="180px"
          className="object-cover shot-tint group-hover:filter-none"
        />
      ) : (
        <div className="grid h-full place-content-center hatch p-3.5 text-center text-[13px] font-bold text-slate">
          {label}
        </div>
      )}
    </div>
  );
}

export function PhoneMockups({
  screens,
  images,
}: {
  screens: [string, string];
  images?: [string, string];
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <PhoneScreen
        label={screens[0]}
        image={images?.[0]}
        className="rotate-[-4deg]"
      />
      <PhoneScreen
        label={screens[1]}
        image={images?.[1]}
        className="translate-y-3.5 rotate-[5deg]"
      />
    </div>
  );
}
