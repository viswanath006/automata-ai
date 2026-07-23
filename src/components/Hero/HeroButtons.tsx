import Icon from "@/components/shared/Icon";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto mt-2">
      <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white font-sans font-medium hover:bg-secondary transition-micro shadow-[0_0_20px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2">
        Start Free Trial
        <Icon name="arrow-right" className="w-4 h-4" />
      </button>
      <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-heading border border-border-subtle font-sans font-medium hover:bg-surface-hover transition-micro flex items-center justify-center gap-2">
        <Icon name="play-circle" className="w-5 h-5 text-muted group-hover:text-heading" />
        Watch Demo
      </button>
    </div>
  );
}
