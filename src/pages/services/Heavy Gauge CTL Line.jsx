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

export default function EurocutTitanCTL1750() {
  const [flipped, setFlipped] = useState(null);

  const features = [
    {
      id: 1,
      icon: <Settings className="w-8 h-8" />,
      title: "Heavy-Duty Structural Platform",
      description:
        "Titan CTL 1750 is built for high-strength materials and structural plates. Reinforced frames withstand extreme mechanical loads.",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 2,
      icon: <RotateCw className="w-8 h-8" />,
      title: "High-Torque Decoiling System",
      description:
        "Heavy coil handling mandrels provide stable unwinding with torque-optimised drives.",
      color: "from-orange-500 to-amber-400",
    },
    {
      id: 3,
      icon: <Layers className="w-8 h-8" />,
      title: "Industrial Levelling Technology",
      description:
        "Large-diameter levelling rolls provide deep stress penetration and structural flatness.",
      color: "from-amber-400 to-yellow-500",
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8" />,
      title: "Hydraulic Flying Shear",
      description:
        "Heavy-duty shear ensures distortion-free cutting with clean profiles.",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 5,
      icon: <Gauge className="w-8 h-8" />,
      title: "Vibration Dampening",
      description:
        "Dynamic vibration suppression enhances dimensional accuracy.",
      color: "from-amber-500 to-red-500",
    },
    {
      id: 6,
      icon: <Cpu className="w-8 h-8" />,
      title: "Drive Synchronisation",
      description:
        "Vector drives ensure slip-free movement and smooth operation.",
      color: "from-red-500 to-orange-400",
    },
    {
      id: 7,
      icon: <Shield className="w-8 h-8" />,
      title: "Gauge Compensation",
      description:
        "Smart sensors adjust parameters automatically for thickness variation.",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 8,
      icon: <Package className="w-8 h-8" />,
      title: "Heavy Plate Stacking",
      description:
        "Automated stacking improves safety and plate alignment precision.",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 9,
      icon: <Award className="w-8 h-8" />,
      title: "Industrial Applications",
      description:
        "Ideal for construction, shipbuilding and energy infrastructure.",
      color: "from-amber-500 to-yellow-400",
    },
    {
      id: 10,
      icon: <Leaf className="w-8 h-8" />,
      title: "Durability",
      description:
        "Low maintenance design ensures long lifecycle performance.",
      color: "from-orange-400 to-amber-500",
    },
  ];

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center">

        <motion.img
          src="https://images.pexels.com/photos/36190385/pexels-photo-36190385.jpeg"
          alt="Titan"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-200/40 via-slate-200/10 to-slate-950" />

        <div className="relative z-10 text-center px-5 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
            EUROCUT™
            <br />
            <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
              TITAN CTL 1750
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 mt-4 mb-8">
            Heavy-gauge precision for structural plates
          </p>

          <a
            href="#features"
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-orange-400"
          >
            Explore Features <Play className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Built for Heavy-Duty Power
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const isFlipped = flipped === feature.id;

              return (
                <div
                  key={feature.id}
                  className="perspective cursor-pointer"
                  onClick={() =>
                    setFlipped(isFlipped ? null : feature.id)
                  }
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative w-full min-h-[340px]"
                  >
                    {/* FRONT */}
                    <div
                      style={{ backfaceVisibility: "hidden" }}
                      className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-black mb-6`}>
                        {feature.icon}
                      </div>

                      <div className="text-5xl font-bold text-orange-400/20 mb-3">
                        0{feature.id}
                      </div>

                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>

                    {/* BACK */}
                    <div
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-orange-400/30 rounded-2xl p-6"
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

      {/* perspective utility */}
      <style>
        {`
        .perspective { perspective:1200px }
        `}
      </style>
    </div>
  );
}