'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBank, BsBuildings, BsTruck, BsHeartPulse, BsController, BsBoundingBoxCircles, BsShieldCheck, BsCpu, BsChevronDown } from 'react-icons/bs';
import { IoLocationOutline, IoCardOutline, IoFlashOutline, IoBriefcaseOutline, IoMenu, IoClose } from 'react-icons/io5';
import { FiLayout, FiAnchor, FiLayers, FiZap, FiSettings, FiBox, FiCpu } from 'react-icons/fi';
import { AiOutlineRobot, AiOutlineGlobal, AiOutlineMobile, AiOutlineCloud, AiOutlineCode, AiOutlineBulb } from 'react-icons/ai';
import { CiGrid41 } from 'react-icons/ci';
import { motion, AnimatePresence } from 'framer-motion';

const industriesItems = [
  { name: 'Finance & Fintech', href: '/industries/finance-fintech', icon: BsBank },
  { name: 'Real Estate & RWA Tokenization', href: '/industries/real-estate', icon: BsBuildings },
  { name: 'Supply Chain & Logistics', href: '/industries/supply-chain', icon: BsTruck },
  { name: 'Healthcare & Life Sciences', href: '/industries/healthcare', icon: BsHeartPulse },
  { name: 'Gaming, Metaverse & NFTs', href: '/industries/gaming-metaverse', icon: BsController },
];

const regionsItems = [
  { name: 'Pakistan', href: '/region/pk', icon: IoLocationOutline },
  { name: 'United States', href: '/region/us', icon: IoLocationOutline },
  { name: 'United Kingdom', href: '/region/uk', icon: IoLocationOutline },
  { name: 'South Africa', href: '/region/za', icon: IoLocationOutline },
];

const serviceCategories = [
  {
    title: "Services Outline",
    icon: FiLayout,
    items: [
      { name: 'Blockchain Services', href: '/services/blockchain-services', icon: FiAnchor },
      { name: 'AI Services', href: '/services/ai-services', icon: AiOutlineRobot },
      { name: 'Web App Developement Services', href: '/services/web-app-development-services', icon: AiOutlineGlobal },
      { name: 'Mobile App Developement Services', href: '/services/mobile-app-development-services', icon: AiOutlineMobile },
      { name: 'Prototyping & MVP', href: '/services/prototyping-and-mvp-services', icon: FiLayers },
    ]
  },
  {
    title: "Custom Blockchain Development",
    icon: AiOutlineCloud,
    items: [
      {
        name: 'Tokenization of Real-World Assets (RWA)',
        href: '/services/blockchain-services/tokenization-of-real-world-assets',
        icon: IoCardOutline
      },
      {
        name: 'Smart Contract Development & Audits',
        href: '/services/blockchain-services/smart-contract-development-audits',
        icon: AiOutlineCode
      },
      {
        name: 'dApp & Web3 Infrastructure',
        href: '/services/blockchain-services/dapp-web3-infrastructure',
        icon: BsBoundingBoxCircles
      },
      {
        name: 'Chain Integrations',
        href: '/services/blockchain-services/chain-integrations',
        icon: FiZap
      },
      {
        name: 'Blockchain Consulting & Security Assessment',
        href: '/services/blockchain-services/blockchain-consulting-security-assessment',
        icon: BsShieldCheck
      },
    ]
  },
  {
    title: "AI-Powered Products",
    icon: AiOutlineRobot,
    items: [
      {
        name: 'Generative AI & Custom LLMs',
        href: '/services/ai-services/generative-ai-custom-llms',
        icon: AiOutlineBulb
      },
      {
        name: 'AI Agents & Voice Interfaces',
        href: '/services/ai-services/ai-agents-voice-interfaces',
        icon: AiOutlineRobot
      },
      {
        name: 'AI + Blockchain Integration',
        href: '/services/ai-services/ai-blockchain-integration',
        icon: FiCpu
      },
      {
        name: 'Data Engineering & MLOps',
        href: '/services/ai-services/data-engineering-mlops',
        icon: FiSettings
      },
      {
        name: 'Mobile AI Solutions',
        href: '/services/ai-services/mobile-ai-solutions',
        icon: AiOutlineMobile
      },
    ]
  },
  {
    title: "Web Application Solutions",
    icon: AiOutlineGlobal,
    items: [
      {
        name: 'Custom Web Applications',
        href: '/services/web-app-development-services/custom-web-applications',
        icon: FiLayout
      },
      {
        name: 'Prototyping & MVP Development',
        href: '/services/web-app-development-services/prototyping-mvp-development',
        icon: FiLayers
      },
      {
        name: 'UI/UX Design & Web Product Strategy',
        href: '/services/web-app-development-services/ui-ux-design-web-product-strategy',
        icon: CiGrid41
      },
      {
        name: 'Full-Stack Engineering',
        href: '/services/web-app-development-services/full-stack-engineering',
        icon: AiOutlineCode
      },
    ]
  },
  {
    title: "Mobile Application Solutions",
    icon: AiOutlineMobile,
    items: [
      {
        name: 'Cross-Platform App Development (Flutter & React Native)',
        href: '/services/mobile-app-development-services/cross-platform-app-development',
        icon: AiOutlineMobile
      },
      {
        name: 'Native App Development (Kotlin & Swift)',
        href: '/services/mobile-app-development-services/native-app-development',
        icon: AiOutlineMobile
      },
      {
        name: 'MVP & Rapid Prototyping',
        href: '/services/mobile-app-development-services/mvp-rapid-prototyping-mobile',
        icon: FiLayers
      },
      {
        name: 'AI-Powered Mobile Features',
        href: '/services/mobile-app-development-services/ai-powered-mobile-features',
        icon: FiZap
      },
    ]
  },
  {
    title: "Prototyping & Mvp",
    icon: FiLayers,
    items: [
      { name: 'Rapid Prototyping', href: '/services/prototyping-and-mvp-services/rapid-prototyping', icon: IoFlashOutline },
      { name: 'Minimum Viable Product (MVP) Development', href: '/services/prototyping-and-mvp-services/mvp-development', icon: FiBox },
      { name: 'Product Strategy & UX Architecture', href: '/services/prototyping-and-mvp-services/product-strategy-ux-architecture', icon: IoBriefcaseOutline },
      { name: 'Scalable Engineering for Future Growth', href: '/services/prototyping-and-mvp-services/scalable-engineering-future-growth', icon: BsCpu },
    ]
  }
];

const navLinks = [
  { name: 'Services', href: '/services', megaMenu: true },
  { name: 'Industries', href: '/#industries', dropdown: 'industries' },
  { name: 'Work', href: '/work' },
  { name: 'Career', href: '/careers' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Regions', href: '/region/pk', dropdown: 'regions' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileAccordion = (name: string) => {
    setOpenMobileAccordion(openMobileAccordion === name ? null : name);
  };

  return (
    <div className="relative">
      <header className={`fixed top-0 left-0 z-50 transition-all duration-500 w-full`}>
        <div className={`mx-auto transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-[1400px] mt-4' : 'max-w-full mt-0'}`}>
          <div
            className={`bg-white/80 backdrop-blur-xl flex items-center justify-between gap-x-4 py-3 px-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 transition-all duration-300 ${isScrolled ? 'rounded-full' : 'rounded-b-2xl'}`}
          >
            {/* Logo */}
            <div className="flex items-center gap-x-8">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-xl font-bold text-black">
                  NextChain<span className="font-senibold tracking-tighter text-2xl text-red-600">X</span>
                </span>
              </Link>

              <div className="hidden h-6 w-[1px] bg-neutral-200 lg:block"></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setHoveredMenu(link.name)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[15px] font-medium transition-all ${hoveredMenu === link.name ? 'text-blue-600 bg-blue-50' : 'text-neutral-600 hover:text-blue-600'
                        }`}
                    >
                      {link.name}
                      {(link.megaMenu || link.dropdown) && (
                        <BsChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredMenu === link.name ? 'rotate-180' : ''}`} />
                      )}
                    </Link>

                    {/* Mega Menu - Services */}
                    {link.megaMenu && (
                      <AnimatePresence>
                        {hoveredMenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[1100px]"
                          >
                            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-neutral-100 p-10 grid grid-cols-3 gap-x-12 gap-y-12">
                              {serviceCategories.map((category) => (
                                <div key={category.title} className="space-y-6">
                                  <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-blue-600">
                                      <category.icon size={24} />
                                    </div>
                                    <h3 className="text-[17px] font-bold text-neutral-900 tracking-tight">{category.title}</h3>
                                  </div>
                                  <ul className="space-y-4">
                                    {category.items.map((item) => (
                                      <li key={item.name}>
                                        <Link
                                          href={item.href}
                                          className="flex items-center gap-3.5 text-neutral-500 hover:text-blue-600 transition-all group/item px-2 py-1 -ml-2 rounded-xl hover:bg-neutral-50"
                                        >
                                          <div className="p-2 rounded-lg bg-neutral-50 group-hover/item:bg-white group-hover/item:shadow-sm transition-all text-neutral-400 group-hover/item:text-blue-500">
                                            <item.icon size={18} />
                                          </div>
                                          <span className="text-[14.5px] font-medium leading-tight">{item.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Dropdown - Industries & Regions */}
                    {link.dropdown && (
                      <AnimatePresence>
                        {hoveredMenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-0 top-full pt-4 w-64"
                          >
                            <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-3">
                              {(link.dropdown === 'industries' ? industriesItems : regionsItems).map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/drop"
                                >
                                  <div className="text-neutral-400 group-hover/drop:text-blue-500 transition-colors">
                                    <item.icon size={18} />
                                  </div>
                                  <span className="text-sm font-medium text-neutral-700 group-hover/drop:text-blue-600">{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA and Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:flex px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-600 !text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-red-200 transition-all hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
              <button
                className="lg:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[40]"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-full w-[85%] sm:w-[400px] bg-white z-[50] shadow-2xl p-8 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    NextChainX
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-xl transition-colors"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.megaMenu || link.dropdown ? (
                        <div className="flex flex-col">
                          <button
                            onClick={() => toggleMobileAccordion(link.name)}
                            className="flex items-center justify-between px-4 py-4 text-lg font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
                          >
                            {link.name}
                            <BsChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMobileAccordion === link.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openMobileAccordion === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-neutral-50 rounded-2xl mx-2"
                              >
                                <div className="p-4 space-y-4">
                                  {link.megaMenu ? (
                                    serviceCategories.map(cat => (
                                      <div key={cat.title} className="space-y-3">
                                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-2">{cat.title}</p>
                                        {cat.items.map(item => (
                                          <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-600 hover:text-blue-600 font-medium"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                          >
                                            <item.icon size={16} />
                                            {item.name}
                                          </Link>
                                        ))}
                                      </div>
                                    ))
                                  ) : (
                                    (link.dropdown === 'industries' ? industriesItems : regionsItems).map(item => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-600 hover:text-blue-600 font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        <item.icon size={16} />
                                        {item.name}
                                      </Link>
                                    ))
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="block px-4 py-4 text-lg font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-10 border-t border-neutral-100">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;