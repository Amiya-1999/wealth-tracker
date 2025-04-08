"use client";
import { fontCormorantGaramond } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/insights-data";
import { motion } from "framer-motion";
import {
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";
import Image from "next/image";

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
      className={`${fontCormorantGaramond.className} min-h-screen bg-gradient-to-b from-gray-800 via-gray-500 to-gray-300 text-white pt-20`}
    >
      {/* Hero Section */}
      <motion.section
        className="text-center py-12 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-16 rounded-b-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Take Control of Your Financial Future
        </motion.h1>
        <motion.p className="text-xl sm:text-2xl lg:text-3xl text-gray-300">
          Wealth Tracker helps you track, analyze, and grow your wealth
          effortlessly.
        </motion.p>
      </motion.section>

      {/* About Wealth Tracker */}
      <motion.section
        className="py-12 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2 className="text-3xl font-semibold mb-6">
          About Wealth Tracker
        </motion.h2>
        <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Wealth Tracker is a powerful financial management platform designed to
          help individuals and businesses achieve financial freedom. Our
          platform provides deep insights, intuitive budgeting tools, and
          AI-driven investment tracking to empower users with knowledge and
          control over their finances.
        </motion.p>
        <Button
          variant="primary"
          className="bg-gray-800 text-lg px-6 py-3 hover:scale-105 transition-transform duration-300"
        >
          Start Managing Your Wealth
        </Button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-12 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-16 rounded-xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 id="features" className="text-3xl font-semibold text-center mb-6">
          Key Features
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-300">
          Discover a comprehensive suite of features tailored to help you
          manage, monitor, and maximize your financial well-being. Our platform
          combines intuitive design with powerful analytics to deliver clear,
          actionable insights—empowering you to make informed decisions with
          confidence.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl ${
                featuresData.length % 2 === 0 &&
                index === featuresData.length - 1
                  ? "lg:col-span-3 mx-auto"
                  : ""
              }`}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.3 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-12 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 id="stats" className="text-3xl font-semibold mb-6">
          Why Choose Wealth Tracker?
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-200">
          Unlike other finance apps, we offer deep insights, smart automation,
          and secure data management. Our goal is to provide a seamless
          experience in financial tracking, helping you build wealth and make
          informed decisions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl ${
                index === 8 ? "md:col-start-2" : ""
              }`}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.3 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-2xl font-extrabold mb-1">{stat.value}</h1>
              <p className="text-gray-200 text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* how it works Section */}
      <motion.section
        className="py-12 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-16 text-center text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 id="how-it-works" className="text-3xl font-semibold mb-6">
          Your Journey to Smarter Finances
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-800">
          Discover a simpler, smarter way to stay on top of your money. Whether
          you're just starting out or refining your financial goals, we make the
          journey intuitive and rewarding.
        </p>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {howItWorksData.map((data, index) => (
            <motion.div
              key={index}
              className={`bg-gray-500 p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl`}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.3 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <data.icon className="h-8 w-8 text-blue-800" />
              <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
              <p className="text-gray-800 text-center">{data.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-12 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-16 text-center rounded-xl text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 id="testimonials" className="text-3xl font-semibold mb-6">
          What Our Users Say
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-900">
          Our users have transformed their financial lives with Wealth Tracker.
          See what they have to say!
        </p>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-gray-400 p-6 rounded-lg shadow-lg hover:shadow-xl ${
                testimonialsData.length % 2 !== 0 &&
                index === testimonialsData.length - 1
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
              <p className="text-gray-900 italic">“{testimonial.quote}”</p>
              <div className="flex items-center justify-center space-x-2 mt-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col mt-2">
                  <h3 className="text-lg font-semibold leading-5">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-900 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
