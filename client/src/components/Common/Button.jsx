import React from "react";

const Button = ({
  children, // Button text or JSX
  onClick, // Click handler
  type = "button", // HTML button type
  color = "blue", // Tailwind color: 'blue', 'red', 'green', etc.
  size = "md", // 'sm', 'md', 'lg'
  disabled = false,
  className = "", // Extra custom classes
}) => {
  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Color classes
  const colorClasses = {
    light_blue: "bg-blue-400 hover:bg-blue-500 text-white",
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    dark_blue: "bg-blue-600 hover:bg-blue-700 text-white",
    light_red: "bg-red-400 hover:bg-red-500 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
    dark_red: "bg-red-600 hover:bg-red-700 text-white",
    light_green: "bg-green-400 hover:bg-green-500 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
    dark_green: "bg-green-600 hover:bg-green-700 text-white",
    light_gray: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    gray: "bg-gray-500 hover:bg-gray-600 text-white",
    dark_gray: "bg-gray-700 hover:bg-gray-800 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg font-medium transition
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
