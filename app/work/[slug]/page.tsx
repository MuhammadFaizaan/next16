import type { Metadata } from "next";
import ProjectDetailsClient from './ProjectDetailsClient';
import { projects } from '../../components/Work/WorkData';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found | NextChainX",
        };
    }

    return {
        title: `${project.title} | AI & Blockchain Case Study | NextChainX`,
        description: project.description,
        openGraph: {
            title: `${project.title} | AI & Blockchain Case Study | NextChainX`,
            description: project.description,
            url: `https://www.nextchainx.io/work/${slug}`,
            images: [{ url: project.thumbnail }],
        },
        alternates: {
            canonical: `https://www.nextchainx.io/work/${slug}`,
        },
    };
}

export default function ProjectDetailsPage() {
    return <ProjectDetailsClient />;
}
