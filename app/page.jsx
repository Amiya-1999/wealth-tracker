import HeroSection from "@/components/hero";
import InsightsSection from "@/components/insights";

export default function Home() {
  return (
    <div className="pt-36 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 px-3">
      <HeroSection />
      <InsightsSection />
    </div>
  );
}
