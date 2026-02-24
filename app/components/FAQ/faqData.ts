// faqData.ts

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: string; // Using icon name string for dynamic rendering
}

export const faqCategories = [
  'All',
  'Getting Started',
  'Services',
  'Security',
  'Technical',
  'Billing'
];

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How do I start a project with NextChainX?',
    answer: 'Starting a project is simple. Contact us through our consultation form, and our solutions architects will reach out within 24 hours to schedule a discovery call to understand your requirements and objectives.',
    category: 'Getting Started',
    icon: 'FaRocket',
  },
  {
    id: 2,
    question: 'What industries do you specialize in?',
    answer: 'We have deep expertise in FinTech (High-frequency trading, DeFi), Healthcare (HIPAA-compliant systems), E-commerce (Scalable marketplaces), Real Estate, and Supply Chain management.',
    category: 'Services',
    icon: 'FaGlobe',
  },
  {
    id: 3,
    question: 'How do you ensure the security of blockchain solutions?',
    answer: 'Our security protocol involves multi-layer audits, formal verification of smart contracts, and adherence to ISO/IEC 27001 standards. We use enterprise-grade encryption (AES-256) and TLS 1.3 for all data in transit.',
    category: 'Security',
    icon: 'FaShieldAlt',
  },
  {
    id: 4,
    question: 'Do you offer post-deployment support and maintenance?',
    answer: 'Yes, we provide 24/7 technical support, regular security patches, and performance monitoring. Our maintenance plans are designed to ensure your systems remain scalable and secure as your business grows.',
    category: 'Technical',
    icon: 'FaTools',
  },
  {
    id: 5,
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. MVP development usually takes 8-12 weeks, while large-scale enterprise systems can take 6 months or more. We follow agile methodologies to deliver value in incremental sprints.',
    category: 'Getting Started',
    icon: 'FaClock',
  },
  {
    id: 6,
    question: 'Can you integrate AI into our existing legacy systems?',
    answer: 'Absolutely. We specialize in legacy modernization, creating robust API layers and middleware to integrate advanced AI and LLM capabilities into your existing infrastructure without disrupting operations.',
    category: 'Services',
    icon: 'FaBolt',
  },
  {
    id: 7,
    question: 'What are your payment and billing structures?',
    answer: 'We offer flexible engagement models, including Time & Materials (T&M), Fixed Price for well-defined scopes, and Dedicated Team models for long-term partnerships. Billing is typically milestone-based.',
    category: 'Billing',
    icon: 'FaCreditCard',
  },
  {
    id: 8,
    question: 'Is my intellectual property (IP) protected?',
    answer: 'Yes, IP protection is high priority. We sign comprehensive NDAs before any technical discussions, and upon project completion, full ownership of the source code and IP is transferred to you.',
    category: 'Security',
    icon: 'FaUsers',
  }
];