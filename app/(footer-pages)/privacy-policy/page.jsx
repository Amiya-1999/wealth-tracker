"use client";
import { fontDancingScript } from "@/app/fonts";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const policies = [
    {
      heading: "1. Information We Collect",
      desc: "We collect personal information such as your name, email address, and transaction history when you use our services.",
    },
    {
      heading: "2. How We Use Your Information",
      desc: "Your information is used to provide, maintain, and improve our services, as well as for customer support and security measures.",
    },
    {
      heading: "3. Sharing Your Information",
      desc: "We do not sell or rent your personal data. However, we may share it with trusted partners for service enhancement.",
    },
    {
      heading: "4. Security of Your Data",
      desc: "We implement industry-standard security measures to protect your data from unauthorized access or breaches.",
    },
    {
      heading: "5. Your Rights & Choices",
      desc: "You have the right to access, modify, or delete your personal information. Contact us for any data-related requests.",
    },
    {
      heading: "6. Updates to This Policy",
      desc: "We may update this privacy policy from time to time. Please review it periodically for changes.",
    },
  ];

  return (
    <div
      className={`${fontDancingScript.className} bg-gradient-to-b from-gray-600 to-gray-400 min-h-screen pt-24 pb-4 px-2 sm:px-4 lg:px-6 flex flex-col items-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
          Privacy Policy
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg sm:text-xl lg:text-2xl">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your information.
        </p>

        <div className="space-y-6">
          {policies.map((policy, index) => (
            <section key={index}>
              <h3 className="text-lg font-semibold text-gray-700">
                {policy.heading}
              </h3>
              <p className="text-gray-600 mt-2">{policy.desc}</p>
            </section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
