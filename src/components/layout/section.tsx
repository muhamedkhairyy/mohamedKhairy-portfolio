import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "../ui/container"

interface SectionProps extends React.ComponentProps<"section"> {
    title?: string;
    subtitle?: string;
}

export function Section({ className, children, title, subtitle, ...props }: SectionProps) {
    return (
        <section className={cn("py-24 border-t border-zinc-900 bg-background", className)} {...props}>
            <Container>
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {title && (
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                {title.split(' ').map((word, i, arr) => (
                                    i === arr.length - 1 ? <span key={i} className="text-primary">{word}</span> : <span key={i}>{word} </span>
                                ))}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </Container>
        </section>
    )
}
