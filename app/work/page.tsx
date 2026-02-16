import type { Metadata } from "next";
import WorkClient from './WorkClient';

export const metadata: Metadata = {
    title: "Our Work | AI & Blockchain Portfolio | NextChainX",
    description: "Explore NextChainX's portfolio of AI systems, blockchain platforms, and scalable digital products. See how we deliver engineering excellence across global markets.",
    keywords: "NextChainX portfolio, AI project showcase, blockchain case studies, digital product engineering examples",
    openGraph: {
        title: "Our Work | AI & Blockchain Portfolio | NextChainX",
        description: "Explore NextChainX's portfolio of AI systems, blockchain platforms, and scalable digital products. See how we deliver engineering excellence across global markets.",
        url: "https://www.nextchainx.io/work",
        images: [{ url: "https://www.nextchainx.io/images/seo_image.jpg" }],
    },
    alternates: {
        canonical: "https://www.nextchainx.io/work",
    },
};

export default function WorkPage() {
    return <WorkClient />;
}
