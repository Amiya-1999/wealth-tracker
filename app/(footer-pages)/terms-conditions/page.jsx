"use client";
import { fontDancingScript } from "@/app/fonts";
import { motion } from "framer-motion";

const termsData = [
  {
    title: "Introduction",
    content:
      "Welcome to our platform. By using our services, you agree to these terms and conditions.",
  },
  {
    title: "User Responsibilities",
    content:
      "Users must provide accurate information and adhere to ethical use of our services.",
  },
  {
    title: "Privacy Policy",
    content:
      "We respect your privacy. Please read our Privacy Policy for details on data usage and security.",
  },
  {
    title: "Payments and Refunds",
    content:
      "All payments are processed securely. Refunds are subject to our refund policy.",
  },
  {
    title: "Termination of Services",
    content:
      "We reserve the right to terminate accounts violating our terms without prior notice.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of the respective jurisdiction.",
  },
];

export default function TermsAndConditions() {
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
          Terms & Conditions
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg sm:text-xl lg:text-2xl">
          Please read these terms carefully before using our services.
        </p>

        <div className="space-y-6">
          {termsData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <p className="text-gray-600 mt-2 text-sm">
            If you have any questions about these terms, reach out to us at:
          </p>
          <p className="text-blue-600 mt-2">support@wealthtracker.com</p>
        </div>
      </motion.div>
    </div>
  );
}
