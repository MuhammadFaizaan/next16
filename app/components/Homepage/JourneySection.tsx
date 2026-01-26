'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MotionHeading = motion(Heading);

const Counter = ({ value, label, duration = 2 }: { value: number, label: string, duration?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const displayValue = useTransform(spring, (current) =>
        Math.floor(current).toLocaleString() + "+"
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return (
        <VStack align="flex-start" spacing={2} ref={ref}>
            <Heading
                as="h3"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="800"
                color="black"
            >
                <motion.span>{displayValue}</motion.span>
            </Heading>
            <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="500"
                color="blackAlpha.700"
            >
                {label}
            </Text>
        </VStack>
    );
};

export default function JourneySection() {
    return (
        <Box py={{ base: 20, md: 32 }} color="black">
            <Container maxW="1400px">
                <VStack align="flex-start" spacing={12}>
                    <VStack align="flex-start" spacing={6} maxW="900px">
                        <MotionHeading
                            as="h2"
                            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                            fontWeight="800"
                            lineHeight="1.1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Our journey of building success
                        </MotionHeading>
                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            color="blackAlpha.800"
                            lineHeight="1.6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            // @ts-ignore
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We are a full-cycle product development company that combines creative
                            thinking with technical expertise to create user-centric products that solve real
                            problems and drive business growth.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 12, md: 24 }} w="100%">
                        <Counter value={1300} label="Completed Projects" />
                        <Counter value={350} label="Talented Team" />
                        <Counter value={600} label="Satisfied Clients" />
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
}
