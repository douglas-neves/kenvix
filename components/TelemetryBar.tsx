type TelemetryBarProps = {
  node?: string;
  message?: string;
};

export function TelemetryBar({
  node = "01",
  message = "LAT -23.55 · LON -46.63 · HUB SÃO PAULO · STATUS: READY",
}: TelemetryBarProps) {
  return (
    <footer
      aria-label="Status telemetry"
      className="
        flex h-6 items-center justify-center gap-2 px-10
        font-mono text-[10px] font-medium uppercase tracking-[0.04em]
        text-[color:var(--color-text-muted)]
        border-t border-[color:var(--color-border)]
        md:px-8 xl:px-12
      "
    >
      <span className="hidden md:inline">NODE {node} · </span>
      <span>{message}</span>
    </footer>
  );
}
