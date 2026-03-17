import { Container } from "../ui/container"

export function Footer() {
    return (
        <footer className="py-12 bg-black text-white border-t border-zinc-900 border-opacity-50">
            <Container className="text-center">
                <p className="text-zinc-500">
                    Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS.
                </p>
                <p className="text-zinc-600 mt-2 text-sm text-center">
                    © 2025 Mohamed Khairy. All rights reserved.
                </p>
            </Container>
        </footer>
    )
}
