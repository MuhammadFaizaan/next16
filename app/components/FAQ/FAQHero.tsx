// components/faq/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-indigo-700 py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center "
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 !text-center  !w-full">
            How can we help?
          </h1>
          <p className="text-xl text-red-100 !mx-auto mb-10 text-center !w-full !px-4 !py-2">
            Find answers to frequently asked questions or get in touch with our support team.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full !pl-12 !pr-4 !py-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
              Popular Topics
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
              Account
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
              Billing
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
              Features
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
              Security
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
}