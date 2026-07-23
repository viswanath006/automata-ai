import Icon from "@/components/shared/Icon";

export default function HeroBadge() {
  return (
    <div className="animate-entrance inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-surface/50 backdrop-blur-sm text-small font-mono text-primary mb-6 transition-micro hover:bg-surface-hover cursor-pointer" role="button" tabIndex={0}>
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
      Introducing AI Automation Engine 2.0
      <Icon name="chevron-right" className="w-3 h-3 opacity-70" />
    </div>
  );
}
