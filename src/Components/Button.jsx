import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button 
      className={`px-4 py-2 rounded transition duration-300 ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;