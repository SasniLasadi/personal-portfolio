export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  cover: string;
  gallery?: string[];
  highlights?: string[];
  featured?: boolean;
  body: string[];
}

export interface TechCategory {
  category: string;
  items: readonly string[];
}

export interface EducationEntry {
  years: string;
  title: string;
  place: string;
  detail?: string;
  badge?: string;
  featured?: boolean;
}

export interface AchievementEntry {
  year: string;
  title: string;
  place: string;
  detail: string;
}

export interface InternshipProject {
  slug: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  body?: string[];
  stack: string[];
  contribution: string[];
  cover: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  gallery?: string[];
  featured?: boolean;
  confidential?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  wide?: boolean;
  tall?: boolean;
}