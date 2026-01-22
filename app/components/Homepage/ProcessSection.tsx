'use client';

import { Box, Container, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const MotionBox = motion(Box);

const processes = [
    {
        number: '01',
        title: 'Idea',
        description: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
        // Using distinct meaningful placeholders
        img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop'
    },
    {
        number: '02',
        title: 'Design',
        description: 'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.',
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop'
    },
    {
        number: '03',
        title: 'Develop',
        description: 'Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.',
        img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop'
    },
    {
        number: '04',
        title: 'Test',
        description: 'Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.',
        img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop'
    },
    {
        number: '05',
        title: 'Launch',
        description: 'Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.',
        img: 'https://images.unsplash.com/photo-1559136555-930d72f1861a?q=80&w=1000&auto=format&fit=crop'
    },
    {
        number: '06',
        title: 'Support',
        description: 'Providing ongoing support and enhancements to ensure continued product success.',
        img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop'
    }
];

// Component to handle individual step visibility
const ProcessStep = ({ process, index, setActiveStep }: { process: typeof processes[0], index: number, setActiveStep: (index: number) => void }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveStep(index);
        }
    }, [isInView, index, setActiveStep]);

    return (
        <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            py={20} // Add significant padding to ensure scroll distance
            borderLeft="1px solid"
            borderColor="whiteAlpha.200"
            pl={10}
            position="relative"
            _before={{
                content: '""',
                position: 'absolute',
                left: '-1px',
                top: '0',
                bottom: '0',
                width: '1px',
                bg: 'red.400',
                transform: isInView ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top',
                transition: 'transform 0.5s ease'
            }}
        >
            <Text
                fontSize="sm"
                fontWeight="bold"
                color={isInView ? "red.400" : "whiteAlpha.500"}
                mb={2}
                letterSpacing="widest"
            >
                {process.number}/{processes.length < 10 ? `0${processes.length}` : processes.length}
            </Text>
            <Heading
                as="h3"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="700"
                color={isInView ? "white" : "whiteAlpha.500"}
                mb={6}
                transition="color 0.3s"
            >
                {process.title}
            </Heading>
            <Text
                fontSize={{ base: "md", md: "lg" }}
                color="whiteAlpha.700"
                lineHeight="1.7"
                maxW="md"
            >
                {process.description}
            </Text>
        </MotionBox>
    );
};

export default function ProcessSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Box bg="black" py={{ base: 24, md: 32 }} position="relative" color="white">
            <Container maxW="1400px">
                <Box mb={20}>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                        fontWeight="800"
                        letterSpacing="tight"
                        mb={4}
                    >
                        Our product <br />
                        <Box as="span" color="red.500">development process</Box>
                    </Heading>
                    <Flex align="center" gap={2} cursor="pointer" _hover={{ gap: 4 }} transition="all 0.3s">
                        <Text fontSize="sm" fontWeight="medium">View More</Text>
                        <Box as="span">→</Box>
                    </Flex>
                </Box>

                <Flex gap={{ base: 12, lg: 24 }} direction={{ base: 'column-reverse', lg: 'row' }}>
                    {/* Left Side: Scrollable Steps */}
                    <Box flex="1">
                        <Stack spacing={0}>
                            {processes.map((process, index) => (
                                <ProcessStep
                                    key={index}
                                    process={process}
                                    index={index}
                                    setActiveStep={setActiveStep}
                                />
                            ))}
                        </Stack>
                    </Box>

                    {/* Right Side: Sticky Image */}
                    <Box
                        flex="1"
                        position="relative"
                        display={{ base: 'none', lg: 'block' }}
                    >
                        <Box
                            position="sticky"
                            top="150px"
                            w="100%"
                            h="500px" // Fixed height for consistency
                            borderRadius="3xl"
                            overflow="hidden"
                            boxShadow="2xl"
                        >
                            {processes.map((process, index) => (
                                <Box
                                    key={index}
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    w="100%"
                                    h="100%"
                                    opacity={activeStep === index ? 1 : 0}
                                    transition="opacity 0.5s ease-in-out"
                                    pointerEvents="none"
                                >
                                    {/* Using a Gradient Overlay to make text pop if needed, though clean image is requested */}
                                    <Box
                                        position="absolute"
                                        inset="0"
                                        bgGradient="radial(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)"
                                        zIndex="1"
                                    />
                                    {/* Ideally we'd use next/image here */}
                                    <img
                                        src={process.img}
                                        alt={process.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transform: activeStep === index ? 'scale(1.05)' : 'scale(1)',
                                            transition: 'transform 6s ease-out'
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
