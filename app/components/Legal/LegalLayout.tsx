'use client';

import { Box, Container, Stack, useColorModeValue, Heading, Button, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import PageHero from '../Common/PageHero';
import Link from 'next/link';


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
      <PageHero
        title={title}
        subtitle={`Legal / ${title} / Last Updated: ${lastUpdated}`}
        media="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop"
        ctaText="GET IN TOUCH"
        ctaHref="/contact"
      />

      <Container maxW="1440px" mt={-12}>
        <Box
          p={{ base: 8, md: 16 }}
          bg={useColorModeValue('white', '#0a0a0a')}
          className="legal-content"
          position="relative"
          zIndex={2}
        >
          <Stack spacing={8}>
            {children}
          </Stack>
        </Box>
      </Container>

      {/* CTA Section */}
      <Box py={24} bg="#050505" position="relative" overflow="hidden">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="150%"
          h="150%"
          bg="radial-gradient(circle, rgba(255,19,19,0.1) 0%, rgba(0,0,0,0) 60%)"
          filter="blur(100px)"
          zIndex="0"
        />
        <Container maxW="container.lg" textAlign="center" position="relative" zIndex="1">
          <Heading as="h2" size="2xl" color="white" mb={8} fontWeight="900">
            Need Legal Clarification?
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.700" mb={12} maxW="2xl" mx="auto">
            If you have questions regarding our terms, privacy practices, or compliance standards, our legal team is here to help.
          </Text>
          <Link href="/contact" passHref>
            <Button
              as="a"
              size="lg"
              bg="brand.red"
              color="white"
              px={12}
              h={16}
              fontSize="xl"
              _hover={{ bg: 'red.600', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              Contact Legal Dept
            </Button>
          </Link>
        </Container>
      </Box>

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
