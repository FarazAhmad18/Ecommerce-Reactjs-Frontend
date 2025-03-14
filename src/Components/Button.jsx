// src/components/ui/Button.jsx
import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-primary text-white rounded hover:bg-primary transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
