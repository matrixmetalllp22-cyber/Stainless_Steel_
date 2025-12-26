import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
  { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
  { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
  { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
  { name: "Mahindra", logo: "/Logos/Boeing.png" },
  { name: "Hyundai", logo: "/Logos/BEML.png" },
  { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
  { name: "TVS", logo: "/Logos/mg.png" },
  { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
  { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
  { name: "TVS", logo: "/Logos/Siemens.png" },
  { name: "Ashok Leyland", logo: "/Logos/Hitachi.png" },
  { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
  { name: "Ashok Leyland", logo: "/Logos/garuda.png" },
  { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
];

export default function ClientsSlider() {
  return (
    <div className="py-14 bg-white text-center relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Our Esteemed Customers
      </h2>

      <div className="overflow-hidden w-full">
        <motion.div
          className="flex items-center gap-10 sm:gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="shrink-0 p-3 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-24 h-14 sm:w-32 sm:h-16 md:w-36 md:h-20 object-contain mx-auto transition-all duration-500 hover:scale-110 hover:grayscale"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left & Right Fade Gradient */}
      <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-linear-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-linear-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}
