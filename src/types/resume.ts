export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  portrait: string;
  links: Link[];
  cv: { docx: string; pdf: string };
}

export interface Role {
  title: string;
  start: string; // 'YYYY-MM'
  end: string | 'present';
  highlights: string[];
}

export interface Experience {
  id: string;
  company: string;
  url: string;
  logo: string;
  summary: string;
  category: 'relevant' | 'other';
  roles: Role[]; // newest first
}

export interface Education {
  institution: string;
  url: string;
  logo: string;
  qualification: string;
  start: number;
  end: number;
  result: string;
  gpaByYear: { year: number; gpa: number }[];
}

export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  tech: string[];
  repo: { label: string; href: string };
  cover: string;
  gallery: string[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface AchievementGroup {
  label: string;
  items: string[];
}
