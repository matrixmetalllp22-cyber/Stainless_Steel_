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











import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company & Navigation */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">M</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">MATRIX</h2>
                <p className="text-sm text-gray-400">Metal Private Limited</p>
              </div>
            </div>
            
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-400">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Applications', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-400">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <FaMapMarkerAlt className="text-orange-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-medium">Matrix Metal Private Limited</p>
                  <p className="text-gray-300 text-sm">
                    3RD PHASE, 139 & 140, 9TH MAIN ROAD, 100 Feet Road, Peenya, Bengaluru, Karnataka 560058s
                  </p>
                </div>
              </li>
              
              <li className="flex items-center space-x-3">
                <FaPhone className="text-orange-600 flex-shrink-0" />
                <span className="text-gray-300">+91 9036864329</span>
              </li>
              
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-600 flex-shrink-0" />
                <a 
                  href="mailto:info@minoxmetal.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                     matrixmetalllp@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <div className="mb-8">
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-400">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaLinkedin, label: 'LinkedIn' },
                  { icon: FaFacebook, label: 'Facebook' },
                  { icon: FaInstagram, label: 'Instagram' },
                  { icon: FaYoutube, label: 'YouTube' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gray-300" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-400">Legal</h3>
              <div className="flex flex-wrap gap-3">
                {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Matrix Metal Private Limited. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Registered in India | VAT No: XXX XXXXXX
              </p>
            </div>

            {/* Quality Badges */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto border border-gray-700 rounded-full flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">ISO</span>
                </div>
                <p className="text-xs text-gray-400">ISO 9001:2015</p>
              </div>
              
              <div className="text-center">
                <div className="w-8 h-8 mx-auto border border-gray-700 rounded-full flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">✭</span>
                </div>
                <p className="text-xs text-gray-400">Quality Certified</p>
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}