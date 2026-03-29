import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mohamed-khairy.netlify.app";
const siteName = "Mohamed Khairy | Senior Frontend Engineer";
const siteDescription =
  "Portfolio of Mohamed Khairy — Senior Frontend Engineer specialized in building scalable, high-performance web applications using React, Next.js, and TypeScript. Expert in SEO optimization, design systems, and modern frontend architecture.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: `%s | Mohamed Khairy`,
  },
  description: siteDescription,

  keywords: [
    "Mohamed Khairy",
    "Frontend Engineer",
    "Senior Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "SCSS",
    "React Query",
    "Material UI",
    "SEO Optimization",
    "Design Systems",
    "Web Performance",
    "Portfolio",
    "Frontend Architecture",
  ],

  authors: [{ name: "Mohamed Khairy", url: siteUrl }],
  creator: "Mohamed Khairy",
  publisher: "Mohamed Khairy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Khairy — Senior Frontend Engineer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@mohamedkhairy",
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Khairy",
              url: siteUrl,
              image: `${siteUrl}/og-image.png`,
              jobTitle: "Senior Frontend Engineer",
              description: siteDescription,
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "SCSS",
                "React Query",
                "Material UI",
                "SEO Optimization",
                "Design Systems",
                "Frontend Architecture",
              ],
              sameAs: [
                "https://github.com/muhamedkhairyy",
                "https://linkedin.com/in/mohamedkhairy",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen disabled-transitions`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
