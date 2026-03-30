import { PROJECTS } from "../constants";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface-container-low">
      <h2 className="font-headline text-3xl font-bold mb-16 tracking-widest text-center md:text-left">DEPLOYED_SOLUTIONS</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel rounded-xl overflow-hidden group border border-primary/20"
          >
            <div className="h-48 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-8">
              <h3 className={`font-headline text-xl mb-4 ${
                project.color === 'secondary' ? 'text-secondary' : 
                project.color === 'primary' ? 'text-primary' : 'text-tertiary'
              }`}>
                {project.title}
              </h3>
              <p className="text-xs font-technical text-on-surface-variant uppercase mb-4 tracking-widest">
                Scope: {project.scope}
              </p>
              
              <div className="space-y-4 text-sm text-on-surface-variant">
                <p><strong className="text-on-surface">PROBLEM:</strong> {project.problem}</p>
                <p><strong className="text-on-surface">SOLUTION:</strong> {project.solution}</p>
                <p><strong className="text-on-surface">IMPACT:</strong> {project.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
