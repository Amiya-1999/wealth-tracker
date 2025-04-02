"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaEnvelope, FaPhone } from "react-icons/fa";
import { fontLeagueSpartan } from "@/app/fonts";

const faqs = [
  {
    category: "Account",
    questions: [
      {
        q: "How do I create an account?",
        a: "Click on the 'Sign Up' button, fill in your details, and verify your email.",
      },
      {
        q: "How can I reset my password?",
        a: "Go to the login page and click on 'Forgot Password' to reset it via email.",
      },
    ],
  },
  {
    category: "Transactions",
    questions: [
      {
        q: "How do I add a transaction?",
        a: "Navigate to the dashboard, click 'Add Transaction,' fill in the details, and save.",
      },
      {
        q: "Can I edit a recorded transaction?",
        a: "Yes, go to your transaction history, select the transaction, and edit it.",
      },
    ],
  },
  {
    category: "Security",
    questions: [
      {
        q: "How secure is my financial data?",
        a: "We use end-to-end encryption and secure servers to protect your data.",
      },
      {
        q: "How can I enable two-factor authentication (2FA)?",
        a: "Go to settings, enable 2FA, and follow the steps to set it up.",
      },
    ],
  },
];

export default function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`${fontLeagueSpartan.className} bg-gradient-to-b from-gray-600 to-gray-400 min-h-screen py-3 sm:py-6 lg:py-10 px-2 sm:px-4 lg:px-6 flex flex-col items-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6 flex items-center justify-center">
          <FaQuestionCircle className="mr-2 text-blue-600" /> Help Center
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Find answers to your questions and get the support you need.
        </p>
        <div className="space-y-6">
          {faqs.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 mb-4">
                {section.category}
              </h3>
              {section.questions.map((item, index) => (
                <div key={index} className="mb-3 border-b border-gray-300">
                  <button
                    onClick={() => toggleFAQ(`${sectionIndex}-${index}`)}
                    className="text-sm md:text-base w-full text-left py-2 flex justify-between items-center font-medium text-gray-800"
                  >
                    {item.q}
                    <span className="text-gray-600">
                      {openIndex === `${sectionIndex}-${index}` ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === `${sectionIndex}-${index}` && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 py-2 text-xs md:text-sm"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
            Still Need Help?
          </h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Contact our support team for more assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-4 text-xs md:text-sm">
            <a
              href="mailto:support@wealthmanager.com"
              className="text-blue-600 flex items-center"
            >
              <FaEnvelope className="mr-2" /> support@wealthmanager.com
            </a>
            <a
              href="tel:+123456789"
              className="text-blue-600 flex items-center"
            >
              <FaPhone className="mr-2" /> +1 (234) 567-89
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
