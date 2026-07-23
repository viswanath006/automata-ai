import Icon from "@/components/shared/Icon";

export default function HeroDashboard() {
  return (
    <div className="animate-entrance delay-200 relative w-full h-[500px] md:h-[600px] mt-12 lg:mt-0 lg:ml-10" style={{ perspective: '1200px' }} aria-hidden="true">
      {/* Dashboard Main Window */}
      <div className="absolute inset-0 bg-surface rounded-xl border border-border-subtle shadow-2xl overflow-hidden transition-layout group hover:-translate-y-2 flex flex-col" style={{ transform: 'rotateY(-8deg) rotateX(4deg)' }}>
        {/* Window Header */}
        <div className="h-12 border-b border-border-subtle flex items-center px-4 gap-2 bg-main/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-error/80"></div>
            <div className="w-3 h-3 rounded-full bg-warning/80"></div>
            <div className="w-3 h-3 rounded-full bg-success/80"></div>
          </div>
          <div className="mx-auto flex items-center gap-2 bg-main px-3 py-1 rounded-md border border-border-subtle">
            <Icon name="search" className="w-3 h-3 opacity-50 text-muted" />
            <span className="text-caption text-muted font-mono">ai-agent-v2.sys</span>
          </div>
        </div>
        
        {/* Dashboard Grid */}
        <div className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-4 bg-main/20">
          
          {/* Main Chart Area */}
          <div className="col-span-8 row-span-4 bg-main border border-border-subtle rounded-lg p-4 flex flex-col relative overflow-hidden transition-micro hover:border-primary/50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-small text-muted">Workflow Analytics</span>
              <Icon name="chart-pie" className="w-4 h-4 opacity-50 text-heading transition-micro hover:opacity-100" />
            </div>
            {/* Mock Chart Lines */}
            <div className="flex-1 flex items-end gap-2 pb-2">
               {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                 <div key={i} className="flex-1 bg-surface-hover rounded-t-sm transition-layout" style={{ height: `${h}%` }}>
                    <div className="w-full h-full bg-gradient-to-t from-primary/10 to-primary/50 opacity-0 transition-micro hover:opacity-100"></div>
                 </div>
               ))}
            </div>
          </div>

          {/* Side Panels */}
          <div className="col-span-4 row-span-2 bg-main border border-border-subtle rounded-lg p-4 flex flex-col justify-between transition-micro hover:border-secondary/50">
            <span className="font-mono text-small text-muted">Active Agents</span>
            <div className="flex items-center gap-3">
              <span className="text-h2 text-heading">1,204</span>
              <span className="text-caption text-success bg-success/10 px-1.5 py-0.5 rounded font-mono">+12%</span>
            </div>
          </div>

          <div className="col-span-4 row-span-2 bg-primary/10 border border-primary/30 rounded-lg p-4 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 blur-xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <span className="font-mono text-small text-primary mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              AI Processing
            </span>
            <div className="space-y-2 mt-auto">
              <div className="w-full h-1 bg-main rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>
              <span className="text-caption text-muted font-mono block text-right">75% Load</span>
            </div>
          </div>

          {/* Bottom Workflow Strip */}
          <div className="col-span-12 row-span-2 bg-main border border-border-subtle rounded-lg p-4 flex items-center justify-between">
            {['Source', 'Parser', 'LLM', 'Output'].map((step, idx) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-surface border border-border-subtle flex items-center justify-center">
                    <Icon name={idx % 2 === 0 ? "cube-16-solid" : "link"} className="w-4 h-4 opacity-70 text-heading" />
                  </div>
                  <span className="text-caption font-mono text-muted">{step}</span>
                </div>
                {idx < 3 && <Icon name="chevron-right" className="w-4 h-4 opacity-30 text-muted" /> }
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating Widget 1 */}
      <div className="absolute -top-6 -right-6 w-48 bg-surface/80 backdrop-blur-md border border-border-subtle p-3 rounded-lg shadow-xl animate-entrance delay-200 transform hover:-translate-y-2 transition-layout hidden lg:block z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-success/20 flex items-center justify-center">
            <Icon name="arrow-trending-up" className="w-4 h-4 text-success" />
          </div>
          <div>
            <p className="text-caption text-muted font-mono">Sync Complete</p>
            <p className="text-small font-medium text-heading">1.2ms latency</p>
          </div>
        </div>
      </div>

      {/* Floating Widget 2 */}
      <div className="absolute -bottom-8 -left-8 w-64 bg-surface/90 backdrop-blur-md border border-border-subtle p-4 rounded-lg shadow-glow animate-entrance delay-[300ms] transform hover:-translate-y-2 transition-layout hidden lg:block z-20">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-primary mt-1.5 animate-pulse shrink-0"></div>
          <div>
             <p className="text-small font-medium text-heading mb-1 font-mono">AI Assistant</p>
             <p className="text-caption text-muted leading-relaxed">"Optimized 4 workflows based on recent API traffic patterns."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
