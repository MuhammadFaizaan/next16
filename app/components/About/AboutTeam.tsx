'use client';

import { Box, Container, Heading, Text, SimpleGrid, Stack, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const team = [
    {
        name: 'Sarah Anderson',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop'
    },
    {
        name: 'Michael Chen',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop'
    },
    {
        name: 'Jessica Williams',
        role: 'Head of Product',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop'
    },
    {
        name: 'David Miller',
        role: 'Lead Blockchain Dev',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop'
    },
    {
        name: 'Emily Davis',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?q=80&w=2670&auto=format&fit=crop'
    },
    {
        name: 'James Wilson',
        role: 'AI Research Lead',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop'
    },
    {
        name: 'Olivia Martinez',
        role: 'Head of Marketing',
        image: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=2550&auto=format&fit=crop'
    },
    {
        name: 'Robert Taylor',
        role: 'Operations Manager',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop'
    }
];

const TeamCard = ({ name, role, image, index }: { name: string, role: string, image: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Box position="relative" className='group' role="group">
                <Box
                    borderRadius="2xl"
                    overflow="hidden"
                    position="relative"
                    mb={4}
                    boxShadow="lg"
                >
                    <Image
                        src={image}
                        alt={name}
                        w="100%"
                        h="320px"
                        objectFit="cover"
                        transition="transform 0.4s ease"
                        _groupHover={{ transform: "scale(1.05)" }}
                        filter="grayscale(100%)"
                        _hover={{ filter: "grayscale(0%)" }}
                    />
                    <Box
                        position="absolute"
                        bottom="-50px"
                        left={0}
                        right={0}
                        p={4}
                        bg="whiteAlpha.900"
                        backdropFilter="blur(10px)"
                        transition="all 0.3s"
                        opacity={0}
                        _groupHover={{ bottom: 0, opacity: 1 }}
                        display="flex"
                        justifyContent="center"
                        gap={4}
                    >
                        <Box as="a" href="#" color="black" _hover={{ color: "red.600" }}><FaLinkedin size={20} /></Box>
                        <Box as="a" href="#" color="black" _hover={{ color: "red.600" }}><FaTwitter size={20} /></Box>
                    </Box>
                </Box>
                <Stack spacing={1}>
                    <Heading fontSize="xl" fontWeight="700">{name}</Heading>
                    <Text color="red.600" fontSize="sm" fontWeight="600">{role}</Text>
                </Stack>
            </Box>
        </motion.div>
    );
};

export default function AboutTeam() {
    return (
        <Box py={{ base: 12, md: 24 }}>
            <Container maxW="1200px">
                <Stack spacing={16}>
                    <Box textAlign="center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Text color="red.600" fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" mb={2}>
                                Leadership
                            </Text>
                            <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" maxW="800px" mx="auto">
                                Meet the minds behind the machine.
                            </Heading>
                        </motion.div>
                    </Box>

                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 8, lg: 10 }}>
                        {team.map((member, index) => (
                            <TeamCard key={index} {...member} index={index} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}
