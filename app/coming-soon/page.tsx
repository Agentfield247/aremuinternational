"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-[#050608] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* --- AMBIENT BACKGROUND --- */}
      {/* Central AIL Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF5A00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />

      {/* Subtle Grid Overlay (Optional, uses basic CSS background) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* --- CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full"
      >
        {/* Tech Icon Badge */}
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl backdrop-blur-md">
          <Terminal className="w-8 h-8 text-[#FF5A00]" />
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl font-instrument-serif text-white mb-6 leading-[1.1] tracking-tight">
          Architecting <br className="hidden sm:block" /> the next phase.
        </h1>

        <p className="text-[#8E9BAE] text-base md:text-lg mb-10 leading-relaxed max-w-lg mx-auto">
          This sector of the Aremu Group ecosystem is currently undergoing
          active physical and digital deployment. We are laying the
          infrastructure.
        </p>

        {/* Lead Capture / Notification Input */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto mb-12">
          <input
            type="email"
            placeholder="Enter your email for updates..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#FF5A00] transition-all"
          />
          <button className="bg-[#FF5A00] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#FF5A00]/80 transition-colors">
            Notify Me
          </button>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="group flex items-center justify-center gap-3 text-white/50 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">
            Return to Base
          </span>
        </Link>
      </motion.div>
    </main>
  );
}
