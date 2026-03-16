"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Lightbulb } from "lucide-react";
import { Section } from "../layout/section";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { skillCategories } from "@/data/skills";

const icons = {
    frontend: <Code2 className="w-6 h-6 text-primary" />,
    tools: <Wrench className="w-6 h-6 text-primary" />,
    concepts: <Lightbulb className="w-6 h-6 text-primary" />,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export function Skills() {
    return (
        <Section id="skills" title="Technical Skills" subtitle="The technologies, tools, and practices I use to build scalable web applications.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                    >
                        <Card className="h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-black rounded-2xl border border-zinc-800">
                                    {icons[category.iconName as keyof typeof icons]}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2 flex-grow"
                            >
                                {category.skills.map((skill) => (
                                    <motion.div key={skill} variants={itemVariants}>
                                        <Badge>{skill}</Badge>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
