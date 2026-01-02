'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function ContactHero() {
    return (
        <Box
            position="relative"
            pt={{ base: "140px", md: "180px" }}
            pb={{ base: "80px", md: "120px" }}
            bg="#050505"
            overflow="hidden"
            borderBottomRadius={{ base: "40px", md: "80px" }}
        >
            {/* Video Background */}
            <Box position="absolute" inset={0} zIndex={0}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.4
                    }}
                >
                    <source src="/images/final_video_2.mp4" type="video/mp4" />
                </video>

                {/* Overlays */}
                <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(to-b, #050505, transparent, #050505)"
                    opacity={0.7}
                />
            </Box>

            {/* Background Glow */}
            <Box
                position="absolute"
                top="-10%"
                left="50%"
                transform="translateX(-50%)"
                w="100%"
                h="100%"
                bg="radial-gradient(circle, rgba(255, 19, 19, 0.12) 0%, transparent 70%)"
                pointerEvents="none"
                zIndex={1}
            />

            <Container maxW="container.xl" position="relative" zIndex={2}>
                <VStack spacing={6} align="center" textAlign="center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                            fontWeight="800"
                            color="white"
                            lineHeight="1.1"
                            letterSpacing="-0.02em"
                        >
                            Let's Build Something <br />
                            <Text as="span" bgGradient="linear(to-r, #FF1313, #FF4D4D)" bgClip="text">
                                Exceptional Together
                            </Text>
                        </Heading>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            color="whiteAlpha.800"
                            maxW="700px"
                            fontWeight="medium"
                            textShadow="0 2px 10px rgba(0,0,0,0.5)"
                        >
                            Whether you have a specific project in mind or just want to explore possibilities,
                            we're here to help you navigate the next frontier of technology.
                        </Text>
                    </motion.div>
                </VStack>
            </Container>

            {/* Decorative circle */}
            <Box
                position="absolute"
                bottom="-50px"
                right="-50px"
                w="200px"
                h="200px"
                bg="rgba(255, 19, 19, 0.05)"
                borderRadius="full"
                filter="blur(40px)"
            />
        </Box>
    );
}
