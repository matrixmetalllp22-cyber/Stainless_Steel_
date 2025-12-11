
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";
// import { MdLocationPin, MdPhone } from "react-icons/md";

// // ------------ Reusable Input Component ------------
// const InputField = ({ label, name, type = "text", value, onChange }) => (
//   <div className="relative w-full">
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       required
//       className="peer w-full p-4 pt-6 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-100 outline-none focus:ring-2 focus:ring-orange-500 transition"
//     />
//     <label className="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-600 dark:peer-focus:text-orange-400">
//       {label}
//     </label>
//   </div>
// );

// // ------------ Textarea Component ------------
// const TextArea = ({ label, name, value, onChange }) => (
//   <div className="relative w-full">
//     <textarea
//       name={name}
//       value={value}
//       onChange={onChange}
//       rows={4}
//       required
//       className="peer w-full p-4 pt-6 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-100 outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
//     />
//     <label className="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-600 dark:peer-focus:text-orange-400">
//       {label}
//     </label>
//   </div>
// );

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   // ------------ Validation ------------
//   const validateForm = () => {
//     if (formData.name.length < 3) return toast.error("Name must be at least 3 characters");
//     if (!formData.email.includes("@")) return toast.error("Enter a valid email");
//     if (formData.phone.length < 10) return toast.error("Phone must be at least 10 digits");
//     if (formData.message.length < 5) return toast.error("Message too short");
//     return true;
//   };

//   // ------------ Submit Form ------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setLoading(true);

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbx4igNIL8RPzwel3naVQpqak7zjn_FvmMMVTWiWDRjmK-Imn3nUJblk02q8hCpm_dTM/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       toast.success("Message sent successfully!");
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     } catch {
//       toast.error("Something went wrong!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col items-center">
//       <Toaster position="top-center" />

//       {/* ---------- FORM ---------- */}
//       <motion.form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex flex-col gap-6 transition-colors duration-300"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">Contact Us</h2>

//         <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
//         <InputField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
//         <InputField label="Your Phone" name="phone" value={formData.phone} onChange={handleChange} />
//         <TextArea label="Your Message" name="message" value={formData.message} onChange={handleChange} />

//         <motion.button
//           type="submit"
//           disabled={loading}
//           className="py-3 rounded-xl bg-orange-600 dark:bg-orange-700 text-white font-semibold text-lg hover:bg-orange-700 dark:hover:bg-orange-600 active:scale-95 transition disabled:opacity-50 shadow-md"
//           whileTap={{ scale: 0.95 }}
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </motion.button>
//       </motion.form>

//       {/* ---------- LOCATION SECTION ---------- */}
//       <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true, amount: 0.3 }}
//   transition={{ duration: 0.8 }}
//   className="w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-10"
// >
//   {/* Map - Scroll reveal */}
//   <motion.div
//     initial={{ opacity: 0, scale: 0.9 }}
//     whileInView={{ opacity: 1, scale: 1 }}
//     viewport={{ once: true }}
//     transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
//     whileHover={{ scale: 1.03 }}
//     className="rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-xl backdrop-blur-lg hover:shadow-2xl transition-shadow duration-300"
//   >
//     <iframe
//       className="w-full h-64"
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.462445360588!2d77.52000387457595!3d13.023073087297223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3db890cace25%3A0x2caf2640275a9133!2sMATRIX%20METALS%20LLP!5e0!3m2!1sen!2sin!4v1732617180552!5m2!1sen!2sin"
//       loading="lazy"
//       allowFullScreen=""
//     ></iframe>
//   </motion.div>

//   {/* Details Section */}
//   <div className="flex flex-col gap-10">

//     {/* Location Block with Pulse Icon */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.4, duration: 0.6 }}
//       whileHover={{ scale: 1.02 }}
//       className="p-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 shadow-md backdrop-blur-md hover:shadow-lg cursor-pointer transition-all"
//     >
//       <div className="flex items-center gap-3">
        
//         {/* PULSE ANIMATION */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 1.8,
//             ease: "easeInOut",
//           }}
//           className="text-orange-600"
//         >
//           <MdLocationPin className="text-3xl" />
//         </motion.div>

//         <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100">Location</h3>
//       </div>

//       <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
//         MATRIX METALS LLP<br />
//         Bengaluru, Karnataka, India.
//       </p>
//     </motion.div>

//     {/* Phone Block */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.6, duration: 0.6 }}
//       whileHover={{ scale: 1.02 }}
//       className="p-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 shadow-md backdrop-blur-md hover:shadow-lg cursor-pointer transition-all"
//     >
//       <div className="flex items-center gap-3">
//         <MdPhone className="text-orange-600 text-3xl" />
//         <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100">Phone</h3>
//       </div>

//       <a
//         href="tel:+91951440912"
//         className="block text-gray-700 text-lg font-medium mt-3 hover:text-orange-600"
//       >
//         +91 95144 40912
//       </a>
//     </motion.div>

//   </div>
// </motion.div>

//     </div>
//   );
// }



























import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { MdLocationPin, MdPhone, MdMail } from "react-icons/md";

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
          style: { background: "#111", color: "#fff", borderRadius: "12px" },
          success: { duration: 4000 },
        }}
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto px-5 py-10">
        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl border border-orange-100 p-8 md:p-10 lg:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
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
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="peer w-full px-5 py-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all resize-none bg-cream/50 placeholder-transparent"
                placeholder=" "
              />
              <label
                className="absolute left-5 top-4 text-gray-500 pointer-events-none transition-all duration-200
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-400
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                  peer-[:not(:placeholder-shown)]:top-2 
                  peer-[:not(:placeholder-shown)]:text-xs 
                  peer-[:not(:placeholder-shown)]:text-orange-400"
              >
                Your Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading || sent}
              className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3
                ${sent ? "bg-emerald-600 text-white" : "bg-orange-600 text-white shadow-xl hover:bg-orange-700"}
              `}
            >
              {loading ? (
                "Sending..."
              ) : sent ? (
                <>
                  Sent Successfully!
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info + Map */}
        <div className="space-y-10">
          {/* Info Cards */}
          <div className="grid gap-6">
            <InfoCard
              icon={<MdLocationPin className="text-4xl text-orange-400" />}
              title="Visit Our Office"
              content={
                <>
                  <strong>MATRIX METALS LLP</strong>
                  <br />
                  Bengaluru, Karnataka
                  <br />
                  India
                </>
              }
            />
            <InfoCard
              icon={<MdPhone className="text-4xl text-orange-400" />}
              title="Call Us"
              content={
                <a href="tel:+91951440912" className="text-2xl font-bold text-orange-400 hover:underline">
                  +91 95144 40912
                </a>
              }
            />
            <InfoCard
              icon={<MdMail className="text-4xl text-orange-400" />}
              title="Email Us"
              content={
                <a
                  href="mailto:info@matrixmetals.in"
                  className="text-lg font-medium text-orange-400 hover:underline break-all"
                >
                  info@matrixmetals.in
                </a>
              }
            />
          </div>

          {/* Google Map */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring" }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-orange-100"
          >
            <iframe
              className="w-full h-80 md:h-96 grayscale hover:grayscale-0 transition-all duration-700"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.462445360588!2d77.52000387457595!3d13.023073087297223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3db890cace25%3A0x2caf2640275a9133!2sMATRIX%20METALS%20LLP!5e0!3m2!1sen!2sin!4v1732617180552!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Matrix Metals Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
}

// Reusable Floating Label Input (Fixed!)
const Input = ({ label, ...props }) => (
  <div className="relative">
    <input
      className="peer w-full px-5 py-4 rounded-2xl border border-gray-300 focus:border-orange-300 focus:ring-4 focus:ring-orange-400/20 outline-none transition-all bg-cream/50 placeholder-transparent"
      placeholder=" "
      {...props}
    />
    <label
      className="absolute left-5 top-4 text-gray-500 pointer-events-none transition-all duration-200
        peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-600
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
        peer-[:not(:placeholder-shown)]:top-2 
        peer-[:not(:placeholder-shown)]:text-xs 
        peer-[:not(:placeholder-shown)]:text-orange-600"
    >
      {label}
    </label>
  </div>
);

// Info Card Component
const InfoCard = ({ icon, title, content }) => (
  <motion.div
    whileHover={{ x: 8 }}
    className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 flex gap-6 items-start"
  >
    <div className="p-4 bg-orange-100 rounded-2xl flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <div className="text-gray-700 leading-relaxed">{content}</div>
    </div>
  </motion.div>
);