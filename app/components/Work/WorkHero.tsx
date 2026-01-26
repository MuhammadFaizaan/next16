'use client';

import { Box, Container, Heading, Text, VStack, Image, Stack, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function WorkHero() {
    return (
        <Box
            position="relative"
            pt={{ base: "140px", md: "180px" }}
            pb={{ base: 20, md: 32 }}
            overflow="hidden"
            bg="black"
        >
            {/* Parallax Background */}
            <Box
                position="absolute"
                inset="0"
                zIndex={0}
                // opacity={0.3}
                backgroundImage="url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')"
                backgroundAttachment="fixed"
                backgroundSize="cover"
                backgroundPosition="center"

            >
                <Box
                    position="absolute"
                    inset="0"
                    bgGradient="linear(to-b, black, transparent, black)"
                />
            </Box>

            <Container maxW="1440px" position="relative" zIndex={2}>
                <VStack spacing={12} align="flex-start">
                    <Stack spacing={6} maxW="800px" className='!bg-white/10 !p-4 !pb-6 !px-6 !rounded-2xl !backdrop-blur-md !inline-block'>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}

                        >
                            <Flex align="center" gap={3} mb={4}>
                                <Box w="40px" h="2px" bg="red.600" />
                                <Text fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                                    Our Work
                                </Text>
                            </Flex>

                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                                fontWeight="800"
                                color="white"
                                letterSpacing="-0.03em"
                                lineHeight="1.1"
                            >
                                We build products <br />
                                <Text as="span" color="red.600">people love.</Text>
                            </Heading>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.700" maxW="600px" lineHeight="1.6">
                                Exploring the intersection of design, technology, and human experience.
                                Discover our recent projects and case studies for leading tech companies.
                            </Text>
                        </MotionBox>
                    </Stack>
                </VStack>
            </Container>
        </Box>
    );
}
