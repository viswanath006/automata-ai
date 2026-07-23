"use client";

import { usePricingCurrency, usePricingBillingCycle } from './pricingHooks';
import { createPricingEngine } from '@/lib/pricing/pricingCalculator';
import { pricingConfig } from '@/lib/pricing/pricingConfig';
import { PlanId } from '@/lib/pricing/types';
import { useMemo } from 'react';

const engine = createPricingEngine(pricingConfig);

export default function PriceDisplay({ planId }: { planId: PlanId }) {
  // Safe subscription to both primitive values
  const currency = usePricingCurrency();
  const billingCycle = usePricingBillingCycle();

  const price = useMemo(() => {
    return engine.calculate({ planId, currency, billingCycle });
  }, [planId, currency, billingCycle]);

  return (
    <div className="flex items-baseline gap-1 font-mono transition-micro">
      <span 
        className={`tracking-tight text-heading transition-all duration-300 ${
          price.formattedAmount.length > 8 
            ? 'text-h2' 
            : price.formattedAmount.length > 5 
              ? 'text-h1' 
              : 'text-display'
        }`}
      >
        {price.formattedAmount}
      </span>
      <span className="text-small text-muted">
        /mo
      </span>
    </div>
  );
}
