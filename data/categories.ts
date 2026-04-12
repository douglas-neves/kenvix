export type CategoryTile = "shield" | "chip" | "box";
export type CategoryIconName = "shield" | "cpu" | "package";

export type Category = {
  tag: string;
  tile: CategoryTile;
  iconName: CategoryIconName;
  title: string;
  description: string;
  chips: string[];
};

export const CATEGORIES: Category[] = [
  {
    tag: "CAT_01",
    tile: "shield",
    iconName: "shield",
    title: "EPIs Certificados",
    description:
      "Equipamentos de proteção importados com certificação CA, prontos para revenda.",
    chips: ["LUVAS NITRÍLICAS", "CAPACETES CA", "MÁSCARAS PFF2"],
  },
  {
    tag: "CAT_02",
    tile: "chip",
    iconName: "cpu",
    title: "Eletrônicos Tech",
    description:
      "Produtos tecnológicos importados direto da China, com garantia e suporte.",
    chips: ["FONES BT", "SMARTWATCHES", "CÂMERAS IP"],
  },
  {
    tag: "CAT_03",
    tile: "box",
    iconName: "package",
    title: "Utilidades & Variedades",
    description:
      "Itens importados de organização, cozinha e LED com alta margem e giro rápido.",
    chips: ["ORGANIZADORES", "COZINHA", "LED"],
  },
];
