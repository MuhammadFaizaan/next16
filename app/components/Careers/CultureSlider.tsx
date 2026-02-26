'use client';

import { Box, Container, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';
import { motion, useAnimationControls } from 'framer-motion';

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
            <Container maxW="1400px">
                <VStack align="flex-start" spacing={10}>
                    <Flex align="center" gap={3}>
                        <Box w="40px" h="2px" bg="red.600" />
                        <Text fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                            Our Culture
                        </Text>
                    </Flex>
                    <VStack align="flex-start" spacing={6} maxW="900px">
                        <Heading fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} fontWeight="800" lineHeight="1.1">
                            Experience a culture of empowerment and inclusion
                        </Heading>
                        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
                            We believe in fostering an environment where everyone can grow, innovate, and contribute to meaningful projects.
                        </Text>
                    </VStack>
                </VStack>
            </Container>

            <Box position="relative" w="100%" mt={16} overflow="hidden">
                <motion.div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        width: 'max-content',
                    }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...images, ...images].map((img, idx) => (
                        <Box
                            key={idx}
                            flexShrink={0}
                            minW={{ base: "300px", md: "500px" }}
                            h={{ base: "200px", md: "350px" }}
                            borderRadius="25px"
                            overflow="hidden"
                        >
                            <Image
                                src={img}
                                alt={`Culture image ${idx}`}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                transition="transform 0.5s"
                                _hover={{ transform: "scale(1.05)" }}
                            />
                        </Box>
                    ))}
                </motion.div>
            </Box>
        </Box>
    );
}