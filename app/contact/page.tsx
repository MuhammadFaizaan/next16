import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactHero from "../components/ContactPage/ContactHero";
import LocationsSection from "../components/ContactPage/LocationsSection";
import ContactFormSection from "../components/ContactPage/ContactFormSection";
import MapView from "../components/ContactPage/MapView";

export const metadata = {
    title: "Contact Us - NextChainX",
    description: "Get in touch with NextChainX for project inquiries, collaborations, or any questions about our services.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <ContactHero />
                <LocationsSection />
                <ContactFormSection />
                <MapView />
            </main>
            <Footer />
        </>
    );
}
