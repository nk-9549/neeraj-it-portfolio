import { METRICS } from "../constants";
import { motion } from "motion/react";

export default function Metrics() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface-container-low">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-3xl font-bold mb-6 text-primary tracking-widest">OPERATIONAL_SCOPE</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Specializing in modern workspace administration and high-availability infrastructure. My approach combines technical precision with a focus on seamless user experience, ensuring that security protocols never become a bottleneck for productivity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {METRICS.map((metric, idx) => (
              <motion.div 
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`bg-surface-container p-6 rounded-lg border-l-4 ${
                  metric.color === 'secondary' ? 'border-secondary' : 
                  metric.color === 'primary' ? 'border-primary' : 'border-tertiary'
                }`}
              >
                <div className="text-3xl font-black text-on-surface mb-2">{metric.value}</div>
                <div className="text-[10px] font-technical uppercase tracking-widest text-on-surface-variant">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden aspect-video group"
        >
          <img 
            src="https://picsum.photos/seed/server/1200/800" 
            alt="Infrastructure" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
}
