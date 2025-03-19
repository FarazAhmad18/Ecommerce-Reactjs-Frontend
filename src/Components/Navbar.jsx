// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <a href="/">Exclusive</a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 ml-6">
          <a href="/" className="hover:text-red-600">Home</a>
          <a href="/about" className="hover:text-red-600">About</a>
          <a href="/contact" className="hover:text-red-600">Contact</a>
          <a href="/signup" className="hover:text-red-600">Sign Up</a>
        </nav>

        {/* Action Icons */}
        <div className="hidden md:flex items-center space-x-5 text-gray-700 ml-6">
          <FaHeart className="hover:text-red-600 cursor-pointer" />
          <FaShoppingCart className="hover:text-red-600 cursor-pointer" />
          <FaUser className="hover:text-red-600 cursor-pointer" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm text-gray-700 font-medium">

          {/* Links */}
          <a href="/" className="block hover:text-red-600">Home</a>
          <a href="/about" className="block hover:text-red-600">About</a>
          <a href="/contact" className="block hover:text-red-600">Contact</a>
          <a href="/signup" className="block hover:text-red-600">Sign Up</a>

          {/* Icons */}
          <div className="flex space-x-5 pt-4 border-t text-lg">
            <FaHeart className="hover:text-red-600 cursor-pointer" />
            <FaShoppingCart className="hover:text-red-600 cursor-pointer" />
            <FaUser className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
