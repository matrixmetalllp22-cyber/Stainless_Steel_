

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const lastY = useRef(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY || 0;
//       // hide when scrolling down and past 80px, show when scrolling up
//       if (currentY > lastY.current && currentY > 80) {
//         setIsHidden(true);
//       } else {
//         setIsHidden(false);
//       }
//       lastY.current = currentY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Products & Solutions", href: "/products" },
//     { name: "Quality", href: "/industries" },
//     // { name: "News & Media", href: "/news" },
//     { name: "Contact", href: "/contact" },
//     { name: "Applications", href: "/applications" },
//     { name: "Case Studies", href: "/case-studies" },
//   ];

//   return (
//     <header className={`fixed w-full top-0 z-50 shadow-md transform transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
//       {/* --- Top Contact Bar --- */}
//       <div className="w-full bg-linear-to-r from-slate-800 to-slate-700 dark:from-white-900 dark:to-gray-950 text-gray-100 text-sm py-2 px-6 flex justify-between items-center transition-colors duration-300">
//         <div className="flex items-center space-x-4">
//           <span className="flex items-center space-x-2">
//             <svg
//               className="w-4 h-4 text-orange-400"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z"
//               />
//             </svg>
//             <a href="mailto:info@matrixmetals.com" className="hover:text-orange-300 transition-colors">
//               info@matrixmetals.com
//             </a>
//           </span>
//         </div>

//         <div className="flex items-center space-x-4">
//           <span className="flex items-center space-x-2">
//             <svg
//               className="w-4 h-4 text-orange-400"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414A2 2 0 0111 7.414V10a2 2 0 01-.293.707l-1.414 1.414a16.001 16.001 0 007.586 7.586l1.414-1.414A2 2 0 0119 17h2.586a1 1 0 01.707.293l2.414 2.414A1 1 0 0124 21.414V22a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V5z"
//               />
//             </svg>
//             <a href="tel:+911234567890" className="hover:text-orange-300 transition-colors">
//               +91 12345 67890
//             </a>
//           </span>
//         </div>
//       </div>

//       {/* --- Main Navigation --- */}
//       <nav className="bg-white/80 dark:bg-slate-700/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-3 md:py-4">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2">
//               <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-slate-400">
//                 Matrix Metals
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="text-slate-700 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-all duration-200 hover:underline underline-offset-4"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
              
//               {/* Theme toggle removed (dark mode disabled) */}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden p-2 rounded-md text-slate-700 dark:text-gray-100 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
//             >
//               {!isOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden bg-white dark:bg-slate-800 shadow-md border-t border-slate-100 dark:border-slate-700 transition-colors duration-300">
//             <div className="px-4 pt-2 pb-4 space-y-1">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="block px-4 py-2 text-slate-700 dark:text-gray-100 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-700 dark:hover:text-orange-400 rounded-md transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }






// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Header() {
//   const location = useLocation();

//   const navigation = [
//     { name: "HOME", href: "/" },
//     { name: "ABOUT US", href: "/about" },
//     { name: "PRODUCTS", href: "/products" },
//     { name: "MACHINERY", href: "/machinery" },
//     { name: "APPLICATIONS", href: "/applications" },
//     { name: "RESOURCES", href: "/resources" },
//     { name: "CONTACT US", href: "/contact" },
//   ];

//   return (
//     <header className="w-full border-b border-gray-300">
//       {/* Top Logo Bar */}
//       <div className="flex items-center justify-between px-6 py-3 bg-white">
//         <div className="flex items-center space-x-4">
//           {/* Logo */}
//           <div className="bg-blue-600 px-4 py-2 rounded">
//             <span className="text-white font-bold text-xl">minox</span>
//           </div>

//           {/* Company Name */}
//           <div>
//             <h1 className="text-xl font-semibold text-gray-800">
//               Minox Metal Private Limited
//             </h1>
//             <p className="text-xs uppercase tracking-wide text-gray-500">
//               Pioneers of Innovative Stainless Steel Solutions
//             </p>
//           </div>
//         </div>

//         {/* Language Selector */}
//         <div className="flex items-center space-x-2 border border-gray-300 px-3 py-1 rounded">
//           <span className="text-sm text-gray-700">Select Language</span>
//           <svg
//             className="w-4 h-4 text-gray-600"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <nav className="bg-gray-300">
//         <div className="flex">
//           {navigation.map((item) => {
//             const isActive = location.pathname === item.href;

//             return (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`px-6 py-3 text-sm font-semibold border-r border-gray-400 transition-colors
//                   ${
//                     isActive
//                       ? "bg-gray-600 text-white"
//                       : "text-gray-800 hover:bg-gray-400 hover:text-white"
//                   }`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </header>
//   );
// }





import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "PRODUCTS", path: "/products", dropdown: "products" },
    { name: "MACHINERY", path: "/machinery", dropdown: "machinery" },
    { name: "APPLICATIONS", path: "/applications" },
    { name: "RESOURCES", path: "/resources" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const machineryItems = [
    "Cut to Length & Leveling",
    "Narrow Width Slitting",
    "Wider Width Slitting",
    "Coil to Coil Grinding",
    "Plate / Sheet Grinding",
    "Super Mirror Polishing",
    "Bead Blast",
    "Vibration",
    "PVD Coating (Titanium)",
  ];

  const productItems = [
    "2B/BA Mill Finish",
    "#4 Brushed",
    "Hairline",
    "#8 Super Mirror",
    "Bead Blast",
    "Vibration",
    "S.S. Strips",
    "Etched",
    "Embossed",
    "Mosaic Tiles",
    "Pipes & Tubes",
  ];

  return (
    <header className="w-full bg-white border-b border-gray-300 sticky top-0 z-50">
      {/* ───── TOP BAR ───── */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src="/Images/Matrix.png"
            alt="Matrix Metal Logo"
            className="h-10 sm:h-12 md:h-14 w-auto"
          />

          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 leading-tight">
              Matrix Metal LLP
            </h1>
            <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-500">
              Pioneers of Innovative Stainless Steel Solutions
            </p>
          </div>
        </div>

        {/* LANGUAGE */}
        {/* <div className="hidden md:flex items-center gap-2 border border-gray-300 px-3 py-2 rounded">
          <span className="text-sm text-gray-700">Select Language</span>
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div> */}

        {/* MOBILE MENU */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden border border-gray-300 p-2 rounded"
        >
          {!mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* ───── DESKTOP NAV ───── */}
      <nav className="hidden md:block bg-gray-200 border-t border-gray-300">
        <div className="max-w-7xl mx-auto flex h-[64px]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                key={item.name}
                className="relative flex"
                onMouseEnter={() => item.dropdown && setOpenMenu(item.dropdown)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center px-6 lg:px-8 text-sm lg:text-base font-semibold border-r border-gray-300
                    ${
                      isActive || openMenu === item.dropdown
                        ? "bg-gray-600 text-white"
                        : "text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  {item.name}
                </Link>

                {/* PRODUCTS DROPDOWN (ANIMATED) */}
                {item.dropdown === "products" && (
                  <div
                    className={`absolute left-0 top-full w-[95vw] max-w-[960px] bg-gray-600 text-white shadow-lg z-50 flex transition-all duration-300 origin-top
                      ${
                        openMenu === "products"
                          ? "opacity-100 scale-y-100"
                          : "opacity-0 scale-y-0 pointer-events-none"
                      }`}
                  >
                    <div className="w-64 border-r border-gray-500">
                      {productItems.map((p, idx) => (
                        <Link
                          key={idx}
                          to={`/products/${p.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="block px-5 py-3 text-sm hover:bg-gray-700 border-b border-gray-500"
                        >
                          {p}
                        </Link>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <img
                          key={i}
                          src={`/product-${i}.jpg`}
                          alt=""
                          className="w-full h-28 object-cover"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* MACHINERY DROPDOWN (ANIMATED) */}
                {item.dropdown === "machinery" && (
                  <div
                    className={`absolute left-0 top-full w-72 bg-gray-600 text-white shadow-lg z-50 transition-all duration-300 origin-top
                      ${
                        openMenu === "machinery"
                          ? "opacity-100 scale-y-100"
                          : "opacity-0 scale-y-0 pointer-events-none"
                      }`}
                  >
                    {machineryItems.map((m, idx) => (
                      <Link
                        key={idx}
                        to={`/machinery/${m.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="block px-5 py-3 text-sm hover:bg-gray-700 border-b border-gray-500"
                      >
                        {m}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* ───── MOBILE NAV ───── */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-200 border-t border-gray-300">
          {navItems.map((item) => (
            <div key={item.name}>
              <div
                className="flex justify-between items-center px-4 py-3 border-b border-gray-300"
                onClick={() =>
                  item.dropdown
                    ? setMobileDropdown(
                        mobileDropdown === item.dropdown ? null : item.dropdown
                      )
                    : setMobileOpen(false)
                }
              >
                <Link to={item.path} className="font-semibold text-gray-800">
                  {item.name}
                </Link>

                {item.dropdown && (
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      mobileDropdown === item.dropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>

              {item.dropdown === "products" && mobileDropdown === "products" && (
                <div className="bg-gray-300">
                  {productItems.map((p, idx) => (
                    <Link
                      key={idx}
                      to={`/products/${p.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="block px-6 py-2 text-sm border-b border-gray-400"
                      onClick={() => setMobileOpen(false)}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              )}

              {item.dropdown === "machinery" && mobileDropdown === "machinery" && (
                <div className="bg-gray-300">
                  {machineryItems.map((m, idx) => (
                    <Link
                      key={idx}
                      to={`/machinery/${m.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="block px-6 py-2 text-sm border-b border-gray-400"
                      onClick={() => setMobileOpen(false)}
                    >
                      {m}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}


// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Header() {
//   const location = useLocation();

//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   const menuRef = useRef(null);

//   /* Close menus on outside click */
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpenMenu(null);
//         setMobileOpen(false);
//         setMobileDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const navItems = [
//     { name: "HOME", path: "/" },
//     { name: "ABOUT US", path: "/about" },
//     { name: "PRODUCTS", path: "/products", dropdown: "products" },
//     { name: "MACHINERY", path: "/machinery", dropdown: "machinery" },
//     { name: "APPLICATIONS", path: "/applications" },
//     { name: "RESOURCES", path: "/resources" },
//     { name: "CONTACT US", path: "/contact" },
//   ];

//   const machineryItems = [
//     "Cut to Length & Leveling",
//     "Narrow Width Slitting",
//     "Wider Width Slitting",
//     "Coil to Coil Grinding",
//     "Plate / Sheet Grinding",
//     "Super Mirror Polishing",
//     "Bead Blast",
//     "Vibration",
//     "PVD Coating (Titanium)",
//   ];

//   const productItems = [
//     "2B/BA Mill Finish",
//     "#4 Brushed",
//     "Hairline",
//     "#8 Super Mirror",
//     "Bead Blast",
//     "Vibration",
//     "S.S. Strips",
//     "Etched",
//     "Embossed",
//     "Mosaic Tiles",
//     "Pipes & Tubes",
//   ];

//   return (
//     <header ref={menuRef} className="w-full">

//       {/* ================= TOP BAR (NOT STICKY) ================= */}
//       <div className="bg-white border-b border-gray-300">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <img
//               src="/Images/Matrix.png"
//               alt="Matrix Metal Logo"
//               className="h-10 sm:h-12 md:h-14 w-auto"
//             />

//             <div>
//               <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
//                 Matrix Metal LLP
//               </h1>

//               <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-500">
//                 Pioneers of Innovative Stainless Steel Solutions
//               </p>
//             </div>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="md:hidden border border-gray-300 p-2 rounded"
//           >
//             {!mobileOpen ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* ================= NAV BAR (STICKY) ================= */}
//       <nav className="hidden md:block bg-gray-200 border-t border-gray-300 sticky top-0 z-40 shadow-md">
//         <div className="max-w-7xl mx-auto flex h-[64px]">

//           {navItems.map((item) => {
//             const isActive = location.pathname === item.path;

//             return (
//               <div
//                 key={item.name}
//                 className="relative flex"
//                 onMouseEnter={() =>
//                   item.dropdown && setOpenMenu(item.dropdown)
//                 }
//                 onMouseLeave={() => setOpenMenu(null)}
//               >
//                 <button
//                   onClick={() =>
//                     item.dropdown &&
//                     setOpenMenu(
//                       openMenu === item.dropdown
//                         ? null
//                         : item.dropdown
//                     )
//                   }
//                   className={`flex items-center px-6 lg:px-8 text-sm lg:text-base font-semibold border-r border-gray-300 h-full transition
//                     ${
//                       isActive || openMenu === item.dropdown
//                         ? "bg-gray-600 text-white"
//                         : "text-gray-800 hover:bg-gray-300"
//                     }`}
//                 >
//                   {item.name}
//                 </button>

//                 {/* PRODUCTS DROPDOWN */}
//                 {item.dropdown === "products" && (
//                   <div
//                     className={`absolute left-0 top-full w-[900px] bg-gray-600 text-white shadow-lg z-50 transition-all duration-200 origin-top
//                       ${
//                         openMenu === "products"
//                           ? "opacity-100 scale-y-100"
//                           : "opacity-0 scale-y-0 pointer-events-none"
//                       }`}
//                   >
//                     <div className="grid grid-cols-3 p-4 gap-2">

//                       {productItems.map((p, idx) => (
//                         <Link
//                           key={idx}
//                           to={`/products/${p
//                             .toLowerCase()
//                             .replace(/[^a-z0-9]+/g, "-")}`}
//                           className="px-3 py-2 hover:bg-gray-700 rounded"
//                         >
//                           {p}
//                         </Link>
//                       ))}

//                     </div>
//                   </div>
//                 )}

//                 {/* MACHINERY DROPDOWN */}
//                 {item.dropdown === "machinery" && (
//                   <div
//                     className={`absolute left-0 top-full w-72 bg-gray-600 text-white shadow-lg z-50 transition-all duration-200 origin-top
//                       ${
//                         openMenu === "machinery"
//                           ? "opacity-100 scale-y-100"
//                           : "opacity-0 scale-y-0 pointer-events-none"
//                       }`}
//                   >
//                     {machineryItems.map((m, idx) => (
//                       <Link
//                         key={idx}
//                         to={`/machinery/${m
//                           .toLowerCase()
//                           .replace(/[^a-z0-9]+/g, "-")}`}
//                         className="block px-4 py-2 hover:bg-gray-700 border-b border-gray-500"
//                       >
//                         {m}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//         </div>
//       </nav>

//       {/* ================= MOBILE NAV ================= */}
//       {mobileOpen && (
//         <div className="md:hidden bg-gray-200 border-t border-gray-300 max-h-[80vh] overflow-y-auto">

//           {navItems.map((item) => (
//             <div key={item.name}>

//               {/* Main Item */}
//               <div
//                 className="flex justify-between items-center px-4 py-3 border-b border-gray-300"
//                 onClick={() =>
//                   item.dropdown
//                     ? setMobileDropdown(
//                         mobileDropdown === item.dropdown
//                           ? null
//                           : item.dropdown
//                       )
//                     : setMobileOpen(false)
//                 }
//               >
//                 <Link
//                   to={item.path}
//                   className="font-semibold text-gray-800"
//                 >
//                   {item.name}
//                 </Link>

//                 {item.dropdown && (
//                   <span
//                     className={`transition-transform ${
//                       mobileDropdown === item.dropdown
//                         ? "rotate-180"
//                         : ""
//                     }`}
//                   >
//                     ▼
//                   </span>
//                 )}
//               </div>

//               {/* Mobile Products */}
//               {item.dropdown === "products" &&
//                 mobileDropdown === "products" && (
//                   <div className="bg-gray-300">

//                     {productItems.map((p, idx) => (
//                       <Link
//                         key={idx}
//                         to={`/products/${p
//                           .toLowerCase()
//                           .replace(/[^a-z0-9]+/g, "-")}`}
//                         className="block px-6 py-2 text-sm border-b border-gray-400"
//                         onClick={() => setMobileOpen(false)}
//                       >
//                         {p}
//                       </Link>
//                     ))}

//                   </div>
//                 )}

//               {/* Mobile Machinery */}
//               {item.dropdown === "machinery" &&
//                 mobileDropdown === "machinery" && (
//                   <div className="bg-gray-300">

//                     {machineryItems.map((m, idx) => (
//                       <Link
//                         key={idx}
//                         to={`/machinery/${m
//                           .toLowerCase()
//                           .replace(/[^a-z0-9]+/g, "-")}`}
//                         className="block px-6 py-2 text-sm border-b border-gray-400"
//                         onClick={() => setMobileOpen(false)}
//                       >
//                         {m}
//                       </Link>
//                     ))}

//                   </div>
//                 )}

//             </div>
//           ))}

//         </div>
//       )}

//     </header>
//   );
// }
