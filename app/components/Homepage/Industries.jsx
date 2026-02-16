

'use client';

import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    VStack,
    Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

const industries = [
    { title: 'NGO', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop' },
    { title: 'Fintech & Banking', image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=800&auto=format&fit=crop' },
    { title: 'Healthcare & Wellness', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop' },
    { title: 'Education & E-Learning', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop' },
    { title: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop' },
];

const tickerContent = [...industries, ...industries];

export default function IndustrySlider() {
    return (
        <Box
            as="section"
            bg="#fff"
            py={24}
            overflow="hidden"
            position="relative"
        >
            <Box
                position="absolute"
                bottom="-10%"
                right="-5%"
                w="500px"
                h="500px"
                bg="red.900"
                filter="blur(120px)"
                opacity="0.3"
                borderRadius="full"
                pointerEvents="none"
            />

            <Container maxW="1380px" mb={16}>
                <VStack align="flex-start" spacing={6}>
                    <Heading
                        as="h2"
                        fontSize={{ base: '4xl', md: '6xl' }}
                        fontWeight="600"
                        color="black"
                        lineHeight="1.1"
                    >
                        Industries We <br />
                        <Text as="span" color="red">Empower</Text>
                    </Heading>
                    <Text color="black" maxW="xl" fontSize="lg">
                        We deliver tailored digital solutions across industries, empowering businesses to innovate, scale, and thrive in a connected world.
                    </Text>
                </VStack>
            </Container>

            <Box position="relative" w="full">
                {/* <Box
                    position="absolute"
                    insetY={0}
                    left={0}
                    w="150px"
                    bgGradient="linear(to-r, #020817, transparent)"
                    zIndex={2}
                />
                <Box
                    position="absolute"
                    insetY={0}
                    right={0}
                    w="150px"
                    bgGradient="linear(to-l, #020817, transparent)"
                    zIndex={2}
                /> */}

                <MotionFlex
                    display="flex"
                    width="max-content"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, 
                            ease: "linear",
                        },
                    }}
                    gap={8}
                    px={4}
                >
                    {tickerContent.map((item, index) => (
                        <Box
                            key={index}
                            position="relative"
                            w={{ base: '280px', md: '380px' }}
                            h={{ base: '400px', md: '500px' }}
                            borderRadius="24px" 
                            overflow="hidden"
                            flexShrink={0}
                        >
                            <Box
                                position="absolute"
                                inset={0}
                                bgGradient="linear(to-t, rgba(0,0,0,0.8) 0%, transparent 40%)"
                                zIndex={1}
                            />

                            <Image
                                src={item.image}
                                alt={item.title}
                                w="full"
                                h="full"
                                objectFit="cover"
                                transition="transform 0.5s ease"
                                _hover={{ transform: 'scale(1.05)' }}
                            />

                            <Box
                                position="absolute"
                                bottom={10}
                                left={10}
                                right={10}
                                zIndex={2}
                            >
                                <Text
                                    color="white"
                                    fontSize="2xl"
                                    fontWeight="600"
                                    lineHeight="1.2"
                                >
                                    {item.title}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </MotionFlex>
            </Box>
        </Box>
    );
}