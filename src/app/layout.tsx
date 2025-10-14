import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Medi-Check Health Services Pvt Ltd | Leading Occupational Health Provider Since 1997",
  description:
    "Founded by Dr. Pradeep Mahajan in 1997, Medi-Check manages 30+ OHC centers nationally with global presence. Dedicated to occupational injury diagnosis, treatment and prevention.",
  keywords:
    "occupational health, maritime health services, corporate wellness, ambulance services, first aid training, health on wheels, Dr. Pradeep Mahajan",
  authors: [{ name: "Medi-Check Health Services Pvt Ltd" }],
  creator: "Medi-Check Health Services Pvt Ltd",
  publisher: "Medi-Check Health Services Pvt Ltd",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medicheckworld.com",
    title:
      "Medi-Check Health Services Pvt Ltd | Leading Occupational Health Provider",
    description:
      "27+ years of healthcare excellence. Managing 30+ OHC centers nationally with global presence across 5 countries.",
    siteName: "Medi-Check Health Services Pvt Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medi-Check Health Services Pvt Ltd",
    description: "Leading occupational health provider since 1997",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#F8FAFB]`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
