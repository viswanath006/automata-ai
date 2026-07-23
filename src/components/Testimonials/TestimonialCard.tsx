import { testimonialsData } from './testimonialsData';
import Icon from '@/components/shared/Icon';

export default function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsData[0] }) {
  return (
    <article 
      className="group relative bg-surface/30 backdrop-blur-2xl border border-border-subtle/50 p-8 rounded-3xl flex flex-col h-full transition-layout hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:border-border-subtle hover:bg-surface/60 overflow-hidden"
    >
      {/* Decorative Quote Watermark */}
      <div className="absolute -top-4 -right-4 text-[120px] font-serif leading-none opacity-[0.03] text-muted pointer-events-none select-none transition-layout group-hover:opacity-[0.05] group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
        "
      </div>

      <div className="flex items-center gap-1.5 mb-6 relative z-10" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg transition-micro ${i < testimonial.rating ? 'text-primary' : 'text-muted/30'}`} aria-hidden="true">
            ★
          </span>
        ))}
      </div>

      <blockquote className="text-body-large text-heading leading-relaxed flex-grow relative z-10 font-medium tracking-tight mb-8">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center gap-4 relative z-10 mt-auto">
        {/* Premium Avatar */}
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center font-sans font-bold text-small shrink-0 border"
          style={{ backgroundColor: `${testimonial.color}15`, color: testimonial.color, borderColor: `${testimonial.color}30` }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className="text-small m-0 tracking-tight text-heading font-bold">{testimonial.name}</h4>
          </div>
          <span className="text-caption text-muted">{testimonial.role}, {testimonial.company}</span>
        </div>
      </div>
    </article>
  );
}
