"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { fontLeagueSpartan } from "@/app/fonts";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is Wealth Manager?",
        answer:
          "Wealth Manager is a personal finance tracking platform designed to help you manage your income, expenses, and investments efficiently.",
      },
      {
        question: "Is Wealth Manager free to use?",
        answer:
          "Yes! Our basic features are free to use, with premium plans available for advanced analytics and tools.",
      },
    ],
  },
  {
    category: "Account",
    questions: [
      {
        question: "How do I reset my password?",
        answer:
          "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can delete your account in the account settings. Keep in mind this action is irreversible.",
      },
    ],
  },
  {
    category: "Billing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit/debit cards, PayPal, and other major payment gateways.",
      },
      {
        question: "Can I get a refund?",
        answer: "We offer a 14-day money-back guarantee for new subscribers.",
      },
    ],
  },
  {
    category: "Security",
    questions: [
      {
        question: "Is my data secure?",
        answer:
          "Absolutely! We use industry-standard encryption and security measures to keep your data safe.",
      },
      {
        question: "Do you share my information?",
        answer: "No, we do not share your personal data with third parties.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`${fontLeagueSpartan.className} bg-gradient-to-b from-gray-600 to-gray-400 min-h-screen flex flex-col items-center pt-24 pb-4 px-2 sm:px-4 lg:px-6`}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Find answers to the most common questions about our platform.
        </p>

        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
              {section.category}
            </h3>
            {section.questions.map((item, index) => (
              <div
                key={index}
                className="mb-4 border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(`${sectionIndex}-${index}`)}
                  className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-800">
                    {item.question}
                  </span>
                  <FaChevronDown
                    className={`text-gray-500 transition-transform duration-300 ${
                      openIndex === `${sectionIndex}-${index}`
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height:
                      openIndex === `${sectionIndex}-${index}` ? "auto" : 0,
                    opacity: openIndex === `${sectionIndex}-${index}` ? 1 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                  className="overflow-hidden bg-white px-4 pb-4"
                >
                  <p className="text-gray-600 text-sm">{item.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
