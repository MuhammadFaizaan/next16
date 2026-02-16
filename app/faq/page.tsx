import type { Metadata } from "next";
import CTASection from "../components/FAQ/FAQCTA";
import HeroSection from "../components/FAQ/FAQHero";
import FAQSection from "../components/FAQ/FAQItem";

export const metadata: Metadata = {
  title: "FAQs | AI & Blockchain Engineering Questions | NextChainX",
  description: "Find answers to commonly asked questions about NextChainX's AI systems, blockchain platforms, and digital product engineering services.",
  keywords: "NextChainX FAQ, AI development questions, blockchain engineering help, tech service inquiries",
  openGraph: {
    title: "FAQs | AI & Blockchain Engineering Questions | NextChainX",
    description: "Find answers to commonly asked questions about NextChainX's AI systems, blockchain platforms, and digital product engineering services.",
    url: "https://www.nextchainx.io/faq",
    images: [{ url: "https://www.nextchainx.io/images/seo_image.jpg" }],
  },
  alternates: {
    canonical: "https://www.nextchainx.io/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}