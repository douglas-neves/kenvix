import type { Metadata, Viewport } from "next";
import { Fira_Sans, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-fira-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenvix — Importação direta da China",
  description:
    "Pré-lançamento do e-commerce Kenvix. EPIs, eletrônicos e utilidades com preço de importação direta e estoque no Brasil.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${firaSans.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="kenvix-theme-init"
          src="/theme-init.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[10px] focus:bg-[color:var(--color-surface-elevated)] focus:px-4 focus:py-2 focus:text-[color:var(--color-text)] focus:outline focus:outline-2 focus:outline-[color:var(--color-primary)]"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
