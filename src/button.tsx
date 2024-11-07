import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "./misc/util";

// TODO: add more variants
const variants = {
  secondary:
    "text-gray-950 hover:bg-gray-950/5 focus-visible:bg-gray-950/5 active:bg-gray-950/20 bg-transparent border border-gray-950/20",
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 active:saturate-[1.1] active:brightness-[0.92] border border-black/10",
  danger:
    "text-error-500 hover:bg-error-500/10 focus-visible:bg-error-500/10 active:bg-error-500/20 bg-transparent border border-error-500/50",
};

export type ButtonVariant = keyof typeof variants;

export interface ButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant = "secondary", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          "inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus:outline-none focus-visible:border focus-visible:border-primary-500/60 focus-visible:ring-2 focus-visible:ring-primary-500/30 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          props.className,
        )}
      />
    );
  },
);

Button.displayName = "Button";
