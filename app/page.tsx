'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import ExpertiseSection from '@/components/ExpertiseSection'
import ContentSection from '@/components/ContentSection'
import Faq from '@/components/Faq'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <motion.div
          className="w-16 h-16 border-4 border-gray-900 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )
  }
  return (
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar/>
      <Hero />   
      <ContentSection/>
      <ExpertiseSection/>
      <Faq/>
      <ContactSection/>
      <Footer/>
    </motion.main>
  )
}

