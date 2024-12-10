import React from 'react'
import ContactForm from '@/components/contact-form'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
function page() {
  return (
    <>
    <Navbar/>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    <div className='relative mx-auto px-4 md:py-24 py-16'>
<ContactForm/>
    </div>
    <Footer/>
    </>

  )
}

export default page
