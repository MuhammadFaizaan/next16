'use client';

import type { Metadata } from 'next';
import { servicesData } from '@/app/lib/servicesData';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { Box, Container, Heading, SimpleGrid, Text, Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import * as Icons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import PageHero from '@/app/components/Common/PageHero';

const iconMap: any = { ...Icons, ...AiIcons };

export default function ServicesPage() {
    return (
        <>
            <Header />
            <Box as="main" bg="white">
                <PageHero
                    title="Our Expertise"
                    subtitle="Services"
                    image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                    ctaText="GET IN TOUCH"
                    ctaHref="/contact"
                />

                <Container maxW="1400px" py={32}>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                        {servicesData.map((category) => {
                            const IconComponent = iconMap[category.icon] || Icons.FiBox;
                            return (
                                <Link key={category.id} href={`/services/${category.slug}`}>
                                    <Box
                                        p={8}
                                        bg="gray.50"
                                        borderRadius="2xl"
                                        border="1px solid"
                                        borderColor="gray.100"
                                        transition="all 0.3s"
                                        _hover={{ borderColor: "brand.red", bg: "white", transform: "translateY(-5px)", shadow: "xl" }}
                                        height="full"
                                    >
                                        <Box mb={6} color="brand.red">
                                            <IconComponent size={40} />
                                        </Box>
                                        <Heading as="h2" color="gray.800" size="lg" mb={4}>
                                            {category.title}
                                        </Heading>
                                        <Text color="gray.600" mb={8}>
                                            {category.description}
                                        </Text>
                                        <Flex align="center" color="brand.red" fontWeight="bold">
                                            View Services <span style={{ marginLeft: '8px', display: 'inline-flex', alignItems: 'center' }}><BsArrowRight /></span>
                                        </Flex>
                                    </Box>
                                </Link>
                            );
                        })}
                    </SimpleGrid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
