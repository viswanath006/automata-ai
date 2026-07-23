"use client";

import { FeatureData } from "./features";
import FeatureIcon from "./FeatureIcon";
import Icon from "@/components/shared/Icon";
import { useRef } from "react";
import { useActiveFeature, featuresStore } from "./featuresStore";

export default function AccordionItem({ feature }: { feature: FeatureData }) {
  // OPTIMIZATION: Global state persistence across breakpoints without Context Provider rendering cascades
  const activeId = useActiveFeature();
  const isOpen = activeId === feature.id;
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <article className="group bg-surface rounded-xl border border-border-subtle overflow-hidden transition-layout focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-main">
      <button 
        type="button"
        onClick={() => featuresStore.setActiveFeature(feature.id)}
        className="w-full text-left p-5 flex items-center justify-between bg-transparent hover:bg-surface-hover transition-micro focus:outline-none relative"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${feature.id}`}
        id={`accordion-header-${feature.id}`}
      >
        <div className="flex items-center gap-5">
          <FeatureIcon name={feature.icon} accentColor={feature.accentColor} />
          <div className="flex flex-col">
            <span className="text-caption font-mono text-muted uppercase tracking-widest mb-1">{feature.category}</span>
            <h3 className="text-h4 font-sans m-0 tracking-tight">{feature.title}</h3>
          </div>
        </div>
        
        <div className={`w-8 h-8 rounded-full bg-main flex items-center justify-center border transition-micro ${isOpen ? 'border-primary shadow-[0_0_10px_rgba(255,200,1,0.2)]' : 'border-border-subtle group-hover:border-primary/50'}`}>
          <Icon name="chevron-down" className={`w-4 h-4 transition-layout ${isOpen ? 'rotate-180 text-primary' : 'text-muted group-hover:text-heading'}`} />
        </div>
      </button>
      
      {/* OPTIMIZATION: Hardware accelerated CSS transitions over WAAPI for height */}
      <div 
        id={`accordion-content-${feature.id}`}
        aria-labelledby={`accordion-header-${feature.id}`}
        role="region"
        className="overflow-hidden transition-layout" 
        style={{ height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }} 
      >
        <div ref={contentRef} className="p-5 pt-2 ml-[4.5rem]">
          <p className="text-body text-muted leading-relaxed mb-4">{feature.description}</p>
          {feature.highlight && (
            <span className="inline-block text-small font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              {feature.highlight}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
