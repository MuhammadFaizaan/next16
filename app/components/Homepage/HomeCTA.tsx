'use client';

import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiZap } from 'react-icons/fi';

const MotionBox = motion(Box);

export default function HomeCTA() {
    return (
        <Box
            bg="black"
            py={{ base: 24, md: 32 }}
            position="relative"
            overflow="hidden"
        >
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w={{ base: "300px", md: "600px" }}
                h={{ base: "300px", md: "600px" }}
                bg="red.600"
                filter="blur(150px)"
                borderRadius="full"
                opacity={0.15}
                zIndex={0}
            />

            <Container maxW="1200px" position="relative" zIndex={1}>
                <Box
                    bgGradient="linear(to-br, whiteAlpha.100, whiteAlpha.50)"
                    borderRadius={{ base: "3xl", md: "50px" }}
                    p={{ base: 10, md: 24 }}
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    backdropFilter="blur(20px)"
                    position="relative"
                    overflow="hidden"
                >
                    <Box
                        position="absolute"
                        inset={0}
                        opacity={0.05}
                        backgroundImage="radial-gradient(circle, white 1px, transparent 1px)"
                        backgroundSize="30px 30px"
                    />

                    <VStack spacing={10} align="center" textAlign="center">
                        <MotionBox
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >

                            <Text
                                color="red.500"
                                fontWeight="bold"
                                fontSize="sm"
                                letterSpacing="0.2em"
                                textTransform="uppercase"
                                mb={4}
                            >
                                Ready to scale?
                            </Text>

                            <Heading
                                as="h2"
                                fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
                                fontWeight="900"
                                color="white"
                                lineHeight="1.1"
                                mb={6}
                                letterSpacing="-0.02em"
                            >
                                Let's build the <br />
                                <Box as="span" color="red.600">next big thing</Box> together.
                            </Heading>

                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                color="whiteAlpha.700"
                                maxW="600px"
                                mx="auto"
                                mb={10}
                            >
                                Join hundreds of successful companies already building the future with NextChainX.
                                Our experts are ready to turn your vision into reality.
                            </Text>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    h="70px"
                                    px={12}
                                    bg="red.600"
                                    color="white"
                                    fontSize="lg"
                                    fontWeight="bold"
                                    borderRadius="full"
                                    rightIcon={<FiArrowRight />}
                                    _hover={{
                                        bg: "red.500",
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)"
                                    }}
                                    transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                                >
                                    Start Your Journey
                                </Button>
                            </Link>
                        </MotionBox>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}
