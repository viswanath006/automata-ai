"use client";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-main border-t border-border-subtle/30" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <span className="text-caption font-bold text-muted uppercase tracking-widest mb-4 block">Get Started</span>
        <h2 id="cta-heading" className="text-h2 mb-4 max-w-2xl text-heading tracking-tight">Get smarter about AI systems</h2>
        <p className="text-body text-muted max-w-xl mb-10">
          Weekly insights on automation, AI workflows, and real builds. No fluff, just what works.
        </p>
        
        <form className="flex w-full max-w-md items-center gap-2" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-grow">
            <input 
              type="email" 
              placeholder="jane@framer.com" 
              className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-small text-heading placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-micro"
              required
            />
          </div>
          <button type="submit" className="bg-surface-hover border border-border-subtle text-heading px-6 py-3 rounded-lg font-sans font-medium text-small hover:bg-white hover:text-main transition-micro whitespace-nowrap flex items-center gap-2">
            Subscribe
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </form>
      </div>
    </section>
  );
}
