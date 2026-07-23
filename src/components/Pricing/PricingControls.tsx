import BillingToggle from './BillingToggle';
import CurrencySelector from './CurrencySelector';

export default function PricingControls() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 z-10 relative">
      <BillingToggle />
      <CurrencySelector />
    </div>
  );
}
