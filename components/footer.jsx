"use client";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaHome,
  FaShieldAlt,
  FaFile,
  FaQuestionCircle,
  FaGithub,
  FaGavel,
  FaInfoCircle,
  FaHandsHelping,
  FaHeadphonesAlt,
  FaNewspaper,
  FaBookOpen,
} from "react-icons/fa";
import { fontDelius } from "../app/fonts";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className={`${fontDelius.className} bg-gray-900 text-gray-300 py-10 px-2 text-center`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, clipPath: "circle(200% at 0% 0%)" }}
        transition={{ duration: 3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-2 md:px-5 lg:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Short Description */}
          <div>
            <motion.h2 className="text-2xl font-semibold text-white">
              Wealth Tracker
            </motion.h2>
            <motion.p
              transition={{ delay: 0.2 }}
              className="mt-2 text-gray-400"
            >
              Track, plan, and grow your finances effortlessly with our powerful
              tools.
            </motion.p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
            <Link
              href="/"
              className="h-fit flex items-center hover:text-white transition"
            >
              <FaHome className="mr-1 w-4 h-4" /> Home
            </Link>
            <Link
              href="/about"
              className="h-fit flex items-center hover:text-white transition"
            >
              <FaInfoCircle className="mr-1 w-4 h-4" /> About Us
            </Link>
            <Link
              href="/financial-blog"
              className="h-fit flex items-center hover:text-white transition"
            >
              <FaNewspaper className="mr-1 w-4 h-4" /> Financial Blog
            </Link>
            <Link
              href="/contact"
              className="h-fit flex items-center hover:text-white transition"
            >
              <FaEnvelope className="mr-1 w-4 h-4" /> Contact Us
            </Link>
            <NavigationMenu className="h-fit flex-col">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-white transition cursor-pointer text-base">
                    <FaHandsHelping className="mr-1 w-4 h-4" />
                    Help & Support
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-10 bg-gray-800 text-gray-300 rounded-lg flex flex-col !w-max space-y-4 p-4">
                    <Link
                      href="/faqs"
                      className="flex items-center justify-center hover:text-white transition"
                    >
                      <FaQuestionCircle className="mr-1 w-4 h-4" />
                      FAQs
                    </Link>
                    <Link
                      href="/user-guide"
                      className="flex items-center justify-center hover:text-white transition"
                    >
                      <FaBookOpen className="mr-1 w-4 h-4" />
                      User Guide
                    </Link>
                    <Link
                      href="/help-center"
                      className="flex items-center justify-center hover:text-white transition"
                    >
                      <FaHeadphonesAlt className="mr-1 w-4 h-4" />
                      Help Center
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu className="h-fit flex-col">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-white transition cursor-pointer text-base">
                    <FaGavel className="mr-1 w-4 h-4" />
                    Legal
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-10 bg-gray-800 text-gray-300 rounded-lg flex flex-col !w-max space-y-4 p-4">
                    <Link
                      href="/privacy-policy"
                      className="flex items-center justify-center hover:text-white transition"
                    >
                      <FaShieldAlt className="mr-1 w-4 h-4" />
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-conditions"
                      className="flex items-center justify-center hover:text-white transition"
                    >
                      <FaFile className="mr-1 w-4 h-4" />
                      Terms & Conditions
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center">
            <p className="text-gray-400">Connect with us on social media</p>
            <div className="mt-6 flex space-x-6">
              <a
                href="https://github.com/Amiya-1999/"
                className="hover:text-white"
                target="_blank"
              >
                <FaGithub className="w-6 h-6 hover:-translate-y-2 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/amiya-dey/"
                className="hover:text-white"
                target="_blank"
              >
                <FaLinkedin className="w-6 h-6 hover:-translate-y-2 transition-transform duration-300" />
              </a>
              <a
                href="https://www.facebook.com/amiya.dey.5621"
                className="hover:text-white"
                target="_blank"
              >
                <FaFacebook className="w-6 h-6 hover:-translate-y-2 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/romeo.19.99/"
                className="hover:text-white"
                target="_blank"
              >
                <FaInstagram className="w-6 h-6 hover:-translate-y-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-6 text-sm">
          © {new Date().getFullYear()} Wealth Tracker. All rights reserved
          <br />
          Financial success starts with smart, responsible and informed wealth
          management
        </div>
      </motion.div>
    </footer>
  );
}
