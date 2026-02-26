'use client';

import { Box, Container, Heading, Text, Flex, Image, VStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TfiQuoteLeft } from 'react-icons/tfi';

const testimonials = [
    {
        quote: "Working at NextChainX has been an incredible journey. The culture of innovation and the focus on growth are unparalleled.",
        name: "James Wilson",
        role: "Senior Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "The team here is like a family. We support each other and push the boundaries of what's possible every day.",
        name: "Sarah Jenkins",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "I've never worked at a place that cares so much about its people. The perks are just the icing on the cake.",
        name: "David Chen",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "The collaborative environment and high standards driven by the leadership make every day a learning experience.",
        name: "Elena Rodriguez",
        role: "QA Lead",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
];

const MotionBox = motion(Box);

export default function TestimonialSlider() {
    return (
        <Box py={32} bg="white">
            <Container maxW="1400px">
                <VStack spacing={20} align="flex-start">
                    <Box maxW="900px">
                        <Flex align="center" gap={3} mb={8}>
                            <Box w="40px" h="2px" bg="red.600" />
                            <Text fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                                Testimonials
                            </Text>
                        </Flex>
                        <Heading fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} fontWeight="800" lineHeight="1.1">
                            Let’s see why our team members love NextChainX
                        </Heading>
                    </Box>

                    <Box w="100%" px={4}>
                        <Flex
                            as={motion.div}
                            drag="x"
                            dragConstraints={{ left: -600, right: 0 }}
                            gap={8}
                            cursor="grab"
                            _active={{ cursor: "grabbing" }}
                        >
                            {testimonials.map((t, idx) => (
                                <MotionBox
                                    key={idx}
                                    minW={{ base: "100%", md: "450px" }}
                                    p={10}
                                    bg="gray.50"
                                    borderRadius="3xl"
                                    position="relative"
                                    overflow="hidden"
                                >
                                    <Icon as={TfiQuoteLeft} boxSize={12} color="red.100" position="absolute" top={4} right={4} zIndex={0} />
                                    <VStack align="flex-start" spacing={6} position="relative" zIndex={1}>
                                        <Text fontSize="lg" color="gray.700" fontWeight="500" fontStyle="italic">
                                            "{t.quote}"
                                        </Text>
                                        <Flex align="center" gap={4}>
                                            <Image src={t.image} alt={t.name} boxSize={14} borderRadius="full" />
                                            <Box>
                                                <Text fontWeight="bold" color="black">{t.name}</Text>
                                                <Text fontSize="sm" color="gray.500">{t.role}</Text>
                                            </Box>
                                        </Flex>
                                    </VStack>
                                </MotionBox>
                            ))}
                        </Flex>
                        <Text fontSize="xs" color="gray.400" mt={8} textAlign="center">
                            ← Swipe to read more →
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
}
