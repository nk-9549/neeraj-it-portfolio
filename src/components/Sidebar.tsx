import { LayoutDashboard, BarChart3, Cpu, History, Terminal, Settings } from "lucide-react";
import { cn } from "../lib/utils";

export default function Sidebar() {
  const sideItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Metrics" },
    { icon: Cpu, label: "Systems" },
    { icon: History, label: "Logs" },
    { icon: Terminal, label: "Terminal" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 hover:w-64 transition-all duration-500 z-40 border-r border-primary/10 bg-surface hidden md:flex flex-col py-24 overflow-hidden group">
      <div className="flex flex-col gap-4">
        {sideItems.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center px-6 py-4 gap-6 cursor-pointer transition-all",
              item.active 
                ? "bg-primary/10 text-primary border-r-4 border-primary" 
                : "text-on-surface/40 hover:text-secondary hover:bg-secondary/5"
            )}
          >
            <item.icon className="w-6 h-6 flex-shrink-0" />
            <span className="font-technical uppercase text-[10px] tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex items-center px-6 py-4 text-on-surface/40 hover:text-primary gap-6 cursor-pointer transition-all">
          <Settings className="w-6 h-6 flex-shrink-0" />
          <span className="font-technical uppercase text-[10px] tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Settings
          </span>
        </div>
      </div>
    </aside>
  );
}
