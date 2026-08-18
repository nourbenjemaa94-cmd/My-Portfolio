export interface ProjectLink {
  label: string;
  url: string;
  icon: 'demo' | 'source';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
  isWip?: boolean;
}

export interface Experience {
  id: string;
  hash: string;
  date: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface TechCard {
  name: string;
  emoji: string;
  category: 'Languages' | 'Frameworks' | 'Databases' | 'Tools';
}

export interface AboutPill {
  label: string;
  variant: 'mauve' | 'blue';
}

export interface EducationEntry {
  school: string;
  schoolFull?: string;
  degree: string;
  dates: string;
  tags: string[];
  tagVariant: 'mauve' | 'blue';
  tapeColor: 'mauve' | 'blue';
  tapeClassName: string;
}

export interface SocialLink {
  label: string;
  url: string;
  href?: string;
  icon: 'github' | 'linkedin' | 'email';
}
