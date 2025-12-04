import React from "react";

/**
 * Badge component for tags, statuses, and labels
 * @param {string} variant - "primary" | "secondary" | "success" | "warning" | "danger"
 * @param {string} size - "sm" | "md" | "lg"
 */
export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const variants = {
    primary: "bg-orange-100 text-orange-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={`
        inline-flex items-center font-semibold rounded-full
        ${variants[variant]} ${sizes[size]} ${className}
      `}
    >
      {children}
    </span>
  );
}
