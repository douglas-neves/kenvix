import { ArrowRight, Shield, Cpu, Package, type LucideIcon } from "lucide-react";
import type { Category, CategoryIconName } from "@/data/categories";

const ICONS: Record<CategoryIconName, LucideIcon> = {
  shield: Shield,
  cpu: Cpu,
  package: Package,
};

export function CategoryCard({ tag, title, description, chips, iconName, tile }: Category) {
  const Icon = ICONS[iconName];
  const whatsappHref = `https://wa.me/5511999999999?text=${encodeURIComponent(
    `Quero saber sobre ${title}`
  )}`;
  return (
    <article className="card category-card h-full">
      <header className="flex items-start justify-between">
        <span className={`icon-tile icon-tile--${tile}`} aria-hidden>
          <Icon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.5} />
        </span>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-[color:var(--color-text-muted)]">
          {tag}
        </span>
      </header>

      <h3 className="font-sans text-[20px] font-semibold leading-[1.25] tracking-[-0.005em] text-[color:var(--color-text)]">
        {title}
      </h3>

      <p className="font-sans text-[13px] leading-[1.5] text-[color:var(--color-text-muted)]">
        {description}
      </p>

      <ul
        aria-label={`Exemplos de ${title}`}
        className="flex list-none flex-wrap gap-2"
      >
        {chips.map((c) => (
          <li key={c} className="pill">
            {c}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-2">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-inline"
          aria-label={`Consultar ${title} via WhatsApp`}
        >
          Consultar via WhatsApp
          <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </article>
  );
}
