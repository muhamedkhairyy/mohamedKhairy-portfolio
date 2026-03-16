import * as React from "react"
import { cn } from "@/lib/utils"

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border border-zinc-800 bg-black px-3 py-1 text-xs font-semibold text-zinc-300 transition-colors hover:border-primary",
                className
            )}
            {...props}
        />
    )
}
