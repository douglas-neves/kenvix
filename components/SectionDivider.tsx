export function SectionDivider() {
  return (
    <div
      aria-hidden
      role="presentation"
      className="mx-auto h-px w-full max-w-6xl"
      style={{
        background: "color-mix(in srgb, var(--color-primary) 40%, transparent)",
      }}
    />
  );
}
