// app/faq/page.tsx

import CTASection from "../components/FAQ/FAQCTA";
import HeroSection from "../components/FAQ/FAQHero";
import FAQSection from "../components/FAQ/FAQItem";

export const metadata = {
  title: 'FAQs - Get All Your Questions Answered',
  description: 'Find answers to commonly asked questions about our services and products.',
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