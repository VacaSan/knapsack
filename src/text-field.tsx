import * as React from "react";
import { cn } from "./misc/util";

const rootContext = React.createContext<boolean>(false);

function TextFieldRoot(props: React.ComponentProps<"div">) {
  return (
    <rootContext.Provider value>
      <div
        {...props}
        className={cn(
          "group flex cursor-text rounded-md border border-graya-7 bg-white text-gray-12 hover:border-graya-8 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:border-graya-6 has-[input:focus]:border-primarya-9 has-[input[aria-invalid]]:border-errora-8 has-[input:disabled]:bg-graya-2 has-[input:disabled]:text-gray-11 has-[input:disabled]:opacity-50 has-[input:focus]:ring-2 has-[input[aria-invalid]:focus]:ring-2 has-[input:focus]:ring-primarya-6 has-[input[aria-invalid]:focus]:ring-errora-6",
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
          className="peer block flex-1 appearance-none border-0 bg-transparent px-0 py-2 text-sm first:pl-3 last:pr-3 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-11 disabled:placeholder:text-graya-11"
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
