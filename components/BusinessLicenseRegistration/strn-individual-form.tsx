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
  electricBill: z.custom<FormFileField>(),
  businessLetterHead: z.custom<FormFileField>(),
  cnicBack: z.custom<FormFileField>(),
  propertyProof: z.custom<FormFileField>(),
  cnicFront: z.custom<FormFileField>(),
})

type FormValues = z.infer<typeof clientSideFormSchema>

export function STRNIndividualForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(clientSideFormSchema),
    defaultValues: {
      electricBill: { file: null, preview: null },
      businessLetterHead: { file: null, preview: null },
      cnicBack: { file: null, preview: null },
      propertyProof: { file: null, preview: null },
      cnicFront: { file: null, preview: null },
    },
  })

  const onSubmit = useCallback(async (values: FormValues) => {
    const hasAllFiles = Object.values(values).every((field) => field.file instanceof File)
    if (!hasAllFiles) {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">STRN Individual Application</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {(Object.keys(clientSideFormSchema.shape) as Array<keyof FormValues>).map((key) => (
                <FormField
                  key={key}
                  control={form.control}
                  name={key}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</FormLabel>
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
              ))}
            </div>
            {form.formState.errors.root && (
              <p className="text-sm font-medium text-destructive">{form.formState.errors.root.message}</p>
            )}
            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

