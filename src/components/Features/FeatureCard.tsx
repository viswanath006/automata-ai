"use client";

import { FeatureData } from "./features";
import FeatureIcon from "./FeatureIcon";
import { useActiveFeature, featuresStore } from "./featuresStore";

export default function FeatureCard({ feature }: { feature: FeatureData }) {
  const activeId = useActiveFeature();
  const isActive = activeId === feature.id;

  // Intentional hierarchy scaling
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2 p-10",
    medium: "md:col-span-2 md:row-span-1 p-8",
    small: "md:col-span-1 md:row-span-1 p-6"
  };

  const titleClasses = {
    large: "text-h2 mb-4 tracking-tight",
    medium: "text-h3 mb-3",
    small: "text-h4 mb-2"
  };

  const descClasses = {
    large: "text-body-large text-muted max-w-md",
    medium: "text-body text-muted max-w-md",
    small: "text-small text-muted"
  };

  return (
    <article 
      onClick={() => featuresStore.setActiveFeature(feature.id)}
      className={`group relative flex flex-col rounded-2xl border cursor-pointer overflow-hidden transition-layout hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-main ${sizeClasses[feature.size]} ${isActive ? 'border-primary shadow-[0_0_15px_rgba(124,58,237,0.15)] ring-1 ring-primary' : 'border-border-subtle hover:border-border-subtle/80 shadow-md'} ${feature.title === 'Enterprise Ready' ? 'bg-primary text-white border-transparent hover:border-primary shadow-[0_4px_20px_rgba(124,58,237,0.4)]' : 'bg-surface text-heading'}`}
    >
      {/* Corner Glow Polish (Disabled on solid purple card) */}
      {feature.title !== 'Enterprise Ready' && (
        <div 
          className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] transition-layout pointer-events-none ${isActive ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'}`}
          style={{ backgroundColor: feature.accentColor }}
          aria-hidden="true"
        ></div>
      )}
      
      <header className="flex justify-between items-start mb-8 relative z-10">
        <FeatureIcon name={feature.icon} accentColor={feature.title === 'Enterprise Ready' ? '#ffffff' : feature.accentColor} />
        {feature.highlight && (
          <span className={`text-caption font-bold px-3 py-1.5 rounded-full border transition-micro shadow-sm ${feature.title === 'Enterprise Ready' ? 'bg-white/20 border-white/30 text-white' : 'bg-main/80 backdrop-blur-sm border-border-subtle text-muted group-hover:text-heading'}`}>
            {feature.highlight}
          </span>
        )}
      </header>
      
      <div className="mt-auto relative z-10">
        <span className={`text-caption font-bold mb-3 block uppercase tracking-widest ${feature.title === 'Enterprise Ready' ? 'text-white/80' : 'text-muted opacity-80'}`}>{feature.category}</span>
        
        {/* Full card clickable area using ::after pseudo-element for accessibility and UX */}
        <h3 className={titleClasses[feature.size]}>
          <a href={`#feature-${feature.id}`} className="focus:outline-none after:absolute after:inset-0">
            {feature.title}
          </a>
        </h3>
        
        <p className={`${descClasses[feature.size]} ${feature.title === 'Enterprise Ready' ? 'text-white/90' : 'text-muted'}`}>{feature.description}</p>
      </div>
    </article>
  );
}
