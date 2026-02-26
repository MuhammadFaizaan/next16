'use client';

import { Box, Container, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
];

export default function CultureSlider() {
    return (
        <Box pb={32} bg="white" overflow="hidden">
            <Container maxW="1400px" mb={16}>
                <VStack align="flex-start" spacing={6}>
                    <Flex align="center" gap={3}>
                        <Box w="40px" h="2px" bg="red.600" />
                        <Text fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                            Our Culture
                        </Text>
                    </Flex>
                    <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" maxW="800px">
                        Experience a culture of empowerment and inclusion
                    </Heading>
                    <Text fontSize="lg" color="gray.600" maxW="700px">
                        We believe in fostering an environment where everyone can grow, innovate, and contribute to meaningful projects.
                    </Text>
                </VStack>
            </Container>

            {/* Auto-scrolling Marquee */}
            <Box position="relative" w="100%">
                <Flex
                    as={motion.div}
                    animate={{ x: [0, -1920] }}
                    // @ts-ignore
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    gap={8}
                    whiteSpace="nowrap"
                >
                    {[...images, ...images].map((img, idx) => (
                        <Box
                            key={idx}
                            minW={{ base: "300px", md: "450px" }}
                            h={{ base: "200px", md: "300px" }}
                            borderRadius="2xl"
                            overflow="hidden"
                            boxShadow="xl"
                        >
                            <Image
                                src={img}
                                alt={`Culture image ${idx}`}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                transition="transform 0.5s"
                                _hover={{ transform: "scale(1.1)" }}
                            />
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
}
