import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 py-32 hero-mesh overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface to-surface opacity-90"></div>
      
      <div className="relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary/10 border border-secondary/20 text-secondary text-xs font-technical uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> 
          System Status: Online
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-headline text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
        >
          Neeraj <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Kumar</span>.<br />
          IT Administrator & Infrastructure Specialist.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-technical text-xl text-on-surface-variant mb-10 max-w-2xl leading-relaxed"
        >
          Microsoft 365 | Google Workspace | IT Support & Infrastructure
          <br />
          <span className="text-on-surface">3+ years of experience managing multi-location IT operations for 300+ users. Proven track record of 99% system uptime and SLA-driven support.</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button className="bg-gradient-to-r from-primary to-secondary text-surface px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_25px_rgba(182,160,255,0.4)] transition-all text-lg">
            View Projects
          </button>
          <button className="bg-surface-container-high border border-on-surface/10 text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-bright transition-all text-lg">
            Download Resume
          </button>
          <button className="text-secondary font-bold hover:underline px-8 py-4">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Status Widget */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block w-80"
      >
        <div className="glass-panel p-6 rounded-xl border border-primary/20 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-technical uppercase text-on-surface-variant">
              <span>Uptime</span>
              <span className="text-secondary">99%</span>
            </div>
            <div className="h-1 bg-surface-container-lowest overflow-hidden">
              <div className="h-full bg-secondary w-[99%]"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-technical uppercase text-on-surface-variant">Systems</span>
            <span className="text-green-400 text-sm font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> OPERATIONAL
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-technical uppercase text-on-surface-variant">Security</span>
            <span className="text-primary text-sm font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> ACTIVE
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
