"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Mail, Globe } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[#050608] text-[#8E9BAE] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF5A00]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-  border-[#2E3846] pb-12 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-instrument-serif text-white mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-sm font-mono text-white/40">
            Effective Date: July 2, 2026
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-lg leading-relaxed mb-12 font-medium"
        >
          Welcome to the Aremu Group website. By accessing or using this
          website, you agree to be bound by these Terms and Conditions. If you
          do not agree with these Terms, please discontinue use of this website.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Company Information
            </h2>
            <p className="leading-relaxed">
              This website is owned and operated by Aremu-International Limited,
              a company incorporated in the Federal Republic of Nigeria. Trading
              Name: Aremu Group.
            </p>
            <p className="leading-relaxed">
              Aremu-International Limited is a technology holding company
              established to identify real-world challenges and build
              independent digital ventures that provide innovative and practical
              solutions through technology.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Purpose of This Website
            </h2>
            <p className="leading-relaxed">
              The purpose of this website is to provide information about Aremu
              Group, its mission, portfolio companies, products, and
              initiatives. Through this website, visitors may learn about our
              vision, explore our portfolio of technology ventures, view
              information about subsidiaries, read milestones, or contact us
              regarding partnerships, investment opportunities, or corporate
              enquiries. This website is intended for informational purposes
              only unless otherwise stated.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              Unless otherwise stated, all content on this website—including
              text, graphics, logos, illustrations, icons, images, videos,
              software, designs, trademarks, and other materials—is owned by or
              licensed to Aremu-International Limited and is protected under
              applicable intellectual property laws. You may view, download, or
              print content solely for personal and non-commercial use.
            </p>
            <p className="text-sm text-white/50 font-semibold uppercase tracking-wider">
              Explicit Restrictions:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-white/80 pl-2">
              <li>
                Copy or reproduce website content for commercial purposes.
              </li>
              <li>Modify or create derivative works.</li>
              <li>
                Redistribute or republish materials without prior written
                permission.
              </li>
              <li>Use our trademarks or branding without authorization.</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Accuracy of Information
            </h2>
            <p className="leading-relaxed">
              We strive to ensure that all information published on this website
              is accurate and up to date. However, information regarding
              products, projects, subsidiaries, future developments, business
              plans, or company statistics may change over time.
              Aremu-International Limited does not guarantee that all
              information will always remain complete, accurate, or current.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              5. Portfolio Companies and Future Ventures
            </h2>
            <p className="leading-relaxed">
              The website may reference current portfolio companies,
              subsidiaries, future products, or planned initiatives.
              Descriptions of projects under development are provided for
              informational purposes only and should not be interpreted as
              guarantees of future availability, commercial release, investment
              opportunity, or business performance. Each portfolio company may
              operate independently and may have its own terms, privacy policy,
              and service agreements where applicable.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              6. Third-Party Services
            </h2>
            <p className="leading-relaxed">
              Certain services offered by Aremu-International Limited or its
              portfolio companies may integrate with trusted third-party
              providers, including payment processors, communication platforms,
              cloud infrastructure providers, analytics tools, or other service
              providers. When you interact with these third-party services, your
              use of those services may also be governed by their respective
              terms and privacy policies. Aremu-International Limited is not
              responsible for the content, policies, or practices of third-party
              websites or services.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              7. External Links
            </h2>
            <p className="leading-relaxed">
              This website may contain links to external websites, subsidiaries,
              portfolio companies, or partner organizations. These links are
              provided solely for convenience and informational purposes.
              Aremu-International Limited does not endorse or assume
              responsibility for the content, availability, or practices of
              external websites.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              8. Acceptable Use
            </h2>
            <p className="leading-relaxed">
              You agree to use this website lawfully and responsibly. You must
              not attempt to gain unauthorized access to the website or its
              infrastructure, introduce malicious software or harmful code,
              interfere with the operation or security of the website, or use
              the website in any manner that violates applicable laws or
              regulations.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              9. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              This website is provided on an “as is” and “as available” basis.
              To the fullest extent permitted by law, Aremu-International
              Limited shall not be liable for any direct, indirect, incidental,
              consequential, or special damages arising from your access to or
              use of this website. Nothing in these Terms excludes liability
              where such exclusion is prohibited by applicable law.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              10. Website Availability
            </h2>
            <p className="leading-relaxed">
              While we aim to keep this website available at all times, we do
              not guarantee uninterrupted access. We reserve the right to
              suspend, modify, update, or discontinue any part of the website at
              any time without prior notice.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              11. Changes to These Terms
            </h2>
            <p className="leading-relaxed">
              Aremu-International Limited may revise these Terms and Conditions
              from time to time. Updated versions will be published on this page
              with a revised Effective Date. Your continued use of the website
              after changes become effective constitutes acceptance of the
              revised Terms.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              12. Governing Law
            </h2>
            <p className="leading-relaxed">
              These Terms and Conditions shall be governed by and interpreted in
              accordance with the laws of the Federal Republic of Nigeria. Any
              disputes arising from or relating to these Terms shall be subject
              to the jurisdiction of the competent courts of Nigeria.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#14181F] border border-[#2E3846] rounded-2xl p-8 mt-12 space-y-4"
          >
            <h2 className="text-xl font-bold text-white tracking-tight">
              13. Contact Us
            </h2>
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
