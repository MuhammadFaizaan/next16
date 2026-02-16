import type { Metadata } from "next";
import CareersClient from './CareersClient';

export const metadata: Metadata = {
    title: "Careers | Join the NextChainX Team | AI & Blockchain Jobs",
    description: "Explore career opportunities at NextChainX. Join our mission to build innovative AI and blockchain systems. Work with global markets and cutting-edge technology.",
    keywords: "NextChainX careers, AI jobs, blockchain development jobs, tech careers, hiring software engineers",
    openGraph: {
        title: "Careers | Join the NextChainX Team | AI & Blockchain Jobs",
        description: "Explore career opportunities at NextChainX. Join our mission to build innovative AI and blockchain systems. Work with global markets and cutting-edge technology.",
        url: "https://www.nextchainx.io/careers",
        images: [{ url: "https://www.nextchainx.io/images/seo_image.jpg" }],
    },
    alternates: {
        canonical: "https://www.nextchainx.io/careers",
    },
};

export default function CareersPage() {
    return <CareersClient />;
}
