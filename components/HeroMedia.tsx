"use client";
import { useEffect, useRef } from "react";

type HeroMediaProps = {
  src: string;
  poster?: string;
  variant?: "card" | "bleed";
  className?: string;
};

export function HeroMedia({ src, poster, variant = "card", className }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        video.pause();
        video.currentTime = 0;
        video.removeAttribute("autoplay");
      } else {
        video.play().catch(() => {
          /* autoplay may be blocked; poster is still shown */
        });
      }
    };

    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const classes = `hero-media${variant === "bleed" ? " hero-media--bleed" : ""}${
    className ? ` ${className}` : ""
  }`;

  return (
    <div className={classes} aria-hidden>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}
