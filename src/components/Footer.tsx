export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-primary/5 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-6 max-w-[1920px] mx-auto">
        <div className="text-primary font-bold font-headline text-[10px] uppercase tracking-[0.2em]">
          © 2024 NEERAJ_KUMAR // ALL SYSTEMS OPERATIONAL
        </div>
        
        <div className="flex gap-8 font-headline text-[10px] uppercase tracking-[0.2em]">
          <a href="#" className="text-on-surface/30 hover:text-primary transition-all">Protocol</a>
          <a href="#" className="text-on-surface/30 hover:text-primary transition-all">Encryption</a>
          <a href="#" className="text-on-surface/30 hover:text-primary transition-all">Network_Map</a>
        </div>
      </div>
    </footer>
  );
}
