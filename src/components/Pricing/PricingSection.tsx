import PricingControls from './PricingControls';
import PricingGrid from './PricingGrid';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative bg-main overflow-hidden" aria-labelledby="pricing-heading">
      {/* Background Radiance */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-10 pointer-events-none transition-layout" 
        aria-hidden="true" 
        style={{ background: 'radial-gradient(circle at top, var(--color-primary), transparent 60%)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-caption font-bold text-primary uppercase tracking-widest mb-4 block">Pricing</span>
          <h2 id="pricing-heading" className="text-h2 mb-4 text-heading tracking-tight">Simple, transparent pricing</h2>
          <p className="text-body-large text-muted">
            Choose the plan that's right for you.
          </p>
        </header>

        <PricingControls />
        <PricingGrid />
      </div>
    </section>
  );
}
