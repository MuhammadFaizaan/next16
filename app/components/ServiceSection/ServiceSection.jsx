"use client";

import { useRef } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const MotionBox = motion(Box);
const SERVICES = [
  {
    title: "AI transformation",
    description:
      "We maximize the power and promise of AI to drive transformative business outcomes through our comprehensive AI consulting services and solutions.",
  },
  {
    title: "Data & Analytics",
    description:
      "We enable enterprises to transform data into a business advantage by tapping into the capabilities of ML, advanced analytics, generative AI, and connected intelligence.",
  },
  {
    title: "Digital",
    description:
      "We offer core insights-driven digital transformation capabilities, modernize key systems to accelerate innovation, and provide a design-led, unified, and personalized experience.",
  },
  {
    title: "Cloud",
    description:
      "We help enterprises scale and adapt to evolving needs within a secure hybrid or pure cloud environment by leveraging end-to-end and outcome-based cloud solutions.",
  },
];
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600;800&display=swap');

  @keyframes shimmer {
    0%   { background-position: -100% center; }
    100% { background-position: 200% center; }
  }

  @keyframes marquee {
    0%   { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }

  .shimmer-text {
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0.2) 0%,
      rgba(255,255,255,0.9) 30%,
      rgba(255,0,0,0.9) 45%,
      rgba(200,0,0,0.9) 55%,
      rgba(255,255,255,0.2) 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 40s linear infinite;
  }

  .shimmer-subtitle {
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0.4) 0%,
      rgba(255,255,255,1) 35%,
      rgba(255,0,0,0.9) 50%,
      rgba(255,255,255,1) 65%,
      rgba(255,255,255,0.4) 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 5s linear infinite;
    filter: drop-shadow(0 0 12px rgba(255,0,0,0.5));
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 22s linear infinite;
  }
`;


function GlowHeading({ fontSize }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <Text
        className="shimmer-text"
        fontSize={fontSize ?? { base: "6xl", md: "8xl", lg: "9xl" }}
        fontWeight="800"
        lineHeight="1"
        fontFamily="'Playfair Display', serif"
        letterSpacing="-0.03em"
        whiteSpace="nowrap"
        userSelect="none"
      >
        Our Services
      </Text>
    </>
  );
}
function MarqueeSubtitle() {
  const phrase = "Driven innovation · Empowering lives with AI driven intelligence · ";
  const repeated = phrase.repeat(6);

  return (
    <Box overflow="hidden" w="100vw" position="relative">
      <Box className="marquee-track">
        <Text
          className="shimmer-subtitle"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="300"
          fontFamily="'Playfair Display', serif"
          fontStyle="italic"
          whiteSpace="nowrap"
          lineHeight="1.4"
          pr={8}
        >
          {repeated}
        </Text>
      </Box>
    </Box>
  );
}

function LeftPanel({ progress }) {
  const opacity = useTransform(progress, [0.50, 0.65], [0, 1]);

  return (
    <MotionBox
      position="absolute"
      top="50%"
      left={{ base: "5%", md: "6%" }}
      zIndex={8}
      style={{ opacity, y: "8%" }}
    >
      <MotionBox
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        mt="30px"
      >
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="400"
          fontFamily="'Playfair Display', serif"
          color="rgba(255,255,255,0.75)"
          lineHeight="1.15"
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.2)",
          }}
        >
          Redefining impact
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <Text
          className="shimmer-text"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="800"
          fontFamily="'Playfair Display', serif"
          lineHeight="1.15"
        >
          across the globe
        </Text>
      </MotionBox>

    </MotionBox>
  );
}

function ServiceRow({ title, description, index, totalProgress }) {
  const start = 0.55 + index * 0.045;
  const end = start + 0.08;
  const rowOpacity = useTransform(totalProgress, [start, end], [0, 1]);
  const rowY = useTransform(totalProgress, [start, end], [50, 0]);

  return (
    <MotionBox
      style={{ opacity: rowOpacity, y: rowY }}
      borderTop="1px solid"
      borderColor="rgba(255,255,255,0.1)"
      py={{ base: 5, md: 7 }}
      _last={{ borderBottom: "1px solid", borderBottomColor: "rgba(255,255,255,0.1)" }}
    >
      <MotionBox
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="700"
          fontFamily="'Playfair Display', serif"
          color="rgba(255,255,255,0.92)"
          mb={2}
          style={{ textShadow: "0 0 16px rgba(233,30,140,0.25)" }}
        >
          {title}
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Text
          fontSize="sm"
          color="rgba(200,210,230,0.7)"
          lineHeight="1.8"
          mb={4}
          maxW="500px"
        >
          {description}
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Flex
          as="a"
          href="#"
          align="center"
          gap={1.5}
          fontSize="xs"
          fontWeight="700"
          letterSpacing="0.12em"
          textTransform="uppercase"
          w="fit-content"
          color="rgba(255,0,0,0.9)"
          _hover={{ gap: "10px", color: "#00B4D8" }}
          transition="gap 0.2s ease, color 0.2s ease"
          sx={{
            "&::after": {
              content: '""',
              display: "block",
              position: "absolute",
            },
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            textDecorationColor: "rgba(255,0,0,0.9)",
          }}
        >
          LEARN MORE <FiArrowRight size={11} />
        </Flex>
      </MotionBox>
    </MotionBox>
  );
}

export default function ServicesSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const subtitleOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.22, 0.36],
    [0, 1, 1, 0]
  );
  const subtitleY = useTransform(scrollYProgress, [0, 0.16], [50, 0]);

  const headingLeft = useTransform(
    scrollYProgress,
    [0.32, 0.58],
    ["50%", "6%"]
  );
  const headingTranslateX = useTransform(
    scrollYProgress,
    [0.32, 0.58],
    ["-50%", "0%"]
  );
  const headingScale = useTransform(
    scrollYProgress,
    [0.32, 0.58],
    [1, 0.55]
  );

  const rightOpacity = useTransform(scrollYProgress, [0.38, 0.55], [0, 1]);
  const rightX = useTransform(scrollYProgress, [0.38, 0.58], [100, 0]);

  return (
    <Box ref={containerRef} h="400vh" position="relative">
      <Box
        position="sticky"
        top="0"
        h="100vh"
        overflow="hidden"
        bg="black"
      >
        <Box
          position="absolute"
          top="-20%"
          left="-10%"
          w="60vw"
          h="60vw"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(233,30,140,0.08) 0%, transparent 70%)"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="-20%"
          right="-10%"
          w="50vw"
          h="50vw"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 70%)"
          pointerEvents="none"
        />

        <MotionBox
          position="absolute"
          top="50%"
          zIndex={10}
          style={{
            left: headingLeft,
            x: headingTranslateX,
            y: "-50%",
            scale: headingScale,
            transformOrigin: "left center",
          }}
        >
          <GlowHeading />
        </MotionBox>

        <MotionBox
          position="absolute"
          top="calc(50% + 90px)"
          left="0"
          w="100%"
          zIndex={9}
          style={{
            opacity: subtitleOpacity,
            y: subtitleY,
          }}
        >
          <MarqueeSubtitle />
        </MotionBox>

        <LeftPanel progress={scrollYProgress} />

        <MotionBox
          position="absolute"
          top="0"
          right="0"
          w={{ base: "100%", md: "50%" }}
          h="100%"
          overflowY="auto"
          px={{ base: 6, md: 14 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          zIndex={7}
          style={{
            x: rightX,
            opacity: rightOpacity,
          }}
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          <Box
            position="absolute"
            top="10%"
            left="0"
            w="1px"
            h="80%"
            bg="linear-gradient(180deg, transparent, rgba(255,0,0,0.5), rgba(255,0,0,0.9), transparent)"
          />

          {SERVICES.map((s, i) => (
            <ServiceRow
              key={s.title}
              title={s.title}
              description={s.description}
              index={i} 
              totalProgress={scrollYProgress}
            />
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}