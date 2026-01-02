'use client';

import { Box, Container, Grid, GridItem, Heading, Text, VStack, Icon, Flex, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const locations = [
    {
        country: "USA",
        city: "New York",
        address: "123 Business Avenue, Manhattan, New York, NY 10001",
        email: "us.info@nextchainx.io",
        phone: "+1 929-624-8820",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
    },
    {
        country: "Pakistan",
        city: "Islamabad",
        address: "Plot 14, Silver Square, G-11 Markaz, Islamabad 44000",
        email: "pk.info@nextchainx.io",
        phone: "+92 300-1234567",
        image: "https://images.unsplash.com/photo-1544411047-c491e34a24e0?auto=format&fit=crop&q=80&w=800",
    }
];

export default function LocationsSection() {
    return (
        <Box py={{ base: 20, md: 32 }} bg="white">
            <Container maxW="container.xl">
                <VStack spacing={12} align="center">
                    <VStack spacing={4} textAlign="center">
                        <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800">
                            Our Global Presence
                        </Heading>
                        <Text color="gray.600" fontSize="lg" maxW="600px">
                            Strategic locations to serve our clients better across different time zones.
                        </Text>
                    </VStack>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} w="100%">
                        {locations.map((loc, idx) => (
                            <GridItem key={idx}>
                                <Box
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    bg="gray.50"
                                    borderRadius="3xl"
                                    overflow="hidden"
                                    boxShadow="sm"
                                    _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
                                    transition="all 0.3s ease"
                                >
                                    <Box h="240px" position="relative" overflow="hidden">
                                        <Box
                                            as="img"
                                            src={loc.image}
                                            alt={`${loc.city} Office`}
                                            w="100%"
                                            h="100%"
                                            objectFit="cover"
                                            transition="transform 0.5s ease"
                                            _groupHover={{ transform: "scale(1.1)" }}
                                        />
                                        <Box
                                            position="absolute"
                                            top={6}
                                            left={6}
                                            bg="white"
                                            px={4}
                                            py={1}
                                            borderRadius="full"
                                            fontSize="xs"
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            letterSpacing="wider"
                                            color="brand-red"
                                            boxShadow="md"
                                        >
                                            {loc.country}
                                        </Box>
                                    </Box>

                                    <VStack p={8} align="flex-start" spacing={6}>
                                        <Heading as="h3" fontSize="2xl" fontWeight="700">
                                            {loc.city} Office
                                        </Heading>

                                        <VStack align="flex-start" spacing={4} w="100%">
                                            <HStack spacing={4} align="flex-start">
                                                <Icon as={FiMapPin} color="brand-red" mt={1} />
                                                <Text color="gray.600" fontSize="md">{loc.address}</Text>
                                            </HStack>
                                            <HStack spacing={4}>
                                                <Icon as={FiMail} color="brand-red" />
                                                <Text color="gray.600" fontSize="md">{loc.email}</Text>
                                            </HStack>
                                            <HStack spacing={4}>
                                                <Icon as={FiPhone} color="brand-red" />
                                                <Text color="gray.600" fontSize="md">{loc.phone}</Text>
                                            </HStack>
                                        </VStack>
                                    </VStack>
                                </Box>
                            </GridItem>
                        ))}
                    </Grid>
                </VStack>
            </Container>
        </Box>
    );
}
