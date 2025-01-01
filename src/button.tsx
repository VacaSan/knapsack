import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "./misc/util";

// TODO: add more variants
const variants = {
  secondary:
    "text-gray-a12 border-gray-a7 hover:border-gray-a8 hover:bg-gray-a2 focus-visible:bg-gray-a2 active:bg-gray-a3 bg-transparent data-[disabled]:border-gray-a6 data-[disabled]:text-gray-a8 data-[disabled]:text-gray-a8 data-[disabled]:border-gray-a6",
  primary:
    "bg-primary-9 hover:bg-primary-10 focus-visible:bg-primary-10 text-white active:brightness-[0.92] active:saturate-[1.1] data-[disabled]:bg-gray-a3 data-[disabled]:text-gray-a8 data-[disabled]:border-transparent",
  danger:
    "text-error-a11 hover:bg-error-a2 focus-visible:bg-error-a2 active:bg-error-a3 border-error-a7 hover:border-error-a8 bg-transparent data-[disabled]:text-gray-a8 data-[disabled]:border-gray-a6",
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
        // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
        data-disabled={props.disabled || undefined}
        className={cn(
          "inline-flex h-9 select-none items-center justify-center gap-2 whitespace-nowrap rounded-md border px-3 text-sm font-medium transition-colors focus-visible:focus-ring-primary data-[disabled]:pointer-events-none",
          variants[variant],
          props.className,
        )}
      />
    );
  },
);

Button.displayName = "Button";
