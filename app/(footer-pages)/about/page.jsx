"use client";
import { fontCormorantGaramond } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const features = [
    {
      title: "Track Your Expenses",
      description: "Monitor your spending habits easily",
      icon: CheckCircle,
    },
    {
      title: "Investment Insights",
      description: "Analyze your investments with AI-driven insights",
      icon: TrendingUp,
    },
    {
      title: "Bank-Level Security",
      description: "Your financial data is encrypted and protected",
      icon: ShieldCheck,
    },
    {
      title: "Smart Budgeting",
      description: "Create custom budgets and get real-time alerts",
      icon: BarChart3,
    },
    {
      title: "Community Support",
      description: "Join a growing community of financial experts",
      icon: Users,
    },
    {
      title: "Time-Saving Automation",
      description: "Automate bill payments and investments",
      icon: Clock,
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      quote: "Wealth Tracker helped me save 20% more each month!",
    },
    {
      name: "Jane Smith",
      quote: "This app gave me the financial confidence I always needed",
    },
    {
      name: "Ovi Seal",
      quote:
        "I can track my all spendings in real-time, which is a game-changer!",
    },
  ];

  return (
    <div
      className={`${fontCormorantGaramond.className} min-h-screen bg-gradient-to-b from-gray-800 via-gray-500 to-gray-300 text-white`}
    >
      {/* Hero Section */}
      <motion.section
        className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 rounded-b-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4">
          Take Control of Your Financial Future
        </motion.h1>
        <motion.p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6">
          Wealth Tracker helps you track, analyze, and grow your wealth
          effortlessly.
        </motion.p>
        <Button
          variant="secondary"
          className="text-xs sm:text-sm lg:text-base px-6 py-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Get Started
        </Button>
      </motion.section>

      {/* About Wealth Tracker */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
          About Wealth Tracker
        </motion.h2>
        <motion.p className="text-xs sm:text-sm lg:text-base text-gray-200 max-w-3xl mx-auto">
          Wealth Tracker is a powerful financial management platform designed to
          help individuals and businesses achieve financial freedom. Our
          platform provides deep insights, intuitive budgeting tools, and
          AI-driven investment tracking to empower users with knowledge and
          control over their finances.
        </motion.p>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 rounded-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-10">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, delay: index * 0.3 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-4" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-300 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 text-center text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
          Why Choose Wealth Tracker?
        </h2>
        <p className="text-xs sm:text-sm lg:text-base max-w-3xl mx-auto mb-10">
          Unlike other finance apps, we offer deep insights, smart automation,
          and secure data management. Our goal is to provide a seamless
          experience in financial tracking, helping you build wealth and make
          informed decisions.
        </p>
        <Button
          variant="secondary"
          className="text-xs sm:text-sm lg:text-base px-6 py-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Start Managing Your Wealth
        </Button>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 text-center rounded-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-gray-900">
          What Our Users Say
        </h2>
        <p className="text-xs sm:text-sm lg:text-base max-w-3xl mx-auto mb-10 text-gray-900">
          Our users have transformed their financial lives with Wealth Tracker.
          See what they have to say!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl ${
                testimonials.length % 2 !== 0 &&
                index === testimonials.length - 1
                  ? "md:col-span-2 mx-auto"
                  : ""
              }`}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, delay: index * 0.3 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xs sm:text-sm lg:text-base text-gray-300 italic">
                “{testimonial.quote}”
              </p>
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mt-4">
                - {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
