'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsTwitterX, BsLinkedin, BsGithub, BsArrowRight } from 'react-icons/bs';

const footerLinks = [
    {
        title: 'Services',
        links: [
            { name: 'Blockchain Development', href: '/services/blockchain-services' },
            { name: 'AI Solutions', href: '/services/ai-services' },
            { name: 'Web Applications', href: '/services/web-app-development-services' },
            { name: 'Mobile Apps', href: '/services/mobile-app-development-services' },
        ]
    },
    {
        title: 'Industries',
        links: [
            { name: 'Fintech', href: '/industries/finance-fintech' },
            { name: 'Real Estate', href: '/industries/real-estate' },
            { name: 'Healthcare', href: '/industries/healthcare' },
            { name: 'Supply Chain', href: '/industries/supply-chain' },
        ]
    },
    {
        title: 'Company',
        links: [
            { name: 'About Us', href: '/about' },
            { name: 'Work', href: '/work' },
            { name: 'Career', href: '/careers' },
            { name: 'Contact', href: '/contact' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'FAQ', href: '/faq' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
        ]
    }
];

// Subtle grid background component for technical texture
const GridPattern = () => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" width="100%" height="100%">
        <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-white" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white pt-0 pb-10 overflow-hidden relative border-t border-neutral-900">
            {/* Background Effects */}
            <GridPattern />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-800/5 blur-[120px] rounded-full pointer-events-none" />


            <div className="max-w-[1400px] mx-auto px-6 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-8 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                NextChain<span className="text-red-600 text-3xl">X</span>
                            </span>
                        </Link>
                        <p className="text-neutral-400 text-base leading-relaxed max-w-sm">
                            We architect distinct digital products at the intersection of Blockchain technology and Artificial Intelligence.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: BsTwitterX, href: '#' },
                                { icon: BsLinkedin, href: '#' },
                                { icon: BsGithub, href: '#' }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-sm"
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section, idx) => (
                        <div key={section.title} className="space-y-6">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider opacity-90">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors text-[15px] block py-1 group flex items-center gap-2"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
                    <p>© {new Date().getFullYear()} NextChainX. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms</Link>
                        <Link href="/sitemap" className="hover:text-neutral-300 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;