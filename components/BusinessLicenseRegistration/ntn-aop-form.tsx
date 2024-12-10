"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCallback } from "react"
import type { FormFileField } from "@/types/form-types"


const clientSideFormSchema = z.object({
  businessLetterHead: z.custom<FormFileField>(),
  electricBill: z.custom<FormFileField>(),
  partnershipAgreement: z.custom<FormFileField>(),
  propertyProof: z.custom<FormFileField>(),
  cnicBack: z.custom<FormFileField>(),
  cnicFront: z.custom<FormFileField>(),
  partner1CnicFront: z.custom<FormFileField>(),
  partner1CnicBack: z.custom<FormFileField>(),
  partner2CnicFront: z.custom<FormFileField>().nullable(),
  partner2CnicBack: z.custom<FormFileField>().nullable(),
  partner3CnicFront: z.custom<FormFileField>().nullable(),
  partner3CnicBack: z.custom<FormFileField>().nullable(),
  partner4CnicFront: z.custom<FormFileField>().nullable(),
  partner4CnicBack: z.custom<FormFileField>().nullable(),
})

type FormValues = z.infer<typeof clientSideFormSchema>

export function NTNAOPForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(clientSideFormSchema),
    defaultValues: {
      businessLetterHead: { file: null, preview: null },
      electricBill: { file: null, preview: null },
      partnershipAgreement: { file: null, preview: null },
      propertyProof: { file: null, preview: null },
      cnicBack: { file: null, preview: null },
      cnicFront: { file: null, preview: null },
      partner1CnicFront: { file: null, preview: null },
      partner1CnicBack: { file: null, preview: null },
      partner2CnicFront: null,
      partner2CnicBack: null,
      partner3CnicFront: null,
      partner3CnicBack: null,
      partner4CnicFront: null,
      partner4CnicBack: null,
    },
  })

  const onSubmit = useCallback(async (values: FormValues) => {
    const requiredFields = [
      'businessLetterHead',
      'electricBill',
      'partnershipAgreement',
      'propertyProof',
      'cnicBack',
      'cnicFront',
      'partner1CnicFront',
      'partner1CnicBack'
    ] as const

    const hasAllRequiredFiles = requiredFields.every((field) => values[field]?.file instanceof File)
    if (!hasAllRequiredFiles) {
      form.setError("root", {
        type: "manual",
        message: "Please upload all required files",
      })
      return
    }

    console.log(values)
  }, [form])

  const handleFileChange = useCallback((
    onChange: (value: FormFileField) => void,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    onChange({
      file,
      preview: URL.createObjectURL(file)
    })
  }, [])

  const renderFormField = (name: keyof FormValues, label: string, optional: boolean = false) => (
    <FormField
      key={name}
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}{optional ? " (Optional)" : ""}</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/*,.pdf"
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
        <CardTitle className="text-2xl font-semibold">NTN AOP Application</CardTitle>
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
              {renderFormField("partner4CnicFront", "Partner 4 CNIC Front", true)}
              {renderFormField("partner4CnicBack", "Partner 4 CNIC Back", true)}
            </div>
            {form.formState.errors.root && (
              <p className="text-sm font-medium text-destructive">{form.formState.errors.root.message}</p>
            )}
            <Button type="submit" className="w-full">Apply Now</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

