// components/faq/CTASection.tsx
'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaComments, FaCheckCircle, FaUsers, FaStar, FaRocket } from 'react-icons/fa';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <FaComments className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Ready to get started?</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transform your experience today
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join thousands of satisfied customers who have revolutionized their workflow with our platform.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: FaCheckCircle, text: 'No credit card required', subtext: 'Start free trial' },
              { icon: FaUsers, text: '24/7 customer support', subtext: 'Always here to help' },
              { icon: FaRocket, text: 'Easy setup', subtext: 'Get started in minutes' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {feature.text}
                </h4>
                <p className="text-gray-400 text-sm">
                  {feature.subtext}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
              >
                Start Free Trial
                <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Book a Demo
              </Link>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-gray-400 mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {['TechCorp', 'InnovateCo', 'GlobalSoft', 'NextGen', 'CloudPlus'].map((company) => (
                <div key={company} className="text-white font-bold text-xl">
                  {company}
                </div>
              ))}
            </div>
            
            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-3">
                  "This FAQ page actually answered all my questions before I had to ask! The platform is as amazing as their support documentation."
                </p>
                <p className="text-gray-400 font-medium">- Sarah Johnson, Product Manager</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}