'use client';

import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    Flex,
    VStack,
    HStack,
    Icon,
    Circle
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const MotionBox = motion(Box);

export default function HomeCTA() {
    return (
        <Box
            as="section"
            bg="black"
            py={{ base: 20 }}
            position="relative"
            overflow="hidden"
        >
            <Box
                position="absolute"
                top="0"
                right="0"
                w={{ base: "full", md: "30%" }}
                h="full"
                bg="red.600"
                opacity={0.03}
                zIndex={0}
            />

            <Container maxW="1400px" position="relative" zIndex={1}>
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    align="flex-start"
                    justify="space-between"
                    gap={{ base: 12, lg: 24 }}
                >
                    <VStack align="flex-start" spacing={0} flex="1">
                        <HStack spacing={4} mb={8}>
                            <Icon as={FiPlus} color="red.600" boxSize={6} />
                            <Text color="red.600" fontWeight="bold" letterSpacing="widest" fontSize="xs">
                                NEXT STEPS
                            </Text>
                        </HStack>

                        <Heading
                            as="h2"
                            fontSize={{ base: "5xl", md: "8xl", xl: "9xl" }}
                            fontWeight="900"
                            color="white"
                            lineHeight="0.85"
                            letterSpacing="-0.06em"
                        >
                            TALK IS <br />
                            <Text as="span" color="transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>
                                CHEAP.
                            </Text>
                        </Heading>
                    </VStack>

                    <VStack
                        align="flex-start"
                        spacing={10}
                        maxW={{ base: "full", lg: "450px" }}
                        pt={{ base: 0, lg: 12 }}
                    >
                        <Box h="2px" w="100px" bg="red.600" />

                        <Text fontSize="2xl" color="white" fontWeight="400" lineHeight="1.4">
                            We bridge the gap between <Text as="span" fontWeight="bold">visionary ideas</Text> and technical reality.
                        </Text>

                        <Text fontSize="md" color="whiteAlpha.600" lineHeight="1.7">
                            Ready to move past the brainstorming phase? Our team is currently accepting
                            projects for the Q3/Q4 2026 cycle. Let&apos;s see if we&apos;re a fit.
                        </Text>

                        <MotionBox
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="unstyled"
                                    display="flex"
                                    alignItems="center"
                                    gap={6}
                                    color="white"
                                    _hover={{ color: "red.500" }}
                                >
                                    <Circle
                                        size="80px"
                                        border="1px solid"
                                        borderColor="whiteAlpha.400"
                                        _groupHover={{ borderColor: "red.500" }}
                                    >
                                        <Icon as={FiArrowRight} boxSize={8} />
                                    </Circle>
                                    <VStack align="flex-start" spacing={0}>
                                        <Text fontSize="xl" fontWeight="700">LET&apos;S CONNECT</Text>
                                        <Text fontSize="xs" color="whiteAlpha.500">Response within 24hrs</Text>
                                    </VStack>
                                </Button>
                            </Link>
                        </MotionBox>
                    </VStack>
                </Flex>

                <Box
                    mt={24}
                    h="1px"
                    w="full"
                    bgGradient="linear(to-r, red.600, transparent)"
                    opacity={0.3}
                />
            </Container>

            <Box
                position="absolute"
                inset={0}
                pointerEvents="none"
                opacity={0.02}
                backgroundImage="url('https://www.transparenttextures.com/patterns/asfalt-dark.png')"
            />
        </Box>
    );
}