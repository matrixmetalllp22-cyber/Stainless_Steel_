import React, { useState } from "react";
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
  { name: "Siemens", logo: "/Logos/Siemens.png" },
  { name: "Hitachi", logo: "/Logos/Hitachi.png" },
  { name: "AEQUS", logo: "/Logos/AEQUS.png" },
  { name: "Garuda", logo: "/Logos/garuda.png" },
];

export default function ClientsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  // Handle image load
  const handleImageLoad = (name) => {
    setLoadedImages(prev => ({ ...prev, [name]: true }));
  };

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We proudly serve the world's most respected automotive and manufacturing companies
          </p>
        </div>

        {/* Mobile View - Single Row Slower Scroll */}
        <div className="md:hidden relative">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex items-center gap-10 whitespace-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 80,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{ 
                animationPlayState: isPaused ? "paused" : "running",
                willChange: "transform"
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`mobile-${client.name}-${index}`}
                  className="flex-shrink-0 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-28 h-16">
                    {!loadedImages[client.name] && (
                      <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-md" />
                    )}
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        loadedImages[client.name] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(client.name)}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Desktop View - Two Rows, Opposite Directions */}
        <div className="hidden md:block space-y-8">
          {/* Top Row - Left to Right */}
          <div className="relative">
            <div 
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex items-center gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 50,
                  ease: "linear",
                  repeatType: "loop",
                }}
                style={{ 
                  animationPlayState: isPaused ? "paused" : "running",
                  willChange: "transform"
                }}
              >
                {duplicatedClients.map((client, index) => (
                  <div
                    key={`top-${client.name}-${index}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div className="relative w-40 h-20">
                        {!loadedImages[`top-${client.name}`] && (
                          <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
                        )}
                        <img
                          src={client.logo}
                          alt={client.name}
                          className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-105 ${
                            loadedImages[`top-${client.name}`] ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => handleImageLoad(`top-${client.name}`)}
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {client.name}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className="relative">
            <div 
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex items-center gap-12 whitespace-nowrap"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 60,
                  ease: "linear",
                  repeatType: "loop",
                }}
                style={{ 
                  animationPlayState: isPaused ? "paused" : "running",
                  willChange: "transform"
                }}
              >
                {[...clients].reverse().map((client, index) => (
                  <div
                    key={`bottom-${client.name}-${index}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div className="relative w-40 h-20">
                        {!loadedImages[`bottom-${client.name}`] && (
                          <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
                        )}
                        <img
                          src={client.logo}
                          alt={client.name}
                          className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-105 ${
                            loadedImages[`bottom-${client.name}`] ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => handleImageLoad(`bottom-${client.name}`)}
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {client.name}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Gradients for Desktop */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-32 h-full bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10" />
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-32 h-full bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}