export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface/30" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        {/* Logo Strip */}
        <div className="mb-24">
          <p className="text-center text-small text-muted font-mono mb-8 uppercase tracking-widest">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {/* Logo placeholders */}
            <span className="font-mono text-h4">LOGO_1</span>
            <span className="font-mono text-h4">LOGO_2</span>
            <span className="font-mono text-h4">LOGO_3</span>
          </div>
        </div>

        {/* Testimonials */}
        <h2 id="testimonials-heading" className="sr-only">Customer Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <article className="bg-surface p-6 rounded-md border border-border-subtle">
            <p className="text-body text-muted mb-4">"This platform changed everything."</p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-main"></div>
              <div>
                <p className="text-small font-medium text-heading">Jane Doe</p>
                <p className="text-caption text-muted">CTO, TechCorp</p>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
