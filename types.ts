export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  tech: string;
  description: string[];
  link?: string;
  cta?: string;
}

export interface CaseStudy {
  title: string;
  link: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Experience = 'experience',
  Projects = 'projects',
  Skills = 'skills',
  CaseStudies = 'case-studies',
  Contact = 'contact',
}