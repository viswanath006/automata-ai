export default function Footer() {
  return (
    <footer className="bg-main pt-20 pb-8 relative overflow-hidden border-t border-border-subtle/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20 md:ml-32">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Nano Banana Logo" className="h-8 w-8 object-contain" />
              <span className="text-heading font-bold text-lg tracking-tight">Nano Banana</span>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="text-caption font-bold text-muted uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-small text-muted font-medium">
              <li><a href="#" className="hover:text-heading transition-micro">Home</a></li>
              <li><a href="#pricing" className="hover:text-heading transition-micro">Pricing</a></li>
              <li><a href="#features" className="hover:text-heading transition-micro flex items-center gap-2"><span className="text-primary">+</span> Projects</a></li>
              <li><a href="#" className="hover:text-heading transition-micro">Articles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-caption font-bold text-muted uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-small text-muted font-medium">
              <li><a href="#" className="hover:text-heading transition-micro">About Us</a></li>
              <li><a href="#" className="hover:text-heading transition-micro">Contact Us</a></li>
              <li><a href="#" className="hover:text-heading transition-micro flex items-center gap-2"><span className="text-primary">→</span> Book A Call</a></li>
              <li><a href="#" className="hover:text-heading transition-micro">More Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-caption font-bold text-muted uppercase tracking-widest mb-6">Policies</h4>
            <ul className="flex flex-col gap-3 text-small text-muted font-medium">
              <li><a href="#" className="hover:text-heading transition-micro">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-heading transition-micro">Privacy Policy</a></li>
            </ul>
            <div className="flex gap-4 mt-6">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 rounded bg-surface border border-border-subtle flex items-center justify-center hover:border-primary cursor-pointer transition-micro"><span className="text-muted text-xs">X</span></div>
              <div className="w-8 h-8 rounded bg-surface border border-border-subtle flex items-center justify-center hover:border-primary cursor-pointer transition-micro"><span className="text-muted text-xs">in</span></div>
              <div className="w-8 h-8 rounded bg-surface border border-border-subtle flex items-center justify-center hover:border-primary cursor-pointer transition-micro"><span className="text-muted text-xs">yt</span></div>
            </div>
          </div>
        </div>
        
        {/* Massive Typography Footer */}
        <div className="w-full flex items-end justify-center relative mt-12 overflow-hidden pointer-events-none select-none h-48 md:h-72">
          <span className="text-[15vw] font-bold text-surface-hover leading-none tracking-tighter absolute bottom-[-4vw]">
            nanobanana
          </span>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[0.65rem] text-muted font-medium uppercase tracking-widest z-20">
          &copy; {new Date().getFullYear()} Nano Banana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
