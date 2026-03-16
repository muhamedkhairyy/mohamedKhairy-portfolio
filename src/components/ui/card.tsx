import * as React from "react"
import { cn } from "@/lib/utils"

export function Card({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow",
                className
            )}
            {...props}
        />
    )
}
