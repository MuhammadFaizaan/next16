'use client';

import { Box, Container, Heading, SimpleGrid, Text, Flex, Button, Icon } from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import { industriesData } from '@/app/lib/industriesData';

export default function IndustryListClient() {
    return (
        <>
            <Header />
            <Box as="main" bg="black" minH="100vh">
                {/* Hero Section */}
                <Box
                    position="relative"
                    h="60vh"
                    minH="500px"
                    display="flex"
                    alignItems="center"
                    overflow="hidden"
                >
                    {/* Abstract Background */}
                    <Box position="absolute" inset="0" zIndex="0">
                        <Box
                            position="absolute"
                            top="-50%"
                            right="-20%"
                            w="80%"
                            h="200%"
                            bg="radial-gradient(circle, rgba(255, 19, 19, 0.15) 0%, rgba(0,0,0,0) 70%)"
                            filter="blur(60px)"
                        />
                        <Box
                            position="absolute"
                            bottom="-20%"
                            left="-10%"
                            w="60%"
                            h="150%"
                            bg="radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 60%)"
                            filter="blur(80px)"
                        />
                    </Box>

                    <Container maxW="1400px" position="relative" zIndex="1">
                        <Text
                            color="brand.red"
                            fontWeight="bold"
                            letterSpacing="widest"
                            textTransform="uppercase"
                            mb={4}
                            fontSize="sm"
                        >
                            Industries We Serve
                        </Text>
                        <Heading
                            as="h1"
                            fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
                            fontWeight="800"
                            color="white"
                            mb={6}
                            lineHeight="1"
                            letterSpacing="tight"
                        >
                            Transforming <br />
                            <Box as="span" color="brand.red">Every Sector</Box>
                        </Heading>
                        <Text
                            fontSize={{ base: 'xl', md: '2xl' }}
                            color="whiteAlpha.700"
                            maxW="3xl"
                            lineHeight="1.6"
                        >
                            We bring digital innovation to diverse industries, tailoring our solutions to meet unique challenges and unlock new opportunities for growth.
                        </Text>
                    </Container>
                </Box>

                {/* Industries Grid */}
                <Container maxW="1400px" pb={32}>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                        {industriesData.map((industry, index) => {
                            // Dynamically get the icon component
                            // @ts-ignore
                            const IconComponent = FaIcons[industry.icon] || FaIcons.FaIndustry;

                            return (
                                <Box
                                    key={industry.id}
                                    bg="whiteAlpha.50"
                                    border="1px solid"
                                    borderColor="whiteAlpha.100"
                                    borderRadius="2xl"
                                    overflow="hidden"
                                    transition="all 0.3s ease"
                                    _hover={{
                                        borderColor: 'brand.red',
                                        transform: 'translateY(-8px)',
                                        bg: 'whiteAlpha.100'
                                    }}
                                    position="relative"
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <Box p={8} flex="1">
                                        <Flex align="center" mb={6}>
                                            <Box
                                                p={3}
                                                bg="brand.red"
                                                color="white"
                                                borderRadius="lg"
                                                mr={4}
                                            >
                                                <Icon as={IconComponent} boxSize={6} />
                                            </Box>
                                            <Heading as="h3" size="md" color="white">
                                                {industry.title}
                                            </Heading>
                                        </Flex>

                                        <Text color="whiteAlpha.700" mb={6} lineHeight="1.6">
                                            {industry.shortDescription}
                                        </Text>

                                        <Link href={`/industries/${industry.slug}`}>
                                            <Flex
                                                align="center"
                                                color="brand.red"
                                                fontWeight="bold"
                                                _hover={{ color: 'red.400' }}
                                            >
                                                <Text mr={2}>Explore Solutions</Text>
                                                <BsArrowRight />
                                            </Flex>
                                        </Link>
                                    </Box>
                                </Box>
                            );
                        })}
                    </SimpleGrid>
                </Container>

                {/* CTA Section */}
                <Box py={20} bg="gray.900" borderTop="1px solid" borderColor="whiteAlpha.100">
                    <Container maxW="container.xl" textAlign="center">
                        <Heading as="h2" size="2xl" color="white" mb={6}>
                            Ready to Transform Your Industry?
                        </Heading>
                        <Text fontSize="xl" color="whiteAlpha.700" mb={10} maxW="2xl" mx="auto">
                            Let's discuss how our technology can solve your specific industry challenges and drive your business forward.
                        </Text>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                bg="brand.red"
                                color="white"
                                px={10}
                                h={14}
                                fontSize="lg"
                                _hover={{ bg: 'red.600' }}
                                rightIcon={<BsArrowRight />}
                            >
                                Get in Touch
                            </Button>
                        </Link>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
