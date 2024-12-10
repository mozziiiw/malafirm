// /components/pdf-viewer.tsx
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from 'lucide-react'
import { incomeTaxDocs } from "./data/pdf-data"

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  documentName: string | null;
  categoryName: string | null;
}

export function PDFViewer({ isOpen, onClose }: PDFViewerProps) {
  const handlePDFClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Income Tax Documents</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {incomeTaxDocs.map((doc, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handlePDFClick(doc.url)}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <FileText className="w-12 h-12 mb-4 text-gray-600" />
                <h3 className="text-center font-medium">{doc.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}