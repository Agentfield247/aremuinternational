"use client";

import React, { useState } from "react";

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Partner {
  logoUrl: string;
  href: string;
  altText?: string;
}

interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  partnersTitle?: string;
  partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl = "/AIL logo (2).svg", // Using the cleaned up filename
  backgroundImageUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg",
  navLinks = [
    { label: "Home", href: "/", isActive: true },
    { label: "About", href: "/coming-soon" },
    { label: "Portfolio", href: "/coming-soon" },
    { label: "Terms and Policy", href: "/terms" },
    { label: "Careers", href: "/coming-soon" },
  ],
  ctaButtonText = "Invest / Partner",
  ctaButtonHref = "/coming-soon",

  // --- UPDATED RC NUMBER BADGE ---
  badgeLabel = "CAC",
  badgeText = "RC: 8939169",

  title = "Empowering Digital ",
  titleLine2 = "Ventures in Africa",
  description = "Aremu International Limited is a parent empowerment company that builds, supports, and operates a portfolio of independent digital ventures designed to solve specific real-world problems.",
  primaryButtonText = "Explore Portfolio",
  primaryButtonHref = "/portfolio",
  secondaryButtonText = "Partner With Us",
  secondaryButtonHref = "/partners",
  partnersTitle = "Operating Infrastructure Under AIL",

  partners = [
    {
      logoUrl: "/branch1.svg",
      href: "#",
      altText: "AIL Subsidiary Branch 1",
    },
    {
      logoUrl: "/branch2.svg",
      href: "#",
      altText: "AIL Subsidiary Branch 2",
    },
  ],
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative">
      <img
        src={backgroundImageUrl}
        alt=""
        className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />

      {/* FIXED, TRANSPARENT, STICKY HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
        <div className="mx-6">
          <div className="flex items-center justify-between pt-6 pb-4">
            {/* UPDATED LOGO BLOCK (TEXT REMOVED, SIZED UP) */}
            <a
              href="/AIL logo (2).svg"
              className="inline-flex items-center group text-left text-decoration-none z-50"
            >
              <img
                src={logoUrl}
                alt="AIL Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <nav className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur-md">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium hover:text-white font-sans transition-colors ${
                      link.isActive ? "text-white/90" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={ctaButtonHref}
                  className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 font-sans transition-colors"
                >
                  {ctaButtonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-md z-50"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white/90"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white/90"
                >
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN PANEL */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[100%] left-0 w-full px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="bg-[#090B0E]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    link.isActive
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px w-full bg-white/10 my-2" />
              <a
                href={ctaButtonHref}
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-white px-4 py-3 text-base font-medium text-neutral-900 hover:bg-white/90 transition-colors"
              >
                {ctaButtonText}
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="z-10 relative">
        <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-36 px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
              <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full py-0.5 px-2 font-sans">
                {badgeLabel}
              </span>
              <span className="text-sm font-medium text-white/90 font-sans">
                {badgeText}
              </span>
            </div>

            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-white tracking-tight font-instrument-serif font-normal animate-fade-slide-in-2">
              {title}
              <br className="hidden sm:block" />
              {titleLine2}
            </h1>

            <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/80 max-w-2xl mt-6 mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
              <a
                href={primaryButtonHref}
                className="inline-flex items-center gap-2 hover:bg-white/15 text-sm font-medium text-white bg-white/10 ring-white/15 ring-1 rounded-full py-3 px-5 font-sans transition-colors"
              >
                {primaryButtonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href={secondaryButtonHref}
                className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-white/90 hover:text-white font-sans transition-colors"
              >
                {secondaryButtonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <p className="animate-fade-slide-in-1 text-sm text-white/70 text-center">
              {partnersTitle}
            </p>
            <div className="grid grid-cols-2 min-[412px]:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 sm:gap-8 mt-6 items-center justify-items-start sm:justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.href}
                  className="relative flex items-center justify-start sm:justify-center w-full max-w-[100px] sm:max-w-[120px] h-[28px] sm:h-[36px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.altText || `Partner ${index + 1}`}
                    className="w-full h-full object-contain object-left sm:object-center"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
