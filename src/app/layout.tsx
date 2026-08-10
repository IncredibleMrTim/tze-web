import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tauranga Electroplaters | Zinc Electroplating Specialist",
  description:
    "This web application enhances user experience for electroplating services, offering streamlined navigation and clear information for customers seeking quality solutions.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-ep-card md:bg-ep-section-alt text-ep-text min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
