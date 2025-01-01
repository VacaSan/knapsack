import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "./misc/util";

const sizes = {
  sm: "h-7 px-2 text-xs gap-1",
  md: "h-8 px-3 text-sm gap-2",
  lg: "h-10 px-4 text-sm gap-2",
} as const;

// TODO: add more variants
const variants = {
  secondary:
    "text-gray-a12 border-gray-a7 hover:border-gray-a8 hover:bg-gray-a2 focus-visible:bg-gray-a2 active:bg-gray-a3 bg-transparent data-[disabled]:border-gray-a6 data-[disabled]:text-gray-a8 data-[disabled]:text-gray-a8 data-[disabled]:border-gray-a6",
  primary:
    "bg-primary-9 hover:bg-primary-10 focus-visible:bg-primary-10 text-white active:brightness-[0.92] active:saturate-[1.1] data-[disabled]:bg-gray-a3 data-[disabled]:text-gray-a8 data-[disabled]:border-transparent",
  danger:
    "text-error-a11 hover:bg-error-a2 focus-visible:bg-error-a2 active:bg-error-a3 border-error-a7 hover:border-error-a8 bg-transparent data-[disabled]:text-gray-a8 data-[disabled]:border-gray-a6",
  ghost:
    "text-gray-a12 hover:bg-gray-a2 focus-visible:bg-gray-a2 active:bg-gray-a3 border-transparent bg-transparent data-[disabled]:text-gray-a8",
} as const;

export type ButtonSize = keyof typeof sizes;

export type ButtonVariant = keyof typeof variants;

export interface ButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, size = "md", variant = "secondary", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        {...props}
        // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
        data-disabled={props.disabled || undefined}
        className={cn(
          "inline-flex select-none items-center justify-center whitespace-nowrap rounded-md border font-medium transition-colors focus-visible:focus-ring-primary data-[disabled]:pointer-events-none",
          sizes[size],
          variants[variant],
          props.className,
        )}
      />
    );
  },
);

Button.displayName = "Button";
