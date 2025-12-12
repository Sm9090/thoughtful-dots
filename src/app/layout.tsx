import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/shared/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thoughtful Dots | Mandala Art & Mindful Creation",
  description:
    "Discover the meditative art of mandala creation. Explore artwork, art tools, and classes designed to help you slow down, create intentionally, and connect with yourself.",
  keywords: [
    "mandala art",
    "mindful creation",
    "meditation art",
    "dot painting",
    "art classes",
    "healing art",
    "intentional creation",
  ],
  authors: [{ name: "Thoughtful Dots" }],
  openGraph: {
    title: "Thoughtful Dots | Mandala Art & Mindful Creation",
    description:
      "Discover the meditative art of mandala creation. Slow down, create intentionally, and connect with yourself.",
    url: "https://thoughtfuldots.com",
    siteName: "Thoughtful Dots",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* Beautiful mandala loader - shows while page loads */}
        <PageLoader />
        
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}