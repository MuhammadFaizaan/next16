'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiFileText, FiUserCheck, FiGift } from 'react-icons/fi';

const steps = [
    {
        icon: FiFileText,
        title: 'Application',
        description: 'Submit your CV and portfolio. Our hiring team will review your background and experience.',
    },
    {
        icon: FiUserCheck,
        title: 'Interview',
        description: 'Meet the team and discuss your skills, values, and how you can contribute to our vision.',
    },
    {
        icon: FiGift,
        title: 'Decision & Offer',
        description: 'If it\'s a match, we will extend an offer and welcome you to the NextChainX family.',
    },
];

const MotionBox = motion(Box);

export default function HiringProcess() {
    return (
        <Box bg="black" py={32} color="white" position="relative">
            <Container maxW="1400px">
                <VStack spacing={16} align="flex-start">
                    <Box maxW="800px">
                        <Flex align="center" gap={3} mb={6}>
                            <Box w="40px" h="2px" bg="red.600" />
                            <Text fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                                How we hire
                            </Text>
                        </Flex>
                        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800">
                            Our <Box as="span" color="red.600">hiring process</Box>
                        </Heading>
                        <Text fontSize="lg" color="whiteAlpha.700" mt={6}>
                            We look for more than just technical skills. We want to find people who share our passion for excellence and innovation.
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
                        {steps.map((step, idx) => (
                            // @ts-ignore
                            <MotionBox
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                bg="whiteAlpha.50"
                                p={10}
                                borderRadius="3xl"
                                border="1px solid"
                                borderColor="whiteAlpha.100"
                                backdropFilter="blur(10px)"
                                // @ts-ignore
                                transition="all 0.3s"
                                _hover={{ borderColor: "red.500", transform: "translateY(-10px)" }}
                            >
                                <Flex
                                    boxSize={16}
                                    bg="red.600"
                                    borderRadius="2xl"
                                    align="center"
                                    justify="center"
                                    mb={8}
                                    boxShadow="0 10px 20px rgba(220, 38, 38, 0.3)"
                                >
                                    <Icon as={step.icon} boxSize={8} color="white" />
                                </Flex>
                                <Heading fontSize="2xl" fontWeight="700" mb={4}>
                                    {step.title}
                                </Heading>
                                <Text color="whiteAlpha.600" lineHeight="1.7">
                                    {step.description}
                                </Text>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
}
