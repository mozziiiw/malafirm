"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from "react"

type FormFileField = {
  file: File | null;
  preview: string | null;
}

const formSchema = z.object({
  businessLetterHead: z.custom<FormFileField>(),
  electricBill: z.custom<FormFileField>(),
  partnershipAgreement: z.custom<FormFileField>(),
  propertyProof: z.custom<FormFileField>(),
  cnicFront: z.custom<FormFileField>(),
  cnicBack: z.custom<FormFileField>(),
  partner1CnicFront: z.custom<FormFileField>(),
  partner1CnicBack: z.custom<FormFileField>(),
  partner2CnicFront: z.custom<FormFileField>().optional(),
  partner2CnicBack: z.custom<FormFileField>().optional(),
  partner3CnicFront: z.custom<FormFileField>().optional(),
  partner3CnicBack: z.custom<FormFileField>().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function STRNAOPForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessLetterHead: { file: null, preview: null },
      electricBill: { file: null, preview: null },
      partnershipAgreement: { file: null, preview: null },
      propertyProof: { file: null, preview: null },
      cnicFront: { file: null, preview: null },
      cnicBack: { file: null, preview: null },
      partner1CnicFront: { file: null, preview: null },
      partner1CnicBack: { file: null, preview: null },
      partner2CnicFront: { file: null, preview: null },
      partner2CnicBack: { file: null, preview: null },
      partner3CnicFront: { file: null, preview: null },
      partner3CnicBack: { file: null, preview: null },
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

  const renderFormField = (name: keyof FormValues, label: string, optional: boolean = false) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}{optional ? " (Optional)" : ""}</FormLabel>
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
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">STRN AOP Application</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {renderFormField("businessLetterHead", "Business Letter Head")}
              {renderFormField("electricBill", "Electric Bill")}
              {renderFormField("partnershipAgreement", "Partnership Agreement")}
              {renderFormField("propertyProof", "Proof of Property Ownership / Rent Agreement")}
              {renderFormField("cnicFront", "CNIC Front")}
              {renderFormField("cnicBack", "CNIC Back")}
              {renderFormField("partner1CnicFront", "Partner 1 CNIC Front")}
              {renderFormField("partner1CnicBack", "Partner 1 CNIC Back")}
              {renderFormField("partner2CnicFront", "Partner 2 CNIC Front", true)}
              {renderFormField("partner2CnicBack", "Partner 2 CNIC Back", true)}
              {renderFormField("partner3CnicFront", "Partner 3 CNIC Front", true)}
              {renderFormField("partner3CnicBack", "Partner 3 CNIC Back", true)}
            </div>
            <Button type="submit" className="w-full">Apply Now</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

