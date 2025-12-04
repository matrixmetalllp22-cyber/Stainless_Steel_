import React from "react";
import { motion } from "framer-motion";

/**
 * Flexible, motion-enhanced Button component
 * @param {string} variant - "primary" | "secondary" | "outline" | "ghost"
 * @param {string} size - "sm" | "md" | "lg"
 * @param {boolean} isLoading - Shows loading state
 * @param {ReactNode} children - Button content
 */
export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  className = "",
  children,
  ...props
}) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 active:scale-95 disabled:opacity-50 shadow-md",
    secondary: "bg-orange-100 text-orange-800 hover:bg-orange-200 active:scale-95 disabled:opacity-50",
    outline: "border-2 border-orange-600 text-orange-600 hover:bg-orange-50 active:scale-95 disabled:opacity-50",
    ghost: "text-orange-600 hover:bg-orange-50 active:scale-95 disabled:opacity-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={isLoading || disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          />
          {children}
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
