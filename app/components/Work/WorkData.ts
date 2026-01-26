export interface Project {
    slug: string;
    title: string;
    category: string;
    client: string;
    year: string;
    thumbnail: string;
    description: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    images: string[];
    stats?: { label: string, value: string }[];
}

export const projects: Project[] = [
    {
        slug: 'assetx-rwa',
        title: 'AssetX: RWA Tokenization',
        category: 'Blockchain',
        client: 'AssetX Labs',
        year: '2025',
        thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
        description: 'End-to-end platform for tokenizing real-world assets like real estate and fine art.',
        fullDescription: 'AssetX is a revolutionary platform that allows investors to buy fractional shares of high-value assets. We built the entire architecture, from smart contracts to the user-facing dApp, ensuring security and compliance at every step.',
        challenge: 'Bridging the gap between traditional legal ownership and blockchain-based tokenization while maintaining regulatory compliance across multiple jurisdictions.',
        solution: 'Developed a custom ERC-3643 based compliance layer and a high-performance order matching engine to facilitate seamless fractional trading.',
        results: [
            '$500M+ assets tokenized in the first year',
            'SEC-compliant smart contract architecture',
            'Zero security breaches since launch'
        ],
        stats: [
            { label: 'Asset Value', value: '$500M+' },
            { label: 'Users', value: '50k+' },
            { label: 'Avg Liquidity', value: '15%' }
        ],
        technologies: ['Solidity', 'Next.js', 'Rust', 'PostgreSQL'],
        images: [
            'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1642104704074-907c0698acd8?q=80&w=2000&auto=format&fit=crop'
        ]
    },
    {
        slug: 'nexus-ai',
        title: 'NexusAI: Enterprise Agents',
        category: 'Artificial Intelligence',
        client: 'Nexus Systems',
        year: '2024',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
        description: 'Autonomous AI agents designed to automate complex enterprise workflows and decision-making.',
        fullDescription: 'NexusAI provides corporations with custom-trained AI agents that can handle everything from customer support to supply chain optimization. The platform features a drag-and-drop agent builder and advanced monitoring tools.',
        challenge: 'Enterprises needed AI that could actually "do" work, not just answer questions, requiring complex tool-calling and multi-step reasoning.',
        solution: 'Built a proprietary orchestration layer that combines RAG (Retrieval-Augmented Generation) with autonomous task execution capabilities.',
        results: [
            '65% reduction in operational overhead',
            'Successful integration with 50+ enterprise tools',
            'Enterprise-grade data isolation and security'
        ],
        stats: [
            { label: 'Efficiency Gain', value: '65%' },
            { label: 'Agents Deployed', value: '1.2k' },
            { label: 'Uptime', value: '99.9%' }
        ],
        technologies: ['Python', 'LangChain', 'OpenAI', 'VectorDB'],
        images: [
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=2000&auto=format&fit=crop'
        ]
    },
    {
        slug: 'cloudscale-infra',
        title: 'CloudScale Infrastructure',
        category: 'DevOps & Cloud',
        client: 'ScaleUp Corp',
        year: '2025',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
        description: 'Next-generation cloud infrastructure orchestration for high-traffic SaaS applications.',
        fullDescription: 'CloudScale helps startups and enterprises scale their infrastructure automatically. We developed the core orchestration engine that manages Kubernetes clusters across multiple clouds with zero-downtime deployments.',
        challenge: 'Legacy infrastructure could not handle sudden traffic spikes, leading to frequent downtime and lost revenue.',
        solution: 'Implemented a multi-cloud auto-scaling strategy with edge-first content delivery and automated failover mechanisms.',
        results: [
            'Zero downtime during peak traffic events',
            '45% reduction in cloud hosting costs',
            'Automated 90% of DevOps workflows'
        ],
        stats: [
            { label: 'Cost Reduction', value: '45%' },
            { label: 'Scaling Speed', value: '< 30s' },
            { label: 'Deployments/Day', value: '200+' }
        ],
        technologies: ['Kubernetes', 'Terraform', 'Go', 'AWS/GCP'],
        images: [
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop'
        ]
    }
];
