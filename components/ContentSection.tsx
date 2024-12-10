// ContentSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import Image from 'next/image';

const tabs = [
  {
    id: 'mission',
    label: 'Our Mission',
    content: 'Provide exceptional legal representation, protecting the rights and interests of our clients. Deliver tailored and comprehensive legal solutions, achieving timely and cost-effective outcomes.'
  },
  {
    id: 'vision',
    label: 'Our Vision',
    content: 'Provide exceptional legal representation, protecting the rights and interests of our clients. Deliver tailored and comprehensive legal solutions, achieving timely and cost-effective outcomes.'
  },
  {
    id: 'value',
    label: 'Our Value',
    content: `Integrity: We uphold the highest ethical standards, ensuring honesty, transparency, and trust in all our interactions and legal representation.

Excellence: We strive for excellence in our legal practice, continuously improving our skills and knowledge to deliver exceptional services and achieve the best possible outcomes for our clients.`
  }
];

const ContentSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Photo section */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/hero.jpg"
                alt="Law Firm Logo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </motion.div>
          </div>

          {/* Right side - Content section */}
          <div className="space-y-6 backdrop-blur-sm bg-white/50 p-6 rounded-xl shadow-lg">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-800"
            >
              Welcome to Manzoor Ahmad LAW Associate
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-gray-700"
            >
              Law is the bridge that connects individuals, communities, and nations, fostering peace, justice, and progress.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-600"
            >
              Manzoor Ahmad Law Associates offers personalized legal care, providing expert advice and strategic solutions to protect our clients rights and achieve favorable outcomes.
            </motion.p>

            {/* Tabs */}
            <div className="flex space-x-4 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-t-lg",
                    activeTab === tab.id
                      ? "text-white bg-black"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-black text-white p-6 rounded-lg shadow-lg"
              >
                <p className="whitespace-pre-line">
                  {tabs.find(tab => tab.id === activeTab)?.content}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              20 Years of Experienced
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;