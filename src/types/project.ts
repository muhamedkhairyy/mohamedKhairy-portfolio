export interface ProjectDetails {
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  screenshots: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "Frontend" | "Fullstack" | "Library" | "React" | "Next.js";
  details: ProjectDetails;
}
