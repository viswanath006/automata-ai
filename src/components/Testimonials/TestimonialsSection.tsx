"use client";

import LogoStrip from './LogoStrip';
import { testimonialsData } from './testimonialsData';
import TestimonialCard from './TestimonialCard';
import StatsSection from './StatsSection';
import { useFadeIn } from './useFadeIn';

export default function TestimonialsSection() {
  const { ref, isVisible } = useFadeIn(0.05);

  return (
    <section id="testimonials" className="py-32 bg-main relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />
      
      {/* Background Glows */}
      <div 
        className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] opacity-10 pointer-events-none" 
        aria-hidden="true" 
        style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 60%)' }}
      />
      <div 
        className="absolute top-1/4 left-0 -translate-x-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none" 
        aria-hidden="true" 
        style={{ background: 'radial-gradient(circle, var(--color-secondary), transparent 60%)' }}
      />

      <LogoStrip />
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-caption font-bold text-primary uppercase tracking-widest mb-4 block">Trusted by Teams</span>
          <h2 id="testimonials-heading" className="text-h2 mb-4 text-heading tracking-tight">Loved by thousands of customers</h2>
          <p className="text-body-large text-muted leading-relaxed">
            See what teams have to say about Automata.
          </p>
        </header>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-700 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {testimonialsData.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        <StatsSection />
      </div>
    </section>
  );
}
