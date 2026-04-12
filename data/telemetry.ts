export type TelemetryMessage = {
  node: string;
  message: string;
};

export const TELEMETRY_HERO: TelemetryMessage = {
  node: "01",
  message: "LAT -23.55 · LON -46.63 · HUB SÃO PAULO · STATUS: READY",
};

export const TELEMETRY_CATALOG: TelemetryMessage = {
  node: "02",
  message: "CATALOG SYNC OK · UPDATED 2026-04-09",
};
