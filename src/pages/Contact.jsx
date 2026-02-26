import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/30 to-neutral-50 overflow-hidden relative">

      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >

          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/5 mb-6 cursor-pointer border border-blue-200/50 hover:border-blue-300 transition-colors">
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              ></motion.span>
              <span className="text-sm font-medium text-blue-600">Get In Touch</span>
            </div>
          </motion.div>

          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0em" }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-4 md:mb-6 text-gray-900">
              Let's{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4"
          >
            Reach out to discuss how we can work together
          </motion.p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={cardVariants.hover}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 sm:p-8 md:p-12 mb-12 md:mb-16 shadow-sm hover:shadow-md transition-shadow"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-6"
          >
            Let's Build <span className="font-semibold text-blue-600">Precision Together</span>
          </motion.h2>
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 font-light leading-relaxed text-sm md:text-base"
            >
              At Matrix Metals LLP, we believe that strong communication is the foundation of reliable partnerships. Whether you require technical consultation, project discussions, processing support, or supply coordination, our team is ready to assist with prompt and professional attention.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 font-light leading-relaxed text-sm md:text-base"
            >
              We support OEMs, infrastructure developers, fabrication units, and industrial buyers with precision processing and value-added metal solutions. Our technical team is available to understand your specifications, recommend optimal processing solutions, and ensure seamless execution.
            </motion.p>
          </div>
        </motion.div>

        {/* Facility & Contact Info Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {/* Facility Info */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-light text-gray-900">Registered & Processing Facility</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2 text-gray-600 font-light text-sm md:text-base"
            >
              <p className="font-semibold text-gray-900">Matrix Metals LLP</p>
              <p>Peenya Industrial Area</p>
              <p>Bangalore, Karnataka, India</p>
            </motion.div>
          </motion.div>

          {/* Director Contact */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-light text-gray-900">Director Contact</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3 text-gray-600 font-light text-sm md:text-base"
            >
              <p className="font-semibold text-gray-900">Mr. Jeeteen Jain</p>
              <p className="text-xs md:text-sm text-gray-500">Director – Matrix Metals LLP</p>
              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+919036864329"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>📱 +91 90368 64329</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:matrixmetalllp@gmail.com"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>📧 matrixmetalllp@gmail.com</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={cardVariants.hover}
          className="bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent rounded-2xl border border-blue-200/50 p-6 md:p-8 mb-12 md:mb-16 shadow-sm hover:shadow-md transition-shadow"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-3 rounded-lg bg-blue-500/20">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-light text-gray-900">Business Hours</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 font-light space-y-2 text-sm md:text-base"
          >
            <p><span className="font-semibold">Monday – Saturday:</span> 9:30 AM – 6:30 PM</p>
            <p><span className="font-semibold">Sunday:</span> Closed</p>
          </motion.div>
        </motion.div>

        {/* Enquiry Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={cardVariants.hover}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 md:p-8 lg:p-12 mb-12 md:mb-16 shadow-sm hover:shadow-md transition-shadow"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-8"
          >
            Technical & Business <span className="font-semibold text-blue-600">Enquiries</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-light mb-6 md:mb-8 text-sm md:text-base"
          >
            For faster response, please include:
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8"
          >
            {[
              "Material grade & thickness",
              "Coil/sheet dimensions",
              "Surface finish requirements",
              "Processing requirements (CTL, Slitting, Polishing, Lamination)",
              "Quantity & delivery schedule",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={listItemVariants}
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50/50 transition-colors group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 mt-0.5"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors" />
                </motion.div>
                <span className="text-gray-700 font-light text-sm md:text-base leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 font-light text-sm md:text-base italic"
          >
            Our engineering team will respond with precise technical guidance and commercial details.
          </motion.p>
        </motion.div>

        {/* Why Connect With Matrix Metals */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={cardVariants.hover}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 md:p-8 lg:p-12 mb-12 md:mb-16 shadow-sm hover:shadow-md transition-shadow"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-8 md:mb-10"
          >
            Why Connect With <span className="font-semibold text-blue-600">Matrix Metals</span>
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {[
              "Precision processing with industrial-grade accuracy",
              "Responsive technical and commercial support",
              "Reliable coordination with upstream manufacturers",
              "Quality-focused value-added services",
              "Ethical, transparent, and professional dealings",
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={listItemVariants}
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50/50 transition-colors group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 mt-0.5"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </motion.div>
                <span className="text-gray-700 font-light text-sm md:text-base leading-relaxed">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <ContactForm />
        </motion.div>

        {/* Partnership Message */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
          className="bg-gradient-to-r from-blue-50/80 via-blue-50/40 to-transparent rounded-2xl border border-blue-200/50 p-6 md:p-8 lg:p-12 text-center mb-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-6"
          >
            We Value <span className="font-semibold text-blue-600">Long-Term Partnerships</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-light leading-relaxed max-w-3xl mx-auto text-sm md:text-base"
          >
            Matrix Metals LLP is committed to building enduring relationships through technical excellence, timely execution, and responsible business practices. We look forward to supporting your projects with precision, reliability, and trust.
          </motion.p>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-xs md:text-sm text-gray-500 font-light">
            We typically respond within 24 hours
          </p>
        </motion.div>

      </div>
    </div>
  );
}
