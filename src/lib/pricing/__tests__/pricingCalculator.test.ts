import { createPricingEngine, PricingError } from '../pricingCalculator';
import { pricingConfig } from '../pricingConfig';
import { PriceCalculationOptions } from '../types';

describe('Staff-level Pricing Engine Pure Functions', () => {
  const engine = createPricingEngine(pricingConfig);

  it('calculates standard monthly pricing in USD', () => {
    const options: PriceCalculationOptions = { planId: 'professional', currency: 'USD', billingCycle: 'monthly' };
    const result = engine.calculate(options);
    
    expect(result.rawAmount).toBe(49);
    expect(result.formattedAmount).toBe('$49'); 
  });

  it('calculates annual pricing in USD with 20% discount using integer math', () => {
    const options: PriceCalculationOptions = { planId: 'professional', currency: 'USD', billingCycle: 'annual' };
    const result = engine.calculate(options);
    
    expect(result.rawAmount).toBe(39.2);
    expect(result.formattedAmount).toBe('$39.20');
  });

  it('calculates currency conversion and regional multipliers (EUR)', () => {
    const options: PriceCalculationOptions = { planId: 'enterprise', currency: 'EUR', billingCycle: 'monthly' };
    const result = engine.calculate(options);
    
    // Base $199 -> Cents: 19900
    // 19900 * 0.93 * 1.1 = 20357.7
    // Math.round(20357.7) = 20358 cents -> 203.58 EUR
    expect(result.rawAmount).toBe(203.58);
  });

  it('gracefully handles dynamic validation based on config keys', () => {
    const options = { planId: 'starter', currency: 'GBP', billingCycle: 'monthly' } as PriceCalculationOptions;
    
    expect(() => engine.calculate(options)).toThrow(PricingError);
    expect(() => engine.calculate(options)).toThrow('Unknown currency: GBP');
  });

  it('gracefully handles unknown plan dynamically', () => {
    const options = { planId: 'premium', currency: 'USD', billingCycle: 'monthly' } as PriceCalculationOptions;
    
    expect(() => engine.calculate(options)).toThrow(PricingError);
    expect(() => engine.calculate(options)).toThrow('Unknown plan: premium');
  });
});
