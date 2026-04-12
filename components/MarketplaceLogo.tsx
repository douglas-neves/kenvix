import React from "react";
import Image from "next/image";

type MarketplaceLogoProps = {
  id: string;
  className?: string;
};

const logoMap: Record<string, { src: string; alt: string }> = {
  amazon: { src: "/amazon.webp", alt: "Amazon" },
  ml: { src: "/mercado-livre.png", alt: "Mercado Livre" },
  shopee: { src: "/shopee.png", alt: "Shopee" },
  magalu: { src: "/magalu.png", alt: "Magalu" },
  tiktok: { src: "/tik-tok-shop.png", alt: "TikTok Shopping" },
};

export function MarketplaceLogo({ id, className }: MarketplaceLogoProps) {
  const logo = logoMap[id] ?? { src: "", alt: id };

  if (!logo.src) {
    return (
      <span
        className={`${className} inline-flex items-center justify-center bg-slate-200`}
        aria-label={logo.alt}
        role="img"
      >
        {id}
      </span>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden inline-flex`}>
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 44px, (max-width: 1024px) 44px, 44px"
      />
    </div>
  );
}

