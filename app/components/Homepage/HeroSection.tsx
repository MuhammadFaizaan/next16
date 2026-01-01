// 'use client';

// import { motion } from 'framer-motion';
// import { Box, Heading, Text, Stack, Flex, Button, Icon } from '@chakra-ui/react';
// import { FiArrowRight } from 'react-icons/fi';

// export default function HeroSection() {
//     return (
//         <Box as="section" position="relative" w="100%" h="100vh" overflow="hidden" bg="black">

//             <Box position="absolute" inset={0} zIndex={0}>
//                 <video
//                     autoPlay loop muted playsInline
//                     style={{ width: '100%', height: '100%', objectCover: 'cover', opacity: 0.7 }}
//                 >
//                     <source src="/images/final_video_2.mp4" type="video/mp4" />
//                 </video>

//                 <Box 
//                     position="absolute" inset={0} 
//                     bgGradient="linear(to-r, blackAlpha.900, blackAlpha.400, transparent)" 
//                 />
//                 <Box 
//                     position="absolute" inset={0} 
//                     bgGradient="linear(to-t, black, transparent)" 
//                 />
//             </Box>

//             <Flex 
//                 position="relative" zIndex={10} h="100%" px={{ base: 6, md: 20 }}
//                 align="center" justify="start"
//             >
//                 <Stack spacing={8} maxW="900px">

//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <Flex align="center" gap={3}>
//                             <Box w="40px" h="1px" bg="brand-red" />
//                             <Text 
//                                 color="whiteAlpha.800" fontWeight="bold" fontSize="xs" 
//                                 letterSpacing="0.2em" textTransform="uppercase"
//                             >
//                                 Next-Gen Enterprise Solutions
//                             </Text>
//                         </Flex>
//                     </motion.div>

//                     <Stack spacing={4}>
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.2 }}
//                         >
//                             <Heading
//                                 as="h1" color="white" lineHeight="1"
//                                 fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
//                                 fontWeight="800" letterSpacing="-0.03em"
//                             >
//                                 AI Synergy. <br />
//                                 <Text as="span" color="whiteAlpha.400">Blockchain Trust.</Text>
//                             </Heading>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 1, delay: 0.5 }}
//                         >
//                             <Text 
//                                 color="whiteAlpha.700" fontSize={{ base: "md", md: "xl" }} 
//                                 maxW="600px" lineHeight="tall" fontWeight="medium"
//                             >
//                                 We engineer digital ecosystems. Specializing in high-performance 
//                                 AI integration and secure blockchain scaling for the modern enterprise.
//                             </Text>
//                         </motion.div>
//                     </Stack>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.8 }}
//                     >
//                         <Flex gap={6} direction={{ base: "column", sm: "row" }}>
//                             <Button
//                                 // onClick={openContactPopup}
//                                 size="lg" px={10} py={8} rounded="full"
//                                 bg="white" color="black" _hover={{ bg: "brand-red", color: "white", transform: "translateY(-2px)" }}
//                                 transition="all 0.3s" fontWeight="bold"
//                             >
//                                 Start a Project
//                             </Button>

//                             <Button
//                                 variant="link" color="white" size="lg" 
//                                 rightIcon={<Icon as={FiArrowRight} />}
//                                 _hover={{ color: "brand-red", textDecoration: "none" }}
//                             >
//                                 View Our Portfolio
//                             </Button>
//                         </Flex>
//                     </motion.div>
//                 </Stack>
//             </Flex>

//             <Box 
//                 position="absolute" inset={0} opacity={0.05} pointerEvents="none"
//                 style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
//             />
//         </Box>
//     );
// }



'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Heading, Text, Stack, Flex, Button, Icon } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { useRef } from 'react';

export default function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <Box
            ref={containerRef}
            as="section"
            position="relative"
            w="100%"
            h="100vh"
            overflow="hidden"
            bg="black"
        >
            {/* Video Background with parallax */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    scale: videoScale
                }}
            >
                <Box position="absolute" inset={0} zIndex={0}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            // opacity: 0.6 
                        }}
                    >
                        <source src="/images/final_video_2.mp4" type="video/mp4" />
                    </video>

                    {/* Enhanced gradients */}
                    <Box
                        position="absolute"
                        inset={0}
                        bgGradient="linear(to-r, blackAlpha.900, blackAlpha.300, transparent)"
                    />
                    <Box
                        position="absolute"
                        inset={0}
                        bgGradient="linear(to-t, blackAlpha.600, transparent)"
                    />

                    {/* Animated accent glow */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            width: '500px',
                            height: '500px',
                            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3), transparent 70%)',
                            filter: 'blur(80px)',
                            transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </Box>
            </motion.div>

            {/* Content */}
            <motion.div style={{ y: textY, opacity }} >
                <Flex
                    mx={'auto'}
                    maxW="1400px"
                    position="relative"
                    zIndex={10}
                    h="100vh"
                    px={{ base: 4, sm: 'auto' }}
                    py={{ base: 20, md: 0 }}
                    align="center"
                    justify={{ base: "center", md: "start" }}
                >
                    <Stack spacing={{ base: 6, md: 8 }} maxW="900px" w="100%">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Flex align="start" gap={3} justify={{ base: "center", md: "start" }}>
                                <Text
                                    color="whiteAlpha.800"
                                    fontWeight="bold"
                                    fontSize={{ base: "2xs", sm: "xs" }}
                                    letterSpacing="0.2em"
                                    textTransform="uppercase"
                                >
                                    Next-Gen Enterprise Solutions
                                </Text>
                            </Flex>
                        </motion.div>

                        {/* Heading */}
                        <Stack spacing={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Heading
                                    as="h1"
                                    color="white"
                                    lineHeight="0.95"
                                    fontSize={{ base: "3xl", sm: "4xl", md: "6xl", lg: "7xl", xl: "8xl" }}
                                    fontWeight="800"
                                    letterSpacing="-0.03em"
                                    textAlign={{ base: "center", md: "left" }}
                                >
                                    <motion.span
                                        style={{ display: 'inline-block' }}
                                        whileHover={{ scale: 1.05, color: '#ef4444' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        AI Synergy.
                                    </motion.span>
                                    <br />
                                    <Text as="span" color="whiteAlpha.400">
                                        Blockchain Trust.
                                    </Text>
                                </Heading>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Text
                                    color="whiteAlpha.700"
                                    fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                                    maxW={{ base: "100%", md: "600px" }}
                                    lineHeight="tall"
                                    fontWeight="medium"
                                    textAlign={{ base: "center", md: "left" }}
                                    px={{ base: 2, md: 0 }}
                                >
                                    We engineer digital ecosystems. Specializing in high-performance
                                    AI integration and secure blockchain scaling for the modern enterprise.
                                </Text>
                            </motion.div>
                        </Stack>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Flex
                                gap={{ base: 4, md: 6 }}
                                direction={{ base: "column", sm: "row" }}
                                align="center"
                                justify={{ base: "center", md: "start" }}
                                w="100%"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ width: '100%', maxWidth: '280px' }}
                                >
                                    <Button
                                        size={{ base: "md", md: "lg" }}
                                        px={{ base: 8, md: 10 }}
                                        py={{ base: 6, md: 8 }}
                                        w="100%"
                                        rounded="full"
                                        bg="white"
                                        color="black"
                                        _hover={{
                                            bg: "brand-red",
                                            color: "white",
                                            transform: "translateY(-2px)",
                                            shadow: "0 10px 40px rgba(239, 68, 68, 0.4)"
                                        }}
                                        transition="all 0.3s"
                                        fontWeight="bold"
                                        position="relative"
                                        overflow="hidden"
                                    >
                                        <motion.span
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)',
                                                opacity: 0
                                            }}
                                            whileHover={{ opacity: 1, scale: 2 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <span style={{ position: 'relative', zIndex: 1 }}>
                                            Start a Project
                                        </span>
                                    </Button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                >
                                    <Button
                                        variant="link"
                                        color="white"
                                        size={{ base: "md", md: "lg" }}
                                        rightIcon={
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <Icon as={FiArrowRight} />
                                            </motion.div>
                                        }
                                        _hover={{ color: "brand-red", textDecoration: "none" }}
                                        fontWeight="semibold"
                                    >
                                        View Our Work
                                    </Button>
                                </motion.div>
                            </Flex>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Flex
                                gap={{ base: 6, sm: 8 }}
                                mt={{ base: 6, md: 8 }}
                                pt={{ base: 6, md: 8 }}
                                borderTop="1px solid"
                                borderColor="whiteAlpha.200"
                                direction={{ base: "row", sm: "row" }}
                                justify={{ base: "space-around", md: "start" }}
                                flexWrap="wrap"
                            >
                                {[
                                    { value: '200+', label: 'Projects' },
                                    { value: '50+', label: 'Clients' },
                                    { value: '99%', label: 'Success Rate' }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Stack spacing={1} align={{ base: "center", md: "start" }}>
                                            <Text
                                                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                                                fontWeight="bold"
                                                color="white"
                                                lineHeight="1"
                                            >
                                                {stat.value}
                                            </Text>
                                            <Text
                                                fontSize={{ base: "2xs", sm: "xs", md: "sm" }}
                                                color="whiteAlpha.600"
                                                textTransform="uppercase"
                                                letterSpacing="wider"
                                            >
                                                {stat.label}
                                            </Text>
                                        </Stack>
                                    </motion.div>
                                ))}
                            </Flex>
                        </motion.div>
                    </Stack>
                </Flex>
            </motion.div>

            {/* Grid overlay */}
            {/* <Box 
                position="absolute" 
                inset={0} 
                opacity={0.03} 
                pointerEvents="none"
                style={{ 
                    backgroundImage: `radial-gradient(circle, white 10000px, transparent 100000px)`, 
                    backgroundSize: '40px 40px' 
                }}
            /> */}

            {/* Scroll indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 20,
                    display: 'none'
                }}
                className="hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <Box
                    w="24px"
                    h="40px"
                    border="2px solid"
                    borderColor="whiteAlpha.100"
                    rounded="full"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="center"
                    p={1}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Box w="4px" h="8px" bg="whiteAlpha.100" rounded="full" />
                    </motion.div>
                </Box>
            </motion.div>
        </Box>
    );
}