import Footer from '@/components/Footer'
import TeamSection from '@/components/immigration/eur-immigration'
import Navbar from '@/components/Navbar'
import Uiimmigrationtop from '@/components/immigration/eur-immigration-top'

function page() {
  return (
    <div>
    <Navbar/>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    <Uiimmigrationtop/>
    <TeamSection/>      
    <Footer/>
    </div>
  )
}

export default page
