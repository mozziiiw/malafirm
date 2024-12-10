import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Scale, Gavel, Shield, Building2, Home, Users, PillIcon as Pills } from 'lucide-react'

const practiceAreas = [
    {
        icon: <Scale className="w-8 h-8" />,
        title: "Family Law",
        description:
            "Including divorce and related to family, marriage, divorce, child custody, and support. It also includes adoption, guardianship, child support, and domestic violence. Family law seeks to protect and serve the best interests of families and being of family members, especially children.",
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        title: "Business Law",
        description:
            "Is typically concerned with most deals with the legal aspects of commercial transactions and business operations. It involves areas such as employment law, and corporate governance. Business law serves to protect and regulate business and intellectual property rights and govern business operations.",
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Civil Rights Law",
        description:
            "Pertains to the legal rights and civil liberties of individuals. It includes policies and the relationship between private civil and political. It covers everything, coverage disputes and regulatory compliance. Legal rights law seeks to protect individual rights and ensure equal treatment.",
    },
    {
        icon: <Gavel className="w-8 h-8" />,
        title: "Criminal Law",
        description:
            "Is the body of law that deals with public criminal offense committed against society. It includes defense against criminal charges such as drug trafficking. It establishes the legal framework for investigating and prosecuting crimes and punishing individuals who violate these laws.",
    },
    {
        icon: <Home className="w-8 h-8" />,
        title: "Property Law",
        description:
            "Our expert team is dealing with all issues regarding property themes. Transactions, Transfer Taxes, and Property Management Services. Please note that property matters need special parties can only be discussed with our expert team or a qualified tax professional regarding.",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Employment Law",
        description:
            "Our firm is dealing with all issues regarding employment law themes such as contracts and termination, severance, compliance and policies as employment law mainly can be discussed with our expert team or whether. Our legal team is dealing with these laws very day.",
    },
    {
        icon: <Pills className="w-8 h-8" />,
        title: "Drug Offences",
        description:
            "Drug offense is also prohibited here and is criminal and related to the possession of illegal drugs or sale of illegal drugs or controlled substances. These offenses can include drug trafficking, drug possession, drug manufacturing and drug-related offenses such as drug paraphernalia possession.",
    },
]

export default function PracticeAreas() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center drop-shadow-lg mb-12">Practice Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 drop-shadow-lg">
                {practiceAreas.slice(0, 6).map((area, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="flex items-center justify-center pb-4">
                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                {area.icon}
                            </div>
                        </CardHeader>
                        <CardContent className="text-center">
                            <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {/* Last card centered */}
            <div className="mt-6 max-w-md mx-auto">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="flex items-center justify-center pb-4">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                            {practiceAreas[6].icon}
                        </div>
                    </CardHeader>
                    <CardContent className="text-center">
                        <h3 className="text-xl font-semibold mb-3">{practiceAreas[6].title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{practiceAreas[6].description}</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

