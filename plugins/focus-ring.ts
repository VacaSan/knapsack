import plugin from "tailwindcss/plugin";

const NAME = "focus-ring";

export type FocusRingOptions = {
  aliases?: Record<string, string>;
};

export default plugin.withOptions(function (options: FocusRingOptions = {}) {
  return function focusRingPlugin({ addUtilities, theme }) {
    const aliases = options.aliases ?? {};
    const colors = theme("colors") as Record<string, Record<string, string>>;
    const interactiveClasses: Record<string, Record<string, string>> = {};

    Object.keys(colors).forEach((color) => {
      const colorClass = `${NAME}-${color}`;
      const colorAlias = aliases[color] ?? color;

      interactiveClasses[`.${colorClass}`] = {
        outline: "none",
        borderWidth: "1px",
        borderColor: `var(--${colorAlias}-a9)`,
        "--tw-ring-color": `var(--${colorAlias}-a6)`,
        "--tw-ring-offset-shadow":
          "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      };
    });

    addUtilities(interactiveClasses);
  };
});
