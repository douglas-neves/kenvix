import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { RoadmapCard } from "@/components/RoadmapCard";
import { SectionDivider } from "@/components/SectionDivider";
import { VitrineSection } from "@/components/VitrineSection";
import { MarketplacesSection } from "@/components/MarketplacesSection";
import { ConnectSection } from "@/components/ConnectSection";
import { TelemetryBar } from "@/components/TelemetryBar";
import { TELEMETRY_CATALOG } from "@/data/telemetry";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main id="main" className="relative">
        <HeroSection />
        <SectionDivider />
        <MarketplacesSection />
        <SectionDivider />
        <VitrineSection />
        <SectionDivider />
        <ConnectSection />
        <TelemetryBar node={TELEMETRY_CATALOG.node} message={TELEMETRY_CATALOG.message} />
      </main>
    </>
  );
}
