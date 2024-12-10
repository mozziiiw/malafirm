'use client'

import { motion } from 'framer-motion'
import { Scale, Briefcase, Users, Compass, Trophy, HeartHandshake } from 'lucide-react'
import "@/components/styles/card.css"
const expertiseData = [
  {
    icon: Scale,
    title: 'Expertise and Experience',
    description: 'Our team of experienced attorneys specializes in various legal areas, including immigration law for the UK and Australia.'
  },
  {
    icon: Briefcase,
    title: 'Comprehensive Services',
    description: 'We offer a wide range of legal services, including taxation, business licensing, family court matters, and immigration law.'
  },
  {
    icon: Users,
    title: 'Personalized Attention',
    description: 'We prioritize giving personalized attention to each client, tailoring our legal strategies to meet individual needs.'
  },
  {
    icon: Compass,
    title: 'Reliable Guidance and Support',
    description: 'Our team guides you through every step of the legal and immigration processes, making it smooth and stress-free.'
  },
  {
    icon: Trophy,
    title: 'Track Record of Success',
    description: 'We have a proven track record of success in handling legal and immigration cases, delivering excellent results.'
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric Approach',
    description: 'We prioritize client satisfaction, maintaining open communication and providing exceptional customer service.'
  }
]

export default function ExpertiseSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className="relative inline-block mb-12 mx-auto w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold relative z-10 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Why Choose Manzoor Ahmad Law Associates?
          </motion.h2>
          <motion.div
            className="absolute -inset-x-4 -inset-y-2 -z-10 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          ></motion.div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-lg card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <item.icon className="w-12 h-12" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

