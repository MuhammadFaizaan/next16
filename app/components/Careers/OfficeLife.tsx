'use client';

import { Box, Container, Heading, Text, SimpleGrid, Image, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

const gallery = [
    'https://images.unsplash.com/photo-1549692482-0199464bc0ce?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560439514-4e9645009904?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
];

const MotionBox = motion(Box);

export default function OfficeLife() {
    return (
        <Box py={32} bg="white">
            <Container maxW="1400px">
                <VStack spacing={16} align="flex-start">
                    <Box>
                        <Flex align="center" gap={3} mb={6}>
                            <Box w="40px" h="2px" bg="red.600" />
                            <Text fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                                Inside the office
                            </Text>
                        </Flex>
                        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800">
                            Live from our office
                        </Heading>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
                        {gallery.map((img, idx) => (
                            <MotionBox
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                borderRadius="3xl"
                                overflow="hidden"
                                position="relative"
                                role="group"
                                cursor="pointer"
                                h="400px"
                            >
                                <Image
                                    src={img}
                                    alt={`Office life ${idx}`}
                                    w="100%"
                                    h="100%"
                                    objectFit="cover"
                                    transition="transform 0.8s"
                                    _groupHover={{ transform: "scale(1.1)" }}
                                />
                                <Box
                                    position="absolute"
                                    inset={0}
                                    bg="blackAlpha.300"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    opacity={0}
                                    transition="opacity 0.3s"
                                    _groupHover={{ opacity: 1 }}
                                >
                                    <Icon as={FiPlay} boxSize={16} color="whiteAlpha.800" />
                                </Box>
                                <Box
                                    position="absolute"
                                    inset={0}
                                    bgGradient="linear(to-t, blackAlpha.600, transparent)"
                                />
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
}

// Fixed import for VStack which was missing in the snippet above
import { VStack } from '@chakra-ui/react';
