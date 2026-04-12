import { CATEGORIES } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";

export function VitrineSection() {
  return (
    <section
      id="produtos"
      aria-labelledby="vitrine-title"
      className="
        px-10 py-12
        md:mx-auto md:max-w-[720px] md:px-8 md:py-16
        lg:max-w-6xl lg:py-24
        xl:px-12
      "
    >
      <div className="text-center">
        <span className="eyebrow">{"// O QUE IMPORTAMOS"}</span>
        <h2
          id="vitrine-title"
          className="
            mt-4 font-sans font-bold tracking-[-0.015em]
            text-[32px] leading-[1.1]
            md:text-[32px]
            lg:text-[40px] lg:leading-[1.05] lg:tracking-[-0.02em] lg:font-extrabold
          "
        >
          <span className="block md:inline">Três frentes.</span>{" "}
          <span className="block md:inline">
            Uma só <span className="underline-accent">importação</span>.
          </span>
        </h2>
      </div>

      <ul
        className="
          mt-10 grid list-none grid-cols-1 gap-6
          md:grid-cols-2
          lg:grid-cols-3 lg:mt-12
        "
      >
        {CATEGORIES.map((cat, i) => (
          <li
            key={cat.tag}
            className={i === 2 ? "md:col-span-2 lg:col-span-1" : undefined}
          >
            <CategoryCard {...cat} />
          </li>
        ))}
      </ul>
    </section>
  );
}
