// components/faq/FAQSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronDown,
  FaQuestionCircle,
  FaClock,
  FaShieldAlt,
  FaBolt,
  FaGlobe,
  FaCreditCard,
  FaUsers,
  FaTools,
  FaRocket
} from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How do I get started with your service?',
    answer: 'Getting started is simple! Sign up for a free account, complete your profile setup, and explore our onboarding tutorials. Our guided setup process will have you up and running in under 10 minutes.',
    category: 'Getting Started',
    icon: <FaRocket className="h-6 w-6" />,
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through encrypted channels.',
    category: 'Billing',
    icon: <FaCreditCard className="h-6 w-6" />,
  },
  {
    id: 3,
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll continue to have access to paid features until the end of your billing cycle. No long-term contracts required.',
    category: 'Billing',
    icon: <FaClock className="h-6 w-6" />,
  },
  {
    id: 4,
    question: 'Is my data secure with your platform?',
    answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR, CCPA, and other data protection regulations. Your data is stored securely in SOC 2 certified data centers.',
    category: 'Security',
    icon: <FaShieldAlt className="h-6 w-6" />,
  },
  {
    id: 5,
    question: 'Do you offer team collaboration features?',
    answer: 'Yes, we offer robust team collaboration tools including shared workspaces, real-time editing, role-based permissions, and team analytics. You can invite unlimited team members on our Business plan.',
    category: 'Features',
    icon: <FaUsers className="h-6 w-6" />,
  },
  {
    id: 6,
    question: 'What kind of customer support do you provide?',
    answer: 'We offer 24/7 email support, live chat during business hours, and priority phone support for enterprise customers. Our average response time is under 2 hours for urgent issues.',
    category: 'Support',
    icon: <FaQuestionCircle className="h-6 w-6" />,
  },
  {
    id: 7,
    question: 'Can I integrate with other tools I use?',
    answer: 'Yes! We offer native integrations with popular tools like Slack, Google Workspace, Microsoft Teams, Salesforce, and Zapier. Our API also allows for custom integrations.',
    category: 'Features',
    icon: <FaTools className="h-6 w-6" />,
  },
  {
    id: 8,
    question: 'Do you offer a free trial?',
    answer: 'We offer a 14-day free trial with full access to all premium features. No credit card required to start. After the trial, you can choose from our flexible pricing plans.',
    category: 'Getting Started',
    icon: <FaClock className="h-6 w-6" />,
  },
];

const categories = ['All', 'Getting Started', 'Billing', 'Security', 'Features', 'Support'];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFAQs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            Quick answers to the questions we hear the most
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`!px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/25'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600">
                    {faq.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <FaChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="pl-14 border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 p-4 bg-red-50 rounded-2xl">
            <FaQuestionCircle className="h-6 w-6 text-red-600" />
            <p className="text-gray-700 font-medium">
              Still have questions?{' '}
              <a href="/contact" className="text-red-600 hover:text-red-700 font-semibold underline">
                Contact our support team
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}