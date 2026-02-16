import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "./components/Homepage/HeroSection";
import ServicesSection from "./components/Homepage/ServicesSection";
import ProcessSection from "./components/Homepage/ProcessSection";
import JourneySection from "./components/Homepage/JourneySection";
import PortfolioSlider from "./components/Homepage/PortfolioSlider";
import TechnologyWeUse from "./components/Homepage/TechnologyWeUse";
import HomeCTA from "./components/Homepage/HomeCTA";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "AI & Blockchain Engineering Company | NextChainX",
  description: "NextChainX builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
  keywords: "NextChainX, AI engineering, blockchain development, AI systems, blockchain platforms, digital products, MVP development, enterprise solutions, smart contracts, DeFi, tokenization",
  openGraph: {
    title: "AI & Blockchain Engineering Company | NextChainX",
    description: "NextChainX builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
    url: "https://www.nextchainx.io/",
    images: [{ url: "https://www.nextchainx.io/images/seo_image.jpg" }],
  },
  alternates: {
    canonical: "https://www.nextchainx.io/",
  },
};

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <JourneySection />
        <PortfolioSlider />
        <TechnologyWeUse />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
