"use client";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import LogoLight from "./LogoLight";
import LogoDark from "./LogoDark";

const NAV_ITEMS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Operação", href: "#operacao" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_HREF =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20conversar%20com%20a%20Kenvix";

export function TopBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const updateTheme = () => {
      const attr = document.documentElement.getAttribute('data-theme');
      setTheme(attr === 'light' ? 'light' : 'dark');
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="topbar fixed inset-x-0 top-0 z-40 h-16 md:h-[72px] lg:h-20"
      role="banner"
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-10 md:px-8 xl:px-12">
        <a
          href="/"
          className="flex items-center gap-3 self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-primary)] focus-visible:outline-offset-4"
        >
          {theme === 'light' ? <LogoLight className="h-10 w-auto md:h-12" /> : <LogoDark className="h-10 w-auto md:h-12" />}
        </a>

        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[14px] font-medium text-[color:var(--color-text-muted)] transition-colors duration-150 hover:text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-primary)] focus-visible:outline-offset-4"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary hidden lg:inline-flex"
          >
            <MessageCircle aria-hidden className="h-4 w-4" strokeWidth={1.5} />
            Falar no WhatsApp
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="btn-secondary"
          >
            {open ? (
              <X aria-hidden className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden className="h-4 w-4" strokeWidth={1.5} />
            )}
            <span>{open ? "FECHAR" : "MENU"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 flex flex-col gap-1 px-10 py-6 md:hidden bg-[color:var(--color-surface)] border-b border-[color:var(--color-border)]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center font-sans text-[16px] font-medium text-[color:var(--color-text)]"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
