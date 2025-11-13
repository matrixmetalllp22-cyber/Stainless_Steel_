// import React from 'react';
// import ContactForm from '../components/ContactForm';


// // export default function image(){
// // return ( 

// // );
// // }

// export default function Contact() {
//   return (
//     <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 sm:text-5xl">
//             Get in Touch
//           </h1>
//           <p className="mt-4 text-lg text-slate-600">
//             Have questions? We'd love to hear from you.
//           </p>
//         </div>
        
//         <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
//           <ContactForm />
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { motion } from "framer-motion";
// import ContactForm from "../components/ContactForm";

// export default function Contact() {
//   return (
//     <section className="relative min-h-screen bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 overflow-hidden">
//       {/* Background gradient + metallic overlay */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,197,253,0.25),_transparent_60%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.25),_transparent_70%)]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
//         {/* Title Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 drop-shadow-md">
//             Get in Touch
//           </h1>
//           <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//             Have questions or need assistance? We’re here to help.  
//             Fill out the form and our team will get back to you shortly.
//           </p>
//         </motion.div>

//         {/* Contact Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white/30 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl max-w-3xl mx-auto p-8 md:p-10"
//         >
//           <h2 className="text-2xl font-semibold text-slate-800 mb-6 border-l-4 border-blue-500 pl-3">
//             Send us a Message
//           </h2>
//           <ContactForm />
//         </motion.div>

//         {/* Contact Info Section */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
//           {[
//             {
//               title: "Address",
//               info: "JSW MI Steel Service Center Pvt. Ltd., Maharashtra, India",
//               icon: "🏢",
//             },
//             {
//               title: "Email",
//               info: "contact@jswmi.in",
//               icon: "✉️",
//             },
//             {
//               title: "Phone",
//               info: "+91 98765 43210",
//               icon: "📞",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="bg-white/40 backdrop-blur-md p-6 rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition"
//             >
//               <div className="text-3xl mb-3">{item.icon}</div>
//               <h3 className="text-lg font-semibold text-slate-800 mb-1">
//                 {item.title}
//               </h3>
//               <p className="text-slate-600 text-sm">{item.info}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
      {/* Subtle Background Shine */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-sky-300/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 via-blue-400 to-gray-800 bg-clip-text text-transparent drop-shadow-sm">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need help? Let’s connect and create something great together.
          </p>
        </div>

        {/* Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="backdrop-blur-lg bg-white/70 border border-gray-300/40 shadow-2xl 
          rounded-2xl p-10 md:p-12 hover:shadow-gray-400/30 transition-all duration-500"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
}

