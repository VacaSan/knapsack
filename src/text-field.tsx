import * as React from "react";
import { cn } from "./misc/util";

const rootContext = React.createContext<boolean>(false);

function TextFieldRoot(props: React.ComponentProps<"div">) {
  return (
    <rootContext.Provider value>
      <div
        {...props}
        className={cn(
          "group inline-flex h-9 cursor-text rounded-md border border-gray-a7 bg-white/70 text-gray-12 hover:border-gray-a8 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:border-gray-a6 has-[input[aria-invalid]]:border-error-a8 has-[input:disabled]:bg-gray-a2 has-[input:disabled]:text-gray-11 has-[input:focus]:focus-ring-primary has-[input[aria-invalid]:focus]:focus-ring-error dark:bg-black/25",
          props.className,
        )}
      />
    </rootContext.Provider>
  );
}

TextFieldRoot.displayName = "TextField";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  (props, ref) => {
    const hasRoot = React.useContext(rootContext);

    const Wrapper = hasRoot ? React.Fragment : TextFieldRoot;

    return (
      <Wrapper>
        <input
          ref={ref}
          {...props}
          className="peer block flex-1 appearance-none border-0 bg-transparent px-0 text-sm text-gray-12 placeholder:text-gray-a10 first:pl-2 last:pr-2 focus:outline-none disabled:cursor-not-allowed"
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
