import { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    slug: "",
    title: "E-Commerce Website",
    description:
      "A high-performance analytics dashboard for digital storefronts with real-time data visualization.",
    image: "/homzmart.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "MUI",
      "Redux",
      "Sass",
      "Storybook",
      "SEO Optimization",
      "Design System",
    ],
    githubUrl: "",
    liveUrl: "https://homzmart.com",
    category: "E-commerce",
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
    slug: "",
    title: "Seller Center Dashboard",
    description:
      "A beautiful, SEO-optimized marketing site for a modern fintech startup with smooth scroll animations.",
    image: "/seller-center.png",
    techStack: [
      "react",
      "javascript",
      "Redux",
      "React Router",
      "Yup",
      "react-hook-form",
      "Sass",
      "Design System",
    ],
    githubUrl: "",
    category: "Dashboards",
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
    slug: "",
    title: "OMS Dashboard",
    description:
      "A reusable, accessible component library built for a suite of internal corporate tools.",
    image: "/OMS.png",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "React Router",
      "Yup",
      "react-hook-form",
      "Sass",
      "Design System",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "Dashboards",
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
  {
    slug: "",
    title: "HomzDesign Chat Sass",
    description:
      "A reusable, accessible component library built for a suite of internal corporate tools.",
    image: "/Homzdesgin.png",
    techStack: [
      "next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Sass",
      "SEO Optimization",
      "Design System",
    ],
    githubUrl: "",
    liveUrl: "https://homzdesign.homzmart.com/chat",
    category: "SaaS",
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
  {
    slug: "",
    title: "HomzDesign Landing Page",
    description:
      "A reusable, accessible component library built for a suite of internal corporate tools.",
    image: "/HomzDesgin-landing.png",
    techStack: [
      "next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Sass",
      "SEO Optimization",
      "Design System",
    ],
    githubUrl: "",
    liveUrl: "https://homzdesign.homzmart.com",
    category: "Landing Pages",
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
