export default function Pricing() {
  return (
    <section id="pricing" className="py-24" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="pricing-heading" className="text-h2 mb-4">Transparent Pricing</h2>
          <p className="text-body-large text-muted max-w-2xl mx-auto">
            Scale your AI operations without limits.
          </p>
        </div>

        {/* Billing Toggle & Currency Selector Placeholder */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 bg-surface p-1 rounded-full border border-border-subtle">
            <button className="px-6 py-2 rounded-full bg-main text-heading font-medium text-small transition-micro shadow-sm">Monthly</button>
            <button className="px-6 py-2 rounded-full text-muted hover:text-heading font-medium text-small transition-micro">Annually</button>
          </div>
          <div className="bg-surface p-2 rounded border border-border-subtle">
            <span className="text-small text-muted font-mono">Currency: USD</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <article className="bg-surface p-8 rounded-xl border border-border-subtle shadow-DEFAULT flex flex-col">
            <h3 className="text-h3 mb-2">Starter</h3>
            <p className="text-muted text-small mb-6">Perfect for early teams.</p>
            <div className="mb-8 font-mono">
              <span className="text-h1">$0</span>
              <span className="text-muted">/mo</span>
            </div>
            <button className="w-full py-3 rounded bg-main text-heading border border-border-subtle hover:bg-surface-hover transition-micro mb-8">Get Started</button>
            <ul className="flex flex-col gap-3 text-small text-muted flex-grow">
              <li>Feature A</li>
              <li>Feature B</li>
            </ul>
          </article>
          {/* Card 2 & 3 */}
          <article className="bg-surface p-8 rounded-xl border border-primary shadow-glow flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-main text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
            <h3 className="text-h3 mb-2">Pro</h3>
            <p className="text-muted text-small mb-6">For scaling startups.</p>
            <div className="mb-8 font-mono">
              <span className="text-h1">$49</span>
              <span className="text-muted">/mo</span>
            </div>
            <button className="w-full py-3 rounded bg-primary text-main font-medium hover:bg-secondary transition-micro mb-8">Start Trial</button>
            <ul className="flex flex-col gap-3 text-small text-muted flex-grow">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
          </article>
          <article className="bg-surface p-8 rounded-xl border border-border-subtle shadow-DEFAULT flex flex-col">
            <h3 className="text-h3 mb-2">Enterprise</h3>
            <p className="text-muted text-small mb-6">Custom limits and support.</p>
            <div className="mb-8 font-mono">
              <span className="text-h1">$199</span>
              <span className="text-muted">/mo</span>
            </div>
            <button className="w-full py-3 rounded bg-main text-heading border border-border-subtle hover:bg-surface-hover transition-micro mb-8">Contact Sales</button>
            <ul className="flex flex-col gap-3 text-small text-muted flex-grow">
              <li>Everything in Pro</li>
              <li>SLA</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
