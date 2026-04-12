export function IsometricMesh() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 920"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
      style={{
        color: "var(--color-primary)",
        opacity: "var(--decor-mesh-opacity)",
      }}
    >
      <defs>
        <pattern
          id="iso-mesh"
          x="0"
          y="0"
          width="80"
          height="46"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 23 L40 0 L80 23 L40 46 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#iso-mesh)" />
    </svg>
  );
}
