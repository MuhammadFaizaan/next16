'use client';

import { Box, Flex, Heading, Image, Text, HStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from './WorkData';
import { FiArrowRight } from 'react-icons/fi';

const MotionBox = motion(Box);

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link href={`/work/${project.slug}`}>
                <Box
                    position="relative"
                    borderRadius="3xl"
                    overflow="hidden"
                    bg="#0a0a0a"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    height="550px"
                    role="group"
                    cursor="pointer"
                    transition="all 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
                    _hover={{
                        borderColor: "red.600",
                        transform: "translateY(-10px)",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 20px rgba(220, 38, 38, 0.1)",
                    }}
                >
                    {/* Background Image with Smooth Zoom */}
                    <Box
                        position="absolute"
                        inset="0"
                        zIndex={0}
                    >
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            transition="transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)"
                            filter="saturate(1.2)"
                            _groupHover={{ transform: "scale(1.1)", filter: "brightness(0.4)" }}
                        />
                        <Box
                            position="absolute"
                            inset="0"
                            bgGradient="linear(to-t, black 0%, transparent 60%)"
                        />
                    </Box>

                    {/* Content Overlay */}
                    <Box
                        position="absolute"
                        inset="0"
                        p={10}
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        zIndex={1}
                        color="white"
                    >
                        <MotionBox>
                            <Flex align="center" gap={3} mb={6}>
                                <Box w="30px" h="2px" bg="red.600" />
                                <Text
                                    fontSize="xs"
                                    fontWeight="900"
                                    textTransform="uppercase"
                                    letterSpacing="0.1em"
                                    color="red.600"
                                >
                                    {project.category}
                                </Text>
                            </Flex>

                            <Heading
                                as="h3"
                                fontSize="3xl"
                                fontWeight="800"
                                mb={4}
                                lineHeight="1.1"
                                letterSpacing="-0.02em"
                                transition="all 0.3s"
                                _groupHover={{ color: "red.600" }}
                            >
                                {project.title.split(':').map((part, i) => (
                                    <Box key={i} as="span" display="block">{part.trim()}</Box>
                                ))}
                            </Heading>

                            <Box
                                height="0"
                                opacity="0"
                                overflow="hidden"
                                transition="all 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
                                _groupHover={{ height: "auto", opacity: 1, mt: 2 }}
                            >
                                <Text
                                    fontSize="sm"
                                    color="whiteAlpha.700"
                                    lineHeight="1.6"
                                    mb={6}
                                    noOfLines={3}
                                >
                                    {project.description}
                                </Text>
                                <HStack spacing={2} color="red.600" fontWeight="bold" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em">
                                    <Text>Explore Case Study</Text>
                                    <Icon as={FiArrowRight} />
                                </HStack>
                            </Box>
                        </MotionBox>
                    </Box>

                    {/* Subtle Border Glow on Hover */}
                    <Box
                        position="absolute"
                        inset="0"
                        borderRadius="3xl"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        opacity={0}
                        transition="opacity 0.5s"
                        _groupHover={{ opacity: 1 }}
                        pointerEvents="none"
                    />
                </Box>
            </Link>
        </MotionBox>
    );
}
