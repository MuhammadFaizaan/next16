'use client';

import { Box, Container, Heading, Text, VStack, Image } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function CareerHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <Box
            ref={containerRef}
            position="relative"
            pt={{ base: "140px", md: "180px" }}
            pb={{ base: 20, md: 32 }}
            bg="white"
            overflow="hidden"
        >
            <Container w="full" maxW="1400px" px={{ base: 4, md: 6 }}>
                <VStack spacing={12} align="flex-start">
                    <VStack align="flex-start" spacing={6} maxW="1400px">
                        <MotionBox
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                                fontWeight="800"
                                color="black"
                                letterSpacing="-0.03em"
                                lineHeight="1.1"
                            >
                                Be part of <br />
                                <Box as="span" color="red.600">something great</Box>
                            </Heading>
                        </MotionBox>

                        <MotionText
                            fontSize={{ base: "lg", md: "xl" }}
                            color="gray.600"
                            maxW="600px"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We build high-end digital products for start-ups and Fortune 500 companies.
                            Our team is our greatest asset, and we're looking for the best talent to join us.
                        </MotionText>
                    </VStack>
                </VStack>
            </Container>

            <MotionBox
                style={{ y }}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                w="100vw"
                position="relative"
                left="50%"
                ml="-50vw"
                mr="-50vw"
                overflow="hidden"
                boxShadow="2xl"
                zIndex={0}
                mt={20}
            >
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                    alt="Team Collaboration"
                    w="100%"
                    h={{ base: "500px", md: "800px" }}
                    objectFit="cover"
                />
                <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(to-t, blackAlpha.400, transparent)"
                />
            </MotionBox>
        </Box>
    );
}