'use client';

import {
    Box,
    Container,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Tag,
    Text,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const MotionBox = motion(Box);

const portfolioItems = [
    {
        id: 1,
        year: '2024',
        tags: ['SOLANA', 'NODEJS', 'NEXTJS', 'RUST', 'PYTHON'],
        title: 'MemeHive',
        description:
            'MemeHive is a Solana-based investment hub and automatic trading platform focused on memecoins — perfect for crypto enthusiasts seeking hands-free profits.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop', // Replace with Actual Image path if available
    },
    {
        id: 2,
        year: '2025',
        tags: ['EVM', 'NEXTJS', 'SOLIDITY', 'NODEJS'],
        title: 'Schindlersx',
        description:
            'Schindlersx is a powerful Real World Assets (RWA) platform built on the Ethereum Virtual Machine (EVM), enabling secure asset digitization and blockchain-based ownership management.',
        image: 'https://images.unsplash.com/photo-1642104704074-907c0698bcd9?q=80&w=2832&auto=format&fit=crop',
    },
    {
        id: 3,
        year: '2024',
        tags: ['MOBILE', 'REACT NATIVE', 'FIREBASE'],
        title: 'PartyShark',
        description:
            'PartyShark is the ultimate event discovery and social planning app, helping users find the best parties and manage their social calendar with ease.',
        image: 'https://images.unsplash.com/photo-1514525253361-bee8a187499b?q=80&w=2846&auto=format&fit=crop',
    },
    {
        id: 4,
        year: '2024',
        tags: ['AI', 'PYTHON', 'FASTAPI'],
        title: 'Chronicle AI',
        description:
            'Chronicle AI leverages advanced machine learning models to provide real-time insights and automated workflows for enterprise-scale data management.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop',
    },
];

export default function PortfolioSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    }, []);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <Box
            as="section"
            bg="black"
            my={{ base: 12, md: 24 }}
            py={{ base: 12, md: 24 }}
            position="relative"
            overflow="hidden"
            color="white"
            w="100%"
            mx={'auto'}
            mb={20}
        >
            {/* Wavy Background Elements (Improved) */}
            <Box
                position="absolute"
                top="0"
                right="-10%"
                opacity="0.3"
                pointerEvents="none"
                zIndex={0}
            >
                <svg width="1000" height="1000" viewBox="0 0 1000 1000">
                    {[...Array(15)].map((_, i) => (
                        <path
                            key={i}
                            d={`M0 ${200 + i * 30} C 300 ${100 + i * 30}, 700 ${400 + i * 30}, 1000 ${200 + i * 30}`}
                            stroke="#E2E8F0"
                            fill="transparent"
                            strokeWidth="1.5"
                        />
                    ))}
                </svg>
            </Box>

            <Container maxW="1400px" position="relative" zIndex={1}>
                {/* Header */}
                <Stack spacing={2} mb={12} px={{ base: 4, md: 0 }}>
                    <Text
                        color="#FF4D00"
                        fontSize="sm"
                        fontWeight="600"
                        letterSpacing="0.1em"
                    >
                        / portfolio /
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                        fontWeight="400"
                        maxW="800px"
                        lineHeight="1.1"
                        letterSpacing="-0.02em"
                    >
                        From Concept to Code,<br />Seamlessly Delivered
                    </Heading>
                </Stack>
            </Container>

            {/* Swiper Layout Area */}
            <Box position="relative" w="100%" overflow="hidden" px={0}>
                <Flex
                    justify="center"
                    align="center"
                    position="relative"
                    h={{ base: '600px', md: '750px' }}
                >
                    <AnimatePresence initial={false}>
                        {portfolioItems.map((item, index) => {
                            const isCenter = index === currentIndex;
                            const isLeft = index === (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
                            const isRight = index === (currentIndex + 1) % portfolioItems.length;

                            if (!isCenter && !isLeft && !isRight) return null;

                            let xPos = '0%';
                            let scale = 0.85;
                            let opacity = 0.4;
                            let zIndex = 1;

                            if (isCenter) {
                                xPos = '0%';
                                scale = 1;
                                opacity = 1;
                                zIndex = 10;
                            } else if (isLeft) {
                                xPos = '-100%';
                                scale = 0.95;
                                opacity = 0.8;
                                zIndex = 5;
                            } else if (isRight) {
                                xPos = '100%';
                                scale = 0.95;
                                opacity = 0.8;
                                zIndex = 5;
                            }

                            return (
                                <MotionBox
                                    key={item.id}
                                    position="absolute"
                                    w={{ base: '90%', md: '1000px' }}
                                    h={{ base: '500px', md: '650px' }}
                                    initial={{ opacity: 0, scale: 0.8, x: isRight ? '100%' : '-100%' }}
                                    animate={{
                                        opacity,
                                        scale,
                                        x: xPos,
                                        zIndex,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8, x: isLeft ? '-100%' : '100%' }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 30,
                                        opacity: { duration: 0.4 }
                                    }}
                                    bg="#3d3d3dcb"
                                    borderRadius="40px"
                                    p={{ base: 6, md: 10 }}
                                    color="white"
                                    // boxShadow="2xl"
                                    display="flex"
                                    flexDirection="column"
                                    cursor="pointer"
                                    onClick={() => {
                                        if (isLeft) prevSlide();
                                        if (isRight) nextSlide();
                                    }}
                                >
                                    {/* Card Content Top */}
                                    <Flex justify="space-between" align="start" mb={6}>
                                        <HStack spacing={2} wrap="wrap" maxW="80%">
                                            {item.tags.map((tag) => (
                                                <Tag
                                                    key={tag}
                                                    bg="transparent"
                                                    border="1px solid"
                                                    borderColor="whiteAlpha.300"
                                                    color="whiteAlpha.800"
                                                    fontSize="xs"
                                                    px={3}
                                                    py={1}
                                                    borderRadius="full"
                                                >
                                                    {tag}
                                                </Tag>
                                            ))}
                                        </HStack>
                                        <Box
                                            bg="#FF4D00"
                                            px={4}
                                            py={1}
                                            borderRadius="xl"
                                            fontSize="sm"
                                            fontWeight="700"
                                        >
                                            {item.year}
                                        </Box>
                                    </Flex>

                                    {/* Title & Description */}
                                    <Stack spacing={3} mb={8}>
                                        <Heading
                                            as="h3"
                                            fontSize={{ base: '2xl', md: '4xl' }}
                                            color="#FF4D00"
                                            fontWeight="700"
                                        >
                                            {item.title}
                                        </Heading>
                                        <Text
                                            fontSize={{ base: 'sm', md: 'md' }}
                                            color="whiteAlpha.700"
                                            lineHeight="1.5"
                                            noOfLines={3}
                                        >
                                            {item.description}
                                        </Text>
                                    </Stack>

                                    {/* Project Image Area */}
                                    <Box
                                        flex="1"
                                        w="100%"
                                        borderRadius="20px"
                                        overflow="hidden"
                                        bg="#1a1a1a"
                                        position="relative"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            w="100%"
                                            h="100%"
                                            objectFit="cover"
                                        />
                                    </Box>
                                </MotionBox>
                            );
                        })}
                    </AnimatePresence>
                </Flex>

                {/* Custom Pagination Dots */}
                <HStack justify="center" mt={-8} spacing={3} position="relative" zIndex={20}>
                    {portfolioItems.map((_, index) => (
                        <Box
                            key={index}
                            w={index === currentIndex ? "12px" : "8px"}
                            h={index === currentIndex ? "12px" : "8px"}
                            bg={index === currentIndex ? "#FF4D00" : "gray.300"}
                            borderRadius="full"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </HStack>
            </Box>
        </Box>
    );
}
