"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { fontCormorantGaramond } from "@/app/fonts";

const FinancialBlogPage = () => {
  const blogs = [
    {
      name: "Investopedia",
      url: "https://www.investopedia.com",
      category: "Investing",
      description: "Trusted source for investing and financial education.",
    },
    {
      name: "NerdWallet",
      url: "https://www.nerdwallet.com",
      category: "Budgeting",
      description: "Smart money moves for better financial decisions.",
    },
    {
      name: "The Motley Fool",
      url: "https://www.fool.com",
      category: "Investing",
      description: "Stock market insights and financial advice.",
    },
    {
      name: "Bankrate",
      url: "https://www.bankrate.com",
      category: "Saving",
      description: "Compare financial products and get expert advice.",
    },
    {
      name: "Forbes Finance",
      url: "https://www.forbes.com/finance",
      category: "General",
      description: "Latest finance and wealth management insights.",
    },
    {
      name: "Money Smart Guides",
      url: "https://www.moneysmartguides.com/",
      category: "Saving",
      description: "Practical tips for saving and managing money.",
    },
    {
      name: "Reach Financial Independence",
      url: "https://reachfinancialindependence.com/",
      category: "Budgeting",
      description: "A blog about financial independence and smart budgeting.",
    },
  ];

  const categories = ["All", "Investing", "Budgeting", "Saving", "General"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div
      className={`${fontCormorantGaramond.className} bg-gradient-to-b from-gray-800 via-gray-500 to-gray-300 min-h-screen p-6`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100"
        >
          Explore Financial Blogs
        </motion.h1>
        <p className="text-gray-200 mt-2 text-xs sm:text-sm lg:text-base">
          Enhance your financial knowledge with these trusted sources.
        </p>
        <div className="mt-6 max-w-lg mx-auto flex flex-wrap gap-2">
          <Input placeholder="Search articles..." className="flex-1" />
          <Button
            variant="default"
            className="cursor-pointer text-sm sm:text-base lg:text-lg hover:scale-105 transition-transform duration-300"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 my-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-xs sm:text-sm lg:text-base font-medium transition cursor-pointer ${
              selectedCategory === category
                ? "bg-gray-900 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={blog.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105"
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
              {blog.name}
            </h3>
            <p className="text-gray-600 mt-2 text-xs sm:text-sm lg:text-base">
              {blog.description}
            </p>
            <Link
              href={blog.url}
              target="_blank"
              className="mt-3 text-sm md:text-base inline-block text-blue-600 hover:underline"
            >
              Visit Blog →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Suggest a Blog */}
      <div className="max-w-3xl mx-auto bg-gray-200 p-6 rounded-lg text-center mt-12">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
          Know a great blog?
        </h3>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Suggest a financial blog that we should add to the list.
        </p>
        <button className="text-sm sm:text-base lg:text-lg mt-3 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition hover:scale-105 duration-300">
          Submit Suggestion
        </button>
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center bg-gray-800 text-white p-10 rounded-lg"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Get the latest financial insights delivered to your inbox.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 max-w-lg mx-auto">
          <Input placeholder="Enter your email" className="flex-1" />
          <Button
            variant="secondary"
            className="text-sm sm:text-base lg:text-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Subscribe
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default FinancialBlogPage;
