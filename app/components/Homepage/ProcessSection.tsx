'use client';

import { Box, Container, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const processes = [
    {
        number: '01',
        title: 'Business Analysis',
        description: "Understanding PartyShark's vision and the needs of young partygoers"
    },
    {
        number: '02',
        title: 'Market Sizing',
        description: 'Assessing potential growth opportunities in the social event management sector'
    },
    {
        number: '03',
        title: 'Technology Selection',
        description: 'Utilizing React Native for a seamless cross-platform application experience'
    },
    {
        number: '04',
        title: 'Design & Development',
        description: 'Building an engaging and intuitive platform for party management and discovery'
    },
    {
        number: '05',
        title: 'Implementation & Testing',
        description: 'Deploying the app and rigorously testing for user engagement and functionality'
    }
];

export default function ProcessSection() {
    // Assuming the design uses light theme by default as per image
    // but allowing for dark theme adaptation if project prefers.
    const bgColor = useColorModeValue('white', '#0a0a0a');
    const cardBg = useColorModeValue('#F3F4F6', 'whiteAlpha.50');
    const textColor = useColorModeValue('black', 'white');
    const descColor = useColorModeValue('gray.600', 'whiteAlpha.700');

    return (
        <Box
            as="section"
            bg={bgColor}
            py={{ base: 12, md: 24 }}
            minH="100vh"
            position="relative"
        >
            <Container maxW="1400px" h="100%">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    gap={{ base: 12, md: 20 }}
                    align="flex-start"
                >
                    {/* Left Side: Sticky Heading */}
                    <Box
                        flex={{ base: 'none', md: '1' }}
                        position={{ base: 'relative', md: 'sticky' }}
                        top={{ base: '20px', md: '120px' }}
                        h={{ md: 'fit-content' }}
                        zIndex={2}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
                            fontWeight="700"
                            color={textColor}
                            lineHeight="1.1"
                            letterSpacing="-0.02em"
                        >
                            The process
                        </Heading>
                    </Box>

                    {/* Right Side: Scrollable Cards */}
                    <Stack
                        flex={{ base: 'none', md: '1.2' }}
                        spacing={{ base: 6, md: 8 }}
                        w="100%"
                    >
                        {processes.map((process, index) => (
                            <MotionBox
                                key={index}
                                p={{ base: 8, md: 10, lg: 12 }}
                                bg={cardBg}
                                borderRadius="3xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <Stack spacing={8}>
                                    <Text
                                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                        fontWeight="700"
                                        color={textColor}
                                        lineHeight="1"
                                    >
                                        {process.number}
                                    </Text>
                                    <Stack spacing={4}>
                                        <Heading
                                            as="h3"
                                            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                            fontWeight="700"
                                            color={textColor}
                                        >
                                            {process.title}
                                        </Heading>
                                        <Text
                                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
                                            color={descColor}
                                            lineHeight="1.6"
                                            maxW="500px"
                                            fontWeight="400"
                                        >
                                            {process.description}
                                        </Text>
                                    </Stack>
                                </Stack>
                            </MotionBox>
                        ))}
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
}
