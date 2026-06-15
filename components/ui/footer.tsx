"use client";

import React from "react";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Top: Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          <div>
            <h4 className="text-white/50 font-medium text-sm mb-6 uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Venqro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  CUBRIN
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Aremu Group
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 font-medium text-sm mb-6 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Logistics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 font-medium text-sm mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 font-medium text-sm mb-6 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 font-medium text-sm mb-6 uppercase tracking-wider">
              Guides
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Digital Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5A00] transition-colors">
                  Scaling Operations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle: Brand Hero Text */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-instrument-serif leading-tight">
            Architecting the infrastructure <br />
            for the next generation of <br />
            African enterprise.
          </h2>
        </div>

        {/* Bottom: Legal & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-lg bg-white/5 hover:bg-[#FF5A00] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-white/5 hover:bg-[#FF5A00] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-white/50">
            <p>© 2026 Aremu International Limited. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                Manage Cookie Preferences
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
