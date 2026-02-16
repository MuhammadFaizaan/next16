'use client';

import { Box, Container, SimpleGrid, VStack, Heading, Text, Flex } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WorkHero from '../components/Work/WorkHero';
import ProjectCard from '../components/Work/ProjectCard';
import { projects } from '../components/Work/WorkData';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function WorkClient() {
    return (
        <Box bg="black" minH="100vh">
            <Header />
            <main>
                <WorkHero />

                <Box py={{ base: 20, md: 32 }} bg="black">
                    <Container maxW="1200px">
                        <VStack spacing={20} align="stretch">
                            {/* Section Header - Subtle */}
                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Flex align="center" gap={3} mb={4}>
                                    <Box w="30px" h="2px" bg="red.600" />
                                    <Text fontWeight="bold" fontSize="xs" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                                        Featured Work
                                    </Text>
                                </Flex>
                                <Heading color="white" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" letterSpacing="-0.02em">
                                    Engineering solutions for <br />
                                    the <Text as="span" color="red.600">next generation</Text> of tech.
                                </Heading>
                            </MotionBox>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
                                {projects.map((project, index) => (
                                    <ProjectCard
                                        key={project.slug}
                                        project={project}
                                        index={index}
                                    />
                                ))}
                            </SimpleGrid>
                        </VStack>
                    </Container>
                </Box>
            </main>
            <Footer />
        </Box>
    );
}
