import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import focusRing from "./plugins/focus-ring";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: generateScale("gray"),
      primary: generateScale("blue"),
      error: generateScale("red"),
      success: generateScale("green"),
      warning: generateScale("orange"),
    },
    extend: {
      borderColor: {
        DEFAULT: "var(--gray-a6)",
      },
      borderRadius: {
        inherit: "inherit",
      },
    },
  },
  plugins: [focusRing({ aliases: { primary: "blue", error: "red" } })],
} satisfies Config;

type ScaleKey = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type AlphaKey = `a${ScaleKey}`;

function generateScale(name: string) {
  const scale = {} as Record<ScaleKey | AlphaKey, string>;
  for (let i = 1; i <= 12; i++) {
    scale[i as ScaleKey] = `var(--${name}-${i})`;
    scale[`a${i}` as AlphaKey] = `var(--${name}-a${i})`;
  }
  return scale;
}
