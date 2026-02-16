'use client';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutHero from '../components/About/AboutHero';
import AboutStats from '../components/About/AboutStats';
import AboutValues from '../components/About/AboutValues';
import AboutTeam from '../components/About/AboutTeam';
import AboutAwards from '../components/About/AboutAwards';
import AboutCTA from '../components/About/AboutCTA';
import ContactSection from '../components/ContactPage/ContactFormSection';
import { Box } from '@chakra-ui/react';

export default function AboutClient() {
    return (
        <>
            <Header />
            <Box as="main" overflow="hidden">
                <AboutHero />
                <AboutStats />
                <AboutValues />
                <AboutTeam />
                <AboutAwards />
                <AboutCTA />
                <ContactSection />
            </Box>
            <Footer />
        </>
    );
}
