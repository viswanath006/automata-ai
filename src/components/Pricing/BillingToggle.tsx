"use client";

import { usePricingBillingCycle, pricingStore } from './pricingHooks';

export default function BillingToggle() {
  // Uses fine-grained selector. Will NOT re-render if currency changes!
  const billingCycle = usePricingBillingCycle();
  const isAnnual = billingCycle === 'annual';

  return (
    <fieldset 
      className="relative flex items-center p-1 bg-surface rounded-full border border-border-subtle shadow-sm m-0 border-0"
      aria-label="Select billing cycle"
    >
      {/* Animated Pill Background via pure CSS transform */}
      <div 
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-main rounded-full shadow-sm transition-layout border border-border-subtle pointer-events-none"
        style={{ transform: isAnnual ? 'translateX(100%)' : 'translateX(0)' }}
        aria-hidden="true"
      />
      
      {/* OPTIMIZATION: Native inputs for flawless accessibility & keyboard navigation */}
      <label className="relative z-10 w-32 cursor-pointer">
        <input 
          type="radio" 
          name="billing" 
          value="monthly" 
          checked={!isAnnual}
          onChange={() => pricingStore.setBillingCycle('monthly')}
          className="sr-only peer"
        />
        <div className={`py-2 text-center rounded-full text-small font-medium transition-micro peer-focus-visible:ring-2 peer-focus-visible:ring-primary ${!isAnnual ? 'text-heading' : 'text-muted hover:text-heading'}`}>
          Monthly
        </div>
      </label>
      
      <label className="relative z-10 w-32 cursor-pointer flex items-center justify-center gap-1.5">
        <input 
          type="radio" 
          name="billing" 
          value="annual" 
          checked={isAnnual}
          onChange={() => pricingStore.setBillingCycle('annual')}
          className="sr-only peer"
        />
        <div className={`py-2 w-full flex items-center justify-center gap-1.5 rounded-full text-small font-medium transition-micro peer-focus-visible:ring-2 peer-focus-visible:ring-primary ${isAnnual ? 'text-heading' : 'text-muted hover:text-heading'}`}>
          Annual
          <span className={`px-1.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wide transition-micro ${isAnnual ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-surface-hover text-muted'}`}>
            Save 20%
          </span>
        </div>
      </label>
    </fieldset>
  );
}
