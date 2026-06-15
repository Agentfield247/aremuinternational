import React from "react";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import MarqueeFeatures from "@/components/ui/marquee-features";
import AboutVideoSection from "@/components/ui/about-video-section";
import PortfolioCards from "@/components/ui/portfolio-cards";
import ContactTerminal from "@/components/ui/contact-terminal";

export default function Home() {
  return (
    <main className="bg-[#050608] min-h-screen">
      <ResponsiveHeroBanner />
      <MarqueeFeatures />
      <AboutVideoSection metricTarget={6} />
      <PortfolioCards />
      <ContactTerminal />
    </main>
  );
}
