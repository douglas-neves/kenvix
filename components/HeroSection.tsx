import { HeroMedia } from "./HeroMedia";
import { SubscribeSlot } from "./SubscribeSlot";
import { DollarSign, Truck, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-headline"
      className="
        relative isolate overflow-hidden
        px-10 md:px-8
        pt-24 pb-28
        md:pt-28 md:pb-20
        lg:pt-28 lg:pb-24
        xl:pt-32 xl:pb-28 xl:px-12
      "
    >
      {/* Full-bleed video background */}
      <div className="absolute inset-0 -z-10">
        <HeroMedia
          src="/hero-video-desktop.mp4"
          variant="bleed"
        />
      </div>

      {/* Content container */}
      <div className="hero-on-media mx-auto w-full max-w-[640px] lg:max-w-6xl flex flex-col items-center justify-center gap-12 py-12">
        <div className="flex flex-col items-center text-center w-full">
          {/* LEFT — copy + CTA */}
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">{"// PREÇOS REALMENTE COMPETITIVOS"}</span>

            <h1
              id="hero-headline"
              className="
                mt-6
                font-sans font-extrabold leading-[1.05] tracking-[-0.02em]
                text-[40px]
                md:text-[46px]
                lg:text-[52px] lg:leading-[1.02]
                xl:text-[60px]
              "
            >
              Preço de <span className="gradient-word">importação.</span> e
              <br />
              entrega de <span className="gradient-word">líder.</span>
            </h1>

            <p
              className="
                mt-6
                font-sans text-[15px] leading-[1.6] text-[color:var(--color-text-muted)]
                max-w-[340px]
                md:max-w-[480px] md:text-[16px]
                lg:max-w-[440px] lg:text-[17px]
              "
            >
              Garantimos a melhor margem do mercado em produtos selecionados. 
              Nosso e-commerce está chegando, mas nossa qualidade já está disponível em todos os marketplaces.
            </p>

            {/* Benefits list to fill space */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[color:var(--color-primary)] rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sans font-semibold text-[color:var(--color-primary)] text-lg">Economia Garantida</h3>
                <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">Preços até 50% abaixo do mercado tradicional.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[color:var(--color-primary)] rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sans font-semibold text-[color:var(--color-primary)] text-lg">Entrega Rápida</h3>
                <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">Produtos em estoque no Brasil para entrega imediata.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[color:var(--color-primary)] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sans font-semibold text-[color:var(--color-primary)] text-lg">Qualidade Certificada</h3>
                <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">EPIs e eletrônicos com certificação e garantia.</p>
              </div>
            </div>

            <SubscribeSlot />

            {/* Trust counter — social proof below CTA */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <span
                className="trust-counter"
                role="status"
                aria-live="polite"
              >
                <span className="pulse-dot" aria-hidden />
                <span>
                  <strong>342</strong> pessoas já na lista
                </span>
                <span aria-hidden>·</span>
                <span>PRÉ-LANÇAMENTO</span>
              </span>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-[color:var(--color-text-muted)]">
                Sem spam. Só o aviso de abertura.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="w-full max-w-4xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[color:var(--color-primary)]">50%</div>
              <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">Economia em relação ao mercado</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[color:var(--color-primary)]">24h</div>
              <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">Entrega expressa disponível</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[color:var(--color-primary)]">1000+</div>
              <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">Produtos em catálogo</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[color:var(--color-primary)]">5</div>
              <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">Marketplaces integrados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
