import type { Metadata } from 'next';
import { servicesData } from '@/app/lib/servicesData';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { Box, Container, Heading, SimpleGrid, Text, Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import * as Icons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';

export const metadata: Metadata = {
    title: "Our Services | AI, Blockchain & Digital Engineering Experts",
    description: "Explore our comprehensive suite of services including Blockchain development, AI solutions, Web & Mobile engineering, and Rapid Prototyping.",
    openGraph: {
        title: "Our Services | AI, Blockchain & Digital Engineering Experts",
        description: "Explore our comprehensive suite of services including Blockchain development, AI solutions, Web & Mobile engineering, and Rapid Prototyping.",
        url: "/services",
    },
    alternates: {
        canonical: "/services",
    },
};

const iconMap: any = { ...Icons, ...AiIcons };

export default function ServicesPage() {
    return (
        <>
            <Header />
            <Box as="main" bg="black" py={32}>
                <Container maxW="1400px">
                    <Heading as="h1" color="white" fontSize={{ base: "4xl", md: "6xl" }} mb={8}>
                        Our Expertise
                    </Heading>
                    <Text color="whiteAlpha.700" fontSize="xl" maxW="3xl" mb={16}>
                        We build high-performance products at the intersection of decentralization and intelligence.
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                        {servicesData.map((category) => {
                            const IconComponent = iconMap[category.icon] || Icons.FiBox;
                            return (
                                <Link key={category.id} href={`/services/${category.slug}`}>
                                    <Box
                                        p={8}
                                        bg="whiteAlpha.50"
                                        borderRadius="2xl"
                                        border="1px solid"
                                        borderColor="whiteAlpha.100"
                                        transition="all 0.3s"
                                        _hover={{ borderColor: "brand.red", bg: "whiteAlpha.100", transform: "translateY(-5px)" }}
                                        height="full"
                                    >
                                        <Box mb={6} color="brand.red">
                                            <IconComponent size={40} />
                                        </Box>
                                        <Heading as="h2" color="white" size="lg" mb={4}>
                                            {category.title}
                                        </Heading>
                                        <Text color="whiteAlpha.700" mb={8}>
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
