
import React, { useState } from "react";
import { motion } from "framer-motion";

/* 1. Raw Filenames */
const logoFiles = [
  "Anjanadri Weld and Fabrications.png",
  "Anupam Aroma Stainless kitchenware.png",
  "BCH Enclosures – Industrial grade stainless enclosures.png",
  "BMM Ispat Ltd.png",
  "Bosch Chassis Systems India.png",
  "Bosch Rexroth company.png",
  "Creators Fab and Interiors – Stainless fabrication.png",
  "EC Box India – Electrical & instrument coating boxes (metal fabrication).png",
  "Electronic & Industrial Equipment Manufacturer.png",
  "Fine Punch Fab Pvt Ltd Precision sheet.png",
  "Hampson Industries Pvt Ltd – engineered goods manufacturing.png",
  "Hi Coat Wires – Stainless product manufacturing.png",
  "Hi-Tec Fabs – Stainless steel fabrication.png",
  "Hitech Laser – laser-cut stainless components.png",
  "Horizon Stainless Steel premium utensil range.png",
  "KIOCL Ltd headquartered mineral.png",
  "Legrand India Pvt Ltd.png",
  "Load Controls India Pvt Ltd.png",
  "Mahesh Distributors (SS products).png",
  "Meddent (stainless surgical products supplier).png",
  "Metline Industries – stainless sheets supplier & processing.png",
  "Ns Automats – precision components.png",
  "Om Sakthi Industries – industrial component parts.png",
  "Pal Engineering Co. – fabricators using SS.png",
  "Pentair  Modutec Ready Panels Pvt Ltd.png",
  "Pentair Technical Products India Pvt Ltd.png",
  "PRK Fabricators Pvt Ltd – Sheet metal & stainless products.png",
  "Rittal India Pvt Ltd.png",
  "RJ Engineering Enterprises – Fabrication & finishing.png",
  "S B Fab Tech – sheet metal & enclosures.png",
  "S. L. V. Engineering – Fabrication & SS product maker.png",
  "Siva Rollers – Stainless steel industrial roller manufacturer.png",
  "SLN Fabricators – Stainless steel tank & CNC precision components.png",
  "Sunvik Steels Pvt Ltd.png",
  "Unilink Enterprises – Stainless fabrication services.png",
  "Veltech Equipments – Industrial metal products.png",
  "Yaskawa India Pvt Ltd.png",
  "semens.png",
  "Hitachi.webp"
];

/* 2. Process Data: Shorten names and format paths */
const clients = logoFiles.map((fileName) => {
  // Clean the name: Remove .png, then take only the part before "–", "-", or "("
  const cleanName = fileName
    .replace(/\.[^/.]+$/, "") 
    .split(/[–\-/(]/)[0] 
    .trim();

  return {
    name: cleanName,
    // Use the literal filename for the path (Vite/React public folder handles this best)
    logo: `/Logos/${fileName}`,
  };
});

/* Duplicate for infinite loop */
const loopData = [...clients, ...clients];

export default function ClientsSlider() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We proudly serve world-class automotive & manufacturing companies
          </p>
        </div>

        {/* ================= SLIDER CONTAINER ================= */}
        <div 
          className="space-y-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Top Row (Left to Right) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-6"
              animate={{ x: paused ? "0%" : ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
            >
              {loopData.map((item, i) => (
                <ClientCard key={`top-${i}`} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Bottom Row (Right to Left) - Visible on Desktop only if preferred */}
          <div className="hidden md:block overflow-hidden">
            <motion.div
              className="flex items-center gap-6"
              animate={{ x: paused ? "0%" : ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
            >
              {[...loopData].reverse().map((item, i) => (
                <ClientCard key={`bottom-${i}`} item={item} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Edge Gradients for smooth fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      </div>
    </section>
  );
}

/* 3. Refined Card Component */
function ClientCard({ item }) {
  return (
    <div className="flex-shrink-0 group">
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 w-40 h-32 lg:w-48 lg:h-40 flex flex-col items-center justify-center">
        
        <div className="w-full h-2/3 flex items-center justify-center overflow-hidden">
          <img
            src={item.logo}
            alt={item.name}
            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            // Fallback for broken images to keep layout consistent
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden text-gray-400 text-xs italic">Logo missing</div>
        </div>

        <p className="text-center mt-3 text-xs font-semibold text-gray-500 group-hover:text-blue-600 transition-colors truncate w-full px-2">
          {item.name}
        </p>
      </div>
    </div>
  );
}