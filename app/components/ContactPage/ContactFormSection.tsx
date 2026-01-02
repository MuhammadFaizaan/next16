'use client';

import {
    Box, Container, Grid, GridItem, Heading, Text, VStack,
    FormControl, FormLabel, Input, Textarea, Select,
    FormErrorMessage, useToast, Icon, Flex, HStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from 'react-google-recaptcha';

const contactInfo = [
    { icon: FiMail, title: "Email Us", detail: "muh.faizaan@gmail.com", href: "mailto:muh.faizaan@gmail.com" },
    { icon: FiPhoneCall, title: "Call Us", detail: "+1 929-624-8820", href: "tel:+19296248820" },
    { icon: FiMapPin, title: "Our Office", detail: "Silver Square, G-11, Islamabad", href: "#" }
];

const serviceOptions = [
    { value: 'tokenization', label: 'Tokenization of RWAs' },
    { value: 'smartContracts', label: 'Smart Contracts' },
    { value: 'blockchainInfra', label: 'Blockchain Infrastructure' },
    { value: 'aiAssistants', label: 'AI Assistants' },
    { value: 'llmIntegration', label: 'LLM Integration' },
];

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        fullName: '', email: '', contact: '', service: '', message: ''
    });
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef<any>(null);
    const toast = useToast();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev: any) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors: any = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Required';
        if (!formData.email.trim()) newErrors.email = 'Required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid';
        if (!formData.contact.trim()) newErrors.contact = 'Required';
        if (!formData.service) newErrors.service = 'Required';
        if (!formData.message.trim()) newErrors.message = 'Required';
        if (!captchaVerified) newErrors.recaptcha = 'Verify reCAPTCHA';
        return newErrors;
    };

    const handleSubmit = async (e: any) => {
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
                body: JSON.stringify({ ...formData, services: [formData.service] }),
            });

            if (response.ok) {
                toast({ title: "Message sent!", status: "success", duration: 5000, isClosable: true });
                setFormData({ fullName: '', email: '', contact: '', service: '', message: '' });
                if (recaptchaRef.current) recaptchaRef.current.reset();
                setCaptchaVerified(false);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            toast({ title: "Error", description: "Failed to send message.", status: "error", duration: 5000 });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box py={{ base: 20, md: 32 }} bg="gray.50">
            <Container maxW="container.xl">
                <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={16} alignItems="start">
                    {/* Left Column: Info */}
                    <VStack align="flex-start" spacing={10}>
                        <VStack align="flex-start" spacing={4}>
                            <Text color="brand-red" fontWeight="700" textTransform="uppercase" letterSpacing="widest">
                                Contact Us
                            </Text>
                            <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800">
                                Ready to get started? <br /> Tell us about your project.
                            </Heading>
                            <Text color="gray.600" fontSize="lg">
                                Our experts are ready to help you build the next big thing.
                                Expect a response within 24 hours.
                            </Text>
                        </VStack>

                        <VStack align="flex-start" spacing={8} w="100%">
                            {contactInfo.map((item, idx) => (
                                <HStack key={idx} spacing={5} align="center">
                                    <Flex
                                        w="54px" h="54px" bg="white" borderRadius="2xl"
                                        align="center" justify="center" shadow="sm" color="brand-red"
                                    >
                                        <Icon as={item.icon} boxSize={6} />
                                    </Flex>
                                    <Box>
                                        <Text fontSize="sm" color="gray.500" fontWeight="600">{item.title}</Text>
                                        <Text fontSize="md" fontWeight="700" color="gray.800">{item.detail}</Text>
                                    </Box>
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Right Column: Form */}
                    <Box
                        bg="white" p={{ base: 8, md: 12 }} borderRadius="40px"
                        shadow="2xl" shadowColor="rgba(0,0,0,0.05)"
                    >
                        <VStack as="form" spacing={6} onSubmit={handleSubmit}>
                            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="100%">
                                <FormControl isRequired isInvalid={!!errors.fullName}>
                                    <FormLabel fontSize="sm" fontWeight="700" color="gray.700">Full Name</FormLabel>
                                    <Input
                                        name="fullName" value={formData.fullName} onChange={handleChange}
                                        placeholder="John Doe" variant="filled" bg="gray.50"
                                        _focus={{ bg: "white", borderColor: "brand-red" }}
                                    />
                                    <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired isInvalid={!!errors.email}>
                                    <FormLabel fontSize="sm" fontWeight="700" color="gray.700">Email Address</FormLabel>
                                    <Input
                                        name="email" type="email" value={formData.email} onChange={handleChange}
                                        placeholder="john@example.com" variant="filled" bg="gray.50"
                                        _focus={{ bg: "white", borderColor: "brand-red" }}
                                    />
                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                                </FormControl>
                            </Grid>

                            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="100%">
                                <FormControl isRequired isInvalid={!!errors.contact}>
                                    <FormLabel fontSize="sm" fontWeight="700" color="gray.700">Phone Number</FormLabel>
                                    <PhoneInput
                                        country={'us'} value={formData.contact}
                                        onChange={(val) => setFormData(prev => ({ ...prev, contact: val }))}
                                        inputStyle={{ width: '100%', height: '40px', background: '#F7FAFC', border: 'none' }}
                                    />
                                    <FormErrorMessage>{errors.contact}</FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired isInvalid={!!errors.service}>
                                    <FormLabel fontSize="sm" fontWeight="700" color="gray.700">Interested In</FormLabel>
                                    <Select
                                        name="service" value={formData.service} onChange={handleChange}
                                        variant="filled" bg="gray.50" placeholder="Select Service"
                                        _focus={{ bg: "white", borderColor: "brand-red" }}
                                    >
                                        {serviceOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                                    </Select>
                                    <FormErrorMessage>{errors.service}</FormErrorMessage>
                                </FormControl>
                            </Grid>

                            <FormControl isRequired isInvalid={!!errors.message}>
                                <FormLabel fontSize="sm" fontWeight="700" color="gray.700">Message</FormLabel>
                                <Textarea
                                    name="message" value={formData.message} onChange={handleChange}
                                    placeholder="Tell us about your project goals..." variant="filled"
                                    bg="gray.50" rows={4} _focus={{ bg: "white", borderColor: "brand-red" }}
                                />
                                <FormErrorMessage>{errors.message}</FormErrorMessage>
                            </FormControl>

                            <Box w="full">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                                    onChange={(token) => setCaptchaVerified(!!token)}
                                />
                            </Box>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    borderRadius: '16px',
                                    background: 'linear-gradient(90deg, #FF1313, #E60000)',
                                    color: 'white',
                                    fontWeight: '800',
                                    fontSize: '16px',
                                    boxShadow: '0 10px 20px rgba(255, 19, 19, 0.2)'
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </VStack>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}
