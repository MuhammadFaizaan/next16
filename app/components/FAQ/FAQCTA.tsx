'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Flex
} from '@chakra-ui/react';
import { FaArrowRight, FaComments, FaRegLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function CTASection() {
  return (
    <Box
      as="section"
      py={{ base: 24, md: 32 }}
      bg="black"
      position="relative"
      overflow="hidden"
    >
      {/* Dynamic Background Gradients */}
      <Box
        position="absolute"
        top="-10%"
        left="-10%"
        w="50%"
        h="50%"
        bg="radial-gradient(circle, rgba(229, 62, 62, 0.15) 0%, rgba(0,0,0,0) 70%)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-10%"
        right="-10%"
        w="60%"
        h="60%"
        bg="radial-gradient(circle, rgba(229, 62, 62, 0.1) 0%, rgba(0,0,0,0) 70%)"
        zIndex={0}
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={16} textAlign="center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <HStack
              bg="whiteAlpha.100"
              px={6}
              py={3}
              borderRadius="full"
              border="1px solid"
              borderColor="whiteAlpha.200"
              spacing={3}
            >
              <Icon as={FaComments} color="red.500" />
              <Text color="white" fontWeight="900" fontSize="sm" letterSpacing="0.1em">
                STILL CURIOUS?
              </Text>
            </HStack>
          </motion.div>

          {/* Main Copy */}
          <VStack spacing={6}>
            <Heading
              fontSize={{ base: "4xl", md: "7xl" }}
              fontWeight="900"
              color="white"
              letterSpacing="-0.04em"
              lineHeight="1"
            >
              Your vision, <br />
              <Text as="span" color="red.600">our engineering.</Text>
            </Heading>
            <Text
              fontSize="xl"
              color="whiteAlpha.700"
              maxW="800px"
              lineHeight="1.8"
              fontWeight="500"
            >
              Whether you're looking for deep technical answers or ready to start your next big project, our team is here to guide your engineering journey.
            </Text>
          </VStack>

          {/* Feature highlights */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
            {[
              { icon: FaRocket, title: "Rapid Onboarding", desc: "Start in days, not months." },
              { icon: FaRegLightbulb, title: "Expert Solutions", desc: "Custom-fit technical architectures." },
              { icon: FaShieldAlt, title: "Ironclad Security", desc: "Enterprise-grade protection." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <VStack
                  p={8}
                  bg="whiteAlpha.50"
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  align="center"
                  spacing={4}
                  _hover={{ bg: "whiteAlpha.100", borderColor: "red.500" }}
                  transition="all 0.3s"
                >
                  <Flex
                    boxSize={12}
                    bg="red.600"
                    borderRadius="xl"
                    align="center"
                    justify="center"
                    color="white"
                  >
                    <Icon as={feature.icon} boxSize={5} />
                  </Flex>
                  <VStack spacing={1}>
                    <Text color="white" fontWeight="900" fontSize="lg">{feature.title}</Text>
                    <Text color="whiteAlpha.500" fontSize="sm">{feature.desc}</Text>
                  </VStack>
                </VStack>
              </motion.div>
            ))}
          </SimpleGrid>

          {/* Action Buttons */}
          <HStack spacing={6} direction={{ base: "column", sm: "row" }}>
            <Link href="/contact" style={{ width: '100%' }}>
              <Button
                size="xl"
                bg="red.600"
                color="white"
                px={12}
                h={20}
                fontSize="lg"
                fontWeight="900"
                borderRadius="2xl"
                rightIcon={<FaArrowRight />}
                _hover={{ bg: "white", color: "black", transform: "translateY(-5px)" }}
                transition="all 0.3s"
                w={{ base: "full", sm: "auto" }}
              >
                GET STARTED
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}