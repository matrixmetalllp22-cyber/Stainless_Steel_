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
  X,
} from "lucide-react";

export default function EurocutTitanCTL1750() {
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      id: 1,
      icon: <Settings className="w-9 h-9" />,
      title: "Heavy-Duty Structural Platform",
      description:
        "Titan CTL 1750 is built for high-strength materials and structural plates. Reinforced frames withstand extreme mechanical loads. Vibration absorption ensures dimensional stability. The structure maintains alignment under heavy tonnage. It guarantees precision in demanding industrial environments.",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 2,
      icon: <RotateCw className="w-9 h-9" />,
      title: "High-Torque Decoiling System",
      description:
        "Heavy coil handling mandrels provide stable unwinding. Torque-optimised drives control thick material payoff. Load stabilisation prevents sudden strip tension spikes. Controlled decoiling ensures safe handling of high-mass coils. This preserves upstream material integrity.",
      color: "from-orange-500 to-amber-400",
    },
    {
      id: 3,
      icon: <Layers className="w-9 h-9" />,
      title: "Industrial Levelling Technology",
      description:
        "Large-diameter levelling rolls provide deep stress penetration. Hydraulic load control equalises residual stress. Thick plate flattening is achieved without inducing micro fractures. Precision levelling improves downstream fabrication accuracy. The system ensures structural flatness compliance.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      id: 4,
      icon: <Zap className="w-9 h-9" />,
      title: "Hydraulic Flying Shear",
      description:
        "The heavy-duty shear ensures distortion-free cutting. Blade geometry minimises burr formation. Hydraulic actuation provides cutting force stability. Thick plate separation is executed without structural deformation. This ensures clean and accurate cut profiles.",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 5,
      icon: <Gauge className="w-9 h-9" />,
      title: "Vibration Dampening & Stability",
      description:
        "Dynamic vibration suppression enhances cut accuracy. Structural resonance is mitigated through dampening elements. Stable operation ensures precise dimensional output. Mechanical oscillations are eliminated. This improves reliability and machine longevity.",
      color: "from-amber-500 to-red-500",
    },
    {
      id: 6,
      icon: <Cpu className="w-9 h-9" />,
      title: "Drive Synchronisation System",
      description:
        "High torque vector drives ensure slip-free material movement. Speed harmonisation prevents mechanical shock. Load balancing ensures smooth operation. Material feed remains consistent across thickness variations. This enhances operational stability.",
      color: "from-red-500 to-orange-400",
    },
    {
      id: 7,
      icon: <Shield className="w-9 h-9" />,
      title: "Automated Gauge Compensation",
      description:
        "Smart sensors adjust parameters for varying material strengths. Adaptive control ensures consistent cut accuracy. Thickness variation is automatically compensated. Precision is maintained across multiple material grades. This improves production reliability.",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 8,
      icon: <Package className="w-9 h-9" />,
      title: "Heavy Plate Stacking System",
      description:
        "Industrial stacking platforms ensure safe plate handling. Hydraulic lift tables support high load weights. Plate alignment systems maintain stacking precision. Automated handling improves operator safety. This ensures efficient heavy plate management.",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 9,
      icon: <Award className="w-9 h-9" />,
      title: "Industrial Sector Applications",
      description:
        "Ideal for construction, shipbuilding, and energy infrastructure. Supports fabrication of structural components. Ensures precision for heavy engineering projects. Provides reliability for demanding sectors. Titan CTL supports mission-critical industries.",
      color: "from-amber-500 to-yellow-400",
    },
    {
      id: 10,
      icon: <Leaf className="w-9 h-9" />,
      title: "Durability & Lifecycle Performance",
      description:
        "Built to European durability standards. Low maintenance design ensures operational continuity. Heavy-duty components extend service life. Predictive maintenance reduces downtime. Titan CTL delivers long-term industrial reliability.",
      color: "from-orange-400 to-amber-500",
    },
  ];

  return (
    <div className="bg-slate-950 text-white font-sans antialiased overflow-x-hidden">
      {/* Floating CTA */}
      {/* <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <button
          onClick={() => setModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-2xl transition-all active:scale-95"
        >
          Request Quote <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div> */}

      {/* Modal */}
      {modalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/100 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
         
        </motion.div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_0.8px,transparent_1px)] [background-size:40px_40px] opacity-10" />
        
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.pexels.com/photos/36190385/pexels-photo-36190385.jpeg"
          alt="EUROCUT Titan CTL 1750"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-200/40 via-slate-200/10 to-slate-950" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-orange-500/10 border border-orange-400/30 rounded-full text-orange-400 text-sm tracking-widest mb-8"
          >
            HEAVY GAUGE • 1.2 – 6.0 mm
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            EUROCUT™<br />
            <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">TITAN CTL 1750</span>
          </h1>

          <p className="text-2xl text-zinc-300 mb-10">
            Heavy-gauge precision for structural plates and high-strength coils
          </p>

          <motion.a
            href="#features"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-orange-400 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Features
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.a>
        </div>

        {/* Scroll prompt */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[3px] text-zinc-400 flex flex-col items-center"
        >
          SCROLL TO DISCOVER
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-orange-400 to-transparent mt-3" />
        </motion.div>
      </section>

      {/* FEATURES SECTION - Flip Cards */}
      <section id="features" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-orange-400 text-sm tracking-[4px] uppercase">10 REASONS TO CHOOSE TITAN™</div>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">Built for Heavy-Duty Power</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover="hover"
                className="group h-[420px] perspective-1000 cursor-pointer"
              >
                <motion.div
                  variants={{
                    hover: { rotateY: 180 },
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full h-full"
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-black mb-8`}>
                      {feature.icon}
                    </div>
                    <div className="text-6xl font-bold text-orange-400/20 mb-4">0{feature.id}</div>
                    <h3 className="text-2xl font-semibold leading-tight">{feature.title}</h3>
                    <div className="mt-auto text-orange-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Hover to flip <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-orange-400/30 rounded-3xl p-8 flex flex-col rotateY-180 overflow-auto"
                  >
                    <div className="text-orange-400 mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-6">{feature.title}</h3>
                    <p className="text-zinc-300 leading-relaxed text-[15px]">{feature.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAR */}
     

      {/* Custom 3D styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}