import React from "react";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import MarqueeFeatures from "@/components/ui/marquee-features";
import AboutVideoSection from "@/components/ui/about-video-section";
import PortfolioCards from "@/components/ui/portfolio-cards";
import ContactForm from "@/components/ui/contact-terminal";
import ScaleCTA from "@/components/ui/scale-cta"; // <-- Import the new CTA
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="bg-[#050608] min-h-screen">
      <ResponsiveHeroBanner />
      <MarqueeFeatures />
      <AboutVideoSection metricTarget={6} />
      <PortfolioCards />
      <ContactForm />
      <ScaleCTA /> {/* <-- Drop it here before the footer */}
      <Footer />
    </main>
  );
}
