import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function AboutPage() {
  return (
    <div>
     <Navbar/>
     <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Component */}
          <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center rounded-md bg-gray-300 px-3 py-1">
                <div className="mr-1 h-2 w-2 rounded-full bg-black"></div>
                <p className="text-sm">Welcome to Manzoor Ahmad Law Associates</p>
              </div>
              <h1 className="mb-4 text-4xl font-bold py-2 md:text-5xl lg:mb-4">Manzoor Ahmad</h1>
              <p className="text-sm text-gray-700 sm:text-xl mb-4">
                Law is the bridge that connects individuals, communities, and nations, fostering peace, justice, and progress.
              </p>
              <p className="text-sm text-gray-700 sm:text-base mb-6">
                Manzoor Ahmad Law Associates offers personalized legal care providing expert advice and strategic solutions to protect our clients rights and achieve favorable outcomes.
              </p>
              {/* Divider */}
              <div className="mb-6 h-px w-full bg-gray-300"></div>
              <div className="mb-6 flex flex-col gap-4 text-sm text-gray-700 sm:text-base">
                <p>
                  Manzoor Ahmad Law Associates is a reputable law firm specializing in various legal areas, including taxation, business licensing, family court matters, and immigration law. Our team of experienced attorneys is well-versed in providing expert guidance and representation in a wide range of legal issues related to visas.
                </p>
                <p>
                  One of our key areas of expertise is the UK Start-Up Visa. We understand the intricate requirements and processes involved in obtaining a Start-Up Visa for individuals looking to establish innovative businesses in the United Kingdom. Our firm can provide comprehensive support throughout the application process, ensuring that all necessary documentation is prepared accurately and efficiently.
                </p>
                <p>
                  Additionally, we offer our services in handling Australian Skilled Visas, catering to individuals with specific skills and qualifications seeking to migrate to Australia. Our legal team has in-depth knowledge of the Australian immigration system and can guide applicants through the complex visa application procedures, making the process smoother and more manageable.
                </p>
                <p>
                  Furthermore, Manzoor Ahmad Law Associates can assist individuals in obtaining visas for various other categories. Whether its a student visa, tourist visa, work visa, or any other type of visa, we have the expertise to navigate the legal requirements and help clients achieve their immigration goals.
                </p>
                <p>
                  Our firm prioritizes providing personalized attention to each client, understanding their unique circumstances, and tailoring our legal strategies to meet their specific needs. We stay up to date with the latest developments in immigration law to ensure our clients receive accurate and reliable advice.
                </p>
              </div>
         
            </div>
            {/* Image */}
            <div className="relative min-h-1 overflow-hidden rounded-md">
              <Image
                src="/hero4.jpg"
                alt="Manzoor Ahmad Law Associates"
                height={1000}
                width={1000}
                className=""
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-md">
                <p className="text-lg font-bold">20 Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
<Footer/>
    </div>
  )
}

export default AboutPage

