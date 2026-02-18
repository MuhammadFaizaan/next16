import type { Metadata } from "next";
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "About Us | AI & Blockchain Engineering Experts",
    description: "Learn about NextChainX's mission to build the future of AI and blockchain. Our team of experts delivers scalable enterprise solutions and innovative digital products.",
    keywords: ["About NextChainX", "AI experts", "blockchain engineers", "technology mission", "digital transformation team"],
    openGraph: {
        title: "About Us | AI & Blockchain Engineering Experts | NextChainX",
        description: "Learn about NextChainX's mission to build the future of AI and blockchain. Our team of experts delivers scalable enterprise solutions and innovative digital products.",
        url: "/about",
        images: [{ url: "/images/seo_image.jpg" }],
    },
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
