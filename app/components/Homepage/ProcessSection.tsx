'use client';

import { Box, Container, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
        img: '/images/launch.jpg'
    },
    {
        number: '06',
        title: 'Support',
        description: 'Providing ongoing support and enhancements to ensure continued product success.',
        img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop'
    }
];

const ProcessStep = ({ process, index, setActiveStep, activeStep }: { process: typeof processes[0], index: number, setActiveStep: (index: number) => void, activeStep: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-45% 0px -45% 0px",
        amount: "some"
    });

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
            transition={{ duration: 0.8, ease: "easeOut" }}
            py={{ base: 20, md: 32 }}
            position="relative"
            pl={12}
        >
            <Text
                fontSize="sm"
                fontWeight="bold"
                color={activeStep === index ? "red.400" : "whiteAlpha.500"}
                mb={2}
                letterSpacing="widest"
                transition="color 0.4s"
            >
                {process.number}/{processes.length < 10 ? `0${processes.length}` : processes.length}
            </Text>
            <Heading
                as="h3"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="700"
                color={activeStep === index ? "white" : "whiteAlpha.400"}
                mb={6}
                transition="color 0.4s"
            >
                {process.title}
            </Heading>
            <Text
                fontSize={{ base: "md", md: "lg" }}
                color={activeStep === index ? "whiteAlpha.800" : "whiteAlpha.300"}
                lineHeight="1.7"
                maxW="md"
                transition="color 0.4s"
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
                    <Box flex="1" position="relative">
                        <Box
                            position="absolute"
                            left="0"
                            top="0"
                            bottom="0"
                            width="2px"
                            bg="whiteAlpha.200"
                        >
                            <Box
                                position="absolute"
                                top={`${(activeStep / processes.length) * 100}%`}
                                height={`${(1 / processes.length) * 100}%`}
                                width="100%"
                                bg="red.500"
                                transition="top 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                                boxShadow="0 0 10px rgba(245, 101, 101, 0.5)"
                            />
                        </Box>

                        <Stack spacing={0}>
                            {processes.map((process, index) => (
                                <ProcessStep
                                    key={index}
                                    process={process}
                                    index={index}
                                    setActiveStep={setActiveStep}
                                    activeStep={activeStep}
                                />
                            ))}
                        </Stack>
                    </Box>

                    <Box
                        flex="1"
                        position="relative"
                        display={{ base: 'none', lg: 'block' }}
                    >
                        <Box
                            position="sticky"
                            top="150px"
                            w="100%"
                            h="500px"
                            borderRadius="3xl"
                            overflow="hidden"
                            boxShadow="2xl"
                            bg="whiteAlpha.50"
                        >
                            <AnimatePresence mode="sync">
                                <MotionBox
                                    key={activeStep}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-100%", opacity: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                    position="absolute"
                                    inset="0"
                                >
                                    <Box
                                        position="absolute"
                                        inset="0"
                                        bgGradient="linear(to-t, blackAlpha.600, transparent)"
                                        zIndex="1"
                                    />
                                    <img
                                        src={processes[activeStep].img}
                                        alt={processes[activeStep].title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </MotionBox>
                            </AnimatePresence>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
