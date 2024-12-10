// /components/data/pdf-data.ts
export interface PDFDocument {
  name: string;
  url: string;
}

export interface PDFCategory {
  title: string;
  documents: PDFDocument[];
}

export interface IncomeTaxDocument {
  title: string;
  url: string;
  icon: string;
}

export const pdfCategories: PDFCategory[] = [
  {
    title: "ACTS",
    documents: [
      { name: "Customs Act, 1969.pdf", url: "/pdfs/customs-act-1969.pdf" },
      { name: "The Sales Tax Act, 1990.pdf", url: "/pdfs/sales-tax-act-1990.pdf" }
    ]
  },
  {
    title: "ORDINANCE",
    documents: [
      { name: "Income Tax Ordinance.pdf", url: "/pdfs/income-tax-ordinance.pdf" }
    ]
  },
  {
    title: "RULES",
    documents: [
      { name: "Income tax rules 2002.pdf", url: "/pdfs/income-tax-rules-2002.pdf" }
    ]
  }
];

export const incomeTaxDocs: IncomeTaxDocument[] = [
  {
    title: "Income Tax Acts",
    url: "/pdfs/1.pdf",
    icon: "📄"
  },
  {
    title: "Income Tax Ordinance",
    url: "/pdfs/2.pdf",
    icon: "📋"
  },
  {
    title: "Income Tax Rules",
    url: "/pdfs/3.pdf",
    icon: "📑"
  }
];