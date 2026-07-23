import { PricingConfig, PriceCalculationOptions, CalculatedPrice } from './types';

export class PricingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PricingError';
  }
}

/**
 * Performance Optimization: 
 * Intl.NumberFormat instantiation is notoriously slow in JS.
 * We memoize instances to guarantee ultra-fast formatting during rapid React renders.
 */
const formatterCache = new Map<string, Intl.NumberFormat>();

function getFormatter(locale: string, currency: string, maximumFractionDigits: number): Intl.NumberFormat {
  const cacheKey = `${locale}-${currency}-${maximumFractionDigits}`;
  if (!formatterCache.has(cacheKey)) {
    formatterCache.set(cacheKey, new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits,
      minimumFractionDigits: maximumFractionDigits
    }));
  }
  return formatterCache.get(cacheKey)!;
}

/**
 * Factory Pattern API:
 * Encapsulates the configuration matrix so the UI doesn't have to pass it into every calculation call.
 */
export function createPricingEngine(config: PricingConfig) {
  if (!config) throw new PricingError('Pricing configuration is required.');

  // Extensibility: Validation derives from the config keys dynamically. 
  // Removes the need for brittle, hardcoded arrays in a constants.ts file.
  function validateOptions(options: PriceCalculationOptions): void {
    if (!(options.planId in config.plans)) throw new PricingError(`Unknown plan: ${options.planId}`);
    if (!(options.currency in config.currencies)) throw new PricingError(`Unknown currency: ${options.currency}`);
    if (options.billingCycle !== 'monthly' && options.billingCycle !== 'annual') {
      throw new PricingError(`Unknown billing cycle: ${options.billingCycle}`);
    }
  }

  return {
    calculate(options: PriceCalculationOptions): CalculatedPrice {
      validateOptions(options);

      const plan = config.plans[options.planId];
      const currencyInfo = config.currencies[options.currency];

      // Float Issue Fix: Lift base numbers into cents (integers) immediately to prevent 
      // floating-point precision drift during compounding multipliers.
      let priceCents = Math.round(plan.basePriceUSD * 100);

      if (options.billingCycle === 'annual') {
        priceCents = Math.round(priceCents * config.annualDiscountMultiplier);
      }

      const finalCents = Math.round(priceCents * currencyInfo.exchangeRate * currencyInfo.regionalMultiplier);
      const finalRawAmount = finalCents / 100;
      
      const maximumFractionDigits = finalRawAmount % 1 === 0 ? 0 : 2;
      const formatter = getFormatter(currencyInfo.locale, currencyInfo.code, maximumFractionDigits);

      return {
        rawAmount: finalRawAmount,
        formattedAmount: formatter.format(finalRawAmount),
        currency: options.currency,
        billingCycle: options.billingCycle
      };
    }
  };
}
