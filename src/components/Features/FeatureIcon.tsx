import Icon from "@/components/shared/Icon";

export default function FeatureIcon({ name, accentColor }: { name: string, accentColor: string }) {
  return (
    <div 
      className="w-12 h-12 rounded-xl flex items-center justify-center border border-border-subtle bg-main shadow-[inset_0_1px_4px_rgba(255,255,255,0.05)] transition-layout group-hover:scale-105 group-hover:-translate-y-1 relative" 
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-20 blur-md pointer-events-none transition-layout group-hover:opacity-40"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      ></div>
      <Icon name={name} className="w-5 h-5 bg-current relative z-10" style={{ color: accentColor }} />
    </div>
  );
}
