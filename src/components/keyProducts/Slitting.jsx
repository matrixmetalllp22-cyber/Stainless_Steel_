import React from "react";

export default function Slitting() {
  const capabilities = [
    {
      plant: "Pune plant",
      slitters: [
        "Slitter 1: (0.6 – 6.5 mm) × 1870 mm width (Ts up to 1180MPa)",
        "Slitter 2: (0.2 – 2.3 mm) × 1650 mm width (Ts up to 980MPa)",
      ],
    },
    {
      plant: "Palwal plant",
      slitters: [
        "Slitter 1: (0.25 – 3.2 mm) × 1870 mm width (Ts up to 980MPa)",
        "Slitter 2: (0.60 – 6.5 mm) × 1870 mm width (Ts up to 1180MPa)",
      ],
    },
    {
      plant: "Ahmedabad plant",
      slitters: [
        "Slitter 1: (0.25 – 2.3) × 1870 mm width (Ts up to 1180MPa)",
      ],
    },
    {
      plant: "Chennai plant",
      slitters: [
        "Slitter 1: (0.20 – 3.2mm) × 1870mm width (Ts up to 1180MPa)",
      ],
    },
  ];

  return (
    <section className="w-full font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/images/slitting-hero.jpg"
          alt="Slitting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
            Slitting
          </h1>
        </div>
      </div>

      {/* Description + Capabilities */}
      <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Slitting</h2>
            <p className="text-gray-600 leading-relaxed">
              Slitting is a metal manufacturing process which is used to cut a
              wide coil of metal into a number of narrower coils. The wide coils
              are moved through extremely sharp circular knives, making the
              cuts. These knives can be arranged in a sequence to make narrower
              coils of different widths as per the requirement.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 bg-black text-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Capability</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2">
                    <span>✔</span> {item.plant}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {item.slitters.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Special Features */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Special Features</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                <li>
                  Spare slitter head for offline setup, shimless tooling, and
                  vertical scrap winders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}












// import React from "react";
// import { Factory, Scissors, CheckCircle2, Zap } from "lucide-react";

// export default function Slitting() {
//   const capabilities = [
//     {
//       plant: "Pune Plant",
//       location: "Maharashtra",
//       slitters: [
//         "Slitter 1: 0.6 – 6.5 mm × 1870 mm (up to 1180 MPa)",
//         "Slitter 2: 0.2 – 2.3 mm × 1650 mm (up to 980 MPa)",
//       ],
//     },
//     {
//       plant: "Palwal Plant",
//       location: "Haryana",
//       slitters: [
//         "Slitter 1: 0.25 – 3.2 mm × 1870 mm (up to 980 MPa)",
//         "Slitter 2: 0.60 – 6.5 mm × 1870 mm (up to 1180 MPa)",
//       ],
//     },
//     {
//       plant: "Ahmedabad Plant",
//       location: "Gujarat",
//       slitters: [
//         "Slitter 1: 0.25 – 2.3 mm × 1870 mm (up to 1180 MPa)",
//       ],
//     },
//     {
//       plant: "Chennai Plant",
//       location: "Tamil Nadu",
//       slitters: [
//         "Slitter 1: 0.20 – 3.2 mm × 1870 mm (up to 1180 MPa)",
//       ],
//     },
//   ];

//   return (
//     <section className="w-full font-sans bg-gray-50">
//       {/* Hero Section - Modern & Bold */}
//       <div className="relative h-[500px] md:h-[600px] overflow-hidden">
//         <img
//           src="/images/slitting-hero.jpg"
//           alt="Precision Slitting Line"
//           className="w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
//         <div className="absolute inset-0 flex items-center justify-center text-center px-6">
//           <div className="max-w-4xl">
//             <div className="flex justify-center mb-6">
//               <Scissors className="w-16 h-16 text-orange-500" />
//             </div>
//             <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
//               Precision <span className="text-orange-500">Slitting</span> Solutions
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
//               Transforming wide coils into precise narrow strips with unmatched accuracy and strength
//             </p>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
//           {/* Left: Description */}
//           <div className="lg:col-span-1 space-y-8">
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                 <Factory className="w-10 h-10 text-orange-600" />
//                 What is Slitting?
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-lg">
//                 Slitting is a high-precision metal processing technique that converts wide master coils into multiple narrower coils of exact widths using circular blades.
//               </p>
//               <p className="my-6 border-t border-gray-200" />
//               <p className="text-gray-600 leading-relaxed">
//                 Ideal for automotive, construction, and appliance industries requiring high-strength steel with tight tolerances and superior edge quality.
//               </p>
//             </div>

//             {/* Special Features Card */}
//             <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <Zap className="w-8 h-8" />
//                 Advanced Features
//               </h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-orange-200 flex-shrink-0 mt-0.5" />
//                   <span className="font-medium">Spare slitter head for offline setup</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-orange-200 flex-shrink-0 mt-0.5" />
//                   <span className="font-medium">Shimless tooling for rapid changeovers</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-orange-200 flex-shrink-0 mt-0.5" />
//                   <span className="font-medium">Vertical scrap winders for clean operation</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right: Capabilities Grid */}
//           <div className="lg:col-span-2">
//             <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center lg:text-left">
//               Our <span className="text-orange-600">Slitting Capabilities</span>
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {capabilities.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
//                 >
//                   <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
//                     <h4 className="text-2xl font-bold flex items-center gap-3">
//                       <Factory className="w-8 h-8" />
//                       {item.plant}
//                     </h4>
//                     <p className="text-orange-100 text-sm mt-1">{item.location}</p>
//                   </div>

//                   <div className="p-6 space-y-4">
//                     {item.slitters.map((slitter, i) => (
//                       <div key={i} className="flex items-start gap-3">
//                         <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
//                           <span className="text-orange-600 font-bold text-sm">{i + 1}</span>
//                         </div>
//                         <p className="text-gray-700 font-medium">{slitter}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Footer */}
//       <div className="bg-gray-900 text-white py-16">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready for Precision-Cut Coils?
//           </h2>
//           <p className="text-xl text-gray-300 mb-10">
//             From 0.2 mm ultra-thin to 6.5 mm heavy gauge — we've got you covered across India.
//           </p>
//           <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
//             Get a Quote Today
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }