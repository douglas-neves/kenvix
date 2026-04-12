import { Ship, Warehouse, Headphones, type LucideIcon } from "lucide-react";
import type { Pillar, PillarIconName } from "@/data/pillars";

const ICONS: Record<PillarIconName, LucideIcon> = {
  ship: Ship,
  warehouse: Warehouse,
  headphones: Headphones,
};

export function PillarCard({ number, title, description, iconName }: Pillar) {
  const Icon = ICONS[iconName];
  return (
    <article className="pillar-card h-full">
      <header className="flex items-start justify-between">
        <span
          aria-label={`Pilar ${number}`}
          className="font-mono text-[12px] font-medium tabular-nums text-[color:var(--color-primary)]"
        >
          {number}
        </span>
        <Icon
          aria-hidden
          className="h-6 w-6 text-[color:var(--color-primary)]"
          strokeWidth={1.5}
        />
      </header>
      <h3 className="font-sans text-[17px] font-semibold leading-[1.3] tracking-[-0.005em] text-[color:var(--color-text)]">
        {title}
      </h3>
      <p className="font-sans text-[13px] leading-[1.5] text-[color:var(--color-text-muted)]">
        {description}
      </p>
    </article>
  );
}
