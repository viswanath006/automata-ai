"use client";

import { statsData } from './testimonialsData';
import { useFadeIn } from './useFadeIn';

export default function StatsSection() {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <div 
      ref={ref}
      className={`relative max-w-6xl mx-auto mt-40 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Unified Glassmorphic Container for high-end SaaS feel */}
      <div className="absolute inset-0 bg-surface/20 backdrop-blur-3xl rounded-3xl border border-border-subtle/50 shadow-2xl -z-10" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border-subtle/50">
        {statsData.map((stat, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center justify-center text-center group py-12 px-4 hover:bg-surface-hover/30 transition-layout first:rounded-t-3xl last:rounded-b-3xl md:first:rounded-tr-none md:last:rounded-bl-none md:first:rounded-l-3xl md:last:rounded-r-3xl"
          >
            {/* Gradient text implementation for premium emphasis */}
            <span className="text-display font-mono bg-clip-text text-transparent bg-gradient-to-b from-heading to-muted mb-3 tracking-tight group-hover:scale-105 transition-layout">
              {stat.value}
            </span>
            <span className="text-caption text-primary font-mono uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
