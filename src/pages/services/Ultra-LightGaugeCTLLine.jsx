// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Settings,
//   RotateCw,
//   Layers,
//   Zap,
//   Shield,
//   Gauge,
//   Cpu,
//   Package,
//   Award,
//   Leaf,
//   ArrowRight,
//   Play,
//   X,
// } from "lucide-react";

// export default function EurocutPrecisionCTL800() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const features = [
//     {
//       id: 1,
//       icon: <Settings className="w-9 h-9" />,
//       title: "Structural Design & Precision Engineering",
//       description:
//         "EUROCUT™ Precision CTL 800 is engineered for ultra-light gauge materials requiring exceptional dimensional fidelity. The machine frame is stress-relieved and vibration-dampened to ensure geometric stability. Structural rigidity prevents harmonic distortion during high-speed operation. The design guarantees micron-level sheet accuracy. This platform ensures repeatable precision under continuous industrial duty cycles.",
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       id: 2,
//       icon: <RotateCw className="w-9 h-9" />,
//       title: "Intelligent Decoiling System",
//       description:
//         "The servo-regulated decoiler employs torque-balanced mandrels for controlled coil payoff. Adaptive tension control eliminates sudden torque fluctuations. Coil memory and edge distortion are minimised through controlled unwinding dynamics. The system ensures stable strip presentation to downstream modules. This preserves material integrity from the first revolution to the final pass.",
//       color: "from-blue-500 to-cyan-400",
//     },
//     {
//       id: 3,
//       icon: <Layers className="w-9 h-9" />,
//       title: "Multi-Roll Precision Levelling",
//       description:
//         "The high-density levelling cassette neutralises internal stress and crossbow deformation. Independently adjustable work rolls optimise penetration ratios for various alloys. Residual stress redistribution ensures absolute flatness. The leveller architecture prevents micro-waviness and edge curl. The result is metallurgical stress equilibrium and superior sheet planarity.",
//       color: "from-cyan-400 to-teal-400",
//     },
//     {
//       id: 4,
//       icon: <Zap className="w-9 h-9" />,
//       title: "High-Response Servo Shearing Module",
//       description:
//         "The servo-driven shear provides high-speed, burr-free cutting precision. Blade synchronisation ensures distortion-free cut edges. Adaptive stroke control maintains repeat length accuracy. Dynamic cutting geometry prevents material drag and deformation. This ensures production of dimensionally exact sheets with pristine edge quality.",
//       color: "from-blue-400 to-sky-400",
//     },
//     {
//       id: 5,
//       icon: <Shield className="w-9 h-9" />,
//       title: "Surface Integrity Preservation",
//       description:
//         "Non-marking rollers and polymer-coated contact surfaces prevent abrasion. The line is optimised for mirror finish stainless steel and coated metals. Surface friction is reduced through low-contact pressure engineering. Micro-scratching and finish degradation are eliminated. This ensures premium cosmetic quality for high-value applications.",
//       color: "from-cyan-500 to-emerald-400",
//     },
//     {
//       id: 6,
//       icon: <Gauge className="w-9 h-9" />,
//       title: "Dynamic Tension Loop Control",
//       description:
//         "The floating loop system ensures uninterrupted strip flow. Closed-loop tension monitoring prevents micro-elongation. Stress fluctuations are absorbed without affecting material geometry. The system stabilises strip movement at varying speeds. This guarantees uniform stress distribution throughout processing.",
//       color: "from-teal-400 to-cyan-400",
//     },
//     {
//       id: 7,
//       icon: <Cpu className="w-9 h-9" />,
//       title: "Automation & Synchronised Drives",
//       description:
//         "PLC-controlled servo drives harmonise decoiling, levelling, and shearing operations. Adaptive speed algorithms optimise throughput efficiency. Real-time diagnostics ensure operational precision. Intelligent automation reduces operator dependency. The system achieves high productivity with minimal human intervention.",
//       color: "from-blue-500 to-indigo-400",
//     },
//     {
//       id: 8,
//       icon: <Package className="w-9 h-9" />,
//       title: "Sheet Handling & Stacking System",
//       description:
//         "Vacuum or magnetic stacking systems ensure scratch-free sheet handling. Precision alignment ensures uniform stacking geometry. Automated palletisation improves handling safety. Stack integrity is maintained even at high production speeds. This enables efficient downstream logistics and packaging.",
//       color: "from-cyan-400 to-blue-400",
//     },
//     {
//       id: 9,
//       icon: <Award className="w-9 h-9" />,
//       title: "Industrial Application Versatility",
//       description:
//         "The system is ideal for aerospace panels, architectural finishes, and appliance components. It processes stainless steel, aluminium, and coated substrates. Dimensional consistency supports laser cutting and precision fabrication. Surface quality meets premium aesthetic standards. EUROCUT™ enables high-value manufacturing applications.",
//       color: "from-emerald-400 to-cyan-500",
//     },
//     {
//       id: 10,
//       icon: <Leaf className="w-9 h-9" />,
//       title: "Energy Efficiency & Maintenance Philosophy",
//       description:
//         "European design principles prioritise energy optimisation and low friction drives. Modular architecture simplifies maintenance access. Predictive servicing reduces downtime. Component longevity ensures lifecycle cost efficiency. The system delivers sustainable and reliable industrial performance.",
//       color: "from-cyan-500 to-teal-400",
//     },
//   ];

//   return (
//     <div className="bg-slate-950 text-white font-sans antialiased overflow-x-hidden">
//       {/* Floating CTA */}
//       {/* <motion.div
//         className="fixed bottom-8 right-8 z-50"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 1.5, type: "spring" }}
//       >
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-2xl transition-all active:scale-95"
//         >
//           Request Quote <ArrowRight className="w-5 h-5" />
//         </button>
//       </motion.div> */}

//       {/* Modal */}
//       {/* {modalOpen && (
//         <motion.div
//           className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-slate-900 rounded-3xl p-10 max-w-md w-full relative border border-cyan-400/20"
//             initial={{ scale: 0.85, y: 40 }}
//             animate={{ scale: 1, y: 0 }}
//             transition={{ type: "spring", bounce: 0.1 }}
//           >
//             <button
//               onClick={() => setModalOpen(false)}
//               className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
//             >
//               <X size={28} />
//             </button>
//             <h2 className="text-3xl font-bold mb-8 text-center">Get Your Quote</h2>
//             <form className="space-y-5">
//               <input
//                 type="text"
//                 placeholder="Company / Name"
//                 className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Material & Thickness"
//                 className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 rounded-2xl px-6 py-4 outline-none"
//               />
//               <button
//                 type="button"
//                 className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-2xl transition-all"
//               >
//                 Send Request
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       )} */}

//       {/* HERO */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] [background-size:40px_40px] opacity-10" />
        
//         <motion.img
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
//           src="https://images.pexels.com/photos/36190385/pexels-photo-36190385.jpeg"
//           alt="EUROCUT CTL 800"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />

//         <div className="relative z-10 text-center px-6 max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm tracking-widest mb-8"
//           >
//             ULTRA-LIGHT GAUGE • 0.10 – 1.20 mm
//           </motion.div>

//           <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
//             EUROCUT™<br />
//             <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">PRECISION CTL 800</span>
//           </h1>

//           <p className="text-2xl text-zinc-300 mb-10">
//             Micron-level precision for ultra-light gauge materials
//           </p>

//           <motion.a
//             href="#features"
//             className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-cyan-400 transition-all group"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Explore Features
//             <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
//           </motion.a>
//         </div>

//         {/* Scroll prompt */}
//         <motion.div
//           animate={{ y: [0, 12, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[3px] text-zinc-400 flex flex-col items-center"
//         >
//           SCROLL TO DISCOVER
//           <div className="h-8 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent mt-3" />
//         </motion.div>
//       </section>

//       {/* FEATURES SECTION - Flip Cards */}
//       <section id="features" className="py-24 bg-slate-900">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <div className="text-cyan-400 text-sm tracking-[4px] uppercase">10 REASONS TO CHOOSE EUROCUT™</div>
//             <h2 className="text-5xl font-bold tracking-tighter mt-3">Precision Redefined</h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.id}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 whileHover="hover"
//                 className="group h-[420px] perspective-1000 cursor-pointer"
//               >
//                 <motion.div
//                   variants={{
//                     hover: { rotateY: 180 },
//                   }}
//                   transition={{ duration: 0.7, ease: "easeInOut" }}
//                   style={{ transformStyle: "preserve-3d" }}
//                   className="relative w-full h-full"
//                 >
//                   {/* FRONT */}
//                   <div className="absolute inset-0 backface-hidden bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col">
//                     <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-black mb-8`}>
//                       {feature.icon}
//                     </div>
//                     <div className="text-6xl font-bold text-cyan-400/20 mb-4">0{feature.id}</div>
//                     <h3 className="text-2xl font-semibold leading-tight">{feature.title}</h3>
//                     <div className="mt-auto text-cyan-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
//                       Hover to flip <ArrowRight className="w-4 h-4" />
//                     </div>
//                   </div>

//                   {/* BACK */}
//                   <div
//                     className="absolute inset-0 backface-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-3xl p-8 flex flex-col rotateY-180 overflow-auto"
//                   >
//                     <div className="text-cyan-400 mb-6">{feature.icon}</div>
//                     <h3 className="text-xl font-semibold mb-6">{feature.title}</h3>
//                     <p className="text-zinc-300 leading-relaxed text-[15px]">{feature.description}</p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA BAR */}
//       {/* <div className="bg-black py-8 border-t border-b border-cyan-400/10">
//         <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div>
//             <span className="text-cyan-400 font-mono text-sm">800 mm WIDTH • 0.10–1.20 mm THICKNESS</span>
//             <p className="text-2xl font-semibold">Ready for premium production?</p>
//           </div>
//           <button
//             onClick={() => setModalOpen(true)}
//             className="bg-cyan-500 hover:bg-white hover:text-black transition-all px-10 py-4 rounded-2xl font-semibold flex items-center gap-3"
//           >
//             GET A QUOTE TODAY <ArrowRight />
//           </button>
//         </div>
//       </div> */}

//       {/* Custom 3D styles */}
//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1200px;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotateY-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// }
















import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  RotateCw,
  Layers,
  Zap,
  Shield,
  Gauge,
  Cpu,
  Package,
  Award,
  Leaf,
  ArrowRight,
  Play,
} from "lucide-react";

export default function EurocutPrecisionCTL800() {
  const [flipped, setFlipped] = useState(null);

  const features = [
    {
      id: 1,
      icon: <Settings className="w-8 h-8" />,
      title: "Structural Design & Precision Engineering",
      description:
        "EUROCUT™ Precision CTL 800 is engineered for ultra-light gauge materials requiring exceptional dimensional fidelity.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      icon: <RotateCw className="w-8 h-8" />,
      title: "Intelligent Decoiling System",
      description:
        "Servo-regulated decoiler with adaptive tension control ensures stable strip presentation.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 3,
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Roll Precision Levelling",
      description:
        "Levelling cassette neutralises internal stress and ensures superior sheet planarity.",
      color: "from-cyan-400 to-teal-400",
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8" />,
      title: "Servo Shearing Module",
      description:
        "High-speed burr-free cutting with distortion-free edges and exact sheet length.",
      color: "from-blue-400 to-sky-400",
    },
    {
      id: 5,
      icon: <Shield className="w-8 h-8" />,
      title: "Surface Integrity",
      description:
        "Non-marking rollers protect mirror finish and coated materials.",
      color: "from-cyan-500 to-emerald-400",
    },
    {
      id: 6,
      icon: <Gauge className="w-8 h-8" />,
      title: "Dynamic Tension Control",
      description:
        "Floating loop ensures uninterrupted strip flow and uniform stress distribution.",
      color: "from-teal-400 to-cyan-400",
    },
    {
      id: 7,
      icon: <Cpu className="w-8 h-8" />,
      title: "Automation & Drives",
      description:
        "PLC-controlled synchronised drives optimise throughput efficiency.",
      color: "from-blue-500 to-indigo-400",
    },
    {
      id: 8,
      icon: <Package className="w-8 h-8" />,
      title: "Stacking System",
      description:
        "Vacuum or magnetic stacking ensures scratch-free sheet handling.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      id: 9,
      icon: <Award className="w-8 h-8" />,
      title: "Applications",
      description:
        "Ideal for aerospace panels, appliances, architectural finishes and precision fabrication.",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      id: 10,
      icon: <Leaf className="w-8 h-8" />,
      title: "Efficiency & Maintenance",
      description:
        "Energy-optimised European design with predictive maintenance philosophy.",
      color: "from-cyan-500 to-teal-400",
    },
  ];

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center px-4">

        <motion.img
          src="https://images.pexels.com/photos/36190385/pexels-photo-36190385.jpeg"
          alt="Precision CTL"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            EUROCUT™
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              PRECISION CTL 800
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-8">
            Micron-level precision for ultra-light gauge materials
          </p>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:bg-cyan-400 transition"
          >
            Explore Features <Play className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-14 sm:py-20 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Precision Redefined
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {features.map((feature) => {
              const isFlipped = flipped === feature.id;

              return (
                <div
                  key={feature.id}
                  onClick={() => setFlipped(isFlipped ? null : feature.id)}
                  style={{ perspective: 1200 }}
                  className="cursor-pointer"
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative w-full min-h-[320px] sm:min-h-[360px]"
                  >
                    {/* FRONT */}
                    <div
                      style={{ backfaceVisibility: "hidden" }}
                      className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-6 flex flex-col"
                    >
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-black mb-6`}>
                        {feature.icon}
                      </div>

                      <div className="text-4xl sm:text-5xl font-bold text-cyan-400/20 mb-3">
                        {feature.id < 10 ? `0${feature.id}` : feature.id}
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold">
                        {feature.title}
                      </h3>

                      <div className="mt-auto text-cyan-400 text-sm flex items-center gap-2">
                        Tap to flip <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-2xl p-5 sm:p-6 overflow-auto"
                    >
                      <h3 className="font-semibold mb-3">{feature.title}</h3>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}