import { ArrowRight } from "lucide-react";
import { PILLARS } from "@/data/pillars";
import { PillarCard } from "./PillarCard";
import { CircuitTrace } from "./decorations/CircuitTrace";

export function ConnectSection() {
  return (
    <section
      id="operacao"
      aria-labelledby="connect-title"
      className="
        px-10 py-12
        md:mx-auto md:max-w-[720px] md:px-8 md:py-16
        lg:max-w-6xl lg:py-24
        xl:px-12
      "
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <span className="eyebrow" style={{ color: "var(--color-secondary)" }}>
            {"// COMO OPERAMOS"}
          </span>
          <h2
            id="connect-title"
            className="
              mt-4 font-sans font-bold tracking-[-0.015em] text-[color:var(--color-text)]
              text-[32px] leading-[1.1]
              lg:text-[40px] lg:leading-[1.05] lg:tracking-[-0.02em] lg:font-extrabold
            "
          >
            <span className="block md:inline lg:block">Da China</span>{" "}
            <span className="block md:inline lg:block">aos marketplaces.</span>
          </h2>
          <p className="mt-4 max-w-[320px] font-sans text-[14px] leading-[1.5] text-[color:var(--color-text-muted)] md:max-w-[480px] lg:max-w-none">
            Importação direta e presença em todos os principais marketplaces do Brasil.
          </p>

          <div className="mt-8 hidden lg:block">
            <a
              id="orcamento"
              href="https://wa.me/5511999999999?text=Quero%20solicitar%20or%C3%A7amento%20de%20lote"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-[320px]"
            >
              Solicitar orçamento de lote
              <ArrowRight aria-hidden className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-[color:var(--color-text-muted)]">
              Resposta em até 1 dia útil · B2B / Atacado
            </p>
          </div>
        </div>

        <div className="relative mt-10 lg:col-span-7 lg:mt-0">
          <CircuitTrace
            direction="vertical"
            className="absolute left-0 top-0 h-full lg:hidden"
          />
          <CircuitTrace
            direction="horizontal"
            className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 lg:block xl:[--circuit-shimmer-enabled:1]"
          />

          <ul
            className="
              relative z-10 flex list-none flex-col gap-4 pl-6
              lg:grid lg:grid-cols-3 lg:gap-6 lg:pl-0
            "
          >
            {PILLARS.map((p) => (
              <li key={p.number}>
                <PillarCard {...p} />
              </li>
            ))}
          </ul>
        </div>

        <div id="contato" className="mt-10 flex flex-col items-center lg:hidden">
          <a
            href="https://wa.me/5511999999999?text=Quero%20solicitar%20or%C3%A7amento%20de%20lote"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-[360px]"
          >
            Solicitar orçamento de lote
            <ArrowRight aria-hidden className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <p className="mt-4 text-center font-mono text-[10px] font-medium uppercase tracking-[0.04em] text-[color:var(--color-text-muted)]">
            Resposta em até 1 dia útil · B2B / Atacado
          </p>
        </div>
      </div>
    </section>
  );
}
