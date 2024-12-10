import Image from "next/image"

export default function TeamSection(){
    return (
        <section className="py-10">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-white px-6 dark:bg-gray-950">Services We Offer for the Australia</span>
            
                <div className="mt-10">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="group overflow-hidden">
                            <Image className="h-40 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[10.5rem] group-hover:rounded-xl" src="/aus/1.jpg" alt="team member" width="826" height="200" />
                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Australia Skilled Immigration</h3>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden">
                        <Image className="h-40 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[10.5rem] group-hover:rounded-xl" src="/aus/2.jpg" alt="team member" width="826" height="200" /> 
                         <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Australia Visitor Visa Subclass 600</h3>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden">
                        <Image className="h-40 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[10.5rem] group-hover:rounded-xl" src="/aus/3.jpg" alt="team member" width="826" height="200" /> 
                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Australia Study Visa</h3>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}