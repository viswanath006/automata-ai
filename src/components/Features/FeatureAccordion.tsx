import { featuresData } from "./features";
import AccordionItem from "./AccordionItem";

export default function FeatureAccordion() {
  return (
    <div className="md:hidden flex flex-col gap-4 max-w-2xl mx-auto w-full">
      {featuresData.map((feature) => (
        <AccordionItem key={`acc-${feature.id}`} feature={feature} />
      ))}
    </div>
  );
}
