import Image from "next/image";
import HeroSection from "./components/Homepage/HeroSection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
