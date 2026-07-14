
import { motion } from 'framer-motion';
import { Wrench, Zap, Settings, ShieldCheck, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white">TRILOGY<span className="text-brand-orange">TURBOS</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono">Services</a>
              <a href="#builds" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono">Builds</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono">About</a>
            </div>
            <div className="hidden md:flex">
              <a href="#quote" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded text-sm uppercase tracking-wider font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,90,31,0.4)]">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black pt-32 pb-20">
        {/* Background plate */}
        <picture className="pointer-events-none absolute inset-0 z-0">
          <img
            src="/assets/hero/hero-turbo.png"
            alt="Close-up of a billet-wheel turbocharger with a glowing red-hot turbine housing."
            loading="eager"
            // @ts-ignore
            fetchpriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-80"
          />
        </picture>

        {/* Cinematic scrim */}
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.15)_75%,rgba(0,0,0,0.45)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,transparent_25%,transparent_65%,rgba(0,0,0,0.95)_100%)]" />

        {/* Subtle brand-color heat bloom */}
        <div aria-hidden="true" className="absolute -right-40 top-1/2 z-0 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-brand-orange/20 blur-[120px]" />
        <div aria-hidden="true" className="absolute -left-52 bottom-0 z-0 h-[420px] w-[420px] rounded-full bg-brand-cyan/15 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="mb-5 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-brand-cyan">
              <span className="h-px w-8 bg-brand-cyan/60" />
              Custom Turbo &amp; Performance Tuning
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.9]">
              We Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-cyan">Monsters</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-xl text-gray-300 font-light leading-relaxed"
          >
            Billet-wheel turbochargers, hand-built engine setups, and dyno-proven tunes. No compromises, no crate parts — just brutal, reliable power engineered to your spec.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#services" className="bg-brand-orange hover:bg-orange-600 text-black px-8 py-4 rounded font-display font-bold uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,90,31,0.3)] flex items-center justify-center gap-2">
              Start Your Build <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#builds" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded font-display font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 backdrop-blur-sm hover:border-brand-cyan/60">
              See The Builds
            </a>
          </motion.div>
        </div>
        
        {/* Bottom hairline */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/5 bg-black/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            <div>
              <div className="text-4xl font-display font-black text-white">500+</div>
              <div className="text-sm font-mono text-brand-orange uppercase mt-2">Custom Builds</div>
            </div>
            <div>
              <div className="text-4xl font-display font-black text-white">15<span className="text-brand-orange">yr</span></div>
              <div className="text-sm font-mono text-gray-400 uppercase mt-2">Combined Exp</div>
            </div>
            <div>
              <div className="text-4xl font-display font-black text-white">24<span className="text-brand-orange">hr</span></div>
              <div className="text-sm font-mono text-gray-400 uppercase mt-2">Turnaround Avg</div>
            </div>
            <div>
              <div className="text-4xl font-display font-black text-brand-cyan">100%</div>
              <div className="text-sm font-mono text-gray-400 uppercase mt-2">Dyno Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-mono text-sm tracking-[0.2em] uppercase mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">The Trilogy Arsenal</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-orange" />,
                title: "Turbo Upgrades",
                desc: "Bolt-on upgrades and full custom manifolds to push your platform to the ragged edge safely."
              },
              {
                icon: <Settings className="w-8 h-8 text-brand-cyan" />,
                title: "Custom Tuning",
                desc: "Dyno-proven calibrations that extract every ounce of efficiency and power from your setup."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-white" />,
                title: "Diagnostics & Repair",
                desc: "We don't just throw parts at it. We find the root cause, fix it, and build it stronger."
              }
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-xl hover:bg-white/[0.04] transition-colors group"
              >
                <div className="bg-background w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-orange/50 transition-colors">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-3 uppercase">{s.title}</h4>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-black border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Wrench className="text-brand-orange w-6 h-6" />
            <span className="font-display font-bold text-xl tracking-wider text-white">TRILOGY<span className="text-brand-orange">TURBOS</span></span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Trilogy Turbos LLC. Engineered by Velyon.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
