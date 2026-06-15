"use client";

import React from "react";
import { Warp } from "@paper-design/shaders-react";
import { ArrowRight } from "lucide-react";

interface Company {
  title: string;
  tag: string;
  description: string;
  logoUrl: string;
  linkText: string;
  href: string;
}

const portfolioCompanies: Company[] = [
  {
    title: "Venqro",
    tag: "AI Management Systems",
    description:
      "An AI-powered SME business management system. It automates decisions, analyzes sales, and provides predictive forecasts for retail and multi-branch operations.",
    logoUrl: "/branch1.svg",
    linkText: "View Platform",
    href: "https://venqro.com",
  },
  {
    title: "Aremu Group",
    tag: "Dev Infastucture",
    description:
      "The core operational outlier handling localized infrastructure, idea development and scaling, corporate entity management, and critical logistical networks within emerging markets.",
    logoUrl: "/branch3.svg",
    linkText: "Build your ideas",
    href: "https://aremugroup.com",
  },
  {
    title: "CUBRIN",
    tag: "Digital Enterprise",
    description:
      "Cubrin is a hyperlocal social commerce and delivery ecosystem designed for Nigerian campuses. It enables users to discover local food, coordinate group payments with a Split Bill feature, and access instant delivery.",
    logoUrl: "/branch2.svg",
    linkText: "Explore CUBRIN",
    href: "https://cubrin.com",
  },
];

export default function PortfolioCards() {
  const getShaderConfig = (index: number) => {
    // UPDATED: Strictly mapped color palettes for each specific venture
    const configs = [
      {
        // Venqro (Tech/AI - Pure Glowing Blues)
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots" as const,
        shapeScale: 0.12,
        colors: ["#0066FF", "#00C2FF", "#0033CC", "#090B0E"],
      },
      {
        // Aremu Group (Outlier - Monochrome / Black & White)
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["#FFFFFF", "#DDDDDD", "#555555", "#000000"],
      },
      {
        // CUBRIN (Enterprise - Light Green)
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["#4ADE80", "#22C55E", "#86EFAC", "#090B0E"],
      },
    ];
    return configs[index % configs.length];
  };

  return (
    <section className="w-full bg-[#090B0E] py-24 px-6 relative border-t border-[#2E3846] overflow-hidden">
      {/* --- AMBIENT BACKGROUND ANIMATIONS --- */}
      {/* Colors updated to match the Blue/Green shift, keeping AIL Orange out of the background here */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[150px] animate-pulse pointer-events-none"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#4ADE80]/15 rounded-full blur-[150px] animate-pulse pointer-events-none"
        style={{ animationDuration: "10s", animationDelay: "1s" }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#14181F] px-3 py-1.5 ring-1 ring-[#2E3846] mb-6 shadow-md">
            <span className="text-xs font-semibold text-[#8E9BAE] uppercase tracking-widest">
              Live Track Record
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-instrument-serif text-white mb-6">
            Ecosystem Foundations
          </h2>
          <p className="text-base sm:text-lg text-[#8E9BAE] max-w-2xl md:mx-auto leading-relaxed">
            A real-time overview of the independent ventures, subsidiaries, and
            digital systems currently operating under the AIL holding structure.
          </p>
        </div>

        {/* Portfolio Grid - Mobile First (1 column on small, up to 3 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCompanies.map((company, index) => {
            const shaderConfig = getShaderConfig(index);
            return (
              <div key={index} className="relative h-[420px] group">
                {/* Background WebGL Shader */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-[#2E3846] transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:ring-white/30 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={1.2}
                    colors={shaderConfig.colors}
                  />
                </div>

                {/* Glassmorphism Foreground Card */}
                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-[#090B0E]/50 backdrop-blur-xl border border-white/10 transition-colors duration-500 hover:bg-[#090B0E]/30">
                  {/* Real SVG Logo & Tag */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#090B0E]/80 rounded-2xl ring-1 ring-white/20 shadow-lg">
                      <img
                        src={company.logoUrl}
                        alt={`${company.title} Logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    {/* The tag dynamically picks up the primary color of the shader for consistency */}
                    <span
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#090B0E] px-3 py-1 rounded-full shadow-lg"
                      style={{ backgroundColor: shaderConfig.colors[0] }}
                    >
                      {company.tag}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white font-sans tracking-tight drop-shadow-md">
                    {company.title}
                  </h3>
                  <p className="leading-relaxed flex-grow text-white/90 text-sm sm:text-base font-medium drop-shadow-md">
                    {company.description}
                  </p>

                  {/* Action Link */}
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center text-sm font-bold text-white group/link cursor-pointer w-fit bg-black/40 px-4 py-2 rounded-full ring-1 ring-white/20 hover:ring-white transition-all"
                  >
                    <span className="mr-2 group-hover/link:text-white transition-colors">
                      {company.linkText}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:text-white transition-all" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
