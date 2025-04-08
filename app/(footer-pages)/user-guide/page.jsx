"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fontLeagueSpartan } from "@/app/fonts";

export default function UserGuide() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const guideSections = [
    {
      title: "Getting Started",
      content:
        "Learn how to create an account, set up your profile, and navigate the dashboard.",
    },
    {
      title: "Managing Your Finances",
      content:
        "Understand how to track income, expenses, and investments efficiently.",
    },
    {
      title: "Setting Financial Goals",
      content:
        "Step-by-step guide on setting, tracking, and achieving financial goals.",
    },
    {
      title: "Security & Privacy",
      content:
        "Learn how we protect your data and how you can enhance your account security.",
    },
    {
      title: "Support & Resources",
      content:
        "Find FAQs, tutorials, and contact options for any assistance you need.",
    },
  ];

  return (
    <div
      className={`${fontLeagueSpartan.className} bg-gradient-to-b from-gray-600 to-gray-400 min-h-screen flex flex-col items-center pt-24 pb-4 px-2 sm:px-4 lg:px-6`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
          User Guide
        </h2>
        <p className="text-center text-gray-600 mb-8 text-base sm:text-lg lg:text-xl">
          A detailed guide to help you make the most out of our platform.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {guideSections.map((section, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-700 p-4 text-sm"
                >
                  {section.content}
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
