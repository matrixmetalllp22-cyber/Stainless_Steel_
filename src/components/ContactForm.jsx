import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Valid email required");
      return false;
    }
    if (formData.phone.replace(/\D/g, "").length < 10) {
      toast.error("Valid phone number required (10+ digits)");
      return false;
    }
    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx4igNIL8RPzwel3naVQpqak7zjn_FvmMMVTWiWDRjmK-Imn3nUJblk02q8hCpm_dTM/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      toast.success("Message sent successfully!", {
        duration: 4000,
        icon: '✅',
      });
      setSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast.error("Failed to send. Please try again.", {
        duration: 4000,
        icon: '❌',
      });
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #374151',
          },
          success: {
            style: {
              background: '#10b981',
              border: '1px solid #059669',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#10b981',
            },
          },
          error: {
            style: {
              background: '#ef4444',
              border: '1px solid #dc2626',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#ef4444',
            },
          },
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Left Column - Contact Info */}
        <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 md:mb-4">
              Get in touch
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Have a project in mind or want to learn more about our services?
              We're here to help.
            </p>
          </div>

          {/* Contact Details */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <ContactDetail
              icon={<MapPin className="w-5 h-5" />}
              title="Location"
              content={
                <>
                  <div className="font-medium text-sm sm:text-base">MATRIX METAL LLP</div>
                  <div className="text-xs sm:text-sm text-gray-600">Bengaluru, Karnataka</div>
                </>
              }
            />

            <ContactDetail
              icon={<Phone className="w-5 h-5" />}
              title="Phone"
              content={
                <a
                  href="tel:+919036864329"
                  className="text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base"
                >
                  +91 90368 64329
                </a>
              }
            />

            <ContactDetail
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              content={
                <a
                  href="mailto:matrixmetalllp@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors break-all text-sm sm:text-base"
                >
                  matrixmetalllp@gmail.com
                </a>
              }
            />
          </motion.div>

          {/* Map Preview with loading animation */}
          <motion.div
            variants={itemVariants}
            className="pt-6 md:pt-8 border-t border-gray-200"
          >
            <div className="rounded-xl overflow-hidden border border-gray-200 relative bg-gray-100">
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                  <span className="text-xs text-gray-500">Loading map...</span>
                </div>
              )}
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: mapLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                onLoad={() => setMapLoaded(true)}
                className="w-full h-40 sm:h-48 grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.462445360588!2d77.52000387457595!3d13.023073087297223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3db890cace25%3A0x2caf2640275a9133!2sMATRIX%20METALS%20LLP!5e0!3m2!1sen!2sin!4v1732617180552!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Matrix Metals Location"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-sm"
        >
          <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-6 md:mb-8">
            Send a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white placeholder:text-gray-400 text-sm sm:text-base"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading || sent}
              className={`w-full py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base
                ${sent
                  ? "bg-emerald-500 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                }
                disabled:opacity-70 disabled:cursor-not-allowed
              `}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : sent ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                  <span>Message Sent</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
}

// Input Field Component with floating label animation
const InputField = ({ label, ...props }) => {
  const [focused, setFocused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative"
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
    >
      <input
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white placeholder:text-gray-400 text-sm sm:text-base"
        placeholder={focused ? "" : label}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(e.target.value !== "")}
        {...props}
      />
      <motion.span
        initial={false}
        animate={{
          opacity: focused || props.value ? 1 : 0,
          y: focused || props.value ? -28 : 0,
          scale: focused || props.value ? 0.85 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-3 top-3 text-xs text-gray-500 pointer-events-none origin-left bg-white px-1"
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

// Contact Detail Component with hover animation
const ContactDetail = ({ icon, title, content }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { x: 5 }}
      className="flex items-start gap-3 sm:gap-4 group"
    >
      <motion.div
        whileHover={shouldReduceMotion ? {} : { rotate: 10, scale: 1.1 }}
        className="p-2 sm:p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors"
      >
        <div className="text-blue-600">{icon}</div>
      </motion.div>
      <div className="flex-1 min-w-0">
        <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-0.5 sm:mb-1">
          {title}
        </h4>
        <div className="text-sm sm:text-base text-gray-900 break-words">{content}</div>
      </div>
    </motion.div>
  );
};