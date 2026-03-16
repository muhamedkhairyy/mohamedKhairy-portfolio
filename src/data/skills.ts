import { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    iconName: "frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "SCSS",
    ],
  },
  {
    title: "Tools",
    iconName: "tools",
    skills: ["Git", "GitHub", "REST APIs", "React Query"],
  },
  {
    title: "Concepts",
    iconName: "concepts",
    skills: [
      "Component Architecture",
      "Performance Optimization",
      "Clean Code",
      "State Management",
    ],
  },
];
