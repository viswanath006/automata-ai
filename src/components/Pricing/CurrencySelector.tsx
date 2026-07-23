"use client";

import { usePricingCurrency, pricingStore } from './pricingHooks';
import { pricingConfig } from '@/lib/pricing/pricingConfig';
import { CurrencyCode } from '@/lib/pricing/types';
import { useCallback } from 'react';
import Icon from '@/components/shared/Icon';

const currencies = Object.keys(pricingConfig.currencies) as CurrencyCode[];

export default function CurrencySelector() {
  // Uses fine-grained selector. Will NOT re-render if billing cycle changes!
  const currency = usePricingCurrency();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    pricingStore.setCurrency(e.target.value as CurrencyCode);
  }, []);

  return (
    <div className="relative inline-flex items-center group">
      <Icon name="cube-16-solid" className="absolute left-3 w-4 h-4 text-muted pointer-events-none group-focus-within:text-primary transition-micro" />
      <select
        value={currency}
        onChange={handleChange}
        aria-label="Select currency"
        className="appearance-none bg-surface border border-border-subtle text-small font-sans font-medium text-heading rounded-full pl-9 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-micro cursor-pointer hover:bg-surface-hover shadow-sm"
      >
        {currencies.map(c => (
          <option key={c} value={c}>
            {c} ({pricingConfig.currencies[c].symbol})
          </option>
        ))}
      </select>
      <Icon name="chevron-down" className="absolute right-3 w-4 h-4 text-muted pointer-events-none group-hover:text-heading transition-micro" />
    </div>
  );
}
