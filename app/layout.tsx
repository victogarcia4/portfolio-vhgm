import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Victor Garcia M",
  description: "Official professional portfolio of Dr. Victor Garcia M, MSN, FNP-C, RN. Specialized in healthcare education, AI systems, clinical instruction, and digital learning platforms.",
  keywords: [
    "healthcare automation",
    "education technology",
    "clinical workflow",
    "nursing education",
    "Anatomy & Physiology",
    "Family Nurse Practitioner",
    "Lone Star College Faculty"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth dark`}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
