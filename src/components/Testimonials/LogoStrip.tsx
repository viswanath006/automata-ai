import Icon from '@/components/shared/Icon';

const LOGOS = ['cube-16-solid', 'link', 'chart-pie', 'arrow-path', 'cog-8-tooth'];

export default function LogoStrip() {
  // Triplicated for a mathematically perfect, seamless infinite loop
  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="w-full overflow-hidden py-12 relative border-y border-border-subtle/30 bg-surface/10 mb-40 group" aria-label="Trusted by industry leaders">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          /* Translating exactly 1/3 ensures a flawless seamless loop without jumping */
          to { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 45s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            width: 100%;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 2rem;
          }
        }
      `}} />
      
      {/* Premium Seamless Masking (Superior to absolute gradients over arbitrary backgrounds) */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
        }} 
        aria-hidden="true" 
      />
      
      <div className="animate-marquee flex items-center px-4" style={{ gap: '6rem' }}>
        {marqueeLogos.map((icon, idx) => {
          // A11y: Hide duplicated items from screen readers so they aren't read three times
          const isDuplicate = idx >= LOGOS.length;
          return (
            <div 
              key={idx} 
              aria-hidden={isDuplicate}
              className="flex items-center gap-3.5 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 hover:scale-110 drop-shadow-none hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]"
            >
              <Icon name={icon} className="w-8 h-8 text-muted group-hover:text-primary transition-colors" />
              <span className="font-mono text-small text-muted tracking-widest uppercase font-bold group-hover:text-white transition-colors">Partner {idx % LOGOS.length + 1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
