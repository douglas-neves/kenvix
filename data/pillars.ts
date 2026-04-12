export type PillarIconName = "ship" | "warehouse" | "headphones";

export type Pillar = {
  number: string;
  title: string;
  description: string;
  iconName: PillarIconName;
};

export const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Preços de Importação",
    description:
      "Compra direta na China, sem intermediários, repassando o melhor câmbio para você.",
    iconName: "ship",
  },
  {
    number: "02",
    title: "Estoque no Brasil",
    description:
      "Produtos disponíveis em SP para entrega imediata, sem espera aduaneira.",
    iconName: "warehouse",
  },
  {
    number: "03",
    title: "Suporte Especializado",
    description:
      "Atendimento humanizado via WhatsApp com especialistas em importação.",
    iconName: "headphones",
  },
];
