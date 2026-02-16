'use client';

import { Box, Container, Heading, Text, SimpleGrid, Flex, Button, List, ListItem, ListIcon, Icon } from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { BsArrowRight, BsCheckCircle } from 'react-icons/bs';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IndustryItem } from '@/app/lib/industriesData';

interface IndustryDetailClientProps {
    industry: IndustryItem;
}

export default function IndustryDetailClient({ industry }: IndustryDetailClientProps) {
    // @ts-ignore
    const IconComponent = FaIcons[industry.icon] || FaIcons.FaIndustry;

    return (
        <>
            <Header />
            <Box as="main" bg="black" minH="100vh">
                {/* Hero Section */}
                <Box
                    position="relative"
                    h="70vh"
                    minH="600px"
                    display="flex"
                    alignItems="center"
                    overflow="hidden"
                >
                    {/* Background Image with Overlay */}
                    <Box position="absolute" inset="0" zIndex="0">
                        <Box
                            as="img"
                            src={industry.image}
                            alt={industry.title}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            filter="brightness(0.3)"
                        />
                        <Box
                            position="absolute"
                            inset="0"
                            bg="linear-gradient(to top, #000000 0%, transparent 80%)"
                        />
                        <Box
                            position="absolute"
                            inset="0"
                            bg="linear-gradient(to right, #000000 0%, transparent 60%)"
                        />
                    </Box>

                    <Container maxW="1400px" position="relative" zIndex="1">
                        <Flex align="center" mb={6}>
                            <Box p={3} bg="brand.red" borderRadius="lg" mr={4} display="flex" alignItems="center" justifyContent="center">
                                <Icon as={IconComponent} boxSize={8} color="white" />
                            </Box>
                            <Text
                                color="brand.red"
                                fontWeight="bold"
                                letterSpacing="widest"
                                textTransform="uppercase"
                                fontSize="sm"
                            >
                                Industries / {industry.title}
                            </Text>
                        </Flex>

                        <Heading
                            as="h1"
                            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
                            fontWeight="800"
                            color="white"
                            mb={6}
                            lineHeight="1.1"
                            maxW="4xl"
                        >
                            {industry.title}
                        </Heading>
                        <Text
                            fontSize={{ base: 'xl', md: '2xl' }}
                            color="whiteAlpha.900"
                            maxW="3xl"
                            lineHeight="1.6"
                            fontWeight="medium"
                        >
                            {industry.fullDescription}
                        </Text>
                    </Container>
                </Box>

                {/* Content Section */}
                <Box py={20} bg="dark.400">
                    <Container maxW="1400px">
                        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={20}>
                            <Box>
                                <Heading as="h2" size="2xl" color="white" mb={8}>
                                    Overview
                                </Heading>
                                <Text fontSize="lg" color="whiteAlpha.700" lineHeight="1.8" whiteSpace="pre-line" mb={8}>
                                    {industry.detailedContent}
                                </Text>
                                <Box borderLeft="4px solid" borderColor="brand.red" pl={6} py={2}>
                                    <Text fontSize="xl" fontStyle="italic" color="whiteAlpha.900">
                                        "We don't just build software; we engineer solutions that propel {industry.title} businesses into the future."
                                    </Text>
                                </Box>
                            </Box>

                            <Box>
                                <Box bg="black" p={10} borderRadius="2xl" border="1px solid" borderColor="whiteAlpha.100">
                                    <Heading as="h3" size="lg" color="white" mb={8}>
                                        Key Solutions
                                    </Heading>
                                    <List spacing={5}>
                                        {industry.features.map((feature, index) => (
                                            <ListItem key={index} display="flex" alignItems="center" color="whiteAlpha.800" fontSize="lg">
                                                <ListIcon as={BsCheckCircle} color="brand.red" mr={4} boxSize={5} />
                                                {feature}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>

                                {/* Mini CTA or Tagline */}
                                <Box mt={10} textAlign="center">
                                    <Text fontSize="lg" color="whiteAlpha.600">
                                        Tailored for compliance, security, and scale.
                                    </Text>
                                </Box>
                            </Box>
                        </SimpleGrid>
                    </Container>
                </Box>

                {/* CTA Section */}
                <Box py={24} bg="black" position="relative" overflow="hidden">
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        w="150%"
                        h="150%"
                        bg="radial-gradient(circle, rgba(255,19,19,0.1) 0%, rgba(0,0,0,0) 60%)"
                        filter="blur(100px)"
                        zIndex="0"
                    />
                    <Container maxW="container.lg" textAlign="center" position="relative" zIndex="1">
                        <Heading as="h2" size="3xl" color="white" mb={8} fontWeight="900">
                            Ready to Innovate in {industry.title}?
                        </Heading>
                        <Text fontSize="xl" color="whiteAlpha.700" mb={12} maxW="2xl" mx="auto">
                            Let's build the technology that defines the next era of your industry. Schedule a consultation with our experts today.
                        </Text>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                bg="brand.red"
                                color="white"
                                px={12}
                                h={16}
                                fontSize="xl"
                                _hover={{ bg: 'red.600', transform: 'translateY(-2px)' }}
                                transition="all 0.3s"
                                rightIcon={<BsArrowRight />}
                            >
                                Start Your Project
                            </Button>
                        </Link>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
