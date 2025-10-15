export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: 'frontend' | 'fullstack' | 'mobile';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}