"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
    question: string
    answer: string
}

interface AnimatedAccordionProps {
    items: FAQItem[]
}

export const AnimatedAccordion: React.FC<AnimatedAccordionProps> = ({ items }) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.answer}
                            </motion.div>
                        </AnimatePresence>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

