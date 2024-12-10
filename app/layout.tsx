import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Manzoor Ahmad Law Associates",
  description: "Manzoor Ahmad Law Associates is a reputable legal firm providing expert legal services in various fields, including corporate law, civil litigation, family law, and property disputes. With a team of experienced attorneys, the firm is committed to delivering personalized legal solutions and achieving favorable outcomes for clients.",
  icons:'/favicon.ico'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>    
        {children}     
      </body>
    </html>
  );
}
