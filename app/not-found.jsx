"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-6xl sm:text-7xl font-extrabold text-blue-800 drop-shadow-lg mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl sm:text-2xl font-medium text-blue-700 mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ArrowLeft className="text-blue-700 w-5 h-5" />
        <Link
          href="/"
          className="text-blue-700 hover:underline font-semibold text-lg"
        >
          Go back home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
