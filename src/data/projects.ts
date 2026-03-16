import { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    slug: "e-commerce-dashboard",
    title: "E-Commerce Analytics Dashboard",
    description:
      "A high-performance analytics dashboard for digital storefronts with real-time data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    category: "React",
    details: {
      problem:
        "Store owners lacked real-time visibility into their sales metrics, leading to delayed decision making.",
      solution:
        "Developed an interactive React dashboard pulling live data through websockets with optimized rendering.",
      architecture:
        "Monorepo structure. State managed with Zustand. Components modularized with Storybook.",
      challenges:
        "Handling large datasets without blocking the main thread. Solved by implementing virtualized lists.",
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      ],
    },
  },
  {
    slug: "fintech-landing",
    title: "FinTech Marketing Platform",
    description:
      "A beautiful, SEO-optimized marketing site for a modern fintech startup with smooth scroll animations.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "SCSS"],
    githubUrl: "https://github.com",
    category: "Next.js",
    details: {
      problem:
        "The client needed a highly performant and accessible landing page to capture investor and user interest.",
      solution:
        "Built a fully responsive and animated site leveraging Next.js SSG for optimal load times and SEO.",
      architecture:
        "Next.js App Router for layouts. Framer motion for scroll-triggered micro-interactions.",
      challenges:
        "Ensuring complex animations ran smoothly on low-end mobile devices.",
      screenshots: [
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  },
  {
    slug: "internal-ui-library",
    title: "Enterprise UI Component Library",
    description:
      "A reusable, accessible component library built for a suite of internal corporate tools.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    githubUrl: "https://github.com",
    liveUrl: "https://storybook.example.com",
    category: "React",
    details: {
      problem:
        "Inconsistent UI patterns and duplicated effort across multiple internal engineering teams.",
      solution:
        "Engineered a headless-UI based library customized with Tailwind for unified branding.",
      architecture:
        "Built with Rollup. Components strictly follow WAI-ARIA guidelines.",
      challenges:
        "Managing complicated nested states for multi-select dropdowns and data tables.",
      screenshots: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  },
];
