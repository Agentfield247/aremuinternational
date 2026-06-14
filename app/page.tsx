import React from "react";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import MarqueeFeatures from "@/components/ui/marquee-features";
import AboutVideoSection from "@/components/ui/about-video-section";

export default function Home() {
  return (
    <main className="bg-[#050608] min-h-screen">
      <ResponsiveHeroBanner />
      <MarqueeFeatures />
      {/* We pass the number 6 right here! */}
      <AboutVideoSection metricTarget={6} />
    </main>
  );
}
