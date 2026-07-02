"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          <div>
            <h4 className="text-white/50 font-medium text-sm mb-6 uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a
                  href="venqro.com"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Venqro
                </a>
              </li>
              <li>
                <a
                  href="cubrin.com"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  CUBRIN
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Basable
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
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
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
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
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
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="hover:text-[#FF5A00] transition-colors"
                >
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
                <a
                  href="/terms"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-instrument-serif leading-tight">
            Architecting the infrastructure <br />
            for the next generation of <br />
            African enterprise.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex gap-4">
            {/* LinkedIn SVG */}
            <a
              href="#"
              className="p-3 rounded-lg bg-white/5 hover:bg-[#FF5A00] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Twitter/X SVG */}
            <a
              href="#"
              className="p-3 rounded-lg bg-white/5 hover:bg-[#FF5A00] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-white/50">
            <p>© 2026 Aremu International Limited. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                Manage Cookie Preferences
              </a>
              <a href="/terms" className="hover:underline">
                Terms of Use
              </a>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
