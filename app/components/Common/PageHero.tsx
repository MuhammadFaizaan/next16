'use client';

import { Box, Container, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function PageHero({
    title,
    subtitle,
    image,
    ctaText = "GET IN TOUCH",
    ctaHref = "/contact"
}: PageHeroProps) {

    // Shared content component to ensure perfect alignment between layers
    const HeroContent = ({ isTopLayer }: { isTopLayer: boolean }) => (
        <Container maxW="1400px" position="relative" h="100%">
            <Flex direction="column" align="flex-start" pt={{ base: 24, md: 32 }} pb={20}>
                {subtitle && (
                    <MotionBox
                        initial={isTopLayer ? { opacity: 0, x: -20 } : undefined}
                        animate={isTopLayer ? { opacity: 1, x: 0 } : undefined}
                        transition={{ duration: 0.6 }}
                        mb={{ base: 12, md: '135px' }}
                    >
                        <Text
                            color={isTopLayer ? "whiteAlpha.700" : "transparent"} // Hide in bottom layer if needed, or keep for spacing
                            fontSize="xs"
                            fontWeight="bold"
                            letterSpacing="0.2em"
                            textTransform="uppercase"
                        >
                            {subtitle}
                        </Text>
                    </MotionBox>
                )}

                <MotionHeading
                    as="h1"
                    fontSize={{ base: "5xl", md: "8xl", lg: "9xl" }}
                    fontWeight="500"
                    lineHeight="0.9"
                    letterSpacing="-0.03em"
                    color={isTopLayer ? "white" : "black"}
                    initial={isTopLayer ? { opacity: 0, y: 30 } : undefined}
                    animate={isTopLayer ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    maxW="5xl"
                >
                    {title}
                </MotionHeading>

                <MotionBox
                    initial={isTopLayer ? { opacity: 0, y: 20 } : undefined}
                    animate={isTopLayer ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    mt={{ base: 16, md: 24 }}
                >
                    <Link href={ctaHref}>
                        <Button
                            bg={isTopLayer ? "transparent" : "#2D3748"}
                            color={isTopLayer ? "transparent" : "white"} // Only visible on bottom
                            _hover={{ bg: "#1A202C", transform: "translateY(-2px)" }}
                            px={12}
                            h={14}
                            fontSize="xs"
                            fontWeight="bold"
                            letterSpacing="0.1em"
                            transition="all 0.3s"
                            borderRadius="sm"
                            textTransform="uppercase"
                            visibility={isTopLayer ? "hidden" : "visible"}
                        >
                            {ctaText}
                        </Button>
                    </Link>
                </MotionBox>
            </Flex>
        </Container>
    );

    return (
        <Box position="relative" bg="white" overflow="hidden" minH="100vh">
            {/* Layer 1: BOTTOM (Black text on White background) */}
            <Box position="absolute" inset={0} zIndex={1} bg="white">
                <HeroContent isTopLayer={false} />
            </Box>

            {/* Layer 2: TOP (White text on Image background, CLIPPED) */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h={{ base: "45vh", md: "50vh" }}
                zIndex={2}
                overflow="hidden"
            >
                {/* Background Image Container */}
                <Box position="absolute" inset={0} bg="#050505">
                    <Image
                        src={image}
                        alt=""
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        objectPosition="center"
                        opacity={0.6}
                    />
                    <Box position="absolute" inset={0} bg="rgba(0,0,0,0.4)" />
                </Box>

                {/* Same content as Layer 1, but with white text */}
                <Box position="absolute" inset={0}>
                    <HeroContent isTopLayer={true} />
                </Box>
            </Box>
        </Box>
    );
}
