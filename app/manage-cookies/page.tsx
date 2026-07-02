"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Settings, ArrowLeft, Check, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function ManageCookies() {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  // Load saved preferences on mount
  useEffect(() => {
    const savedPrefs = localStorage.getItem("aremu_cookie_prefs");
    if (savedPrefs) {
      const prefs = JSON.parse(savedPrefs);
      setAnalytics(prefs.analytics);
      setMarketing(prefs.marketing);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "aremu_cookie_prefs",
      JSON.stringify({ analytics, marketing }),
    );
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main className="min-h-screen bg-[#050608] text-[#8E9BAE] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF5A00]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Base
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-[#2E3846] pb-12 mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 mb-6 backdrop-blur-md">
            <Settings className="w-4 h-4 text-[#FF5A00]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">
              Preference Center
            </span>
          </div>
          <h1 className="text-5xl font-instrument-serif text-white mb-4 tracking-tight">
            Manage Cookies
          </h1>
          <p className="text-lg leading-relaxed">
            Customize your tracking and data preferences. We respect your
            privacy and only deploy scripts with your explicit consent.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Essential Cookies (Always On) */}
          <div className="bg-[#14181F] border border-[#2E3846] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 opacity-80">
            <div>
              <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                Essential Infrastructure{" "}
                <ShieldAlert className="w-4 h-4 text-green-500" />
              </h3>
              <p className="text-sm text-white/60 max-w-md">
                Required for the website to function securely. These cannot be
                disabled.
              </p>
            </div>
            <div className="bg-[#2E3846] text-white/50 px-4 py-2 rounded-full text-sm font-bold cursor-not-allowed">
              Always Active
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-[#14181F] border border-[#2E3846] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:border-white/20">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">
                Performance Analytics
              </h3>
              <p className="text-sm text-white/60 max-w-md">
                Allows us to measure ecosystem traffic and optimize the
                platform's speed and usability.
              </p>
            </div>
            <button
              onClick={() => setAnalytics(!analytics)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${analytics ? "bg-[#FF5A00]" : "bg-[#2E3846]"}`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${analytics ? "translate-x-8" : "translate-x-1"}`}
              />
            </button>
          </div>

          {/* Marketing Cookies */}
          <div className="bg-[#14181F] border border-[#2E3846] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:border-white/20">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">
                Targeted Communications
              </h3>
              <p className="text-sm text-white/60 max-w-md">
                Used to deliver relevant updates about Aremu Group ventures and
                measure campaign effectiveness.
              </p>
            </div>
            <button
              onClick={() => setMarketing(!marketing)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${marketing ? "bg-[#FF5A00]" : "bg-[#2E3846]"}`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${marketing ? "translate-x-8" : "translate-x-1"}`}
              />
            </button>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <button
            onClick={handleSave}
            className="bg-white text-[#050608] hover:bg-gray-200 transition-colors px-8 py-3 rounded-full font-bold text-sm"
          >
            Save Preferences
          </button>
          {saved && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-green-500 text-sm font-bold"
            >
              <Check className="w-4 h-4" /> Preferences Updated
            </motion.span>
          )}
        </div>
      </div>
    </main>
  );
}
