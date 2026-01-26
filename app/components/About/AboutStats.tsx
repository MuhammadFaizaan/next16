'use client';

import { Box, Container, Heading, Text, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { value: '1,000+', label: 'Projects Completed' },
    { value: '300+', label: 'Happy Customers' },
    { value: '50+', label: 'Team Members' },
    { value: '10+', label: 'Years Experience' },
];

const StatItem = ({ value, label, index }: { value: string, label: string, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <Box ref={ref} position="relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Stack spacing={2}>
                    <Heading
                        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                        fontWeight="800"
                        color={useColorModeValue('black', 'white')}
                    >
                        {value}
                    </Heading>
                    <Text
                        fontSize="md"
                        fontWeight="600"
                        color={useColorModeValue('gray.600', 'whiteAlpha.600')}
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                    >
                        {label}
                    </Text>
                </Stack>
            </motion.div>
        </Box>
    );
};

export default function AboutStats() {
    return (
        <Box py={{ base: 12, md: 24 }} bg={useColorModeValue('white', '#050505')}>
            <Container maxW="1400px">
                <Stack spacing={16}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight="700"
                            maxW="900px"
                            lineHeight="1.4"
                        >
                            "We build technology that empowers businesses to scale, innovate, and lead in a digital-first world."
                        </Heading>
                    </motion.div>

                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 8, md: 12 }}>
                        {stats.map((stat, index) => (
                            <StatItem key={index} {...stat} index={index} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}
