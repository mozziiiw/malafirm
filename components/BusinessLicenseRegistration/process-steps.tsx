import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleIcon } from 'lucide-react'

export function ProcessSteps() {
  const steps = [
    "Go to FBR IRIS portal and click on Registration for unregistered person.",
    "Enter all the details in the form and click on submit button.",
    "Log in to your account and edit the 181 application form.",
    "Enter all your personal, income and property details."
  ]

  return (
    <Card className="border-none shadow-sm bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-black">Process</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <CircleIcon className="w-2 h-2 mt-2 text-primary shrink-0"/>
            <p className="text-muted-foreground">{step}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

