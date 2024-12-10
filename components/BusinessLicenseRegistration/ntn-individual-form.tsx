"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type FormFileField = {
  file: File | null;
  preview: string | null;
}

const formSchema = z.object({
  businessLetterHead: z.custom<FormFileField>(),
  electricBill: z.custom<FormFileField>(),
  cnicFront: z.custom<FormFileField>(),
  cnicBack: z.custom<FormFileField>(),
  propertyProof: z.custom<FormFileField>(),
})

type FormValues = z.infer<typeof formSchema>

export function NTNIndividualForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessLetterHead: { file: null, preview: null },
      electricBill: { file: null, preview: null },
      cnicFront: { file: null, preview: null },
      cnicBack: { file: null, preview: null },
      propertyProof: { file: null, preview: null },
    },
  })

  function onSubmit(values: FormValues) {
    console.log(values)
  }

  const handleFileChange = (onChange: (value: FormFileField) => void, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onChange({
      file,
      preview: file ? URL.createObjectURL(file) : null
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">NTN Individual Application</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {Object.keys(formSchema.shape).map((key) => (
                <FormField
                  key={key}
                  control={form.control}
                  name={key as keyof FormValues}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          onChange={(e) => handleFileChange(field.onChange, e)}
                          className="cursor-pointer"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

