'use client';

import { Box, Container, Heading, Text, Stack, useColorModeValue, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const MotionBox = motion(Box);

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    const bgColor = useColorModeValue('white', '#050505');
    const textColor = useColorModeValue('black', 'white');
    const mutedColor = useColorModeValue('gray.600', 'whiteAlpha.600');
    const borderColor = useColorModeValue('gray.100', 'whiteAlpha.100');

    return (
        <Box bg={bgColor} minH="100vh" pb={24}>
            {/* Hero Section */}
            <Box
                pt={{ base: "140px", md: "180px" }}
                pb={{ base: 12, md: 24 }}
                position="relative"
                overflow="hidden"
                bg={useColorModeValue('gray.50', 'whiteAlpha.50')}
                borderBottom="1px solid"
                borderColor={borderColor}
            >
                {/* Abstract background elements */}
                <Box
                    position="absolute"
                    top="-10%"
                    right="-5%"
                    w="400px"
                    h="400px"
                    bg="red.600"
                    opacity="0.05"
                    filter="blur(100px)"
                    borderRadius="full"
                />
                <Box
                    position="absolute"
                    bottom="-10%"
                    left="-5%"
                    w="300px"
                    h="300px"
                    bg="blue.600"
                    opacity="0.05"
                    filter="blur(80px)"
                    borderRadius="full"
                />

                <Container maxW="1200px" position="relative" zIndex={1}>
                    <Stack spacing={6}>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Breadcrumb fontSize="sm" color={mutedColor} mb={6}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink href="#" fontWeight="600" color="red.600">{title}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>

                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", md: "7xl" }}
                                fontWeight="800"
                                color={textColor}
                                letterSpacing="-0.04em"
                                lineHeight="1"
                                mb={8}
                            >
                                {title}
                            </Heading>

                            <Flex align="center" gap={4}>
                                <Box w="24px" h="2px" bg="red.600" />
                                <Text fontSize="sm" fontWeight="700" color={mutedColor} textTransform="uppercase" letterSpacing="0.2em">
                                    Revision Date: {lastUpdated}
                                </Text>
                            </Flex>
                        </MotionBox>
                    </Stack>
                </Container>
            </Box>

            <Container maxW="1200px" mt={-12}>
                {/* Content Section */}
                <Box
                    p={{ base: 8, md: 16 }}
                    bg={useColorModeValue('white', '#0a0a0a')}
                    borderRadius="4xl"
                    border="1px solid"
                    borderColor={borderColor}
                    className="legal-content"
                    boxShadow="2xl"
                    position="relative"
                    zIndex={2}
                >
                    <Stack spacing={8}>
                        {children}
                    </Stack>
                </Box>
            </Container>

            <style jsx global>{`
        .legal-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: ${textColor};
        }
        .legal-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: ${textColor};
        }
        .legal-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: ${mutedColor};
          margin-bottom: 1.25rem;
        }
        .legal-content ul, .legal-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
          color: ${mutedColor};
        }
        .legal-content li {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 0.5rem;
        }
      `}</style>
        </Box>
    );
}
