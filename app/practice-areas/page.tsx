import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PracticeAreas from '@/components/practice-areas'
import React from 'react'

function page() {
  return (
   <>
   <Navbar/>
   <div className='min-h-0 relative mx-auto px-4 py-12'>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#cddafd,transparent)]"></div></div>
   <PracticeAreas/>
    </div>
    <Footer/>
    </>
  )
}

export default page
