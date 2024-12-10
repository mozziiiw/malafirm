import Footer from "@/components/Footer"
import LawDocuments from "@/components/law-documents"
import Navbar from "@/components/Navbar"

export default function page() {
  return (
    <>
    <Navbar/>
    <main className="relative mx-auto px-4 md:py-24 py-16">
      <div className="max-w-7xl mx-auto px-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full blur-[100px]"></div></div>
        <h1 className="text-3xl font-bold text-center mb-12">Legal Documents</h1>
        <LawDocuments />
      </div>
    </main>
    <Footer/>
    </>
  )
}

