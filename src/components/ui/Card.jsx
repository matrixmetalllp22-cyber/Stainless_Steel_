import React from "react";
import { motion } from "framer-motion";

/**
 * Flexible Card component with motion animations
 * @param {ReactNode} children - Card content
 * @param {string} className - Additional classes
 * @param {boolean} hoverable - Enable hover animation
 */
export default function Card({
  children,
  className = "",
  hoverable = true,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={hoverable ? { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" } : undefined}
      className={`
        bg-white/80 backdrop-blur-md border border-gray-200 
        rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
