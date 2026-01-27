"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";

type Category = "All" | "General" | "Services" | "Pricing" | "Technical";
const categories: Category[] = ["All", "General", "Services", "Pricing", "Technical"];

const faqs = [
    {
        category: "General",
        question: "How do I get started with your agency?",
        answer: "Getting started is simple. Reach out to us via our contact form or book a discovery call. We'll discuss your project requirements, timeline, and budget to determine the best path forward."
    },
    {
        category: "Services",
        question: "What specific technologies do you specialize in?",
        answer: "We specialize in modern web and mobile stacks, primarily React, Next.js, Node.js, and React Native. For enterprise solutions, we also leverage cloud architectures on AWS and Google Cloud."
    },
    {
        category: "Pricing",
        question: "What is your typical payment structure?",
        answer: "We generally operate with a 50% deposit to commence work, with the remaining balance due upon project completion and approval. For larger projects, we can discuss milestone-based payments."
    },
    {
        category: "Technical",
        question: "Do you provide hosting and maintenance?",
        answer: "Yes, we offer comprehensive hosting and maintenance packages to ensure your application remains secure, fast, and up-to-date after launch."
    },
    {
        category: "Services",
        question: "Can you help redesign an existing application?",
        answer: "Absolutely. We love breathing new life into existing products. We can conduct a UX audit and propose a redesign strategy that improves usability and aesthetics."
    },
    {
        category: "General",
        question: "Where is your team located?",
        answer: "Our team is distributed globally, allowing us to tap into top talent and provide coverage across multiple time zones."
    },
    {
        category: "Pricing",
        question: "Do you offer hourly billing or fixed price?",
        answer: "We prefer fixed-price contracts for well-defined projects as it gives you budget certainty. For ongoing support or separate consultation, we offer hourly billing."
    },
    {
        category: "Technical",
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our discovery phase."
    },
    {
        category: "Services",
        question: "Do you offer ongoing support after launch?",
        answer: "Yes, we offer various support packages including bug fixes, feature enhancements, performance monitoring, and regular updates to keep your application running smoothly."
    }
];

interface FAQListProps {
    searchQuery: string;
}

export default function FAQList({ searchQuery }: FAQListProps) {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="bg-[#fafaf9] py-28 px-6">
            <div className="container mx-auto max-w-5xl">

                {/* Sophisticated Category Navigation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-24"
                >
                    {categories.map((cat, idx) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.08 }}
                            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                            className={`relative px-9 py-4 rounded-full text-sm font-light tracking-[0.12em] uppercase transition-all duration-500 overflow-hidden group ${
                                activeCategory === cat
                                    ? "text-white"
                                    : "text-stone-600 hover:text-stone-900"
                            }`}
                        >
                            {/* Background transitions */}
                            <span className={`absolute inset-0 transition-all duration-500 ${
                                activeCategory === cat 
                                    ? "bg-stone-900 shadow-2xl shadow-stone-900/30" 
                                    : "bg-white border border-stone-200 group-hover:border-stone-300 group-hover:bg-stone-50"
                            }`}></span>
                            
                            {/* Text */}
                            <span className="relative z-10">{cat}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Luxurious FAQ Accordion */}
                <div className="space-y-0">
                    <AnimatePresence mode='wait'>
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <motion.div
                                    key={faq.question}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                    className="group border-b border-stone-200 last:border-0"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-start justify-between py-10 px-2 text-left focus:outline-none group-hover:px-4 transition-all duration-300"
                                    >
                                        <div className="pr-12 flex-1">
                                            {/* Category Badge */}
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
                                                    {faq.category}
                                                </span>
                                                <div className={`h-px flex-1 max-w-16 transition-all duration-500 ${
                                                    openIndex === index ? 'bg-stone-900' : 'bg-stone-300'
                                                }`}></div>
                                            </div>
                                            
                                            {/* Question */}
                                            <h3 className={`text-3xl md:text-4xl font-light leading-[1.3] tracking-tight transition-all duration-300 ${
                                                openIndex === index ? 'text-stone-900' : 'text-stone-700 group-hover:text-stone-900'
                                            }`} style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                        
                                        {/* Toggle Icon */}
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                                            openIndex === index 
                                                ? 'bg-stone-900 rotate-180' 
                                                : 'bg-stone-100 group-hover:bg-stone-200'
                                        }`}>
                                            <svg 
                                                width="18" 
                                                height="18" 
                                                viewBox="0 0 18 18" 
                                                className={`transition-colors duration-300 ${
                                                    openIndex === index ? 'text-white' : 'text-stone-600'
                                                }`}
                                            >
                                                <line 
                                                    x1="9" 
                                                    y1="0" 
                                                    x2="9" 
                                                    y2="18" 
                                                    stroke="currentColor" 
                                                    strokeWidth="1.5"
                                                    className={`origin-center transition-transform duration-300 ${
                                                        openIndex === index ? 'rotate-90 opacity-0' : ''
                                                    }`}
                                                />
                                                <line 
                                                    x1="0" 
                                                    y1="9" 
                                                    x2="18" 
                                                    y2="9" 
                                                    stroke="currentColor" 
                                                    strokeWidth="1.5"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    
                                    {/* Answer Panel */}
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-2 pb-10 text-stone-600 leading-[1.8] text-lg md:text-xl font-light max-w-3xl tracking-wide"
                                                     style={{ fontFamily: '"Crimson Pro", Georgia, serif' }}>
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-40"
                            >
                                <div className="w-28 h-28 rounded-full border-2 border-stone-200 flex items-center justify-center mx-auto mb-8">
                                    <FiMinus size={36} className="text-stone-300" strokeWidth={1} />
                                </div>
                                <p className="text-stone-400 text-2xl font-light mb-8" style={{ fontFamily: '"Crimson Pro", Georgia, serif' }}>
                                    No questions match your search.
                                </p>
                                <button
                                    onClick={() => { setActiveCategory('All'); }}
                                    className="relative group/reset text-stone-900 font-light text-lg"
                                >
                                    View all questions
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900 scale-x-0 group-hover/reset:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}