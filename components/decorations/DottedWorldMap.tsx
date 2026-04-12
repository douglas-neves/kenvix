export function DottedWorldMap() {
  return (
    <svg
      className="absolute right-0 top-0 hidden h-full w-1/2 md:block lg:w-[45%]"
      viewBox="0 0 720 920"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      focusable="false"
      style={{
        color: "var(--color-primary)",
        opacity: "var(--decor-map-opacity)",
      }}
    >
      <defs>
        <pattern
          id="world-dots"
          x="0"
          y="0"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#world-dots)" />
    </svg>
  );
}
