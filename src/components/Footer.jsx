// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 dark:bg-gray-950 text-white transition-colors duration-300">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-orange-300 dark:text-orange-400">Matrix Metals LLP</h3>
//             <p className="text-slate-300 dark:text-gray-400">
//               Creating value through innovative steel processing and sustainable practices.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-slate-300 dark:text-gray-400 hover:text-white dark:hover:text-orange-400 transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-slate-300 dark:text-gray-400 hover:text-white dark:hover:text-orange-400 transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/industries" className="text-slate-300 dark:text-gray-400 hover:text-white dark:hover:text-orange-400 transition-colors">
//                   Industries
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-slate-300 dark:text-gray-400 hover:text-white dark:hover:text-orange-400 transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <ul className="space-y-2 text-slate-300 dark:text-gray-400">
//               <li className="flex items-start">
//                 <svg
//                   className="h-6 w-6 mr-2 text-gray-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                 </svg>
//                 <span>123 Business Street, Karnataka, India</span>
//               </li>
//               <li className="flex items-start">
//                 <svg
//                   className="h-6 w-6 mr-2 text-gray-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <span>contact@matrixmetals.example</span>
//               </li>
//               <li className="flex items-start">
//                 <svg
//                   className="h-6 w-6 mr-2 text-gray-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//                 <span>+91 234 567 890</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-8 pt-8 border-t border-gray-800">
//           <p className="text-center text-gray-400">
//             © {new Date().getFullYear()} matrix metals llp. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to a server
//     // For demonstration, we'll just show a success message
//     setMessage(`Thank you, ${name}! You've subscribed with ${email}.`);
//     setEmail('');
//     setName('');
//     setTimeout(() => setMessage(''), 5000);
//   };

//   return (
//     <footer className="bg-orange-600 text-gray-800 h-[50vh] flex flex-col">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex-grow overflow-y-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 uppercase">Company</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/about" className="hover:text-gray-600">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/applications" className="hover:text-gray-600">
//                   Applications
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/resources" className="hover:text-gray-600">
//                   Resources
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-gray-600">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 uppercase">Contact</h3>
//             <ul className="space-y-1">
//               <li>Minox Metal Private Limited</li>
//               <li>7, P.C Lane, S.P Road Cross</li>
//               <li>Bengaluru 560 002. INDIA</li>
//               <li>Tel: +91 80 4132 5007 / 4122 4068</li>
//               <li>Fax: +91 80 2221 7144</li>
//               <li>E-mail: info@minoxmetal.com</li>
//             </ul>
//           </div>

//           {/* Follow Us */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 uppercase">Follow Us</h3>
//             <ul className="space-y-1">
//               <li>Facebook</li>
//               <li>YouTube</li>
//               <li>Google +</li>
//               <li>Pinterest</li>
//             </ul>
//           </div>

//           {/* Join Our Mailing List */}
//           {/* <div>
//             <h3 className="text-lg font-semibold mb-4 uppercase">Join Our Mailing List</h3>
//             <form className="space-y-2" onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-white text-gray-800 px-3 py-2 rounded hover:bg-gray-100"
//               >
//                 Subscribe
//               </button>
//             </form>
//             {message && <p className="mt-2 text-green-700">{message}</p>}
//           </div> */}
//         </div>
//       </div>

//       <div className="bg-gray-700 text-gray-300">
//         <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-xl font-bold">Minox</div>
//           <p className="text-center my-2 md:my-0">
//             Minox Metal Private Limited © 2022 Privacy Policy
//           </p>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-white">Link Terms</a>
//             <a href="#" className="hover:text-white">Clients</a>
//             <a href="#" className="hover:text-white">Partners</a>
//             <a href="#" className="hover:text-white">Resellers</a>
//             <a href="#" className="hover:text-white">Support</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }











// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           {/* Company & Navigation */}
//           <div>
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center">
//                 <span className="text-xl font-bold">M</span>
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold tracking-tight">MATRIX</h2>
//                 <p className="text-sm text-gray-400">Metal Private Limited</p>
//               </div>
//             </div>
            
//             <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-400">Quick Links</h3>
//             <ul className="space-y-3">
//               {['About', 'Applications', 'Resources', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     to={`/${item.toLowerCase().replace(' ', '-')}`}
//                     className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
//                   >
//                     <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-400">Contact Information</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start space-x-3">
//                 <div className="mt-0.5">
//                   <FaMapMarkerAlt className="text-orange-600 flex-shrink-0" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Matrix Metal Private Limited</p>
//                   <p className="text-gray-300 text-sm">
//                     3RD PHASE, 139 & 140, 9TH MAIN ROAD, 100 Feet Road, Peenya, Bengaluru, Karnataka 560058s
//                   </p>
//                 </div>
//               </li>
              
//               <li className="flex items-center space-x-3">
//                 <FaPhone className="text-orange-600 flex-shrink-0" />
//                 <span className="text-gray-300">+91 9036864329</span>
//               </li>
              
//               <li className="flex items-center space-x-3">
//                 <FaEnvelope className="text-orange-600 flex-shrink-0" />
//                 <a 
//                   href="mailto:info@minoxmetal.com" 
//                   className="text-gray-300 hover:text-white transition-colors duration-200"
//                 >
//                      matrixmetalllp@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social & Legal */}
//           <div>
//             <div className="mb-8">
//               <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-400">Connect With Us</h3>
//               <div className="flex space-x-4">
//                 {[
//                   { icon: FaLinkedin, label: 'LinkedIn' },
//                   { icon: FaFacebook, label: 'Facebook' },
//                   { icon: FaInstagram, label: 'Instagram' },
//                   { icon: FaYoutube, label: 'YouTube' }
//                 ].map((social) => (
//                   <a
//                     key={social.label}
//                     href="#"
//                     className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-200"
//                     aria-label={social.label}
//                   >
//                     <social.icon className="text-gray-300" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-400">Legal</h3>
//               <div className="flex flex-wrap gap-3">
//                 {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
//                   <a
//                     key={link}
//                     href="#"
//                     className="px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             {/* Copyright */}
//             <div className="text-center md:text-left">
//               <p className="text-gray-400 text-sm">
//                 © {new Date().getFullYear()} Matrix Metal Private Limited. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Registered in India | VAT No: XXX XXXXXX
//               </p>
//             </div>

//             {/* Quality Badges */}
//             <div className="flex items-center space-x-6">
//               <div className="text-center">
//                 <div className="w-8 h-8 mx-auto border border-gray-700 rounded-full flex items-center justify-center mb-1">
//                   <span className="text-xs font-bold">ISO</span>
//                 </div>
//                 <p className="text-xs text-gray-400">ISO 9001:2015</p>
//               </div>
              
//               <div className="text-center">
//                 <div className="w-8 h-8 mx-auto border border-gray-700 rounded-full flex items-center justify-center mb-1">
//                   <span className="text-xs font-bold">✭</span>
//                 </div>
//                 <p className="text-xs text-gray-400">Quality Certified</p>
//               </div>
//             </div>

//             {/* Additional Links */}
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
//                 Sitemap
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
//                 Accessibility
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }









// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, 
//   FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight 
// } from 'react-icons/fa';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <footer className="relative bg-[#0f172a] text-slate-200 overflow-hidden">
//       {/* Decorative Background Element */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//         className="max-w-7xl mx-auto px-6 pt-20 pb-10"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
//           {/* Brand Section */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <div className="flex items-center space-x-3">
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
//                 <div className="relative w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center">
//                   <span className="text-2xl font-black bg-gradient-to-br from-orange-500 to-amber-500 bg-clip-text text-transparent">M</span>
//                 </div>
//               </div>
//               <div>
//                 <h2 className="text-2xl font-black tracking-tighter text-white">MATRIX</h2>
//                 <p className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">Metal Private Limited</p>
//               </div>
//             </div>
//             <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
//               Precision engineering and premium metal solutions for global industries. Setting the gold standard in metallurgical excellence.
//             </p>
//             <div className="flex space-x-3">
//               {[FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
//                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
//                   <Icon size={16} />
//                 </a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants} className="lg:pl-8">
//             <h3 className="text-white font-bold mb-6 text-lg">Navigation</h3>
//             <ul className="space-y-4">
//               {['About Us', 'Applications', 'Our Resources', 'Get In Touch'].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="text-slate-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
//                   >
//                     <FaArrowRight className="text-[10px] mr-2 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Details */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
//             <div className="space-y-4 text-sm text-slate-400">
//               <div className="flex items-start space-x-3">
//                 <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
//                 <p>3rd Phase, 139 & 140, 9th Main Road, Peenya, Bengaluru, KA 560058</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaPhoneAlt className="text-orange-500 flex-shrink-0" />
//                 <p>+91 90368 64329</p>
//               </div>
//               <div className="flex items-center space-x-3 group">
//                 <FaEnvelope className="text-orange-500 flex-shrink-0" />
//                 <a href="mailto:matrixmetalllp@gmail.com" className="group-hover:text-white transition-colors">
//                   matrixmetalllp@gmail.com
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Newsletter / CTA */}
//           {/* <motion.div variants={itemVariants} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
//             <h3 className="text-white font-bold mb-2">Stay Updated</h3>
//             <p className="text-xs text-slate-400 mb-4">Subscribe for the latest industrial insights.</p>
//             <form className="relative">
//               <input 
//                 type="email" 
//                 placeholder="Email address"
//                 className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-orange-500 transition-colors"
//               />
//               <button className="absolute right-1 top-1 bottom-1 px-3 bg-orange-600 hover:bg-orange-500 rounded-md transition-colors">
//                 <FaArrowRight size={12} />
//               </button>
//             </form>
//           </motion.div> */}

//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-sm text-slate-500">
//             © {currentYear} <span className="text-slate-300 font-medium">Matrix Metal Pvt Ltd</span>.
//             <div className="flex gap-4 mt-2">
//               <a href="#" className="hover:text-white transition-colors">Privacy</a>
//               <a href="#" className="hover:text-white transition-colors">Terms</a>
//             </div>
//           </div>

//           <div className="flex items-center gap-8">
//             <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
//               <div className="text-right">
//                 <p className="text-[10px] font-bold text-white leading-none">ISO 9001</p>
//                 <p className="text-[8px] uppercase tracking-tighter text-slate-400">Certified</p>
//               </div>
//               <div className="h-8 w-px bg-slate-700" />
//               <div className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center text-[10px] font-bold">
//                 QC
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;



















import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for smooth entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-[#0f172a] text-slate-200 pt-20 pb-10 overflow-hidden">
      {/* Subtle Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          
          {/* 1. Brand Identity Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative w-14 h-14 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-black bg-gradient-to-br from-orange-400 to-amber-500 bg-clip-text text-transparent">M</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-white leading-none">MATRIX</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold mt-1">Metal LLP</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An industry leader in precision metal manufacturing, providing high-quality solutions with ISO-certified excellence and global delivery standards.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: FaLinkedinIn, link: "#" },
                { icon: FaFacebookF, link: "#" },
                { icon: FaInstagram, link: "https://www.instagram.com/matrixmetalllp/" },
                { icon: FaYoutube, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-10 h-10 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center justify-center hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. Quick Navigation Section */}
          <motion.div variants={itemVariants} className="lg:pl-10">
            <h3 className="text-white font-bold mb-8 text-lg flex items-center">
              <span className="w-8 h-px bg-orange-500 mr-3"></span>
              Explore
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {['About', 'Applications', 'Resources', 'Contact', 'Products'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group text-sm"
                  >
                    <span className="h-px w-0 bg-orange-500 mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Global Headquarters Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-8 text-lg flex items-center">
              <span className="w-8 h-px bg-orange-500 mr-3"></span>
              Contact Info
            </h3>
            <div className="space-y-6 text-sm text-slate-400">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 text-orange-500">
                  <FaMapMarkerAlt size={14} />
                </div>
                <p className="leading-relaxed italic">
                  3rd Phase, 139 & 140, 9th Main Road, <br />
                  Peenya, Bengaluru, KA 560058
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 text-orange-500">
                  <FaPhoneAlt size={14} />
                </div>
                <p className="font-medium">+91 90368 64329</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <FaEnvelope size={14} />
                </div>
                <a href="mailto:matrixmetalllp@gmail.com" className="group-hover:text-white transition-colors">
                  matrixmetalllp@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-sm text-slate-500">
              © {currentYear} <span className="text-slate-200 font-semibold">Matrix Metal LLP</span>. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-[12px] text-slate-500">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center space-x-10 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
            <div className="text-center border-r border-slate-800 pr-10">
              <p className="text-[10px] font-black text-white tracking-widest leading-none">ISO 9001:2015</p>
              <p className="text-[8px] uppercase text-slate-500 mt-1">Quality Management</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-bold text-orange-500">
                ME
              </div>
              <p className="text-[9px] uppercase font-bold text-slate-400 tracking-tighter leading-tight">
                Metallurgical<br/>Excellence
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;