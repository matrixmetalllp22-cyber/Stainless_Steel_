// import React from "react";

// export default function CutToLength() {
//   const capabilities = [
//     {
//       plant: "Pune plant",
//       slitters: [
//         "Slitter 1: (0.6 – 6.5 mm) × 1870 mm width (Ts up to 1180MPa)",
//         "Slitter 2: (0.2 – 2.3 mm) × 1650 mm width (Ts up to 980MPa)",
//       ],
//     },
//     {
//       plant: "Palwal plant",
//       slitters: [
//         "Slitter 1: (0.25 – 3.2 mm) × 1870 mm width (Ts up to 980MPa)",
//         "Slitter 2: (0.60 – 6.5 mm) × 1870 mm width (Ts up to 1180MPa)",
//       ],
//     },
//     {
//       plant: "Ahmedabad plant",
//       slitters: [
//         "Slitter 1: (0.25 – 2.3) × 1870 mm width (Ts up to 1180MPa)",
//       ],
//     },
//     {
//       plant: "Chennai plant",
//       slitters: [
//         "Slitter 1: (0.20 – 3.2mm) × 1870mm width (Ts up to 1180MPa)",
//       ],
//     },
//   ];

//   return (
//     <section className="w-full font-sans">
//       {/* Hero Section */}
//       <div className="relative h-[300px] md:h-[400px]">
//         <img
//           src="/images/slitting-hero.jpg"
//           alt="Slitting"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
//             Slitting
//           </h1>
//         </div>
//       </div>

//       {/* Description + Capabilities */}
//       <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Left Section */}
//           <div className="lg:col-span-1">
//             <h2 className="text-3xl font-bold text-orange-800 mb-4">Slitting</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Slitting is a metal manufacturing process which is used to cut a
//               wide coil of metal into a number of narrower coils. The wide coils
//               are moved through extremely sharp circular knives, making the
//               cuts. These knives can be arranged in a sequence to make narrower
//               coils of different widths as per the requirement.
//             </p>
//           </div>

//           {/* Right Section */}
//           <div className="lg:col-span-2 bg-black text-white rounded-2xl shadow-lg p-8">
//             <h3 className="text-2xl font-bold mb-6">Capability</h3>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {capabilities.map((item, index) => (
//                 <div key={index}>
//                   <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2">
//                     <span>✔</span> {item.plant}
//                   </h4>
//                   <ul className="space-y-2 text-sm text-gray-300">
//                     {item.slitters.map((s, i) => (
//                       <li key={i}>{s}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* Special Features */}
//             <div className="mt-10">
//               <h3 className="text-2xl font-bold mb-4">Special Features</h3>
//               <ul className="list-disc list-inside text-gray-300 text-sm">
//                 <li>
//                   Spare slitter head for offline setup, shimless tooling, and
//                   vertical scrap winders
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








// import React from "react";

// export default function BlankingLine() {
//   const features = [
//     "Precision Blanking Engineered for High-Speed Production",
//     "High-Accuracy CNC Blanking for Multiple Formats",
//     "High-Speed 3-Way Auto Stacking System",
//     "Advanced 6HI CNC Leveller for Perfect Flatness",
//     "Auto Mode Cutting for Scratch-Free Production",
//     "Wide Material Compatibility",
//     "Coil-to-Blank Processing Efficiency",
//     "Export-Ready Blanks with International Packing Standards",
//     "Ideal for High-Performance Manufacturing"
//   ];

//   const precisionSpecs = [
//     { label: "Length Tolerance", value: "< 0.5 mm" },
//     { label: "Diagonal Tolerance", value: "< 1.0 mm" },
//     { label: "Flatness Precision", value: "< 1.0 mm" }
//   ];

//   const materials = [
//     "Aluminium alloys (1xxx, 3xxx, 5xxx, 6xxx series)",
//     "Stainless steel grades",
//     "GI/GP sheets",
//     "Specialty coated or laminated materials",
//     "OSL, BSL, adhesive-free, and laser-protection films"
//   ];

//   return (
//     <section className="w-full font-sans">
//       {/* Hero Section */}
//       <div className="relative h-[300px] md:h-[400px]">
//         <img
//           src="/images/blanking-hero.jpg"
//           alt="High-Precision Blanking Line"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-orange-500 text-center px-6">
//             HIGH-PRECISION AUTO STACKING & BLANKING SYSTEM
//           </h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Left Description */}
//           <div className="lg:col-span-1">
//             <h2 className="text-3xl font-bold text-orange-800 mb-6">
//               Precision Blanking Redefined
//             </h2>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               Matrix Metals’ Blanking Line is engineered for superior dimensional accuracy, high-speed processing, and seamless production of blanks tailored for automotive, appliance, architectural, and fabrication industries.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               The system ensures perfect geometry, clean edges, and consistent flatness — delivering blanks that meet global OEM quality requirements.
//             </p>
//           </div>

//           {/* Right Features Panel */}
//           <div className="lg:col-span-2 bg-black text-white rounded-2xl shadow-2xl p-8 lg:p-10">
//             <h3 className="text-3xl font-bold mb-8 text-orange-400">
//               Key Features & Capabilities
//             </h3>

//             <div className="grid md:grid-cols-2 gap-8 mb-10">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <span className="text-orange-400 text-xl mt-1">✓</span>
//                   <p className="text-gray-200 font-medium">{feature}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Precision Specs */}
//             <div className="bg-white/10 rounded-xl p-6 border border-white/20">
//               <h4 className="text-xl font-bold text-orange-300 mb-4">Precision Tolerances</h4>
//               <div className="grid grid-cols-3 gap-4 text-center">
//                 {precisionSpecs.map((spec, i) => (
//                   <div key={i}>
//                     <p className="text-2xl font-bold text-orange-400">{spec.value}</p>
//                     <p className="text-sm text-gray-300">{spec.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Materials */}
//             <div className="mt-8">
//               <h4 className="text-xl font-bold text-orange-300 mb-3">Material Compatibility</h4>
//               <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
//                 {materials.map((mat, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <span className="text-orange-500">•</span> {mat}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






import React from "react";

export default function CutToLength() {
  const capabilities = [
    {
      plant: "Pune Plant",
      lines: [
        "Width: up to 2000 mm",
        "Thickness: 0.4 – 12 mm",
        "Length: up to 12,000 mm",
        "Accuracy: ±0.5 mm"
      ]
    },
    {
      plant: "Palwal Plant",
      lines: [
        "Width: up to 1870 mm",
        "Thickness: 0.5 – 16 mm",
        "High-strength steel capable",
        "Auto stacking & packing"
      ]
    },
    {
      plant: "Chennai Plant",
      lines: [
        "South India’s widest CTL: 2000 mm",
        "Thickness: 0.8 – 12 mm",
        "Flying shear technology",
        "Export-grade packing"
      ]
    }
  ];

  return (
    <section className="w-full font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/images/ctl-hero.jpg"
          alt="Cut To Length Line"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 text-center px-6">
            CUT TO LENGTH LINES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Description */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">
              Precision Cut-to-Length Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Matrix Metals operates state-of-the-art Cut-to-Length lines designed to convert metal coils into flat, accurately sized sheets with superior flatness and edge quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ideal for construction, infrastructure, automotive framing, pre-engineered buildings (PEB), and heavy fabrication industries.
            </p>
          </div>

          {/* Right Capabilities Panel */}
          <div className="lg:col-span-2 bg-black text-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <h3 className="text-3xl font-bold mb-8 text-orange-400">
              Plant-wise CTL Capabilities
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {capabilities.map((item, index) => (
                <div key={index}>
                  <h4 className="font-bold text-orange-400 mb-4 text-lg flex items-center gap-2">
                    <span>Location</span> {item.plant}
                  </h4>
                  <ul className="space-y-3 text-gray-200">
                    {item.lines.map((line, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">→</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-orange-300 mb-4">Key Advantages</h4>
              <ul className="grid grid-cols-2 gap-4 text-sm">
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Length accuracy ±0.5 mm</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> 6HI leveling for superior flatness</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Auto stacking & palletizing</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Export-ready packing</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> High-strength steel processing</li>
                <li className="flex items-center gap-2"><span className="text-orange-400">✓</span> Flying & stop-start shear options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}