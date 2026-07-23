import { PricingConfig } from './types';

/**
 * Multi-dimensional Configuration Matrix.
 * 
 * This object strictly isolates business logic values (prices, tariffs, exchange rates, discounts) 
 * from the React UI components, fulfilling the hackathon architectural constraints.
 */
export const pricingConfig: PricingConfig = {
  baseCurrency: 'USD',
  annualDiscountMultiplier: 0.8, // 20% Discount
  plans: {
    starter: {
      id: 'starter',
      name: 'Starter',
      basePriceUSD: 0,
      features: ['Up to 3 AI Agents', 'Standard Support', 'Basic Workflows'],
      limits: { users: 1, storageGB: 5, apiCalls: 1000 }
    },
    professional: {
      id: 'professional',
      name: 'Professional',
      basePriceUSD: 49,
      features: ['Unlimited AI Agents', 'Priority Support', 'Advanced Workflows', 'Custom Connectors'],
      limits: { users: 5, storageGB: 50, apiCalls: 50000 }
    },
    enterprise: {
      id: 'enterprise',
      name: 'Enterprise',
      basePriceUSD: 199,
      features: ['Everything in Pro', 'Dedicated Account Manager', 'On-Premise Deployment', 'Custom SLA'],
      limits: { users: 999, storageGB: 9999, apiCalls: 9999999 }
    }
  },
  currencies: {
    USD: {
      code: 'USD',
      exchangeRate: 1.0,
      regionalMultiplier: 1.0,
      symbol: '$',
      locale: 'en-US'
    },
    EUR: {
      code: 'EUR',
      exchangeRate: 0.93, // 1 USD = 0.93 EUR
      regionalMultiplier: 1.1, // 10% Regional Tariff/Tax application
      symbol: '€',
      locale: 'de-DE' // Using standard European formatting
    },
    INR: {
      code: 'INR',
      exchangeRate: 83.5, // 1 USD = 83.5 INR
      regionalMultiplier: 0.6, // Purchasing Power Parity (PPP) adjustments
      symbol: '₹',
      locale: 'en-IN'
    }
  }
};
