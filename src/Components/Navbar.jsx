// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaHeart, FaUser, FaBars, FaTimes} from 'react-icons/fa';
import { BsCart } from "react-icons/bs";

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <a href="/">Exclusive</a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 text-basefont-light text-gray-700 ml-6">
          <NavLink to="/" className={({isActive})=>isActive?'text-red-500':''}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'text-red-500':"text-gray-700"}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'text-red-500':''}>Contact</NavLink>
          <NavLink to="/signup" className={({isActive})=>isActive?'text-red-500':''}>Sign Up</NavLink>
        </nav>

        {/* Action Icons */}
        <div className="hidden md:flex items-center space-x-5 text-gray-700 ml-6">
          <FaHeart className="hover:text-red-600 cursor-pointer" />
         {/* <NavLink to="/cart"> <BsCart className="hover:text-red-600 font-bold cursor-pointer" /></NavLink> */}
         <NavLink to="/cart" className="relative">
            <BsCart className="hover:text-red-600 font-bold cursor-pointer text-xl" />
            
            {/* ✅ Cart Count Badge */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cartItems.length}
              </span>
            )}
          </NavLink>
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
          <NavLink to="/" className={({isActive})=>isActive?'text-red-500':''}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'text-red-500':"text-gray-700"}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'text-red-500':''}>Contact</NavLink>
          <NavLink to="/signup" className={({isActive})=>isActive?'text-red-500':''}>Sign Up</NavLink>

          {/* Icons */}
          <div className="flex space-x-5 pt-4 border-t text-lg">
            <FaHeart className="hover:text-red-600 cursor-pointer" />
            <BsCart className="hover:text-red-600 cursor-pointer" />
            <FaUser className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
