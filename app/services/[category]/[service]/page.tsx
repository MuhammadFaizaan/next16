import { servicesData } from '@/app/lib/servicesData';
import { notFound } from 'next/navigation';
import { Box, Container, Heading, Text, Flex, SimpleGrid, Button, Stack, Icon } from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';
import { BsArrowLeft, BsCheckCircleFill, BsArrowRight } from 'react-icons/bs';

interface PageProps {
    params: Promise<{
        category: string;
        service: string;
    }>;
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
            <Box as="main" bg="black" minH="100vh">
                {/* Immersive Hero Section */}
                <Box
                    position="relative"
                    h={{ base: "70vh", md: "80vh" }}
                    display="flex"
                    alignItems="center"
                    overflow="hidden"
                >
                    {/* Background Image with Parallax-like fixed attachment could be added, but simple cover is cleaner for now */}
                    <Box
                        position="absolute"
                        inset="0"
                        zIndex="0"
                    >
                        <Box
                            as="img"
                            src={serviceData.image}
                            alt={serviceData.title}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            filter="brightness(0.35) contrast(1.1)"
                            transform="scale(1.05)" // Subtle zoom
                        />
                        {/* Gradient Overlays for Readability */}
                        <Box
                            position="absolute"
                            inset="0"
                            bgGradient="linear(to-r, blackAlpha.800 0%, transparent 100%)"
                        />
                        <Box
                            position="absolute"
                            bottom="0"
                            left="0"
                            right="0"
                            h="30%"
                            bgGradient="linear(to-t, black 0%, transparent 100%)"
                        />
                    </Box>

                    <Container maxW="1400px" position="relative" zIndex="1" pt={20}>
                        <Link href={`/services/${categoryData.slug}`}>
                            <Flex
                                align="center"
                                color="whiteAlpha.700"
                                mb={8}
                                _hover={{ color: "brand.red" }}
                                transition="color 0.2s"
                                width="fit-content"
                            >
                                <Box as="span" mr={2} display="inline-flex" alignItems="center">
                                    <BsArrowLeft />
                                </Box>
                                <Text fontWeight="medium" letterSpacing="wide">Back to {categoryData.title}</Text>
                            </Flex>
                        </Link>

                        <Box maxW="5xl">
                            <Heading
                                as="h1"
                                fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
                                fontWeight="800"
                                color="white"
                                mb={8}
                                lineHeight="0.95"
                                letterSpacing="tight"
                            >
                                {serviceData.title}
                            </Heading>
                            <Text
                                fontSize={{ base: 'xl', md: '3xl' }}
                                color="whiteAlpha.900"
                                maxW="3xl"
                                fontWeight="300"
                                lineHeight="1.4"
                            >
                                {serviceData.shortDescription}
                            </Text>
                        </Box>
                    </Container>
                </Box>

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
                                <Heading as="h2" size="2xl" mb={8} color="white" fontWeight="700">
                                    Comprehensive Solutions
                                </Heading>
                                <Text fontSize="xl" color="whiteAlpha.800" lineHeight="1.8" whiteSpace="pre-line">
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
                                <Heading as="h3" size="xl" mb={10} color="white">
                                    What You Get
                                </Heading>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                    {serviceData.features.map((feature, idx) => (
                                        <Flex
                                            key={idx}
                                            align="center"
                                            bg="whiteAlpha.50"
                                            p={6}
                                            borderRadius="xl"
                                            border="1px solid"
                                            borderColor="whiteAlpha.100"
                                            transition="all 0.3s"
                                            _hover={{ bg: "whiteAlpha.100", borderColor: "brand.red" }}
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
                                            <Text color="white" fontWeight="semibold" fontSize="lg">{feature}</Text>
                                        </Flex>
                                    ))}
                                </SimpleGrid>
                            </Box>
                        </Box>

                        {/* Right: Sidebar / CTA */}
                        <Box gridColumn={{ lg: "span 4" }}>
                            <Box
                                bg="dark.400"
                                p={10}
                                borderRadius="3xl"
                                border="1px solid"
                                borderColor="whiteAlpha.200"
                                position="sticky"
                                top="120px"
                                boxShadow="0 20px 40px -10px rgba(0,0,0,0.3)"
                            >
                                <Heading as="h4" size="lg" mb={6} color="white">
                                    Ready to Transform your Business?
                                </Heading>
                                <Text color="whiteAlpha.700" mb={10} fontSize="lg">
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
                                    color="white"
                                    borderColor="whiteAlpha.300"
                                    _hover={{ bg: "whiteAlpha.100" }}
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
