import { Bell, Zap, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Sectors", href: "#sectors", id: "sectors" },
    { label: "Operations", href: "#operations", id: "operations" },
    { label: "Arsenal", href: "#arsenal", id: "arsenal" },
    { label: "Chronicle", href: "#chronicle", id: "chronicle" },
    { label: "Terminal", href: "#terminal", id: "terminal" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-primary/10">
      <div className="flex justify-between items-center px-4 md:px-8 h-20 max-w-[1920px] mx-auto">
        <div className="text-xl md:text-2xl font-black tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(182,160,255,0.5)] font-technical">
          NEERAJ_KUMAR
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-technical tracking-tight">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "transition-all duration-300 text-sm uppercase tracking-widest relative py-1",
                activeSection === item.id 
                  ? "text-secondary" 
                  : "text-on-surface/60 hover:text-on-surface"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary shadow-[0_0_8px_rgba(0,227,253,0.6)]" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Bell className="hidden sm:block w-5 h-5 text-primary cursor-pointer hover:text-secondary transition-colors" />
          <button className="bg-gradient-to-r from-primary to-secondary text-surface font-bold px-4 md:px-6 py-2 rounded-DEFAULT hover:shadow-[0_0_15px_rgba(0,227,253,0.4)] transition-all active:scale-95 duration-150 flex items-center gap-2 text-sm md:text-base">
            <Zap className="w-4 h-4 fill-current" />
            Deploy
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-surface/95 backdrop-blur-2xl z-40 border-t border-primary/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col items-center justify-center h-full gap-8 font-technical">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-2xl uppercase tracking-[0.2em] transition-colors",
                  activeSection === item.id ? "text-secondary" : "text-on-surface/60"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
