export interface DataType {
  team: string;
  longDescription: string;
  institution: string;
  achievements: [];
  location: string;
  period: string;
  company: string;
  type: string;
  id: number;
  createdAt?: string; 
  title: string;
  category?: string;
  hastag?: string[]; 
  content?: string; 
  image?: image; 
  technologies?: technologies[]; 
  links?: Links; 
  certificateImgs?: image[]; 
  description?: string; 
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

export interface image {
  small: string;
  full: string;
}

export interface technologies {
  tech: string;
}

export interface Links {
  github: string;
  website: string;
}
