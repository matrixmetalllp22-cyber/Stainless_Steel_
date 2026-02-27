// import React, { useState } from "react";
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
// } from "lucide-react";

// export default function EurocutTitanCTL1750() {
//   const [flipped, setFlipped] = useState(null);

//   const features = [
//     {
//       id: 1,
//       icon: <Settings className="w-8 h-8" />,
//       title: "Heavy-Duty Structural Platform",
//       description:
//         "Titan CTL 1750 is built for high-strength materials and structural plates. Reinforced frames withstand extreme mechanical loads.",
//       color: "from-amber-500 to-orange-500",
//     },
//     {
//       id: 2,
//       icon: <RotateCw className="w-8 h-8" />,
//       title: "High-Torque Decoiling System",
//       description:
//         "Heavy coil handling mandrels provide stable unwinding with torque-optimised drives.",
//       color: "from-orange-500 to-amber-400",
//     },
//     {
//       id: 3,
//       icon: <Layers className="w-8 h-8" />,
//       title: "Industrial Levelling Technology",
//       description:
//         "Large-diameter levelling rolls provide deep stress penetration and structural flatness.",
//       color: "from-amber-400 to-yellow-500",
//     },
//     {
//       id: 4,
//       icon: <Zap className="w-8 h-8" />,
//       title: "Hydraulic Flying Shear",
//       description:
//         "Heavy-duty shear ensures distortion-free cutting with clean profiles.",
//       color: "from-orange-500 to-amber-500",
//     },
//     {
//       id: 5,
//       icon: <Gauge className="w-8 h-8" />,
//       title: "Vibration Dampening",
//       description:
//         "Dynamic vibration suppression enhances dimensional accuracy.",
//       color: "from-amber-500 to-red-500",
//     },
//     {
//       id: 6,
//       icon: <Cpu className="w-8 h-8" />,
//       title: "Drive Synchronisation",
//       description:
//         "Vector drives ensure slip-free movement and smooth operation.",
//       color: "from-red-500 to-orange-400",
//     },
//     {
//       id: 7,
//       icon: <Shield className="w-8 h-8" />,
//       title: "Gauge Compensation",
//       description:
//         "Smart sensors adjust parameters automatically for thickness variation.",
//       color: "from-amber-400 to-orange-500",
//     },
//     {
//       id: 8,
//       icon: <Package className="w-8 h-8" />,
//       title: "Heavy Plate Stacking",
//       description:
//         "Automated stacking improves safety and plate alignment precision.",
//       color: "from-orange-500 to-amber-500",
//     },
//     {
//       id: 9,
//       icon: <Award className="w-8 h-8" />,
//       title: "Industrial Applications",
//       description:
//         "Ideal for construction, shipbuilding and energy infrastructure.",
//       color: "from-amber-500 to-yellow-400",
//     },
//     {
//       id: 10,
//       icon: <Leaf className="w-8 h-8" />,
//       title: "Durability",
//       description:
//         "Low maintenance design ensures long lifecycle performance.",
//       color: "from-orange-400 to-amber-500",
//     },
//   ];

//   return (
//     <div className="bg-slate-950 text-white overflow-x-hidden">

//       {/* HERO */}
//       <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center">

//         <motion.img
//           src="https://images.pexels.com/photos/36190385/pexels-photo-36190385.jpeg"
//           alt="Titan"
//           className="absolute inset-0 w-full h-full object-cover"
//           initial={{ scale: 1.08 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
//         />

//         <div className="absolute inset-0 bg-gradient-to-b from-slate-200/40 via-slate-200/10 to-slate-950" />

//         <div className="relative z-10 text-center px-5 max-w-4xl">
//           <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
//             EUROCUT™
//             <br />
//             <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
//               TITAN CTL 1750
//             </span>
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl text-zinc-300 mt-4 mb-8">
//             Heavy-gauge precision for structural plates
//           </p>

//           <a
//             href="#features"
//             className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-orange-400"
//           >
//             Explore Features <Play className="w-5 h-5" />
//           </a>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section id="features" className="py-16 sm:py-24 bg-slate-900">
//         <div className="max-w-7xl mx-auto px-5">

//           <div className="text-center mb-12">
//             <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
//               Built for Heavy-Duty Power
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature) => {
//               const isFlipped = flipped === feature.id;

//               return (
//                 <div
//                   key={feature.id}
//                   className="perspective cursor-pointer"
//                   onClick={() =>
//                     setFlipped(isFlipped ? null : feature.id)
//                   }
//                 >
//                   <motion.div
//                     animate={{ rotateY: isFlipped ? 180 : 0 }}
//                     transition={{ duration: 0.6 }}
//                     style={{ transformStyle: "preserve-3d" }}
//                     className="relative w-full min-h-[340px]"
//                   >
//                     {/* FRONT */}
//                     <div
//                       style={{ backfaceVisibility: "hidden" }}
//                       className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col"
//                     >
//                       <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-black mb-6`}>
//                         {feature.icon}
//                       </div>

//                       <div className="text-5xl font-bold text-orange-400/20 mb-3">
//                         0{feature.id}
//                       </div>

//                       <h3 className="text-lg font-semibold">{feature.title}</h3>
//                     </div>

//                     {/* BACK */}
//                     <div
//                       style={{
//                         backfaceVisibility: "hidden",
//                         transform: "rotateY(180deg)",
//                       }}
//                       className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-orange-400/30 rounded-2xl p-6"
//                     >
//                       <h3 className="font-semibold mb-3">{feature.title}</h3>
//                       <p className="text-zinc-300 text-sm leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* perspective utility */}
//       <style>
//         {`
//         .perspective { perspective:1200px }
//         `}
//       </style>
//     </div>
//   );
// }









import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  RotateCw,
  Layers,
  Zap,
  Gauge,
  Cpu,
  Shield,
  Package,
  Award,
  Leaf,
  X,
  Plus,
  MoveRight
} from "lucide-react";

export default function EurocutTitanCTL1750() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Structural Platform",
      icon: <Settings />,
      desc: "Titan CTL 1750 is built for high-strength materials and structural plates. Reinforced frames withstand extreme mechanical loads during processing.",
      tag: "HEAVY"
    },
    {
      id: 2,
      title: "Decoiling System",
      icon: <RotateCw />,
      desc: "High-torque heavy coil handling mandrels provide stable unwinding with torque-optimised drives for consistent material flow.",
      tag: "TORQUE"
    },
    {
      id: 3,
      title: "Levelling Tech",
      icon: <Layers />,
      desc: "Large-diameter industrial levelling rolls provide deep stress penetration, ensuring superior structural flatness and quality.",
      tag: "FLAT"
    },
    {
      id: 4,
      title: "Flying Shear",
      icon: <Zap />,
      desc: "Hydraulic heavy-duty shear ensures distortion-free cutting with clean profiles even at maximum gauge capacities.",
      tag: "CUT"
    },
    {
      id: 5,
      title: "Vibration Dampening",
      icon: <Gauge />,
      desc: "Dynamic vibration suppression systems enhance dimensional accuracy by eliminating harmonic interference during high-speed runs.",
      tag: "ACCURACY"
    },
    {
      id: 6,
      title: "Drive Sync",
      icon: <Cpu />,
      desc: "Precision vector drives ensure slip-free movement and perfectly synchronized operation across the entire processing line.",
      tag: "SYNC"
    },
    {
      id: 7,
      title: "Gauge Compensation",
      icon: <Shield />,
      desc: "Smart sensor arrays adjust machine parameters automatically to compensate for material thickness variations in real-time.",
      tag: "SMART"
    },
    {
      id: 8,
      title: "Plate Stacking",
      icon: <Package />,
      desc: "Automated heavy plate stacking improves operational safety and ensures perfect alignment for downstream logistics.",
      tag: "LOGISTICS"
    },
    {
      id: 9,
      title: "Industrial Scope",
      icon: <Award />,
      desc: "Optimized for heavy-duty sectors including construction, shipbuilding, and energy infrastructure fabrication.",
      tag: "CORE"
    },
    {
      id: 10,
      title: "Titan Durability",
      icon: <Leaf />,
      desc: "Maintenance-friendly design with wear-resistant components ensures a long lifecycle and high operational reliability.",
      tag: "DURABLE"
    }
  ];

  return (
    <div className="bg-[#0c0c0c] text-stone-100 min-h-screen font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-20 border-b border-stone-800">
        <div className="absolute right-0 top-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-8 h-full">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="border-r border-b border-stone-700" />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-mono tracking-[0.3em] text-sm uppercase">Heavy-Duty CTL Line</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 break-words">
            EUROCUT<span className="text-orange-500 font-light italic">TITAN</span>
          </h1>
          <p className="text-stone-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-12">
            Engineered for high-strength structural plates, the 1750 series delivers 
            unmatched shearing power and precision for heavy-gauge fabrication.
          </p>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Max Width</p>
              <p className="text-3xl font-mono">1750<span className="text-orange-500">MM</span></p>
            </div>
            <div className="w-px h-12 bg-stone-800" />
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Drive System</p>
              <p className="text-3xl font-mono text-orange-500">VECTOR</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MODULAR GRID SECTION */}
      <section className="p-6 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFeature(feature)}
              className="group relative bg-stone-900 border border-stone-800 p-8 cursor-pointer hover:bg-stone-800 transition-all aspect-square flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-orange-500 transition-all">
                <Plus size={20} />
              </div>
              
              <div className="text-orange-500 mb-4 transition-transform group-hover:scale-110">
                {React.cloneElement(feature.icon, { size: 32 })}
              </div>

              <div>
                <span className="text-[10px] font-mono text-stone-500 block mb-2 tracking-tighter">TITAN_REF_{feature.tag}</span>
                <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Decorative "Plate" line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 translate-y-1 group-hover:translate-y-0 transition-transform" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE MODAL */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-end p-0 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={() => setSelectedFeature(null)} />
            <motion.div 
              className="relative w-full max-w-2xl h-full bg-stone-900 border-l border-stone-800 p-12 flex flex-col justify-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-12 right-12 text-stone-500 hover:text-white"
              >
                <X size={32} />
              </button>
              
              <div className="text-orange-500 mb-8">
                {React.cloneElement(selectedFeature.icon, { size: 64 })}
              </div>
              <p className="text-orange-500 font-mono text-sm mb-4 tracking-widest">SYSTEM SPECIFICATION // 0{selectedFeature.id}</p>
              <h2 className="text-5xl font-bold mb-8 uppercase tracking-tighter">{selectedFeature.title}</h2>
              <p className="text-stone-400 text-2xl font-light leading-relaxed mb-12 border-l-4 border-stone-700 pl-8">
                {selectedFeature.desc}
              </p>
              
             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-stone-900 py-24 px-6 border-t border-stone-800 text-center">
        <h3 className="text-4xl font-bold mb-8 tracking-tighter">STRUCTURAL POWER RE-ENGINEERED</h3>
        <p className="text-stone-500 mb-12 max-w-xl mx-auto uppercase text-xs tracking-[0.3em]">
          Shipbuilding • Infrastructure • Heavy Fabrication
        </p>
      </section>

    </div>
  );
}