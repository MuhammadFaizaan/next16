

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
    useToast
} from '@chakra-ui/react';
// import { Select } from 'chakra-react-select';
import {
    FiX,
    FiMail,
    FiPhoneCall,
    FiMapPin
} from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";

const contactInfo = [
    { icon: <FiMail size={20} />, text: 'official@nextchainx.io', link: 'mailto:official@nextchainx.io' },
    { icon: <FiPhoneCall size={20} />, text: '+44-7366272330', link: 'tel:+447366272330' },
    { icon: <FiMapPin size={20} />, text: ' 25 Mann Island, Liverpool, England, L3 1BP', link: '#' }
];

const socialLinks = [
    { icon: <FaFacebook size={20} />, href: 'https://www.facebook.com/nextchainx', label: 'Facebook' },
    { icon: <FaXTwitter size={20} />, href: 'https://x.com/ncx_global', label: 'Twitter' },
    { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/nextchainx', label: 'Instagram' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/company/nextchainx', label: 'LinkedIn' }
];

// Service options for the select dropdown
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
    { value: 'aiAgentAutomation', label: 'AI Agent Automation for Customer Support and Workflow Ops' },
    { value: 'dapps', label: 'Decentralized Applications on Solana, Ethereum, BSC, and more' },
    { value: 'daoTools', label: 'DAO Creation & Governance Tools' },
    { value: 'crossChainBridges', label: 'Cross-chain Bridges & Interoperability' },
    { value: 'didSystems', label: 'Decentralized Identity (DID) Systems' },
];

export default function ContactPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contact: '',
        services: [],
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
            stop(); // Stop Lenis scrolling
        } else {
            start(); // Resume Lenis scrolling
        }

        return () => {
            start(); // Ensure scrolling is resumed if component unmounts
        };
    }, [isOpen, stop, start]);

    const columnTemplate = useBreakpointValue({
        base: "1fr",
        lg: "2fr 3fr"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleServicesChange = (selectedOptions) => {
        setFormData({
            ...formData,
            services: selectedOptions
        });

        // Clear error when user selects options
        if (errors.services) {
            setErrors({
                ...errors,
                services: ''
            });
        }
    };

    // Handle reCAPTCHA verification
    const handleCaptchaChange = (token) => {
        // If token exists, reCAPTCHA was verified
        setCaptchaVerified(!!token);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // if (!formData.contact.trim()) {
        //     newErrors.contact = 'Contact number is required';
        // } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.contact)) {
        //     newErrors.contact = 'Contact number is invalid';
        // }

        if (!formData.contact.trim()) {
            newErrors.contact = 'Contact number is required';
        }

        if (formData.services.length === 0) {
            newErrors.services = 'Please select at least one service';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        if (!captchaVerified) {
            newErrors.recaptcha = 'Please verify that you are not a robot';
        }

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
            // Create submission data
            const submissionData = {
                fullName: formData.fullName,
                email: formData.email,
                contact: formData.contact,
                services: formData.services.map(service => service.label || service),
                message: formData.message
            };

            // Send to your SMTP API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                toast({
                    position: "bottom",
                    duration: 5000,
                    isClosable: true,
                    render: () => (
                        <div className="bg-theme-light text-dark-300 px-4 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-start gap-4 w-full max-w-md mx-auto">
                            <div className="h-10 w-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-lg shrink-0">
                                ✓
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-dark-300">Message sent!</p>
                                <p className="text-sm text-dark-300 mt-1">
                                    We'll get back to you as soon as possible.
                                </p>
                            </div>
                        </div>
                    )
                });

                // Reset form after successful submission
                setFormData({
                    fullName: '',
                    email: '',
                    contact: '',
                    services: [],
                    message: ''
                });

                // Reset reCAPTCHA
                recaptchaRef.current.reset();
                setCaptchaVerified(false);

                // Close popup after successful submission
                onClose();
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            toast({
                position: "bottom",
                duration: 5000,
                isClosable: true,
                render: () => (
                    <div className="bg-brand-red text-white px-4 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-start gap-4 w-full max-w-md mx-auto">
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-brand-red font-bold text-lg shrink-0">
                            !
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold">Error!</p>
                            <p className="text-sm text-white/90 mt-1">
                                Failed to send your message. Please try again.
                            </p>
                        </div>
                    </div>
                )
            });
            console.error("Error sending message:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Modern animated label style
    const floatingLabelStyle = (field) => ({
        position: "absolute",
        transition: "all 0.2s",
        top: formData[field] ? "-10px" : "0px",
        fontSize: formData[field] ? "0.8rem" : "1rem",
        opacity: formData[field] ? 0.7 : 1,
        zIndex: 1,
        pointerEvents: "none",
        marginBottom: "0",
        fontWeight: "normal"
    });

    // Custom styles for chakra-react-select
    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: "0",
            border: "none",
            borderBottom: "1px solid #ddd",
            boxShadow: "none",
            padding: "2px 0",
            backgroundColor: "transparent",
            "&:hover": {
                borderColor: "brand.red"
            }
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "rgba(236, 68, 68, 0.1)", // light red background for tags
            borderRadius: "4px",
            padding: "0 2px"
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "#EC4444", // brand-red color for tag text
            fontWeight: "normal",
            fontSize: "0.8rem"
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "#EC4444",
            "&:hover": {
                backgroundColor: "rgba(236, 68, 68, 0.2)",
                color: "#EC4444"
            }
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#EC4444" : state.isFocused ? "rgba(236, 68, 68, 0.1)" : "transparent",
            color: state.isSelected ? "white" : "inherit",
            "&:hover": {
                backgroundColor: "rgba(236, 68, 68, 0.1)"
            }
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999
        })
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99] flex items-center justify-center p-4 text-theme-light"
                >

                    <div className='xl:flex xl:justify-between xl:gap-2 max-w-6xl xl:min-h-[95vh] xl:max-w-[95vw] max-h-[95vh] overflow-hidden h-full'>
                        <div className='xl:max-w-[95%] h-full overflow-hidden relative'>
                            <IconButton
                                aria-label="Close popup"
                                icon={<FiX size={24} />}
                                position="absolute"
                                top={4}
                                right={4}
                                variant="ghost"
                                zIndex={2}
                                color="white"
                                onClick={onClose}
                                className='hover:text-dark-300 xl:!hidden'
                            />
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="w-full h-full overflow-auto hide-scrollbar rounded-2xl xl:flex xl:items-center xl:justify-center xl:px-20 3xl:px-40 relative bg-[linear-gradient(175deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_75%,rgba(255,19,19,1)_100%)]"
                            >

                                <Image
                                    width={1000}
                                    height={1000}
                                    src={'/images/arc.svg'}
                                    alt='arc'
                                    className='absolute bottom-0 right-0 w-1/2 h-auto scale-y-[-1] scale-x-[-1]'
                                />

                                <Grid templateColumns={columnTemplate} gap={4} className="p-4 md:p-8 lg:p-12 xl:h-full xl:overflow-hidden">
                                    {/* Left Column - Contact Info */}
                                    <GridItem className='h-full'>
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <Heading as="h2" size="2xl" mb={6} className="font-sora bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-purple-500 tracking-tighter mt-10 xl:mt-20">
                                                Get In Touch
                                            </Heading>

                                            <Text mb={8} className="font-manrope">
                                                Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
                                            </Text>

                                            <VStack align="flex-start" spacing={6} mb={8}>
                                                {contactInfo.map((item, index) => (
                                                    <Link key={index} href={item.link}>
                                                        <motion.div
                                                            whileHover={{ x: 5 }}
                                                            className="flex items-start"
                                                        >
                                                            <Box className="text-brand-red mr-4 mt-1">
                                                                {item.icon}
                                                            </Box>
                                                            <Text className="font-manrope">{item.text}</Text>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </VStack>

                                            <Box>
                                                <Text className="font-sora font-bold text-lg mb-4">Follow Us</Text>
                                                <HStack spacing={4}>
                                                    {socialLinks.map((social, index) => (
                                                        <motion.a
                                                            key={index}
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-dark-300 p-3 rounded-full hover:bg-brand-red transition-colors duration-300"
                                                            whileHover={{ y: -5 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            {social.icon}
                                                        </motion.a>
                                                    ))}
                                                </HStack>
                                            </Box>
                                        </motion.div>
                                    </GridItem>

                                    {/* Right Column - Contact Form */}
                                    <GridItem className='h-full overflow-hidden'>
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="bg-theme-light text-dark-300 p-6 rounded-2xl xl:p-10 2xl:px-36 relative h-full overflow-auto hide-scrollbar"
                                            data-lenis-prevent
                                        >
                                            <form onSubmit={handleSubmit}>
                                                <VStack spacing={6}>
                                                    <FormControl isRequired isInvalid={!!errors.fullName} mb={2}>
                                                        <Box position="relative" pt={4}>
                                                            <FormLabel
                                                                htmlFor="fullName"
                                                                className="font-manrope"
                                                                sx={floatingLabelStyle('fullName')}
                                                            >
                                                                Full Name
                                                            </FormLabel>
                                                            <Input
                                                                id="fullName"
                                                                name="fullName"
                                                                value={formData.fullName}
                                                                onChange={handleChange}
                                                                variant="unstyled"
                                                                borderBottom="1px solid"
                                                                borderColor="#ddd"
                                                                borderRadius="0"
                                                                py={2}
                                                                pl={0}
                                                                _hover={{ borderColor: "brand.red" }}
                                                                _focus={{
                                                                    borderColor: "brand.red",
                                                                    boxShadow: "none"
                                                                }}
                                                                className="font-manrope"
                                                                placeholder=""
                                                            />
                                                            <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                                                        </Box>
                                                    </FormControl>

                                                    <FormControl isRequired isInvalid={!!errors.email} mb={2}>
                                                        <Box position="relative" pt={4}>
                                                            <FormLabel
                                                                htmlFor="email"
                                                                className="font-manrope"
                                                                sx={floatingLabelStyle('email')}
                                                            >
                                                                Email
                                                            </FormLabel>
                                                            <Input
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                variant="unstyled"
                                                                borderBottom="1px solid"
                                                                borderColor="#ddd"
                                                                borderRadius="0"
                                                                py={2}
                                                                pl={0}
                                                                _hover={{ borderColor: "brand.red" }}
                                                                _focus={{
                                                                    borderColor: "brand.red",
                                                                    boxShadow: "none"
                                                                }}
                                                                className="font-manrope"
                                                                placeholder=""
                                                            />
                                                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                                                        </Box>
                                                    </FormControl>

                                                    {/* <FormControl isRequired isInvalid={!!errors.contact} mb={2}>
                                                        <Box position="relative" pt={4}>
                                                            <FormLabel
                                                                htmlFor="contact"
                                                                className="font-manrope"
                                                                sx={floatingLabelStyle('contact')}
                                                            >
                                                                Contact Number
                                                            </FormLabel>
                                                            <Input
                                                                id="contact"
                                                                name="contact"
                                                                value={formData.contact}
                                                                onChange={handleChange}
                                                                variant="unstyled"
                                                                borderBottom="1px solid"
                                                                borderColor="#ddd"
                                                                borderRadius="0"
                                                                py={2}
                                                                pl={0}
                                                                _hover={{ borderColor: "brand.red" }}
                                                                _focus={{
                                                                    borderColor: "brand.red",
                                                                    boxShadow: "none"
                                                                }}
                                                                className="font-manrope"
                                                                placeholder=""
                                                            />
                                                            <FormErrorMessage>{errors.contact}</FormErrorMessage>
                                                        </Box>
                                                    </FormControl> */}

                                                    <FormControl isRequired isInvalid={!!errors.contact} mb={2}>
                                                        <Box position="relative" pt={4}>
                                                            <FormLabel
                                                                htmlFor="contact"
                                                                className="font-manrope"
                                                                sx={{
                                                                    position: "absolute",
                                                                    transition: "all 0.2s",
                                                                    top: formData.contact ? "-10px" : "0px",
                                                                    fontSize: formData.contact ? "0.8rem" : "1rem",
                                                                    opacity: formData.contact ? 0.7 : 1,
                                                                    zIndex: 1,
                                                                    pointerEvents: "none",
                                                                    marginBottom: "0",
                                                                    fontWeight: "normal",
                                                                }}
                                                            >
                                                                Contact Number
                                                            </FormLabel>
                                                            <PhoneInput
                                                                country={'us'}
                                                                value={formData.contact}
                                                                onChange={(value) => setFormData({ ...formData, contact: value })}
                                                                inputStyle={{
                                                                    width: "100%",
                                                                    padding: "8px 8px 8px 48px",
                                                                    fontSize: "16px",
                                                                    border: "none",
                                                                    borderBottom: "1px solid #ddd",
                                                                    borderRadius: "0",
                                                                    backgroundColor: "transparent",
                                                                    fontFamily: "var(--font-manrope)",
                                                                }}
                                                                buttonStyle={{
                                                                    border: "none",
                                                                    backgroundColor: "transparent",
                                                                    borderBottom: "1px solid #ddd",
                                                                    borderRadius: "0",
                                                                }}
                                                                containerStyle={{
                                                                    marginBottom: "1rem",
                                                                    marginTop: "1rem",
                                                                }}
                                                                inputProps={{
                                                                    name: 'contact',
                                                                    required: true,
                                                                    id: 'contact',
                                                                }}
                                                            />
                                                            <FormErrorMessage>{errors.contact}</FormErrorMessage>
                                                        </Box>
                                                    </FormControl>

                                                    <FormControl isRequired isInvalid={!!errors.services} mb={2}>
                                                        <Box position="relative" pt={4}>
                                                            <FormLabel
                                                                htmlFor="services"
                                                                className="font-manrope"
                                                                sx={{
                                                                    position: "absolute",
                                                                    transition: "all 0.2s",
                                                                    top: formData.services.length > 0 ? "-10px" : "0px",
                                                                    fontSize: formData.services.length > 0 ? "0.8rem" : "1rem",
                                                                    opacity: formData.services.length > 0 ? 0.7 : 1,
                                                                    zIndex: 1,
                                                                    pointerEvents: "none",
                                                                    marginBottom: "0",
                                                                    fontWeight: "normal"
                                                                }}
                                                            >
                                                                Services
                                                            </FormLabel>
                                                            {/* <Select
                                                                id="services"
                                                                name="services"
                                                                isMulti
                                                                options={serviceOptions}
                                                                value={formData.services}
                                                                onChange={handleServicesChange}
                                                                placeholder=""
                                                                chakraStyles={customSelectStyles}
                                                                className="font-manrope"
                                                            /> */}
                                                            <FormErrorMessage>{errors.services}</FormErrorMessage>
                                                        </Box>
                                                    </FormControl>

                                                    <FormControl isRequired isInvalid={!!errors.message} mb={2}>
                                                        <Box position="relative" pt={4}>
                                                            <FormLabel
                                                                htmlFor="message"
                                                                className="font-manrope"
                                                                sx={floatingLabelStyle('message')}
                                                            >
                                                                Message
                                                            </FormLabel>
                                                            <Textarea
                                                                id="message"
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                variant="unstyled"
                                                                borderBottom="1px solid"
                                                                borderColor="#ddd"
                                                                borderRadius="0"
                                                                py={2}
                                                                pl={0}
                                                                _hover={{ borderColor: "brand.red" }}
                                                                _focus={{
                                                                    borderColor: "brand.red",
                                                                    boxShadow: "none"
                                                                }}
                                                                rows={3}
                                                                resize="vertical"
                                                                className="font-manrope"
                                                                placeholder=""
                                                            />
                                                            <FormErrorMessage>{errors.message}</FormErrorMessage>
                                                        </Box>
                                                    </FormControl>

                                                    {/* reCAPTCHA Component */}
                                                    <FormControl isRequired isInvalid={!!errors.recaptcha} mb={2}>
                                                        <Box w="full" pt={2}>
                                                            <ReCAPTCHA
                                                                ref={recaptchaRef}
                                                                sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                                                                onChange={handleCaptchaChange}
                                                                theme="light"
                                                            />
                                                            <FormErrorMessage>{errors.recaptcha}</FormErrorMessage>
                                                        </Box>
                                                    </FormControl>

                                                    <Box w="full">
                                                        <button
                                                            type="submit"
                                                            disabled={isSubmitting || !captchaVerified} // Disable if submitting or captcha not verified
                                                            className={`min-w-[200px] px-5 py-5 font-semibold text-[14px] rounded-full leading-6 overflow-hidden relative z-10 group transition-all duration-300 text-dark-300 hover:text-white mask-button mask-brand-red ${!captchaVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                        >
                                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                                        </button>
                                                    </Box>
                                                </VStack>
                                            </form>
                                        </motion.div>
                                    </GridItem>
                                </Grid>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300, delay: 0.5 }}
                            className='rounded-3xl relative overflow-hidden z-10 w-[5%] bg-brand-red hidden xl:block bg-[linear-gradient(134deg,#ff1313,#9a0000,#500000,#220000)]'
                        >
                            <Image
                                width={3000}
                                height={2000}
                                src='/images/slim-art.jpg'
                                alt='bg'
                                className='absolute top-0 left-0 w-full h-full object-cover object-top'
                            />

                            <button
                                onClick={onClose}
                                className='absolute top-16 left-0 w-full text-white rotate-90 flex flex-nowrap flex-shrink-0 text-nowrap flex items-center justify-center gap-2 text-[20px]'
                            >
                                <FiX className='text-2xl min-w-8' /> Close
                            </button>
                        </motion.div>
                    </div>


                </motion.div>
            )}
        </AnimatePresence>
    );
}