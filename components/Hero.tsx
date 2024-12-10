'use client'

import { Button } from "@/components/ui/button"
import { Clock, Scale, Shield } from 'lucide-react'
import Image from "next/image"
import { BorderBeam } from "./ui/border-beam"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { useState, useEffect, JSX } from "react"
import React from "react"
import Link from "next/link"
interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function Hero(): JSX.Element {
  const titles = [
    "Defending Your Rights with Unwavering Commitment",
    "Excellence in Legal Services Since 2000",
    "Your Trusted Partner in Legal Solutions",
    "Building Strong Cases, Delivering Results"
  ]

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const currentTitle = titles[currentTitleIndex].split(" ")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
    }, 6000) 

    return () => clearInterval(interval)
  }, [titles.length])

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const features: FeatureItem[] = [
    {
      icon: Clock,
      title: "Maximize efficiency",
      description: "Our experienced team ensures swift resolution of your legal matters, allowing you to focus on what matters most while we handle the complexities."
    },
    {
      icon: Scale,
      title: "Expert Legal Solutions",
      description: "From complex corporate litigation to sensitive family matters, we provide comprehensive legal solutions tailored to your unique needs."
    },
    {
      icon: Shield,
      title: "Protected Interests",
      description: "We prioritize your interests and ensure your rights are protected throughout every step of the legal process."
    }
  ]

  return (
    <div className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#cddafd,transparent)]"></div></div>      </div>
      <section className="container relative mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[120px] md:h-[120px] lg:h-[110px]"> {/* Fixed height container */}
              <MotionConfig reducedMotion="user">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentTitleIndex}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {currentTitle.map((word, index) => (
                      <motion.span
                        variants={child}
                        key={index}
                        className="inline-block mr-[0.25em] overflow-hidden"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </MotionConfig>
            </div>
            <motion.p
              className="text-gray-600 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With over 20 years of experience, Manzoor Ahmad Law Associates has been at the forefront of legal excellence. Our team of dedicated attorneys combines deep legal knowledge with a client-centric approach, ensuring that your interests are protected and your goals are achieved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/contact"> <Button variant="default" size="lg">Free Consultation</Button></Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BorderBeam />
            <Image
              src="/hero1.jpg"
              alt="Law Firm Logo"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              className="space-y-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
            >
              <item.icon className="h-8 w-8 text-black" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

