import * as React from "react"
import { cn } from "@/lib/utils"

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { variant?: "default" | "outline" | "ghost", size?: "default" | "sm" | "icon" }>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    {
                        "bg-primary text-white hover:bg-primary-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25": variant === "default",
                        "border-2 border-border text-foreground bg-transparent hover:bg-surface hover:border-border-hover": variant === "outline",
                        "bg-transparent text-text-muted hover:bg-surface hover:text-foreground": variant === "ghost",
                    },
                    {
                        "h-12 px-8 text-lg": size === "default",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-12 w-12": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"
