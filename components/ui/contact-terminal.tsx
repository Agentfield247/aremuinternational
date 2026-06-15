"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import InfrastructureSketch from "./infrastructure-sketch";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="w-full bg-[#050608] py-16 sm:py-24 px-5 sm:px-6 relative border-t border-white/5 overflow-hidden">
      <InfrastructureSketch />

      {/* Added a subtle top gradient specifically to make text easier to read on mobile */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#050608] via-[#050608]/80 to-transparent pointer-events-none z-0" />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF5A00]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0066FF]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          {/* LEFT COLUMN: Contact Details */}
          <div className="flex flex-col items-start max-w-xl relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#090B0E]/80 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FF5A00] animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-instrument-serif text-white tracking-tight leading-[1.1] mb-5">
              Let's build the future of digital infrastructure.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#8E9BAE] leading-relaxed mb-10">
              Whether you are an institutional investor, a founder seeking
              operational support, or looking to integrate AIL’s infrastructure
              into your enterprise, we are ready to connect.
            </p>

            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#090B0E]/60 backdrop-blur-md border border-white/5 hover:border-[#FF5A00]/30 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF5A00]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5A00]" />
                </div>
                <div className="w-full overflow-hidden">
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-[#8E9BAE] text-xs sm:text-sm mb-2">
                    Our team responds within 24 hours.
                  </p>
                  {/* break-all added here to prevent mobile overflow */}
                  <a
                    href="mailto:partners@aremuinternational.com"
                    className="text-[#FF5A00] font-medium hover:text-white transition-colors break-all text-sm sm:text-base"
                  >
                    partners@aremuinternational.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#090B0E]/60 backdrop-blur-md border border-white/5 hover:border-[#0066FF]/30 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Headquarters
                  </h4>
                  <p className="text-[#8E9BAE] text-xs sm:text-sm leading-relaxed">
                    Ikeja, Lagos
                    <br />
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Glassmorphism Form */}
          <div className="w-full relative group mt-4 lg:mt-0">
            {/* p-6 on mobile, p-10 on desktop */}
            <div className="relative w-full rounded-3xl bg-[#090B0E]/60 backdrop-blur-2xl border border-white/10 shadow-2xl p-6 sm:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[350px] text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#4ADE80]/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-[#4ADE80]/30">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#4ADE80]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Message Received
                  </h3>
                  <p className="text-sm sm:text-base text-[#8E9BAE]">
                    We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 relative z-10"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs sm:text-sm font-medium text-[#8E9BAE]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-[#050608]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all backdrop-blur-md"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs sm:text-sm font-medium text-[#8E9BAE]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-[#050608]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all backdrop-blur-md"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-xs sm:text-sm font-medium text-[#8E9BAE]"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full bg-[#050608]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all backdrop-blur-md"
                      placeholder="Investment Inquiry"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs sm:text-sm font-medium text-[#8E9BAE]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-[#050608]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00] transition-all resize-none backdrop-blur-md"
                      placeholder="How can we collaborate?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5A00] px-6 py-4 text-sm font-bold text-white hover:bg-[#E04F00] transition-all shadow-[0_4px_14px_0_rgba(255,90,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,90,0,0.23)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
