export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "kenvix-theme";

export function readInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}
