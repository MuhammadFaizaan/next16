'use client';

import { Box, Heading, Text, Stack, Button, Container, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { FiHome } from 'react-icons/fi';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function NotFound() {
    const bgColor = "#050505";

    return (
        <>
            <Header />
            <Box
                as="section"
                bg={bgColor}
                minH="100vh"
                position="relative"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center"
                pt="100px"
            >
                {/* Background Decorative Elements */}
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w={{ base: "300px", md: "800px" }}
                    h={{ base: "300px", md: "800px" }}
                    bg="red.600"
                    opacity="0.05"
                    filter="blur(160px)"
                    borderRadius="full"
                    zIndex={0}
                />

                <Container maxW="1200px" position="relative" zIndex={1}>
                    <Flex
                        direction={{ base: 'column', lg: 'row' }}
                        align="center"
                        justify="space-between"
                        gap={{ base: 12, lg: 20 }}
                    >
                        {/* Left Side: Content */}
                        <Stack spacing={8} flex="1" textAlign={{ base: 'center', lg: 'left' }} align={{ base: 'center', lg: 'flex-start' }}>
                            <MotionBox
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Flex align="center" gap={3} justify={{ base: "center", lg: "start" }}>
                                    <Box w="40px" h="1px" bg="red.600" />
                                    <Text color="red.500" fontWeight="800" fontSize="sm" letterSpacing="0.2em" textTransform="uppercase">
                                        Error 404
                                    </Text>
                                </Flex>
                            </MotionBox>

                            <Stack spacing={4}>
                                <MotionHeading
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                                    fontWeight="800"
                                    color="white"
                                    letterSpacing="-0.04em"
                                    lineHeight="1.1"
                                >
                                    Lost in the <br />
                                    <Text as="span" color="whiteAlpha.400">Digital Void.</Text>
                                </MotionHeading>

                                <MotionText
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    fontSize={{ base: "lg", md: "xl" }}
                                    color="whiteAlpha.600"
                                    maxW="500px"
                                    lineHeight="tall"
                                >
                                    The block you are looking for has been pruned or never existed in this ledger.
                                    Let's get you back to the genesis block.
                                </MotionText>
                            </Stack>

                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <Flex gap={4} direction={{ base: "column", sm: "row" }}>
                                    <Button
                                        as={Link}
                                        href="/"
                                        leftIcon={<FiHome />}
                                        size="lg"
                                        px={10}
                                        py={8}
                                        rounded="full"
                                        bg="white"
                                        color="black"
                                        _hover={{
                                            bg: "red.600",
                                            color: "white",
                                            transform: "translateY(-4px)",
                                            shadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
                                        }}
                                        transition="all 0.3s"
                                        fontWeight="bold"
                                    >
                                        Return Home
                                    </Button>
                                    <Button
                                        as={Link}
                                        href="/contact"
                                        variant="outline"
                                        color="white"
                                        borderColor="whiteAlpha.300"
                                        size="lg"
                                        px={10}
                                        py={8}
                                        rounded="full"
                                        _hover={{ bg: "whiteAlpha.100", borderColor: "white" }}
                                    >
                                        Contact Support
                                    </Button>
                                </Flex>
                            </MotionBox>
                        </Stack>

                        {/* Right Side: Visual */}
                        <MotionBox
                            flex="1"
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            position="relative"
                        >
                            <MotionBox
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src="/images/404-visual.png"
                                    alt="404 Visual"
                                    borderRadius="3xl"
                                    boxShadow="2xl"
                                    maxW={{ base: "100%", lg: "550px" }}
                                />
                            </MotionBox>

                            <MotionBox
                                position="absolute"
                                bottom="-10px"
                                right="-10px"
                                bg="red.600"
                                px={6}
                                py={3}
                                borderRadius="2xl"
                                color="white"
                                fontWeight="900"
                                fontSize="2xl"
                                boxShadow="xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                            >
                                404
                            </MotionBox>
                        </MotionBox>
                    </Flex>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
