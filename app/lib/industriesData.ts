import { IconType } from 'react-icons';
import {
    FaStethoscope,
    FaUniversity,
    FaShoppingCart,
    FaBuilding,
    FaPlane,
    FaIndustry,
    FaMobileAlt,
    FaLink,
    FaChartLine,
    FaHeartbeat,
    FaMicroscope,
    FaLock,
    FaBolt,
    FaSearch,
    FaBox,
    FaGlobe,
    FaFileContract,
    FaWaveSquare,
    FaSnapchatGhost,
    FaGem,
    FaKey,
    FaVial,
    FaTachometerAlt,
    FaTruck
} from 'react-icons/fa';

export interface IndustryItem {
    id: string;
    slug: string;
    title: string;
    shortDescription: string; // Used on cards
    fullDescription: string; // Used on the detail page hero
    detailedContent: string; // The main content of the page
    features: string[];
    image: string;
    icon: string; // We'll store the icon name as a string and map it or just use the component if possible in this file structure, but for serializable data, string is better. However, since this is a .ts file, we can export the component directly or an object. Let's use a string identifier for now to replicate the pattern in servicesData if any, or just direct imports if it's a server component usage. 
    // Actually, servicesData uses string "FiAnchor" etc. I'll stick to string identifiers for consistency if I can dynamically load them, or just export the data with the icon component directly since it's a .ts file not .json.
    // Let's just use the component directly in the data object for simplicity in Next.js server components.
    challenges: { title: string; description: string }[];
    marketStats: { label: string; value: string; extraInfo: string }[];
    useCases: { title: string; description: string; icon: string }[];
    parallaxImage: string;
    strategicApproach: { step: string; title: string; description: string }[];
}

export const industriesData: IndustryItem[] = [
    {
        id: "ind_fintech",
        slug: "fintech",
        title: "Fintech & Banking",
        shortDescription: "Revolutionizing financial services with secure, scalable technology.",
        fullDescription: "We empower financial institutions and startups with cutting-edge software solutions. From blockchain-based payments to AI-driven fraud detection, our fintech expertise drives innovation and security.",
        detailedContent: "The financial sector is undergoing a rapid transformation. Consumers demand seamless, mobile-first experiences, while diverse regulations require robust compliance mechanisms. We build platforms that bridge this gap, offering everything from neobank core systems to high-frequency trading algorithms.",
        features: [
            "Digital Wallet Development",
            "Payment Gateway Integration",
            "Blockchain & Smart Contracts",
            "AI-Powered Risk Assessment",
            "Regulatory Compliance Automation"
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2670",
        icon: "FaUniversity",
        challenges: [
            { title: "Legacy System Rigidity", description: "Banks struggle with outdated monolithic architectures that prevent rapid innovation." },
            { title: "Escalating Security Threats", description: "Cyber-attacks and fraud are becoming more sophisticated, requiring AI-led defense." },
            { title: "Regulatory Complexity", description: "Navigating Basel III, GDPR, and local banking laws consumes massive manual effort." }
        ],
        marketStats: [
            { label: "Fintech CAGR", value: "23.5%", extraInfo: "Annual growth projected through 2030" },
            { label: "Security Savings", value: "$1.2M", extraInfo: "Avg saved per firm via AI fraud detection" },
            { label: "Digital Adoption", value: "82%", extraInfo: "Of consumers now prefer mobile banking" }
        ],
        useCases: [
            { title: "Neobanking", description: "Full-stack digital banking platforms with instant KYC and card issuance.", icon: "FaMobileAlt" },
            { title: "DeFi Bridges", description: "Connecting traditional finance with decentralized liquidity pools.", icon: "FaLink" },
            { title: "Automated Lending", description: "Credit scoring algorithms that reduce approval time from days to seconds.", icon: "FaChartLine" }
        ],
        parallaxImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        strategicApproach: [
            { step: "01", title: "Security Audit", description: "Rigorous testing of existing infrastructure and compliance gaps." },
            { step: "02", title: "Modular Architecture", description: "Designing scalable microservices for maximum flexibility." },
            { step: "03", title: "Continuous Compliance", description: "Integrating real-time monitoring and reporting tools." }
        ]
    },
    {
        id: "ind_healthcare",
        slug: "healthcare",
        title: "Healthcare",
        shortDescription: "Digital health solutions for better patient outcomes.",
        fullDescription: "Transforming patient care through technology. We develop HIPAA-compliant telemedicine platforms, electronic health records (EHR) systems, and AI-diagnostic tools.",
        detailedContent: "Modern healthcare requires interoperability and data accessibility. We create interconnected ecosystems where patient data flows securely between providers, improving diagnosis accuracy and treatment speed.",
        features: [
            "Telemedicine Platforms",
            "EHR/EMR Integration",
            "IoT Remote Monitoring",
            "Medical Data Analysis",
            "Appointment Scheduling Systems"
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2670",
        icon: "FaStethoscope",
        challenges: [
            { title: "Data Silos", description: "Patient records scattered across incompatible systems lead to diagnostic errors." },
            { title: "HIPAA Compliance", description: "Maintaining privacy in a world of increasing cloud-based healthcare delivery." },
            { title: "Administrative Burnout", description: "Doctors spend more time on paperwork than on patient care." }
        ],
        marketStats: [
            { label: "Telehealth Growth", value: "154%", extraInfo: "Increase in virtual visits since 2020" },
            { label: "AI Accuracy", value: "96%", extraInfo: "In early-stage diagnostic detection" },
            { label: "Cost Reduction", value: "30%", extraInfo: "Avg operational overhead saved via digital EHR" }
        ],
        useCases: [
            { title: "Remote Care", description: "IoT-connected platforms for chronic disease management from home.", icon: "FaHeartbeat" },
            { title: "AI Diagnostics", description: "ML models assisting radiologists in scan interpretations.", icon: "FaMicroscope" },
            { title: "Blockchain Records", description: "Securing patient history with immutable, patient-owned ledger.", icon: "FaLock" }
        ],
        parallaxImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop",
        strategicApproach: [
            { step: "01", title: "HIPAA Evaluation", description: "Ensuring every line of code meets strict regulatory standards." },
            { step: "02", title: "Interoperability Design", description: "Using FHIR standards to link disparate health systems." },
            { step: "03", title: "User-Centric UI", description: "Simplifying workflows for clinical staff and patients." }
        ]
    },
    {
        id: "ind_ecommerce",
        slug: "ecommerce",
        title: "E-Commerce & Retail",
        shortDescription: "Scalable platforms that drive sales and customer loyalty.",
        fullDescription: "Building the next generation of online retail. We create omni-channel commerce experiences, personalized recommendation engines, and seamless checkout flows.",
        detailedContent: "In the competitive world of e-commerce, user experience is paramount. We design storefronts that are not only visually stunning but also optimized for conversion.",
        features: [
            "Custom Shopping Carts",
            "Headless Commerce",
            "Inventory Management",
            "Payment Processing",
            "Customer Loyalty Programs"
        ],
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2670",
        icon: "FaShoppingCart",
        challenges: [
            { title: "Cart Abandonment", description: "High-friction checkout flows lead to multi-billion dollar losses annually." },
            { title: "Omnichannel Friction", description: "Difficulty in syncing inventory and pricing across web, app, and physical stores." },
            { title: "Hyper-Personalization", description: "Generic marketing no longer works; customers expect AI-driven relevance." }
        ],
        marketStats: [
            { label: "Conversion Lift", value: "35%", extraInfo: "Achieved via headless commerce architecture" },
            { label: "Load Speed", value: "<1.2s", extraInfo: "Average time for our optimized storefronts" },
            { label: "Mobile Sales", value: "73%", extraInfo: "Of total retail traffic originates from smartphones" }
        ],
        useCases: [
            { title: "Headless Commerce", description: "Decoupled frontend for ultra-fast, custom shopping experiences.", icon: "FaBolt" },
            { title: "Visual Search", description: "Letting customers find products using photos of real-world items.", icon: "FaSearch" },
            { title: "Predictive Inventory", description: "AI that forecasts demand to prevent overstocking and stockouts.", icon: "FaBox" }
        ],
        parallaxImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
        strategicApproach: [
            { step: "01", title: "UX Audit", description: "Identifying every micro-friction in the buyer's journey." },
            { step: "02", title: "Performance Engineering", description: "Ensuring sub-second speeds for peak traffic events." },
            { step: "03", title: "Data Integration", description: "Connecting CRM, ERP, and marketing stacks for 360° views." }
        ]
    },
    {
        id: "ind_realestate",
        slug: "real-estate",
        title: "Real Estate",
        shortDescription: "Proptech solutions for modern property management.",
        fullDescription: "Digitizing the property lifecycle. From virtual tours to property management software, we help real estate businesses streamline operations and enhance the buyer experience.",
        detailedContent: "The real estate industry is ripe for digital disruption. We build platforms that simplify property listings, automate tenant screening, and facilitate digital contract signing.",
        features: [
            "Property Listing Portals",
            "Virtual Tour Integration",
            "Tenant Management Systems",
            "Smart Home Integration",
            "Real Estate CRM"
        ],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2673",
        icon: "FaBuilding",
        challenges: [
            { title: "Opaque Transactions", description: "Long, manual closing processes with frequent communication gaps." },
            { title: "Property Management Scale", description: "Difficulty managing thousands of units without automated maintenance tracking." },
            { title: "Disconnected Data", description: "Agent, buyer, and lawyer systems rarely talk to each other effectively." }
        ],
        marketStats: [
            { label: "Time to Close", value: "-40%", extraInfo: "Reduction achieved via digital contract platforms" },
            { label: "User Engagement", value: "3x", extraInfo: "Higher for sites featuring 3D virtual tours" },
            { label: "Admin Savings", value: "50%", extraInfo: "Manual labor hours saved per property manager" }
        ],
        useCases: [
            { title: "Tokenized Equity", description: "Fractional ownership of high-value assets via blockchain.", icon: "FaGlobe" },
            { title: "Smart Contracts", description: "Automated lease renewals and rent escrows.", icon: "FaFileContract" },
            { title: "IoT Buildings", description: "Sensors that predict plumbing or electrical issues before they happen.", icon: "FaWaveSquare" }
        ],
        parallaxImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
        strategicApproach: [
            { step: "01", title: "Workflow Analysis", description: "Mapping the entire property lifecycle from listing to sale." },
            { step: "02", title: "Platform Development", description: "Building a central hub for all project stakeholders." },
            { step: "03", title: "Scale Planning", description: "Ensuring the proptech stack can handle portfolio growth." }
        ]
    },
    {
        id: "ind_travel",
        slug: "travel-hospitality",
        title: "Travel & Hospitality",
        shortDescription: "Engaging digital experiences for the modern traveler.",
        fullDescription: "Reimagining the travel booking experience. We build booking engines, travel agency management systems, and personalized itinerary planners.",
        detailedContent: "Travelers today expect a seamless journey from inspiration to booking. We develop comprehensive travel platforms that aggregate flights, hotels, and tours.",
        features: [
            "Booking Engine Development",
            "Itinerary Management",
            "Travel API Integration",
            "Loyalty Systems",
            "Mobile Travel Companions"
        ],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2674",
        icon: "FaPlane",
        challenges: [
            { title: "Fragmented Inventory", description: "Aggregating data from thousands of GDS and API providers reliably." },
            { title: "Customer Experience Gap", description: "Lack of real-time support during travel disruptions." },
            { title: "Pricing Volatility", description: "Developing algorithms that can handle millions of price shifts per day." }
        ],
        marketStats: [
            { label: "Mobile Booking", value: "65%", extraInfo: "Of all travelers now book exclusively via smartphone" },
            { label: "Loyalty Lift", value: "22%", extraInfo: "Higher retention via personalized AI itineraries" },
            { label: "Direct Bookings", value: "+15%", extraInfo: "Increase for hotels using our custom engines" }
        ],
        useCases: [
            { title: "AI Concierge", description: "24/7 smart assistants that handle rebookings and upgrades.", icon: "FaSnapchatGhost" },
            { title: "Dynamic Pricing", description: "ML engines that optimize room rates based on real-time demand.", icon: "FaGem" },
            { title: "Contactless Stay", description: "Mobile-first keys and check-in for seamless hotel experiences.", icon: "FaKey" }
        ],
        parallaxImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop",
        strategicApproach: [
            { step: "01", title: "API Integration", description: "Connecting with global travel distribution networks." },
            { step: "02", title: "Personalization Engine", description: "Building the ML core for tailored travel recommendations." },
            { step: "03", title: "Mobile Excellence", description: "Perfecting the on-the-go experience for travelers." }
        ]
    },
    {
        id: "ind_manufacturing",
        slug: "manufacturing",
        title: "Manufacturing",
        shortDescription: "Industry 4.0 solutions for smart factories.",
        fullDescription: "Optimizing production with digital twins and IoT. We help manufacturers embrace digital transformation to increase efficiency and reduce downtime.",
        detailedContent: "Smart manufacturing is about connecting machines, data, and people. We build industrial IoT (IIoT) platforms that monitor equipment health in real-time.",
        features: [
            "Industrial IoT (IIoT)",
            "Predictive Maintenance",
            "Supply Chain Visibility",
            "Digital Twins",
            "Production Analytics"
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670",
        icon: "FaIndustry",
        challenges: [
            { title: "Unplanned Downtime", description: "Equipment failure often causes millions in lost production every hour." },
            { title: "Supply Chain Blindness", description: "Lack of visibility into tier-2 and tier-3 supplier risks." },
            { title: "Worker Safety", description: "Monitoring high-risk environments without intrusive manual supervision." }
        ],
        marketStats: [
            { label: "OEE Increase", value: "25%", extraInfo: "Improvement in Overall Equipment Effectiveness" },
            { label: "Predictive Win", value: "70%", extraInfo: "Of technical failures identified before they occur" },
            { label: "Waste Reduction", value: "15%", extraInfo: "Less raw material waste via AI precision" }
        ],
        useCases: [
            { title: "Digital Twins", description: "Real-time virtual replicas of your production line for simulation.", icon: "FaVial" },
            { title: "Predictive Maintenance", description: "Acoustic and vibration sensors that flag motor wear early.", icon: "FaTachometerAlt" },
            { title: "Supply Visibility", description: "Blockchain tracking of every component from origin to unit.", icon: "FaTruck" }
        ],
        parallaxImage: "https://images.unsplash.com/photo-1565514020179-026b92b2d70b?q=80&w=2000&auto=format&fit=crop",
        strategicApproach: [
            { step: "01", title: "Sensor Audit", description: "Identifying critical nodes for data collection." },
            { step: "02", title: "Edge Architecture", description: "Processing data locally for zero-latency machine control." },
            { step: "03", title: "Predictive Insights", description: "Training ML models on your unique production datasets." }
        ]
    }
];
