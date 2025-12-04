import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Animated section component that reveals on scroll
 */
export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) {
  const directionVariants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      initial={directionVariants[direction].initial}
      whileInView={directionVariants[direction].animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
