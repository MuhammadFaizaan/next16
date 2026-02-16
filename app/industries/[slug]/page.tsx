import { industriesData } from '@/app/lib/industriesData';
import { notFound } from 'next/navigation';
import IndustryDetailClient from './IndustryDetailClient';

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
