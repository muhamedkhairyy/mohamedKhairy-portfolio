"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal, Code2, Cpu } from "lucide-react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#0B0B0B]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ffffff]/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <Container className="relative z-10 w-full py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-6 text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#111111] border border-zinc-800 text-zinc-300">
                                <Terminal className="w-4 h-4 mr-2 text-[#FF6B00]" />
                                Senior Frontend Engineer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFFF]"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Mohamed <span className="text-[#FF6B00]">Khairy</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl sm:text-2xl font-medium text-zinc-300"
                        >
                            Frontend Engineer | React • Next.js • TypeScript
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-lg text-zinc-400 max-w-xl leading-relaxed"
                        >
                            I build scalable, high-performance web applications with a strong focus on SEO optimization, design systems, and modern frontend architecture.
                        </motion.p>

                        {/* Tech Stack Highlights */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap gap-2 pt-2"
                        >
                            {["React", "Next.js", "TypeScript", "Tailwind CSS", "SCSS", "React Query", "Material UI"].map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#111111] text-zinc-400 rounded-md border border-zinc-800 hover:border-[#FF6B00]/50 hover:text-[#FF6B00] transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <a href="#projects" className="w-full sm:w-auto">
                                <Button className="w-full cursor-pointer sm:w-auto px-6 py-3 h-auto text-base group bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-medium border-0 transition-all shadow-[0_0_20px_-5px_rgba(255,107,0,0.4)] hover:shadow-[0_0_25px_-5px_rgba(255,107,0,0.6)]">
                                    See Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                            <a href="/resume.pdf" target="_blank" className="w-full sm:w-auto" download>
                                <Button variant="outline" className="w-full cursor-pointer sm:w-auto px-6 py-3 h-auto text-base border border-zinc-700 text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-zinc-800 bg-transparent">
                                    <Download className="w-4 h-4 mr-2" /> Download Resume
                                </Button>
                            </a>
                            <a href="#contact" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full cursor-pointer sm:w-auto px-6 py-3 h-auto text-base border border-zinc-700 text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-zinc-800 bg-transparent">
                                    <Mail className="w-4 h-4 mr-2" /> Contact Me
                                </Button>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -left-8 w-20 h-20 bg-[#111111] rounded-2xl border border-zinc-800 shadow-2xl flex items-center justify-center z-20 backdrop-blur-xl"
                        >
                            <Code2 className="w-10 h-10 text-[#FF6B00]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -right-6 w-16 h-16 bg-[#111111] rounded-2xl border border-zinc-800 shadow-2xl flex items-center justify-center z-20 backdrop-blur-xl"
                        >
                            <Cpu className="w-8 h-8 text-[#FFFFFF]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 -right-12 w-14 h-14 bg-[#111111] rounded-xl border border-zinc-800 shadow-2xl flex items-center justify-center z-20 backdrop-blur-xl"
                        >
                            <Terminal className="w-6 h-6 text-zinc-400" />
                        </motion.div>

                        {/* Code Editor Window */}
                        <div className="relative rounded-xl bg-[#0B0B0B] border border-zinc-800 shadow-2xl overflow-hidden z-10 w-full max-w-lg mx-auto">
                            {/* Editor Header */}
                            <div className="flex items-center px-4 py-3 bg-[#111111] border-b border-zinc-800">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="mx-auto text-xs text-zinc-500 font-mono">engineer.ts</div>
                            </div>

                            {/* Editor Body */}
                            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-left">
                                <pre className="text-zinc-300">
                                    <code className="block">
                                        <span className="text-[#FF6B00]">const</span> <span className="text-blue-400">engineer</span> <span className="text-[#FF6B00]">=</span> {'{\n'}
                                        {'  '}name: <span className="text-green-400">"Mohamed Khairy"</span>,\n
                                        {'  '}role: <span className="text-green-400">"Senior Frontend Engineer"</span>,\n
                                        {'  '}skills: [\n
                                        {'    '}<span className="text-green-400">"React"</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"TypeScript"</span>,\n
                                        {'    '}<span className="text-green-400">"Tailwind CSS"</span>, <span className="text-green-400">"React Query"</span>\n
                                        {'  '}],\n
                                        {'  '}focus: [\n
                                        {'    '}<span className="text-green-400">"SEO"</span>, <span className="text-green-400">"Design Systems"</span>,\n
                                        {'    '}<span className="text-green-400">"Architecture"</span>\n
                                        {'  '}]\n
                                        {'}'};\n
                                        \n
                                        <span className="text-zinc-500">// Ready to build the future?</span>\n
                                        <span className="text-blue-400">engineer</span>.<span className="text-yellow-200">connect</span>();
                                        <motion.span
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="inline-block w-2 h-4 bg-[#FF6B00] ml-1 align-middle"
                                        />
                                    </code>
                                </pre>
                            </div>
                        </div>

                        {/* Decorative glow behind the editor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#FF6B00]/20 to-transparent rounded-[3rem] blur-2xl -z-10" />

                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
