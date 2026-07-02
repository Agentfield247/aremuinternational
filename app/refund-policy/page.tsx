"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { RefreshCcw, ArrowLeft, Mail, Globe } from "lucide-react";
import Link from "next/link";

export default function RefundPolicy() {
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
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FF5A00]/5 rounded-full blur-[150px] pointer-events-none z-0" />

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
          className="border-b border-[#2E3846] pb-12 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-instrument-serif text-white mb-4 tracking-tight">
            Refund Policy
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
          At Aremu Group, we believe in transparency and treating our customers
          fairly. This Refund Policy explains how refund requests are handled
          for payments made to Aremu-International Limited and, where
          applicable, its products, services, and portfolio companies.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Our Commitment
            </h2>
            <p className="leading-relaxed">
              If you have made a payment for one of our products or services and
              your refund request is verified as valid, we will issue a refund
              in accordance with this policy. We aim to make the refund process
              straightforward, transparent, and fair.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Eligibility for Refunds
            </h2>
            <p className="leading-relaxed">A refund may be approved where:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li>
                The payment was made to Aremu-International Limited or one of
                our authorized products or services.
              </li>
              <li>The transaction can be successfully verified.</li>
              <li>The refund request relates to the original purchaser.</li>
              <li>
                The request complies with any applicable service-specific terms.
              </li>
            </ul>
            <p className="leading-relaxed text-sm text-white/60">
              We may request additional information to verify ownership of a
              transaction before processing a refund.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Processing Time
            </h2>
            <p className="leading-relaxed">
              Once a refund request has been approved and verified, we will
              begin processing the refund as soon as reasonably possible.
              Refunds are typically completed within 7 business days.
            </p>
            <p className="leading-relaxed text-sm">
              In some cases, processing may take longer due to high volumes of
              refund requests, payment provider processing times, banking
              delays, or additional verification requirements. If a delay
              occurs, we will make reasonable efforts to keep you informed.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Refund Method
            </h2>
            <p className="leading-relaxed">
              Approved refunds will generally be issued using the same payment
              method used for the original transaction, unless an alternative
              method is required or agreed upon. The time it takes for refunded
              funds to appear in your account may depend on your bank or payment
              provider.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              5. Non-Refundable Situations
            </h2>
            <p className="leading-relaxed">
              A refund request may be declined if the transaction cannot be
              verified, the request is fraudulent or unauthorized, false or
              misleading information has been provided, or the payment was not
              made to Aremu-International Limited or an authorized product or
              service. Where a refund cannot be approved, we will provide an
              explanation where appropriate.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              6. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Refund Policy from time to time to reflect
              changes to our business or legal requirements. The latest version
              will always be available on our website.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#14181F] border border-[#2E3846] rounded-2xl p-8 mt-12 space-y-4"
          >
            <h2 className="text-xl font-bold text-white tracking-tight">
              7. Contact Us
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
