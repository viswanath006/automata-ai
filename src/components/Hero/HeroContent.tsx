import HeroButtons from "./HeroButtons";
import Icon from "@/components/shared/Icon";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start text-left w-full z-10">
      <div className="animate-entrance delay-50 inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-surface border border-border-subtle mb-6 cursor-pointer hover:bg-surface-hover transition-micro">
        <span className="text-caption font-bold bg-primary text-white px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">New</span>
        <span className="text-small text-muted font-medium">AI Workflows 2.0 is live</span>
        <Icon name="chevron-right" className="w-3 h-3 text-muted" />
      </div>

      <h1 id="hero-heading" className="animate-entrance delay-100 text-display mb-6 tracking-tight leading-[1.1]">
        Automate more. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">Scale infinitely.</span>
      </h1>
      
      <p className="animate-entrance delay-100 text-body-large text-muted mb-8 max-w-lg leading-relaxed">
        The modern automation platform for teams that move fast. Build powerful workflows, integrate your tools, and ship results—no code required.
      </p>
      
      <div className="animate-entrance delay-150">
        <HeroButtons />
      </div>

      <div className="animate-entrance delay-200 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <div className="flex items-start gap-2">
          <Icon name="check-circle" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="text-small text-muted font-medium leading-tight">No credit card<br/>required</span>
        </div>
        <div className="flex items-start gap-2">
          <Icon name="clock" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="text-small text-muted font-medium leading-tight">Setup in less than<br/>2 minutes</span>
        </div>
        <div className="flex items-start gap-2">
          <Icon name="shield-check" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="text-small text-muted font-medium leading-tight">Cancel anytime,<br/>no commitment</span>
        </div>
      </div>
    </div>
  );
}
