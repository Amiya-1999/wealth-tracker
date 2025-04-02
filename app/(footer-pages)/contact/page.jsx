"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { fontBadScript } from "@/app/fonts";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className={`${fontBadScript.className} bg-gradient-to-b from-gray-800 via-gray-500 to-gray-300 min-h-screen flex flex-col items-center justify-center py-10 px-6`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.5),inset_4px_4px_10px_rgba(0,0,0,0.3)]"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Have questions or need assistance? We're here to help! Reach out via
          the form below or contact us directly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1 text-sm md:text-base">
              Name
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow-[2px_2px_5px_rgba(0,0,0,0.5),inset_2px_2px_5px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 text-sm md:text-base">
              Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow-[2px_2px_5px_rgba(0,0,0,0.5),inset_2px_2px_5px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 text-sm md:text-base">
              Message
            </label>
            <Textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="shadow-[2px_2px_5px_rgba(0,0,0,0.5),inset_2px_2px_5px_rgba(0,0,0,0.3)]"
            />
          </div>
          <Button
            type="submit"
            className="text-sm md:text-base w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Send Message
          </Button>
        </form>
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-green-600 font-semibold text-sm md:text-base"
          >
            Thank you! Your message has been sent.
          </motion.p>
        )}
      </motion.div>
      <div className="mt-12 text-center text-sm md:text-base">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
          Other Ways to Reach Us
        </h3>
        <p className="text-gray-600 mt-2">
          Email:{" "}
          <a href="mailto:support@wealthmanager.com" className="text-blue-600">
            support@wealthmanager.com
          </a>
        </p>
        <p className="text-gray-600">
          Phone:{" "}
          <a href="tel:+123456789" className="text-blue-600">
            +1 (234) 567-89
          </a>
        </p>
        <p className="text-gray-600">
          Address: Chakmaoa, Lakhichak, Kharagpur(Local),
          <br /> West Bengal, India - 721301
        </p>
      </div>
    </div>
  );
}
