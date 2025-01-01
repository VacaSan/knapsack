import * as React from "react";
import { cn } from "./misc/util";

// TODO: update paddings
const sizes = {
  sm: "h-7 text-xs",
  md: "h-8 text-sm",
  lg: "h-10 text-sm",
} as const;

export type TextFieldSize = keyof typeof sizes;

const rootContext = React.createContext<boolean>(false);

export interface TextFieldRootProps extends React.ComponentProps<"div"> {
  size?: TextFieldSize;
}

function TextFieldRoot({ size = "md", ...props }: TextFieldRootProps) {
  return (
    <rootContext.Provider value>
      <div
        {...props}
        className={cn(
          "group inline-flex cursor-text rounded-md border border-gray-a7 bg-white/70 text-gray-12 hover:border-gray-a8 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:border-gray-a6 has-[input[aria-invalid]]:border-error-a8 has-[input:disabled]:bg-gray-a2 has-[input:disabled]:text-gray-11 has-[input:focus]:focus-ring-primary has-[input[aria-invalid]:focus]:focus-ring-error dark:bg-black/25",
          sizes[size],
          props.className,
        )}
      />
    </rootContext.Provider>
  );
}

TextFieldRoot.displayName = "TextField";

export interface TextFieldInputProps
  extends Omit<React.ComponentProps<"input">, "size"> {
  size?: TextFieldSize;
}

const Input = React.forwardRef<HTMLInputElement, TextFieldInputProps>(
  ({ size, ...props }, ref) => {
    const hasRoot = React.useContext(rootContext);

    const Wrapper = hasRoot ? React.Fragment : TextFieldRoot;

    const wrapperProps = hasRoot ? {} : { size };

    if (hasRoot && size) {
      console.warn(
        `TextField.Input: The "size" prop is ignored when used inside a TextField`,
      );
    }

    return (
      <Wrapper {...wrapperProps}>
        <input
          ref={ref}
          {...props}
          className="peer block flex-1 appearance-none border-0 bg-transparent px-0 text-inherit text-gray-12 placeholder:text-gray-a10 first:pl-2 last:pr-2 focus:outline-none disabled:cursor-not-allowed"
        />
      </Wrapper>
    );
  },
);
Input.displayName = "TextField.Input";

function Slot({ children }: { children: React.ReactNode }) {
  return <div className="flex shrink-0 items-center px-2">{children}</div>;
}

Slot.displayName = "TextField.Slot";

export const TextField = Object.assign(TextFieldRoot, { Input, Slot });
