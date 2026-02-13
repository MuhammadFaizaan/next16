import { IconType } from 'react-icons';
import {
    FaStethoscope,
    FaUniversity,
    FaShoppingCart,
    FaBuilding,
    FaPlane,
    FaIndustry
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
}

export const industriesData: IndustryItem[] = [
    {
        id: "ind_fintech",
        slug: "fintech",
        title: "Fintech & Banking",
        shortDescription: "Revolutionizing financial services with secure, scalable technology.",
        fullDescription: "We empower financial institutions and startups with cutting-edge software solutions. From blockchain-based payments to AI-driven fraud detection, our fintech expertise drives innovation and security.",
        detailedContent: "The financial sector is undergoing a rapid transformation. Consumers demand seamless, mobile-first experiences, while diverse regulations require robust compliance mechanisms. We build platforms that bridge this gap, offering everything from neobank core systems to high-frequency trading algorithms. Our solutions prioritize security, utilizing best-in-class encryption and compliance protocols (GDPR, PCI-DSS) to protect sensitive user data.",
        features: [
            "Digital Wallet Development",
            "Payment Gateway Integration",
            "Blockchain & Smart Contracts",
            "AI-Powered Risk Assessment",
            "Regulatory Compliance Automation"
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2670",
        icon: "FaUniversity"
    },
    {
        id: "ind_healthcare",
        slug: "healthcare",
        title: "Healthcare",
        shortDescription: "Digital health solutions for better patient outcomes.",
        fullDescription: "Transforming patient care through technology. We develop HIPAA-compliant telemedicine platforms, electronic health records (EHR) systems, and AI-diagnostic tools.",
        detailedContent: "Modern healthcare requires interoperability and data accessibility. We create interconnected ecosystems where patient data flows securely between providers, improving diagnosis accuracy and treatment speed. Our expertise extends to IoT devices for remote patient monitoring and mobile apps that empower patients to manage their own health journeys.",
        features: [
            "Telemedicine Platforms",
            "EHR/EMR Integration",
            "IoT Remote Monitoring",
            "Medical Data Analysis",
            "Appointment Scheduling Systems"
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2670",
        icon: "FaStethoscope"
    },
    {
        id: "ind_ecommerce",
        slug: "ecommerce",
        title: "E-Commerce & Retail",
        shortDescription: "Scalable platforms that drive sales and customer loyalty.",
        fullDescription: "Building the next generation of online retail. We create omni-channel commerce experiences, personalized recommendation engines, and seamless checkout flows.",
        detailedContent: "In the competitive world of e-commerce, user experience is paramount. We design storefronts that are not only visually stunning but also optimized for conversion. Behind the scenes, we implement robust inventory management systems, headless commerce architectures, and data analytics dashboards that give you real-time insights into your business performance.",
        features: [
            "Custom Shopping Carts",
            "Headless Commerce",
            "Inventory Management",
            "Payment Processing",
            "Customer Loyalty Programs"
        ],
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2670",
        icon: "FaShoppingCart"
    },
    {
        id: "ind_realestate",
        slug: "real-estate",
        title: "Real Estate",
        shortDescription: "Proptech solutions for modern property management.",
        fullDescription: "Digitizing the property lifecycle. From virtual tours to property management software, we help real estate businesses streamline operations and enhance the buyer experience.",
        detailedContent: "The real estate industry is ripe for digital disruption. We build platforms that simplify property listings, automate tenant screening, and facilitate digital contract signing. Our solutions also include virtual reality (VR) tours that allow potential buyers to explore properties from anywhere in the world.",
        features: [
            "Property Listing Portals",
            "Virtual Tour Integration",
            "Tenant Management Systems",
            "Smart Home Integration",
            "Real Estate CRM"
        ],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2673",
        icon: "FaBuilding"
    },
    {
        id: "ind_travel",
        slug: "travel-hospitality",
        title: "Travel & Hospitality",
        shortDescription: "Engaging digital experiences for the modern traveler.",
        fullDescription: "Reimagining the travel booking experience. We build booking engines, travel agency management systems, and personalized itinerary planners.",
        detailedContent: "Travelers today expect a seamless journey from inspiration to booking. We develop comprehensive travel platforms that aggregate flights, hotels, and tours. Our solutions focus on personalization, using AI to recommend destinations and activities based on user preferences and past behavior.",
        features: [
            "Booking Engine Development",
            "Itinerary Management",
            "Travel API Integration",
            "Loyalty Systems",
            "Mobile Travel Companions"
        ],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2674",
        icon: "FaPlane"
    },
    {
        id: "ind_manufacturing",
        slug: "manufacturing",
        title: "Manufacturing",
        shortDescription: "Industry 4.0 solutions for smart factories.",
        fullDescription: "Optimizing production with digital twins and IoT. We help manufacturers embrace digital transformation to increase efficiency and reduce downtime.",
        detailedContent: "Smart manufacturing is about connecting machines, data, and people. We build industrial IoT (IIoT) platforms that monitor equipment health in real-time, predict maintenance needs, and optimize production schedules. Our digital twin technologies allow for virtual testing of production lines before implementation.",
        features: [
            "Industrial IoT (IIoT)",
            "Predictive Maintenance",
            "Supply Chain Visibility",
            "Digital Twins",
            "Production Analytics"
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670",
        icon: "FaIndustry"
    }
];
