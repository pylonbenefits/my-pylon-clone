// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Prompt } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "./SessionProviderWrapper";

import Footer from "@/components/Footer";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Pylon",
  description: "Homeownership benefits for modern employers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${prompt.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-prompt">
        <SessionProviderWrapper>
          
          
          <main className="min-h-screen">{children}</main>
          <Footer />       {/* ✅ Bottom footer */}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
