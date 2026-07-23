import { PlanConfig } from '@/lib/pricing/types';
import PriceDisplay from './PriceDisplay';
import PricingFeatures from './PricingFeatures';

export default function PricingCard({ plan, isPopular }: { plan: PlanConfig, isPopular?: boolean }) {
  return (
    <article 
      className={`relative flex flex-col bg-surface p-8 rounded-3xl border transition-layout hover:-translate-y-2 ${
        isPopular 
          ? 'border-primary shadow-[0_10px_40px_rgba(124,58,237,0.15)] ring-1 ring-primary md:-translate-y-4 hover:-translate-y-6' 
          : 'border-border-subtle shadow-DEFAULT hover:shadow-xl hover:border-border-subtle/80'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-caption font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
          Most Popular
        </div>
      )}
      
      <h3 className="text-h3 mb-2 tracking-tight text-heading">{plan.name}</h3>
      <p className="text-small text-muted mb-8 pb-6 border-b border-border-subtle">
        {isPopular ? 'For growing teams and businesses.' : (plan.limits.users === 999 ? 'For large organizations with advanced needs.' : 'Perfect for individuals and small projects.')}
      </p>
      
      <div className="mb-8 min-h-[4rem] flex items-center text-heading">
        {/* Isolated Client Component! Card stays Server Component! */}
        <PriceDisplay planId={plan.id} />
      </div>
      
      <button 
        className={`w-full py-3.5 rounded-xl font-sans font-medium transition-micro mb-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface shadow-sm ${
          isPopular
            ? 'bg-primary text-white hover:bg-secondary shadow-[0_4px_14px_rgba(124,58,237,0.4)]'
            : 'bg-main text-heading border border-border-subtle hover:bg-surface-hover hover:border-border-subtle/80'
        }`}
      >
        {isPopular ? 'Start Free Trial' : (plan.limits.users === 999 ? 'Contact Sales' : 'Start Free Trial')}
      </button>
      
      <PricingFeatures features={plan.features} />
    </article>
  );
}
