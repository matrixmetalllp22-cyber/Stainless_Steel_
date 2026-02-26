import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!formData.name.trim()) return toast.error("Name is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Valid email required");
    if (formData.phone.replace(/\D/g, "").length < 10)
      return toast.error("Valid phone number required");
    if (formData.message.trim().length < 10)
      return toast.error("Message must be at least 10 characters");
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

      toast.success("Message sent successfully!");
      setSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: { 
            background: "#1f2937", 
            color: "#f9fafb", 
            borderRadius: "8px",
            border: "1px solid #374151"
          },
          success: { duration: 4000 },
        }}
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Have a project in mind or want to learn more about our services?
              We're here to help.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <ContactDetail
              icon={<MapPin className="w-5 h-5" />}
              title="Location"
              content={
                <>
                  <div className="font-medium">MATRIX METAL LLP</div>
                  <div className="text-gray-600">Bengaluru, Karnataka</div>
                </>
              }
            />
            
            <ContactDetail
              icon={<Phone className="w-5 h-5" />}
              title="Phone"
              content={
                <a 
                  href="tel:+91951440912" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  +91  90368 64329
                </a>
              }
            />
            
            <ContactDetail
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              content={
                <a
                  href="mailto:info@matrixmetals.in"
                  className="text-blue-600 hover:text-blue-700 transition-colors break-all"
                >
                 matrixmetalllp@gmail.com
                </a>
              }
            />
          </div>

          {/* Map Preview */}
          <div className="pt-8 border-t border-gray-200">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                className="w-full h-48 grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.462445360588!2d77.52000387457595!3d13.023073087297223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3db890cace25%3A0x2caf2640275a9133!2sMATRIX%20METALS%20LLP!5e0!3m2!1sen!2sin!4v1732617180552!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Matrix Metals Location"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 p-8"
        >
          <h3 className="text-xl font-light text-gray-900 mb-8">
            Send a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none bg-white placeholder:text-gray-400"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading || sent}
              className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2
                ${sent 
                  ? "bg-emerald-500 text-white" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
                }
              `}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : sent ? (
                <>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Message Sent
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

// Input Field Component
const InputField = ({ label, ...props }) => (
  <div className="relative">
    <input
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-white placeholder:text-gray-400"
      placeholder={label}
      {...props}
    />
  </div>
);

// Contact Detail Component
const ContactDetail = ({ icon, title, content }) => (
  <div className="flex items-start gap-4 group">
    <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
      <div className="text-blue-600">{icon}</div>
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-500 mb-1">{title}</h4>
      <div className="text-gray-900">{content}</div>
    </div>
  </div>
);