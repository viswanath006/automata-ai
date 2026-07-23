export default function Icon({ name, className = "" }: { name: string, className?: string }) {
  return (
    <span 
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: `url(/svgs/${name}.svg)`,
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskImage: `url(/svgs/${name}.svg)`,
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        maskSize: 'contain'
      }}
      aria-hidden="true"
    />
  );
}
