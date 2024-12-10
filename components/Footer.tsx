"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-4">

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div {...fadeInUp} className="space-y-4">
            <Image
              src="/main-logo.png"
              alt="Manzoor Ahmad Law Associates"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-gray-600 max-w-sm">
              Manzoor Ahmad Law Associates offers personalized legal care,
              providing expert advice and strategic solutions to protect our
              clients rights and achieve favorable outcomes. With a focus on integrity,
              professionalism, and client satisfaction, we deliver exceptional
              legal services tailored to meet the diverse needs of our clients.
            </p>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Practice Areas</h3>
            <nav className="space-y-2">
              <Link href="/practice-areas" className="block hover:text-gray-600 transition-colors">
                Practice Areas
              </Link>
              <Link href="/laws" className="block hover:text-gray-600 transition-colors">
                Laws
              </Link>
              <Link href="/about" className="block hover:text-gray-600 transition-colors">
                About us
              </Link>
              <Link href="/contact" className="block hover:text-gray-600 transition-colors">
                Contact us
              </Link>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Have a Questions?</h3>
            <div className="space-y-4">
              <p className="flex items-start space-x-2">
                <span>📍</span>
                <span>Office No 13, 1st floor The Arcadian Plaza Kohinoor City, Main Jaranwala Road, Faisalabad</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+924185019912" className="hover:text-gray-600 transition-colors">
                  (+92) 418-501-991-2
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:support@malafirm.com" className="hover:text-gray-600 transition-colors">
                  support@malafirm.com
                </a>
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-black hover:text-gray-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="text-center pt-12 border-t border-gray-200 mt-12"
        >
          <p className="text-gray-600">
            Copyright ©2025 All rights reserved by MalaFirm
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

