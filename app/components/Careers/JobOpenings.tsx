'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Flex, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const positions = [
    {
        title: 'Senior Frontend Engineer',
        dept: 'Engineering',
        type: 'Remote / Full-time',
    },
    {
        title: 'Backend Developer (Node.js)',
        dept: 'Engineering',
        type: 'Remote / Full-time',
    },
    {
        title: 'UI/UX Designer',
        dept: 'Design',
        type: 'Hybrid / Full-time',
    },
    {
        title: 'DevOps Specialist',
        dept: 'Operations',
        type: 'Remote / Full-time',
    },
    {
        title: 'Project Manager',
        dept: 'Management',
        type: 'Remote / Full-time',
    },
    {
        title: 'Quality Assurance',
        dept: 'Engineering',
        type: 'Remote / Full-time',
    },
];

const MotionBox = motion(Box);

export default function JobOpenings() {
    return (
        <Box py={32} bg="black">
            <Container maxW="1400px">
                <VStack spacing={16} align="center" textAlign="center">
                    <Box>
                        <Heading fontSize={{ base: "4xl", md: "5xl" }} fontWeight="800" color="white" mb={4}>
                            Your dream career begins here!
                        </Heading>
                        <Text fontSize="lg" color="whiteAlpha.700" maxW="700px" mx="auto">
                            Check our current openings and find your place in the future of technology.
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                        {positions.map((pos, idx) => (
                            // @ts-ignore
                            <MotionBox
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                p={8}
                                bg="whiteAlpha.50"
                                borderRadius="2xl"
                                border="1px solid"
                                borderColor="whiteAlpha.100"
                                textAlign="left"
                                role="group"
                                cursor="pointer"
                                // @ts-ignore
                                transition="all 0.3s"
                                _hover={{ bg: "transparent", borderColor: "red.500" }}
                            >
                                <VStack align="flex-start" spacing={4}>
                                    <HStack spacing={2}>
                                        <Text fontSize="xs" fontWeight="bold" color="red.600" textTransform="uppercase" letterSpacing="widest">
                                            {pos.dept}
                                        </Text>
                                        <Box w="4px" h="4px" borderRadius="full" bg="whiteAlpha.300" />
                                        <Text fontSize="xs" fontWeight="bold" color="whiteAlpha.500">
                                            {pos.type}
                                        </Text>
                                    </HStack>
                                    <Heading fontSize="xl" fontWeight="700" color="white">
                                        {pos.title}
                                    </Heading>
                                    <Button
                                        variant="link"
                                        color="red.500"
                                        fontSize="sm"
                                        fontWeight="bold"
                                        _groupHover={{ color: "red.600" }}
                                    >
                                        Apply Now →
                                    </Button>
                                </VStack>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
}
