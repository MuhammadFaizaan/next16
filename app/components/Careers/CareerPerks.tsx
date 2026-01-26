'use client';

import { Box, Container, Heading, Text, VStack, Flex, Stack, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const perks = [
    {
        title: 'Work remotely',
        description: 'Enjoy the freedom to work from anywhere in the world. We focus on results, not desk time.',
    },
    {
        title: 'Modern equipment',
        description: 'Get the latest tech gadgets and high-performance hardware to do your best work.',
    },
    {
        title: 'Learning & growth',
        description: 'Access to professional courses, certifications, and internal workshops to keep your skills sharp.',
    },
    {
        title: 'Health insurance',
        description: 'Comprehensive health coverage for you and your family, because well-being comes first.',
    },
    {
        title: 'Team events',
        description: 'Regular meet-ups, retreats, and social events to build lasting bonds with your teammates.',
    },
    {
        title: 'Paid vacation',
        description: 'Generous time off to recharge and enjoy life outside of work.',
    },
];


const MotionBox = motion(Box);
export default function CareerPerks() {
    return (
        <Box py={32} bg="gray.50">
            <Container maxW="1400px">
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={20}>
                    <Box>
                        <Box position="sticky" top="150px">
                            <Flex align="center" gap={3} mb={6}>
                                <Box w="40px" h="2px" bg="red.600" />
                                <Text fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" color="red.600">
                                    Benefits
                                </Text>
                            </Flex>
                            <Heading fontSize={{ base: "4xl", md: "5xl" }} fontWeight="800" mb={8}>
                                Our perks and <br />
                                <Box as="span" color="red.600">benefits</Box>
                            </Heading>
                            <Text fontSize="lg" color="gray.600" maxW="450px">
                                We've designed our benefits to support your professional growth and personal well-being.
                            </Text>
                        </Box>
                    </Box>

                    <VStack spacing={8} align="stretch">
                        {perks.map((perk, idx) => (
                            // @ts-ignore
                            <MotionBox
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                p={10}
                                bg="white"
                                borderRadius="3xl"
                                border="1px solid"
                                borderColor="gray.100"
                                shadow="sm"
                                // @ts-ignore
                                transition="all 0.3s"
                                _hover={{ shadow: "xl", borderColor: "red.500", transform: "translateY(-5px)" }}
                            >
                                <Heading fontSize="2xl" fontWeight="700" mb={4}>
                                    {perk.title}
                                </Heading>
                                <Text color="gray.600" lineHeight="1.7">
                                    {perk.description}
                                </Text>
                            </MotionBox>
                        ))}
                    </VStack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
