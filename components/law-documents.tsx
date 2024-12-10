"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PDFViewer } from "./pdf-viewer"
import { pdfCategories } from "@/components/data/pdf-data"
import { FileText, ChevronRight } from 'lucide-react'
import type { PDFCategory } from "@/components/data/pdf-data"

export default function LawDocuments() {
  const [selectedCategory] = useState<string | null>(null)
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  const handleDocumentClick = (docName: string) => {
    setSelectedDocument(docName)
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfCategories.map((category: PDFCategory, index: number) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <CardHeader className="bg-gradient-to-r from-black to-black text-white py-4">
              <CardTitle className="text-center flex items-center justify-between">
                {category.title}
                <Badge variant="secondary" className="ml-2">
                  {category.documents.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ScrollArea className="h-48">
                <ul className="space-y-2">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        {doc.name}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDocumentClick(doc.name)}
                        aria-label={`View ${doc.name}`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>

      <PDFViewer 
        isOpen={!!selectedDocument}
        onClose={() => setSelectedDocument(null)}
        documentName={selectedDocument}
        categoryName={selectedCategory}
      />
    </div>
  )
}