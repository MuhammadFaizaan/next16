'use client';

import { Box, Container, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const MotionBox = motion(Box);

export default function AboutCTA() {
    return (
        <Box
            position="relative"
            h={{ base: "500px", md: "600px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            // Fixed background implementation
            backgroundImage="url('/images/cta-bg.png')"
            backgroundAttachment="fixed"
            backgroundSize="cover"
            backgroundPosition="center"
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: "blackAlpha.700",
                zIndex: 0
            }}
        >
            {/* Content */}
            <Container maxW="1400px" position="relative" zIndex={1}>
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Stack spacing={8} align="center" textAlign="center">
                        <Stack spacing={4} maxW="800px">
                            <Text
                                color="red.500"
                                fontWeight="bold"
                                fontSize="sm"
                                letterSpacing="0.2em"
                                textTransform="uppercase"
                            >
                                Join the Revolution
                            </Text>

                            <Heading
                                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                                fontWeight="900"
                                color="white"
                                lineHeight="1.1"
                                letterSpacing="-0.04em"
                            >
                                Ready to Build the <br />
                                <Text as="span" color="red.600">Future</Text> with Us?
                            </Heading>

                            <Text fontSize={{ base: "lg", md: "2xl" }} color="whiteAlpha.800" maxW="600px" mx="auto">
                                We're always looking for visionaries, creators, and innovators to join our mission.
                            </Text>
                        </Stack>

                        <Flex gap={6} direction={{ base: "column", sm: "row" }}>
                            <Button
                                as={Link}
                                href="/contact"
                                size="lg"
                                px={10}
                                py={8}
                                rounded="full"
                                bg="red.600"
                                color="white"
                                fontSize="lg"
                                fontWeight="bold"
                                rightIcon={<FiArrowRight />}
                                _hover={{
                                    bg: "red.500",
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)"
                                }}
                                transition="all 0.3s"
                            >
                                Start Your Project
                            </Button>
                            <Button
                                as={Link}
                                href="/careers"
                                variant="outline"
                                size="lg"
                                px={10}
                                py={8}
                                rounded="full"
                                color="white"
                                borderColor="whiteAlpha.400"
                                fontSize="lg"
                                _hover={{
                                    bg: "whiteAlpha.100",
                                    borderColor: "white",
                                    transform: "translateY(-4px)"
                                }}
                                transition="all 0.3s"
                            >
                                View Careers
                            </Button>
                        </Flex>
                    </Stack>
                </MotionBox>
            </Container>
        </Box>
    );
}
