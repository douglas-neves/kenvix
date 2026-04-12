import { MARKETPLACES } from "@/data/marketplaces";

export function RoadmapCard() {
  return (
    <article
      className="card mx-auto w-full lg:w-[720px]"
      aria-labelledby="roadmap-title"
    >
      <span className="eyebrow" style={{ color: "var(--color-secondary)" }}>
        {"// ROADMAP · Q3 2026"}
      </span>
      <h2
        id="roadmap-title"
        className="mt-3 font-sans text-[16px] font-semibold text-[color:var(--color-text)] lg:text-[20px]"
      >
        Em breve, nossa loja oficial também em:
      </h2>

      <ul
        className="
          mt-6 grid list-none grid-cols-3 items-center gap-4
          lg:gap-6
        "
      >
        {MARKETPLACES.map((m) => (
          <li
            key={m.id}
            className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-3"
          >
            <span
              className="
                font-sans text-[13px] font-semibold
                text-[color:var(--color-text-muted)]
                transition-colors hover:text-[color:var(--color-text)]
                lg:text-[15px]
              "
            >
              {m.name}
            </span>
            <span className="pill" aria-label={`Em breve em ${m.name}`}>
              SOON
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
