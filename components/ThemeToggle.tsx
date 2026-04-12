"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { safeSetItem } from "@/lib/localStorage";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    setTheme(attr === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggle() {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      safeSetItem(THEME_STORAGE_KEY, next);
      return next;
    });
  }

  const baseClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] transition-colors duration-150 hover:text-[color:var(--color-primary)] hover:border-[color:var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-primary)] focus-visible:outline-offset-2";

  if (theme === null) {
    return (
      <button
        type="button"
        aria-label="Alternar tema"
        className={baseClass}
        suppressHydrationWarning
      >
        <span className="h-5 w-5" aria-hidden />
      </button>
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Alternar para tema escuro" : "Alternar para tema claro"}
      aria-pressed={isLight}
      className={baseClass}
    >
      {isLight ? (
        <Moon aria-hidden className="h-5 w-5" strokeWidth={1.5} />
      ) : (
        <Sun aria-hidden className="h-5 w-5" strokeWidth={1.5} />
      )}
    </button>
  );
}
