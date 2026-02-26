import { servicesData } from '@/app/lib/servicesData';
import { notFound } from 'next/navigation';
import { Box, Container, Heading, Text, Flex, SimpleGrid, Button, Stack, Icon } from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';
import { BsArrowLeft, BsCheckCircleFill, BsArrowRight } from 'react-icons/bs';
import type { Metadata } from 'next';
import PageHero from '@/app/components/Common/PageHero';

interface PageProps {
    params: Promise<{
        category: string;
        service: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category, service } = await params;
    const categoryData = servicesData.find((c) => c.slug === category);
    if (!categoryData) return { title: "Service Not Found | NextChainX" };

    const serviceData = categoryData.services.find((s) => s.slug === service);
    if (!serviceData) return { title: "Service Not Found | NextChainX" };

    return {
        title: `${serviceData.title} | ${categoryData.title} | NextChainX`,
        description: serviceData.shortDescription,
        openGraph: {
            title: `${serviceData.title} | ${categoryData.title} | NextChainX`,
            description: serviceData.shortDescription,
            url: `https://www.nextchainx.io/services/${category}/${service}`,
            images: [{ url: serviceData.image }],
        },
        alternates: {
            canonical: `https://www.nextchainx.io/services/${category}/${service}`,
        },
    };
}

export async function generateStaticParams() {
    const params = [];
    for (const category of servicesData) {
        for (const service of category.services) {
            params.push({
                category: category.slug,
                service: service.slug,
            });
        }
    }
    return params;
}

export default async function ServiceDetailsPage({ params }: PageProps) {
    const { category, service } = await params;

    const categoryData = servicesData.find((c) => c.slug === category);
    if (!categoryData) notFound();

    const serviceData = categoryData.services.find((s) => s.slug === service);
    if (!serviceData) notFound();

    return (
        <>
            <Header />
            <Box as="main" bg="white" minH="100vh">
                <PageHero
                    title={serviceData.title}
                    subtitle={`${categoryData.title} / ${serviceData.title}`}
                    media={serviceData.image}
                    ctaText="GET IN TOUCH"
                    ctaHref="/contact"
                />

                {/* Content Section */}
                <Container maxW="1400px" py={24}>
                    <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={{ base: 12, lg: 24 }}>
                        {/* Left: Main Content */}
                        <Box gridColumn={{ lg: "span 8" }}>
                            <Box mb={20}>
                                <Text
                                    color="brand.red"
                                    fontWeight="bold"
                                    letterSpacing="widest"
                                    textTransform="uppercase"
                                    mb={4}
                                >
                                    Overview
                                </Text>
                                <Heading as="h2" size="2xl" mb={8} color="gray.800" fontWeight="700">
                                    Comprehensive Solutions
                                </Heading>
                                <Text fontSize="xl" color="gray.600" lineHeight="1.8" whiteSpace="pre-line">
                                    {serviceData.fullDescription}
                                </Text>
                            </Box>

                            <Box>
                                <Text
                                    color="brand.red"
                                    fontWeight="bold"
                                    letterSpacing="widest"
                                    textTransform="uppercase"
                                    mb={4}
                                >
                                    Key Features
                                </Text>
                                <Heading as="h3" size="xl" mb={10} color="gray.800">
                                    What You Get
                                </Heading>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                    {serviceData.features.map((feature, idx) => (
                                        <Flex
                                            key={idx}
                                            align="center"
                                            bg="gray.50"
                                            p={6}
                                            borderRadius="xl"
                                            border="1px solid"
                                            borderColor="gray.100"
                                            transition="all 0.3s"
                                            _hover={{ bg: "white", borderColor: "brand.red", shadow: "lg" }}
                                        >
                                            <Box
                                                color="brand.red"
                                                mr={5}
                                                w={8}
                                                h={8}
                                                bg="rgba(255,19,19,0.1)"
                                                borderRadius="full"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                flexShrink={0}
                                            >
                                                <Box w={4} h={4}>
                                                    <BsCheckCircleFill style={{ width: '100%', height: '100%' }} />
                                                </Box>
                                            </Box>
                                            <Text color="gray.800" fontWeight="semibold" fontSize="lg">{feature}</Text>
                                        </Flex>
                                    ))}
                                </SimpleGrid>
                            </Box>
                        </Box>

                        {/* Right: Sidebar / CTA */}
                        <Box gridColumn={{ lg: "span 4" }}>
                            <Box
                                bg="gray.50"
                                p={10}
                                borderRadius="3xl"
                                border="1px solid"
                                borderColor="gray.200"
                                position="sticky"
                                top="120px"
                                boxShadow="0 20px 40px -10px rgba(0,0,0,0.05)"
                            >
                                <Heading as="h4" size="lg" mb={6} color="gray.800">
                                    Ready to Transform your Business?
                                </Heading>
                                <Text color="gray.600" mb={10} fontSize="lg">
                                    Let's discuss how we can help you achieve your goals with our expert {serviceData.title} services.
                                </Text>
                                <Button
                                    size="lg"
                                    w="full"
                                    bg="brand.red"
                                    color="white"
                                    _hover={{ bg: "red.600", transform: "translateY(-2px)" }}
                                    // @ts-ignore
                                    active={{ transform: "translateY(0)" }}
                                    mb={4}
                                    h={14}
                                    fontSize="lg"
                                >
                                    Get a Free Quote
                                </Button>
                                <Button
                                    size="lg"
                                    w="full"
                                    variant="outline"
                                    color="gray.800"
                                    borderColor="gray.300"
                                    _hover={{ bg: "gray.50" }}
                                    h={14}
                                    fontSize="lg"
                                >
                                    Schedule Consultation
                                </Button>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
