export interface Metric {
  label: string;
  value: string;
  color: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  scope: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  color: string;
}

export interface Experience {
  period: string;
  title: string;
  description: string;
  active?: boolean;
}

export interface Tool {
  name: string;
  icon: string;
  color: string;
}
