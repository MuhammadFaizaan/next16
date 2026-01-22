export interface ServiceItem {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    image: string;
}

export interface ServiceCategory {
    id: string;
    slug: string;
    title: string;
    description: string;
    icon: string;
    services: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
    {
        id: "cat_blockchain",
        slug: "blockchain-services",
        title: "Blockchain Services",
        description: "End-to-end blockchain innovation, from smart contracts to RWA tokenization.",
        icon: "FiAnchor",
        services: [
            {
                id: "srv_rwa",
                slug: "tokenization-of-real-world-assets",
                title: "Tokenization of Real-World Assets (RWA)",
                shortDescription: "Bridge physical assets to the digital world.",
                fullDescription: "Unlock liquidity and fractional ownership by tokenizing real-world assets. We build secure platforms to correct compliant issuance and trading of tokenized assets like real estate, art, and commodities.",
                features: ["Asset Fractionalization", "Regulatory Compliance", "Secure Custody Integration", "Secondary Market Enablement"],
                image: "https://images.unsplash.com/photo-1620321023374-d1a2650b4685?q=80&w=2674&auto=format&fit=crop",
            },
            {
                id: "srv_smart_contracts",
                slug: "smart-contract-development-audits",
                title: "Smart Contract Development & Audits",
                shortDescription: "Secure, gas-efficient, and audited smart contracts.",
                fullDescription: "We develop and audit smart contracts for DeFi protocols, NFT marketplaces, and DAO governance. Our rigorous testing ensures your contracts are secure from vulnerabilities and optimized for gas costs.",
                features: ["Solidity & Rust", "Formal Verification", "Gas Optimization", "Security Audits"],
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop",
            },
            {
                id: "srv_dapp",
                slug: "dapp-web3-infrastructure",
                title: "dApp & Web3 Infrastructure",
                shortDescription: "Robust decentralized applications and infrastructure.",
                fullDescription: "Build scalable dApps with intuitive user interfaces and reliable node infrastructure. We handle everything from wallet integration to indexing and querying on-chain data.",
                features: ["WalletConnect Integration", "Node Management", "IPFS Storage", "The Graph Indexing"],
                image: "https://images.unsplash.com/photo-1639322537228-ad7117a2143b?q=80&w=2664&auto=format&fit=crop",
            },
            {
                id: "srv_chain",
                slug: "chain-integrations",
                title: "Chain Integrations",
                shortDescription: "Seamless integration with EVM and non-EVM chains.",
                fullDescription: "Expand your reach by integrating with multiple blockchains. We specialize in cross-chain bridges, Layer 2 scaling solutions, and custom subnet deployments.",
                features: ["Cross-chain Bridges", "Layer 2 Solutions", "Custom Subnets", "Oracle Integration"],
                image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2664&auto=format&fit=crop",
            },
            {
                id: "srv_consulting",
                slug: "blockchain-consulting-security-assessment",
                title: "Blockchain Consulting & Security",
                shortDescription: "Expert guidance and security assessments.",
                fullDescription: "Navigate the complex web3 landscape with our expert consulting. We provide architectural planning, tokenomics design, and comprehensive security assessments to safeguard your project.",
                features: ["Tokenomics Design", "Architecture Planning", "Risk Assessment", "Whitepaper Development"],
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
            }
        ]
    },
    {
        id: "cat_ai",
        slug: "ai-services",
        title: "AI Services",
        description: "Intelligent solutions powering the next generation of business.",
        icon: "AiOutlineRobot",
        services: [
            {
                id: "srv_gen_ai",
                slug: "generative-ai-custom-llms",
                title: "Generative AI & Custom LLMs",
                shortDescription: "Tailored Large Language Models for your business.",
                fullDescription: "Harness the power of Generative AI. We fine-tune LLMs on your proprietary data to create intelligent assistants, content generators, and knowledge retrieval systems.",
                features: ["Model Fine-tuning", "RAG Implementation", "Prompt Engineering", "Private AI Deployment"],
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
            },
            {
                id: "srv_agents",
                slug: "ai-agents-voice-interfaces",
                title: "AI Agents & Voice Interfaces",
                shortDescription: "Autonomous agents and conversational AI.",
                fullDescription: "Create autonomous agents that can perform tasks and make decisions. We also build sophisticated voice interfaces for meaningful, human-like interactions.",
                features: ["Autonomous Workflows", "Voice Synthesis", "Natural Language Understanding", "Multi-agent Systems"],
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
            },
            {
                id: "srv_ai_chain",
                slug: "ai-blockchain-integration",
                title: "AI + Blockchain Integration",
                shortDescription: "Converging intelligence with trustless settlement.",
                fullDescription: "Combine the reasoning power of AI with the security of blockchain. We build decentralized AI networks, verifiable inference systems, and AI-managed DAOs.",
                features: ["Verifiable Inference", "AI DAOs", "On-chain Agents", "Decentralized Compute"],
                image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=2576&auto=format&fit=crop",
            },
            {
                id: "srv_mlops",
                slug: "data-engineering-mlops",
                title: "Data Engineering & MLOps",
                shortDescription: "Scalable data pipelines and model lifecycle management.",
                fullDescription: "Build the foundation for AI success. We engineer robust data pipelines and implement MLOps practices to ensure your models are reliable, scalable, and easy to maintain.",
                features: ["Data Pipelines", "Model Monitoring", "Feature Stores", "Automated Retraining"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            },
            {
                id: "srv_mobile_ai",
                slug: "mobile-ai-solutions",
                title: "Mobile AI Solutions",
                shortDescription: "On-device AI for smarter mobile apps.",
                fullDescription: "Bring intelligence to the edge. We integrate lightweight AI models directly into mobile applications for real-time features like computer vision, recommendation engines, and offline capabilities.",
                features: ["CoreML & TensorFlow Lite", "On-device Inference", "Computer Vision", "Personalization"],
                image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop",
            }
        ]
    },
    {
        id: "cat_web",
        slug: "web-app-development-services",
        title: "Web App Development Services",
        description: "Scalable, high-performance web applications built for growth.",
        icon: "AiOutlineGlobal",
        services: [
            {
                id: "srv_custom_web",
                slug: "custom-web-applications",
                title: "Custom Web Applications",
                shortDescription: "Bespoke web platforms engineered for complex needs.",
                fullDescription: "We build enterprise-grade web applications tailored to your specific business processes. Using modern frameworks like Next.js, we ensure scalability, security, and top-tier performance.",
                features: ["Enterprise Architecture", "SaaS Development", "Cloud-Native", "Microservices"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            },
            {
                id: "srv_web_mvp",
                slug: "prototyping-mvp-development",
                title: "Prototyping & MVP Development",
                shortDescription: "Validate your web product ideas fast.",
                fullDescription: "Go from concept to market-ready MVP in weeks. We focus on core value propositions to build testable, scalable web products that attract early adopters and investors.",
                features: ["Rapid Iteration", "User Testing", "Scalable Foundation", "Lean Methodology"],
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
            },
            {
                id: "srv_uiux",
                slug: "ui-ux-design-web-product-strategy",
                title: "UI/UX Design & Strategy",
                shortDescription: "User-centric design that drives engagement.",
                fullDescription: "We don't just write code; we craft experiences. Our design team creates intuitive, accessible, and beautiful interfaces backed by solid product strategy and user research.",
                features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2600&auto=format&fit=crop",
            },
            {
                id: "srv_fullstack",
                slug: "full-stack-engineering",
                title: "Full-Stack Engineering",
                shortDescription: "Complete frontend and backend solutions.",
                fullDescription: "Our full-stack expertise covers everything from responsive frontends to powerful backends and databases. We ensure seamless integration and consistent quality across the entire stack.",
                features: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"],
                image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2574&auto=format&fit=crop",
            }
        ]
    },
    {
        id: "cat_mobile",
        slug: "mobile-app-development-services",
        title: "Mobile App Development Services",
        description: "Native and cross-platform mobile experiences that engage users.",
        icon: "AiOutlineMobile",
        services: [
            {
                id: "srv_cross_platform",
                slug: "cross-platform-app-development",
                title: "Cross-Platform App Development",
                shortDescription: "Flutter & React Native solutions for iOS and Android.",
                fullDescription: "Reach a wider audience with a single codebase. We build high-performance cross-platform apps that look and feel native, reducing development time and maintenance costs.",
                features: ["React Native", "Flutter", "Unified Codebase", "Native Performance"],
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop",
            },
            {
                id: "srv_native",
                slug: "native-app-development",
                title: "Native App Development",
                shortDescription: "Premium native experiences with Swift and Kotlin.",
                fullDescription: "For applications demanding maximum performance and platform-specific features, we build native iOS and Android apps that leverage the full power of the device.",
                features: ["Swift (iOS)", "Kotlin (Android)", "Platform APIs", "High Performance"],
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
            },
            {
                id: "srv_mobile_mvp",
                slug: "mvp-rapid-prototyping-mobile",
                title: "MVP & Rapid Prototyping",
                shortDescription: "Quick-to-market mobile MVPs.",
                fullDescription: "Test your mobile app concept quickly. We build functional MVPs that help you gather user feedback and validate your business model before full-scale scaling.",
                features: ["Essential Features", "Fast Release", "User Analytics", "Iterative Development"],
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop",
            },
            {
                id: "srv_mobile_ai_feat",
                slug: "ai-powered-mobile-features",
                title: "AI-Powered Mobile Features",
                shortDescription: "Smart features for modern mobile apps.",
                fullDescription: "Enhance your mobile app with AI. From smart cameras and chatbots to personalized recommendations and predictive text, we integrate AI to boost user engagement.",
                features: ["Smart Camera", "Voice Assistance", "Predictive Analytics", "Personalization Engines"],
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
            }
        ]
    },
    {
        id: "cat_mvp",
        slug: "prototyping-and-mvp-services",
        title: "Prototyping & MVP",
        description: "Rapidly validate and launch your ideas with market-ready MVPs.",
        icon: "FiLayers",
        services: [
            {
                id: "srv_prototyping",
                slug: "rapid-prototyping",
                title: "Rapid Prototyping",
                shortDescription: "Visualize your product before you build.",
                fullDescription: "Turn ideas into tangible interactive prototypes. We help you visualize flows, test concepts with users, and refine requirements before writing a single line of code.",
                features: ["Interactive Mockups", "User Flow Mapping", "Feasibility Checks", "Design Validation"],
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop",
            },
            {
                id: "srv_mvp_dev",
                slug: "mvp-development",
                title: "MVP Development",
                shortDescription: "Launch your core product fast.",
                fullDescription: "We identify the critical features needed to solve your users' core problems and build a robust MVP that provides immediate value while laying the groundwork for scale.",
                features: ["Core Feature Focus", "Speed to Market", "Scalable Architecture", "Feedback Loops"],
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2676&auto=format&fit=crop",
            },
            {
                id: "srv_prod_strategy",
                slug: "product-strategy-ux-architecture",
                title: "Product Strategy & UX",
                shortDescription: "Strategic planning for product success.",
                fullDescription: "Success requires more than just code. We help you define your product vision, target audience, and roadmap, ensuring your MVP aligns with long-term business goals.",
                features: ["Market Analysis", "Roadmap Planning", "Information Architecture", "UX Strategy"],
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
            },
            {
                id: "srv_scale",
                slug: "scalable-engineering-future-growth",
                title: "Scalable Engineering",
                shortDescription: "Built to grow from day one.",
                fullDescription: "Don't let technical debt slow you down. We architect your MVP with future growth in mind, using scalable patterns and technologies that can handle increased load and complexity.",
                features: ["Microservices Ready", "Cloud Scalability", "Clean Code Best Practices", "CI/CD Pipelines"],
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
            }
        ]
    }
];
