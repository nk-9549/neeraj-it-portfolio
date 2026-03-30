import { SKILL_CATEGORIES } from "../constants";
import { Cloud, Router, Headset, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  Cloud,
  Router,
  SupportAgent: Headset,
  ShieldCheck,
};

export default function Skills() {
  return (
    <section className="px-6 md:px-12 py-24">
      <h2 className="font-headline text-3xl font-bold mb-12 text-center tracking-widest">CORE_COMPETENCIES</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`bg-surface-container-high p-8 rounded-xl border border-on-surface/10 transition-colors group ${
                category.color === 'secondary' ? 'hover:border-secondary' : 
                category.color === 'primary' ? 'hover:border-primary' : 
                category.color === 'tertiary' ? 'hover:border-tertiary' : 'hover:border-on-surface'
              }`}
            >
              <Icon className={`w-10 h-10 mb-6 ${
                category.color === 'secondary' ? 'text-secondary' : 
                category.color === 'primary' ? 'text-primary' : 
                category.color === 'tertiary' ? 'text-tertiary' : 'text-on-surface'
              }`} />
              <h3 className="font-headline text-lg mb-4">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1 font-technical uppercase">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-1 bg-surface-container-lowest">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${
                          category.color === 'secondary' ? 'bg-secondary' : 
                          category.color === 'primary' ? 'bg-primary' : 
                          category.color === 'tertiary' ? 'bg-tertiary' : 'bg-on-surface'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
