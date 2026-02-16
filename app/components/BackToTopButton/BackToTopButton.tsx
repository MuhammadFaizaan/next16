'use client';

import { useState, useEffect } from 'react';
import { Icon, Box, Circle, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const MotionBox = motion(Box);

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          position="fixed"
          bottom="40px"
          right="40px"
          zIndex={100}
          cursor="pointer"
          onClick={scrollToTop}
        >
          {/* @ts-ignore */}
          <Box position="relative" size="60px">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle
                cx="30"
                cy="30"
                r="28"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="30"
                cy="30"
                r="28"
                stroke="#DC2626" 
                strokeWidth="2"
                strokeDasharray="176"
                strokeDashoffset={176 - (176 * scrollProgress) / 100}
                strokeLinecap="round"
                fill="none"
                style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
              />
            </svg>

            <Circle
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              size="44px"
              bg="black"
              color="white"
              border="1px solid"
              borderColor="whiteAlpha.200"
              transition="all 0.3s ease"
              _hover={{ color: "#DC2626", borderColor: "#DC2626" }}
            >
              <Icon as={FiArrowUp} boxSize={5} />
            </Circle>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}