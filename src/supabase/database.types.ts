export interface DataType {
  institution: string;
  achievements: [string];
  location: string;
  period: string;
  company: string;
  type: string;
  id: number;
  createdAt?: string; // Optional for flexibility
  title: string;
  category?: string;
  hastag?: string[]; // Optional for flexibility
  content?: string; // Optional for flexibility (might not be present in Certificates)
  image?: image; // Optional for flexibility (might not be present in Certificates)
  technologies?: technologies[]; // Specific to Projects
  links?: Links; // Specific to Projects
  certificateImgs?: image[]; // Specific to Certificates (renamed for clarity)
  description?: string; // Specific to Blogs
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
