"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/container";

export function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-black text-white border-t border-zinc-900 overflow-hidden min-h-[60vh] flex flex-col justify-center">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-dark mix-blend-screen filter blur-[120px] opacity-20" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary-light mix-blend-screen filter blur-[120px] opacity-20" />
            </div>

            <Container className="relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    Let's Work <span className="text-primary">Together</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-zinc-400 max-w-2xl mx-auto border-b border-zinc-900 pb-12 mb-12"
                >
                    I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="mailto:contact@example.com"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25 transition-all w-full sm:w-auto"
                    >
                        <Mail className="w-5 h-5" /> Say Hello <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <div className="flex gap-4">
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-primary hover:bg-zinc-800 transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/muhamed-khairy-b29797203"
                            target="_blank"
                            rel="noreferrer"
                            className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-primary hover:bg-zinc-800 transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
