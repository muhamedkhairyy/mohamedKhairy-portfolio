"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "../layout/section";

const highlights = [
    "React & Next.js Ecosystem",
    "TypeScript Development",
    "Scalable UI Architecture",
    "Performance Optimization",
    "Reusable Component Systems",
    "Modern Web Standards",
];

export function About() {
    return (
        <Section id="about" title="About Me">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="prose prose-lg prose-invert text-zinc-400">
                        <p className="mb-4">
                            I am a passionate and detail-oriented Frontend Engineer dedicated to creating exceptional digital experiences. My core expertise revolves around the modern React ecosystem, where I leverage Next.js and TypeScript to build robust, scalable applications.
                        </p>
                        <p className="mb-6">
                            Through my work, I focus heavily on delivering highly performant interfaces, establishing scalable UI architectures, and developing reusable component systems that keep codebases clean and maintainable. I believe that a great UI is not just about looks, but also about speed, accessibility, and intuitive interactions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="flex items-center gap-3 text-zinc-200"
                            >
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="font-medium">{highlight}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-light rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                    <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-xl">
                        <div className="space-y-6">
                            <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                                <h3 className="text-xl font-bold text-primary mb-2">My Philosophy</h3>
                                <p className="text-zinc-400">
                                    Write clean, self-documenting code. Optimize for the end user. Design for scalability. Build for the future.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800 text-center">
                                    <span className="block text-4xl font-bold text-white mb-1">Passionate</span>
                                    <span className="text-sm text-zinc-500">About Frontend</span>
                                </div>
                                <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800 text-center">
                                    <span className="block text-4xl font-bold text-white mb-1">Driven</span>
                                    <span className="text-sm text-zinc-500">By Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}
