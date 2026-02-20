'use client';

import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    VStack,
    HStack,
    SimpleGrid,
    Divider,
    Icon,
    Flex,
    Grid,
    GridItem,
    Stack
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { projects } from '../../components/Work/WorkData';
import { FiArrowLeft, FiLayers, FiCheckCircle, FiCpu, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import PageHero from '../../components/Common/PageHero';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

export default function ProjectDetailsClient() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = projects.find(p => p.slug === slug);
    const containerRef = useRef(null);

    // Parallax logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    if (!project) {
        return (
            <Box bg="white" minH="100vh" color="gray.800" display="flex" alignItems="center" justifyContent="center">
                <VStack spacing={6}>
                    <Heading>Project Not Found</Heading>
                    <Link href="/work">
                        <Text color="red.600" fontWeight="bold">Back to Portfolio</Text>
                    </Link>
                </VStack>
            </Box>
        );
    }

    return (
        <Box bg="white" color="gray.800" minH="100vh" ref={containerRef}>
            <Header />

            <main>
                <PageHero
                    title={project.title}
                    subtitle={`Work / ${project.category} / ${project.title}`}
                    image={project.thumbnail}
                    ctaText="GET IN TOUCH"
                    ctaHref="/contact"
                />

                {/* Project Strategy & Stats */}
                <Box py={32} bg="white">
                    <Container maxW="1200px">
                        <Grid templateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }} gap={20}>
                            {/* Stats Sidebar - About page style */}
                            <GridItem colSpan={{ base: 1, lg: 4 }}>
                                <VStack align="flex-start" spacing={16}>
                                    <Box>
                                        <Flex align="center" gap={3} mb={8}>
                                            <Box w="30px" h="2px" bg="red.600" />
                                            <Text fontWeight="bold" fontSize="xs" letterSpacing="0.1em" textTransform="uppercase" color="red.600">Impact</Text>
                                        </Flex>
                                        <SimpleGrid columns={1} spacing={10}>
                                            {project.stats?.map((stat, i) => (
                                                <Box key={i}>
                                                    <Text fontSize="5xl" fontWeight="800" color="gray.800" lineHeight="1">{stat.value}</Text>
                                                    <Text color="gray.500" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="0.05em">{stat.label}</Text>
                                                </Box>
                                            ))}
                                        </SimpleGrid>
                                    </Box>

                                    <Box w="100%">
                                        <Flex align="center" gap={3} mb={8}>
                                            <Box w="30px" h="2px" bg="red.600" />
                                            <Text fontWeight="bold" fontSize="xs" letterSpacing="0.1em" textTransform="uppercase" color="red.600">Technologies</Text>
                                        </Flex>
                                        <HStack wrap="wrap" spacing={3}>
                                            {project.technologies.map((tech) => (
                                                <Box
                                                    key={tech}
                                                    bg="gray.50"
                                                    px={4}
                                                    py={2}
                                                    borderRadius="xl"
                                                    fontSize="2xs"
                                                    fontWeight="bold"
                                                    textTransform="uppercase"
                                                    letterSpacing="0.1em"
                                                    border="1px solid"
                                                    borderColor="gray.100"
                                                    color="gray.600"
                                                >
                                                    {tech}
                                                </Box>
                                            ))}
                                        </HStack>
                                    </Box>
                                </VStack>
                            </GridItem>

                            {/* Main Content */}
                            <GridItem colSpan={{ base: 1, lg: 8 }}>
                                <VStack align="flex-start" spacing={16}>
                                    <Box>
                                        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" mb={8} lineHeight="1.2" color="gray.800">
                                            The Goal: Building a <Text as="span" color="red.600">scalable</Text> digital ecosystem.
                                        </Heading>
                                        <Text fontSize="xl" color="gray.600" lineHeight="1.8">
                                            {project.fullDescription}
                                        </Text>
                                    </Box>

                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                                        <Box bg="gray.50" p={10} borderRadius="3xl" border="1px solid" borderColor="gray.100">
                                            <Flex boxSize={12} bg="red.600" borderRadius="2xl" align="center" justify="center" mb={6}>
                                                <Icon as={FiLayers} color="white" boxSize={6} />
                                            </Flex>
                                            <Heading fontSize="2xl" fontWeight="700" mb={4} color="gray.800">The Challenge</Heading>
                                            <Text color="gray.600" lineHeight="1.7">{project.challenge}</Text>
                                        </Box>
                                        <Box bg="gray.50" p={10} borderRadius="3xl" border="1px solid" borderColor="gray.100">
                                            <Flex boxSize={12} bg="red.600" borderRadius="2xl" align="center" justify="center" mb={6}>
                                                <Icon as={FiCpu} color="white" boxSize={6} />
                                            </Flex>
                                            <Heading fontSize="2xl" fontWeight="700" mb={4} color="gray.800">The Solution</Heading>
                                            <Text color="gray.600" lineHeight="1.7">{project.solution}</Text>
                                        </Box>
                                    </SimpleGrid>

                                    <Box w="100%">
                                        <Heading fontSize="3xl" fontWeight="800" mb={10} color="gray.800">Key Achievements</Heading>
                                        <VStack align="flex-start" spacing={6} w="100%">
                                            {project.results.map((result, i) => (
                                                <HStack key={i} spacing={4} align="flex-start">
                                                    <Icon as={FiCheckCircle} color="red.600" mt={1} />
                                                    <Text fontSize="xl" color="gray.700" fontWeight="600">{result}</Text>
                                                </HStack>
                                            ))}
                                        </VStack>
                                    </Box>
                                </VStack>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>

                {/* Showcase Image with About-style borders */}
                <Box py={24} bg="white">
                    <Container maxW="1200px">
                        <MotionBox
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            position="relative"
                            borderRadius="3xl"
                            overflow="hidden"
                            boxShadow="2xl"
                        >
                            <Image
                                src={project.images[1] || project.thumbnail}
                                alt="Project Showcase"
                                w="100%"
                                h={{ base: "300px", md: "600px" }}
                                objectFit="cover"
                            />
                            <Box
                                position="absolute"
                                inset="0"
                                bgGradient="linear(to-t, blackAlpha.400, transparent)"
                            />
                        </MotionBox>
                    </Container>
                </Box>

                {/* Fixed Background CTA Section Like About Page */}
                <Box
                    position="relative"
                    h="600px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    backgroundImage={`url('${project.thumbnail}')`}
                    backgroundAttachment="fixed"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    _before={{
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        bg: "blackAlpha.800",
                        zIndex: 0
                    }}
                >
                    <Container maxW="1200px" position="relative" zIndex={1} textAlign="center">
                        <VStack spacing={8}>
                            <Stack spacing={4} maxW="800px">
                                <Text
                                    color="red.600"
                                    fontWeight="bold"
                                    fontSize="sm"
                                    letterSpacing="0.2em"
                                    textTransform="uppercase"
                                >
                                    Looking for results like this?
                                </Text>

                                <Heading
                                    fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                                    fontWeight="900"
                                    color="white"
                                    lineHeight="1.1"
                                    letterSpacing="-0.04em"
                                >
                                    Let's Start Your <br />
                                    <Text as="span" color="red.600">Digital</Text> Transformation.
                                </Heading>
                            </Stack>

                            <Link href="/contact">
                                <Box
                                    px={12}
                                    py={6}
                                    bg="red.600"
                                    color="white"
                                    borderRadius="full"
                                    fontWeight="bold"
                                    fontSize="lg"
                                    _hover={{ bg: "red.500", transform: "translateY(-4px)", boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)" }}
                                    transition="all 0.3s"
                                    cursor="pointer"
                                    display="flex"
                                    alignItems="center"
                                    gap={3}
                                >
                                    Work With Us <Icon as={FiExternalLink} />
                                </Box>
                            </Link>
                        </VStack>
                    </Container>
                </Box>
            </main>

            <Footer />
        </Box>
    );
}
