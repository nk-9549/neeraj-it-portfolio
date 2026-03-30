import { Mail, Link as LinkIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="px-6 md:px-12 py-24">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-4xl font-bold mb-6">Let's build reliable and secure systems together.</h2>
          <p className="text-on-surface-variant text-lg mb-10">Available for infrastructure consulting and permanent leadership roles in high-performance environments.</p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 rounded-lg bg-surface-container border border-on-surface/10 hover:border-primary transition-all group">
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[10px] font-technical uppercase text-on-surface-variant">Communications</p>
                <p className="font-medium">neeeraajverma@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-lg bg-surface-container border border-on-surface/10 hover:border-secondary transition-all group">
              <LinkIcon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[10px] font-technical uppercase text-on-surface-variant">Networking</p>
                <p className="font-medium">linkedin.com/in/nk9549</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-lg bg-surface-container border border-on-surface/10 hover:border-primary transition-all group">
              <div className="w-6 h-6 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-[10px] font-technical uppercase text-on-surface-variant">Phone</p>
                <p className="font-medium">+91 9549133297</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-lg bg-surface-container border border-on-surface/10 hover:border-secondary transition-all group">
              <div className="w-6 h-6 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-[10px] font-technical uppercase text-on-surface-variant">Location</p>
                <p className="font-medium">Gurgaon, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Command Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl border border-on-surface/10"
        >
          <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-on-surface/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
            </div>
            <span className="text-[10px] font-technical text-on-surface-variant uppercase tracking-widest">KINETIC_TERMINAL — v2.4.0</span>
          </div>

          <div className="p-8 font-mono text-secondary text-sm space-y-4">
            <p>&gt; init contact_protocol --priority HIGH</p>
            <p className="text-primary">ESTABLISHING ENCRYPTED LINK...</p>
            <p className="text-on-surface-variant">To initiate communication, please provide parameters.</p>
            <div className="flex items-center gap-2">
              <span className="text-on-surface">&gt;</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-secondary"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
