import type { Metadata } from 'next';
import IndustryListClient from './IndustryListClient';

export const metadata: Metadata = {
    title: "Industries We Serve | Enterprise AI & Blockchain Solutions",
    description: "Discover how NextChainX transforms businesses across Fintech, Healthcare, E-Commerce, Real Estate, and more using AI and Blockchain technology.",
    openGraph: {
        title: "Industries We Serve | Enterprise AI & Blockchain Solutions",
        description: "Discover how NextChainX transforms businesses across Fintech, Healthcare, E-Commerce, Real Estate, and more using AI and Blockchain technology.",
        url: "/industries",
    },
    alternates: {
        canonical: "/industries",
    },
};

export default function IndustriesPage() {
    return <IndustryListClient />;
}
