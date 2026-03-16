import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
    return projectsData.map((p) => ({
        slug: p.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projectsData.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-24 pb-12 bg-background text-white">
            <Container className="max-w-4xl">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to projects
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                        {project.title}
                    </h1>
                    <p className="text-xl text-zinc-400 mb-6">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} className="bg-primary/10 text-primary border-primary/20 text-sm py-1.5 px-4">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors">
                            <Github className="w-5 h-5" /> Source Code
                        </a>
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-sm shadow-primary/20">
                                <ExternalLink className="w-5 h-5" /> Live Demo
                            </a>
                        )}
                    </div>
                </header>

                <section className="space-y-12">
                    <div className="rounded-3xl overflow-hidden shadow-xl border border-zinc-800">
                        <img src={project.image} alt={project.title} className="w-full h-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Problem</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                {project.details.problem}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Solution</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                {project.details.solution}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Architecture</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                {project.details.architecture}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Challenges</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                {project.details.challenges}
                            </p>
                        </div>
                    </div>

                    {project.details.screenshots && project.details.screenshots.length > 0 && (
                        <div className="pt-8">
                            <h2 className="text-2xl font-bold mb-6 text-white">More Screenshots</h2>
                            <div className="grid grid-cols-1 gap-8">
                                {project.details.screenshots.map((s, idx) => (
                                    <img key={idx} src={s} alt={`Screenshot ${idx + 1}`} className="rounded-3xl border border-zinc-800 shadow-md w-full h-auto" />
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            </Container>
        </article>
    );
}
