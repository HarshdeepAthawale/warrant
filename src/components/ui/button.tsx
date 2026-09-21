import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "btn inline-flex items-center justify-center gap-2 rounded-lg font-medium focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "btn-primary bg-accent text-accent-contrast hover:bg-accent-2 shadow-[0_1px_2px_rgba(14,22,32,0.12)]",
  secondary:
    "btn-secondary border border-border-strong bg-surface text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink-2 hover:text-ink hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

type AnchorProps = { as?: "a" } & ComponentProps<"a">;
type ButtonProps = { as: "button" } & ComponentProps<"button">;

type Props = (AnchorProps | ButtonProps) & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "button") {
    const { as: _as, ...rest } = props;
    void _as;
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    );
  }

  const { as: _as, ...rest } = props as AnchorProps;
  void _as;
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
