
export default function Sidebar({ isOpen, onClose }) {
    const sidebarRef = useRef(null);

    // Handle click outside to close sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const sidebarVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            x: '-100%',
            opacity: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.3
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <>
            {/* Overlay */}
            <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={onClose}
            />

            {/* Sidebar */}
            <motion.aside
                ref={sidebarRef}
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-0 left-0 z-50 h-full w-full max-w-xs glassmorphism"
            >
                <Box p={6} h="full">
                    <Flex justify="space-between" align="center" mb={8}>
                        <Link href="/">
                            <div className="relative w-24">
                                <Image
                                    width={100}
                                    height={100}
                                    src="/images/logo-light.png"
                                    alt="NextChainX - AI and Blockchain Engineering Company"
                                    className="w-full h-auto"
                                />
                            </div>
                        </Link>
                        <IconButton
                            aria-label="Close menu"
                            icon={<FiX size={24} />}
                            variant="ghost"
                            onClick={onClose}
                            color="white"
                        />
                    </Flex>

                    <VStack spacing={4} align="stretch" mb={8}>
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.name}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    className="block font-manrope text-lg py-2 hover:text-brand-red transition-colors"
                                    onClick={onClose}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </VStack>

                    <Divider my={6} borderColor="rgba(255,255,255,0.1)" />

                    <Box mb={8}>
                        <Text className="font-sora font-bold text-lg mb-4">Contact Info</Text>
                        <VStack spacing={4} align="flex-start">
                            <HStack>
                                <FiMail className="text-brand-red" />
                                <Text className="font-manrope">official@nextchainx.io</Text>
                            </HStack>
                            <HStack>
                                <FiPhoneCall className="text-brand-red" />
                                <Text className="font-manrope">+44-7366272330</Text>
                            </HStack>
                            <HStack alignItems="flex-start">
                                <FiMapPin className="text-brand-red mt-1" />
                                <Text className="font-manrope">25 Mann Island, Liverpool, England, L3 1BP</Text>
                            </HStack>
                        </VStack>
                    </Box>

                    <Box>
                        <Text className="font-sora font-bold text-lg mb-4">Follow Us</Text>
                        <HStack spacing={4}>
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-dark-300 p-2 rounded-full hover:bg-brand-red transition-colors duration-300"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </HStack>
                    </Box>
                </Box>
            </motion.aside>
        </>
    );
}