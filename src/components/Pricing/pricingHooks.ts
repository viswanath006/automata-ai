"use client";
import { useSyncExternalStore } from 'react';
import { CurrencyCode, BillingCycle } from '@/lib/pricing/types';

type PricingState = {
  currency: CurrencyCode;
  billingCycle: BillingCycle;
};

let state: PricingState = {
  currency: 'USD',
  billingCycle: 'monthly',
};

const listeners = new Set<() => void>();

export const pricingStore = {
  getState: () => state,
  setCurrency: (currency: CurrencyCode) => {
    if (state.currency !== currency) {
      state = { ...state, currency };
      listeners.forEach(l => l());
    }
  },
  setBillingCycle: (billingCycle: BillingCycle) => {
    if (state.billingCycle !== billingCycle) {
      state = { ...state, billingCycle };
      listeners.forEach(l => l());
    }
  },
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
};

/**
 * OPTIMIZATION: Fine-grained Selectors
 * We split the subscription into primitive selectors.
 * React's useSyncExternalStore uses Object.is() to compare snapshots.
 * By returning a primitive string (currency), we guarantee the component
 * WILL NOT re-render if a different property (billingCycle) changes.
 */
export function usePricingCurrency() {
  return useSyncExternalStore(
    pricingStore.subscribe, 
    () => pricingStore.getState().currency, 
    () => pricingStore.getState().currency
  );
}

export function usePricingBillingCycle() {
  return useSyncExternalStore(
    pricingStore.subscribe, 
    () => pricingStore.getState().billingCycle, 
    () => pricingStore.getState().billingCycle
  );
}
