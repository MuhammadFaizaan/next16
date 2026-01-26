'use client'
import React, { useState } from 'react';
import { Box, Image, Text, Flex, HStack, VStack, Heading } from '@chakra-ui/react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaDisplay } from 'react-icons/fa6';
import { HiOutlineServerStack } from 'react-icons/hi2';
import { FaMobileAlt } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import { IoMdCloudOutline } from 'react-icons/io';
import { LuLink } from 'react-icons/lu';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const TechnologyWeUse = () => {
    const [activeTab, setActiveTab] = useState(0);
    const controls = useAnimation();

    const techCategories = [
        {
            name: "Frontend",
            icon: <FaDisplay />,
            icon_black: '/images/web-black.png',
            icon_white: '/images/web-white.png',
            description: "Modern and responsive user interfaces with cutting-edge frameworks",
            technologies: [
                { name: "React", image: "/images/tech-icons/react.png" },
                { name: "Next.js", image: "/images/tech-icons/next.svg" },
                { name: "Angular", image: "/images/tech-icons/angular.png" },
                { name: "Vue.js", image: "/images/tech-icons/vue.png" },
                { name: "TypeScript", image: "/images/tech-icons/typescript.png" },
                { name: "Tailwind CSS", image: "/images/tech-icons/tailwind.png" },
            ]
        },
        {
            name: "Backend",
            icon: <HiOutlineServerStack />,
            icon_black: '/images/backend-black.png',
            icon_white: '/images/backend-white.png',
            description: "Robust server-side solutions that power your applications",
            technologies: [
                { name: "Node.js", image: "/images/tech-icons/node.webp" },
                { name: "Express", image: "/images/tech-icons/express.png" },
                { name: "Django", image: "/images/tech-icons/django.png" },
                { name: "Flask", image: "/images/tech-icons/flask.png" },
                { name: "Spring Boot", image: "/images/tech-icons/springboot.png" },
                { name: "ASP.NET Core", image: "/images/tech-icons/asp.png" },
            ]
        },
        {
            name: "Mobile",
            icon: <FaMobileAlt />,
            icon_black: '/images/mobile-black.png',
            icon_white: '/images/mobile-white.png',
            description: "Cross-platform and native mobile application development",
            technologies: [
                { name: "React Native", image: "/images/tech-icons/react.png" },
                { name: "Flutter", image: "/images/tech-icons/flutter.png" },
                { name: "Swift", image: "/images/tech-icons/swift.png" },
                { name: "Kotlin", image: "/images/tech-icons/kotlin.png" },
                { name: "Ionic", image: "/images/tech-icons/ionic.png" },
                { name: "Xamarin", image: "/images/tech-icons/xamarin.png" },
            ]
        },
        {
            name: "Database",
            icon: <FiDatabase />,
            icon_black: '/images/db-black.png',
            icon_white: '/images/db-white.png',
            description: "Scalable data storage solutions for any requirement",
            technologies: [
                { name: "MongoDB", image: "/images/tech-icons/mongodb.png" },
                { name: "PostgreSQL", image: "/images/tech-icons/postgresql.png" },
                { name: "MySQL", image: "/images/tech-icons/mysql.png" },
                { name: "Firebase", image: "/images/tech-icons/firebase.png" },
                { name: "Redis", image: "/images/tech-icons/redis.png" },
                { name: "Elasticsearch", image: "/images/tech-icons/elasticsearch.png" },
            ]
        },
        {
            name: "Cloud",
            icon: <IoMdCloudOutline />,
            icon_black: '/images/cloud-black.png',
            icon_white: '/images/cloud-white.png',
            description: "Cloud-native architecture and deployment solutions",
            technologies: [
                { name: "AWS", image: "/images/tech-icons/aws.webp" },
                { name: "Azure", image: "/images/tech-icons/azure.jpeg" },
                { name: "Google Cloud", image: "/images/tech-icons/claud.jpeg" },
                { name: "Vercel", image: "/images/tech-icons/vercel.png" },
                { name: "Netlify", image: "/images/tech-icons/netlify.png" },
                { name: "DigitalOcean", image: "/images/tech-icons/digitalocean.png" },
            ]
        },
        {
            name: "AI",
            icon: <LuLink />,
            icon_black: '/images/ai-black.png',
            icon_white: '/images/ai-white.png',
            description: "Distributed network for elastic AI compute and tokenized machine learning resources",
            technologies: [
                { name: "OpenAI", image: "/images/tech-icons/openai.svg" },
                { name: "Eleven Labs", image: "/images/tech-icons/elevenlabs.webp" },
                { name: "LangChain", image: "/images/tech-icons/langchain.png" },
                { name: "Mistral", image: "/images/tech-icons/mistral.png" },
                { name: "Ray", image: "/images/tech-icons/ray.png" },
                { name: "Pytorch", image: "/images/tech-icons/pytorch.png" },
            ]
        },
        {
            name: "Blockchain",
            icon: <LuLink />,
            icon_black: '/images/blockchain-black.png',
            icon_white: '/images/blockchain-white.png',
            description: "Secure blockchain platforms for tokenization and smart contracts",
            technologies: [
                { name: "Solana", image: "/images/tech-icons/solana.png" },
                { name: "Ethereum", image: "/images/tech-icons/ethereum.png" },
                { name: "Polygon", image: "/images/tech-icons/polygon.png" },
                { name: "XRPL", image: "/images/tech-icons/xrpl.png" },
                { name: "Metaplex", image: "/images/tech-icons/metaplex.svg" },
                { name: "Chainlink", image: "/images/tech-icons/chainlink.png" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const hexagonPoints = "18.86, 0, 56.57, 0, 75.43, 32.5, 56.57, 65, 18.86, 65, 0, 32.5";

    const handleTabClick = (index) => {
        controls.start({
            scale: [1, 0.97, 1],
            transition: { duration: 0.4 }
        });
        setActiveTab(index);
    };

    return (
        <MotionBox
            className='container-wrapper pt-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Box className='max-w-[1400px] mx-auto'>
                <MotionBox
                    mb={16}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <MotionText className='text-dark-300 text-[15px] lg:text-[20px]'>
                        <span className='text-brand-red'>/</span> technology <span className='text-brand-red'>/</span>
                    </MotionText>
                    <MotionHeading className='text-dark-300 !text-[28px] md:!text-[40px] xl:!text-[60px] md:max-w-[60%] font-sora tracking-tighter leading-tight'>
                        Technology We Use
                    </MotionHeading>
                    <MotionText className='text-dark-300/80 mt-6 md:max-w-[60%]'>
                        Our team leverages cutting-edge technologies across multiple stacks to build robust,
                        scalable, and innovative solutions tailored to your specific business needs.
                    </MotionText>
                </MotionBox>

                <Box position="relative" my={10}>
                    <Box
                        position="absolute"
                        height="3px"
                        bg="gray.100"
                        top="50%"
                        left="0"
                        right="0"
                        transform="translateY(-50%)"
                        zIndex={0}
                        display={{ base: "none", md: "block" }}
                    />

                    <Flex
                        justify="space-between"
                        align="center"
                        position="relative"
                        zIndex={1}
                        mb={20}
                        mx={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        {techCategories.map((category, index) => (
                            <VStack key={index} spacing={2} align="center" width="120px">
                                <MotionBox
                                    position="relative"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleTabClick(index)}
                                    cursor="pointer"
                                >
                                    <svg
                                        width="76"
                                        height="66"
                                        viewBox="0 0 76 66"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <motion.polygon
                                            points={hexagonPoints}
                                            fill={activeTab === index ? "#E53E3E" : "white"}
                                            stroke={activeTab === index ? "#E53E3E" : "#E2E8F0"}
                                            strokeWidth="2"
                                            initial={false}
                                            animate={{
                                                fill: activeTab === index ? "#E53E3E" : "white",
                                                stroke: activeTab === index ? "#E53E3E" : "#E2E8F0"
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </svg>

                                    {/* Icon in center */}
                                    {/* <MotionText
                                        position="absolute"
                                        top="22%"
                                        left="32%"
                                        transform="translate(-45%, -45%)"
                                        fontSize="24px"
                                        animate={{ 
                                            y: [0, -5, 0],
                                            transition: {
                                                repeat: activeTab === index ? Infinity : 0,
                                                repeatDelay: 1.5,
                                                duration: 1
                                            }
                                        }}
                                    >
                                        
                                    </MotionText> */}
                                    {
                                        activeTab === index ?
                                            <Image src={category.icon_white} alt={category.name} width={8} height={8} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                            :
                                            <Image src={category.icon_black} alt={category.name} width={8} height={8} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                    }
                                    {/* <span className={`absolute top-1/2 left-1/2 text-[1.5rem] -translate-x-1/2 -translate-y-1/2 ${activeTab === index ? 'text-white' : 'text-black'}`}>

                                        {category.icon}
                                    </span> */}
                                </MotionBox>

                                <MotionText
                                    textAlign="center"
                                    fontWeight={activeTab === index ? "600" : "400"}
                                    color={activeTab === index ? "brand-red" : "dark.300"}
                                    initial={false}
                                    animate={{
                                        scale: activeTab === index ? 1.1 : 1,
                                        color: activeTab === index ? "#E53E3E" : "#1A202C"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {category.name}
                                </MotionText>
                            </VStack>
                        ))}
                    </Flex>

                    {/* Mobile tab navigation */}
                    <Box
                        display={{ base: "block", md: "none" }}
                        mb={10}
                    >
                        <HStack
                            spacing={1}
                            overflowX="auto"
                            pb={4}
                            className="no-scrollbar"
                        >
                            {techCategories.map((category, index) => (
                                <MotionBox
                                    key={index}
                                    onClick={() => handleTabClick(index)}
                                    cursor="pointer"
                                    bg={activeTab === index ? "brand-red" : "gray.100"}
                                    color={activeTab === index ? "white" : "dark.300"}
                                    px={5}
                                    py={3}
                                    borderRadius="full"
                                    fontSize="sm"
                                    fontWeight={activeTab === index ? "600" : "400"}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={false}
                                    animate={{
                                        backgroundColor: activeTab === index ? "#E53E3E" : "#EDF2F7",
                                        color: activeTab === index ? "white" : "#1A202C"
                                    }}
                                    transition={{ duration: 0.2 }}
                                    display="flex"
                                    alignItems="center"
                                    flexShrink={0}
                                >
                                    <Text mr={2}>{category.icon}</Text>
                                    <Text>{category.name}</Text>
                                </MotionBox>
                            ))}
                        </HStack>
                    </Box>

                    {/* Active Tab Description */}
                    <MotionBox
                        textAlign="center"
                        mb={10}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatePresence mode="wait">
                            <MotionText
                                key={`desc-${activeTab}`}
                                fontSize="xl"
                                color="dark.300"
                                fontWeight="medium"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {techCategories[activeTab].description}
                            </MotionText>
                        </AnimatePresence>
                    </MotionBox>

                    {/* Technology Content */}
                    <MotionBox
                        animate={controls}
                        className="relative overflow-hidden rounded-2xl"
                        style={{
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                    >
                        {/* Animated background pattern */}
                        <Box
                            className="absolute inset-0 z-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at 20% 30%, rgba(229, 62, 62, 0.05) 0%, transparent 80%), 
                                                 radial-gradient(circle at 80% 70%, rgba(229, 62, 62, 0.07) 0%, transparent 80%)`,
                                backgroundSize: "cover",
                            }}
                        />

                        {/* Content panels */}
                        <AnimatePresence mode="wait">
                            <MotionBox
                                key={`content-${activeTab}`}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={containerVariants}
                                className="relative z-10 p-10 bg-white/80 backdrop-blur-sm"
                                style={{
                                    borderTop: "1px solid rgba(0,0,0,0.05)",
                                    borderLeft: "1px solid rgba(0,0,0,0.05)",
                                }}
                            >
                                <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                    {techCategories[activeTab].technologies.map((tech, techIndex) => (
                                        <MotionBox
                                            key={`tech-${techIndex}`}
                                            variants={itemVariants}
                                            whileHover={{
                                                y: -10,
                                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                                borderColor: "#E53E3E40"
                                            }}
                                            className="bg-white rounded-xl p-6 flex flex-col items-center justify-center"
                                            style={{
                                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
                                                border: "1px solid rgba(0,0,0,0.03)",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}
                                        >
                                            {/* Background circle */}
                                            <Box
                                                position="absolute"
                                                top="-20px"
                                                right="-20px"
                                                width="80px"
                                                height="80px"
                                                borderRadius="full"
                                                bg="red.50"
                                                opacity={0.6}
                                                zIndex={0}
                                            />

                                            <motion.div
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.2 + techIndex * 0.05 }}
                                                style={{ zIndex: 1 }}
                                            >
                                                <Image
                                                    src={tech.image}
                                                    alt={tech.name}
                                                    boxSize={{ base: "50px", md: "70px" }}
                                                    objectFit="contain"
                                                    mb={4}
                                                />
                                            </motion.div>
                                            <MotionText
                                                className="text-dark-300 font-medium text-center"
                                                fontSize={{ base: 'md', md: 'lg' }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3 + techIndex * 0.05 }}
                                                zIndex={1}
                                            >
                                                {tech.name}
                                            </MotionText>
                                        </MotionBox>
                                    ))}
                                </motion.div>
                            </MotionBox>
                        </AnimatePresence>
                    </MotionBox>
                </Box>
            </Box>
        </MotionBox>
    );
};

export default TechnologyWeUse;