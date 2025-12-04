import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Tooltip component with motion animations
 */
export default function Tooltip({
  children,
  content,
  position = "top",
  delay = 0.2,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay, duration: 0.2 }}
            className={`
              absolute ${positionClasses[position]}
              bg-gray-900 text-white px-3 py-2 rounded-lg text-sm
              whitespace-nowrap shadow-lg pointer-events-none z-50
            `}
          >
            {content}
            <div className="absolute w-2 h-2 bg-gray-900 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
