"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";

const categories = ["All", "E-commerce", "Dashboards", "Landing Pages", "SaaS",];

export function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projectsData.filter((project) =>
        activeCategory === "All" ? true : project.category === activeCategory
    );

    return (
        <Section id="projects" title="Featured Projects" subtitle="A selection of my recent work in building complex web applications.">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-12"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 z-20">
                                    {!project.liveUrl ? (
                                        <span className="px-3 py-1 bg-yellow-500/90 text-white text-xs font-bold rounded-full backdrop-blur-md shadow-sm">
                                            Preview Only
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-bold rounded-full backdrop-blur-md shadow-sm">
                                            Live Demo
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 mb-6 text-sm line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.techStack.map((tech) => (
                                        <Badge key={tech} className="bg-zinc-950 border-zinc-800 text-zinc-400 font-medium">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {project.githubUrl || project.liveUrl && <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                                    <div className="flex gap-4">
                                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>}
                                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-primary transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>}
                                    </div>
                                    {project.slug && <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1 group-hover:gap-2 transition-all">
                                        View Details <MonitorPlay className="w-4 h-4" />
                                    </Link>}
                                </div>}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-zinc-500 text-lg">No projects found in this category.</p>
                </div>
            )}
        </Section>
    );
}
