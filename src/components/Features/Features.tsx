import FeatureGrid from "./FeatureGrid";
import FeatureAccordion from "./FeatureAccordion";

export default function Features() {
  return (
    <section id="features" className="py-32 bg-main relative overflow-hidden" aria-labelledby="features-heading">
      {/* Background Dot Grid for Pro Tech Aesthetic */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      {/* Subtle Purple Background Glow */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none" 
        aria-hidden="true" 
        style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 60%)' }}
      />
      <div 
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] opacity-[0.05] pointer-events-none" 
        aria-hidden="true" 
        style={{ background: 'radial-gradient(circle, var(--color-secondary), transparent 60%)' }}
      />

      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-caption font-bold text-primary uppercase tracking-widest mb-4 block">Features</span>
          <h2 id="features-heading" className="text-h2 mb-6 text-heading tracking-tight">Everything you need to automate</h2>
          <p className="text-body-large text-muted">
            Powerful features. Intuitive design. Unlimited possibilities.
          </p>
        </header>
        
        {/* Layouts - Visibility managed via CSS for flawless SEO and immediate TTI */}
        <FeatureGrid />
        <FeatureAccordion />
      </div>
    </section>
  );
}
