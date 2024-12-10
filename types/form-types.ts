export type FormFileField = {
    file: File | null;
    preview: string | null;
  }
  
  export type ServerSideFormFileField = {
    fileName: string | null;
    fileSize: number | null;
    fileType: string | null;
  }  