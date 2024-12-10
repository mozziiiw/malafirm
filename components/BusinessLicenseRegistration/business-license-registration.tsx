"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NTNIndividualForm } from "./ntn-individual-form"
import { NTNAOPForm } from "./ntn-aop-form"
import { STRNIndividualForm } from "./strn-individual-form"
import { STRNAOPForm } from "./strn-aop-form"
import { ProcessSteps } from "./process-steps"
import { DocumentationList } from "./documentation-list"
import React, { useState } from "react"

// Define FileList and File for SSR
if (typeof window === 'undefined') {
  global.FileList = class FileList {} as unknown as typeof FileList;
  global.File = class File {} as unknown as typeof File;
}

export function BusinessLicenseRegistration() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="container mx-auto py-10 space-y-8">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-black">
            Business License Registration
          </CardTitle>
          <CardDescription className="text-lg">
            Complete your business registration process efficiently
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="ntn-individual" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white h-auto p-0">
          {[
            { value: "ntn-individual", label: "NTN Individual" },
            { value: "ntn-aop", label: "NTN AOP" },
            { value: "strn-individual", label: "STRN Individual" },
            { value: "strn-aop", label: "STRN AOP" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-8 py-3 rounded-lg shadow-sm border border-border hover:bg-muted transition-colors"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid gap-6">
          <ProcessSteps />
          <DocumentationList />
          
          {!showForm && (
            <div className="flex justify-center">
              <Button 
                onClick={() => setShowForm(true)} 
                className="w-full max-w-md"
                variant="default"
              >
                Apply Now
              </Button>
            </div>
          )}
          
          {showForm && (
            <>
              <TabsContent value="ntn-individual">
                <NTNIndividualForm />
              </TabsContent>
              
              <TabsContent value="ntn-aop">
                <NTNAOPForm />
              </TabsContent>
              
              <TabsContent value="strn-individual">
                <STRNIndividualForm />
              </TabsContent>
              
              <TabsContent value="strn-aop">
                <STRNAOPForm />
              </TabsContent>
            </>
          )}
        </div>
      </Tabs>
    </div>
  )
}

