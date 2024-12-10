import Image from "next/image";

export default function Uiimmigrationtop(){
    return (
        <section className="overflow-hidden py-32">
            <div className="mx-auto max-w-5xl space-y-16 px-6">
                <h2 className="text-title relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Brief Legal Advice on Europe Immigration Laws</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="absolute -inset-20 sm:-inset-40"></div>
                        <div className="absolute -inset-20  sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                        <div className="absolute -inset-20  sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>

                        <div className="tls-shadow-md rounded-card relative overflow-hidden shadow-gray-950/[0.03]">
                            <Image
                             className="relative dark:hidden" 
                             src="/eur/flag.jpg"
                             alt="uk" 
                             height={1200}
                             width={1200}
                             />
                        </div>
                    </div>
                    <div className="relative space-y-4">
                        <p className="text-body">“Europe Immigration Laws” Citizens can freely travel, work, retire, or just vacate without any problems in any EU Country. The advantages of citizenship in an EU country is that the Europe Immigration laws and regulations of the EU apply to any country that you decide to live and work in.</p>
                        {/* <div className="pt-6">
                            <blockquote className="text-blockquote">
                                <p>Numerous immigrants choose Canada for entrepreneurship or temporary employment to assist Canadian employers with immediate workforce needs in specific fields. Canada offers a range of programs, from temporary visitation options to pathways for permanent residency and eventual citizenship.</p>
                            </blockquote>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}