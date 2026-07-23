import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center text-white" aria-labelledby="hero-heading">
      {/* Background YouTube Video Loop */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-30 pointer-events-none mix-blend-screen">
        <iframe 
          className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube.com/embed/W0LHTWG-UmQ?autoplay=1&mute=1&loop=1&playlist=W0LHTWG-UmQ&controls=0&showinfo=0&rel=0&modestbranding=1" 
          title="Background Network Loop"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Background Radiance Glow Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        aria-hidden="true" 
        style={{ background: 'radial-gradient(ellipse at top, var(--color-primary), transparent 70%), var(--color-main)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="animate-entrance delay-100">
            <HeroContent />
          </div>
          <div className="animate-entrance delay-200 relative perspective-[2500px]">
            {/* Highly pronounced 3D effect for the workflow graphic */}
            <div className="relative rounded-2xl border border-border-subtle bg-surface/50 backdrop-blur shadow-[0_40px_80px_-20px_rgba(124,58,237,0.4)] transform rotate-y-[-15deg] rotate-x-[10deg] rotate-z-[2deg] scale-105 hover:rotate-y-[-2deg] hover:rotate-x-[2deg] hover:rotate-z-0 transition-all duration-1000 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none opacity-50" />
              <img 
                src="/hero-graphic.png" 
                alt="Automata Visual Workflow Builder Interface" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-all duration-1000 rounded-2xl"
                style={{ filter: 'drop-shadow(-30px 30px 40px rgba(0, 0, 0, 0.6))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
