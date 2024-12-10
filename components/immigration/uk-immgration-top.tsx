import Image from "next/image";

export default function Uiimmigrationtop(){
    return (
        <section className="overflow-hidden py-32">
            <div className="mx-auto max-w-5xl space-y-16 px-6">
                <h2 className="text-title relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Brief Legal Advice on UK Immigration Laws</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="absolute -inset-20 sm:-inset-40"></div>
                        <div className="absolute -inset-20  sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
                        <div className="absolute -inset-20  sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>

                        <div className="tls-shadow-md rounded-card relative overflow-hidden shadow-gray-950/[0.03]">
                            <Image
                             className="relative dark:hidden" 
                             src="/uk/home.webp"
                             alt="uk" 
                             height={1200}
                             width={1200}
                             />
                        </div>
                    </div>
                    <div className="relative space-y-4">
                        <p className="text-body">Manzoor Ahmad Law Asociates offers UK immigration law advice and globally services, standing out in the UK immigration law industry.We understand the challenges faced by immigrants seeking assistance and program services in the domain of UK immigration law.</p>
                        <div className="pt-6">
                            <blockquote className="text-blockquote">
                                <p>Manzoor Ahmad Law Associates has an experienced team of immigration law specialists with a focus on UK immigration law. One of our goals is to address the intricacies of UK immigration law, navigating its dynamic and regularly evolving rules and regulations on behalf of our clients.</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}