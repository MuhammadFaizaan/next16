import { industriesData } from '@/app/lib/industriesData';
import { notFound } from 'next/navigation';
import IndustryDetailClient from './IndustryDetailClient';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const industry = industriesData.find((ind) => ind.slug === slug);

    if (!industry) {
        return {
            title: "Industry Not Found",
        };
    }

    return {
        title: `${industry.title} | Industry Solutions`,
        description: industry.shortDescription,
        openGraph: {
            title: `${industry.title} | Enterprise AI & Blockchain Solutions`,
            description: industry.shortDescription,
            url: `/industries/${slug}`,
            images: [{
                url: industry.image,
                alt: industry.title
            }],
        },
        alternates: {
            canonical: `/industries/${slug}`,
        },
    };
}

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return industriesData.map((industry) => ({
        slug: industry.slug,
    }));
}

export default async function IndustryDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = industriesData.find((ind) => ind.slug === slug);

    if (!industry) {
        notFound();
    }

    return <IndustryDetailClient industry={industry} />;
}
