export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent animate-entrance">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Nano Banana Logo" className="h-8 w-8 object-contain" />
          <span className="text-heading font-bold text-lg tracking-tight">Nano Banana</span>
        </div>
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-small font-medium nav-link-motion">Features</a>
          <a href="#pricing" className="text-small font-medium nav-link-motion">Pricing</a>
          <a href="#testimonials" className="text-small font-medium nav-link-motion">Testimonials</a>
        </nav>
        <div className="flex items-center gap-4">
          <button type="button" className="bg-primary text-main px-5 py-2.5 rounded-lg font-sans font-bold text-small btn-primary-motion focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-main focus-visible:ring-primary">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
