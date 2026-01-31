import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50 overflow-hidden relative">

      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 mb-6 cursor-pointer"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-600">
              Contact Us
            </span>
          </motion.div>

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0em" }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
          >
            Let's{" "}
            <span className="font-medium text-blue-600">
              Connect
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
          >
            Reach out to discuss how we can work together
          </motion.p>

        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <ContactForm />
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-500">
            We typically respond within 24 hours
          </p>
        </motion.div>

      </div>
    </div>
  );
}
