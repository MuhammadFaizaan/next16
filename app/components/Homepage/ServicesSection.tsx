'use client';

import { Box, Container, Heading, SimpleGrid, Text, useColorModeValue, flexbox, Icon, Flex, Button } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { servicesData, ServiceCategory } from '@/app/lib/servicesData';
import { FiAnchor, FiLayers } from 'react-icons/fi';
import { AiOutlineRobot, AiOutlineGlobal, AiOutlineMobile } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const iconMap: { [key: string]: any } = {
    FiAnchor,
    AiOutlineRobot,
    AiOutlineGlobal,
    AiOutlineMobile,
    FiLayers
};

const ServiceCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
    const IconComponent = iconMap[category.icon] || AiOutlineGlobal;

    return (
        // @ts-ignore
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            bg="dark.400"
            _hover={{ transform: 'translateY(-8px)', borderColor: 'brand.red' }}
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="2xl"
            p={8}
            height="100%"
            display="flex"
            flexDirection="column"
            position="relative"
            role="group"
            // @ts-ignore
            transition="all 0.3s ease"
        >
            <Box
                p={4}
                bg="whiteAlpha.100"
                width="fit-content"
                borderRadius="xl"
                color="brand.red"
                mb={6}
                _groupHover={{ bg: 'brand.red', color: 'white' }}
                transition="all 0.3s ease"
            >
                {/* Use Box wrapper to avoid potential server-client serialization issues if any */}
                <Box as="span" display="flex" alignItems="center" justifyContent="center">
                    <Icon as={IconComponent} boxSize={8} />
                </Box>
            </Box>

            <Heading as="h3" size="lg" mb={4} color="white">
                {category.title}
            </Heading>

            <Text color="whiteAlpha.600" mb={8} flex="1">
                {category.description}
            </Text>

            <Link href={`/services/${category.slug}`}>
                <Flex
                    align="center"
                    color="white"
                    fontWeight="bold"
                    _groupHover={{ color: "brand.red" }}
                    transition="color 0.3s"
                >
                    Explore Services
                    <Box as="span" ml={2} display="inline-flex" alignItems="center">
                        <BsArrowRight />
                    </Box>
                </Flex>
            </Link>
        </MotionBox>
    );
};

export default function ServicesSection() {
    return (
        <Box bg="black" py={{ base: 24, md: 32 }} position="relative">
            {/* Background Gradients/Glows could be added here */}
            <Container maxW="1400px">
                <Box mb={20} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        display="inline-block"
                    >
                        <Text
                            color="brand.red"
                            fontWeight="bold"
                            letterSpacing="widest"
                            textTransform="uppercase"
                            mb={4}
                            fontSize="sm"
                        >
                            What We Do
                        </Text>
                    </MotionBox>
                    <MotionHeading
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        as="h2"
                        fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                        fontWeight="800"
                        color="white"
                        mb={6}
                    >
                        High-impact services for <br />
                        <Box as="span" color="whiteAlpha.500">modern businesses</Box>
                    </MotionHeading>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    {servicesData.map((category, index) => (
                        <ServiceCard key={category.id} category={category} index={index} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
