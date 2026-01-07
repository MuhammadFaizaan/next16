'use client';

import { Box, Container, Heading, Text, SimpleGrid, Stack, Image, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const awards = [
    { name: 'Best Blockchain Solution 2024', issuer: 'Tech Innovation Awards', image: '/images/award-1.png' },
    { name: 'AI Excellence Award', issuer: 'Global AI Summit', image: '/images/award-2.png' },
    { name: 'Top Web3 Developer', issuer: 'Clutch', image: '/images/award-3.png' },
    { name: 'Innovation in FinTech', issuer: 'Forbes', image: '/images/award-4.png' },
    { name: 'Sustainable Tech Leader', issuer: 'Green Future Index', image: '/images/award-5.png' },
    { name: 'Best Workplace for Devs', issuer: 'Glassdoor', image: '/images/award-6.png' },
];

const AwardItem = ({ name, issuer, index }: { name: string, issuer: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Box
                p={8}
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
                borderRadius="xl"
                textAlign="center"
                transition="all 0.3s"
                _hover={{ borderColor: 'red.600', bg: useColorModeValue('gray.50', 'whiteAlpha.50') }}
            >
                <Stack spacing={3}>
                    <Box h="60px" w="60px" bg="gray.200" borderRadius="full" mx="auto" mb={2} /> {/* Placeholder for award logo */}
                    <Heading fontSize="lg" fontWeight="700">{name}</Heading>
                    <Text fontSize="sm" color="gray.500">{issuer}</Text>
                </Stack>
            </Box>
        </motion.div>
    )
}

export default function AboutAwards() {
    return (
        <Box py={{ base: 12, md: 24 }} borderTop="1px solid" borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}>
            <Container maxW="1200px">
                <Stack spacing={12}>
                    <Box textAlign="center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Text color="red.600" fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" mb={2}>
                                Recognition
                            </Text>
                            <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800">
                                Global Standards & Recognition
                            </Heading>
                        </motion.div>
                    </Box>

                    <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6}>
                        {awards.map((award, index) => (
                            <AwardItem key={index} {...award} index={index} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}
