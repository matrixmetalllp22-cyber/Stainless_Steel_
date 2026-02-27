// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Header() {
//   const location = useLocation();
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   const navItems = [
//     { name: "HOME", path: "/" },
//     { name: "ABOUT US", path: "/about" },
//     { name: "PRODUCTS", path: "/products", dropdown: "products" },
//     { name: "MACHINERY", path: "/machinery/cut-to-length", dropdown: "machinery" },
//     { name: "APPLICATIONS", path: "/applications" },
//     { name: "RESOURCES", path: "/resources" },
//     { name: "CONTACT US", path: "/contact" },
//   ];

//   const machineryItems = [
//     // "Cut to Length",
//     // "Slitting",
//     // "Blanking",
//     // "Packing",
//     "Ultra-Light Gauge CTL Line",
//     "Heavy Gauge CTL Line",
//     "Ultra-Precision Narrow Slitting Line",
//     "Wide-Width Precision Slitting Line",
//     "Continuous Coil-to-Coil Processing Line",
//     "Sheet-to-Sheet Processing Line",
//     "High-Precision Film Lamination Line",
    
    
//   ];

//   const productItems = [
//     // "2B/BA Mill Finish",
//     // "#4 Brushed",
//     // "Hairline",
//     // "#8 Super Mirror",
//     // "Bead Blast",
//     // "Vibration",
//     // "S.S. Strips",
//     // "Etched",
//     // "Embossed",
//     // "Mosaic Tiles",
//     // "Pipes & Tubes",
//   ];

//   return (
//     <header className="w-full bg-white border-b border-gray-300 sticky top-0 z-50">
//       {/* ───── TOP BAR ───── */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
//         <div className="flex items-center gap-4">
//           <img
//             src="/Images/Matrix.png"
//             alt="Matrix Metal Logo"
//             className="h-10 sm:h-12 md:h-14 w-auto"
//           />

//           <div>
//             <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 leading-tight">
//               Matrix Metal LLP
//             </h1>
//             <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-500">
//               Pioneers of Innovative Stainless Steel Solutions
//             </p>
//           </div>
//         </div>

//         {/* LANGUAGE */}
//         {/* <div className="hidden md:flex items-center gap-2 border border-gray-300 px-3 py-2 rounded">
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
//         </div> */}

//         {/* MOBILE MENU */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="md:hidden border border-gray-300 p-2 rounded"
//         >
//           {!mobileOpen ? (
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           ) : (
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* ───── DESKTOP NAV ───── */}
//       <nav className="hidden md:block bg-gray-200 border-t border-gray-300">
//         <div className="max-w-7xl mx-auto flex h-[64px]">
//           {navItems.map((item) => {
//             const isActive = location.pathname === item.path;

//             return (
//               <div
//                 key={item.name}
//                 className="relative flex"
//                 onMouseEnter={() => item.dropdown && setOpenMenu(item.dropdown)}
//                 onMouseLeave={() => setOpenMenu(null)}
//               >
//                 <Link
//                   to={item.path}
//                   className={`flex items-center px-6 lg:px-8 text-sm lg:text-base font-semibold border-r border-gray-300
//                     ${
//                       isActive || openMenu === item.dropdown
//                         ? "bg-gray-600 text-white"
//                         : "text-gray-800 hover:bg-gray-300"
//                     }`}
//                 >
//                   {item.name}
//                 </Link>

//                 {/* PRODUCTS DROPDOWN (ANIMATED) */}
//                 {item.dropdown === "products" && (
//   <div
//     className={`absolute left-0 top-full w-64 bg-gray-600 text-white shadow-lg z-50 
//       transition-all duration-300 origin-top transform
//       ${
//         openMenu === "products"
//           ? "opacity-100 scale-y-100"
//           : "opacity-0 scale-y-0 pointer-events-none"
//       }`}
//   >
//     {productItems?.map((p, idx) => {
//       const slug = p
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)/g, "");

//       return (
//         <Link
//           key={idx}
//           to={`/products/${slug}`}
//           className="block px-5 py-3 text-sm hover:bg-gray-700 border-b border-gray-500 last:border-b-0"
//         >
//           {p}
//         </Link>
//       );
//     })}
//   </div>
// )}


//                 {/* MACHINERY DROPDOWN (ANIMATED) */}
//                 {item.dropdown === "machinery" && (
//                   <div
//                     className={`absolute left-0 top-full w-72 bg-gray-600 text-white shadow-lg z-50 transition-all duration-300 origin-top
//                       ${
//                         openMenu === "machinery"
//                           ? "opacity-100 scale-y-100"
//                           : "opacity-0 scale-y-0 pointer-events-none"
//                       }`}
//                   >
//                     {machineryItems.map((m, idx) => (
//                       <Link
//                         key={idx}
//                         to={`/machinery/${m.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
//                         className="block px-5 py-3 text-sm hover:bg-gray-700 border-b border-gray-500"
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

//       {/* ───── MOBILE NAV ───── */}
//       {mobileOpen && (
//         <div className="md:hidden bg-gray-200 border-t border-gray-300">
//           {navItems.map((item) => (
//             <div key={item.name}>
//               <div
//                 className="flex justify-between items-center px-4 py-3 border-b border-gray-300"
//                 onClick={() =>
//                   item.dropdown
//                     ? setMobileDropdown(
//                         mobileDropdown === item.dropdown ? null : item.dropdown
//                       )
//                     : setMobileOpen(false)
//                 }
//               >
//                 <Link to={item.path} className="font-semibold text-gray-800">
//                   {item.name}
//                 </Link>

//                 {item.dropdown && (
//                   <svg
//                     className={`w-4 h-4 transition-transform ${
//                       mobileDropdown === item.dropdown ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 )}
//               </div>

//               {item.dropdown === "products" && mobileDropdown === "products" && (
//                 <div className="bg-gray-300">
//                   {productItems.map((p, idx) => (
//                     <Link
//                       key={idx}
//                       to={`/products/${p.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
//                       className="block px-6 py-2 text-sm border-b border-gray-400"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {p}
//                     </Link>
//                   ))}
//                 </div>
//               )}

//               {item.dropdown === "machinery" && mobileDropdown === "machinery" && (
//                 <div className="bg-gray-300">
//                   {machineryItems.map((m, idx) => (
//                     <Link
//                       key={idx}
//                       to={`/machinery/${m.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
//                       className="block px-6 py-2 text-sm border-b border-gray-400"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {m}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
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
    { name: "MACHINERY", path: "/machinery/cut-to-length", dropdown: "machinery" },
    { name: "APPLICATIONS", path: "/applications" },
    { name: "CERTIFICATES", path: "/resources" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const machineryItems = [
    "Ultra-Light Gauge CTL Line",
    "Heavy Gauge CTL Line",
    "Ultra-Precision Narrow Slitting Line",
    "Wide-Width Precision Slitting Line",
    "Continuous Coil-to-Coil Processing Line",
    "Sheet-to-Sheet Processing Line",
    "High-Precision Film Lamination Line",
  ];

  const productItems = [
    // Add your product items here
  ];

  return (
    <header className="w-full bg-white border-b border-gray-300 sticky top-0 z-50">
      {/* ───── TOP BAR ───── */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src="/Images/Matrix.png"
            alt="Matrix Metal Logo"
            className="h-10  sm:h-20 md:h-20 w-auto"
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

        {/* MOBILE MENU TOGGLE */}
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

                {item.dropdown === "products" && (
                  <div className={`absolute left-0 top-full w-64 bg-gray-600 text-white shadow-lg z-50 transition-all duration-300 origin-top transform ${openMenu === "products" ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
                    {productItems?.map((p, idx) => (
                      <Link key={idx} to={`/products/${p.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="block px-5 py-3 text-sm hover:bg-gray-700 border-b border-gray-500 last:border-b-0">
                        {p}
                      </Link>
                    ))}
                  </div>
                )}

                {item.dropdown === "machinery" && (
                  <div className={`absolute left-0 top-full w-72 bg-gray-600 text-white shadow-lg z-50 transition-all duration-300 origin-top ${openMenu === "machinery" ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
                    {machineryItems.map((m, idx) => (
                      <Link key={idx} to={`/machinery/${m.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="block px-5 py-3 text-sm hover:bg-gray-700 border-b border-gray-500">
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
                onClick={() => {
                  // If it's products (no arrow), close menu and navigate
                  if (item.dropdown === "products" || !item.dropdown) {
                    setMobileOpen(false);
                  } else {
                    // Otherwise toggle the dropdown (for machinery)
                    setMobileDropdown(mobileDropdown === item.dropdown ? null : item.dropdown);
                  }
                }}
              >
                <Link to={item.path} className="font-semibold text-gray-800 w-full">
                  {item.name}
                </Link>

                {/* ARROW ONLY FOR MACHINERY */}
                {item.dropdown && item.dropdown !== "products" && (
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

              {/* DROPDOWN CONTENT (Only renders if toggled) */}
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