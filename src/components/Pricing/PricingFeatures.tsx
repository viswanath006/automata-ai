import Icon from '@/components/shared/Icon';

export default function PricingFeatures({ features }: { features: string[] }) {
  return (
    <ul className="flex flex-col gap-4 text-small text-muted flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 group">
          <div className="w-5 h-5 rounded-full bg-main border border-border-subtle flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/50 transition-micro">
            <Icon name="arrow-trending-up" className="w-3 h-3 text-success opacity-80" />
          </div>
          <span className="group-hover:text-heading transition-micro">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
