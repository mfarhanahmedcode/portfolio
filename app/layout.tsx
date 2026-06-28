import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Muhammad Farhan Ahmed",
    template: "%s | Muhammad Farhan Ahmed",
  },

  description:
    "Frontend developer building modern web applications with Next.js, React, and TypeScript.",
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Muhammad Farhan Ahmed",
    description:
      "Frontend developer building modern web applications with Next.js, React, and TypeScript.",
    url: "https://website.com",
    siteName: "Muhammad Farhan Ahmed",
    type: "website",

    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Muhammad Farhan Ahmed Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
