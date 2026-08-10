import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { TEXT } from "../lib/theme"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tauranga Electroplaters | Zinc Electroplating Specialist",
  description:
    "This web application enhances user experience for electroplating services, offering streamlined navigation and clear information for customers seeking quality solutions.",
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "'Inter', sans-serif",
          backgroundColor: "#f4f6f9",
          color: TEXT,
          minHeight: "100vh",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
