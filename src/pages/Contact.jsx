
// import React from "react";
// import ContactForm from "../components/ContactForm";
// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">

//       {/* Soft Glow Orbs */}
//       <div className="absolute top-20 left-5 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 
//       bg-slate-400/20 blur-3xl rounded-full animate-pulse"></div>

//       <div className="absolute bottom-10 right-5 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 
//       bg-gray-400/20 blur-3xl rounded-full animate-pulse"></div>

//       {/* Page Wrapper */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20"
//       >

//         {/* Heading */}
//         <div className="text-center mb-10 sm:mb-14 md:mb-16">
//           <h1
//             className="text-3xl sm:text-4xl md:text-6xl font-extrabold
//             bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 
//             bg-clip-text text-transparent tracking-tight drop-shadow-sm"
//           >
//             Get in Touch
//           </h1>

//           <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 max-w-xl md:max-w-2xl mx-auto px-2">
//             Have questions or need assistance? We’re here to help you move forward.
//           </p>

//           <div className="w-20 sm:w-28 md:w-32 h-[3px] bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mt-5 sm:mt-6 rounded-full shadow-sm"></div>
//         </div>

//         {/* Contact Form Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.94 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="
//             bg-white/60 backdrop-blur-xl 
//             border border-gray-300/40 
//             shadow-[0_6px_30px_rgba(0,0,0,0.15)]
//             rounded-2xl 
//             p-5 sm:p-8 md:p-10 lg:p-12
//             transition-all duration-500"
//         >
//           <ContactForm />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }










import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/25 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 md:py-24 lg:py-32">
        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Ready to start a project or have questions? We’re here to help.
          </p>

          <div className="flex justify-center mt-8 gap-4">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
              >
                <Sparkles className="w-6 h-6 text-orange-400 opacity-60" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      <style jsx>{`
        .bg-cream { background-color: #e6e1dcff; }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .bg-gradient-to-r {
          background-size: 200% 200%;
          animation: gradient-shift 12s ease infinite;
        }
      `}</style>
    </div>
  );
}