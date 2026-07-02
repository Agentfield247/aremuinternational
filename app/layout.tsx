import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/footer";
//import TopNav from "@/components/ui/top-nav"; // Replace with your actual nav component name

export const metadata: Metadata = {
  title: "Aremu Group",
  description: "Technology Holding Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#050608]">
      <body className="bg-[#050608] min-h-screen flex flex-col">
        {/* 1. Global Navigation */}

        {/* 2. This is where your page content gets injected */}
        <div className="flex-grow">{children}</div>

        {/* 3. Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
