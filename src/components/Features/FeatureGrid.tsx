import { featuresData } from "./features";
import FeatureCard from "./FeatureCard";

export default function FeatureGrid() {
  return (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(240px,auto)] gap-6 max-w-6xl mx-auto w-full">
      {featuresData.map((feature) => (
        <FeatureCard key={`grid-${feature.id}`} feature={feature} />
      ))}
    </div>
  );
}
