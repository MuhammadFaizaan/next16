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
