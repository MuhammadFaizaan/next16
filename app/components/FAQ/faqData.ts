// faqData.ts

export interface FAQ {
  question: string;
  answer: string;
  category: "General" | "Security" | "Billing" | "Technical";
}

export const faqs: FAQ[] = [
  {
    category: "General",
    question: "How does the 14-day free trial work?",
    answer: "You get full access to all our Premium features for 14 days. No credit card is required. At the end of the trial, you can choose a plan that fits your needs or stay on our Free tier."
  },
  {
    category: "Security",
    question: "Is my data encrypted at rest?",
    answer: "Yes, all data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit. We perform annual SOC2 Type II audits to ensure your data remains safe."
  },
  {
    category: "Billing",
    question: "Can I change my plan later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. If you upgrade, the price will be prorated for the remainder of your billing cycle."
  },
  {
    category: "Technical",
    question: "Do you offer a public API?",
    answer: "Yes! We provide a comprehensive REST API and webhooks for all our core features. You can find the documentation at docs.yoursite.com."
  }
];