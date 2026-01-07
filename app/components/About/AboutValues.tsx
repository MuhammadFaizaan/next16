'use client';

import { Box, Container, Heading, Text, SimpleGrid, Stack, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiZap, FiAward } from 'react-icons/fi';

const values = [
    {
        icon: FiUsers,
        title: 'People First',
        description: 'We believe that great technology is built by great people. We foster a culture of collaboration and respect.'
    },
    {
        icon: FiTarget,
        title: 'Impact Driven',
        description: 'We focus on delivering tangible results that drive real business value for our clients.'
    },
    {
        icon: FiZap,
        title: 'Innovation',
        description: 'We constantly push the boundaries of what is possible with emerging technologies.'
    },
    {
        icon: FiAward,
        title: 'Excellence',
        description: 'We are committed to the highest standards of quality in everything we do.'
    }
];

const ValueCard = ({ icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => {
    const cardBg = useColorModeValue('gray.50', 'whiteAlpha.50');
    const borderColor = useColorModeValue('gray.100', 'whiteAlpha.100');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Box
                p={8}
                bg={cardBg}
                borderRadius="2xl"
                border="1px solid"
                borderColor={borderColor}
                h="100%"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-5px)", boxShadow: "xl", borderColor: "red.500" }}
            >
                <Stack spacing={4}>
                    <Flex
                        w={12}
                        h={12}
                        align="center"
                        justify="center"
                        borderRadius="xl"
                        bg="red.600"
                        color="white"
                    >
                        <Icon as={icon} boxSize={6} />
                    </Flex>
                    <Heading fontSize="xl" fontWeight="700">
                        {title}
                    </Heading>
                    <Text color="gray.500" lineHeight="1.6">
                        {description}
                    </Text>
                </Stack>
            </Box>
        </motion.div>
    );
};

export default function AboutValues() {
    return (
        <Box py={{ base: 12, md: 24 }} position="relative" overflow="hidden">
            <Container maxW="1200px">
                <Stack spacing={16}>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Text color="red.600" fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" mb={2}>
                                Our Culture
                            </Text>
                            <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800">
                                Driven by Values
                            </Heading>
                        </motion.div>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                        {values.map((value, index) => (
                            <ValueCard key={index} {...value} index={index} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}
