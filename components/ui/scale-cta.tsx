"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ScaleCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll position relative to this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animation starts when the top of the container hits the bottom of the viewport
    // Animation ends when the top of the container hits the middle of the viewport
    offset: ["start end", "center center"],
  });

  // Map the scroll progress (0 to 1) to a scale value (0.85 to 1)
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  // Map the scroll progress to an opacity fade (0.5 to 1)
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section ref={containerRef} className="w-full bg-[#050608] py-10 md:py-24 px-4 sm:px-6 relative">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-[1440px] mx-auto w-full min-h-[500px] md:min-h-[700px] rounded-[2rem] md:rounded-[3rem] relative overflow-hidden flex flex-col justify-end p-8 md:p-16 lg:p-24 border border-white/5 shadow-2xl"
      >
        {/* Deep Ambient Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#14181F] via-[#090B0E] to-[#050608] z-0" />

        {/* Subtle orange glow to keep it on-brand for AIL */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5A00]/5 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* Content (Z-10 keeps it above the background) */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-instrument-serif text-white tracking-tight leading-[1.05] mb-10">
            The future of your industry starts here
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Primary Button (Matches the White button in your image) */}
            <a
              href="mailto:partners@aremuinternational.com"
              className="group flex items-center justify-between gap-4 bg-white p-1.5 pl-6 rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              <span className="text-[#050608] font-semibold text-sm sm:text-base">Partner With Us</span>
              <div className="w-10 h-10 rounded-full bg-[#050608] flex items-center justify-center group-hover:bg-[#FF5A00] transition-colors duration-300">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </a>

            {/* Secondary Button (Matches the outlined button in your image) */}
            <a
              href="#portfolio"
              className="flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors duration-300"
            >
              Explore Ecosystem
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
