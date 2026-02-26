'use client';

import { Box, Container, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

interface PageHeroProps {
    title: string;
    subtitle?: string;
    media: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function PageHero({
    title,
    subtitle,
    media,
    ctaText = "GET IN TOUCH",
    ctaHref = "/contact"
}: PageHeroProps) {
    const isVideo = /\.(mp4|webm|ogg)$/i.test(media);

    const HeroContent = ({ isTopLayer }: { isTopLayer: boolean }) => (
        <Container maxW="1400px" position="relative" h="100%">
            <Flex
                direction="column"
                justify="center"
                h="100%"
                pt={{ base: 20, md: 0 }}
                textAlign="left"
            >
                {subtitle && (
                    <MotionBox
                        initial={isTopLayer ? { opacity: 0, x: -20 } : undefined}
                        animate={isTopLayer ? { opacity: 1, x: 0 } : undefined}
                        transition={{ duration: 0.6 }}
                        mb={8}
                    >
                        <Text
                            color={isTopLayer ? "whiteAlpha.700" : "blackAlpha.500"}
                            fontSize={{ base: "xs", md: "sm" }}
                            fontWeight="900"
                            letterSpacing="0.3em"
                            textTransform="uppercase"
                        >
                            {subtitle}
                        </Text>
                    </MotionBox>
                )}

                <MotionHeading
                    as="h1"
                    fontSize={{ base: "4xl", sm: "5xl", md: "7xl", lg: "9xl" }}
                    fontWeight="900"
                    lineHeight="0.95"
                    letterSpacing="-0.04em"
                    color={isTopLayer ? "white" : "black"}
                    initial={isTopLayer ? { opacity: 0, y: 30 } : undefined}
                    animate={isTopLayer ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    maxW="7xl"
                >
                    {title}
                </MotionHeading>

                <MotionBox
                    initial={isTopLayer ? { opacity: 0, y: 20 } : undefined}
                    animate={isTopLayer ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    mt={8}
                >
                    <Link href={ctaHref}>
                        <Button
                            bg={isTopLayer ? "transparent" : "red.600"}
                            color={isTopLayer ? "transparent" : "white"}
                            _hover={{
                                bg: isTopLayer ? "transparent" : "black",
                                transform: "translateY(-5px)",
                                shadow: "2xl"
                            }}
                            px={12}
                            h={16}
                            fontSize="sm"
                            fontWeight="900"
                            letterSpacing="0.1em"
                            transition="all 0.3s"
                            borderRadius="2xl"
                            textTransform="uppercase"
                            visibility={isTopLayer ? "hidden" : "visible"}
                            rightIcon={!isTopLayer ? <FaArrowRight /> : undefined}
                        >
                            {ctaText}
                        </Button>
                    </Link>
                </MotionBox>
            </Flex>
        </Container>
    );

    const fullHeight = { base: "60vh", md: "80vh" };
    const clippedHeight = { base: "35vh", md: "45vh" };

    return (
        <Box position="relative" bg="white" overflow="hidden" h={fullHeight}>
            <Box position="absolute" inset={0} zIndex={1} bg="white">
                <HeroContent isTopLayer={false} />
            </Box>

            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h={clippedHeight}
                zIndex={2}
                overflow="hidden"
            >
                <Box position="absolute" inset={0} bg="#050505">
                    {isVideo ? (
                        <Box
                            as="video"
                            src={media}
                            autoPlay
                            loop
                            muted
                            playsInline
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            objectPosition="center"
                            opacity={0.5}
                        />
                    ) : (
                        <Image
                            src={media}
                            alt=""
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            objectPosition="center"
                            opacity={0.5}
                        />
                    )}

                    {/* Dark Overlay */}
                    <Box
                        position="absolute"
                        inset={0}
                        bg="linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)"
                    />
                </Box>

                <Box position="absolute" top={0} left={0} right={0} h={fullHeight}>
                    <HeroContent isTopLayer={true} />
                </Box>
            </Box>
        </Box>
    );
}