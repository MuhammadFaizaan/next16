// @ts-nocheck
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroller } from '../ScrollContext/ScrollContext';
import ReCAPTCHA from 'react-google-recaptcha';
import {
    Box,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormErrorMessage,
    IconButton,
    useBreakpointValue,
    useToast,
    Icon,
    Flex,
    Select
} from '@chakra-ui/react';
import {
    FiX,
    FiMail,
    FiPhoneCall,
    FiMapPin
} from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";

const contactInfo = [
    { icon: <FiMail size={20} />, text: 'muh.faizaan@gmail.com', link: 'mailto:muh.faizaan@gmail.com' },
    { icon: <FiPhoneCall size={20} />, text: '+1 9296248820', link: 'tel:+19296248820' },
    { icon: <FiMapPin size={20} />, text: '25 Mann Island, Liverpool, England, L3 1BP', link: '#' }
];

const socialLinks = [
    { icon: <FaFacebook size={18} />, href: 'https://www.facebook.com/nextchainx', label: 'Facebook' },
    { icon: <FaXTwitter size={18} />, href: 'https://x.com/ncx_global', label: 'Twitter' },
    { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/nextchainx', label: 'Instagram' },
    { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/company/nextchainx', label: 'LinkedIn' }
];

const serviceOptions = [
    { value: 'tokenization', label: 'Tokenization of Real World Assets (RWAs)' },
    { value: 'smartContracts', label: 'Smart Contracts (Solidity, Rust, Move)' },
    { value: 'blockchainInfra', label: 'Layer 1 & Layer 2 Blockchain Infrastructure' },
    { value: 'nftMarketplaces', label: 'NFT Marketplaces & Launchpads' },
    { value: 'walletDevelopment', label: 'Wallet & DeFi Protocol Development' },
    { value: 'aiAssistants', label: 'AI Assistants for Legal, Medical, Automotive, and Business domains' },
    { value: 'llmIntegration', label: 'Large Language Model (LLM) Integration' },
    { value: 'chatbotTraining', label: 'Custom Chatbot Training (RAG, Fine-tuning, Embedding)' },
    { value: 'aiDocumentSystems', label: 'AI Document Search & Summarization Systems' },
];

export default function ContactPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contact: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef(null);
    const toast = useToast();
    const { stop, start } = useSmoothScroller();

    useEffect(() => {
        if (isOpen) {
            stop();
        } else {
            start();
        }
    }, [isOpen, stop, start]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleCaptchaChange = (token) => {
        setCaptchaVerified(!!token);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
        if (!formData.service) newErrors.service = 'Please select a service';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!captchaVerified) newErrors.recaptcha = 'Please verify that you are not a robot';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    services: [formData.service]
                }),
            });

            const result = await response.json();
            if (response.ok && result.success) {
                toast({
                    title: "Message sent!",
                    description: "We'll get back to you soon.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                });
                setFormData({ fullName: '', email: '', contact: '', service: '', message: '' });
                if (recaptchaRef.current) recaptchaRef.current.reset();
                setCaptchaVerified(false);
                onClose();
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            toast({
                title: "Error!",
                description: "Failed to send message. Please try again.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: 20,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Box
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    position="fixed"
                    inset={0}
                    bg="rgba(66, 66, 66, 0.4)"
                    backdropFilter="blur(12px)"
                    zIndex={100}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={{ base: 4, md: 8 }}
                    onClick={onClose}
                >
                    <Box
                        as={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        maxW="1200px"
                        w="100%"
                        maxH={{ base: "calc(100vh - 40px)", lg: "auto" }}
                        bg="#050505"
                        borderRadius="3xl"
                        overflow={{ base: 'auto', lg: 'hidden' }}
                        boxShadow="0 40px 100px rgba(0,0,0,0.5)"
                        onClick={(e) => e.stopPropagation()}
                        position="relative"
                        display="flex"
                        flexDirection={{ base: 'column', md: 'row' }}
                        css={{
                            '&::-webkit-scrollbar': { display: 'none' },
                            'scrollbar-width': 'none',
                        }}
                    >
                        <Box
                            position="absolute"
                            bottom="-100px"
                            left="50%"
                            transform="translateX(-50%)"
                            w="80%"
                            h="200px"
                            bg="radial-gradient(circle, rgba(255, 19, 19, 0.15) 0%, transparent 70%)"
                            pointerEvents="none"
                            zIndex={0}
                        />

                        <VStack
                            flex="1"
                            p={{ base: 6, md: 10, lg: 16 }}
                            align="flex-start"
                            spacing={{ base: 6, md: 8 }}
                            zIndex={1}
                            bgGradient="linear(to-br, transparent, rgba(255, 19, 19, 0.05))"
                        >
                            <motion.div variants={childVariants}>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                                    fontWeight="700"
                                    bgGradient="linear(to-r, #fff, #fff, #fff)"
                                    bgClip="text"
                                    letterSpacing="-0.03em"
                                    lineHeight="1.1"
                                >
                                    Get In <span className='text-[red]'>T</span>ouch
                                </Heading>
                            </motion.div>

                            <motion.div variants={childVariants}>
                                <Text color="whiteAlpha.700" fontSize={{ base: 'md', md: 'lg' }} maxW="400px">
                                    Have a question? Fill out the form and we'll get back to you soon.
                                </Text>
                            </motion.div>

                            <VStack align="flex-start" spacing={5} w="100%">
                                {contactInfo.map((item, idx) => (
                                    <motion.div key={idx} variants={childVariants} style={{ width: '100%' }}>
                                        <HStack
                                            as={Link}
                                            href={item.link}
                                            spacing={4}
                                            _hover={{ color: '#FF1313' }}
                                            transition="color 0.2s"
                                            color="whiteAlpha.800"
                                            align="center"
                                        >
                                            <Flex
                                                shrink={0}
                                                w={{ base: "32px", md: "40px" }}
                                                h={{ base: "32px", md: "40px" }}
                                                borderRadius="full"
                                                bg="rgba(255, 19, 19, 0.1)"
                                                align="center"
                                                justify="center"
                                                color="#FF1313"
                                            >
                                                {item.icon}
                                            </Flex>
                                            <Text fontSize={{ base: 'sm', md: 'md' }} noOfLines={2}>{item.text}</Text>
                                        </HStack>
                                    </motion.div>
                                ))}
                            </VStack>

                            <motion.div variants={childVariants}>
                                <Box pt={{ base: 2, md: 4 }}>
                                    <Text fontWeight="700" color="white" mb={4} fontSize="lg">Follow Us</Text>
                                    <HStack spacing={4}>
                                        {socialLinks.map((social, idx) => (
                                            <Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer">
                                                <Flex
                                                    w={{ base: "38px", md: "44px" }}
                                                    h={{ base: "38px", md: "44px" }}
                                                    bg="whiteAlpha.100"
                                                    borderRadius="full"
                                                    align="center"
                                                    justify="center"
                                                    color="white"
                                                    _hover={{ bg: '#FF1313', transform: 'translateY(-3px)' }}
                                                    transition="all 0.3s"
                                                >
                                                    {social.icon}
                                                </Flex>
                                            </Link>
                                        ))}
                                    </HStack>
                                </Box>
                            </motion.div>
                        </VStack>

                        <Box
                            flex="1.3"
                            p={{ base: 5, md: 8, lg: 12 }}
                            bg="#F9FAFB"
                            borderRadius={{ base: '2xl', md: '3xl' }}
                            m={{ base: 4, md: 6, lg: 8 }}
                            zIndex={1}
                            color="black"
                        >
                            <motion.form variants={childVariants} onSubmit={handleSubmit}>
                                <VStack spacing={5}>
                                    <FormControl isRequired isInvalid={!!errors.fullName}>
                                        <FormLabel color="gray.500" fontSize="sm" fontWeight="600" mb={1}>Full Name *</FormLabel>
                                        <Input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            variant="flushed"
                                            placeholder="John Doe"
                                            borderColor="gray.200"
                                            _focus={{ borderColor: '#FF1313' }}
                                            py={2}
                                        />
                                        <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!errors.email}>
                                        <FormLabel color="gray.500" fontSize="sm" fontWeight="600" mb={1}>Email *</FormLabel>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            variant="flushed"
                                            placeholder="john@example.com"
                                            borderColor="gray.200"
                                            _focus={{ borderColor: '#FF1313' }}
                                            py={2}
                                        />
                                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!errors.contact}>
                                        <FormLabel color="gray.500" fontSize="sm" fontWeight="600" mb={1}>Contact Number *</FormLabel>
                                        <PhoneInput
                                            country={'us'}
                                            value={formData.contact}
                                            onChange={(val) => setFormData(prev => ({ ...prev, contact: val }))}
                                            inputStyle={{
                                                width: '100%',
                                                height: '42px',
                                                border: 'none',
                                                borderBottom: '1px solid #E2E8F0',
                                                borderRadius: '0',
                                                backgroundColor: 'transparent',
                                                paddingLeft: '48px',
                                            }}
                                            buttonStyle={{
                                                border: 'none',
                                                borderBottom: '1px solid #E2E8F0',
                                                borderRadius: '0',
                                                backgroundColor: 'transparent',
                                            }}
                                            containerStyle={{ marginTop: '4px' }}
                                        />
                                        <FormErrorMessage>{errors.contact}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!errors.service}>
                                        <FormLabel color="gray.500" fontSize="sm" fontWeight="600" mb={1}>Services *</FormLabel>
                                        <Select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            variant="flushed"
                                            placeholder="Select a service"
                                            borderColor="gray.200"
                                            _focus={{ borderColor: '#FF1313' }}
                                        >
                                            {serviceOptions.map(opt => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </Select>
                                        <FormErrorMessage>{errors.service}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!errors.message}>
                                        <FormLabel color="gray.500" fontSize="sm" fontWeight="600" mb={1}>Message *</FormLabel>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            variant="flushed"
                                            placeholder="How can we help you?"
                                            borderColor="gray.200"
                                            _focus={{ borderColor: '#FF1313' }}
                                            rows={2}
                                        />
                                        <FormErrorMessage>{errors.message}</FormErrorMessage>
                                    </FormControl>

                                    <Box w="full" overflow="hidden" py={2} sx={{
                                        '.g-recaptcha': { transform: 'scale(0.85)', transformOrigin: '0 0' },
                                        '@media screen and (max-width: 480px)': {
                                            '.g-recaptcha': { transform: 'scale(0.75)', transformOrigin: '0 0' }
                                        }
                                    }}>
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={process.env.NEXT_PUBLIC_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                                            onChange={handleCaptchaChange}
                                        />
                                        {errors.recaptcha && <Text color="red.500" fontSize="xs" mt={1}>{errors.recaptcha}</Text>}
                                    </Box>

                                    <Box w="full" pt={4}>
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            style={{
                                                width: '100%',
                                                padding: '16px',
                                                borderRadius: 'full',
                                                background: isSubmitting ? '#ccc' : 'linear-gradient(90deg, #FF1313, #E60000)',
                                                color: 'white',
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                boxShadow: '0 10px 20px rgba(255, 19, 19, 0.2)',
                                                transition: 'all 0.3s'
                                            }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </motion.button>
                                    </Box>
                                </VStack>
                            </motion.form>
                        </Box>

                        {/* Desktop Close Button Sidebar */}
                        <Box
                            display={{ base: 'none', lg: 'flex' }}
                            flexDirection="column"
                            w="60px"
                            bg="#FF1313"
                            alignItems="center"
                            position="relative"
                            onClick={onClose}
                            cursor="pointer"
                            _hover={{ bg: '#E60000' }}
                            transition="background 0.2s"
                        >
                            <Image
                                src="/images/slim-art.jpg"
                                alt=""
                                fill
                                style={{ objectFit: 'cover', opacity: 0.2, pointerEvents: 'none' }}
                            />
                            <VStack
                                spacing={2}
                                mt={12}
                                transform="rotate(90deg)"
                                transformOrigin="center"
                                color="white"
                                whiteSpace="nowrap"
                            >
                                <HStack spacing={2}>
                                    <Icon as={FiX} boxSize={5} />
                                    <Text fontWeight="700" fontSize="xl" letterSpacing="0.1em">CLOSE</Text>
                                </HStack>
                            </VStack>
                        </Box>

                        {/* Mobile Close Button */}
                        <IconButton
                            aria-label="Close"
                            icon={<FiX size={24} />}
                            onClick={onClose}
                            variant="ghost"
                            color="white"
                            position="absolute"
                            top={4}
                            right={4}
                            display={{ base: 'flex', lg: 'none' }}
                            _hover={{ bg: 'whiteAlpha.200' }}
                        />
                    </Box>
                </Box>
            )}
        </AnimatePresence>
    );
}