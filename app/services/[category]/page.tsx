import { servicesData } from '@/app/lib/servicesData';
import { notFound } from 'next/navigation';
import { Box, Container, Heading, SimpleGrid, Text, Flex, Button } from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import type { Metadata } from 'next';
import PageHero from '@/app/components/Common/PageHero';

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params;
    const categoryData = servicesData.find((c) => c.slug === category);

    if (!categoryData) {
        return {
            title: "Category Not Found | NextChainX",
        };
    }

    return {
        title: `${categoryData.title} | AI & Blockchain Services | NextChainX`,
        description: categoryData.description,
        openGraph: {
            title: `${categoryData.title} | AI & Blockchain Services | NextChainX`,
            description: categoryData.description,
            url: `https://www.nextchainx.io/services/${category}`,
            images: [{ url: "https://www.nextchainx.io/images/seo_image.jpg" }],
        },
        alternates: {
            canonical: `https://www.nextchainx.io/services/${category}`,
        },
    };
}

export async function generateStaticParams() {
    return servicesData.map((category) => ({
        category: category.slug,
    }));
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const categoryData = servicesData.find((c) => c.slug === category);

    if (!categoryData) {
        notFound();
    }

    return (
        <>
            <Header />
            <Box as="main" bg="white" minH="100vh">
                <PageHero
                    title={categoryData.title}
                    subtitle={`Services / ${categoryData.title}`}
                    media="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2626&auto=format&fit=crop"
                    ctaText="GET IN TOUCH"
                    ctaHref="/contact"
                />

                {/* Services Grid Section */}
                <Container maxW="1400px" pb={32}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        {categoryData.services.map((service, index) => (
                            <Box
                                key={service.id}
                                bg="white"
                                border="1px solid"
                                borderColor="gray.100"
                                borderRadius="2xl"
                                overflow="hidden"
                                transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                _hover={{
                                    borderColor: 'brand.red',
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                                }}
                                // @ts-ignore
                                group="true"
                                position="relative"
                            >
                                {/* Number Watermark */}
                                <Text
                                    position="absolute"
                                    top={4}
                                    right={6}
                                    fontSize="8xl"
                                    fontWeight="900"
                                    color="gray.100" // Kept light on dark overlay
                                    lineHeight="1"
                                    zIndex="0"
                                >
                                    0{index + 1}
                                </Text>

                                <Box h="300px" position="relative" overflow="hidden" zIndex="1">
                                    <Box
                                        as="img"
                                        src={service.image}
                                        alt={service.title}
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                        transition="transform 0.7s ease"
                                        _groupHover={{ transform: 'scale(1.1)' }}
                                    />
                                    <Box
                                        position="absolute"
                                        inset="0"
                                        bg="linear-gradient(to top, #0A0A0A 10%, transparent 100%)"
                                    />
                                </Box>

                                <Flex direction="column" p={8} position="relative" zIndex={1} mt="-50px" bg="linear-gradient(to top, white 80%, transparent)">
                                    <Heading as="h3" size="xl" color="gray.800" mb={4}>
                                        {service.title}
                                    </Heading>
                                    <Text color="gray.600" mb={8} fontSize="lg" lineHeight="1.6">
                                        {service.shortDescription}
                                    </Text>

                                    <Box>
                                        <Link href={`/services/${categoryData.slug}/${service.slug}`}>
                                            <Box
                                                as="span"
                                                display="inline-flex"
                                                alignItems="center"
                                                color="gray.800"
                                                fontWeight="bold"
                                                fontSize="lg"
                                                _groupHover={{ color: 'brand.red' }}
                                                transition="all 0.3s"
                                            >
                                                Explore Service
                                                <Box as="span" ml={3} transition="transform 0.3s" _groupHover={{ transform: 'translateX(5px)' }}>
                                                    <BsArrowRight />
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
