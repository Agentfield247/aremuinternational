"use client";

import React from "react";
import { Zap, LineChart, ShieldCheck, Handshake } from "lucide-react";

// --- INLINE MARQUEE COMPONENT ---
const Marquee = ({
  className,
  reverse,
  repeat = 4,
  children,
}: {
  className?: string;
  reverse?: boolean;
  repeat?: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] ${className}`}
    >
      <div
        className={`flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 justify-around gap-[var(--gap)]"
            >
              {children}
            </div>
          ))}
      </div>
    </div>
  );
};

// --- DATA ---
const marqueeData = [
  "What's the best business structure for my brand?",
  "What risks should I prepare for?",
  "How do I manage my business finances?",
  "How do I protect my intellectual property?",
  "How do I price my services?",
  "How do I stand out from my competitors?",
  "Who is my ideal customer?",
  "How do I know if my idea is viable?",
  "What business model should I choose?",
  "How much capital do I need to start?",
  "What licenses or permits do I need?",
  "How do I build a strong team?",
];

const features = [
  {
    description:
      "No jargon, no overcomplication — just clear steps you can follow to start and grow your business confidently.",
    icon: Zap,
    title: "We make things simple",
  },
  {
    description:
      "Every strategy we create is designed to help you launch faster, grow smarter, and increase profits.",
    icon: LineChart,
    title: "We focus on real results",
  },
  {
    description:
      "With years of hands-on experience across industries, we bring proven strategies and practical solutions to the table.",
    icon: ShieldCheck,
    title: "We know what works",
  },
  {
    description:
      "From your first idea to scaling your business, we provide ongoing support, not just a one-time plan.",
    icon: Handshake,
    title: "With you all the way",
  },
];

// --- MAIN COMPONENT ---
export default function MarqueeFeatures() {
  const m1 = marqueeData.slice(0, marqueeData.length / 3);
  const m2 = marqueeData.slice(
    marqueeData.length / 3,
    (marqueeData.length / 3) * 2,
  );
  const m3 = marqueeData.slice((marqueeData.length / 3) * 2);

  return (
    <section className="relative bg-[#050608] pt-20 sm:pt-40 pb-20 text-white overflow-hidden">
      {/* THE ORANGE FADE TRANSITION FROM HERO */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#FF5A00]/10 via-[#FF5A00]/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-full relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-6 px-5 text-center md:px-10">
          <h2 className="max-w-3xl font-instrument-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Removing the roadblocks to your success.
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-[#8E9BAE] leading-relaxed">
            It's easy to get lost in a sea of advice, conflicting opinions, and
            endless "must-dos." We filter out the noise, focus on what truly
            matters, and give you the kind of clarity that lets your business
            shine in the market.
          </p>

          {/* MARQUEE SECTION WITH ORANGE GLASSMORPHISM BADGES */}
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden pt-10 pb-4">
            {/* Fade Edges to blend into the pitch black background */}
            <div className="absolute left-0 z-20 h-full w-12 sm:w-24 bg-gradient-to-r from-[#050608] to-transparent" />
            <div className="absolute right-0 z-20 h-full w-12 sm:w-24 bg-gradient-to-l from-[#050608] to-transparent" />

            <div className="-mx-6 flex w-screen flex-col md:-mx-10 lg:-mx-16 gap-3">
              <Marquee className="[--duration:70s]">
                {m1.map((q) => (
                  <span
                    key={q}
                    className="rounded-full border border-[#FF5A00]/20 bg-[#FF5A00]/5 px-4 py-2 text-sm sm:text-base text-white/90 backdrop-blur-md whitespace-nowrap shadow-[0_4px_12px_rgba(255,90,0,0.05)]"
                  >
                    {q}
                  </span>
                ))}
              </Marquee>

              <Marquee className="[--duration:60s]" reverse>
                {m2.map((q) => (
                  <span
                    key={q}
                    className="rounded-full border border-[#FF5A00]/20 bg-[#FF5A00]/5 px-4 py-2 text-sm sm:text-base text-white/90 backdrop-blur-md whitespace-nowrap shadow-[0_4px_12px_rgba(255,90,0,0.05)]"
                  >
                    {q}
                  </span>
                ))}
              </Marquee>

              <Marquee className="[--duration:80s]">
                {m3.map((q) => (
                  <span
                    key={q}
                    className="rounded-full border border-[#FF5A00]/20 bg-[#FF5A00]/5 px-4 py-2 text-sm sm:text-base text-white/90 backdrop-blur-md whitespace-nowrap shadow-[0_4px_12px_rgba(255,90,0,0.05)]"
                  >
                    {q}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        {/* FEATURES GRID WITH GLASSMORPHISM HOVER */}
        <div className="mx-auto max-w-7xl mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex flex-col gap-5 px-6 py-10 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#FF5A00]/40 hover:bg-[#FF5A00]/[0.03] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,90,0,0.1)]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#FF5A00]/20 group-hover:border-[#FF5A00]/50 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#8E9BAE] group-hover:text-[#FF5A00] transition-colors duration-300" />
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <h3 className="font-semibold text-xl tracking-tight text-white group-hover:text-[#FF5A00] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#8E9BAE]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
