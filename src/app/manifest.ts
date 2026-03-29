import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohamed Khairy | Senior Frontend Engineer",
    short_name: "M. Khairy",
    description:
      "Portfolio of Mohamed Khairy — Senior Frontend Engineer specialized in React, Next.js, and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#f97316",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
