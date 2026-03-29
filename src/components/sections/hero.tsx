"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal, Code2, Cpu } from "lucide-react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
    const tech = ["React", "Next.js", "TypeScript", "Tailwind CSS", "SCSS", "React Query", "Material UI"]
    const CTAs = [
        { label: "See Projects", className: "w-full cursor-pointer sm:w-auto px-6 py-3 h-auto text-base group bg-primary hover:bg-primary-600 text-white font-medium border-0 transition-all shadow-glow hover:shadow-glow-hover", href: "#projects", icon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />, iconBefore: false },
        { label: "Download Resume", className: "w-full cursor-pointer sm:w-auto px-6 py-3 h-auto text-base border border-zinc-700 text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-zinc-800 bg-transparent", href: "/Muhamed-Khairy-Frontend-Engineer(CV).pdf", icon: <Download className="w-4 h-4 mr-2" />, download: true, target: "_blank", rel: "noopener noreferrer", iconBefore: true },
        { label: "Contact Me", className: "w-full cursor-pointer sm:w-auto px-6 py-3 h-auto text-base border border-zinc-700 text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-zinc-800 bg-transparent", href: "https://mail.google.com/mail/?view=cm&fs=1&to=muhamed.khairy97@gmail.com", icon: <Mail className="w-4 h-4 mr-2" />, target: "_blank", rel: "noopener noreferrer", iconBefore: true }
    ]
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
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
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium surface-glass text-text-muted">
                                <Terminal className="w-4 h-4 mr-2 text-primary" />
                                Senior Frontend Engineer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Mohamed <span className="text-primary">Khairy</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="text-xl sm:text-2xl font-medium text-text-dim"
                        >
                            Frontend Engineer | React • Next.js • TypeScript
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-lg text-text-muted max-w-xl leading-relaxed"
                        >
                            I build scalable, high-performance web applications with a strong focus on SEO optimization, design systems, and modern frontend architecture.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap gap-2 pt-2"
                        >
                            {tech.map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs font-medium bg-surface text-text-muted rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default">
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
                            {CTAs.map((cta) => (
                                <a
                                    key={cta.label}
                                    href={cta.href}
                                    {...(cta.target ? { target: cta.target, rel: "noopener noreferrer" } : {})}
                                    {...(cta.download ? { download: true } : {})}
                                    {...(cta.label === "Contact Me" ? { "data-contact": "true" } : {})}
                                >
                                    <Button className={cn("w-full sm:w-auto cursor-pointer", cta.className)}>
                                        {cta.icon && cta.iconBefore ? cta.icon : null}
                                        {cta.label}
                                        {cta.icon && !cta.iconBefore ? cta.icon : null}
                                    </Button>
                                </a>
                            ))}
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
                            className="absolute -top-12 -left-8 w-20 h-20 surface-glass rounded-2xl shadow-2xl flex items-center justify-center z-20"
                        >
                            <Code2 className="w-10 h-10 text-primary" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -right-6 w-16 h-16 surface-glass rounded-2xl shadow-2xl flex items-center justify-center z-20"
                        >
                            <Cpu className="w-8 h-8 text-foreground" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 -right-12 w-14 h-14 surface-glass rounded-xl shadow-2xl flex items-center justify-center z-20"
                        >
                            <Terminal className="w-6 h-6 text-text-muted" />
                        </motion.div>

                        <div className="relative rounded-xl bg-background border border-border shadow-surface overflow-hidden z-10 w-full max-w-lg mx-auto">
                            <div className="flex items-center px-4 py-3 bg-surface border-b border-border">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-error/90" />
                                    <div className="w-3 h-3 rounded-full bg-warning/90" />
                                    <div className="w-3 h-3 rounded-full bg-success/90" />
                                </div>
                                <div className="mx-auto text-xs text-text-dim font-mono">engineer.ts</div>
                            </div>

                            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-left">
                                <pre className="text-text-dim">
                                    <code className="block">
                                        <span className="text-primary">const</span> <span className="text-info">engineer</span> <span className="text-primary">=</span> {'{\n'}
                                        {'  '}name: <span className="text-success">"Mohamed Khairy"</span>,\n
                                        {'  '}role: <span className="text-success">"Senior Frontend Engineer"</span>,\n
                                        {'  '}skills: [\n
                                        {'    '}<span className="text-success">"React"</span>, <span className="text-success">"Next.js"</span>, <span className="text-success">"TypeScript"</span>,\n
                                        {'    '}<span className="text-success">"Tailwind CSS"</span>, <span className="text-success">"React Query"</span>\n
                                        {'  '}],\n
                                        {'  '}focus: [\n
                                        {'    '}<span className="text-success">"SEO"</span>, <span className="text-success">"Design Systems"</span>,\n
                                        {'    '}<span className="text-success">"Architecture"</span>\n
                                        {'  '}]\n
                                        {'}'};\n
                                        \n
                                        <span className="text-text-muted">// Ready to build the future?</span>\n
                                        <span className="text-info">engineer</span>.<span className="text-warning">connect</span>();
                                        <motion.span
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
                                        />
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
