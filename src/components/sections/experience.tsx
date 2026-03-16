"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "../layout/section";

const experiences = [
    {
        role: "Frontend Engineer",
        company: "Tech Solutions Inc.",
        duration: "2021 - Present",
        description: "Working with React, Next.js, TypeScript and building scalable applications.",
        achievements: [
            "Led the migration from Create React App to Next.js reducing load times by 40%.",
            "Architected a scalable UI component library using Tailwind CSS and Radix UI.",
            "Optimized Core Web Vitals resulting in improved SEO rankings.",
        ],
    },
    {
        role: "Web Developer",
        company: "Creative Agency Co.",
        duration: "2019 - 2021",
        description: "Developed marketing sites and robust internal tools for client-facing software.",
        achievements: [
            "Implemented responsive web designs resolving mobile-view dropoffs by 30%.",
            "Collaborated with backend engineers to integrate RESTful APIs efficiently.",
        ],
    },
];

export function Experience() {
    return (
        <Section id="experience" title="Work Experience" subtitle="My professional journey in building web applications.">
            <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-0 md:border-none space-y-12 max-w-4xl mx-auto">
                {/* Vertical line for desktop */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-[1px] w-[2px] bg-zinc-800" />

                {experiences.map((exp, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline Icon */}
                            <div className="absolute left-[-29px] md:left-1/2 md:-ml-6 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-black border-4 border-primary shadow-sm z-10">
                                <Briefcase className="w-5 h-5 text-primary" />
                            </div>

                            {/* Content Area */}
                            <div className={`w-full md:w-1/2 pl-8 md:px-12 pt-2 md:pt-0 ${isEven ? "md:text-right" : "md:text-left"}`}>
                                <div className={`p-6 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition relative`}>

                                    {/* Tooltip triangle indicator */}
                                    <div className={`hidden md:block absolute top-[18px] w-4 h-4 bg-zinc-900 border-zinc-800 transform rotate-45 ${isEven ? "-right-2 border-t border-r" : "-left-2 border-b border-l"
                                        }`} />

                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                                        {exp.duration}
                                    </span>

                                    <h3 className="text-2xl font-bold mb-1 text-white">{exp.role}</h3>
                                    <h4 className="text-lg font-medium text-zinc-400 mb-4">{exp.company}</h4>

                                    <p className="text-zinc-300 mb-4">
                                        {exp.description}
                                    </p>

                                    <ul className={`text-sm text-zinc-400 space-y-2 ${isEven ? "md:text-right" : "md:text-left"}`}>
                                        {exp.achievements.map((achievement, actIdx) => (
                                            <li key={actIdx} className={`flex items-start gap-2 ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                                                <span className="text-primary mt-1">•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}
