import { pricingConfig } from '@/lib/pricing/pricingConfig';
import { PlanId } from '@/lib/pricing/types';
import PricingCard from './PricingCard';

export default function PricingGrid() {
  const planIds = Object.keys(pricingConfig.plans) as PlanId[];
  
  return (
    // OPTIMIZATION: Implemented horizontal scroll-snap on tablets to prevent awkward card wrapping.
    // Falls back to a standard 3-column grid on desktop.
    <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full relative z-10 md:overflow-x-auto md:snap-x md:snap-mandatory pb-4 md:pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {planIds.map(planId => (
        <div key={planId} className="md:snap-center md:min-w-[350px] lg:min-w-0 flex-1 flex">
          <PricingCard 
            plan={pricingConfig.plans[planId]} 
            isPopular={planId === 'professional'} 
          />
        </div>
      ))}
    </div>
  );
}
