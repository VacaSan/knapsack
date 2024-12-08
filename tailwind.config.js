import tailwindcssRadixColors from "tailwindcss-radix-colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [
    tailwindcssRadixColors({
      priority: "radix-first",
      aliases: { blue: "primary", red: "error", gray: "gray" },
    }),
  ],
};
