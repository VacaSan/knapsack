import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        primary: colors.blue,
        error: colors.red,
      },
    },
  },
  plugins: [],
};
