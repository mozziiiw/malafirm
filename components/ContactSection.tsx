import Image from 'next/image'
import React from 'react'

function ContactSection() {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-3xl">
              {/* Title */}
              <h2 className="mb-2 text-3xl font-bold md:text-5xl">
                Booking an Appointment
              </h2>
              <p className="my-4 max-w-lg pb-4 text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
                Free Consultation
              </p>
              {/* Testimonial */}
              <div className="mb-4 flex items-center text-orange-500">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                  ></path>
                </svg>
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                  ></path>
                </svg>
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                  ></path>
                </svg>
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                  ></path>
                </svg>
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                  ></path>
                </svg>
              </div>
              <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base">
                I had an amazing experience with Manzoor Ahmad Law Associates. The team was so professional, understanding, and approachable. They patiently answered all my questions and guided me every step of the way. I felt confident and supported throughout my consultation. Highly recommended!
              </p>
              <div className="flex">
                <Image
                  src="/images.jpg"
                  alt=""
                  height={50}
                  width={50}
                  className="mr-2 inline-block h-10 w-10 rounded-full "
                />
                <div className="flex flex-col">
                  <h6 className="text-base font-bold">Sarah A.</h6>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-xl bg-gray-100 p-8 text-center">
              <h3 className="text-2xl font-bold md:text-3xl">Get a free quote</h3>
              <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 lg:mb-8">
                Clear guidance is the foundation of every confident decision.
              </p>
              {/* Form */}
              <form
                className="mx-auto mb-4 max-w-sm text-left"
                name="wf-form-password"
                method="get"
              >
                <div>
                  <label htmlFor="name-2" className="mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-black"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="name-2" className="mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-black"
                  />
                </div>
                <div className="mb-5 md:mb-6 lg:mb-8">
                  <label htmlFor="field-3" className="mb-1 font-medium">
                    Work Brief
                  </label>
                  <textarea
                    placeholder=""
                    name="field"
                    className="mb-2.5 block h-auto min-h-32 w-full rounded-md border border-solid border-black p-3 text-sm text-black"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Get free quote"
                  className="inline-block w-full cursor-pointer rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection
