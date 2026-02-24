'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import { faqData, faqCategories } from './faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFAQs = activeCategory === 'All'
    ? faqData
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <Box as="section" bg="white">
      <Container maxW="1400px">
        {/* Header Section */}
        <VStack spacing={8} textAlign="center" mb={20}>
          <HStack spacing={4}>
            <Box w="20px" h="2px" bg="red.600" />
            <Text fontWeight="900" letterSpacing="0.2em" color="red.600" textTransform="uppercase" fontSize="xs">
              Knowledge Base
            </Text>
            <Box w="20px" h="2px" bg="red.600" />
          </HStack>
          <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="900" letterSpacing="-0.03em" lineHeight="1">
            Answers to your <br />
            <Text as="span" color="red.600">curiosities.</Text>
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="800px" lineHeight="1.8">
            Expert insights into our processes, security standards, and engineering methodologies.
          </Text>
        </VStack>

        {/* Category Filter */}
        <Flex
          justify="center"
          wrap="wrap"
          gap={4}
          mb={16}
          px={4}
        >
          {faqCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant="outline"
              borderRadius="full"
              px={8}
              py={6}
              fontSize="sm"
              fontWeight="900"
              letterSpacing="0.05em"
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              bg={activeCategory === category ? "red.600" : "transparent"}
              color={activeCategory === category ? "white" : "gray.600"}
              borderColor={activeCategory === category ? "red.600" : "gray.200"}
              _hover={{
                borderColor: "red.600",
                color: activeCategory === category ? "white" : "red.600",
                transform: "translateY(-2px)"
              }}
              _active={{ transform: "scale(0.95)" }}
            >
              {category.toUpperCase()}
            </Button>
          ))}
        </Flex>

        {/* FAQ Accordion */}
        <VStack spacing={6} maxW="1200px" mx="auto" px={{ base: 4, md: 0 }}>
          {filteredFAQs.map((faq) => {
            const IconComponent = (FaIcons as any)[faq.icon] || FaIcons.FaQuestionCircle;
            const isOpen = openId === faq.id;

            return (
              <Box
                key={faq.id}
                w="100%"
                bg="white"
                borderRadius="3xl"
                border="1px solid"
                borderColor={isOpen ? "red.100" : "gray.100"}
                overflow="hidden"
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                boxShadow={isOpen ? "2xl" : "none"}
                _hover={{
                  borderColor: isOpen ? "red.200" : "red.500",
                  shadow: "xl"
                }}
              >
                <Box
                  as="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  w="100%"
                  p={{ base: 6, md: 10 }}
                  textAlign="left"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  transition="all 0.3s"
                >
                  <HStack spacing={6} flex="1">
                    <Flex
                      boxSize={14}
                      bg={isOpen ? "red.600" : "gray.50"}
                      color={isOpen ? "white" : "red.600"}
                      borderRadius="2xl"
                      align="center"
                      justify="center"
                      transition="all 0.4s"
                      flexShrink={0}
                    >
                      <Icon as={IconComponent} boxSize={6} />
                    </Flex>
                    <VStack align="flex-start" spacing={1}>
                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="900"
                        color="gray.800"
                        letterSpacing="-0.01em"
                        lineHeight="1.4"
                      >
                        {faq.question}
                      </Text>
                      <Badge
                        bg="gray.100"
                        color="gray.500"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                        textTransform="uppercase"
                        fontWeight="900"
                        letterSpacing="0.05em"
                      >
                        {faq.category}
                      </Badge>
                    </VStack>
                  </HStack>

                  <Flex
                    boxSize={10}
                    bg={isOpen ? "red.50" : "transparent"}
                    borderRadius="full"
                    align="center"
                    justify="center"
                    transition="all 0.3s"
                    color={isOpen ? "red.600" : "gray.400"}
                  >
                    <Icon
                      as={isOpen ? FaMinus : FaPlus}
                      boxSize={4}
                      transition="transform 0.4s"
                    />
                  </Flex>
                </Box>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Box
                        px={{ base: 6, md: 10 }}
                        pb={{ base: 8, md: 10 }}
                        pl={{ base: 6, md: 32 }}
                      >
                        <Box
                          w="full"
                          h="1px"
                          bg="gray.100"
                          mb={8}
                        />
                        <Text
                          color="gray.600"
                          fontSize="lg"
                          lineHeight="1.8"
                          fontWeight="500"
                        >
                          {faq.answer}
                        </Text>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            );
          })}
        </VStack>

        {/* Contact Support Section */}
        <VStack my={24} spacing={6} textAlign="center" >
          <Flex
            bg="red.50"
            p={6}
            borderRadius="4xl"
            align="center"
            gap={6}
            direction={{ base: "column", md: "row" }}
            border="1px solid"
            borderColor="red.100"
          >
            <HStack spacing={4}>
              <Icon as={FaIcons.FaHeadset} color="red.600" boxSize={6} />
              <Text fontWeight="900" color="gray.800">
                Still have questions?
              </Text>
            </HStack>
            <Button
              as="a"
              href="/contact"
              variant="link"
              color="red.600"
              fontWeight="900"
              textDecoration="underline"
              _hover={{ color: "black" }}
            >
              Talk to our support team
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

// Add simple Badge component fallback since imports might differ
const Badge = ({ children, ...props }: any) => (
  <Box display="inline-block" {...props}>
    {children}
  </Box>
);