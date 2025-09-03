export interface NavigationItem {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
}