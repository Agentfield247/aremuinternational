import type { Metadata, Viewport } from "next";
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

// THIS IS THE FIX FOR THE IPHONE NOTCH/STATUS BAR
export const viewport: Viewport = {
  themeColor: "#090B0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// UPDATED AIL BRANDING
export const metadata: Metadata = {
  title: "Aremu International Limited",
  description:
    "The holding company behind Africa's next generation of digital ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090B0E] text-white">
        {children}
      </body>
    </html>
  );
}
