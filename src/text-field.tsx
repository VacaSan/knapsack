import * as React from "react";
import { cn } from "./misc/util";

const rootContext = React.createContext<boolean>(false);

function TextFieldRoot(props: React.ComponentProps<"div">) {
  return (
    <rootContext.Provider value>
      <div
        {...props}
        className={cn(
          "group flex cursor-text rounded-md border border-gray-950/20 bg-white text-gray-950 hover:border-gray-950/30 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:border-gray-950/20 has-[input:focus]:border-primary-500/60 has-[input[aria-invalid]]:border-error-500/60 has-[input:disabled]:bg-gray-950/5 has-[input:disabled]:text-gray-500 has-[input:disabled]:opacity-50 has-[input:focus]:ring-2 has-[input[aria-invalid]:focus]:ring-2 has-[input:focus]:ring-primary-500/30 has-[input[aria-invalid]:focus]:ring-error-500/30",
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
          className="peer block flex-1 appearance-none border-0 bg-transparent px-0 py-2 text-sm first:pl-3 last:pr-3 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-500 disabled:placeholder:text-gray-500"
        />
      </Wrapper>
    );
  },
);
Input.displayName = "TextField.Input";

function Slot({ children }: { children: React.ReactNode }) {
  return <div className="flex shrink-0 items-center px-3">{children}</div>;
}

Slot.displayName = "TextField.Slot";

export const TextField = Object.assign(TextFieldRoot, { Input, Slot });
