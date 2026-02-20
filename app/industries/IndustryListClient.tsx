'use client';

import PageHero from '@/app/components/Common/PageHero';
import {
    Box, Container, Heading, SimpleGrid, Text,
    Flex, Button, Icon, VStack, HStack,
    Grid, GridItem, Badge, Image
} from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FiArrowUpRight, FiLayers, FiActivity, FiGlobe } from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { industriesData } from '@/app/lib/industriesData';
import { motion } from 'framer-motion';

export default function IndustryListClient() {
    return (
        <>
            <Header />
            <Box as="main" bg="white" minH="100vh">
                <PageHero
                    title="Expertise Across Every Domain"
                    subtitle="Revolutionizing Industries through Engineering Excellence"
                    image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop"
                    ctaText="GET IN TOUCH"
                    ctaHref="/contact"
                />

                {/* Section Header */}
                <Box py={{ base: 20, md: 32 }} bg="white">
                    <Container maxW="1200px">
                        <VStack spacing={8} textAlign="center" mb={20}>
                            <HStack spacing={4}>
                                <Box w="20px" h="2px" bg="red.600" />
                                <Text fontWeight="900" letterSpacing="0.2em" color="red.600" textTransform="uppercase" fontSize="xs">
                                    Our Focus Areas
                                </Text>
                                <Box w="20px" h="2px" bg="red.600" />
                            </HStack>
                            <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="900" letterSpacing="-0.03em" lineHeight="1">
                                High-complexity sectors <br />
                                <Text as="span" color="red.600">met with precision.</Text>
                            </Heading>
                            <Text fontSize="xl" color="gray.600" maxW="800px" lineHeight="1.8">
                                We help enterprises and high-growth startups navigate their industry's most critical technical hurdles with scalable, future-proof architectures.
                            </Text>
                        </VStack>

                        {/* Industries Grid */}
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12}>
                            {industriesData.map((industry, index) => {
                                const IconComponent = (FaIcons as any)[industry.icon] || FaIcons.FaIndustry;

                                return (
                                    <motion.div
                                        key={industry.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Link href={`/industries/${industry.slug}`}>
                                            <Box
                                                role="group"
                                                bg="gray.50"
                                                p={10}
                                                borderRadius="4xl"
                                                h="100%"
                                                transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                                                position="relative"
                                                overflow="hidden"
                                                border="1px solid"
                                                borderColor="gray.100"
                                                _hover={{
                                                    bg: "white",
                                                    shadow: "2xl",
                                                    transform: "translateY(-12px)",
                                                    borderColor: "red.500"
                                                }}
                                            >
                                                {/* Icon and Title */}
                                                <VStack align="flex-start" spacing={8} h="100%">
                                                    <Flex
                                                        boxSize={16}
                                                        bg="red.600"
                                                        color="white"
                                                        borderRadius="2xl"
                                                        align="center"
                                                        justify="center"
                                                        transition="all 0.3s"
                                                        _groupHover={{ transform: "rotate(10deg) scale(1.1)" }}
                                                    >
                                                        <Icon as={IconComponent} boxSize={8} />
                                                    </Flex>

                                                    <Box flex="1">
                                                        <Heading as="h3" fontSize="2xl" fontWeight="900" mb={4} color="gray.800" letterSpacing="-0.02em">
                                                            {industry.title}
                                                        </Heading>
                                                        <Text color="gray.600" fontSize="md" lineHeight="1.7" mb={8}>
                                                            {industry.shortDescription}
                                                        </Text>
                                                    </Box>

                                                    <HStack color="red.600" fontWeight="900" fontSize="sm" letterSpacing="0.1em">
                                                        <Text>EXPLORE SOLUTIONS</Text>
                                                        <Icon as={FiArrowUpRight} boxSize={5} transition="transform 0.3s" _groupHover={{ transform: "translate(4px, -4px)" }} />
                                                    </HStack>
                                                </VStack>

                                                {/* Subtle Background Text */}
                                                <Box
                                                    position="absolute"
                                                    bottom="-20px"
                                                    right="-20px"
                                                    fontSize="140px"
                                                    fontWeight="900"
                                                    color="gray.100"
                                                    zIndex={-1}
                                                    opacity={0.5}
                                                    userSelect="none"
                                                >
                                                    {index + 1}
                                                </Box>
                                            </Box>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </SimpleGrid>
                    </Container>
                </Box>

                {/* Performance Banner */}
                <Box py={24} bg="#050505" color="white">
                    <Container maxW="1200px">
                        <Grid templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }} gap={12}>
                            {[
                                { label: "Success Rate", value: "99%", icon: FiActivity },
                                { label: "Project Scale", value: "$4B+", icon: FiGlobe },
                                { label: "Tech Experts", value: "150+", icon: FiLayers },
                                { label: "Industry Awards", value: "12", icon: FiArrowUpRight },
                            ].map((stat, idx) => (
                                <VStack key={idx} align={{ base: "center", lg: "flex-start" }} spacing={4}>
                                    <Icon as={stat.icon} color="red.600" boxSize={8} />
                                    <Heading size="2xl" fontWeight="900">{stat.value}</Heading>
                                    <Text color="whiteAlpha.600" fontWeight="700" letterSpacing="0.1em">{stat.label.toUpperCase()}</Text>
                                </VStack>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* CTA Section */}
                <Box py={32} bg="white">
                    <Container maxW="container.lg" textAlign="center">
                        <VStack spacing={10}>
                            <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="900" letterSpacing="-0.04em">
                                Deep Industry Knowledge. <br />
                                <Text as="span" color="red.600">Pure Engineering Power.</Text>
                            </Heading>
                            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
                                Stop struggling with fragmented tech. Partner with an engineering team that understands the nuances of your business sector.
                            </Text>
                            <Link href="/contact">
                                <Button
                                    size="xl"
                                    bg="red.600"
                                    color="white"
                                    px={14}
                                    h={20}
                                    fontSize="xl"
                                    fontWeight="900"
                                    borderRadius="2xl"
                                    _hover={{ bg: "black", transform: "translateY(-5px)", shadow: "2xl" }}
                                    transition="all 0.3s"
                                    rightIcon={<BsArrowRight />}
                                >
                                    TALK TO AN EXPERT
                                </Button>
                            </Link>
                        </VStack>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
