import React from 'react'
import { AnimatedAccordion } from '@/components/AnimatedAccordion'
import { faqData } from '@/components/data/faq-data'

function Faq() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">
         FAQ
        </h1>
        <AnimatedAccordion items={faqData} />
      </div>
    </div>
  )
}

export default Faq
