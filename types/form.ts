export type FormFile = {
    name: string
    size: number
    type: string
    lastModified: number
  }
  
  export type FormFileField = {
    file: File | null
    preview: string | null
  }
  