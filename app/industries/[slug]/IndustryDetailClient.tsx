'use client';

import { useRef } from 'react';
import PageHero from '@/app/components/Common/PageHero';
import {
    Box, Container, Heading, Text, SimpleGrid,
    Flex, Button, List, ListItem, ListIcon, Icon,
    VStack, HStack, Badge, Grid, GridItem,
    useColorModeValue, Image
} from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { BsArrowRight, BsCheckCircle, BsLightningCharge, BsShieldCheck, BsCpu } from 'react-icons/bs';
import { FiArrowUpRight, FiLayers, FiActivity, FiGlobe } from 'react-icons/fi';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IndustryItem } from '@/app/lib/industriesData';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

interface IndustryDetailClientProps {
    industry: IndustryItem;
}

export default function IndustryDetailClient({ industry }: IndustryDetailClientProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

    // Map string icon names to components
    const renderIcon = (iconName: string, props = {}) => {
        const IconComponent = (FaIcons as any)[iconName] || FaIcons.FaIndustry;
        return <Icon as={IconComponent} {...props} />;
    };

    return (
        <>
            <Header />
            <Box as="main" bg="white" minH="100vh" ref={containerRef}>
                <PageHero
                    title={industry.title}
                    subtitle={`Industries / ${industry.title}`}
                    media={industry.image}
                    ctaText="GET IN TOUCH"
                    ctaHref="/contact"
                />

                {/* Section 1: Market Context Stats */}
                <Box py={{ base: 24, md: 32 }} bg="white">
                    <Container maxW="1400px">
                        <Grid templateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }} gap={20} alignItems="center">
                            <GridItem colSpan={{ base: 1, lg: 7 }}>
                                <VStack align="flex-start" spacing={10}>
                                    <HStack spacing={4}>
                                        <Box w="30px" h="2px" bg="red.600" />
                                        <Text fontWeight="900" letterSpacing="0.2em" color="red.600" textTransform="uppercase" fontSize="sm">
                                            The Landscape
                                        </Text>
                                    </HStack>
                                    <Heading fontSize={{ base: "4xl", md: "7xl" }} fontWeight="900" letterSpacing="-0.04em" lineHeight="1">
                                        Modernizing the <br />
                                        <Text as="span" color="red.600">{industry.title} Ecosystem.</Text>
                                    </Heading>
                                    <Text fontSize="xl" color="gray.600" lineHeight="1.8" maxW="800px">
                                        {industry.fullDescription}
                                    </Text>
                                    <Box p={8} bg="black" borderRadius="3xl" w="100%">
                                        <Text color="white" fontSize="lg" fontWeight="500" fontStyle="italic">
                                            "{industry.detailedContent}"
                                        </Text>
                                    </Box>
                                </VStack>
                            </GridItem>

                            <GridItem colSpan={{ base: 1, lg: 5 }}>
                                <VStack spacing={8} align="stretch">
                                    {industry.marketStats.map((stat, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <Box
                                                p={10}
                                                bg="gray.50"
                                                borderRadius="3xl"
                                                border="1px solid"
                                                borderColor="gray.100"
                                                transition="all 0.3s"
                                                _hover={{ bg: "white", boxShadow: "xl" }}
                                            >
                                                <Heading fontSize="5xl" fontWeight="900" color="red.600" mb={1}>
                                                    {stat.value}
                                                </Heading>
                                                <Text fontWeight="800" fontSize="lg" color="gray.800" mb={2}>
                                                    {stat.label}
                                                </Text>
                                                <Text fontSize="sm" color="gray.500" fontWeight="600">
                                                    {stat.extraInfo}
                                                </Text>
                                            </Box>
                                        </motion.div>
                                    ))}
                                </VStack>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>

                {/* Section 2: Large Parallax Vision Section */}
                <Box h={{ base: "400px", md: "700px" }} position="relative" overflow="hidden" zIndex={1}>
                    <Box
                        as={motion.div}
                        style={{ y: parallaxY, scale: imageScale } as any}
                        position="absolute"
                        inset="0"
                        zIndex={0}
                    >
                        <Image
                            src={industry.parallaxImage}
                            alt="Visionary Tech"
                            w="100%"
                            h="120%" // Taller for parallax room
                            objectFit="cover"
                            filter="brightness(0.5) contrast(1.1)"
                        />
                    </Box>
                    <Box
                        position="absolute"
                        inset="0"
                        bgGradient="linear(to-b, white 0%, transparent 20%, transparent 80%, white 100%)"
                        zIndex={1}
                    />
                    <Container maxW="1200px" h="100%" position="relative" zIndex={2}>
                        <Flex align="center" justify="center" h="100%">
                            <VStack spacing={6} textAlign="center">
                                <Badge colorScheme="red" px={4} py={1} borderRadius="full" fontSize="xs" fontWeight="900" letterSpacing="0.1em">
                                    BEYOND THE HORIZON
                                </Badge>
                                <Heading color="white" fontSize={{ base: "4xl", md: "7xl" }} fontWeight="900" letterSpacing="-0.04em" lineHeight="1.1">
                                    Uncompromising Tech <br /> for High-Stakes Markets.
                                </Heading>
                            </VStack>
                        </Flex>
                    </Container>
                </Box>

                {/* Section 3: Challenges vs Solutions */}
                <Box py={32} bg="white">
                    <Container maxW="1440px">
                        <VStack spacing={20} align="stretch">
                            <Box textAlign="center" mb={10}>
                                <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="900" mb={6} letterSpacing="-0.02em">
                                    Bridging the <Text as="span" color="red.600">Implementation Gap</Text>
                                </Heading>
                                <Text fontSize="xl" color="gray.600" maxW="800px" mx="auto">
                                    Why most digital transformations fail in {industry.title} and how our architecture ensures your success.
                                </Text>
                            </Box>

                            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={10}>
                                {industry.challenges.map((challenge, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        whileHover={{ y: -10 }}
                                    >
                                        <Box
                                            bg="white"
                                            p={12}
                                            borderRadius="4xl"
                                            border="1px solid"
                                            borderColor="gray.100"
                                            position="relative"
                                            overflow="hidden"
                                            transition="all 0.5s"
                                            h="100%"
                                            _hover={{ shadow: "2xl", borderColor: "red.500" }}
                                        >
                                            <Flex boxSize={16} bg="red.50" borderRadius="2xl" align="center" justify="center" mb={8} color="red.600">
                                                <Icon as={[BsLightningCharge, BsShieldCheck, BsCpu][idx % 3]} boxSize={8} />
                                            </Flex>
                                            <Heading fontSize="2xl" fontWeight="900" mb={4} color="gray.800">
                                                {challenge.title}
                                            </Heading>
                                            <Text color="gray.600" fontSize="lg" lineHeight="1.7">
                                                {challenge.description}
                                            </Text>

                                            {/* Background Accent */}
                                            <Box
                                                position="absolute"
                                                top="-20px"
                                                right="-20px"
                                                fontSize="120px"
                                                fontWeight="900"
                                                color="gray.50"
                                                zIndex={-1}
                                                userSelect="none"
                                            >
                                                0{idx + 1}
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Grid>
                        </VStack>
                    </Container>
                </Box>

                {/* Section 4: Use Cases / Feature Showcase (Dark Section) */}
                <Box py={32} bg="#050505" color="white" borderTop="1px solid" borderColor="whiteAlpha.100">
                    <Container maxW="1400px">
                        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={20} alignItems="center">
                            <Box>
                                <Badge colorScheme="red" variant="solid" mb={6} px={3} py={1} borderRadius="md" fontWeight="800">
                                    CORE CAPABILITIES
                                </Badge>
                                <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="900" mb={8} letterSpacing="-0.03em" lineHeight="1.1">
                                    Precision-Built <br />
                                    Software use-cases.
                                </Heading>
                                <Text fontSize="xl" color="whiteAlpha.700" mb={12} lineHeight="1.8">
                                    We specialize in the high-complexity domains where generic software fails. Explore our specific application areas in {industry.title}.
                                </Text>

                                <VStack spacing={6} align="stretch">
                                    {industry.features.map((feature, idx) => (
                                        <HStack key={idx} spacing={5} p={4} borderRadius="2xl" border="1px solid" borderColor="whiteAlpha.50" transition="all 0.3s" _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.200" }}>
                                            <Icon as={BsCheckCircle} color="red.600" boxSize={6} />
                                            <Text fontSize="lg" fontWeight="700">{feature}</Text>
                                        </HStack>
                                    ))}
                                </VStack>
                            </Box>

                            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                {industry.useCases.map((useCase, idx) => (
                                    <GridItem key={idx} colSpan={idx === 0 ? 2 : 1}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        >
                                            <Box
                                                bg="whiteAlpha.50"
                                                p={idx === 0 ? 16 : 8}
                                                borderRadius="3xl"
                                                border="1px solid"
                                                borderColor="whiteAlpha.100"
                                                _hover={{ bg: "whiteAlpha.100", borderColor: "red.600" }}
                                                cursor="default"
                                                transition="all 0.3s"
                                            >
                                                <Flex boxSize={12} bg="red.600" borderRadius="xl" align="center" justify="center" mb={6}>
                                                    {renderIcon(useCase.icon, { boxSize: 6, color: "white" })}
                                                </Flex>
                                                <Heading fontSize={idx === 0 ? "3xl" : "xl"} fontWeight="800" mb={4}>
                                                    {useCase.title}
                                                </Heading>
                                                <Text color="whiteAlpha.600" fontSize={idx === 0 ? "lg" : "sm"} lineHeight="1.7">
                                                    {useCase.description}
                                                </Text>
                                            </Box>
                                        </motion.div>
                                    </GridItem>
                                ))}
                            </Grid>
                        </SimpleGrid>
                    </Container>
                </Box>

                {/* Section 5: Strategic Approach */}
                <Box py={32} bg="white">
                    <Container maxW="1200px">
                        <VStack spacing={16}>
                            <Box textAlign="center">
                                <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="900" mb={6}>
                                    Our Approach to {industry.title}
                                </Heading>
                                <Text color="gray.600" fontSize="xl" maxW="700px" mx="auto">
                                    A battle-tested methodology designed for maximum speed and zero risk.
                                </Text>
                            </Box>

                            <Flex direction={{ base: "column", md: "row" }} gap={8} w="100%">
                                {industry.strategicApproach.map((item, idx) => (
                                    <Box key={idx} flex={1} position="relative">
                                        <VStack align="flex-start" spacing={6} p={10} bg="gray.50" borderRadius="3xl" h="100%" border="1px solid" borderColor="gray.100" _hover={{ bg: "white", shadow: "2xl", borderColor: "red.500" }} transition="all 0.3s">
                                            <Text fontSize="xs" fontWeight="900" color="red.600" letterSpacing="0.2em">
                                                PHASE {item.step}
                                            </Text>
                                            <Heading fontSize="2xl" fontWeight="800">
                                                {item.title}
                                            </Heading>
                                            <Text color="gray.600" lineHeight="1.7">
                                                {item.description}
                                            </Text>
                                        </VStack>
                                        {idx < 2 && (
                                            <Box display={{ base: "none", lg: "block" }} position="absolute" top="50%" right="-20px" zIndex={2} transform="translateY(-50%)">
                                                <Icon as={BsArrowRight} color="red.200" boxSize={10} />
                                            </Box>
                                        )}
                                    </Box>
                                ))}
                            </Flex>

                            <Link href="/contact">
                                <Button
                                    size="xl"
                                    bg="red.600"
                                    color="white"
                                    px={16}
                                    h={20}
                                    fontSize="xl"
                                    fontWeight="900"
                                    borderRadius="2xl"
                                    _hover={{ bg: "black", transform: "translateY(-5px)" }}
                                    transition="all 0.3s"
                                    rightIcon={<FiArrowUpRight />}
                                >
                                    SCHEDULE CONSULTATION
                                </Button>
                            </Link>
                        </VStack>
                    </Container>
                </Box>

                {/* Final CTA Strip */}
                <Box py={24} bg="#050505" position="relative" overflow="hidden">
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        w="150%"
                        h="150%"
                        bg="radial-gradient(circle, rgba(255,19,19,0.15) 0%, rgba(0,0,0,0) 60%)"
                        filter="blur(100px)"
                        zIndex="0"
                    />
                    <Container maxW="container.lg" textAlign="center" position="relative" zIndex="1">
                        <Heading as="h2" size="3xl" color="white" mb={8} fontWeight="900" letterSpacing="-0.04em">
                            Ready to Innovate in {industry.title}?
                        </Heading>
                        <Text fontSize="2xl" color="whiteAlpha.700" mb={12} maxW="2xl" mx="auto" fontWeight="500">
                            Let's build the technology that defines the next era of your industry.
                        </Text>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                color="white"
                                borderColor="whiteAlpha.300"
                                px={12}
                                h={16}
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{ bg: 'white', color: 'black', transform: 'scale(1.05)' }}
                                transition="all 0.3s"
                            >
                                START YOUR PROJECT
                            </Button>
                        </Link>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
