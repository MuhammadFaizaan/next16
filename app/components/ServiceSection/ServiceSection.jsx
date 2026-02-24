// "use client";

// import { useRef } from "react";
// import { Box, Text, Flex } from "@chakra-ui/react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";
// import { servicesData } from "@/app/lib/servicesData";
// const MotionBox = motion(Box);


// const GLOBAL_STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
// `;

// function ColoredText({ text, coloredIndices, fontSize, fontWeight, fontFamily, lineHeight, color }) {
//     return (
//         <Text
//             as="span"
//             fontSize={fontSize}
//             fontWeight={fontWeight}
//             fontFamily={fontFamily}
//             lineHeight={lineHeight}
//             color={color || "gray.900"}
//             display="block"
//         >
//             {text.split("").map((char, i) => {
//                 const colorInfo = coloredIndices?.[i];
//                 if (colorInfo) {
//                     return (
//                         <Text
//                             key={i}
//                             as="span"
//                             style={{
//                                 background: colorInfo,
//                                 WebkitBackgroundClip: "text",
//                                 WebkitTextFillColor: "transparent",
//                                 backgroundClip: "text",
//                             }}
//                         >
//                             {char}
//                         </Text>
//                     );
//                 }
//                 return <span key={i}>{char}</span>;
//             })}
//         </Text>
//     );
// }

// function ServiceRow({ title, description, index, totalProgress }) {
//     const start = 0.55 + index * 0.045;
//     const end = start + 0.08;
//     const rowOpacity = useTransform(totalProgress, [start, end], [0, 1]);
//     const rowY = useTransform(totalProgress, [start, end], [30, 0]);

//     return (
//         <MotionBox
//             style={{ opacity: rowOpacity, y: rowY }}
//             borderTop="1px solid"
//             borderColor="rgba(0,0,0,0.12)"
//             py={{ base: 5, md: 7 }}
//             _last={{ borderBottom: "1px solid", borderBottomColor: "rgba(0,0,0,0.12)" }}
//         >
//             <Text
//                 fontSize={{ base: "xl", md: "2xl" }}
//                 fontWeight="500"
//                 fontFamily="'Playfair Display', serif"
//                 color="gray.800"
//                 mb={2}
//             >
//                 {title}
//             </Text>

//             <Text
//                 fontSize="md"
//                 color="black"
//                 lineHeight="1.4"
//                 mb={4}
//                 maxW="560px"
//                 fontWeight="400"
//             >
//                 {description}
//             </Text>

//             <Flex
//                 as="a"
//                 href="#"
//                 align="center"
//                 gap={1.5}
//                 fontSize="xs"
//                 fontWeight="700"
//                 letterSpacing="0.12em"
//                 textTransform="uppercase"
//                 w="fit-content"
//                 color="rgba(200,80,30,0.9)"
//                 _hover={{ gap: "10px" }}
//                 transition="gap 0.2s ease"
//                 textDecoration="underline"
//                 textUnderlineOffset="4px"
//                 textDecorationColor="rgba(200,80,30,0.6)"
//             >
//                 LEARN MORE <FiArrowRight size={11} />
//             </Flex>
//         </MotionBox>
//     );
// }

// export default function ServicesSection() {
//     const containerRef = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     const subtitleOpacity = useTransform(
//         scrollYProgress,
//         [0, 0.12, 0.22, 0.36],
//         [0, 1, 1, 0]
//     );
//     const subtitleY = useTransform(scrollYProgress, [0, 0.16], [30, 0]);
//     const headingLeft = useTransform(scrollYProgress, [0.32, 0.58], ["50%", "6%"]);
//     const headingTranslateX = useTransform(scrollYProgress, [0.32, 0.58], ["-50%", "0%"]);
//     const headingTop = useTransform(scrollYProgress, [0.32, 0.58], ["50%", "18%"]);
//     const headingTranslateY = useTransform(scrollYProgress, [0.32, 0.58], ["-50%", "0%"]);
//     const headingScale = useTransform(scrollYProgress, [0.32, 0.58], [1, 0.62]);

//     // ── Left panel: tagline + CTA fade in below heading ─────────────────────
//     const leftOpacity = useTransform(scrollYProgress, [0.52, 0.66], [0, 1]);
//     const leftY = useTransform(scrollYProgress, [0.52, 0.66], [24, 0]);

//     // ── Right panel slides in from right ────────────────────────────────────
//     const rightOpacity = useTransform(scrollYProgress, [0.38, 0.55], [0, 1]);
//     const rightX = useTransform(scrollYProgress, [0.38, 0.58], [80, 0]);

//     const ourServicesColors = {
//         4: "linear-gradient(135deg, red, red)",
//     };

//     return (
//         <Box ref={containerRef} h="250vh" position="relative">
//             <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
//             <Box
//                 position="sticky"
//                 top="0"
//                 h="100vh"
//                 overflow="hidden"
//                 bg="#f0f0f0"
//             >
//                 <Box
//                     position="absolute"
//                     top="10%"
//                     left="50%"
//                     w="1px"
//                     h="80%"
//                     bg="rgba(0,0,0,0.1)"
//                     zIndex={6}
//                 />

//                 <MotionBox
//                     position="absolute"
//                     zIndex={10}
//                     style={{
//                         left: headingLeft,
//                         top: headingTop,
//                         x: headingTranslateX,
//                         y: headingTranslateY,
//                         scale: headingScale,
//                         transformOrigin: "left center",
//                     }}
//                 >
//                     <ColoredText
//                         text="Our Services"
//                         coloredIndices={ourServicesColors}
//                         fontSize={{ base: "6xl", md: "8xl", lg: "9xl" }}
//                         fontWeight="700"
//                         fontFamily="'Playfair Display', serif"
//                         color="gray.900"
//                         lineHeight="1"
//                     />
//                 </MotionBox>

//                 {/* ── SUBTITLE (phase 1 only) ─────────────────────────────────── */}
//                 <MotionBox
//                     position="absolute"
//                     top="calc(50% + 80px)"
//                     left="0"
//                     w="100%"
//                     zIndex={9}
//                     style={{ opacity: subtitleOpacity, y: subtitleY }}
//                     textAlign="center"
//                 >
//                     <Text
//                         fontSize="lg"
//                         fontWeight="600"
//                         color="black"
//                         letterSpacing="0.02em"
//                     >
//                         Driven innovation · Empowering lives with AI driven intelligence
//                     </Text>
//                 </MotionBox>

//                 {/* ── LEFT PANEL: tagline + CTA (appears below heading in phase 3) */}
//                 <MotionBox
//                     position="absolute"
//                     top="30%"
//                     left={{ base: "5%", md: "6%" }}
//                     zIndex={8}
//                     style={{
//                         opacity: leftOpacity,
//                         y: leftY,
//                     }}
//                 >
//                     <ColoredText
//                         text="Redefining possibilities"
//                         coloredIndices={{
//                             0: "linear-gradient(135deg, red, red)",
//                         }}
//                         fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
//                         fontWeight="700"
//                         fontFamily="'Playfair Display', serif"
//                         color="gray.900"
//                         lineHeight="1.8"
//                     />

//                     <ColoredText
//                         text="across the globe"
//                         fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
//                         fontWeight="700"
//                         fontFamily="'Playfair Display', serif"
//                         color="gray.900"
//                         lineHeight="1.8"
//                     />

//                     <Flex
//                         as="a"
//                         href="#"
//                         align="center"
//                         gap={1.5}
//                         mt={8}
//                         fontSize="lg"
//                         fontWeight="700"
//                         letterSpacing="0.12em"
//                         textTransform="uppercase"
//                         w="fit-content"
//                         color="red"
//                         _hover={{ gap: "10px" }}
//                         transition="gap 0.2s ease"
//                         cursor={'pointer'}
//                         textDecoration="underline"
//                         textUnderlineOffset="4px"
//                         textDecorationColor="rgba(200,80,30,0.6)"
//                     >
//                         GET IN TOUCH <FiArrowRight size={11} />
//                     </Flex>
//                 </MotionBox>

//                 {/* ── RIGHT PANEL: services list ──────────────────────────────── */}
//                 <MotionBox
//                     position="absolute"
//                     top="0"
//                     right="0"
//                     w={{ base: "100%", md: "50%" }}
//                     h="100%"
//                     overflowY="auto"
//                     px={{ base: 6, md: 14 }}
//                     display="flex"
//                     flexDirection="column"
//                     justifyContent="flex-start"
//                     pt={{ base: "80px", md: "100px" }}
//                     zIndex={7}
//                     style={{
//                         x: rightX,
//                         opacity: rightOpacity,
//                     }}
//                     sx={{
//                         "&::-webkit-scrollbar": { display: "none" },
//                         scrollbarWidth: "none",
//                     }}
//                 >
//                     {servicesData.map((s, i) => (
//                         <ServiceRow
//                             key={s.title}
//                             title={s.title}
//                             description={s.description}
//                             index={i}
//                             totalProgress={scrollYProgress}
//                         />
//                     ))}
//                 </MotionBox>
//             </Box>
//         </Box>
//     );
// }

"use client";

import { useRef } from "react";
import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { servicesData } from "@/app/lib/servicesData";

const MotionBox = motion(Box);

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
`;
function ServiceRow({ title, description, index, totalProgress }) {
    const start = 0.55 + index * 0.045;
    const end = start + 0.08;
    const rowOpacity = useTransform(totalProgress, [start, end], [0, 1]);
    const rowY = useTransform(totalProgress, [start, end], [30, 0]);

    return (
        <MotionBox
            style={{ opacity: rowOpacity, y: rowY }}
            borderTop="1px solid"
            borderColor="rgba(0,0,0,0.12)"
            py={{ base: 5, md: 7 }}
            _last={{ borderBottom: "1px solid", borderBottomColor: "rgba(0,0,0,0.12)" }}
        >
            <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="500"
                fontFamily="'Playfair Display', serif"
                color="gray.800"
                mb={2}
            >
                {title}
            </Text>

            <Text
                fontSize="md"
                color="black"
                lineHeight="1.4"
                mb={4}
                maxW="560px"
                fontWeight="400"
            >
                {description}
            </Text>

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
                color="rgba(200,80,30,0.9)"
                _hover={{ gap: "10px" }}
                transition="gap 0.2s ease"
                textDecoration="underline"
                textUnderlineOffset="4px"
                textDecorationColor="rgba(200,80,30,0.6)"
            >
                LEARN MORE <FiArrowRight size={11} />
            </Flex>
        </MotionBox>
    );
}
function ColoredText({ text, coloredIndices, fontSize, fontWeight, fontFamily, lineHeight, color }) {
    return (
        <Text
            as="span"
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
            lineHeight={lineHeight}
            color={color || "gray.900"}
            display="block"
        >
            {text.split("").map((char, i) => {
                const colorInfo = coloredIndices?.[i];
                if (colorInfo) {
                    return (
                        <Text
                            key={i}
                            as="span"
                            style={{
                                background: colorInfo,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {char}
                        </Text>
                    );
                }
                return <span key={i}>{char}</span>;
            })}
        </Text>
    );
}

// ─── MOBILE: simple static layout, no scroll animation ───────────────────────
function MobileServicesSection() {
    return (
        <Box bg="#f0f0f0" px={6} py={16}>
            {/* Heading */}
            <Box mb={6}>
                <ColoredText
                    text="Our Services"
                    coloredIndices={{ 4: "linear-gradient(135deg, red, red)" }}
                    fontSize="5xl"
                    fontWeight="700"
                    fontFamily="'Playfair Display', serif"
                    color="gray.900"
                    lineHeight="1"
                />
            </Box>

            {/* Subtitle */}
            <Text
                fontSize="sm"
                fontWeight="600"
                color="black"
                letterSpacing="0.02em"
                mb={10}
                lineHeight="1.6"
            >
                Driven innovation · Empowering lives with AI driven intelligence
            </Text>

            {/* Tagline */}
            <Box mb={8}>
                <ColoredText
                    text="Redefining possibilities"
                    coloredIndices={{ 0: "linear-gradient(135deg, red, red)" }}
                    fontSize="3xl"
                    fontWeight="700"
                    fontFamily="'Playfair Display', serif"
                    color="gray.900"
                    lineHeight="1.3"
                />
                <ColoredText
                    text="across the globe"
                    fontSize="3xl"
                    fontWeight="700"
                    fontFamily="'Playfair Display', serif"
                    color="gray.900"
                    lineHeight="1.3"
                />
                <Flex
                    as="a"
                    href="#"
                    align="center"
                    gap={1.5}
                    mt={5}
                    fontSize="xs"
                    fontWeight="700"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    w="fit-content"
                    color="red"
                    textDecoration="underline"
                    textUnderlineOffset="4px"
                    textDecorationColor="rgba(200,80,30,0.6)"
                >
                    GET IN TOUCH <FiArrowRight size={11} />
                </Flex>
            </Box>

            {/* Divider */}
            <Box w="100%" h="1px" bg="rgba(0,0,0,0.1)" mb={4} />

            {/* Services stacked */}
            {servicesData.map((s, i) => (
                <Box
                    key={s.title}
                    borderTop={i === 0 ? "none" : "1px solid"}
                    borderColor="rgba(0,0,0,0.12)"
                    py={6}
                    _last={{ borderBottom: "1px solid", borderBottomColor: "rgba(0,0,0,0.12)" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Text
                            fontSize="xl"
                            fontWeight="500"
                            fontFamily="'Playfair Display', serif"
                            color="gray.800"
                            mb={2}
                        >
                            {s.title}
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            lineHeight="1.6"
                            mb={4}
                            fontWeight="400"
                        >
                            {s.description}
                        </Text>
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
                            color="rgba(200,80,30,0.9)"
                            textDecoration="underline"
                            textUnderlineOffset="4px"
                            textDecorationColor="rgba(200,80,30,0.6)"
                        >
                            LEARN MORE <FiArrowRight size={11} />
                        </Flex>
                    </motion.div>
                </Box>
            ))}
        </Box>
    );
}

// ─── DESKTOP: original scroll-animated layout (untouched) ────────────────────
function DesktopServicesSection() {
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
    const subtitleY = useTransform(scrollYProgress, [0, 0.16], [30, 0]);
    const headingLeft = useTransform(scrollYProgress, [0.32, 0.58], ["50%", "6%"]);
    const headingTranslateX = useTransform(scrollYProgress, [0.32, 0.58], ["-50%", "0%"]);
    const headingTop = useTransform(scrollYProgress, [0.32, 0.58], ["50%", "18%"]);
    const headingTranslateY = useTransform(scrollYProgress, [0.32, 0.58], ["-50%", "0%"]);
    const headingScale = useTransform(scrollYProgress, [0.32, 0.58], [1, 0.62]);

    const leftOpacity = useTransform(scrollYProgress, [0.52, 0.66], [0, 1]);
    const leftY = useTransform(scrollYProgress, [0.52, 0.66], [24, 0]);

    const rightOpacity = useTransform(scrollYProgress, [0.38, 0.55], [0, 1]);
    const rightX = useTransform(scrollYProgress, [0.38, 0.58], [80, 0]);

    const ourServicesColors = {
        4: "linear-gradient(135deg, red, red)",
    };

    return (
        <Box ref={containerRef} h="250vh" position="relative">
            <Box position="sticky" top="0" h="100vh" overflow="hidden" bg="#f0f0f0">
                <Box
                    position="absolute"
                    top="10%"
                    left="50%"
                    w="1px"
                    h="80%"
                    bg="rgba(0,0,0,0.1)"
                    zIndex={6}
                />

                <MotionBox
                    position="absolute"
                    zIndex={10}
                    style={{
                        left: headingLeft,
                        top: headingTop,
                        x: headingTranslateX,
                        y: headingTranslateY,
                        scale: headingScale,
                        transformOrigin: "left center",
                    }}
                >
                    <ColoredText
                        text="Our Services"
                        coloredIndices={ourServicesColors}
                        fontSize={{ base: "6xl", md: "8xl", lg: "9xl" }}
                        fontWeight="700"
                        fontFamily="'Playfair Display', serif"
                        color="gray.900"
                        lineHeight="1"
                    />
                </MotionBox>

                <MotionBox
                    position="absolute"
                    top="calc(50% + 80px)"
                    left="0"
                    w="100%"
                    zIndex={9}
                    style={{ opacity: subtitleOpacity, y: subtitleY }}
                    textAlign="center"
                >
                    <Text fontSize="lg" fontWeight="600" color="black" letterSpacing="0.02em">
                        Driven innovation · Empowering lives with AI driven intelligence
                    </Text>
                </MotionBox>

                <MotionBox
                    position="absolute"
                    top="30%"
                    left={{ base: "5%", md: "6%" }}
                    zIndex={8}
                    style={{ opacity: leftOpacity, y: leftY }}
                >
                    <ColoredText
                        text="Redefining possibilities"
                        coloredIndices={{ 0: "linear-gradient(135deg, red, red)" }}
                        fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                        fontWeight="700"
                        fontFamily="'Playfair Display', serif"
                        color="gray.900"
                        lineHeight="1.8"
                    />
                    <ColoredText
                        text="across the globe"
                        fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                        fontWeight="700"
                        fontFamily="'Playfair Display', serif"
                        color="gray.900"
                        lineHeight="1.8"
                    />
                    <Flex
                        as="a"
                        href="#"
                        align="center"
                        gap={1.5}
                        mt={8}
                        fontSize="lg"
                        fontWeight="700"
                        letterSpacing="0.12em"
                        textTransform="uppercase"
                        w="fit-content"
                        color="red"
                        _hover={{ gap: "10px" }}
                        transition="gap 0.2s ease"
                        cursor="pointer"
                        textDecoration="underline"
                        textUnderlineOffset="4px"
                        textDecorationColor="rgba(200,80,30,0.6)"
                    >
                        GET IN TOUCH <FiArrowRight size={11} />
                    </Flex>
                </MotionBox>

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
                    justifyContent="flex-start"
                    pt={{ base: "80px", md: "100px" }}
                    zIndex={7}
                    style={{ x: rightX, opacity: rightOpacity }}
                    sx={{
                        "&::-webkit-scrollbar": { display: "none" },
                        scrollbarWidth: "none",
                    }}
                >
                    {servicesData.map((s, i) => (
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

// ─── EXPORT: render mobile or desktop based on breakpoint ────────────────────
export default function ServicesSection() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
            {isMobile ? <MobileServicesSection /> : <DesktopServicesSection />}
        </>
    );
}