import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

export default function Timeline() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface-container-low">
      <h2 className="font-headline text-3xl font-bold mb-16 text-center tracking-widest">SERVICE_HISTORY</h2>
      
      <div className="max-w-3xl mx-auto relative border-l border-primary/20 pl-8 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div 
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`absolute -left-10 top-2 w-4 h-4 rounded-full ${
              exp.active ? 'bg-secondary shadow-[0_0_10px_#00e3fd]' : 'bg-primary/40'
            }`}></div>
            <div className={`text-xs font-technical mb-2 ${
              exp.active ? 'text-secondary' : 'text-on-surface-variant'
            }`}>
              {exp.period}
            </div>
            <h3 className="font-headline text-xl mb-2">{exp.title}</h3>
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
