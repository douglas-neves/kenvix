"use client";

import { useEffect, useRef } from "react";
import { MARKETPLACES } from "@/data/marketplaces";
import { MarketplaceLogo } from "./MarketplaceLogo";

export function MarketplacesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const maxPlaybackSeconds = 1.5;
    let rafId: number | null = null;

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const updateVideoTime = () => {
      const rect = section.getBoundingClientRect();
      if (!video.duration || Number.isNaN(video.duration)) {
        return;
      }

      const effectiveDuration = Math.min(video.duration, maxPlaybackSeconds);
      const progress = clamp(
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        0,
        1,
      );
      const targetTime = effectiveDuration * progress;

      video.pause();
      if (!Number.isFinite(targetTime)) return;
      video.currentTime = targetTime;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateVideoTime();
        rafId = null;
      });
    };

    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.addEventListener("loadedmetadata", updateVideoTime);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateVideoTime();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", updateVideoTime);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="marketplaces-title"
      className="px-10 pt-10 pb-12 md:px-8 md:pt-14 md:pb-16 lg:pt-20 lg:pb-24 xl:pt-20 xl:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface-elevated)] shadow-[0_28px_85px_-45px_rgba(15,23,42,0.5)]">
              <div className="relative aspect-[16/9] w-full bg-black">
                <video
                  ref={videoRef}
                  src="/marketplaces-hub.mp4"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
            <span className="eyebrow" style={{ color: "var(--color-secondary)" }}>
              {"// MARKETPLACES"}
            </span>
            <h2
              id="marketplaces-title"
              className="mt-3 font-sans text-[22px] font-semibold text-[color:var(--color-text)] lg:text-[28px]"
            >
              Presente em todos os principais canais do varejo digital.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[color:var(--color-text-muted)] lg:text-[16px]">
              Já estamos presentes em todos os principais marketplaces do Brasil, com vendas
              ativas em Mercado Livre, Shopee, Amazon, Magalu e TikTok Shopping.
            </p>
          </div>

          <div className="grid gap-6">
            

            <div className="rounded-[2rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface-elevated)] p-5 shadow-[0_28px_85px_-45px_rgba(15,23,42,0.5)] sm:p-6 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {MARKETPLACES.map((marketplace) => (
                  <article
                    key={marketplace.id}
                    className="flex items-center gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[color:var(--color-primary)]"
                  >
                    <span className="flex h-14 w-14 flex-none items-center justify-center rounded-3xl text-[color:var(--color-text)] shadow-sm">
                      <MarketplaceLogo id={marketplace.id} className="h-11 w-11 rounded-2xl" />
                    </span>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-[color:var(--color-text)] lg:text-[15px]">
                        {marketplace.name}
                      </h3>
                      <p className="mt-1 text-[13px] text-[color:var(--color-text-muted)]">
                        Principal canal de compra para milhões de consumidores.
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
