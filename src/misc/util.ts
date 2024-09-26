type Falsy = false | null | undefined;

export const cn = (...classes: (string | Falsy)[]) =>
  classes.filter(Boolean).join(" ");
