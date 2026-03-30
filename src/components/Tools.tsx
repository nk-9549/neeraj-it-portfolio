import { TOOLS } from "../constants";
import { Cloud, LayoutGrid, Monitor, ShieldCheck, Terminal } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  Cloud,
  LayoutGrid,
  Monitor,
  ShieldCheck,
  Terminal,
};

export default function Tools() {
  return (
    <section className="px-6 md:px-12 py-24">
      <h2 className="font-headline text-3xl font-bold mb-12 text-center tracking-widest">SYSTEM_TOOLS</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {TOOLS.map((tool, idx) => {
          const Icon = iconMap[tool.icon];
          return (
            <motion.div 
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-surface-container aspect-square flex flex-col items-center justify-center p-4 border border-on-surface/10 hover:bg-surface-bright transition-all cursor-pointer group"
            >
              <Icon className={`w-8 h-8 mb-2 transition-transform group-hover:scale-110 ${
                tool.color === 'primary' ? 'text-primary' : 
                tool.color === 'secondary' ? 'text-secondary' : 
                tool.color === 'tertiary' ? 'text-tertiary' : 
                tool.color === 'green-400' ? 'text-green-400' : 'text-orange-400'
              }`} />
              <span className="text-[10px] font-technical uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface">
                {tool.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
