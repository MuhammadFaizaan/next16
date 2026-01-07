'use client';

import { Box, Container, Heading, Text, Stack, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

export default function AboutHero() {
    const textColor = useColorModeValue('black', 'white');
    const mutedColor = useColorModeValue('gray.600', 'whiteAlpha.700');

    return (
        <Box position="relative" pt={{ base: "120px", md: "160px" }} pb={{ base: 12, md: 24 }} overflow="hidden">
            <Container maxW="1200px">
                <Stack spacing={12}>
                    {/* Header Text */}
                    <Stack spacing={6} maxW="800px">
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Flex align="center" gap={3} mb={4}>
                                <Box w="40px" h="2px" bg="red.600" />
                                <Text fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                                    About Us
                                </Text>
                            </Flex>

                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                                fontWeight="800"
                                color={textColor}
                                letterSpacing="-0.03em"
                                lineHeight="1.1"
                            >
                                Better Tech Means <br />
                                <Text as="span" color="red.600">Together.</Text>
                            </Heading>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Text fontSize={{ base: "lg", md: "xl" }} color={mutedColor} maxW="600px" lineHeight="1.6">
                                We are architects of the digital future, combining blockchain innovation with
                                artificial intelligence to build systems that matter.
                            </Text>
                        </MotionBox>
                    </Stack>

                    {/* Hero Image */}
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        position="relative"
                        borderRadius="3xl"
                        overflow="hidden"
                        boxShadow="2xl"
                    >
                        <Image
                            src="/images/about-team.png"
                            alt="NextChainX Team Collaboration"
                            w="100%"
                            h={{ base: "300px", md: "500px", lg: "600px" }}
                            objectFit="cover"
                            transition="transform 0.5s ease"
                            _hover={{ transform: "scale(1.02)" }}
                        />

                        {/* Overlay Gradient */}
                        <Box
                            position="absolute"
                            inset={0}
                            bgGradient="linear(to-t, blackAlpha.600, transparent)"
                            pointerEvents="none"
                        />
                    </MotionBox>
                </Stack>
            </Container>
        </Box>
    );
}
