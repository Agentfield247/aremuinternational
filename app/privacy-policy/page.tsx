"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, ArrowLeft, Mail, Globe } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[#050608] text-[#8E9BAE] py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF5A00]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Base
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-[#2E3846] pb-12 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-instrument-serif text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-white/40">
            Effective Date: July 2, 2026
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-lg leading-relaxed mb-12 font-medium"
        >
          Aremu Group (“we,” “our,” or “us”), the trading name of
          Aremu-International Limited, is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard
          information when you visit our website at{" "}
          <span className="text-[#FF5A00]">https://aremugroup.com</span>. By
          using our website, you agree to the practices described in this
          Privacy Policy.
        </motion.p>

        {/* Legal Text Nodes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              1. About Us
            </h2>
            <p className="leading-relaxed">
              Aremu-International Limited is a technology holding company
              focused on building and supporting independent digital ventures
              that solve real-world problems through technology.
            </p>
            <p className="leading-relaxed">
              Our website serves as an informational platform where visitors can
              learn about our mission, portfolio companies, projects, products,
              and partnership opportunities.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed">
              Our website is primarily informational, and we collect only the
              information necessary to communicate with visitors and operate the
              website effectively.
            </p>

            <div className="pl-4 border-l border-[#2E3846] space-y-3 mt-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                Information You Provide
              </h3>
              <p className="text-sm">
                We may collect information that you voluntarily provide when you
                contact us through our contact form, send us an email, or submit
                partnership, investment, or business enquiries. This information
                may include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-white/80 pl-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Company or organization (if provided)</li>
                <li>Subject of your enquiry</li>
                <li>Any information contained in your message</li>
              </ul>

              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mt-6">
                Information Collected Automatically
              </h3>
              <p className="text-sm">
                Like most websites, certain technical information may be
                collected automatically when you visit our website, including IP
                address, browser type, device information, operating system,
                pages visited, date and time of your visit, and general website
                usage information. This information helps us maintain the
                security, performance, and reliability of our website.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              We use the information we collect to respond to enquiries,
              communicate with prospective partners or investors, improve our
              website layout, maintain security performance, and comply with
              legal obligations. We do not use your information for unsolicited
              marketing or spam.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              4. Cookies
            </h2>
            <p className="leading-relaxed">
              Our website may use cookies or similar technologies to improve
              functionality and enhance your browsing experience. Cookies help
              us understand how visitors interact with our website. You may
              choose to disable cookies through your browser settings, although
              some features of the website may not function as intended.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              5. Third-Party Services
            </h2>
            <p className="leading-relaxed">
              Some features of our website or our portfolio companies may rely
              on trusted third-party service providers (payment service
              providers, cloud hosting providers, email service providers,
              website analytics, and communication platforms). Where you
              interact directly with these services, your information is
              governed by their respective privacy policies. Aremu Group does
              not control the privacy practices of third-party websites or
              services.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              6. Data Sharing
            </h2>
            <p className="leading-relaxed">
              We do not sell, rent, or trade your personal information to third
              parties. We may disclose information only where required by law,
              to protect our legal rights, to provide a requested service, or
              when shared with trusted service providers acting on our behalf
              under strict confidentiality obligations.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              7. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement reasonable technical and organizational measures to
              protect information against unauthorized access, disclosure,
              alteration, or destruction. While we strive to safeguard your
              information, no method of electronic transmission or online
              storage can be guaranteed to be completely secure.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              8. External Links
            </h2>
            <p className="leading-relaxed">
              Our website may contain links to portfolio companies, partner
              organizations, or other third-party websites. Once you leave our
              website, this Privacy Policy no longer applies. We encourage you
              to review the privacy policies of any external websites you visit.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              9. Your Rights
            </h2>
            <p className="leading-relaxed">
              Depending on applicable laws, you may have the right to request
              access to your personal information, request correction of
              inaccurate data, request deletion where appropriate, or withdraw
              consent. We will respond to reasonable requests in accordance with
              applicable laws.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              10. Children’s Privacy
            </h2>
            <p className="leading-relaxed">
              Our website is intended for a general audience and is not directed
              toward children under the age of 13. We do not knowingly collect
              personal information from children.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
              11. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes to our website, services, or legal obligations. Any
              updates will be published on this page with a revised Effective
              Date. Your continued use of the website after any changes
              constitutes acceptance of the updated Privacy Policy.
            </p>
          </motion.section>

          {/* Contact Node */}
          <motion.section
            variants={itemVariants}
            className="bg-[#14181F] border border-[#2E3846] rounded-2xl p-8 mt-12 space-y-4"
          >
            <h2 className="text-xl font-bold text-white tracking-tight">
              12. Contact Us
            </h2>
            <p className="text-sm text-white/70">
              If you have any questions about this Privacy Policy or how we
              handle your information, please contact us:
            </p>
            <div className="space-y-2 font-mono text-sm pt-2 text-white">
              <p className="font-sans font-bold text-base text-[#FF5A00]">
                Aremu-International Limited (Trading as Aremu Group)
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/40" /> hello@aremugroup.com
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-white/40" />{" "}
                https://aremugroup.com
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
