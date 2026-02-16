'use client';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  Icon,
  VStack,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { servicesData, ServiceCategory } from '@/app/lib/servicesData';
import { FiArrowRight } from 'react-icons/fi';
import { AiOutlineRobot, AiOutlineGlobal, AiOutlineMobile } from 'react-icons/ai';

const MotionBox = motion(Box);
const iconMap: { [key: string]: any } = {
  AiOutlineRobot,
  AiOutlineGlobal,
  AiOutlineMobile,
};

const ServiceCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  const IconComponent = iconMap[category.icon] || AiOutlineGlobal;
  
  const cardBg = useColorModeValue('white', 'whiteAlpha.50');
  const cardBorder = useColorModeValue('gray.100', 'whiteAlpha.100');
  const shadowColor = useColorModeValue('rgba(0,0,0,0.05)', 'rgba(0,0,0,0.3)');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Box
        height="full"
        position="relative"
        p={8}
        bg={cardBg}
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor={cardBorder}
        borderRadius="24px"
        boxShadow={`0 10px 30px ${shadowColor}`}
        transition="all 0.3s ease"
        role="group"
        _hover={{
          boxShadow: `0 20px 40px ${shadowColor}`,
          borderColor: 'red.400',
        }}
      >
        <Icon
          as={IconComponent}
          position="absolute"
          right="-10px"
          bottom="-10px"
          boxSize="120px"
          opacity="0.03"
          transform="rotate(-15deg)"
        />

        <VStack align="flex-start" spacing={6} height="full">
          <HStack w="full" justify="space-between">
            <Box
              p={3}
              borderRadius="12px"
              bg="red.50"
              color="red.500"
              _dark={{ bg: 'red.900', color: 'red.200' }}
            >
              <Icon as={IconComponent} boxSize={6} />
            </Box>
            <Badge variant="subtle" colorScheme="gray" borderRadius="full" px={3}>
              {String(index + 1).padStart(2, '0')}
            </Badge>
          </HStack>

          <VStack align="flex-start" spacing={3} flex="1">
            <Heading as="h3" fontSize="xl" fontWeight="700">
              {category.title}
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="sm" lineHeight="tall">
              {category.description}
            </Text>
          </VStack>

          <HStack 
            spacing={2} 
            color="red.500" 
            fontWeight="600" 
            fontSize="sm"
            cursor="pointer"
          >
            <Text>Explore details</Text>
            <Box
              as={motion.div}
              whileHover={{ x: 5 }}
              transition="0.2s"
            >
              <Icon as={FiArrowRight} />
            </Box>
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default function ServicesSection() {
  const bgGradient = useColorModeValue(
    'radial-gradient(circle at 2% 10%, rgba(220, 38, 38, 0.05) 0%, transparent 40%)',
    'radial-gradient(circle at 2% 10%, rgba(220, 38, 38, 0.15) 0%, transparent 40%)'
  );

  return (
    <Box 
      as="section" 
      py={24} 
      position="relative" 
      bg={useColorModeValue('gray.50', 'black')}
      backgroundImage={bgGradient}
    >
      <Container maxW="1380px">
        <VStack spacing={16}>
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Badge 
              colorScheme="red" 
              variant="outline" 
              px={4} 
              py={1} 
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              Our Expertise
            </Badge>
            <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="800">
              Solutions that scale with <br />
              <Text as="span" color="red.500">your ambition.</Text>
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
              We combine strategy, design, and technology to build digital products 
              that people actually love to use.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {servicesData.map((category, index) => (
              <ServiceCard key={index} category={category} index={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}