import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "paper" | "rose" | "blush" | "play";
export type ButtonSize = "md" | "sm" | "lg" | "icon";

const base =
  "inline-flex items-center gap-[9px] rule rounded-[10px] font-sans font-bold text-ink no-underline cursor-pointer whitespace-nowrap shadow-lift-1 press transition-[transform,box-shadow,background-color] duration-[160ms] ease-cut hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lift-2 max-[521px]:justify-center";

// .btn--icon always renders on a blush background regardless of variant, so
// the icon size below overrides whatever variant background is passed in.
const variantClass: Record<ButtonVariant, string> = {
  paper: "bg-paper",
  rose: "bg-rose hover:bg-rose-deep",
  blush: "bg-blush",
  play: "bg-blush hover:bg-rose",
};

// Width at ≤520px is owned entirely here (not in `base`) so each size sets
// it exactly once — mixing an unconditional base width with a size override
// at the same breakpoint would leave two same-specificity utilities fighting
// over the same property with no reliable winner.
const sizeClass: Record<ButtonSize, string> = {
  md: "min-h-[50px] px-5 text-[15px] max-[521px]:w-full",
  sm: "min-h-[42px] px-[15px] text-sm rounded-lg pointer-coarse:min-h-[46px] max-[521px]:w-auto",
  // the two contact-section CTAs — mockup sets these via inline style
  lg: "min-h-[58px] px-[26px] text-base max-[521px]:w-full",
  icon: "min-h-[46px] w-[46px] justify-center bg-blush p-0 max-[521px]:w-[46px]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  "aria-label"?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "paper",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  // icon buttons carry their own background (see sizeClass.icon) — never mix
  // in a variant background too, or both classes target the same property.
  const classes = cn(
    base,
    size !== "icon" && variantClass[variant],
    sizeClass[size],
    className,
  );

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        {...anchorProps}
      >
        {props.children}
      </a>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {props.children}
    </button>
  );
}
