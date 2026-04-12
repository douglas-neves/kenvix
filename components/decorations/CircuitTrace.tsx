type CircuitTraceProps = {
  direction: "vertical" | "horizontal";
  className?: string;
};

export function CircuitTrace({ direction, className }: CircuitTraceProps) {
  if (direction === "vertical") {
    return (
      <svg
        className={className}
        width="12"
        height="100%"
        viewBox="0 0 12 400"
        preserveAspectRatio="none"
        aria-hidden
        focusable="false"
      >
        <line
          x1="6"
          y1="0"
          x2="6"
          y2="400"
          stroke="var(--circuit-stroke)"
          strokeWidth="1"
          className="circuit-path"
        />
        {[20, 200, 380].map((y) => (
          <rect
            key={y}
            x="2"
            y={y - 4}
            width="8"
            height="8"
            fill="var(--circuit-node)"
            transform={`rotate(45 6 ${y})`}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      className={className}
      height="12"
      width="100%"
      viewBox="0 0 1200 12"
      preserveAspectRatio="none"
      aria-hidden
      focusable="false"
    >
      <line
        x1="0"
        y1="6"
        x2="1200"
        y2="6"
        stroke="var(--circuit-stroke)"
        strokeWidth="1"
        className="circuit-path circuit-path--animate"
      />
      {[200, 600, 1000].map((x) => (
        <rect
          key={x}
          x={x - 4}
          y="2"
          width="8"
          height="8"
          fill="var(--circuit-node)"
          transform={`rotate(45 ${x} 6)`}
        />
      ))}
    </svg>
  );
}
