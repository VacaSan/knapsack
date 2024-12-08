import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "./misc/util";

// TODO: add more variants
const variants = {
  secondary:
    "text-gray-12 bg-transparent hover:bg-graya-2 focus-visible:bg-graya-2 active:bg-graya-3 border border-graya-7 hover:border-graya-8",
  primary:
    "bg-primary-9 text-white hover:bg-primary-10 focus-visible:bg-primary-10 active:saturate-[1.1] active:brightness-[0.92] border border-blacka-2",
  danger:
    "text-error-11 bg-transparent hover:bg-errora-2 focus-visible:bg-errora-2 active:bg-errora-3 border border-errora-7 hover:border-errora-8",
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
          "inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus:outline-none focus-visible:border focus-visible:border-primarya-9 focus-visible:ring-2 focus-visible:ring-primarya-6 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          props.className,
        )}
      />
    );
  },
);

Button.displayName = "Button";
