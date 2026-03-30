import { Metric, SkillCategory, Project, Experience, Tool } from "./types";

export const METRICS: Metric[] = [
  { label: "Users Managed", value: "300+", color: "secondary" },
  { label: "SLA Resolution", value: "99%+", color: "primary" },
  { label: "System Uptime", value: "99%", color: "tertiary" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cloud & Workspace",
    icon: "Cloud",
    color: "secondary",
    skills: [
      { name: "Microsoft 365 Admin", percentage: 95 },
      { name: "Google Workspace", percentage: 90 },
      { name: "Azure AD / Entra ID", percentage: 99 },
    ],
  },
  {
    title: "Infrastructure",
    icon: "Router",
    color: "primary",
    skills: [
      { name: "LAN/WAN & DNS/DHCP", percentage: 88 },
      { name: "Network Troubleshooting", percentage: 90 },
      { name: "Firewalls & VPN", percentage: 85 },
    ],
  },
  {
    title: "Support & Management",
    icon: "SupportAgent",
    color: "tertiary",
    skills: [
      { name: "L1/L2 Tech Support", percentage: 98 },
      { name: "IT Asset Management", percentage: 95 },
      { name: "Incident Management", percentage: 92 },
    ],
  },
  {
    title: "Security & Systems",
    icon: "ShieldCheck",
    color: "on-surface",
    skills: [
      { name: "Endpoint Defense", percentage: 92 },
      { name: "CCTV & Biometric", percentage: 95 },
      { name: "Active Directory", percentage: 94 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "M365 & Google Workspace Admin",
    scope: "Cloud Administration",
    problem: "Need for centralized user lifecycle and license optimization for 300+ users.",
    solution: "Implemented security policies and optimized licenses with zero data loss.",
    impact: "99%+ ticket resolution within SLA and streamlined user provisioning.",
    image: "https://picsum.photos/seed/m365/800/600",
    color: "secondary",
  },
  {
    title: "Fiber Infrastructure Upgrade",
    scope: "Network Modernization",
    problem: "Copper-based internet infrastructure causing bandwidth bottlenecks.",
    solution: "Led the transition from copper to fiber across 3 office locations.",
    impact: "Significant improvement in bandwidth performance and operational efficiency.",
    image: "https://picsum.photos/seed/fiber/800/600",
    color: "primary",
  },
  {
    title: "L1/L2 Support & Asset Management",
    scope: "IT Operations",
    problem: "Managing 300+ devices across multiple departments with minimal disruption.",
    solution: "Conducted audits, reduced asset discrepancies, and resolved 99%+ tickets within SLA.",
    impact: "Maintained 99% system uptime and ensured high user satisfaction.",
    image: "https://picsum.photos/seed/support/800/600",
    color: "tertiary",
  },
];

export const TOOLS: Tool[] = [
  { name: "Azure", icon: "Cloud", color: "primary" },
  { name: "M365 Admin", icon: "LayoutGrid", color: "secondary" },
  { name: "Windows Server", icon: "Monitor", color: "tertiary" },
  { name: "Firewalls", icon: "ShieldCheck", color: "green-400" },
  { name: "PowerShell", icon: "Terminal", color: "orange-400" },
];

export const EXPERIENCES: Experience[] = [
  {
    period: "01/2025 — PRESENT",
    title: "IT Administrator at Edunet Group",
    description: "Managing Microsoft 365 and Google Workspace for 300+ users, overseeing IT asset lifecycle, and supporting LAN/Wi-Fi infrastructure.",
    active: true,
  },
  {
    period: "08/2023 — 12/2024",
    title: "Senior IT Executive at Secure Debt Management Consultants Pvt Ltd.",
    description: "Managed end-to-end IT operations across 3 office locations, administered firewalls, and led internet infrastructure upgrades.",
  },
  {
    period: "04/2023 — 08/2023",
    title: "Technical Support at Cito Infotech Pvt Ltd",
    description: "Managed Active Directory user provisioning, performed daily server backups, and monitored Sophos firewall/VPN access.",
  },
  {
    period: "09/2021 — 02/2022",
    title: "Data Analyst (Internship) at IBM India Pvt Ltd",
    description: "Developed a Netflix dashboard using Python and Power BI, applying data analysis skills to real-world data.",
  },
];
