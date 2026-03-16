"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
            {/* Background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-10 w-72 h-72 bg-primary-dark rounded-full mix-blend-screen filter blur-[120px] opacity-20"
                />
                <motion.div
                    animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-light rounded-full mix-blend-screen filter blur-[120px] opacity-20"
                />
            </div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-6"
                >
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
                        👋 Hello, I&apos;m Mohamed Khairy
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    Frontend <span className="text-primary">Engineer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl sm:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Frontend Engineer specialized in building scalable and high-performance web applications using React, Next.js, and TypeScript.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a href="#projects" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto group">
                            View Projects <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <a href="#contact" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto">
                            <Mail className="w-5 h-5 mr-2" /> Contact Me
                        </Button>
                    </a>
                </motion.div>
            </Container>
        </section>
    );
}
