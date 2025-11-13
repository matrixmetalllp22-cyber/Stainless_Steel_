// import React, { useState } from 'react';
// import axios from 'axios';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus({ type: '', message: '' });

//     try {
//       const response = await axios.post('http://localhost:5000/api/contacts', formData);
//       if (response.data.success) {
//         setStatus({
//           type: 'success',
//           message: 'Thank you for your message. We will get back to you soon!'
//         });
//         setFormData({ name: '', email: '', phone: '', message: '' });
//       }
//     } catch (error) {
//       setStatus({
//         type: 'error',
//         message: error.response?.data?.message || 'Something went wrong. Please try again.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {status.message && (
//           <div
//             className={`p-4 rounded-lg ${
//               status.type === 'success' 
//                 ? 'bg-teal-50 text-teal-700 border border-teal-200' 
//                 : 'bg-rose-50 text-rose-700 border border-rose-200'
//             }`}
//           >
//             {status.message}
//           </div>
//         )}

//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-slate-700">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border-slate-200 bg-white/50 shadow-sm 
//             focus:border-blue-500 focus:ring-blue-500 focus:bg-white"
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-slate-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border-slate-200 bg-white/50 shadow-sm 
//             focus:border-blue-500 focus:ring-blue-500 focus:bg-white"
//           />
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
//             Phone
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border-slate-200 bg-white/50 shadow-sm 
//             focus:border-blue-500 focus:ring-blue-500 focus:bg-white"
//           />
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-slate-700">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border-slate-200 bg-white/50 shadow-sm 
//             focus:border-blue-500 focus:ring-blue-500 focus:bg-white"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full flex justify-center py-3 px-6 rounded-lg text-sm font-medium text-white
//           bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
//           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
//           transform transition hover:scale-[1.02] active:scale-[0.98]
//           ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
//         >
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </button>
//       </form>
//     </div>
//   );
// }




import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post("http://localhost:5000/api/contacts", formData);
      if (response.data.success) {
        setStatus({
          type: "success",
          message: "✅ Thank you! We’ll get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message || "⚠️ Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {status.message && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`p-4 rounded-xl text-sm font-medium ${
            status.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-rose-100 text-rose-800 border border-rose-200"
          }`}
        >
          {status.message}
        </motion.div>
      )}

      {/* Inputs */}
      {[
        { id: "name", label: "Full Name", type: "text" },
        { id: "email", label: "Email Address", type: "email" },
        { id: "phone", label: "Phone Number", type: "tel" },
      ].map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            value={formData[field.id]}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 bg-gray-100/60 text-gray-800 
            px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
            hover:bg-white/70 transition-all duration-300"
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-gray-300 bg-gray-100/60 text-gray-800 
          px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
          hover:bg-white/70 transition-all duration-300"
        ></textarea>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        disabled={isSubmitting}
        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold 
        text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 
        hover:from-blue-400 hover:to-blue-600 shadow-md shadow-blue-300/40 
        transition-all duration-300 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
      </motion.button>
    </motion.form>
  );
}
