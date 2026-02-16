'use client';

import { Box } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CareerHero from '../components/Careers/CareerHero';
import CultureSlider from '../components/Careers/CultureSlider';
import HiringProcess from '../components/Careers/HiringProcess';
import CareerPerks from '../components/Careers/CareerPerks';
import JobOpenings from '../components/Careers/JobOpenings';
import TestimonialSlider from '../components/Careers/TestimonialSlider';
import OfficeLife from '../components/Careers/OfficeLife';

export default function CareersClient() {
    return (
        <>
            <Header />
            <Box as="main" bg="white" overflow="hidden">
                <CareerHero />
                <CultureSlider />
                <HiringProcess />
                <CareerPerks />
                <JobOpenings />
                <TestimonialSlider />
                <OfficeLife />
            </Box>
            <Footer />
        </>
    );
}
