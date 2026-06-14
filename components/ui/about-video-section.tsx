"use client";

import React, { useState, useEffect, useRef } from "react";

interface AboutVideoSectionProps {
  title?: string;
  description?: string;
  videoEmbedUrl?: string;
  metricTarget?: number;
  metricLabel?: string;
}

const AboutVideoSection: React.FC<AboutVideoSectionProps> = ({
  title = "Building Africa's Digital Infrastructure",
  description = "Aremu International Limited identifies everyday challenges and creates targeted solutions through technology-driven businesses. We empower startups to scale while delivering practical solutions that make daily life more efficient and connected.",
  // Defaulting to a YouTube embed structure (Update with your specific link when ready)
  videoEmbedUrl = "https://www.youtube.com/embed/bX2h5O8L130?si=pXzTqR3m5K8wQy4D&controls=0&rel=0",
  metricTarget = 15,
  metricLabel = "Active Ventures Founded",
}) => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger the counter when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate the counter engine
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = metricTarget / (duration / 16); // 60fps calculation

    const timer = setInterval(() => {
      start += increment;
      if (start >= metricTarget) {
        setCount(metricTarget);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, metricTarget]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#090B0E] relative overflow-hidden py-20 sm:py-32"
    >
      {/* Subtle Matrix Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Border Glow for smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5A00]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT BLOCK */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF5A00]/10 px-3 py-1.5 ring-1 ring-[#FF5A00]/30 backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FF5A00] animate-pulse" />
              <span className="text-xs font-semibold text-[#FF5A00] uppercase tracking-widest">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-instrument-serif text-white tracking-tight leading-[1.1] mb-6">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#8E9BAE] leading-relaxed mb-10">
              {description}
            </p>

            {/* UPGRADED METRIC COUNTER */}
            <div className="flex flex-col p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm min-w-[240px] group hover:border-[#FF5A00]/40 transition-colors duration-300">
              <span className="text-5xl sm:text-6xl font-bold font-sans text-[#FF5A00] mb-2 drop-shadow-[0_0_15px_rgba(255,90,0,0.3)]">
                {count}+
              </span>
              <span className="text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                {metricLabel}
              </span>
            </div>
          </div>

          {/* RIGHT VIDEO BLOCK (MOBILE FIRST 9:16 SHORT SIZE) */}
          <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Aspect Ratio:
              aspect-[9/16] forces it to look like a TikTok/Short on mobile.
              md:aspect-video expands it to 16:9 on laptops.
            */}
            <div className="relative w-full max-w-sm md:max-w-full aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_40px_rgba(255,90,0,0.1)] group transition-all duration-500 hover:ring-[#FF5A00]/50 hover:shadow-[0_0_50px_rgba(255,90,0,0.2)]">
              <iframe
                src={videoEmbedUrl}
                title="AIL Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;
