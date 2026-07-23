export type BillingCycle = 'monthly' | 'annual';
export type CurrencyCode = 'USD' | 'EUR' | 'INR';
export type PlanId = 'starter' | 'professional' | 'enterprise';

export interface PlanConfig {
  id: PlanId;
  name: string;
  basePriceUSD: number; // Base monthly price
  features: string[];
  limits: {
    users: number;
    storageGB: number;
    apiCalls: number;
  };
}

export interface CurrencyConfig {
  code: CurrencyCode;
  exchangeRate: number; // Exchange rate relative to USD
  regionalMultiplier: number; // Tariff/PPP adjustments based on region
  symbol: string;
  locale: string;
}

export interface PricingConfig {
  baseCurrency: CurrencyCode;
  annualDiscountMultiplier: number; // e.g. 0.8 for a 20% discount
  plans: Record<PlanId, PlanConfig>;
  currencies: Record<CurrencyCode, CurrencyConfig>;
}

export interface PriceCalculationOptions {
  planId: PlanId;
  currency: CurrencyCode;
  billingCycle: BillingCycle;
}

export interface CalculatedPrice {
  rawAmount: number;
  formattedAmount: string;
  currency: CurrencyCode;
  billingCycle: BillingCycle;
}
