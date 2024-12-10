import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileIcon } from 'lucide-react'

export function DocumentationList() {
  const documents = [
    "CNIC/NICOP/Passport number",
    "Cell phone number in use",
    "Active e-mail address",
    "Nationality",
    "Residential address",
    "Accounting period",
    "Business income details",
    "Business name and address",
    "Principal business activity",
    "Name and NTN of employer"
  ]

  return (
    <Card className="border-none shadow-sm bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-black">Documentation Required</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
              <FileIcon className="w-4 h-4 text-black"/>
              <span className="text-sm text-muted-foreground">{doc}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

